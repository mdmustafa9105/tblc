const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-shots';

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

  close() {
    this.ws.close();
  }
}

async function capture() {
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9229',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
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
        http.get('http://127.0.0.1:9229/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const t = list.find(x => x.type === 'page' && x.url.includes('3000'));
      if (t && t.webSocketDebuggerUrl) {
        targetWs = t.webSocketDebuggerUrl;
        break;
      }
    } catch(e) {}
  }

  const client = new CDPClient(targetWs);
  await client.ready();
  await client.send('Page.enable');
  await new Promise(r => setTimeout(r, 1500));

  const viewports = [
    { name: 'screen-1440-nextjs.png', width: 1440, height: 900 },
    { name: 'screen-1280-nextjs.png', width: 1280, height: 800 },
    { name: 'screen-768-nextjs.png', width: 768, height: 1024 },
    { name: 'screen-390-nextjs.png', width: 390, height: 844 },
    { name: 'screen-360-nextjs.png', width: 360, height: 740 }
  ];

  for (const vp of viewports) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width <= 768
    });
    await new Promise(r => setTimeout(r, 500));
    const shot = await client.send('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(path.join('qa-artifacts', vp.name), buf);
    console.log(`Saved screenshot: ${vp.name}`);
  }

  // Full page 1440 screenshot
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 400));
  const fullShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });
  fs.writeFileSync(path.join('qa-artifacts', 'full-1440-nextjs.png'), Buffer.from(fullShot.data, 'base64'));
  console.log('Saved full-page screenshot: full-1440-nextjs.png');

  client.close();
  chromeProc.kill();
  console.log('Screenshot capture complete!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});

