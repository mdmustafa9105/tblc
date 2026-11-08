'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ClosingCTAProps {
  onOpenBooking: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#010405] text-white py-32 sm:py-44 relative overflow-hidden" aria-label="Work With Us">
      {/* Central Illuminated Sphere / Atmospheric Horizon Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#0072F5]/15 via-[#F59E0B]/10 to-transparent rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 mx-auto w-[calc(100%_-_32px)] max-w-shell text-center">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[12px] font-medium text-[#CCCDCD] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0072F5] animate-pulse" />
          <span>Work With Us</span>
        </div>

        {/* Display Headline */}
        <h2 className="display text-[32px] sm:text-[36px] font-semibold tracking-[0.01em] text-white leading-[1.1] mb-6 max-w-[680px] mx-auto">
          Have a book to launch or a story that deserves to reach more readers?
        </h2>

        {/* Subhead */}
        <p className="font-sans text-[15px] font-[450] text-[#CCCDCD] max-w-[520px] mx-auto leading-[1.5] mb-10">
          Book an intro call to explore our suite of services. We take on a limited number of author campaigns each month to ensure dedicated creative focus.
        </p>

        {/* Primary Action Button (Atomik White Pill) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 h-10 rounded-full bg-[#E6E6E6] text-black font-semibold text-[13px] hover:bg-white active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>DISCUSS YOUR BOOK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Assurance Text */}
        <p className="text-[12px] text-[#7D7D7D] font-sans">
          Zero commitment required · Custom hook blueprint included
        </p>

      </div>
    </section>
  );
};
