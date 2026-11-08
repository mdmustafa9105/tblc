'use client';
import React from 'react';
import { ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-paper relative overflow-hidden" aria-label="The Publishing Shift">
      <div className="max-w-[820px] mx-auto px-6 text-center">
        
        {/* Subtle Category Kicker */}
        <span className="text-xs uppercase font-sans font-semibold tracking-widest text-stone block mb-4">
          The Publishing Shift
        </span>

        {/* Large Editorial Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-ink leading-[1.12] tracking-tight mb-8">
          Great books don’t sell themselves <span className="italic font-normal text-coral">anymore.</span>
        </h2>

        {/* Editorial Body Argument */}
        <div className="space-y-6 font-sans text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed text-left sm:text-center">
          <p>
            Publishing has permanently changed. Readers no longer discover books primarily through quiet bookstore endcaps or formal newspaper reviews. They discover them on their phones — in a <strong className="text-ink font-semibold">7-second TikTok hook</strong>, a Bookstagram creator stack, or an author podcast clip.
          </p>
          <p>
            A traditional book release without short-form video is just a <span className="text-ink font-medium underline decoration-coral/40 decoration-2 underline-offset-4">whisper in a crowded room</span>.
          </p>
          <p className="font-serif text-xl sm:text-2xl text-ink font-medium italic pt-2">
            "We make your book impossible to scroll past."
          </p>
        </div>

        {/* Down Anchor Guide */}
        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stone hover:text-coral transition-colors py-3 px-6 min-h-[44px] rounded-full border border-stone-300 hover:border-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            <span>See our launch pathways</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
