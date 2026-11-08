const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-interactive';

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  async ready() {
    if (this.ws.readyState === WebSocket.OPEN) return;
    return new Promise(resolve => this.ws.onopen = resolve);
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result ? res.result.value : null;
  }

  close() {
    this.ws.close();
  }
}

async function runInteractiveTests() {
  console.log('=== RUNNING LIVE INTERACTIVE COMPONENT AUDIT ===\n');

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9225',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--window-size=1440,900',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'http://localhost:3000/'
  ]);

  let targetWs = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const list = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9225/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const pageTarget = list.find(t => t.type === 'page' && t.url.includes('3000'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        targetWs = pageTarget.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const client = new CDPClient(targetWs);
  await client.ready();
  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');

  await new Promise(r => setTimeout(r, 2000));

  // 1. Test Marquee Pause / Resume
  console.log('1. Testing Cover Marquee Pause / Resume:');
  const marquee = await client.eval(`(async () => {
    const btn = document.querySelector('button[aria-label*="marquee"]');
    const labelBefore = btn.getAttribute('aria-label');
    btn.click();
    await new Promise(r => setTimeout(r, 100));
    const labelAfter = btn.getAttribute('aria-label');
    const track = document.querySelector('.marquee-track');
    const isPaused = track.style.animationPlayState === 'paused' || window.getComputedStyle(track).animationPlayState === 'paused';
    btn.click(); // resume
    return { labelBefore, labelAfter, isPaused };
  })()`);
  console.log('   Result:', marquee);

  // 2. Test Audio Mute / Unmute
  console.log('\n2. Testing Video Audio Mute / Unmute:');
  const audio = await client.eval(`(async () => {
    const btn = document.querySelector('button[aria-label*="video"]');
    const labelBefore = btn.getAttribute('aria-label');
    btn.click();
    await new Promise(r => setTimeout(r, 100));
    const labelAfter = btn.getAttribute('aria-label');
    return { labelBefore, labelAfter };
  })()`);
  console.log('   Result:', audio);

  // 3. Test FAQ Accordion
  console.log('\n3. Testing FAQ Accordion Toggles:');
  const faq = await client.eval(`(async () => {
    const btns = Array.from(document.querySelectorAll('#faq button[aria-expanded]'));
    const initialExpanded = btns.map(b => b.getAttribute('aria-expanded'));
    
    // Toggle 2nd question
    btns[1].click();
    await new Promise(r => setTimeout(r, 100));
    const afterClick2 = btns.map(b => b.getAttribute('aria-expanded'));
    
    // Toggle 1st question
    btns[0].click();
    await new Promise(r => setTimeout(r, 100));
    const afterClick1 = btns.map(b => b.getAttribute('aria-expanded'));
    
    return { count: btns.length, initialExpanded, afterClick2, afterClick1 };
  })()`);
  console.log('   Result:', faq);

  // 4. Test Testimonials Carousel
  console.log('\n4. Testing Testimonials Carousel:');
  const testimonials = await client.eval(`(async () => {
    const quoteEl = document.querySelector('#faq blockquote');
    const q1 = quoteEl ? quoteEl.textContent.trim().substring(0, 35) : '';
    const nextBtn = document.querySelector('button[aria-label="Next testimonial"]');
    if (nextBtn) nextBtn.click();
    await new Promise(r => setTimeout(r, 100));
    const q2 = quoteEl ? quoteEl.textContent.trim().substring(0, 35) : '';
    const prevBtn = document.querySelector('button[aria-label="Previous testimonial"]');
    if (prevBtn) prevBtn.click();
    await new Promise(r => setTimeout(r, 100));
    const q3 = quoteEl ? quoteEl.textContent.trim().substring(0, 35) : '';
    return { q1, q2, q3, advanced: q1 !== q2, returned: q1 === q3 };
  })()`);
  console.log('   Result:', testimonials);

  // 5. Test How It Works Stepper
  console.log('\n5. Testing How It Works Stepper:');
  const stepper = await client.eval(`(async () => {
    const steps = Array.from(document.querySelectorAll('#how-it-works [role="button"]'));
    const titleEl = document.querySelector('#how-it-works h4');
    const initialTitle = titleEl ? titleEl.textContent : '';
    if (steps[2]) steps[2].click();
    await new Promise(r => setTimeout(r, 100));
    const step3Title = titleEl ? titleEl.textContent : '';
    return { stepCount: steps.length, initialTitle, step3Title, changed: initialTitle !== step3Title };
  })()`);
  console.log('   Result:', stepper);

  // 6. Test Booking Modal Lifecycle & Form Submission
  console.log('\n6. Testing Booking Modal & Form Submission:');
  const modalTest = await client.eval(`(async () => {
    // Click 'Book a call' button in header
    const navBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Book a call'));
    if (!navBtn) return { error: 'Book a call button not found' };
    navBtn.click();
    await new Promise(r => setTimeout(r, 150));
    
    const dialog = document.querySelector('[role="dialog"][aria-modal="true"]');
    const modalTitle = dialog ? dialog.querySelector('h2')?.textContent : '';
    
    // Fill in inputs
    const nameInput = document.querySelector('#booking-name');
    const emailInput = document.querySelector('#booking-email');
    const titleInput = document.querySelector('#booking-title');
    const notesInput = document.querySelector('#booking-notes');
    
    if (nameInput) {
      nameInput.value = 'Elena Vance';
      nameInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (emailInput) {
      emailInput.value = 'elena@authorvance.com';
      emailInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (titleInput) {
      titleInput.value = 'The Silent Hollow';
      titleInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (notesInput) {
      notesInput.value = 'Testing automated QA submission for debut psychological thriller.';
      notesInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Submit form
    const submitBtn = dialog.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.click();

    return { modalOpened: !!dialog, modalTitle };
  })()`);
  console.log('   Modal opened & submitted:', modalTest);

  // Wait 700ms for submission transition
  await new Promise(r => setTimeout(r, 700));

  const confirmationTest = await client.eval(`(() => {
    const confirmationH3 = document.querySelector('[role="dialog"] h3')?.textContent;
    const whatNextHeading = document.querySelector('[role="dialog"] .font-mono')?.textContent;
    const stepsCount = document.querySelectorAll('[role="dialog"] ol li').length;
    
    return { confirmationH3, whatNextHeading, stepsCount };
  })()`);
  console.log('   Confirmation screen state:', confirmationTest);

  client.close();
  chromeProc.kill();
  console.log('\n=== LIVE INTERACTIVE AUDIT COMPLETE ===');
}

runInteractiveTests().catch(err => {
  console.error('Interactive tests error:', err);
  process.exit(1);
});
