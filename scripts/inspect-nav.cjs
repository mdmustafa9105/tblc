const { spawn } = require('child_process');
const http = require('http');

async function inspectNav() {
  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9226',
    '--remote-debugging-address=127.0.0.1',
    '--user-data-dir=D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-nav',
    '--window-size=360,800',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'http://localhost:4173/'
  ]);

  let targetWs = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const list = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9226/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const t = list.find(x => x.url.includes('4173'));
      if (t && t.webSocketDebuggerUrl) {
        targetWs = t.webSocketDebuggerUrl;
        break;
      }
    } catch(e) {}
  }

  const ws = new WebSocket(targetWs);
  await new Promise(r => ws.onopen = r);

  const send = (method, params = {}) => new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Page.enable');
  await new Promise(r => setTimeout(r, 2000));

  const navInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('header');
      const nav = document.querySelector('header nav');
      const buttons = Array.from(nav.querySelectorAll('button')).map(b => ({
        text: b.textContent,
        ariaLabel: b.getAttribute('aria-label'),
        rect: b.getBoundingClientRect(),
        display: window.getComputedStyle(b).display,
        visibility: window.getComputedStyle(b).visibility,
      }));
      return JSON.stringify({
        innerWidth: window.innerWidth,
        headerRect: header.getBoundingClientRect(),
        navRect: nav.getBoundingClientRect(),
        buttons,
        navHtml: nav.outerHTML
      }, null, 2);
    })()`,
    returnByValue: true
  });

  console.log(navInfo.result.value);

  ws.close();
  chromeProc.kill();
}

inspectNav();

