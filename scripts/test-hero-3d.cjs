const { spawn } = require('child_process');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-hero-test';

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
    return new Promise((resolve) => (this.ws.onopen = resolve));
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

async function runHero3DTests() {
  console.log('=== RUNNING COMPREHENSIVE HERO 3D & CANVAS VERIFICATION ===\n');

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9233',
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--window-size=1440,900',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    'http://localhost:3000/',
  ]);

  let targetWs = null;
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 400));
    try {
      const list = await new Promise((resolve, reject) => {
        http
          .get('http://127.0.0.1:9233/json/list', (res) => {
            let d = '';
            res.on('data', (c) => (d += c));
            res.on('end', () => resolve(JSON.parse(d)));
          })
          .on('error', reject);
      });
      const pageTarget = list.find((t) => t.type === 'page' && t.url.includes('3000'));
      if (pageTarget && pageTarget.webSocketDebuggerUrl) {
        targetWs = pageTarget.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const client = new CDPClient(targetWs);
  await client.ready();
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('DOM.enable');

  await new Promise((r) => setTimeout(r, 1500));

  // 1. Verify Canvas & 3D Elements exist
  console.log('1. Checking Hero DOM & Canvas Elements:');
  const domCheck = await client.eval(`(() => {
    const canvas = document.querySelector('canvas[aria-hidden="true"]');
    const bookContainer = document.querySelector('[aria-label*="Interactive 3D Hardcover Book"]');
    const bookEl = bookContainer ? bookContainer.querySelector('[style*="preserve-3d"]') : null;
    const headline = document.querySelector('#hero h1')?.textContent.trim();
    const sub = document.querySelector('#hero p')?.textContent.trim();
    const primaryCta = document.querySelector('#hero button')?.textContent.trim();
    const secondaryCta = document.querySelector('#hero a[href*="work"], #hero a[href*="showcase"]')?.textContent.trim();

    return {
      hasCanvas: !!canvas,
      canvasDimensions: canvas ? { width: canvas.width, height: canvas.height } : null,
      has3DBookContainer: !!bookContainer,
      has3DBookObject: !!bookEl,
      headline: headline?.replace(/\\s+/g, ' '),
      subtitle: sub,
      primaryCta,
      secondaryCta,
    };
  })()`);
  console.log('   Result:', domCheck);

  // 2. Verify Floating Animation over 500ms
  console.log('\n2. Verifying Book Floating Motion:');
  const floatCheck = await client.eval(`(async () => {
    const book = document.querySelector('[aria-label*="Interactive 3D Hardcover Book"] [style*="preserve-3d"]');
    if (!book) return { error: 'Book not found' };
    const t1 = book.style.transform;
    await new Promise(r => setTimeout(r, 400));
    const t2 = book.style.transform;
    await new Promise(r => setTimeout(r, 400));
    const t3 = book.style.transform;
    return {
      t1,
      t2,
      t3,
      isAnimated: t1 !== t2 && t2 !== t3,
    };
  })()`);
  console.log('   Result:', floatCheck);

  // 3. Verify Mouse Interaction Tilt
  console.log('\n3. Testing Cursor-Responsive 3D Tilt:');
  const mouseTiltCheck = await client.eval(`(async () => {
    const book = document.querySelector('[aria-label*="Interactive 3D Hardcover Book"] [style*="preserve-3d"]');
    if (!book) return { error: 'Book not found' };
    
    // Dispatch mousemove to top-right
    window.dispatchEvent(new MouseEvent('mousemove', {
      clientX: window.innerWidth * 0.9,
      clientY: window.innerHeight * 0.1,
      bubbles: true
    }));
    await new Promise(r => setTimeout(r, 300));
    const tiltRight = book.style.transform;

    // Dispatch mousemove to bottom-left
    window.dispatchEvent(new MouseEvent('mousemove', {
      clientX: window.innerWidth * 0.1,
      clientY: window.innerHeight * 0.9,
      bubbles: true
    }));
    await new Promise(r => setTimeout(r, 300));
    const tiltLeft = book.style.transform;

    // Dispatch mouseleave (return towards resting position)
    document.dispatchEvent(new Event('mouseleave'));
    await new Promise(r => setTimeout(r, 400));
    const returnResting = book.style.transform;

    return {
      tiltRight,
      tiltLeft,
      returnResting,
      respondsToCursor: tiltRight !== tiltLeft,
    };
  })()`);
  console.log('   Result:', mouseTiltCheck);

  // 4. Verify 3D Book Faces Construction
  console.log('\n4. Verifying Physical 3D Book Faces (Spine, Pages, Front, Back):');
  const facesCheck = await client.eval(`(() => {
    const book = document.querySelector('[aria-label*="Interactive 3D Hardcover Book"] [style*="preserve-3d"]');
    if (!book) return { error: 'Book not found' };

    const faces = Array.from(book.children);
    const hasFront = faces.some(f => f.textContent.includes('The Book Launch Company'));
    const hasSpine = faces.some(f => f.style.transform.includes('rotateY(-90deg)'));
    const hasForeEdge = faces.some(f => f.style.transform.includes('rotateY(90deg)'));
    const hasTopEdge = faces.some(f => f.style.transform.includes('rotateX(90deg)'));
    const hasBottomEdge = faces.some(f => f.style.transform.includes('rotateX(-90deg)'));

    return {
      faceCount: faces.length,
      hasFront,
      hasSpine,
      hasForeEdge,
      hasTopEdge,
      hasBottomEdge,
    };
  })()`);
  console.log('   Result:', facesCheck);

  // 5. Test Secondary CTA Smooth Scroll
  console.log('\n5. Testing Secondary CTA Scroll Action:');
  const ctaCheck = await client.eval(`(async () => {
    const seeWorkBtn = document.querySelector('#hero a[href*="showcase"], #hero a[href*="work"]');
    if (!seeWorkBtn) return { error: 'See Our Work button not found' };

    const initialY = window.scrollY;
    seeWorkBtn.click();
    await new Promise(r => setTimeout(r, 600));
    const afterY = window.scrollY;

    return {
      initialY,
      afterY,
      scrolledDown: afterY > initialY,
    };
  })()`);
  console.log('   Result:', ctaCheck);

  // 6. Test Mobile Viewport Overflow
  console.log('\n6. Checking Mobile Responsiveness (390px):');
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await new Promise((r) => setTimeout(r, 500));

  const mobileCheck = await client.eval(`(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    const heroH1 = document.querySelector('#hero h1');
    const book = document.querySelector('[aria-label*="Interactive 3D Hardcover Book"]');

    return {
      docWidth,
      winWidth,
      hasHorizontalOverflow: docWidth > winWidth,
      heroH1Visible: !!heroH1 && heroH1.getBoundingClientRect().height > 0,
      bookVisible: !!book && book.getBoundingClientRect().height > 0,
    };
  })()`);
  console.log('   Result:', mobileCheck);

  client.close();
  chromeProc.kill();
  console.log('\n=== HERO 3D VERIFICATION COMPLETE ===');
}

runHero3DTests().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
