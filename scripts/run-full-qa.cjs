const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-qa';

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
    return new Promise((resolve) => {
      this.ws.onopen = resolve;
    });
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

async function run() {
  console.log('=== STARTING AUTOMATED PART E FULL QA SUITE ===\n');
  
  // 1. Launch Chrome
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'http://localhost:3000/'
  ]);

  let targetWs = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const list = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9223/json/list', res => {
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

  if (!targetWs) {
    console.error('Failed to obtain Chrome page target WebSocket');
    chromeProc.kill();
    process.exit(1);
  }

  const client = new CDPClient(targetWs);
  await client.ready();
  await client.send('Page.enable');
  await client.send('DOM.enable');
  await client.send('Runtime.enable');

  // Allow initial navigation from about:blank to localhost:4173 to settle
  await new Promise(r => setTimeout(r, 2000));

  const results = {
    viewports: {},
    links: null,
    headings: null,
    touchTargets: null,
    interactions: {},
    defects: []
  };

  // --- TEST A: VIEWPORT RESPONSIVENESS & OVERFLOW ---
  console.log('--- Testing Responsive Viewports & Horizontal Overflow ---');
  const viewports = [
    { name: '1440px Desktop', width: 1440, height: 900 },
    { name: '1280px Laptop', width: 1280, height: 800 },
    { name: '768px Tablet', width: 768, height: 1024 },
    { name: '390px Mobile', width: 390, height: 844 },
    { name: '360px Small Mobile', width: 360, height: 740 },
  ];

  for (const vp of viewports) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 768,
    });
    await new Promise(r => setTimeout(r, 200));

    const check = await client.eval(`(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const overflow = scrollW > innerW;
      
      // Find overflowing elements if any
      const offending = [];
      if (overflow) {
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > innerW + 1) {
            offending.push({
              tag: el.tagName,
              id: el.id,
              className: el.className ? el.className.toString().substring(0, 50) : '',
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            });
          }
        });
      }
      return { scrollW, innerW, overflow, offending: offending.slice(0, 5) };
    })()`);

    results.viewports[vp.name] = check;
    if (check.overflow) {
      console.log('❌ [FAIL] ' + vp.name + ': Horizontal overflow detected! scrollWidth=' + check.scrollW + 'px, innerWidth=' + check.innerW + 'px');
      console.log('   Offending elements:', check.offending);
      results.defects.push({
        type: 'Horizontal Overflow',
        viewport: vp.name,
        details: check.offending
      });
    } else {
      console.log('✅ [PASS] ' + vp.name + ': Clean layout (scrollWidth=' + check.scrollW + 'px, innerWidth=' + check.innerW + 'px)');
    }
  }

  // Reset to 1440px
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  // --- TEST B: HEADING HIERARCHY & LANDMARKS ---
  console.log('\n--- Auditing Semantic Headings & Landmarks ---');
  results.headings = await client.eval(`(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
      level: parseInt(h.tagName.substring(1)),
      tag: h.tagName,
      text: h.textContent.trim().substring(0, 60),
    }));
    const h1Count = headings.filter(h => h.level === 1).length;
    const landmarks = {
      header: !!document.querySelector('header'),
      nav: !!document.querySelector('nav'),
      main: !!document.querySelector('main#main-content'),
      footer: !!document.querySelector('footer'),
    };
    return { headings, h1Count, landmarks };
  })()`);

  console.log('H1 Count: ' + results.headings.h1Count + ' (Target: exactly 1)');
  if (results.headings.h1Count === 1) {
    console.log('✅ [PASS] Exactly one H1 present');
  } else {
    console.log('❌ [FAIL] H1 Count is ' + results.headings.h1Count);
    results.defects.push({ type: 'Heading Hierarchy', issue: 'H1 count is ' + results.headings.h1Count });
  }
  console.log('Landmarks:', results.headings.landmarks);

  // --- TEST C: ANCHOR LINKS VERIFICATION ---
  console.log('\n--- Verifying Internal Anchor Links ---');
  results.links = await client.eval(`(() => {
    const links = Array.from(document.querySelectorAll('a[href^="#"]')).map(a => {
      const href = a.getAttribute('href');
      const targetId = href.substring(1);
      const targetExists = targetId ? !!document.getElementById(targetId) : false;
      return { href, text: a.textContent.trim().substring(0, 30), targetExists };
    });
    return links;
  })()`);

  const brokenLinks = results.links.filter(l => !l.targetExists && l.href !== '#');
  if (brokenLinks.length === 0) {
    console.log('✅ [PASS] All ' + results.links.length + ' anchor links point to valid targets!');
  } else {
    console.log('❌ [FAIL] Found ' + brokenLinks.length + ' broken anchor link(s):', brokenLinks);
    results.defects.push({ type: 'Broken Links', links: brokenLinks });
  }

  // --- TEST D: TOUCH TARGET AUDIT (SC 2.5.8 & 48x48px target) ---
  console.log('\n--- Auditing Interactive Target Sizes (48x48px specification) ---');
  results.touchTargets = await client.eval(`(() => {
    const items = Array.from(document.querySelectorAll('button, a, input, select, textarea')).map(el => {
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        text: (el.textContent || el.getAttribute('aria-label') || el.name || '').trim().substring(0, 30),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        meets44: rect.width >= 44 && rect.height >= 44,
        meets48: rect.width >= 48 && rect.height >= 48,
        visible: rect.width > 0 && rect.height > 0 && window.getComputedStyle(el).display !== 'none'
      };
    }).filter(i => i.visible);

    const under44 = items.filter(i => !i.meets44);
    const under48 = items.filter(i => !i.meets48);
    return { total: items.length, under44Count: under44.length, under48Count: under48.length, under44Sample: under44.slice(0, 8) };
  })()`);

  console.log('Total visible interactive elements: ' + results.touchTargets.total);
  console.log('Elements under 44x44px: ' + results.touchTargets.under44Count);
  console.log('Elements under 48x48px: ' + results.touchTargets.under48Count);
  if (results.touchTargets.under44Sample.length > 0) {
    console.log('Sample elements below 44x44px:', results.touchTargets.under44Sample);
  }

  // --- TEST E: FUNCTIONAL INTERACTION AUDIT ---
  console.log('\n--- Testing Interactive Components ---');

  // E1. Marquee pause/resume
  const marqueeTest = await client.eval(`(() => {
    const pauseBtn = document.querySelector('button[aria-label*="marquee"]');
    if (!pauseBtn) return { error: 'Pause button not found' };
    const labelBefore = pauseBtn.getAttribute('aria-label');
    pauseBtn.click();
    const labelAfter = pauseBtn.getAttribute('aria-label');
    const track = document.querySelector('.marquee-track');
    const animState = window.getComputedStyle(track).animationPlayState;
    return { labelBefore, labelAfter, animState };
  })()`);
  console.log('1. Marquee Pause Control:', marqueeTest);
  results.interactions.marquee = marqueeTest;

  // E2. FAQ Accordion Toggle
  const faqTest = await client.eval(`(() => {
    const questions = document.querySelectorAll('#faq button[aria-expanded]');
    if (questions.length === 0) return { error: 'FAQ buttons not found' };
    const first = questions[0];
    const stateBefore = first.getAttribute('aria-expanded');
    first.click();
    const stateAfter = first.getAttribute('aria-expanded');
    return { totalFaqs: questions.length, stateBefore, stateAfter };
  })()`);
  console.log('2. FAQ Accordion:', faqTest);
  results.interactions.faq = faqTest;

  // E3. Testimonials Carousel
  const testSlider = await client.eval(`(() => {
    const prevBtn = document.querySelector('button[aria-label="Previous testimonial"]');
    const nextBtn = document.querySelector('button[aria-label="Next testimonial"]');
    const quoteEl = document.querySelector('#faq blockquote');
    const quoteBefore = quoteEl ? quoteEl.textContent.substring(0, 30) : '';
    if (nextBtn) nextBtn.click();
    const quoteAfter = quoteEl ? quoteEl.textContent.substring(0, 30) : '';
    return { hasControls: !!(prevBtn && nextBtn), quoteBefore, quoteAfter, changed: quoteBefore !== quoteAfter };
  })()`);
  console.log('3. Testimonials Slider:', testSlider);
  results.interactions.testimonials = testSlider;

  // E4. Booking Modal Lifecycle
  const bookingTest = await client.eval(`(() => {
    const bookBtn = document.querySelector('header nav button');
    if (!bookBtn) return { error: 'Navbar booking button not found' };
    bookBtn.click();
    const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
    const isOpen = !!modal;
    const title = modal ? modal.querySelector('h2')?.textContent : '';
    const hasInputs = modal ? modal.querySelectorAll('input, select, textarea').length : 0;
    return { isOpen, title, inputCount: hasInputs };
  })()`);
  console.log('4. Booking Modal Open State:', bookingTest);
  results.interactions.booking = bookingTest;

  // Write detailed findings to disk
  fs.writeFileSync('d:\\TheBookLaunchCompany\\qa-artifacts\\qa-results.json', JSON.stringify(results, null, 2));
  console.log('\nSaved full JSON results to d:\\TheBookLaunchCompany\\qa-artifacts\\qa-results.json');

  client.close();
  chromeProc.kill();
  console.log('\n=== QA SUITE RUN COMPLETE ===');
}

run().catch(err => {
  console.error('QA Runner error:', err);
  process.exit(1);
});
