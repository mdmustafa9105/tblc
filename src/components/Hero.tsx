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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Conversion (55% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:space-y-8 z-10">
            
            {/* Eyebrow Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bone border border-bone-dark/50 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-ink uppercase font-sans">
                The New-Media Launch Partner for Authors
              </span>
            </div>

            {/* H1 Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.06] tracking-tight text-ink">
              Launch the book<span className="text-coral">.</span>
              <br />
              Build the <span className="italic font-normal text-ink">author.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg sm:text-xl text-stone max-w-[620px] leading-relaxed">
              Short-form video campaigns, author branding, podcasts, and algorithmic reader discovery. From launch day to sustained backlist momentum — powered by the community behind <strong className="text-ink font-semibold">@whynotnovels</strong>.
            </p>

            {/* Twin CTA Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-coral hover:bg-coral-400 active:bg-coral-600 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral"
              >
                <span>Discuss Your Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-stone-300 text-ink hover:bg-bone hover:border-ink transition-all duration-200 font-semibold text-base min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              >
                <span>Explore Our Work</span>
                <span className="text-stone">↓</span>
              </a>
            </div>

            {/* Micro-Proof Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone border-t border-bone-dark/40 w-full">
              <div className="flex items-center gap-1 text-coral">
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
                <Star className="w-4 h-4 fill-coral" />
              </div>
              <span className="font-medium text-ink">13M+ readers reached</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>Trusted by indie &amp; published authors worldwide</span>
            </div>

          </div>

          {/* Right Column: Dynamic Living Video Media (45% / 5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
            
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-radial from-bone to-transparent rounded-full blur-2xl opacity-70 pointer-events-none" />

            {/* Overlapping Phone Mockup Stack (iPhone Pro 9:16 silhouette) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[520px] sm:h-[580px]">
              
              {/* Back Phone: Secondary Book Campaign (Tilted) */}
              <div className="absolute top-6 -left-6 sm:-left-10 w-[240px] sm:w-[270px] h-[440px] sm:h-[490px] rounded-[36px] bg-ink-800 p-2.5 shadow-2xl border-2 border-stone-600/40 transform -rotate-6 opacity-85 transition-transform duration-300 hover:rotate-0 hover:z-20 hidden sm:block">
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-br from-ink-900 to-ink-700 flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span className="font-serif">@whynotnovels</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/20">BookTok</span>
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded bg-coral/90 text-[11px] font-bold tracking-wide uppercase">
                      #DarkAcademia
                    </span>
                    <p className="text-sm font-serif italic leading-snug">
                      "If you loved The Secret History, you need this locked-room mystery right now."
                    </p>
                    <div className="flex items-center gap-3 text-xs pt-1 text-white/80">
                      <span>850K views</span>
                      <span>•</span>
                      <span>28K saves</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Phone: Primary Featured Viral Campaign */}
              <div className="relative z-10 w-[280px] sm:w-[310px] h-[500px] sm:h-[550px] mx-auto rounded-phone bg-ink p-3 shadow-2xl border-2 border-stone-500/50 flex flex-col justify-between">
                
                {/* Phone Speaker & Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-ink-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-ink-800 mr-2" />
                  <div className="w-2 h-2 rounded-full bg-ink-700" />
                </div>

                {/* Inner Video Simulation Container */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-stone-600 via-ink-850 to-ink-950 flex flex-col justify-between p-4 text-white">
                  
                  {/* Top Bar with Live View Counter Pill */}
                  <div className="flex items-center justify-between z-10 pt-4">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/75 backdrop-blur-md border border-white/10 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
                      <span>1.4M views</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-11 h-11 rounded-full bg-ink/80 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral min-w-[44px] min-h-[44px]"
                      aria-label={isMuted ? "Unmute campaign video" : "Mute campaign video"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Visual Centerpiece: Book Jacket & Reader Hook */}
                  <div className="my-auto flex flex-col items-center text-center space-y-3 px-2">
                    {/* Simulated 2D Hardcover Jacket with Soft Shadow */}
                    <div className="w-32 h-44 rounded-md bg-stone-700 border border-white/20 shadow-xl flex flex-col justify-between p-2.5 text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-coral/30 to-transparent opacity-60" />
                      <span className="text-[10px] tracking-widest text-white/70 uppercase font-sans">
                        A Novel By Elena Vance
                      </span>
                      <h4 className="font-serif font-bold text-sm tracking-tight text-white leading-tight">
                        The Silent Hollow
                      </h4>
                      <span className="text-[9px] text-coral font-sans font-semibold">
                        PSYCHOLOGICAL THRILLER
                      </span>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium text-white/95">
                      POV: You just read chapter 28
                    </span>
                  </div>

                  {/* Bottom Campaign Metadata & Social Proof Metrics */}
                  <div className="space-y-3 z-10 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/90">
                      <div className="flex items-center gap-1 font-serif">
                        <span className="font-bold">The Book Launch Co.</span>
                        <span className="text-coral">✓</span>
                      </div>
                      <span className="text-[11px] text-white/70">Launch Week Campaign</span>
                    </div>

                    <div className="flex items-center justify-around text-xs py-1 px-2 rounded-xl bg-white/10 backdrop-blur-xs">
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
      </div>
    </section>
  );
};
