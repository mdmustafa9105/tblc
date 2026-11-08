'use client';
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Calendar, Users } from 'lucide-react';

interface ClosingCTAProps {
  onOpenBooking: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-36 bg-ink text-paper relative overflow-hidden border-t border-paper/10">
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-coral/10 rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Scarcity Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-paper/10 border border-paper/15 text-xs font-mono tracking-wider uppercase text-paper/80 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
          <span>We take on a limited number of launches each month</span>
        </div>

        {/* Main Display Headline */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-paper tracking-tight leading-[1.1] mb-6">
          Your book has a launch day. <br className="hidden sm:inline" />
          <span className="italic font-normal text-coral">Let's make it a launch.</span>
        </h2>

        {/* Subhead */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-paper/70 font-sans leading-relaxed mb-10">
          Book a 20-minute call. Join the authors and publishers transforming their releases into viral literary moments with dedicated founder-level attention to every manuscript.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-coral text-paper hover:bg-coral-hover text-base font-semibold shadow-lg hover:shadow-coral/25 transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-coral/40"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Assurance / Frictionless Details */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-paper/60 font-sans">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-coral shrink-0" />
            <span>Zero hard sales pitches</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-coral shrink-0" />
            <span>Custom hook blueprint included</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-coral shrink-0" />
            <span>1-on-1 with founder Ariba</span>
          </div>
        </div>
      </div>
    </section>
  );
};
