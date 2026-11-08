const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-cleaner';

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

async function run() {
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9230',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'about:blank'
  ]);

  let targetWs = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const list = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9230/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const t = list.find(x => x.type === 'page');
      if (t && t.webSocketDebuggerUrl) {
        targetWs = t.webSocketDebuggerUrl;
        break;
      }
    } catch(e) {}
  }

  const client = new CDPClient(targetWs);
  await client.ready();
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  const imgBase64 = fs.readFileSync('D:\\TheBookLaunchCompany\\public\\images\\hero-reference-original.jpg').toString('base64');

  // Retouch script running in Chrome
  const evalResult = await client.send('Runtime.evaluate', {
    expression: `
      (async () => {
        const img = new Image();
        img.src = 'data:image/jpeg;base64,${imgBase64}';
        await new Promise(r => img.onload = r);

        const canvas = document.createElement('canvas');
        canvas.width = img.width; // 1024
        canvas.height = img.height; // 571
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // 1. Let's see: Left side text is from x: 100 to 360, y: 170 to 420.
        // In the original image, behind this text is deep black (#010405) with a subtle diagonal ambient glow.
        // Let's sample colors on left side:
        const p1 = ctx.getImageData(50, 200, 1, 1).data;
        const p2 = ctx.getImageData(50, 400, 1, 1).data;
        console.log('Left bg colors:', p1, p2);

        // Return dimensions
        return { w: img.width, h: img.height, leftColor: Array.from(p1) };
      })()
    `,
    awaitPromise: true,
    returnByValue: true
  });

  console.log('Eval result:', evalResult.result.value);

  client.close();
  chromeProc.kill();
  if (fs.existsSync(USER_DATA_DIR)) {
    fs.rmSync(USER_DATA_DIR, { recursive: true, force: true });
  }
}

run().catch(console.error);

