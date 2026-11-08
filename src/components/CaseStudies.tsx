'use client';
import React from 'react';
import { ArrowRight, Bookmark, Heart, Star, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="case-studies" className="py-24 md:py-36 bg-paper border-t border-bone-dark/50" aria-label="Case Studies">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Section Header (Atomik Reference Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bone border border-bone-dark text-xs font-mono uppercase tracking-wider text-coral font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-coral" />
              Verified Case Studies
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.08]">
              Launches that moved books <br className="hidden sm:inline" />
              <span className="italic font-normal text-coral">off shelves.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-stone max-w-[420px] leading-relaxed">
            We don’t deal in vague marketing impressions or inflated bot counts. Every campaign is engineered around genuine reader discovery, BookTok hook testing, and measurable retail velocity.
          </p>
        </div>

        {/* Narrative Case Studies Stack (Atomik Growth Deep Storytelling Layout) */}
        <div className="space-y-16 lg:space-y-20">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="rounded-3xl bg-bone/70 border border-stone-300/80 p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Editorial Narrative & 4-Metric Grid (7 Cols / ~60%) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Case Study Kicker (e.g. "Acquired case study" in Atomik) */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-coral">
                      {study.genre} Case Study
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-paper border border-bone-dark text-xs font-semibold text-ink">
                      {study.service}
                    </span>
                    {study.isPlaceholder && (
                      <span className="px-2.5 py-0.5 rounded-full bg-stone/10 border border-stone/20 text-[11px] font-mono text-stone">
                        [TBC Concept Prototype]
                      </span>
                    )}
                  </div>

                  {/* Outcome-Led Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                    {study.title}
                  </h3>

                  {/* Narrative Problem & Opportunity (Atomik Style) */}
                  <p className="font-sans text-stone text-sm sm:text-base leading-relaxed">
                    {study.brief}
                  </p>

                  {/* The Creative Strategy & Hook */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-paper/80 border border-bone-dark space-y-1.5 text-xs sm:text-sm">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-coral flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Creative Strategy &amp; Viral Hook
                    </div>
                    <p className="text-stone-800 leading-relaxed font-sans">
                      {study.creativeIdea}
                    </p>
                  </div>

                  {/* 4-Metric KPI Grid (Atomik 4-Stat Box) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-paper p-4 rounded-2xl border border-bone-dark text-left">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-ink block font-tabular">
                          {metric.value}
                        </span>
                        <span className="font-sans font-semibold text-xs text-ink block mt-1">
                          {metric.label}
                        </span>
                        <span className="font-sans text-[11px] text-stone block mt-0.5">
                          {metric.sublabel}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Author Endorsement Quote & Links */}
                  <div className="pt-5 border-t border-stone-300/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="font-serif italic text-sm text-ink leading-snug">
                        "{study.authorQuote}"
                      </p>
                      <p className="text-xs font-sans text-stone font-medium">
                        — {study.author}, <span className="text-stone-500">{study.authorTitle}</span>
                      </p>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral hover:text-coral-600 transition-colors shrink-0 py-2 px-3 rounded-lg hover:bg-bone min-h-[44px]"
                    >
                      <span>Discuss a similar launch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Campaign Deliverable Card (5 Cols / ~40%) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[340px] rounded-3xl bg-ink text-paper p-6 shadow-2xl border border-stone-700/50 space-y-4">
                    {/* Header bar */}
                    <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-3">
                      <span className="font-serif font-bold text-paper">Campaign Deliverable</span>
                      <span className="font-mono text-coral text-[11px]">Wave #0{idx + 1}</span>
                    </div>

                    {/* Book Mockup Canvas */}
                    <div className="relative h-64 rounded-2xl bg-gradient-to-br from-stone-900 via-ink to-stone-900 border border-stone-800 p-5 flex flex-col justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                        <span>{study.genre}</span>
                        <span className="flex items-center gap-1 text-coral"><Heart className="w-3 h-3 fill-coral" /> Viral Hook</span>
                      </div>

                      <div className="space-y-2 z-10">
                        <span className="inline-block px-2.5 py-0.5 rounded bg-coral text-[10px] font-mono font-bold uppercase text-white">
                          Verified Surge
                        </span>
                        <h4 className="font-serif text-xl font-bold text-white leading-tight">
                          {study.bookTitle}
                        </h4>
                        <p className="text-xs text-stone-300 font-sans">
                          By {study.author}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-800/80 z-10">
                        <span>{study.headline}</span>
                        <Bookmark className="w-3.5 h-3.5 text-stone-400" />
                      </div>
                    </div>

                    {/* Deliverable Highlights */}
                    <div className="space-y-2 text-xs text-stone-300 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400">Campaign Window:</span>
                        <span className="font-medium text-paper">{study.timeline}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400">Creator Activation:</span>
                        <span className="font-medium text-coral">Synchronized Wave</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
