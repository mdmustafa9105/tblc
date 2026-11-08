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

  // 1. Test ProofStrip Partner Grid
  console.log('1. Testing ProofStrip Partner Grid:');
  const proof = await client.eval(`(() => {
    const items = document.querySelectorAll('section[aria-label*="Publishing Partners"] .grid > div');
    const partners = Array.from(items).map(i => i.querySelector('h3')?.textContent.trim());
    return { count: items.length, sample: partners.slice(0, 5) };
  })()`);
  console.log('   Result:', proof);

  // 2. Test Audio Mute / Unmute
  console.log('\n2. Testing Video Audio Mute / Unmute:');
  const audio = await client.eval(`(async () => {
    const btn = document.querySelector('button[aria-label*="video"]');
    if (!btn) return { error: 'Video button not found' };
    const labelBefore = btn.getAttribute('aria-label');
    btn.click();
    await new Promise(r => setTimeout(r, 100));
    const labelAfter = btn.getAttribute('aria-label');
    return { labelBefore, labelAfter };
  })()`);
  console.log('   Result:', audio);

  // 3. Test FAQ Accordion Toggles
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

  // 4. Test Booking Modal Lifecycle & Form Submission
  console.log('\n4. Testing Booking Modal & Form Submission:');
  const modalTest = await client.eval(`(async () => {
    // Click 'Discuss Your Book' button in header
    const navBtn = Array.from(document.querySelectorAll('header button')).find(b => b.textContent.includes('Discuss Your Book'));
    if (!navBtn) return { error: 'Discuss Your Book button not found' };
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
