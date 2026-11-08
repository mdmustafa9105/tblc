'use client';
import React, { useEffect, useRef } from 'react';

const TYPOGRAPHY_FRAGMENTS = [
  'BOOK LAUNCH',
  'BOOKTOK',
  'READER DISCOVERY',
  'PUBLISHING',
  'STORYTELLING',
  'AUTHOR BRAND',
  'CAMPAIGNS',
  'READERS',
];

type Point = { x: number; y: number };

export const HeroBookWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cssW = 0;
    let cssH = 0;
    let frame = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = container.clientWidth;
      cssH = container.clientHeight;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    // Deterministic stardust so resizing does not reshuffle the composition.
    const seeded = (n: number) => {
      const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    const STAR_COUNT = 260;
    const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
      t: seeded(i + 1),
      spread: (seeded(i + 9.3) - 0.5) * 170,
      speed: 0.00035 + seeded(i + 4.7) * 0.0007,
      size: 0.5 + seeded(i + 2.1) * 2,
      alpha: 0.18 + seeded(i + 7.4) * 0.7,
      gold: seeded(i + 5.6) > 0.35,
      phase: seeded(i + 11.2) * Math.PI * 2,
    }));

    const fragments = TYPOGRAPHY_FRAGMENTS.map((text, i) => ({
      text,
      t: 0.18 + i * 0.105,
      speed: 0.00028 + (i % 3) * 0.00008,
      offset: ((i % 3) - 1) * 26,
      size: 10 + (i % 2) * 2,
      phase: i * 0.9,
    }));

    const wavePoint = (t: number): Point => {
      const p0 = { x: -0.06 * cssW, y: 0.92 * cssH };
      const p1 = { x: 0.32 * cssW, y: 1.02 * cssH };
      const p2 = { x: 0.6 * cssW, y: 0.82 * cssH };
      const p3 = { x: 1.08 * cssW, y: 0.02 * cssH };

      const u = 1 - t;
      const uu = u * u;
      const tt = t * t;

      const wobbleX = Math.sin(time * 0.55 + t * 4.2) * 9;
      const wobbleY = Math.cos(time * 0.5 + t * 3.4) * 7;

      return {
        x: u * uu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + tt * t * p3.x + wobbleX,
        y: u * uu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + tt * t * p3.y + wobbleY,
      };
    };

    const drawBook = (cx: number, cy: number, scale: number) => {
      const bw = scale * 0.46;
      const bh = scale * 0.31;
      const lift = Math.sin(time * 0.8) * 6;

      ctx.save();
      ctx.translate(cx, cy + lift);

      // Ambient shadow / floor glow
      const shadow = ctx.createRadialGradient(0, bh * 0.62, 4, 0, bh * 0.62, bw * 1.15);
      shadow.addColorStop(0, 'rgba(0,0,0,0.9)');
      shadow.addColorStop(0.45, 'rgba(216,168,78,0.12)');
      shadow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = shadow;
      ctx.beginPath();
      ctx.ellipse(0, bh * 0.62, bw * 1.15, bh * 0.42, 0, 0, Math.PI * 2);
      ctx.fill();

      // Warm page light
      const glow = ctx.createRadialGradient(0, -bh * 0.1, 4, 0, -bh * 0.1, scale * 0.52);
      glow.addColorStop(0, 'rgba(255,244,214,0.5)');
      glow.addColorStop(0.28, 'rgba(232,190,116,0.22)');
      glow.addColorStop(0.65, 'rgba(216,168,78,0.08)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, -bh * 0.1, scale * 0.52, 0, Math.PI * 2);
      ctx.fill();

      // Hardcover case, left and right
      ctx.beginPath();
      ctx.moveTo(0, bh * 0.18);
      ctx.lineTo(-bw * 1.02, -bh * 0.06);
      ctx.lineTo(-bw * 0.97, -bh * 0.92);
      ctx.lineTo(0, -bh * 0.7);
      ctx.closePath();
      ctx.fillStyle = '#0a0908';
      ctx.fill();
      ctx.strokeStyle = 'rgba(216,168,78,0.4)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, bh * 0.18);
      ctx.lineTo(bw * 1.02, -bh * 0.06);
      ctx.lineTo(bw * 0.97, -bh * 0.92);
      ctx.lineTo(0, -bh * 0.7);
      ctx.closePath();
      ctx.fillStyle = '#0f0d0a';
      ctx.fill();
      ctx.strokeStyle = 'rgba(216,168,78,0.5)';
      ctx.stroke();

      // Page block edges
      const stack = Math.max(3, Math.round(scale / 90));
      for (let i = 0; i < stack; i++) {
        const off = (i / stack) * bh * 0.03;
        ctx.strokeStyle = `rgba(231,219,196,${0.16 + (i / stack) * 0.1})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-bw * 0.95, -bh * 0.08 + off);
        ctx.lineTo(-bw * 0.9, -bh * 0.84 + off);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bw * 0.95, -bh * 0.08 + off);
        ctx.lineTo(bw * 0.9, -bh * 0.84 + off);
        ctx.stroke();
      }

      // Left page
      const left = ctx.createLinearGradient(-bw, 0, 0, 0);
      left.addColorStop(0, '#cfc2a8');
      left.addColorStop(0.55, '#f6eeda');
      left.addColorStop(1, '#e2d4b8');
      ctx.beginPath();
      ctx.moveTo(0, bh * 0.12);
      ctx.bezierCurveTo(-bw * 0.34, bh * 0.06, -bw * 0.7, -bh * 0.06, -bw * 0.93, -bh * 0.14);
      ctx.lineTo(-bw * 0.89, -bh * 0.84);
      ctx.bezierCurveTo(-bw * 0.64, -bh * 0.74, -bw * 0.3, -bh * 0.62, 0, -bh * 0.66);
      ctx.closePath();
      ctx.fillStyle = left;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Right page
      const right = ctx.createLinearGradient(0, 0, bw, 0);
      right.addColorStop(0, '#e2d4b8');
      right.addColorStop(0.45, '#f6eeda');
      right.addColorStop(1, '#cfc2a8');
      ctx.beginPath();
      ctx.moveTo(0, bh * 0.12);
      ctx.bezierCurveTo(bw * 0.34, bh * 0.06, bw * 0.7, -bh * 0.06, bw * 0.93, -bh * 0.14);
      ctx.lineTo(bw * 0.89, -bh * 0.84);
      ctx.bezierCurveTo(bw * 0.64, -bh * 0.74, bw * 0.3, -bh * 0.62, 0, -bh * 0.66);
      ctx.closePath();
      ctx.fillStyle = right;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.stroke();

      // Gilded spine crease
      ctx.beginPath();
      ctx.moveTo(0, bh * 0.14);
      ctx.lineTo(0, -bh * 0.68);
      ctx.strokeStyle = 'rgba(216,168,78,0.85)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Printed text impressions
      ctx.strokeStyle = 'rgba(94,82,64,0.26)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const y = -bh * 0.52 + i * bh * 0.08;
        ctx.beginPath();
        ctx.moveTo(-bw * 0.74, y);
        ctx.lineTo(-bw * 0.16, y - 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bw * 0.16, y - 4);
        ctx.lineTo(bw * 0.74, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, cssW, cssH);
      const isMobile = cssW < 768;

      const px = (pointer.current.x - 0.5) * 24;
      const py = (pointer.current.y - 0.5) * 18;

      // Luminous dust following the current
      stars.forEach((star) => {
        const t = (star.t + star.speed * time * 60) % 1;
        const pt = wavePoint(t);
        const spread = star.spread * (0.55 + Math.sin(t * Math.PI) * 0.55);
        const sx = pt.x + spread * 0.85 + px * 0.25;
        const sy = pt.y + spread * 0.55 + py * 0.25;
        const edge = Math.sin(t * Math.PI);
        const alpha = star.alpha * edge * (0.75 + Math.sin(time * 1.6 + star.phase) * 0.25);
        if (alpha <= 0.04) return;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.gold
          ? `rgba(232,190,116,${alpha})`
          : `rgba(255,255,255,${alpha * 0.85})`;
        ctx.fill();
      });

      // Ribbon strokes
      const ribbons = [
        { offset: 0, width: 2.4, alpha: 0.9 },
        { offset: 14, width: 1.2, alpha: 0.5 },
        { offset: -16, width: 1, alpha: 0.35 },
      ];

      ribbons.forEach((ribbon) => {
        ctx.beginPath();
        for (let i = 0; i <= 90; i++) {
          const t = i / 90;
          const pt = wavePoint(t);
          const wave = Math.sin(t * 7 + time * 0.9) * ribbon.offset;
          const x = pt.x + wave;
          const y = pt.y + Math.cos(t * 6 + time * 0.7) * ribbon.offset * 0.6;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const grad = ctx.createLinearGradient(0, cssH * 0.85, cssW, cssH * 0.1);
        grad.addColorStop(0, 'rgba(216,168,78,0)');
        grad.addColorStop(0.32, `rgba(216,168,78,${0.38 * ribbon.alpha})`);
        grad.addColorStop(0.6, `rgba(255,228,168,${0.72 * ribbon.alpha})`);
        grad.addColorStop(0.84, `rgba(255,255,255,${0.32 * ribbon.alpha})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = ribbon.width;
        ctx.stroke();
      });

      // Typographic current
      fragments.forEach((frag) => {
        const t = (frag.t + frag.speed * time * 60) % 1;
        const pt = wavePoint(t);
        if (pt.x < 0 || pt.x > cssW + 40) return;
        if (isMobile && (pt.y < cssH * 0.3 || pt.y > cssH * 0.8)) return;
        if (!isMobile && pt.x < cssW * 0.38) return;

        const next = wavePoint(Math.min(t + 0.02, 1));
        const angle = Math.atan2(next.y - pt.y, next.x - pt.x);
        const opacity = Math.sin(t * Math.PI);
        if (opacity <= 0.06) return;

        ctx.save();
        ctx.translate(pt.x + px * 0.3, pt.y + frag.offset + py * 0.3);
        ctx.rotate(angle);
        ctx.font = `500 ${frag.size}px Switzer, Inter, system-ui, sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(255,242,214,${opacity * 0.9})`;
        ctx.shadowColor = 'rgba(216,168,78,0.85)';
        ctx.shadowBlur = 8;
        ctx.fillText(frag.text, 0, 0);
        ctx.restore();
      });

      // The floating open book
      const bookX = isMobile ? cssW * 0.5 : cssW * 0.7 + px * 0.5;
      const bookY = (isMobile ? cssH * 0.6 : cssH * 0.66) + py * 0.5;
      const bookScale = isMobile
        ? Math.min(cssW * 0.78, 300)
        : Math.min(cssW * 0.42, 620);

      drawBook(bookX, bookY, bookScale);

      if (!reduceMotion) {
        time += 0.016;
        frame = requestAnimationFrame(draw);
      }
    };

    draw();

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.current = {
        x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
      };
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };

    container.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none overflow-hidden"
    >
      {/* Column guides */}
      <div className="absolute inset-0 flex justify-center opacity-[0.07]">
        <div className="grid h-full w-[calc(100%-24px)] max-w-shell grid-cols-4 border-x border-white sm:w-[calc(100%-64px)] lg:grid-cols-6 xl:w-[calc(100%-240px)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="border-r border-white/60 last:border-r-0" />
          ))}
        </div>
      </div>

      <canvas ref={canvasRef} className="block h-full w-full" />

      <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-transparent opacity-80" />
    </div>
  );
};
