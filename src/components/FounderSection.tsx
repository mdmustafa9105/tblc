'use client';
import React from 'react';
import { ArrowUpRight, Instagram, Users } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 md:py-32 bg-paper border-t border-bone-dark/40" aria-label="Meet the Founder">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Founder Portrait (5 cols / 42%) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-600 to-ink-900 shadow-xl border border-stone-300">
              
              {/* Stylized Editorial Portrait Representation */}
              <div className="absolute inset-0 bg-ink-900/40 mix-blend-multiply z-10" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8 z-20 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    Founder & Creative Director
                  </span>
                  <Instagram className="w-5 h-5 text-coral" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold tracking-tight text-white">
                    Ariba
                  </h3>
                  <p className="text-sm font-sans text-stone-200">
                    Creator behind <span className="text-coral font-semibold">@whynotnovels</span>
                  </p>
                  <p className="font-serif italic text-xs text-stone-300 pt-2 border-t border-white/20">
                    "We started as readers. Now we launch books."
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Floating Metric Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 bg-paper border border-bone-dark p-4 rounded-2xl shadow-xl z-30 max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-coral" />
                <span className="font-serif font-bold text-lg text-ink">50,000+</span>
              </div>
              <p className="text-[11px] text-stone font-sans leading-tight">
                Dedicated book buyers following @whynotnovels
              </p>
            </div>

          </div>

          {/* Right Column: Founder Narrative & Community Proof (7 cols / 58%) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs uppercase font-sans font-semibold tracking-widest text-stone block">
                The Brand's Unfair Advantage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
                Built by a reader the internet <span className="italic font-normal text-coral">listens to.</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                Before founding The Book Launch Company, Ariba built <strong className="text-ink font-semibold">@whynotnovels</strong> from the ground up into a community of over 50,000 active readers, generating millions of organic monthly views.
              </p>
              <p>
                She didn't learn book marketing from agency textbooks. She learned it by discovering what causes an avid reader to stop scrolling mid-feed, screenshot a quote, add a title to their TBR, and purchase a novel on launch day.
              </p>
              <p className="font-medium text-ink">
                The Book Launch Company brings that exact reader instinct, editorial standard, and distribution engine directly to your book.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-bone/60 border border-stone-300/50">
                <span className="font-serif font-bold text-sm text-ink block mb-1">
                  Readers, not impressions.
                </span>
                <p className="text-xs text-stone">
                  We measure success by saves, shares, and purchase intent — not vanity video view counts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bone/60 border border-stone-300/50">
                <span className="font-serif font-bold text-sm text-ink block mb-1">
                  Every book has a hook.
                </span>
                <p className="text-xs text-stone">
                  We isolate the core trope, tension, or character arc that resonates deeply with modern readers.
                </p>
              </div>
            </div>

            {/* Follow Instagram Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-stone-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                <Instagram className="w-4 h-4 text-coral" />
                <span>Follow @whynotnovels on Instagram</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </a>
              <span className="text-xs text-stone">Living portfolio of real reader engagement</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
