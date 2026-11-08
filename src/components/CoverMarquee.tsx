'use client';
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { BOOK_COVERS, BookCover } from '../data/content';

export const CoverMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Repeat items to ensure seamless infinite looping
  const marqueeItems = [...BOOK_COVERS, ...BOOK_COVERS, ...BOOK_COVERS];

  return (
    <section className="py-12 md:py-16 bg-paper border-y border-bone-dark/40 overflow-hidden" aria-label="Book Cover Showcase">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase font-sans font-semibold tracking-wider text-coral block mb-1">
            We partner with authors and publishers worldwide
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">
            Books we have launched, revived, and put into readers' hands<span className="text-coral">.</span>
          </h2>
        </div>

        {/* Accessible Marquee Pause Toggle (WCAG 2.2 SC 2.2.2) */}
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full border border-stone-300 text-stone hover:text-ink hover:border-ink text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          aria-label={isPaused ? "Resume book marquee animation" : "Pause book marquee animation"}
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          <span className="hidden sm:inline">{isPaused ? "Resume" : "Pause"}</span>
        </button>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left & Right Gradient Fog Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

        {/* Infinite Moving Strip */}
        <div
          className={`flex gap-6 items-center w-max marquee-track ${
            isPaused ? 'animate-none' : 'animate-marquee'
          }`}
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {marqueeItems.map((book: BookCover, idx) => (
            <div
              key={`${book.id}-${idx}`}
              className="flex-shrink-0 w-[140px] sm:w-[160px] h-[210px] sm:h-[240px] rounded-lg bg-bone-dark/20 border border-stone-300/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between p-3.5"
              style={{
                backgroundColor: '#FAF7F2',
                borderLeft: `4px solid ${book.accentColor}`,
              }}
            >
              {/* Spine Highlight & Texture */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/10 to-transparent" />
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone block truncate">
                  {book.genre}
                </span>
                <h3 className="font-serif font-bold text-sm text-ink leading-tight line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-[11px] text-stone truncate font-sans">
                  {book.author}
                </p>
              </div>

              {/* Verified Result / Tag Badge */}
              <div className="pt-2 border-t border-bone-dark/50">
                <span className="inline-block text-[10px] font-semibold text-coral px-1.5 py-0.5 rounded bg-coral/10">
                  {book.quote}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
