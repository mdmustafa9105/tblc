const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-ref';
const URL = process.argv[2] || 'https://www.atomikgrowth.com/';
const PREFIX = process.argv[3] || 'ref';

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
  close() { this.ws.close(); }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function capture() {
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9231',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--hide-scrollbars',
    URL
  ]);

  let targetWs = null;
  for (let i = 0; i < 40; i++) {
    await sleep(500);
    try {
      const list = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9231/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const t = list.find(x => x.type === 'page');
      if (t && t.webSocketDebuggerUrl) { targetWs = t.webSocketDebuggerUrl; break; }
    } catch (e) {}
  }
  if (!targetWs) throw new Error('Could not attach to Chrome');

  const client = new CDPClient(targetWs);
  await client.ready();
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await sleep(4000);

  // Remove cookie banners / chat widgets that obscure the design.
  await client.send('Runtime.evaluate', {
    expression: `
      (() => {
        const kill = ['[id*="cookie" i]','[class*="cookie" i]','[id*="hubspot" i]','[id*="intercom" i]','[class*="intercom" i]'];
        kill.forEach(s => document.querySelectorAll(s).forEach(el => el.remove()));
        window.scrollTo(0,0);
      })();
    `
  });

  const viewports = [
    { name: `${PREFIX}-1440.png`, width: 1440, height: 900, mobile: false },
    { name: `${PREFIX}-1280.png`, width: 1280, height: 800, mobile: false },
    { name: `${PREFIX}-768.png`, width: 768, height: 1024, mobile: true },
    { name: `${PREFIX}-390.png`, width: 390, height: 844, mobile: true },
  ];

  for (const vp of viewports) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile
    });
    await sleep(1200);
    const shot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join('qa-artifacts', vp.name), Buffer.from(shot.data, 'base64'));
    console.log('Saved', vp.name);
  }

  // Tall full-page capture at 1440
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440, height: 900, deviceScaleFactor: 1, mobile: false
  });
  await sleep(600);
  const metrics = await client.send('Page.getLayoutMetrics');
  const height = Math.min(Math.ceil(metrics.cssContentSize.height), 30000);
  console.log('Page height', height);
  const fullShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: 1440, height, scale: 1 }
  });
  fs.writeFileSync(path.join('qa-artifacts', `${PREFIX}-full-1440.png`), Buffer.from(fullShot.data, 'base64'));
  console.log('Saved', `${PREFIX}-full-1440.png`);

  // Full page at 390
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 390, height: 844, deviceScaleFactor: 1, mobile: true
  });
  await sleep(600);
  const m2 = await client.send('Page.getLayoutMetrics');
  const h2 = Math.min(Math.ceil(m2.cssContentSize.height), 30000);
  const fullShot2 = await client.send('Page.captureScreenshot', {
    format: 'png', captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: 390, height: h2, scale: 1 }
  });
  fs.writeFileSync(path.join('qa-artifacts', `${PREFIX}-full-390.png`), Buffer.from(fullShot2.data, 'base64'));
  console.log('Saved', `${PREFIX}-full-390.png`);

  client.close();
  chromeProc.kill();
}

capture().catch(err => { console.error(err); process.exit(1); });
