'use client';
import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX, Sparkles, Mic } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="services" className="bg-white text-black py-24 sm:py-32 border-b border-black/10" aria-label="Our Services">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Section Header (Atomik Reference Thesis Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-[700px] space-y-4">
            <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] font-sans">
              Our Services
            </span>
            <h2 className="display text-[32px] sm:text-[36px] font-semibold tracking-[0.01em] text-[#000000] leading-[1.1]">
              Reader attention is the moat.
              <br />
              <span className="text-[#7D7D7D]">We build yours.</span>
            </h2>
          </div>

          <div className="max-w-[400px] space-y-4">
            <p className="font-sans text-[15px] font-[450] text-[#666666] leading-[1.5]">
              Great books need more than a launch date. They need the right story, creative direction and distribution to reach their readers.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#000000] hover:text-[#666666] transition-colors group"
            >
              <span>Discuss custom campaign scopes</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Services Composition Grid (1 Featured Large Top + 2 Side-by-Side Bottom) */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Card 01 (Large Top Featured Composition): Launch Virality & Rollouts */}
          <div className="rounded-[16px] bg-[#06101A] text-white p-8 sm:p-12 lg:p-14 border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Subtle ambient lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0072F5]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Offer Details & Metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[12px] font-medium text-[#CCCDCD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0072F5] animate-pulse" />
                  <span>01 / Full-Cycle Launches</span>
                </div>

                <h3 className="display text-[26px] sm:text-[32px] font-semibold text-white tracking-[0.01em] leading-[1.1]">
                  Launch Virality
                </h3>

                <p className="font-sans text-[15px] font-[450] text-[#CCCDCD] leading-[1.5]">
                  High-impact short-form launch campaigns paired with curated creator waves on BookTok and Reels to guarantee release-week velocity and Amazon chart positioning.
                </p>

                {/* Key Metrics Counter (Atomik Style) */}
                <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
                  <div>
                    <span className="font-sans text-3xl sm:text-4xl font-semibold text-white block">
                      1.4M
                    </span>
                    <span className="text-[13px] text-[#7D7D7D] font-sans mt-1 block">
                      Peak Campaign Views
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-3xl sm:text-4xl font-semibold text-white block">
                      +320%
                    </span>
                    <span className="text-[13px] text-[#7D7D7D] font-sans mt-1 block">
                      Pre-Order Trajectory
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2.5 px-4 h-10 rounded-full bg-[#E6E6E6] text-black font-semibold text-[13px] hover:bg-white transition-colors"
                  >
                    <span>Plan your release launch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Campaign Video Preview (Atomik Reference Deliverable Visual) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px] aspect-[9/12] sm:aspect-[9/13] rounded-[16px] overflow-hidden bg-[#010405] border border-white/15 shadow-2xl flex flex-col justify-between p-5">
                  {/* Top Bar with Live Badge & Sound Toggle */}
                  <div className="flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[12px] font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-[#0072F5] animate-ping" />
                      <span>1,420,000 views</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white transition-colors"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Center Video Content: Book Hook Simulation */}
                  <div className="my-auto text-center space-y-3 z-10 px-4">
                    <div className="w-28 h-40 mx-auto rounded-[12px] bg-[#06101A] border border-white/20 shadow-2xl p-3 flex flex-col justify-between text-left">
                      <span className="text-[9px] uppercase tracking-widest text-[#7D7D7D] font-sans">
                        Elena Vance
                      </span>
                      <h4 className="font-sans font-semibold text-[13px] text-white leading-tight">
                        The Silent Hollow
                      </h4>
                      <span className="text-[9px] text-[#0072F5] font-semibold">
                        THRILLER
                      </span>
                    </div>

                    <div className="p-3 rounded-[12px] bg-black/70 backdrop-blur-md border border-white/10">
                      <p className="font-sans text-[13px] text-white font-medium italic leading-snug">
                        "POV: You just reached chapter 28 and realize the detective was never investigating a stranger."
                      </p>
                    </div>
                  </div>

                  {/* Bottom Campaign Metadata */}
                  <div className="flex items-center justify-between text-[12px] text-[#7D7D7D] z-10 border-t border-white/10 pt-3">
                    <span className="font-sans font-medium text-white">The Book Launch Co. Wave</span>
                    <span className="font-mono text-[#7D7D7D]">Launch Week</span>
                  </div>

                  {/* Background Video Texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Row: 2 Supporting Service Compositions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 02 (Left): Backlist Revival & Trope Lift */}
            <div className="rounded-[16px] bg-[#06101A] text-white p-8 sm:p-10 border border-white/10 flex flex-col justify-between h-full min-h-[440px] relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono text-[#7D7D7D] uppercase tracking-wider">
                    02 / Backlist Revival
                  </span>
                  <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-white/10 text-[#CCCDCD]">
                    Published Catalog
                  </span>
                </div>

                {/* Visual Deliverable Composition: Trope Repositioning */}
                <div className="p-5 rounded-[12px] bg-[#010405] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[12px] text-[#7D7D7D]">
                    <span className="flex items-center gap-1.5 font-medium text-white">
                      <Sparkles className="w-3.5 h-3.5 text-[#0072F5]" /> Trope Algorithm Repositioning
                    </span>
                    <span className="text-[#0072F5] font-mono text-[11px]">+210% Royalty Lift</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#0072F5]/20 border border-[#0072F5]/40 text-[12px] font-medium text-[#0072F5]">
                      #EnemiesToLovers
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[12px] text-[#CCCDCD]">
                      #DarkAcademia
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[12px] text-[#CCCDCD]">
                      #MorallyGrey
                    </span>
                  </div>

                  <p className="text-[13px] text-[#CCCDCD] font-sans italic pt-1">
                    "Repositioned Kaelen Thorne's 2023 fantasy trilogy around viral BookTok tropes to unlock 850,000 new organic readers."
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="display text-[22px] sm:text-[26px] font-semibold text-white tracking-[0.01em]">
                    Backlist Revival
                  </h3>
                  <p className="font-sans text-[15px] font-[450] text-[#CCCDCD] leading-[1.5]">
                    Older books still have hundreds of thousands of readers waiting. We isolate trending reader tropes and redeploy organic hooks to generate sustained monthly royalties.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-[#0072F5] transition-colors"
                >
                  <span>Explore backlist revival</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[12px] font-mono text-[#7D7D7D]">4-Week Activation</span>
              </div>
            </div>

            {/* Card 03 (Right): Author Brand & Podcasts */}
            <div className="rounded-[16px] bg-[#06101A] text-white p-8 sm:p-10 border border-white/10 flex flex-col justify-between h-full min-h-[440px] relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono text-[#7D7D7D] uppercase tracking-wider">
                    03 / Author Media &amp; Podcasts
                  </span>
                  <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-white/10 text-[#CCCDCD]">
                    Monthly Retainer
                  </span>
                </div>

                {/* Visual Deliverable Composition: Waterfall Repurposing Pipeline */}
                <div className="p-5 rounded-[12px] bg-[#010405] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[12px] text-[#7D7D7D]">
                    <span className="flex items-center gap-1.5 font-medium text-white">
                      <Mic className="w-3.5 h-3.5 text-[#0072F5]" /> 1 Long-Form Episode (45m)
                    </span>
                    <span className="text-[#0072F5] font-mono text-[11px]">→ 15+ Assets</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <span className="font-semibold text-white block text-[12px]">1 Full Video</span>
                      <span className="text-[10px] text-[#7D7D7D]">YouTube/Spotify</span>
                    </div>
                    <div className="p-2 rounded bg-[#0072F5]/20 border border-[#0072F5]/40 text-[#0072F5]">
                      <span className="font-semibold block text-[12px]">12 Clips</span>
                      <span className="text-[10px]">TikTok/Reels</span>
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <span className="font-semibold text-white block text-[12px]">2 Essays</span>
                      <span className="text-[10px] text-[#7D7D7D]">Substack</span>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#CCCDCD] font-sans italic pt-1">
                    "Authors film just ~60 minutes per week. We handle all scripting, cutting, sound design, and cross-channel distribution."
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="display text-[22px] sm:text-[26px] font-semibold text-white tracking-[0.01em]">
                    Author Brand &amp; Podcasts
                  </h3>
                  <p className="font-sans text-[15px] font-[450] text-[#CCCDCD] leading-[1.5]">
                    Build a lasting personal brand that readers follow for your ideas—not just a single title. Turn one recorded conversation into weeks of multi-channel reach.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-[#0072F5] transition-colors"
                >
                  <span>Build your author engine</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[12px] font-mono text-[#7D7D7D]">~1 hr / week</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
