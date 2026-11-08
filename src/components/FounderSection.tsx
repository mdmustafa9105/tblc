'use client';
import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Instagram, Users, Sparkles, BookOpen, Play } from 'lucide-react';

interface FounderSectionProps {
  onOpenBooking?: () => void;
}

const REEL_PREVIEWS = [
  {
    id: 'reel-1',
    title: '3 tropes that make readers instantly buy',
    category: 'Reader Psychology',
    duration: '0:22',
  },
  {
    id: 'reel-2',
    title: 'POV: A plot twist that changes everything',
    category: 'BookTok Hook',
    duration: '0:18',
  },
  {
    id: 'reel-3',
    title: 'Debut spotlight: Books you need on your TBR',
    category: 'New Release',
    duration: '0:25',
  },
];

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="founder" className="bg-[#FAFAFA] text-[#171717] py-24 sm:py-32 border-b border-black/10" aria-label="Founder and Reader Community">
      <div id="media" className="sr-only" />
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Founder & Media Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Founder Card */}
            <div className="p-6 sm:p-7 rounded-[20px] bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-6">
              
              {/* Founder Portrait Frame */}
              <div className="relative aspect-[4/5] rounded-[14px] overflow-hidden bg-[#EFECE6] border border-black/10 flex flex-col justify-end p-5 text-white">
                
                {/* Background Image or Editorial Fallback */}
                {!imageError ? (
                  <img
                    src="/assets/founder/ariba-founder.jpg"
                    alt="Ariba, Founder & Creative Director of The Book Launch Company"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2E2824] via-[#1F1B18] to-[#12100E] flex flex-col items-center justify-center p-6 text-center text-white/90">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                      <BookOpen className="w-7 h-7 text-[#D1B48C]" />
                    </div>
                    <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                      Ariba
                    </span>
                    <span className="text-[12px] uppercase tracking-widest text-[#D1B48C] font-mono mt-1">
                      Founder &amp; Creative Director
                    </span>
                    <span className="text-[11px] text-white/60 font-sans mt-3 max-w-[220px]">
                      Slot: <code className="font-mono text-white/80">public/assets/founder/ariba-founder.jpg</code>
                    </span>
                  </div>
                )}

                {/* Subtle Gradient Scrim at Bottom of Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Portrait Caption Overlay */}
                <div className="relative z-10 space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[11px] font-medium text-white/90">
                    <Sparkles className="w-3 h-3 text-[#D1B48C]" />
                    <span>Founder &amp; Creative Director</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide">
                    Ariba
                  </h3>
                  <p className="text-[12px] text-white/80 font-sans">
                    Creator of <strong className="text-white">@whynotnovels</strong>
                  </p>
                </div>

              </div>

              {/* Three Mini-Reel Previews from @whynotnovels */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-[#71717A]">
                  <span>Daily Hook Testing Ground</span>
                  <span className="text-[#0072F5] font-mono">@whynotnovels</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {REEL_PREVIEWS.map((reel) => (
                    <a
                      key={reel.id}
                      href="https://instagram.com/whynotnovels"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative aspect-[9/14] rounded-[10px] bg-[#181A20] border border-black/10 overflow-hidden p-2 flex flex-col justify-between text-white hover:border-[#0072F5] transition-all"
                    >
                      <div className="flex items-center justify-between text-[8px] text-white/60 font-mono">
                        <span>{reel.duration}</span>
                        <Play className="w-2.5 h-2.5 text-[#0072F5] fill-[#0072F5] group-hover:scale-110 transition-transform" />
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[8px] uppercase text-[#D1B48C] font-mono block">
                          {reel.category}
                        </span>
                        <p className="text-[9px] font-sans text-white/90 line-clamp-2 leading-tight">
                          {reel.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Channel Button */}
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-[10px] bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[13px] font-semibold text-[#111827] flex items-center justify-center gap-2 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Explore @whynotnovels on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
              </a>

            </div>

          </div>

          {/* Right Column: Editorial Narrative & Advantage (7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            
            {/* Section Heading with Exact Approved Kicker & Headline */}
            <div className="space-y-4">
              <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] font-sans block">
                The Founder &amp; The Community
              </span>
              <h2 className="display text-[32px] sm:text-[40px] font-semibold text-[#111827] tracking-[0.01em] leading-[1.1]">
                BUILT BY A READER
                <br />
                <span className="text-[#7D7D7D]">THE INTERNET LISTENS TO.</span>
              </h2>
            </div>

            {/* Narrative Body Copy Directly Addressing Prompt 10 & Website Brief */}
            <div className="space-y-4 text-[#52525B] text-[15px] font-[450] leading-[1.6] font-sans">
              <p>
                Traditional book PR relies on legacy methods: sending cold press releases to journalists who rarely review them and hoping for broad publicity. The Book Launch Company was founded on an entirely different truth: <strong className="text-[#111827] font-semibold">reader attention in modern feeds is the only sustainable moat.</strong>
              </p>
              <p>
                Before launching the agency, Ariba grew <strong className="text-[#111827] font-semibold">@whynotnovels</strong> from zero into an organic community of over 50,000 active readers, generating millions of monthly views across TikTok and Instagram.
              </p>
              <p>
                She didn’t learn book marketing from agency presentations. She learned it on the digital front line: discovering exactly what causes an avid reader to stop scrolling mid-feed, screenshot a quote, add a title to their TBR, and purchase a novel on release week.
              </p>
              <p className="text-[#111827] font-medium">
                Every author campaign we craft inherits that real-time algorithmic testing ground, creative hook instinct, and passionate reader network. We don’t guess what readers want—we talk to them every day.
              </p>
            </div>

            {/* 2 Core Editorial Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-[14px] bg-white border border-black/[0.08] shadow-sm hover:border-black/20 hover:shadow-md transition-all space-y-2">
                <span className="font-sans font-semibold text-[14px] text-[#111827] block">
                  Readers, not vanity impressions.
                </span>
                <p className="text-[13px] text-[#52525B] leading-[1.45]">
                  We measure success by saves, shares, and purchase intent — not empty view counts that never translate to book sales.
                </p>
              </div>

              <div className="p-5 rounded-[14px] bg-white border border-black/[0.08] shadow-sm hover:border-black/20 hover:shadow-md transition-all space-y-2">
                <span className="font-sans font-semibold text-[14px] text-[#111827] block">
                  Every book has a hook.
                </span>
                <p className="text-[13px] text-[#52525B] leading-[1.45]">
                  We isolate the core trope, tension, or character arc that resonates deeply with modern readers and turn it into native short-form video.
                </p>
              </div>
            </div>

            {/* Direct Action Area */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 h-10 rounded-full bg-black text-white font-semibold text-[13px] hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>Discuss your book with Ariba</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#52525B] hover:text-[#111827] transition-colors"
              >
                <span>Visit @whynotnovels</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
