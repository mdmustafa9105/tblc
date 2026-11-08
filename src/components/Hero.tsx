'use client';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
  return (
    <section
      aria-label="The Book Launch Company Hero"
      className="relative min-h-[760px] lg:h-screen lg:min-h-[820px] bg-[#010405] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-8 sm:pb-10"
      style={{
        backgroundImage: "radial-gradient(circle at 75% 35%, rgba(212, 175, 55, 0.18) 0%, transparent 60%), radial-gradient(circle at 20% 85%, rgba(180, 130, 40, 0.08) 0%, transparent 50%), url('/images/hero-clean-book.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Subtle vignette scrim to guarantee 100% text readability on any device */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#010405]/95 via-[#010405]/40 to-transparent lg:from-[#010405]/90 lg:via-[#010405]/20 lg:to-[#010405]/40"
      />
      
      {/* Top subtle fade from header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#010405]/80 to-transparent z-0"
      />

      {/* Main 3-Column Content Zone (Matching Reference Image Composition) */}
      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-shell my-auto py-6 sm:py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Column 1: Left Display Headline, Subtitle & CTAs (5 cols) */}
          <div className="lg:col-span-5 max-w-[540px] text-left">
            <h1 className="display text-[34px] sm:text-[42px] lg:text-[44px] xl:text-[50px] font-semibold text-white leading-[1.08] tracking-[-0.015em]">
              The New Media Partner
              <br />
              For Ambitious Authors
            </h1>

            {/* Subtitle in warm golden wheat (#D1B48C) matching reference */}
            <p className="mt-3 sm:mt-4 text-[18px] sm:text-[21px] font-normal text-[#D1B48C] tracking-wide font-sans">
              by The Book Launch Company
            </p>

            {/* CTAs matching reference pill + ghost link */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenBooking}
                className="h-10 px-6 rounded-full bg-white text-black font-semibold text-[13px] hover:bg-[#F2F2F2] active:scale-[0.98] transition-all inline-flex items-center gap-2 shadow-lg shadow-black/40"
              >
                <span>Discuss your book</span>
                <span className="text-[15px] leading-none font-bold">›</span>
              </button>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white/90 hover:text-white transition-colors group py-2"
              >
                <span>See our launches</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Center Spacer / Anchor for the 3D Floating Book (4 cols) */}
          {/* On desktop, the high-res 3D book from hero-clean-book.jpg floats prominently here */}
          <div className="lg:col-span-4 hidden lg:flex items-center justify-center min-h-[380px] pointer-events-none" aria-hidden="true">
            {/* The book visual is anchored directly in the background image at this exact grid coordinate */}
          </div>

          {/* Column 3: Right Narrative Paragraph Block (3 cols) */}
          <div className="lg:col-span-3 max-w-[360px] text-left lg:pt-4">
            <p className="text-[14px] sm:text-[15px] font-[450] leading-[1.65] text-white/85 font-sans">
              Dive into modern reader discovery. Book launches, backlist revival, author brand and podcasts. We engineer viral launch waves, tested BookTok hooks, and sustained retail velocity for modern authors and publishers.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Press & Media Logo Strip with 4-Point Star Accent */}
      <div className="relative z-10 w-full border-t border-white/10 pt-5 pb-2">
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
