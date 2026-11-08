'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenBooking: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the initial hero banner (150px)
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-ink/95 backdrop-blur-md border-t border-paper/10 md:hidden transition-all duration-300 animate-in slide-in-from-bottom"
      role="region"
      aria-label="Quick booking call-to-action"
    >
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="text-[11px] font-mono text-coral uppercase tracking-wider font-semibold">
            Limited Monthly Launches
          </div>
          <div className="text-xs font-serif text-white truncate">
            Launch the book. Build the author.
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-5 py-3 rounded-full bg-coral hover:bg-coral-400 active:bg-coral-600 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg min-h-[48px] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

