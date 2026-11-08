'use client';
import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="case-studies" className="bg-white text-black py-24 sm:py-32 border-b border-black/10" aria-label="Case Studies">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-24 gap-8">
          <div className="max-w-[700px] space-y-4">
            <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] font-sans">
              Case Studies
            </span>
            <h2 className="display text-[32px] sm:text-[36px] font-semibold tracking-[0.01em] text-[#000000] leading-[1.1]">
              Launches that moved books
              <br />
              <span className="text-[#7D7D7D]">into readers' hands.</span>
            </h2>
          </div>

          <p className="font-sans text-[15px] font-[450] text-[#666666] max-w-[400px] leading-[1.5]">
            Every campaign is engineered around genuine reader discovery, BookTok hook testing, and measurable retail velocity.
          </p>
        </div>

        {/* Alternating Editorial Case Studies Stack (Atomik Reference Layout) */}
        <div className="space-y-24 sm:space-y-32">
          {CASE_STUDIES.map((study, idx) => {
            const isFlipped = idx % 2 === 1;

            return (
              <div
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Text Content Column */}
                <div className={`space-y-6 ${isFlipped ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                  
                  {/* Category Pill / Kicker */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[12px] font-medium text-[#0072F5]">
                      {study.genre} Case Study
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-[12px] text-[#7D7D7D]">
                      {study.service}
                    </span>
                    {study.isPlaceholder && (
                      <span className="px-2 py-0.5 rounded-[6px] bg-black/5 text-[11px] font-mono text-[#7D7D7D]">
                        [TBC Concept Prototype]
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="display text-[24px] sm:text-[30px] font-semibold text-[#000000] tracking-[0.01em] leading-[1.15]">
                    {study.title}
                  </h3>

                  {/* Narrative Brief */}
                  <p className="font-sans text-[15px] font-[450] text-[#666666] leading-[1.5]">
                    {study.brief}
                  </p>

                  {/* Creative Hook Detail */}
                  <div className="p-4 rounded-[12px] bg-[#F2F2F2] space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#000000] block">
                      Creative Strategy &amp; Viral Hook
                    </span>
                    <p className="text-[13px] text-[#444444] leading-[1.4] font-sans">
                      {study.creativeIdea}
                    </p>
                  </div>

                  {/* 4-Metric Grid (Atomik 2x2 Clean Metrics Box) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-3.5 rounded-[12px] border border-black/10 bg-white">
                        <span className="font-sans text-2xl sm:text-3xl font-semibold text-black block">
                          {metric.value}
                        </span>
                        <span className="font-sans text-[12px] font-medium text-black block mt-1">
                          {metric.label}
                        </span>
                        <span className="font-sans text-[11px] text-[#7D7D7D] block">
                          {metric.sublabel}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black hover:text-[#0072F5] transition-colors"
                    >
                      <span>Discuss a similar launch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Media Deliverable Visual Column */}
                <div className={`flex justify-center ${isFlipped ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                  <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[16/11] rounded-[16px] overflow-hidden bg-[#06101A] border border-white/10 shadow-2xl p-6 flex flex-col justify-between text-white">
                    {/* Top Deliverable Bar */}
                    <div className="flex items-center justify-between text-[12px] text-[#7D7D7D] border-b border-white/10 pb-3">
                      <span className="font-medium text-white">{study.bookTitle}</span>
                      <span className="font-mono text-[#0072F5] text-[11px]">Deliverable Wave #0{idx + 1}</span>
                    </div>

                    {/* Center Artwork & Hook */}
                    <div className="my-auto space-y-3 py-4">
                      <div className="inline-block px-2.5 py-0.5 rounded-[6px] bg-[#0072F5]/20 text-[#0072F5] text-[11px] font-medium uppercase tracking-wider">
                        {study.genre}
                      </div>
                      <h4 className="display text-xl sm:text-2xl font-semibold text-white leading-tight">
                        {study.headline}
                      </h4>
                      <p className="font-serif italic text-[13px] text-[#CCCDCD] leading-snug">
                        "{study.authorQuote}"
                      </p>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="flex items-center justify-between text-[12px] text-[#7D7D7D] border-t border-white/10 pt-3">
                      <span>Author: <strong className="text-white">{study.author}</strong></span>
                      <span className="text-neutral-400 font-mono text-[11px]">{study.timeline}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Centered Bottom Action */}
        <div className="mt-20 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 h-10 rounded-full bg-black text-white font-semibold text-[13px] hover:bg-neutral-800 transition-colors"
          >
            <span>Discuss your launch campaign</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
