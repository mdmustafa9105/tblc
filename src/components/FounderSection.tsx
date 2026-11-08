'use client';
import React from 'react';
import { ArrowUpRight, Instagram, Users, Sparkles } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="media-engine" className="py-24 md:py-32 bg-bone/40 border-t border-bone-dark/50" aria-label="Our Media Engine">
      {/* Anchor alias for legacy links */}
      <span id="founder" className="sr-only" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Media Channel Visual Showcase (5 cols / 42%) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-700 via-stone-900 to-ink-950 shadow-2xl border border-stone-400/40">
              
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-ink-950/30 mix-blend-multiply z-10" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8 z-20 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                    Proprietary Media Channel
                  </span>
                  <a
                    href="https://instagram.com/whynotnovels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-coral backdrop-blur-md flex items-center justify-center text-white transition-colors"
                    aria-label="View @whynotnovels on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-coral text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                    Founder-Led Community
                  </span>
                  <h3 className="font-serif text-3xl font-bold tracking-tight text-white leading-tight">
                    @whynotnovels
                  </h3>
                  <p className="text-sm font-sans text-stone-200 leading-relaxed">
                    Founded by Ariba, creative director and lifelong avid reader. Testing book hooks in real time with real readers.
                  </p>
                  <p className="font-serif italic text-xs text-stone-300 pt-2 border-t border-white/20">
                    "We started as readers. Now we launch books."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 bg-paper border border-bone-dark p-4 rounded-2xl shadow-xl z-30 max-w-[210px]">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-coral" />
                <span className="font-serif font-bold text-lg text-ink">50,000+</span>
              </div>
              <p className="text-[11px] text-stone font-sans leading-tight">
                Dedicated fiction readers following @whynotnovels
              </p>
            </div>

          </div>

          {/* Right Column: Narrative & Unfair Advantage (7 cols / 58%) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bone border border-bone-dark text-xs font-mono uppercase tracking-wider text-coral font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                Our Media Engine
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.08]">
                Built by a reader the internet <br className="hidden sm:inline" />
                <span className="italic font-normal text-coral">actually listens to.</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                We don’t just advise authors on reader attention—we build it ourselves every day. Before founding The Book Launch Company, Ariba grew <strong className="text-ink font-semibold">@whynotnovels</strong> from zero into a literary community of over 50,000 active readers, generating millions of organic monthly views.
              </p>
              <p>
                She didn’t learn book marketing from agency textbooks. She learned it by discovering what causes an avid reader to stop scrolling mid-feed, screenshot a quote, add a title to their TBR, and purchase a novel on release week.
              </p>
              <p className="font-medium text-ink">
                Every author campaign we take on benefits directly from that real-time algorithmic testing ground, creative hook instinct, and passionate reader network.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-paper border border-bone-dark shadow-xs space-y-1">
                <span className="font-serif font-bold text-sm text-ink block">
                  Readers, not impressions.
                </span>
                <p className="text-xs text-stone leading-relaxed">
                  We measure success by saves, shares, and purchase intent — not vanity video view counts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-paper border border-bone-dark shadow-xs space-y-1">
                <span className="font-serif font-bold text-sm text-ink block">
                  Every book has a hook.
                </span>
                <p className="text-xs text-stone leading-relaxed">
                  We isolate the core trope, tension, or character arc that resonates deeply with modern readers.
                </p>
              </div>
            </div>

            {/* Follow Link */}
            <div className="pt-2">
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral-600 transition-colors group min-h-[44px]"
              >
                <span>Explore @whynotnovels on Instagram</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
