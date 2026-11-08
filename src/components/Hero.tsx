'use client';
import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const PRESS_PARTNERS = [
  { name: 'The New York Times', font: 'font-serif tracking-normal' },
  { name: 'WIRED', font: 'font-mono font-bold tracking-widest' },
  { name: 'The Guardian', font: 'font-serif font-bold tracking-tight' },
  { name: 'Forbes', font: 'font-serif font-bold tracking-wider' },
  { name: 'The Atlantic', font: 'font-serif italic tracking-wide' },
  { name: 'The Bookseller', font: 'font-sans font-bold tracking-widest' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('work') || document.getElementById('case-studies') || document.getElementById('books-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="The Book Launch Company Hero"
      className="relative min-h-[740px] lg:h-screen lg:min-h-[800px] bg-[#0A0B0E] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-8 sm:pb-10"
    >
      {/* Soft warm golden ambient lighting behind the book (clean, calm, premium) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[25%] -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-[140px] opacity-40 bg-gradient-to-br from-[#D4AF37]/35 via-[#B38728]/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] bottom-[10%] w-[380px] h-[380px] rounded-full blur-[120px] opacity-20 bg-[#D4AF37]/15"
      />

      {/* Top Header Scrim Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0B0E]/95 via-[#0A0B0E]/40 to-transparent z-10"
      />

      {/* Main 2-Column Balanced Content Zone */}
      <div className="relative z-20 mx-auto w-[calc(100%-32px)] max-w-shell my-auto py-8 sm:py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Focused Headline, Subtitle, Short Sentence & 2 CTAs (7 cols) */}
          <div className="lg:col-span-7 max-w-[620px] text-left">
            
            {/* Headline */}
            <h1 className="display text-[36px] sm:text-[46px] lg:text-[54px] font-semibold text-white leading-[1.08] tracking-[-0.015em]">
              The New Media Partner
              <br />
              For Ambitious Authors
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-4 text-[19px] sm:text-[22px] font-normal text-[#D4AF37] tracking-wide font-sans">
              By The Book Launch Company
            </p>

            {/* One short supporting sentence */}
            <p className="mt-6 text-[15px] sm:text-[17px] font-normal leading-[1.6] text-white/80 font-sans max-w-[540px]">
              We create high-impact short-form launch waves, tested BookTok creative, and sustained retail momentum for authors who refuse to be ignored.
            </p>

            {/* Two Clean CTAs: Discuss Your Book & Explore Our Work */}
            <div className="mt-9 sm:mt-11 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenBooking}
                className="h-11 px-7 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-[#F4F4F5] active:scale-[0.98] transition-all inline-flex items-center gap-2 shadow-xl shadow-black/50 group"
              >
                <span>Discuss Your Book</span>
                <span className="text-[16px] leading-none font-bold group-hover:translate-x-0.5 transition-transform">›</span>
              </button>

              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white/85 hover:text-white transition-colors group py-2"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Art-Directed Physical Hardcover Book Visual (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end py-4 lg:py-0">
            <div
              className="relative select-none transition-transform duration-500 ease-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                perspective: '1200px',
              }}
            >
              {/* Dynamic Ground Contact Drop Shadow */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] h-[50px] rounded-full blur-[20px] bg-black/80 transition-all duration-500 ${
                  isHovered ? 'scale-105 opacity-90' : 'scale-100 opacity-75'
                }`}
              />

              {/* Realistic Hardcover Book Container in 3/4 Perspective */}
              <div
                className={`relative w-[240px] h-[350px] sm:w-[270px] sm:h-[395px] lg:w-[290px] lg:h-[420px] rounded-[6px] transition-all duration-500 ease-out shadow-[0_30px_70px_rgba(0,0,0,0.7)] ${
                  isHovered ? '-translate-y-3 rotate-[-1deg]' : 'translate-y-0 rotate-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(12deg) rotateY(-22deg) rotateZ(-3deg)',
                }}
              >
                {/* Front Cover Face */}
                <div className="absolute inset-0 rounded-[4px] overflow-hidden bg-[#101318] border border-[#D4AF37]/50 p-6 sm:p-7 flex flex-col justify-between text-center shadow-inner">
                  
                  {/* Subtle Book Cloth / Leather Texture */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 30%, #222733 0%, #101318 100%)',
                    }}
                  />

                  {/* Left Spine Fold / Crease Shadow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 bottom-0 w-[14px] z-20"
                    style={{
                      background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                    }}
                  />

                  {/* Gold Foil Double Border with Diamond Corners */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 sm:inset-3.5 border border-[#D4AF37]/60 rounded-[2px]"
                  >
                    <div className="absolute inset-1 border border-[#D4AF37]/30" />
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37] rotate-45" />
                  </div>

                  {/* Top Kicker */}
                  <div className="relative pt-2">
                    <span
                      className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase block"
                      style={{
                        background: 'linear-gradient(135deg, #FFF3D1 0%, #E0B853 45%, #9E7D23 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      The Book Launch Company
                    </span>
                    <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent mx-auto mt-2" />
                  </div>

                  {/* Celestial Armillary Orbit Illustration */}
                  <div className="relative my-auto py-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 160 160"
                      className="w-24 h-24 sm:w-28 sm:h-28 text-[#D4AF37] opacity-60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      aria-hidden="true"
                    >
                      <circle cx="80" cy="80" r="70" strokeDasharray="3 3" opacity="0.4" />
                      <ellipse cx="80" cy="80" rx="68" ry="26" transform="rotate(-30 80 80)" />
                      <ellipse cx="80" cy="80" rx="68" ry="26" transform="rotate(30 80 80)" />
                      <circle cx="80" cy="80" r="38" opacity="0.6" />
                      <circle cx="80" cy="80" r="14" fill="#D4AF37" fillOpacity="0.15" />
                      <path d="M80 68 L80 92 M68 80 L92 80" strokeWidth="1.6" stroke="#FFE9A8" />
                    </svg>
                  </div>

                  {/* Center Title in Gold Foil Typography */}
                  <div className="relative space-y-1 pb-1">
                    <h2
                      className="font-serif text-[18px] sm:text-[22px] font-bold tracking-[0.03em] leading-[1.22] uppercase"
                      style={{
                        background: 'linear-gradient(135deg, #FFF6DA 0%, #E6C265 30%, #C4972B 70%, #F5DE9C 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
                      }}
                    >
                      Launch The Book.
                      <br />
                      Build The Author.
                    </h2>
                  </div>

                  {/* Bottom Edition Seal */}
                  <div className="relative border-t border-[#D4AF37]/30 pt-2 flex items-center justify-between text-[8px] sm:text-[9px] font-mono tracking-wider text-[#D4AF37]/80 uppercase">
                    <span>First Edition</span>
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
                    <span>MMXXVI</span>
                  </div>

                </div>

                {/* Spine on Left Face */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 w-[36px] h-full overflow-hidden text-center flex flex-col justify-between py-6 text-white border-y border-l border-[#D4AF37]/40"
                  style={{
                    transformOrigin: 'left center',
                    transform: 'rotateY(-90deg) translateZ(0px)',
                    background: 'linear-gradient(to right, #080A0D 0%, #161922 45%, #080A0D 100%)',
                  }}
                >
                  <span className="block text-[7px] font-mono text-[#D4AF37]/80 tracking-widest border-b border-[#D4AF37]/40 pb-1 mx-2">
                    TBLC
                  </span>
                  <div
                    className="my-auto font-sans font-semibold text-[9px] tracking-[0.22em] text-[#D4AF37] uppercase whitespace-nowrap"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      background: 'linear-gradient(to bottom, #FFE8A3 0%, #D4AF37 50%, #9E7D23 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    The Book Launch Company
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 mx-auto opacity-70" />
                </div>

                {/* Gilded Fore-Edge on Right */}
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 w-[36px] h-full"
                  style={{
                    transformOrigin: 'right center',
                    transform: 'rotateY(90deg) translateZ(0px)',
                    background: 'repeating-linear-gradient(to bottom, #E8D3A2 0px, #E8D3A2 1px, #B6924C 1px, #B6924C 2px, #F0DEC0 2px, #F0DEC0 3px)',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
                  }}
                />

                {/* Gilded Bottom Page Edge */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 w-full h-[36px]"
                  style={{
                    transformOrigin: 'bottom center',
                    transform: 'rotateX(-90deg) translateZ(0px)',
                    background: 'repeating-linear-gradient(to right, #E8D3A2 0px, #E8D3A2 1px, #B6924C 1px, #B6924C 2px, #F0DEC0 2px, #F0DEC0 3px)',
                    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.5)',
                  }}
                />

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Press & Media Logo Strip with Subtle Star Accent */}
      <div className="relative z-20 w-full border-t border-white/10 pt-5 pb-2">
        <div className="mx-auto w-[calc(100%-32px)] max-w-shell flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 sm:gap-x-10 gap-y-3 text-[12px] sm:text-[13px] text-white/45">
            {PRESS_PARTNERS.map((partner, idx) => (
              <span key={idx} className={`${partner.font} transition-opacity hover:text-white/80 cursor-default`}>
                {partner.name}
              </span>
            ))}
          </div>

          <div className="hidden sm:flex items-center text-white/40 hover:text-white/80 transition-colors" aria-hidden="true">
            <Sparkles className="w-4 h-4 text-[#D4AF37]/70" />
          </div>

        </div>
      </div>
    </section>
  );
};
