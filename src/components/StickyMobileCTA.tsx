'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenBooking: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-cta/95 p-3 backdrop-blur-md transition-all duration-300 md:hidden"
      role="region"
      aria-label="Quick booking call-to-action"
    >
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-3">
        <div className="flex-1 truncate">
          <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
            The Book Launch Company
          </div>
          <div className="truncate font-sans text-xs font-medium text-white">
            Launch the book. Build the author.
          </div>
        </div>

        <button
          onClick={onOpenBooking}
          className="pill h-11 shrink-0 bg-card px-5 text-xs font-semibold text-black transition-colors hover:bg-white"
        >
          <span>Discuss Your Book</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
