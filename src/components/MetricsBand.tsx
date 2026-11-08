'use client';
import React, { useEffect, useRef, useState } from 'react';

const METRICS = [
  {
    value: '13M+',
    label: 'Combined Organic Reach',
    sublabel: 'Historical campaign impressions across client titles & partner creator networks',
  },
  {
    value: '50K+',
    label: 'Dedicated Reader Community',
    sublabel: 'Active fiction book buyers across proprietary media channels (@whynotnovels)',
  },
  {
    value: '1.4M',
    label: 'Top Pilot Launch Campaign',
    sublabel: 'Single-campaign views achieved on debut author rollout (The Silent Hollow)',
  },
  {
    value: '100%',
    label: 'Literary Specialization',
    sublabel: 'Exclusively dedicated to books, authors, indie presses & literary publishers',
  },
];

export const MetricsBand: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Background Panoramic Illuminated Curved Horizon (Atomik Growth Signature)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      drawHorizon();
    };
    window.addEventListener('resize', handleResize);

    const drawHorizon = () => {
      ctx.clearRect(0, 0, width, height);

      // Stars
      for (let i = 0; i < 160; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.7;
        const s = Math.random() * 1.4;
        const a = 0.2 + Math.random() * 0.6;
        ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      }

      // Panoramic Curved Horizon at bottom of section
      const cx = width * 0.5;
      const cy = height * 1.8;
      const radius = width * 0.95;

      // Atmospheric Blue-Golden Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.92, cx, cy, radius * 1.15);
      glowGrad.addColorStop(0, 'rgba(0, 114, 245, 0.35)');
      glowGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.15)');
      glowGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.04)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Illuminated Horizon Arc Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, Math.PI * 1.25, Math.PI * 1.75);
      ctx.stroke();

      // Atmospheric Haze underneath horizon
      const hazeGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius);
      hazeGrad.addColorStop(0, 'rgba(1, 4, 5, 0.95)');
      hazeGrad.addColorStop(1, 'rgba(6, 16, 26, 0.4)');
      ctx.fillStyle = hazeGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    drawHorizon();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#010405] text-white py-28 sm:py-36 relative overflow-hidden"
      aria-label="Our work and reach, by the numbers"
    >
      {/* Illuminated Horizon Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Section Header (Atomik Reference Layout) */}
        <div className="text-center max-w-[700px] mx-auto mb-20 sm:mb-24 space-y-4">
          <h2 className="display text-[32px] sm:text-[36px] font-semibold tracking-[0.01em] text-white leading-[1.1]">
            Our work and reach,
            <br />
            <span className="text-[#7D7D7D]">by the numbers.</span>
          </h2>
          <p className="font-sans text-[15px] font-[450] text-[#CCCDCD] max-w-[500px] mx-auto leading-[1.5]">
            Real reader traction generated through creator-led short-form video, tested hooks, and founder-led community momentum.
          </p>
        </div>

        {/* 4-Column Horizontal Metrics (Atomik Growth Signature) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-[16px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              {/* Massive Display Number */}
              <div className="font-sans text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-3">
                {hasAnimated ? metric.value : '0'}
              </div>

              {/* Bold Primary Label */}
              <h3 className="font-sans font-semibold text-[15px] text-white mb-2 leading-[1.4]">
                {metric.label}
              </h3>

              {/* Concise Supporting Description */}
              <p className="font-sans text-[13px] text-[#A1A1AA] max-w-[240px] leading-[1.5]">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
