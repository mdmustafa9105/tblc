'use client';
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  phase: number;
  pulseSpeed: number;
  isBokeh: boolean;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
}

export const GoldenWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let prefersReducedMotion = false;

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Visibility Observer to prevent background CPU usage
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initialize 55 golden particles along diagonal flow
    const particleCount = 55;
    const particles: Particle[] = [];

    const initParticle = (): Particle => {
      // Spawn along diagonal corridor (from ~60%-95% width at top, to ~5%-40% width at bottom)
      const t = Math.random();
      const startX = width * 0.85;
      const startY = height * 0.1;
      const endX = width * 0.15;
      const endY = height * 0.9;

      const corridorX = startX + (endX - startX) * t;
      const corridorY = startY + (endY - startY) * t;

      // Perpendicular spread
      const spread = (Math.random() - 0.5) * (width * 0.45);

      return {
        x: corridorX + spread,
        y: corridorY + (Math.random() - 0.5) * 80,
        radius: Math.random() < 0.2 ? Math.random() * 2.2 + 1.8 : Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.5 + 0.2,
        alpha: 0,
        vx: -(Math.random() * 0.35 + 0.15),
        vy: Math.random() * 0.45 + 0.2,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        isBokeh: Math.random() < 0.15,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(initParticle());
    }

    // Initialize 8 diamond star sparkles
    const sparkles: Sparkle[] = [
      { x: 0.72, y: 0.22, size: 14, phase: 0.2, speed: 0.02 },
      { x: 0.82, y: 0.35, size: 16, phase: 1.5, speed: 0.025 },
      { x: 0.65, y: 0.48, size: 12, phase: 2.8, speed: 0.018 },
      { x: 0.38, y: 0.62, size: 13, phase: 4.1, speed: 0.022 },
      { x: 0.25, y: 0.78, size: 15, phase: 5.2, speed: 0.019 },
      { x: 0.55, y: 0.28, size: 10, phase: 0.8, speed: 0.024 },
      { x: 0.42, y: 0.42, size: 11, phase: 3.4, speed: 0.016 },
      { x: 0.18, y: 0.88, size: 12, phase: 2.1, speed: 0.02 },
    ];

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      time += prefersReducedMotion ? 0 : 0.012;

      // 1. Soft Diagonal Ambient Light Beam
      const beamGrad = ctx.createLinearGradient(width * 0.88, height * 0.05, width * 0.12, height * 0.95);
      beamGrad.addColorStop(0.0, 'rgba(235, 195, 110, 0.16)');
      beamGrad.addColorStop(0.28, 'rgba(215, 175, 60, 0.24)');
      beamGrad.addColorStop(0.52, 'rgba(180, 130, 40, 0.18)');
      beamGrad.addColorStop(0.78, 'rgba(130, 85, 20, 0.08)');
      beamGrad.addColorStop(1.0, 'rgba(1, 4, 5, 0)');

      ctx.save();
      ctx.fillStyle = beamGrad;
      ctx.beginPath();
      // Broad diagonal polygon corridor
      ctx.moveTo(width * 0.55, 0);
      ctx.lineTo(width * 1.05, 0);
      ctx.lineTo(width * 0.45, height);
      ctx.lineTo(-width * 0.05, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 2. Central Golden Ambient Aura behind the 3D book zone
      const bookAuraX = width > 1024 ? width * 0.5 : width * 0.5;
      const bookAuraY = height * 0.48;
      const auraRadius = Math.min(width, height) * 0.42;

      const auraGrad = ctx.createRadialGradient(bookAuraX, bookAuraY, 20, bookAuraX, bookAuraY, auraRadius);
      const auraPulse = prefersReducedMotion ? 0.2 : 0.18 + Math.sin(time * 0.8) * 0.04;
      auraGrad.addColorStop(0, `rgba(225, 185, 80, ${auraPulse})`);
      auraGrad.addColorStop(0.4, `rgba(180, 130, 40, ${auraPulse * 0.5})`);
      auraGrad.addColorStop(0.8, 'rgba(140, 90, 20, 0.03)');
      auraGrad.addColorStop(1, 'rgba(1, 4, 5, 0)');

      ctx.save();
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // 3. Flowing Golden Energy Ribbons (Additive Blending)
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const drawRibbon = (
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        ctrl1X: number,
        ctrl1Y: number,
        ctrl2X: number,
        ctrl2Y: number,
        lineWidth: number,
        strokeColor: string | CanvasGradient
      ) => {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY);
        ctx.stroke();
      };

      // Ribbon Waves Parameters with dynamic sinusoidal drift
      const waveOffset1 = Math.sin(time * 0.6) * 32;
      const waveOffset2 = Math.cos(time * 0.5) * 28;
      const waveOffset3 = Math.sin(time * 0.8 + 1.2) * 22;

      // Stream A: Broad Atmospheric Golden Flow
      const gradA = ctx.createLinearGradient(width * 0.95, -height * 0.1, -width * 0.1, height * 1.1);
      gradA.addColorStop(0.0, 'rgba(240, 200, 110, 0)');
      gradA.addColorStop(0.2, 'rgba(235, 190, 80, 0.22)');
      gradA.addColorStop(0.5, 'rgba(212, 175, 55, 0.35)');
      gradA.addColorStop(0.8, 'rgba(180, 125, 35, 0.18)');
      gradA.addColorStop(1.0, 'rgba(120, 75, 15, 0)');

      drawRibbon(
        width * 1.05,
        -height * 0.05,
        -width * 0.05,
        height * 1.05,
        width * 0.72 + waveOffset1,
        height * 0.28 + waveOffset2,
        width * 0.38 + waveOffset2,
        height * 0.72 + waveOffset1,
        64,
        gradA
      );

      // Stream B: Radiant Focused Golden Core Ribbon
      const gradB = ctx.createLinearGradient(width * 0.9, 0, 0, height);
      gradB.addColorStop(0.0, 'rgba(255, 220, 140, 0)');
      gradB.addColorStop(0.3, 'rgba(245, 205, 95, 0.38)');
      gradB.addColorStop(0.55, 'rgba(230, 185, 70, 0.45)');
      gradB.addColorStop(0.8, 'rgba(195, 140, 45, 0.22)');
      gradB.addColorStop(1.0, 'rgba(150, 95, 20, 0)');

      drawRibbon(
        width * 1.02,
        height * 0.05,
        -width * 0.02,
        height * 0.95,
        width * 0.68 + waveOffset3,
        height * 0.35 - waveOffset1 * 0.5,
        width * 0.42 - waveOffset2 * 0.5,
        height * 0.65 + waveOffset3,
        28,
        gradB
      );

      // Stream C: Crisp Luminous Golden Filament (Threading Light)
      const gradC = ctx.createLinearGradient(width * 0.85, 0, width * 0.1, height);
      gradC.addColorStop(0.0, 'rgba(255, 245, 210, 0)');
      gradC.addColorStop(0.35, 'rgba(255, 235, 180, 0.75)');
      gradC.addColorStop(0.5, 'rgba(255, 240, 195, 0.85)');
      gradC.addColorStop(0.7, 'rgba(240, 200, 110, 0.65)');
      gradC.addColorStop(1.0, 'rgba(200, 145, 40, 0)');

      drawRibbon(
        width * 0.98,
        height * 0.08,
        width * 0.02,
        height * 0.92,
        width * 0.66 + waveOffset2 * 0.8,
        height * 0.38 + waveOffset3 * 0.7,
        width * 0.45 - waveOffset1 * 0.7,
        height * 0.62 - waveOffset2 * 0.6,
        2.5,
        gradC
      );

      ctx.restore();

      // 4. Floating Golden Dust & Bokeh Particles
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.phase += p.pulseSpeed;

          // Wrap around if left screen
          if (p.x < -40 || p.y > height + 40) {
            particles[i] = initParticle();
            particles[i].x = width + Math.random() * 40;
            particles[i].y = Math.random() * (height * 0.5);
          }
        }

        const alpha = p.baseAlpha * (0.5 + Math.sin(p.phase) * 0.5);

        if (p.isBokeh) {
          // Soft radial bokeh glow
          const bGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.8);
          bGrad.addColorStop(0, `rgba(250, 220, 130, ${alpha * 0.8})`);
          bGrad.addColorStop(0.5, `rgba(215, 175, 60, ${alpha * 0.3})`);
          bGrad.addColorStop(1, 'rgba(180, 130, 40, 0)');

          ctx.fillStyle = bGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Sharp golden speck
          ctx.fillStyle = `rgba(245, 210, 115, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 5. Four-Point Diamond Star Sparkles
      ctx.save();
      for (const s of sparkles) {
        const sx = s.x * width;
        const sy = s.y * height;
        const sparklePhase = s.phase + time * (prefersReducedMotion ? 0 : s.speed * 60);
        const intensity = Math.max(0, Math.sin(sparklePhase));

        if (intensity > 0.05) {
          const currentSize = s.size * (0.6 + intensity * 0.5);
          const alpha = intensity * 0.85;

          // Draw 4-point diamond cross glint
          ctx.fillStyle = `rgba(255, 245, 215, ${alpha})`;

          // Vertical flare
          ctx.beginPath();
          ctx.ellipse(sx, sy, 1.2, currentSize, 0, 0, Math.PI * 2);
          ctx.fill();

          // Horizontal flare
          ctx.beginPath();
          ctx.ellipse(sx, sy, currentSize, 1.2, 0, 0, Math.PI * 2);
          ctx.fill();

          // Soft central glow
          const cGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, currentSize * 0.5);
          cGrad.addColorStop(0, `rgba(255, 248, 225, ${alpha})`);
          cGrad.addColorStop(0.5, `rgba(235, 195, 95, ${alpha * 0.4})`);
          cGrad.addColorStop(1, 'rgba(180, 130, 40, 0)');

          ctx.fillStyle = cGrad;
          ctx.beginPath();
          ctx.arc(sx, sy, currentSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      style={{ opacity: 0.95 }}
    />
  );
};
