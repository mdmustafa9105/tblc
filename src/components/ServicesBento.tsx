'use client';
import React, { useState } from 'react';
import { ArrowRight, Play, Pause, Video, Mic, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="services" className="bg-[#FAFAFA] text-[#171717] py-24 sm:py-32 border-b border-black/[0.08]" aria-label="Our Services">
      <div className="mx-auto w-[calc(100%-32px)] max-w-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-[700px] space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#71717A] font-sans">
              Four Core Services
            </span>
            <h2 className="display text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#111827] leading-[1.1]">
              Reader attention is the moat.
              <br />
              <span className="text-[#71717A]">We build yours.</span>
            </h2>
          </div>

          <div className="max-w-[420px] space-y-3">
            <p className="font-sans text-[15px] font-[450] text-[#52525B] leading-[1.6]">
              Great books need more than a launch date. They need the right story, creative direction and social distribution to reach their readers.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111827] hover:text-[#0072F5] transition-colors group"
            >
              <span>Discuss custom campaign scopes</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="space-y-8">
          
          {/* SERVICE 01 (Featured Top Card): Book Launch Virality with Realistic Smartphone Mockup */}
          <div className="rounded-[20px] bg-white border border-black/[0.08] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06)] hover:border-black/20 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Copy & Phases */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] text-[12px] font-medium text-[#111827] border border-black/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0072F5]" />
                  <span>Service 01 · New Releases</span>
                </div>

                <h3 className="display text-[28px] sm:text-[36px] font-semibold text-[#111827] tracking-tight leading-[1.1]">
                  Book Launches
                </h3>

                <p className="font-sans text-[15px] sm:text-[16px] font-[450] text-[#52525B] leading-[1.6] max-w-xl">
                  We turn your release into a synchronized digital event. From pre-order teasing to release-week BookTok surges, we script and produce short-form hooks that put your book in front of high-intent readers.
                </p>

                {/* Editorial Campaign Phases */}
                <div className="space-y-3 pt-2 border-t border-black/[0.08]">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-semibold text-[#111827] bg-[#F4F4F5] px-2 py-0.5 rounded mt-0.5">
                      PHASE 01
                    </span>
                    <div>
                      <strong className="text-[13px] text-[#111827] font-semibold block">Pre-Launch Cover Reveal &amp; ARC Seeding (Weeks –8 to –1)</strong>
                      <p className="text-[13px] text-[#71717A]">Curating teaser hooks and seeding advance reader copies to BookTok creators.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-semibold text-[#111827] bg-[#F4F4F5] px-2 py-0.5 rounded mt-0.5">
                      PHASE 02
                    </span>
                    <div>
                      <strong className="text-[13px] text-[#111827] font-semibold block">Launch-Week Social Video Wave &amp; Velocity</strong>
                      <p className="text-[13px] text-[#71717A]">Synchronized short-form wave pushing launch-day retail velocity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-semibold text-[#111827] bg-[#F4F4F5] px-2 py-0.5 rounded mt-0.5">
                      PHASE 03
                    </span>
                    <div>
                      <strong className="text-[13px] text-[#111827] font-semibold block">Post-Release Reader Discussions &amp; Sustained Buzz</strong>
                      <p className="text-[13px] text-[#71717A]">Turning early readers into advocates and maintaining chart visibility.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2.5 px-6 h-11 rounded-full bg-[#111827] text-white font-semibold text-[13px] hover:bg-black transition-colors shadow-sm"
                  >
                    <span>Discuss Your Launch Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: ONE Realistic Smartphone Mockup Displaying Campaign Reel */}
              <div className="lg:col-span-5 flex justify-center">
                {/* Realistic Phone Enclosure with Titanium Finish */}
                <div className="relative w-full max-w-[310px] aspect-[9/19] rounded-[44px] p-3 bg-gradient-to-b from-[#2A2B2F] via-[#1E1F23] to-[#121316] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-stone-600/40">
                  
                  {/* Speaker Grill & Dynamic Island Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-black z-30 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0F1014] mr-2" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1A1C24]" />
                  </div>

                  {/* Glass Screen */}
                  <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black flex flex-col justify-between p-4 z-20">
                    
                    {/* Ambient Blurred Video Texture Behind Screen */}
                    <div 
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 opacity-40 pointer-events-none"
                      style={{ backgroundImage: "url('/images/hero-clean-book.jpg')" }}
                    />

                    {/* Dark gradient overlay for UI legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none z-10" />

                    {/* Screen Header: Agency Campaign Badge */}
                    <div className="relative z-20 pt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0072F5] animate-pulse" />
                        <span>Campaign Reel</span>
                      </span>
                      <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">
                        9:16 VERTICAL
                      </span>
                    </div>

                    {/* Center Video Content & Interactive Play Button */}
                    <div className="relative z-20 my-auto text-center space-y-3 py-6">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center mx-auto hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl"
                        aria-label={isPlaying ? "Pause campaign Reel" : "Play campaign Reel"}
                      >
                        {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black translate-x-0.5" />}
                      </button>

                      <div className="p-3 rounded-[12px] bg-black/60 backdrop-blur-md border border-white/10 max-w-[230px] mx-auto text-left">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                          Curated Viral Hook
                        </span>
                        <p className="text-[12px] text-white font-medium italic mt-0.5 leading-snug">
                          "POV: You just reached chapter 28 and realize the detective was never investigating a stranger."
                        </p>
                      </div>
                    </div>

                    {/* Screen Bottom: Author & Reel Metadata */}
                    <div className="relative z-20 space-y-2 border-t border-white/15 pt-3">
                      <div className="flex items-center justify-between text-[11px] text-white/90">
                        <span className="font-semibold">The Silent Hollow · Launch Week</span>
                        <span className="text-[10px] font-mono text-white/60">0:32</span>
                      </div>
                      <p className="text-[10px] text-white/50 font-mono text-left">
                        Slot: public/assets/video/launch-hook.mp4
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM ROW: 3 Editorial Supporting Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* SERVICE 02: Backlist Revival */}
            <div className="rounded-[16px] bg-white border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:border-black/20 hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Visual: Book Cover Alongside a Phone Frame Showing Social Rediscovery */}
                <div className="p-5 rounded-[12px] bg-[#F8F9FA] border border-black/[0.06] flex items-center justify-between gap-4">
                  
                  {/* Left: Book Cover Slot */}
                  <div className="w-24 aspect-[2/3] rounded-[6px] bg-[#2A1820] border border-black/10 shadow-md p-2 flex flex-col justify-between text-left flex-shrink-0">
                    <span className="text-[7px] uppercase font-mono text-white/60">Backlist Title</span>
                    <h4 className="font-serif text-[10px] font-bold text-pink-100 leading-tight">
                      Crown of Starlight
                    </h4>
                    <span className="text-[7px] font-sans text-white/50">Book 1</span>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex flex-col items-center text-[#71717A] text-[10px] font-mono">
                    <span>→</span>
                    <span className="text-[9px]">Rediscovery</span>
                  </div>

                  {/* Right: Phone Frame Preview */}
                  <div className="w-20 aspect-[9/16] rounded-[8px] bg-[#0A0D12] border border-black/20 shadow-md p-1.5 flex flex-col justify-between text-white flex-shrink-0 text-left">
                    <span className="text-[6px] font-mono text-[#0072F5]">#BookTok</span>
                    <p className="text-[7px] italic text-white/80 leading-tight">
                      "Found my next series..."
                    </p>
                    <span className="text-[6px] font-mono text-white/40">Reel Clip</span>
                  </div>

                </div>

                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    02 · Catalog Strategy
                  </span>
                  <h3 className="display text-[22px] font-semibold text-[#111827] tracking-tight">
                    Backlist Revival
                  </h3>
                  <p className="font-sans text-[14px] font-[450] text-[#52525B] leading-[1.6]">
                    A book's release date is not its expiry date. We bring existing titles back into reader conversations through fresh creative angles, genre-led content and renewed social discovery.
                  </p>
                </div>

                {/* 3 Concise Deliverables */}
                <div className="space-y-2 pt-2 border-t border-black/[0.08] text-[13px] text-[#52525B]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">1.</span>
                    <span>Trope &amp; comp re-identification for trending reader tags</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">2.</span>
                    <span>Hook-led short-form creative video campaigns</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">3.</span>
                    <span>Creator seeding waves &amp; sustained social discovery</span>
                  </p>
                </div>

              </div>

              <div className="pt-6 border-t border-black/[0.08] mt-6">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111827] hover:text-[#0072F5] transition-colors"
                >
                  <span>Explore Backlist Revival</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* SERVICE 03: Author Brand & Content */}
            <div className="rounded-[16px] bg-white border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:border-black/20 hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Visual: Author Filming Session & Content Sequence */}
                <div className="p-5 rounded-[12px] bg-[#F8F9FA] border border-black/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#71717A]">
                    <span className="flex items-center gap-1.5 font-medium text-[#111827]">
                      <Video className="w-3.5 h-3.5 text-[#0072F5]" /> Weekly 60-Min Filming
                    </span>
                    <span className="font-mono text-[10px] text-[#71717A]">Done-For-You</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded bg-white border border-black/[0.08]">
                      <span className="font-semibold text-[#111827] block text-[11px]">1. Voice</span>
                      <span className="text-[9px] text-[#71717A]">Trope hooks</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-black/[0.08]">
                      <span className="font-semibold text-[#111827] block text-[11px]">2. Film</span>
                      <span className="text-[9px] text-[#71717A]">60m/week</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-black/[0.08]">
                      <span className="font-semibold text-[#111827] block text-[11px]">3. Post</span>
                      <span className="text-[9px] text-[#71717A]">Full rollout</span>
                    </div>
                  </div>

                  <p className="text-[12px] text-[#52525B] italic pt-1">
                    "Authors film just ~60 minutes per week. We handle scripting, cutting, and cross-channel posting."
                  </p>
                </div>

                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    03 · Monthly Partnership
                  </span>
                  <h3 className="display text-[22px] font-semibold text-[#111827] tracking-tight">
                    Author Brand &amp; Content
                  </h3>
                  <p className="font-sans text-[14px] font-[450] text-[#52525B] leading-[1.6]">
                    Build an author readers want to follow. We create a consistent content identity around your voice, your books and the readers who will care about them.
                  </p>
                </div>

                {/* 3 Concise Deliverables */}
                <div className="space-y-2 pt-2 border-t border-black/[0.08] text-[13px] text-[#52525B]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">1.</span>
                    <span>Editorial voice &amp; reader trope mapping</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">2.</span>
                    <span>Weekly 60-minute filming guidance &amp; teleprompter scripts</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">3.</span>
                    <span>Multi-platform editing for Reels, TikTok &amp; YouTube Shorts</span>
                  </p>
                </div>

              </div>

              <div className="pt-6 border-t border-black/[0.08] mt-6">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111827] hover:text-[#0072F5] transition-colors"
                >
                  <span>Build Your Author Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* SERVICE 04: Author Podcasts */}
            <div className="rounded-[16px] bg-white border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:border-black/20 hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Visual: Podcast Studio Recording Visual & Repurposing Flow */}
                <div className="p-5 rounded-[12px] bg-[#F8F9FA] border border-black/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#71717A]">
                    <span className="flex items-center gap-1.5 font-medium text-[#111827]">
                      <Mic className="w-3.5 h-3.5 text-[#0072F5]" /> 1 Long-Form Episode
                    </span>
                    <span className="font-mono text-[10px] text-[#71717A]">→ 12+ Clips</span>
                  </div>

                  <div className="p-3 rounded-[8px] bg-white border border-black/[0.08] space-y-2 text-left">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#111827]">
                      <span>Full Studio Episode (45m)</span>
                      <span className="font-mono text-[9px] text-[#71717A]">Apple/Spotify</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#0072F5] font-medium">
                      <span>↳</span>
                      <span>Repurposed into 12 short-form Reels &amp; 2 written essays</span>
                    </div>
                  </div>

                  <p className="text-[12px] text-[#52525B] italic pt-1">
                    "Turn one conversation into weeks of multi-channel discovery across podcast feeds and social video."
                  </p>
                </div>

                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    04 · Audio &amp; Video Production
                  </span>
                  <h3 className="display text-[22px] font-semibold text-[#111827] tracking-tight">
                    Author Podcasts
                  </h3>
                  <p className="font-sans text-[14px] font-[450] text-[#52525B] leading-[1.6]">
                    One conversation. More ways to be discovered. We help authors produce podcasts and repurpose conversations into video clips and editorial content.
                  </p>
                </div>

                {/* 3 Concise Deliverables */}
                <div className="space-y-2 pt-2 border-t border-black/[0.08] text-[13px] text-[#52525B]">
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">1.</span>
                    <span>Show concept, visual branding &amp; multi-channel launch</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">2.</span>
                    <span>Studio booking, audio mastering &amp; multi-camera video edit</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#111827] font-semibold">3.</span>
                    <span>12–15 high-converting vertical video clips per recorded episode</span>
                  </p>
                </div>

              </div>

              <div className="pt-6 border-t border-black/[0.08] mt-6">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111827] hover:text-[#0072F5] transition-colors"
                >
                  <span>Launch An Author Podcast</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
