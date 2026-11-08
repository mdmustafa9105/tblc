const { spawn } = require('child_process');
const http = require('http');

async function measurePerf() {
  console.log('=== MEASURING REAL WEB VITALS & RUNTIME PERFORMANCE ===\n');

  const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9227',
    '--remote-debugging-address=127.0.0.1',
    '--user-data-dir=D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-perf',
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
        http.get('http://127.0.0.1:9227/json/list', res => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve(JSON.parse(d)));
        }).on('error', reject);
      });
      const t = list.find(x => x.url.includes('3000'));
      if (t && t.webSocketDebuggerUrl) {
        targetWs = t.webSocketDebuggerUrl;
        break;
      }
    } catch(e) {}
  }

  const ws = new WebSocket(targetWs);
  await new Promise(r => ws.onopen = r);

  const send = (method, params = {}) => new Promise(resolve => {
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
  await send('Performance.enable');
  await new Promise(r => setTimeout(r, 2000));

  const cdpMetrics = await send('Performance.getMetrics');
  
  const navMetrics = await send('Runtime.evaluate', {
    expression: `(() => {
      const paint = performance.getEntriesByType('paint');
      const fp = paint.find(p => p.name === 'first-paint')?.startTime;
      const fcp = paint.find(p => p.name === 'first-contentful-paint')?.startTime;
      const nav = performance.getEntriesByType('navigation')[0];
      
      return JSON.stringify({
        firstPaintMs: Math.round(fp || 0),
        firstContentfulPaintMs: Math.round(fcp || 0),
        domInteractiveMs: Math.round(nav ? nav.domInteractive : 0),
        domContentLoadedMs: Math.round(nav ? nav.domContentLoadedEventEnd : 0),
        loadCompleteMs: Math.round(nav ? nav.loadEventEnd : 0),
        transferSizeKb: Math.round((nav ? nav.transferSize : 0) / 1024),
      }, null, 2);
    })()`,
    returnByValue: true
  });

  console.log('Real Performance Timing (via Navigation & Paint Timing API):');
  console.log(navMetrics.result.value);

  const keyMetrics = {};
  cdpMetrics.metrics.forEach(m => {
    if (['JSHeapUsedSize', 'LayoutCount', 'RecalcStyleCount', 'Nodes'].includes(m.name)) {
      keyMetrics[m.name] = m.value;
    }
  });
  console.log('\nKey Runtime Metrics:');
  console.log(JSON.stringify(keyMetrics, null, 2));

  ws.close();
  chromeProc.kill();
  console.log('\n=== PERFORMANCE MEASUREMENT COMPLETE ===');
}

measurePerf().catch(console.error);

