'use client';
import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { GoldenWaveCanvas } from './hero/GoldenWaveCanvas';
import { InteractiveBook3D } from './hero/InteractiveBook3D';

interface HeroProps {
  onOpenBooking: () => void;
}

const PRESS_PARTNERS = [
  { name: 'The New York Times', font: 'font-serif tracking-normal' },
  { name: 'WIRED', font: 'font-mono font-bold tracking-widest' },
  { name: 'THE GUARDIAN', font: 'font-serif font-bold tracking-tight' },
  { name: 'Forbes', font: 'font-serif font-bold tracking-wider' },
  { name: 'The Atlantic', font: 'font-serif italic tracking-wide' },
  { name: 'THE BOOKSELLER', font: 'font-sans font-bold tracking-widest' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('books-showcase') || document.getElementById('case-studies');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="The Book Launch Company Hero"
      className="relative min-h-[780px] lg:h-screen lg:min-h-[840px] bg-[#010405] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-20 pb-8 sm:pb-10"
    >
      {/* 1. Animated Golden Wave Signature Canvas (Beams, Flowing Ribbons & Particles) */}
      <GoldenWaveCanvas />

      {/* 2. Top Header Scrim Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#010405]/90 via-[#010405]/40 to-transparent z-10"
      />

      {/* 3. Main 3-Column Content Zone */}
      <div className="relative z-20 mx-auto w-[calc(100%-32px)] max-w-shell my-auto py-6 sm:py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Column 1: Left Display Headline, Subtitle & CTAs (4 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 max-w-[500px] text-left order-1">
            <h1 className="display text-[34px] sm:text-[42px] lg:text-[44px] xl:text-[48px] font-semibold text-white leading-[1.08] tracking-[-0.015em]">
              The New Media Partner
              <br />
              For Ambitious Authors
            </h1>

            {/* Subtitle in warm golden wheat */}
            <p className="mt-3 sm:mt-4 text-[18px] sm:text-[20px] font-normal text-[#D1B48C] tracking-wide font-sans">
              By The Book Launch Company
            </p>

            {/* CTAs matching exact instructions: Discuss Your Book › & See Our Work ↓ */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenBooking}
                className="h-10 px-6 rounded-full bg-white text-black font-semibold text-[13px] hover:bg-[#F2F2F2] active:scale-[0.98] transition-all inline-flex items-center gap-2 shadow-lg shadow-black/40 group"
              >
                <span>Discuss Your Book</span>
                <span className="text-[15px] leading-none font-bold group-hover:translate-x-0.5 transition-transform">›</span>
              </button>

              <a
                href="#books-showcase"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors group py-2"
              >
                <span>See Our Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D1B48C] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Center Interactive 3D Hardcover Book (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center order-2 py-4 lg:py-0">
            <InteractiveBook3D onOpenBooking={onOpenBooking} />
          </div>

          {/* Column 3: Right Narrative Paragraph Block (3 cols) */}
          <div className="lg:col-span-3 xl:col-span-3 max-w-[340px] text-left lg:pt-4 order-3">
            <p className="text-[14px] sm:text-[15px] font-[450] leading-[1.65] text-white/85 font-sans">
              Dive into modern reader discovery.
              <br />
              <br />
              Book launches, backlist revival, author brand and podcasts. We create campaigns that connect ambitious books with the readers who will love them.
            </p>
          </div>

        </div>
      </div>

      {/* 4. Bottom Press & Media Logo Strip with 4-Point Star Accent */}
      <div className="relative z-20 w-full border-t border-white/10 pt-5 pb-2">
        <div className="mx-auto w-[calc(100%-32px)] max-w-shell flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Press Logos in subtle muted monochrome matching reference image */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 sm:gap-x-10 gap-y-3 text-[12px] sm:text-[13px] text-white/45">
            {PRESS_PARTNERS.map((partner, idx) => (
              <span key={idx} className={`${partner.font} transition-opacity hover:text-white/80 cursor-default`}>
                {partner.name}
              </span>
            ))}
          </div>

          {/* 4-Point Sparkle Star Accent in bottom right corner */}
          <div className="hidden sm:flex items-center text-white/40 hover:text-white/80 transition-colors" aria-hidden="true">
            <Sparkles className="w-4 h-4 text-[#D1B48C]/70 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
};
