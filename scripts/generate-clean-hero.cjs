const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const USER_DATA_DIR = 'D:\\TheBookLaunchCompany\\qa-artifacts\\chrome-profile-gen';

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
    '--remote-debugging-port=9231',
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
        http.get('http://127.0.0.1:9231/json/list', res => {
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

  const evalResult = await client.send('Runtime.evaluate', {
    expression: `
      (async () => {
        const img = new Image();
        img.src = 'data:image/jpeg;base64,${imgBase64}';
        await new Promise(r => img.onload = r);

        const canvas = document.createElement('canvas');
        canvas.width = 1920; // Upscale to 1920x1070 for crystal clear retina desktop display!
        canvas.height = 1070;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw original scaled up
        ctx.drawImage(img, 0, 0, 1920, 1070);

        // 1. Clean Top Navigation Mockup
        // The top 120px had "Atomik Books" and nav links
        // We restore the smooth dark ceiling with the golden light beam
        const topGrad = ctx.createLinearGradient(0, 0, 0, 130);
        topGrad.addColorStop(0, 'rgba(1, 4, 5, 0.98)');
        topGrad.addColorStop(0.6, 'rgba(1, 4, 5, 0.7)');
        topGrad.addColorStop(1, 'rgba(1, 4, 5, 0)');
        ctx.fillStyle = topGrad;
        ctx.fillRect(0, 0, 1920, 130);

        // 2. Clean Left Side Text (x: 0 to 700 in 1920 scale, y: 250 to 900)
        // In the original, the left side has dummy text "The New Frontier..."
        // Behind it is a smooth deep black/obsidian space (#010405 to #050a0d) with faint golden warmth at the very bottom
        const leftGrad = ctx.createLinearGradient(0, 0, 750, 0);
        leftGrad.addColorStop(0, '#010405');
        leftGrad.addColorStop(0.7, '#010405');
        leftGrad.addColorStop(0.9, 'rgba(1, 4, 5, 0.85)');
        leftGrad.addColorStop(1, 'rgba(1, 4, 5, 0)');
        ctx.fillStyle = leftGrad;
        ctx.fillRect(0, 100, 750, 850);

        // Add subtle golden ambient reflection in the bottom-left curve (matches the golden beam passing through)
        const ambGrad = ctx.createRadialGradient(250, 950, 20, 250, 950, 600);
        ambGrad.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
        ambGrad.addColorStop(0.5, 'rgba(180, 130, 40, 0.05)');
        ambGrad.addColorStop(1, 'rgba(1, 4, 5, 0)');
        ctx.fillStyle = ambGrad;
        ctx.fillRect(0, 500, 750, 500);

        // Add fine golden stardust particles on the left side
        for (let i = 0; i < 90; i++) {
          const sx = Math.random() * 700;
          const sy = 150 + Math.random() * 800;
          const sz = 0.5 + Math.random() * 1.8;
          const sa = 0.15 + Math.random() * 0.55;
          ctx.fillStyle = Math.random() > 0.4 ? 'rgba(235, 195, 110, ' + sa + ')' : 'rgba(255, 255, 255, ' + (sa*0.7) + ')';
          ctx.beginPath();
          ctx.arc(sx, sy, sz, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3. Clean Right Side Text (x: 1280 to 1850, y: 480 to 760 in 1920 scale)
        // We smooth over the text while preserving the flowing golden diagonal light beam!
        const rightGrad = ctx.createLinearGradient(1250, 450, 1920, 780);
        // The beam flows from top-right to bottom-left at ~30 deg
        for (let y = 480; y <= 760; y += 4) {
          const t = (y - 480) / 280;
          const alpha = Math.sin(t * Math.PI) * 0.88; // Peak opacity in center of text area
          const beamGlow = ctx.createLinearGradient(1250, y, 1920, y);
          beamGlow.addColorStop(0, 'rgba(1, 4, 5, 0)');
          beamGlow.addColorStop(0.2, 'rgba(140, 90, 25, ' + (alpha * 0.35) + ')');
          beamGlow.addColorStop(0.5, 'rgba(215, 160, 60, ' + (alpha * 0.55) + ')');
          beamGlow.addColorStop(0.8, 'rgba(160, 105, 30, ' + (alpha * 0.4) + ')');
          beamGlow.addColorStop(1, 'rgba(1, 4, 5, 0)');
          ctx.fillStyle = beamGlow;
          ctx.fillRect(1250, y - 2, 650, 4);
        }

        // Re-add crisp golden bokeh on the right
        for (let i = 0; i < 40; i++) {
          const bx = 1300 + Math.random() * 550;
          const by = 470 + Math.random() * 320;
          const bz = 1 + Math.random() * 3.5;
          const ba = 0.2 + Math.random() * 0.6;
          ctx.fillStyle = 'rgba(245, 210, 130, ' + ba + ')';
          ctx.beginPath();
          ctx.arc(bx, by, bz, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4. Retouch the Book Cover Title:
        // The book center is at approx x: 1040, y: 490 (in 1920 scale)
        // Angle: rotated ~ -16 degrees
        ctx.save();
        ctx.translate(1040, 480);
        ctx.rotate(-15.5 * Math.PI / 180);

        // The title "THE NEW FRONTIER" was centered at local x: 0, y: -70 to -20
        // "ROBERT J. THORNE" at y: 130 to 160
        // We paint an authentic, matching dark obsidian leather patch over the old title
        const patchGrad = ctx.createLinearGradient(-160, -90, 160, 10);
        patchGrad.addColorStop(0, '#101215');
        patchGrad.addColorStop(0.5, '#14161a');
        patchGrad.addColorStop(1, '#0e1013');
        ctx.fillStyle = patchGrad;
        ctx.beginPath();
        ctx.roundRect(-155, -95, 310, 95, 6);
        ctx.fill();

        // Also patch author area at the bottom
        ctx.fillStyle = '#0f1114';
        ctx.beginPath();
        ctx.roundRect(-120, 128, 240, 40, 4);
        ctx.fill();

        // Now draw elegant, authentic gold-embossed typography for The Book Launch Company!
        // Gold gradient:
        const gold = ctx.createLinearGradient(-140, -80, 140, 0);
        gold.addColorStop(0, '#D4AF37');
        gold.addColorStop(0.3, '#FFF2B2');
        gold.addColorStop(0.6, '#D4AF37');
        gold.addColorStop(0.85, '#AA8022');
        gold.addColorStop(1, '#E6C65A');

        ctx.fillStyle = gold;
        ctx.textAlign = 'center';

        // Title line 1: THE BOOK
        ctx.font = 'bold 26px "Cinzel", "Playfair Display", "Times New Roman", serif';
        ctx.letterSpacing = '0.22em';
        ctx.fillText('THE BOOK', 0, -56);

        // Title line 2: LAUNCH COMPANY
        ctx.font = 'bold 21px "Cinzel", "Playfair Display", "Times New Roman", serif';
        ctx.letterSpacing = '0.24em';
        ctx.fillText('LAUNCH COMPANY', 0, -26);

        // Sub-motto in fine gold foil:
        ctx.font = '500 10.5px "Inter", "Helvetica", sans-serif';
        ctx.letterSpacing = '0.3em';
        ctx.fillStyle = 'rgba(235, 205, 120, 0.85)';
        ctx.fillText('LAUNCH THE BOOK · BUILD THE AUTHOR', 0, 5);

        // Author/Edition area:
        ctx.font = '600 11px "Inter", "Helvetica", sans-serif';
        ctx.letterSpacing = '0.26em';
        ctx.fillStyle = 'rgba(215, 175, 75, 0.9)';
        ctx.fillText('NEW-MEDIA LITERARY AGENCY', 0, 150);

        ctx.restore();

        return canvas.toDataURL('image/jpeg', 0.92);
      })()
    `,
    awaitPromise: true,
    returnByValue: true
  });

  const base64Data = evalResult.result.value.replace(/^data:image\/jpeg;base64,/, '');
  fs.writeFileSync('D:\\TheBookLaunchCompany\\public\\images\\hero-clean-book.jpg', Buffer.from(base64Data, 'base64'));
  console.log('Saved clean hero image! Size:', fs.statSync('D:\\TheBookLaunchCompany\\public\\images\\hero-clean-book.jpg').size);

  client.close();
  chromeProc.kill();
}

run().catch(console.error);
