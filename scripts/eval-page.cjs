const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-eval';

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1; this.callbacks = new Map();
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error); else resolve(msg.result);
      }
    };
  }
  async ready() { if (this.ws.readyState === WebSocket.OPEN) return; return new Promise(r => this.ws.onopen = r); }
  send(method, params = {}) { return new Promise((resolve, reject) => { const id = this.id++; this.callbacks.set(id, { resolve, reject }); this.ws.send(JSON.stringify({ id, method, params })); }); }
  close() { this.ws.close(); }
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

// usage: node eval-page.cjs <url> <jsfile> <outfile> [width] [height]
async function main() {
  const url = process.argv[2];
  const jsFile = process.argv[3];
  const outFile = process.argv[4];
  const width = Number(process.argv[5] || 1440);
  const height = Number(process.argv[6] || 900);
  const chrome = spawn(CHROME_PATH, ['--headless=new','--remote-debugging-port=9233','--remote-debugging-address=127.0.0.1',`--user-data-dir=${USER_DATA_DIR}`,'--no-first-run','--no-default-browser-check','--disable-gpu','--hide-scrollbars', url]);
  let ws = null;
  for (let i = 0; i < 40; i++) {
    await sleep(500);
    try {
      const list = await new Promise((res, rej) => http.get('http://127.0.0.1:9233/json/list', r => { let d=''; r.on('data',c=>d+=c); r.on('end',()=>res(JSON.parse(d))); }).on('error', rej));
      const t = list.find(x => x.type === 'page');
      if (t && t.webSocketDebuggerUrl) { ws = t.webSocketDebuggerUrl; break; }
    } catch(e) {}
  }
  if (!ws) throw new Error('no target');
  const c = new CDPClient(ws);
  await c.ready();
  await c.send('Page.enable');
  await c.send('Runtime.enable');
  await c.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width <= 768 });
  await sleep(2000);
  await c.send('Page.reload', { ignoreCache: false });
  await sleep(5000);
  const expr = fs.readFileSync(jsFile, 'utf8');
  const res = await c.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  if (res.exceptionDetails) console.error(JSON.stringify(res.exceptionDetails, null, 2));
  fs.writeFileSync(outFile, JSON.stringify(res.result.value, null, 2));
  console.log('wrote ' + outFile);
  c.close(); chrome.kill();
}
main().catch(e => { console.error(e); process.exit(1); });
