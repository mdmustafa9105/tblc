'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar, Mic, Sparkles, Film, Play, Layers } from 'lucide-react';

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  // Widget 1: Launch Timeline Phase State
  const [launchPhase, setLaunchPhase] = useState<'pre' | 'blitz' | 'sustain'>('blitz');

  // Widget 2: Trope Selector for Backlist Revival
  const [selectedTrope, setSelectedTrope] = useState<'enemies' | 'darkAcademia' | 'morallyGrey'>('enemies');

  const tropeData = {
    enemies: {
      tag: '#EnemiesToLovers',
      hook: '"He swore he would kill her. By chapter 20, he was burning the world to save her."',
      comps: 'For fans of Fourth Wing & The Cruel Prince',
      simulatedReach: '850K+ Readers',
      cpm: '$2.80 est. CPM',
    },
    darkAcademia: {
      tag: '#DarkAcademia',
      hook: '"Four students. One secret society. One classmate who never made it to winter break."',
      comps: 'For fans of The Secret History & If We Were Villains',
      simulatedReach: '1.2M+ Readers',
      cpm: '$2.40 est. CPM',
    },
    morallyGrey: {
      tag: '#MorallyGreyHero',
      hook: '"The villain didn’t capture her to hurt her. He captured her because the hero left her to die."',
      comps: 'For fans of Six of Crows & From Blood and Ash',
      simulatedReach: '950K+ Readers',
      cpm: '$2.60 est. CPM',
    },
  };

  const launchPhases = {
    pre: {
      label: 'WEEKS -8 TO -1',
      title: 'ARC Seeding & Cover Reveal Buzz',
      deliverables: [
        '15–20 BookTok ARC packages deployed',
        'Cover reveal cinematic teaser (9:16 vertical)',
        'Pre-order landing page optimization'
      ],
      impact: 'Build Goodreads TBR additions & pre-order traction',
    },
    blitz: {
      label: 'WEEK 0 (LAUNCH DAY)',
      title: 'Synchronized Launch Day Wave',
      deliverables: [
        '10 synchronized BookTok creator hooks',
        'Launch-day hero video push with trending audio',
        'Targeted category velocity to hit Amazon top 20'
      ],
      impact: 'Algorithmic surge across TikTok For You and Instagram Explore feeds',
    },
    sustain: {
      label: 'WEEKS +1 TO +4',
      title: 'Book Club Tour & Read-Through',
      deliverables: [
        'Reader reaction stitching wave',
        'Trope spotlight quote cards',
        'Series read-through funnels for multi-title authors'
      ],
      impact: 'Prevent post-launch drop; convert readers into reviews',
    },
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-paper border-t border-bone-dark/50" aria-label="Our Services">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Core Thesis Header (Atomik Growth Reference: "Distribution is the moat. We build yours.") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bone border border-bone-dark text-xs font-mono uppercase tracking-wider text-coral font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
              Our Services
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.08]">
              Reader attention is the moat<span className="text-coral">.</span> <br />
              <span className="italic font-normal text-stone-600">We build yours.</span>
            </h2>
          </div>
          <div className="max-w-[420px] space-y-4">
            <p className="font-sans text-sm sm:text-base text-stone leading-relaxed">
              Traditional book PR relied on static press releases and quiet bookshop signings. Modern book discovery happens inside the algorithmic video feed. We engineer the creative assets that turn casual scrollers into obsessed readers.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral-600 transition-colors group min-h-[44px]"
            >
              <span>Discuss custom campaign scopes</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 2x2 Clean Bento Grid with Direct Deliverable Demos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 01: Book Launches (Launch Virality) */}
          <div className="rounded-3xl bg-bone/70 border border-stone-300/80 p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral">01 / Full-Cycle Launches</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-paper text-ink border border-bone-dark">
                  New Releases
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Launch Virality &amp; Rollouts
              </h3>
              
              <p className="font-sans text-stone text-sm sm:text-base leading-relaxed">
                Turn release week into an unmissable cultural event across BookTok and Instagram Reels with high-conversion creative hooks.
              </p>

              {/* Interactive Widget: Living Campaign Roadmap Selector */}
              <div className="pt-4">
                <div className="bg-paper p-5 rounded-2xl border border-bone-dark shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-stone tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-coral" /> Interactive Launch Timeline
                    </span>
                    <span className="text-[11px] font-mono font-bold text-coral bg-coral/10 px-2 py-0.5 rounded">
                      Select Phase
                    </span>
                  </div>

                  {/* Phase Tabs */}
                  <div className="grid grid-cols-3 gap-2">
                    {(['pre', 'blitz', 'sustain'] as const).map((phaseKey) => (
                      <button
                        key={phaseKey}
                        type="button"
                        onClick={() => setLaunchPhase(phaseKey)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center transition-all min-h-[44px] ${
                          launchPhase === phaseKey
                            ? 'bg-ink text-paper shadow-sm'
                            : 'bg-bone/80 text-stone hover:bg-bone hover:text-ink'
                        }`}
                      >
                        {phaseKey === 'pre' && 'Pre-Launch'}
                        {phaseKey === 'blitz' && 'Launch Blitz'}
                        {phaseKey === 'sustain' && 'Read-Through'}
                      </button>
                    ))}
                  </div>

                  {/* Active Phase Deliverables */}
                  <div className="p-3.5 rounded-xl bg-bone/40 border border-bone-dark/50 space-y-2 text-xs">
                    <div className="font-bold text-ink font-serif flex items-center justify-between">
                      <span>{launchPhases[launchPhase].title}</span>
                      <span className="text-[10px] font-mono text-coral font-bold">{launchPhases[launchPhase].label}</span>
                    </div>
                    <ul className="space-y-1.5 text-stone-700">
                      {launchPhases[launchPhase].deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-stone font-medium italic pt-1 border-t border-bone-dark/40">
                      Target: {launchPhases[launchPhase].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300/50 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-ink group-hover:text-coral transition-colors min-h-[44px]"
              >
                <span>Plan your release campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-stone">8–12 Wk Scope</span>
            </div>
          </div>

          {/* Card 02: Backlist Revival (Algorithm Discovery Engine) */}
          <div className="rounded-3xl bg-bone/70 border border-stone-300/80 p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral">02 / Algorithmic Revival</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-paper text-ink border border-bone-dark">
                  Published Titles
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Backlist Revival &amp; Trope Lift
              </h3>
              
              <p className="font-sans text-stone text-sm sm:text-base leading-relaxed">
                Older books still have hundreds of thousands of readers waiting. We reposition published backlist titles around trending BookTok tropes.
              </p>

              {/* Interactive Widget: Trope Repositioning Simulator */}
              <div className="pt-4">
                <div className="bg-paper p-5 rounded-2xl border border-bone-dark shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-stone tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-coral" /> Trope Repositioning Simulator
                    </span>
                    <span className="text-[11px] font-mono font-bold text-coral bg-coral/10 px-2 py-0.5 rounded">
                      Live Simulation
                    </span>
                  </div>

                  {/* Trope Selector Tabs */}
                  <div className="flex flex-wrap gap-1.5">
                    {(['enemies', 'darkAcademia', 'morallyGrey'] as const).map((tropeKey) => (
                      <button
                        key={tropeKey}
                        type="button"
                        onClick={() => setSelectedTrope(tropeKey)}
                        className={`py-2 px-3 rounded-full text-xs font-semibold transition-all min-h-[44px] ${
                          selectedTrope === tropeKey
                            ? 'bg-coral text-white shadow-xs'
                            : 'bg-bone text-stone hover:text-ink'
                        }`}
                      >
                        {tropeData[tropeKey].tag}
                      </button>
                    ))}
                  </div>

                  {/* Simulated Hook & Reach Display */}
                  <div className="p-3.5 rounded-xl bg-bone/40 border border-bone-dark/50 space-y-2 text-xs">
                    <p className="font-serif italic text-ink font-medium leading-snug">
                      {tropeData[selectedTrope].hook}
                    </p>
                    <div className="text-[11px] text-stone font-sans">
                      Target Comps: <strong className="text-ink">{tropeData[selectedTrope].comps}</strong>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-bone-dark/40">
                      <div className="bg-paper p-2 rounded-lg border border-bone-dark">
                        <span className="text-[10px] text-stone block font-mono">ESTIMATED REACH</span>
                        <span className="font-bold text-coral font-serif text-sm">{tropeData[selectedTrope].simulatedReach}</span>
                      </div>
                      <div className="bg-paper p-2 rounded-lg border border-bone-dark">
                        <span className="text-[10px] text-stone block font-mono">COST PER THOUSAND</span>
                        <span className="font-bold text-ink font-serif text-sm">{tropeData[selectedTrope].cpm}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300/50 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-ink group-hover:text-coral transition-colors min-h-[44px]"
              >
                <span>Revive your catalog titles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-stone">4-Week Activation</span>
            </div>
          </div>

          {/* Card 03: Author Brand & Content (Weekly Production Engine) */}
          <div className="rounded-3xl bg-bone/70 border border-stone-300/80 p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral">03 / Retainer Production</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-paper text-ink border border-bone-dark">
                  Monthly Partnership
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Author Brand &amp; Content Engine
              </h3>
              
              <p className="font-sans text-stone text-sm sm:text-base leading-relaxed">
                Become an author readers follow for your personality and ideas—not just a single title. Done-for-you monthly scripting and editing.
              </p>

              {/* Interactive Widget: Production Sprint Queue */}
              <div className="pt-4">
                <div className="bg-paper p-5 rounded-2xl border border-bone-dark shadow-xs space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-stone tracking-wider flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-coral" /> Weekly Content Sprint Queue
                    </span>
                    <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 font-bold px-2 py-0.5 rounded">
                      ~1 Hr Filming / Wk
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-bone/50 border border-bone-dark flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <Play className="w-3.5 h-3.5 text-coral shrink-0" />
                        <span className="font-medium text-ink truncate">"3 Plot Twists That Broke My Readers"</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">
                        Ready to Post
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-bone/50 border border-bone-dark flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <Play className="w-3.5 h-3.5 text-stone shrink-0" />
                        <span className="font-medium text-ink truncate">"POV: Beta readers reaction to chapter 14"</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold font-mono">
                        In Edit Suite
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-bone/50 border border-bone-dark flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <Play className="w-3.5 h-3.5 text-stone shrink-0" />
                        <span className="font-medium text-ink truncate">"Behind the Manuscript: Writing routine"</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-stone/20 text-stone-700 text-[10px] font-bold font-mono">
                        Script Approved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300/50 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-ink group-hover:text-coral transition-colors min-h-[44px]"
              >
                <span>Build your author platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-stone">Monthly Retainer</span>
            </div>
          </div>

          {/* Card 04: Author Podcasts (Waterfall Pipeline) */}
          <div className="rounded-3xl bg-bone/70 border border-stone-300/80 p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral">04 / Podcast Studio</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-paper text-ink border border-bone-dark">
                  Audio &amp; Video
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Author Podcasts &amp; Waterfall Repurposing
              </h3>
              
              <p className="font-sans text-stone text-sm sm:text-base leading-relaxed">
                Turn one 45-minute literary conversation into weeks of multi-channel reach. Full-service audio mastering, guest prep, and viral vertical clipping.
              </p>

              {/* Interactive Widget: Waterfall Repurposing Pipeline */}
              <div className="pt-4">
                <div className="bg-paper p-5 rounded-2xl border border-bone-dark shadow-xs space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-stone tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-coral" /> The Repurposing Waterfall
                    </span>
                    <span className="text-[11px] font-mono text-coral font-bold">1 Session → 15+ Assets</span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="space-y-2 text-xs">
                    {/* Input */}
                    <div className="p-2.5 rounded-xl bg-ink text-paper flex items-center justify-between">
                      <span className="font-bold font-serif flex items-center gap-1.5">
                        <Mic className="w-3.5 h-3.5 text-coral" /> 1 Raw Author Conversation
                      </span>
                      <span className="text-[10px] font-mono text-coral font-bold">45 Mins Recording</span>
                    </div>

                    {/* Outputs Grid */}
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                      <div className="p-2 rounded-lg bg-bone text-ink border border-bone-dark">
                        <span className="block font-bold text-ink">1 Full Video</span>
                        <span className="text-[10px] text-stone">YouTube &amp; Spotify</span>
                      </div>
                      <div className="p-2 rounded-lg bg-coral/10 text-coral border border-coral/30">
                        <span className="block font-bold text-coral">12 Viral Clips</span>
                        <span className="text-[10px] text-coral/80">TikTok &amp; Reels</span>
                      </div>
                      <div className="p-2 rounded-lg bg-bone text-ink border border-bone-dark">
                        <span className="block font-bold text-ink">3 Articles</span>
                        <span className="text-[10px] text-stone">Substack / Blog</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300/50 flex items-center justify-between">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-ink group-hover:text-coral transition-colors min-h-[44px]"
              >
                <span>Launch your author podcast</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-stone">Full Pipeline</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
