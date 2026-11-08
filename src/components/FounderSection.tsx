'use client';
import React from 'react';
import { ArrowUpRight, Users, Sparkles } from 'lucide-react';

interface FounderSectionProps {
  onOpenBooking?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="media" className="bg-white text-black py-24 sm:py-32 border-b border-black/10" aria-label="Our Media Engine">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Media Channel Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[16px] overflow-hidden bg-[#06101A] border border-white/10 shadow-2xl p-8 flex flex-col justify-between text-white">
              
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest font-medium bg-white/10 px-3 py-1 rounded-full text-[#CCCDCD]">
                  Proprietary Media Channel
                </span>
                <span className="text-[#0072F5] text-[12px] font-mono font-medium">@whynotnovels</span>
              </div>

              <div className="space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-[6px] bg-[#0072F5]/20 text-[#0072F5] text-[11px] font-medium uppercase tracking-wider">
                  Founder-Led Community
                </span>
                <h3 className="display text-3xl sm:text-4xl font-semibold text-white tracking-[0.01em] leading-tight">
                  @whynotnovels
                </h3>
                <p className="text-[13px] text-[#CCCDCD] font-sans leading-relaxed">
                  Founded by Ariba, creative director and lifelong reader. Testing book hooks in real time with an engaged audience.
                </p>
                <p className="font-serif italic text-[12px] text-[#7D7D7D] pt-2 border-t border-white/10">
                  "We started as readers. Now we launch books."
                </p>
              </div>

              {/* Floating Metric Pill */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0072F5]" />
                  <span className="font-sans font-semibold text-[15px] text-white">50,000+ Readers</span>
                </div>
                <span className="text-[11px] text-[#7D7D7D]">Weekly Engagement</span>
              </div>

            </div>

          </div>

          {/* Right Column: Narrative & Unfair Advantage (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] font-sans block">
                Built by a reader of the internet
              </span>
              <h2 className="display text-[32px] sm:text-[36px] font-semibold text-[#000000] tracking-[0.01em] leading-[1.1]">
                Understanding readers is our
                <br />
                <span className="text-[#7D7D7D]">unfair distribution advantage.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#666666] text-[15px] font-[450] leading-[1.5] font-sans">
              <p>
                We don’t just advise authors on reader attention—we build it ourselves every day. Before founding The Book Launch Company, Ariba grew <strong className="text-black font-semibold">@whynotnovels</strong> from zero into an organic community of over 50,000 active readers, generating millions of monthly views.
              </p>
              <p>
                She didn’t learn book marketing from agency textbooks. She learned it by discovering what causes an avid reader to stop scrolling mid-feed, screenshot a quote, add a title to their TBR, and purchase a novel on release week.
              </p>
              <p className="text-black font-medium">
                Every author campaign we take on benefits directly from that real-time algorithmic testing ground, creative hook instinct, and passionate reader network.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[12px] bg-[#F2F2F2] space-y-1">
                <span className="font-sans font-semibold text-[14px] text-black block">
                  Readers, not impressions.
                </span>
                <p className="text-[13px] text-[#666666] leading-[1.4]">
                  We measure success by saves, shares, and purchase intent — not vanity video view counts.
                </p>
              </div>

              <div className="p-4 rounded-[12px] bg-[#F2F2F2] space-y-1">
                <span className="font-sans font-semibold text-[14px] text-black block">
                  Every book has a hook.
                </span>
                <p className="text-[13px] text-[#666666] leading-[1.4]">
                  We isolate the core trope, tension, or character arc that resonates deeply with modern readers.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="pt-2 flex items-center gap-6">
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black hover:text-[#0072F5] transition-colors"
              >
                <span>Explore @whynotnovels on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
