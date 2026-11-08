'use client';
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Calendar, Users } from 'lucide-react';

interface ClosingCTAProps {
  onOpenBooking: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-36 bg-ink text-paper relative overflow-hidden border-t border-paper/10" aria-label="Work With Us">
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-coral/10 rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        {/* Scarcity & Tag Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-paper/10 border border-paper/15 text-xs font-mono tracking-wider uppercase text-coral font-bold mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          <span>Work With Us</span>
        </div>

        {/* Main Display Headline (Atomik Growth Closing Style) */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-6">
          Have a book to launch or a story that deserves to reach more readers<span className="text-coral">?</span>
        </h2>

        {/* Subhead */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-300 font-sans leading-relaxed mb-10">
          Let’s talk about what we can build together. We take on a limited number of author campaigns each month to ensure dedicated creative focus and exceptional launch execution.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-coral text-white hover:bg-coral-400 active:bg-coral-600 text-base font-semibold shadow-lg hover:shadow-coral/25 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-coral/40 min-h-[48px]"
          >
            <span>Discuss Your Book</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Assurance / Frictionless Details */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-stone-400 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-coral shrink-0" />
            <span>Zero hard sales pitches</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-coral shrink-0" />
            <span>Custom trope hook blueprint</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-coral shrink-0" />
            <span>1-on-1 strategy session</span>
          </div>
        </div>

      </div>
    </section>
  );
};
