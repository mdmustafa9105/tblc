'use client';
import React, { useEffect, useRef, useState } from 'react';
import { KEY_METRICS } from '../data/content';

export const MetricsBand: React.FC = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-ink text-paper relative overflow-hidden"
      aria-label="Our work and reach, by the numbers"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-radial from-stone-800/30 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Atomik Growth Reference: "Our work and reach, by the numbers.") */}
        <div className="mb-16 md:mb-20 text-center max-w-[760px] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-paper/10 border border-paper/15 text-xs font-mono uppercase tracking-widest text-coral font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Track Record
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Our work and reach, by the numbers<span className="text-coral">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-300 max-w-[580px] mx-auto leading-relaxed">
            Real reader traction generated through creator-led short-form video, tested hooks, and founder-led community momentum.
          </p>
        </div>

        {/* 4-Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-stone-800/80">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 ? 'pt-8 sm:pt-0' : ''
              }`}
            >
              {/* Monumental Display Number (Fraunces Display) */}
              <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3 font-tabular">
                <span className="text-white">
                  {hasAnimated ? metric.value : '0'}
                </span>
              </div>

              {/* Bold Primary Label */}
              <h3 className="font-sans font-semibold text-base sm:text-lg text-paper mb-1.5">
                {metric.label}
              </h3>

              {/* Specific Scope / Qualification */}
              <p className="font-sans text-xs text-stone-400 max-w-[240px] leading-relaxed">
                {metric.timeframe}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
