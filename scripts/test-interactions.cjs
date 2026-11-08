const { spawn } = require('child_process');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-interact';

async function testInteractions() {
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'http://localhost:5173/'
  ]);

  let targetWs = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const list = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9224/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const pageTarget = list.find(t => t.type === 'page' && t.url.includes('localhost'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        targetWs = pageTarget.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!targetWs) {
    console.error('Target not found');
    chromeProc.kill();
    return;
  }

  const ws = new WebSocket(targetWs);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const reqId = id++;
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === reqId) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: reqId, method, params }));
  });

  const evaluate = async (fnStr) => {
    const res = await send('Runtime.evaluate', {
      expression: `(async () => {
        const fn = ${fnStr};
        const val = await fn();
        return JSON.stringify(val);
      })()`,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result && res.result.value ? JSON.parse(res.result.value) : null;
  };

  console.log('Testing interactive state transitions...');

  // 1. Marquee pause/resume
  const marquee = await evaluate(`async () => {
    const btn = document.querySelector('button[aria-label*="marquee"]');
    const label1 = btn.getAttribute('aria-label');
    btn.click();
    await new Promise(r => setTimeout(r, 100));
    const label2 = btn.getAttribute('aria-label');
    const track = document.querySelector('.marquee-track');
    const animState = window.getComputedStyle(track).animationPlayState;
    btn.click(); // restore
    return { label1, label2, animState };
  }`);
  console.log('Marquee test:', marquee);

  // 2. FAQ Accordion
  const faq = await evaluate(`async () => {
    const btn = document.querySelectorAll('#faq button[aria-expanded]')[0];
    const before = btn.getAttribute('aria-expanded');
    btn.click();
    await new Promise(r => setTimeout(r, 100));
    const after = btn.getAttribute('aria-expanded');
    return { before, after };
  }`);
  console.log('FAQ toggle test:', faq);

  // 3. Testimonial Slider
  const testSlider = await evaluate(`async () => {
    const next = document.querySelector('button[aria-label="Next testimonial"]');
    const quote = document.querySelector('#faq blockquote');
    const q1 = quote ? quote.textContent.trim().substring(0, 40) : '';
    if (next) next.click();
    await new Promise(r => setTimeout(r, 100));
    const q2 = quote ? quote.textContent.trim().substring(0, 40) : '';
    return { q1, q2, changed: q1 !== q2 };
  }`);
  console.log('Testimonials slider test:', testSlider);

  // 4. Booking Modal Open & Close
  const modal = await evaluate(`async () => {
    const btn = document.querySelector('button[class*="bg-coral"]');
    btn.click();
    await new Promise(r => setTimeout(r, 150));
    const dialog = document.querySelector('[role="dialog"][aria-modal="true"]');
    const title = dialog ? dialog.querySelector('h2')?.textContent : '';
    
    // Close it with Escape key
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await new Promise(r => setTimeout(r, 150));
    const dialogAfterEsc = document.querySelector('[role="dialog"][aria-modal="true"]');
    
    return { openedTitle: title, closedOnEscape: !dialogAfterEsc };
  }`);
  console.log('Modal test:', modal);

  ws.close();
  chromeProc.kill();
}

testInteractions().catch(console.error);
