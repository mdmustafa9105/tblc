'use client';
import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Bookmark, MessageCircle, Heart, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & Dual CTAs (55% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:space-y-8 z-10">
            
            {/* Eyebrow Kicker Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bone border border-bone-dark/50 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-ink uppercase font-sans">
                The New-Media Launch Partner for Authors
              </span>
            </div>

            {/* H1 Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-ink">
              Launch the book<span className="text-coral">.</span>
              <br />
              Build the <span className="italic font-normal text-stone-700">author.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg sm:text-xl text-stone max-w-[620px] leading-relaxed">
              Book launches, backlist revival, author content and podcasts. We help books find their readers and authors build lasting visibility — powered by the reader community behind <strong className="text-ink font-semibold">@whynotnovels</strong>.
            </p>

            {/* Dual CTAs (Matching Atomik Growth's Primary + Secondary Pills) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-coral hover:bg-coral-400 active:bg-coral-600 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2.5 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral"
              >
                <span>Discuss Your Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-stone-300 text-ink hover:bg-bone hover:border-ink transition-all duration-200 font-semibold text-base min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                <span>See Our Work</span>
                <span className="text-stone">↓</span>
              </a>
            </div>

            {/* Micro-Proof Trust Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone border-t border-bone-dark/40 w-full">
              <div className="flex items-center gap-1 text-coral">
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
              </div>
              <span className="font-semibold text-ink">13M+ readers reached</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>50K+ dedicated community</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>100% literary specialization</span>
            </div>

          </div>

          {/* Right Column: Clean Living Video Player (45% / 5 cols, Single Focused Mockup) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
            
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-radial from-bone to-transparent rounded-full blur-2xl opacity-70 pointer-events-none" />

            {/* Single Clean Vertical Phone Frame (Atomik Growth Reference) */}
            <div className="relative z-10 w-[290px] sm:w-[320px] h-[520px] sm:h-[560px] mx-auto rounded-[40px] bg-ink p-3 shadow-2xl border-2 border-stone-600/50 flex flex-col justify-between">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-ink-950 rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-ink-800 mr-2" />
                <div className="w-2 h-2 rounded-full bg-ink-700" />
              </div>

              {/* Inner Video Simulation Container */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-gradient-to-b from-stone-700 via-ink-850 to-ink-950 flex flex-col justify-between p-4 text-white">
                
                {/* Top Bar with Live View Counter Pill & Audio Toggle */}
                <div className="flex items-center justify-between z-10 pt-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md border border-white/10 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
                    <span>1.4M views</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-ink/80 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                    aria-label={isMuted ? "Unmute campaign video" : "Mute campaign video"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Center Book Feature & Creative Viral Hook */}
                <div className="my-auto flex flex-col items-center text-center space-y-3 px-2">
                  {/* Stylized Book Cover Canvas */}
                  <div className="w-32 h-44 rounded-md bg-stone-750 border border-white/20 shadow-2xl flex flex-col justify-between p-3 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-coral/30 to-transparent opacity-60" />
                    <span className="text-[9px] tracking-widest text-white/70 uppercase font-sans">
                      Elena Vance
                    </span>
                    <h4 className="font-serif font-bold text-sm tracking-tight text-white leading-tight">
                      The Silent Hollow
                    </h4>
                    <span className="text-[9px] text-coral font-sans font-semibold">
                      THRILLER
                    </span>
                  </div>

                  {/* Viral Hook Badge */}
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white/95 border border-white/10 shadow-xs">
                    POV: You just read chapter 28
                  </span>
                </div>

                {/* Bottom Campaign Metadata & Social Proof Metrics */}
                <div className="space-y-3 z-10 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/90">
                    <div className="flex items-center gap-1.5 font-serif">
                      <span className="font-bold">The Book Launch Co.</span>
                      <span className="text-coral">✓</span>
                    </div>
                    <span className="text-[11px] text-white/70 font-mono">Launch Week Wave</span>
                  </div>

                  <div className="flex items-center justify-around text-xs py-1.5 px-2 rounded-xl bg-white/10 backdrop-blur-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-coral fill-coral" />
                      <span className="font-semibold text-[11px]">114K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white/80" />
                      <span className="font-semibold text-[11px]">3,420</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bookmark className="w-3.5 h-3.5 text-coral fill-coral" />
                      <span className="font-semibold text-[11px]">42.1K</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
