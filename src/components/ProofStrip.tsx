'use client';
import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';

interface BookItem {
  id: string;
  title: string;
  author: string;
  genre: string;
  slotNumber: string;
  palette: {
    bg: string;
    text: string;
    border: string;
  };
}

const SHOWCASE_BOOKS: BookItem[] = [
  {
    id: 'cover-01',
    title: 'The Silent Hollow',
    author: 'Elena Vance',
    genre: 'Psychological Thriller',
    slotNumber: '01',
    palette: { bg: 'bg-[#1C2028]', text: 'text-[#E2E8F0]', border: 'border-white/10' },
  },
  {
    id: 'cover-02',
    title: 'Crown of Starlight',
    author: 'Kaelen Thorne',
    genre: 'Romantic Fantasy',
    slotNumber: '02',
    palette: { bg: 'bg-[#2A1820]', text: 'text-[#FCE7F3]', border: 'border-pink-900/30' },
  },
  {
    id: 'cover-03',
    title: 'The Midnight Guild',
    author: 'Marcus Vance',
    genre: 'Dark Academia',
    slotNumber: '03',
    palette: { bg: 'bg-[#171F1D]', text: 'text-[#DCFCE7]', border: 'border-emerald-900/30' },
  },
  {
    id: 'cover-04',
    title: 'A Thousand Summer Days',
    author: 'Clara Mercer',
    genre: 'Contemporary Romance',
    slotNumber: '04',
    palette: { bg: 'bg-[#2D241E]', text: 'text-[#FEF3C7]', border: 'border-amber-900/30' },
  },
  {
    id: 'cover-05',
    title: 'Beneath the Salt Wind',
    author: 'Mara Lindqvist',
    genre: 'Literary Fiction',
    slotNumber: '05',
    palette: { bg: 'bg-[#18222D]', text: 'text-[#E0F2FE]', border: 'border-sky-900/30' },
  },
  {
    id: 'cover-06',
    title: 'Whispers in Crimson',
    author: 'S. R. Hastings',
    genre: 'Gothic Mystery',
    slotNumber: '06',
    palette: { bg: 'bg-[#281919]', text: 'text-[#FEE2E2]', border: 'border-red-900/30' },
  },
  {
    id: 'cover-07',
    title: 'The Cartographer’s Secret',
    author: 'David Moreau',
    genre: 'Historical Fiction',
    slotNumber: '07',
    palette: { bg: 'bg-[#24211D]', text: 'text-[#F3F4F6]', border: 'border-stone-800' },
  },
  {
    id: 'cover-08',
    title: 'When the Tide Recedes',
    author: 'Nadia Solis',
    genre: 'Memoir & Essays',
    slotNumber: '08',
    palette: { bg: 'bg-[#1E1B28]', text: 'text-[#EDE9FE]', border: 'border-purple-900/30' },
  },
];

export const ProofStrip: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="books-showcase"
      className="bg-[#FAFAFA] text-[#171717] py-20 sm:py-28 border-b border-black/[0.08] relative overflow-hidden"
      aria-label="Books We've Helped Put in Front of Readers"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-shell">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#71717A] font-sans">
            Editorial Portfolio
          </p>
          <h2 className="display text-[26px] sm:text-[32px] lg:text-[38px] font-semibold text-[#111827] tracking-tight uppercase leading-[1.15]">
            BOOKS WE'VE HELPED PUT IN FRONT OF READERS
          </h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
            From debut releases to established authors reviving their backlist — curated campaigns engineered for authentic reader discovery.
          </p>
        </div>

      </div>

      {/* Horizontal Book Cover Showcase Container */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Edge Fade Gradients */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" 
        />

        {/* Marquee Row */}
        <div 
          className="flex gap-6 sm:gap-8 w-max px-4"
          style={{
            animation: isPaused ? 'none' : 'marqueeScroll 45s linear infinite',
          }}
        >
          {/* Double list for seamless infinite loop */}
          {[...SHOWCASE_BOOKS, ...SHOWCASE_BOOKS].map((book, idx) => (
            <div
              key={`${book.id}-${idx}`}
              className="group relative flex-shrink-0 w-[160px] sm:w-[190px] aspect-[2/3] rounded-[8px] overflow-hidden shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_45px_-8px_rgba(0,0,0,0.28)] hover:-translate-y-2 transition-all duration-300 border border-black/10 flex flex-col justify-between p-4 cursor-default select-none"
            >
              {/* Realistic Book Cover Spine & Texture Simulation */}
              <div 
                aria-hidden="true"
                className={`absolute inset-0 ${book.palette.bg} transition-transform duration-500 group-hover:scale-[1.02]`}
              />
              {/* Left Spine Crease Highlight */}
              <div 
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10 pointer-events-none"
              />
              {/* Right Page Edge Gilded Reflection */}
              <div 
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-[2px] bg-white/20 z-10 pointer-events-none"
              />

              {/* Cover Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/50">
                  {book.genre}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                  SLOT {book.slotNumber}
                </span>
              </div>

              {/* Cover Title Area */}
              <div className="relative z-10 my-auto text-left space-y-1.5 py-3">
                <h3 className={`font-serif text-[16px] sm:text-[18px] font-bold ${book.palette.text} leading-tight drop-shadow-sm`}>
                  {book.title}
                </h3>
                <p className="text-[12px] text-white/70 font-sans tracking-wide">
                  by {book.author}
                </p>
              </div>

              {/* Cover Footer Note */}
              <div className="relative z-10 border-t border-white/15 pt-2 flex items-center justify-between text-[10px] text-white/50 font-mono">
                <span>Book Cover Slot</span>
                <span className="text-white/70">public/assets/covers/</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Controls & Asset Replacement Guide Note */}
      <div className="mx-auto w-[calc(100%-32px)] max-w-shell mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#71717A]">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/[0.08] hover:border-black/20 text-[#111827] shadow-xs font-medium text-[12px] transition-colors"
            aria-label={isPaused ? "Resume book cover scroll" : "Pause book cover scroll"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-[#111827]" /> : <Pause className="w-3.5 h-3.5 text-[#111827]" />}
            <span>{isPaused ? 'Resume Showcase' : 'Pause Showcase'}</span>
          </button>
          <span className="text-[#A1A1AA]">· Hover over any title to inspect</span>
        </div>

        <p className="font-mono text-[11px] text-[#71717A] text-center sm:text-right">
          Drop approved client jackets into <strong className="text-[#111827]">public/assets/covers/</strong> to update
        </p>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
