'use client';
import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-bone border-t border-b border-paper/40 relative overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-coral/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/80 border border-stone/20 text-xs font-mono tracking-wider uppercase text-stone mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-coral"></span>
              The Process
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-ink tracking-tight">
              From manuscript to momentum in 4 steps.
            </h2>
            <p className="mt-4 text-base md:text-lg text-stone font-sans leading-relaxed">
              A synchronized launch machine engineered to build sustained reader demand while protecting your core writing schedule.
            </p>
          </div>

          {/* Author Time Commitment Note */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-paper border border-stone/20 shadow-sm self-start md:self-auto">
            <Clock className="w-5 h-5 text-coral shrink-0" />
            <div>
              <div className="text-xs font-bold text-ink uppercase tracking-wider">Author Time Needed</div>
              <div className="text-xs text-stone">~1 hr/wk for ongoing brand &amp; podcast work</div>
            </div>
          </div>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector Line (visible on desktop) */}
          <div 
            className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-stone/20 z-0" 
            aria-hidden="true" 
          />

          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.step}
                tabIndex={0}
                role="button"
                onClick={() => setActiveStep(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(index);
                  }
                }}
                className={`relative z-10 flex flex-col p-6 rounded-2xl transition-all duration-300 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-paper shadow-md border-2 border-coral/80 transform -translate-y-1'
                    : 'bg-paper/70 hover:bg-paper border border-stone/20 hover:border-stone/40'
                }`}
                aria-pressed={isActive}
              >
                {/* Step Header with Circle Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-colors duration-200 ${
                    isActive ? 'bg-coral text-paper shadow-sm' : 'bg-bone text-stone border border-stone/20'
                  }`}>
                    {step.step}
                  </div>
                  <span className="font-mono text-xs text-stone tracking-wider font-semibold uppercase px-2 py-0.5 rounded bg-bone border border-stone/10">
                    {step.timeframe}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="font-display text-lg font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone font-sans leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Active Indicator details */}
                <div className="mt-6 pt-4 border-t border-stone/10 flex items-center justify-between text-xs font-semibold text-coral">
                  <span>{isActive ? 'Step active' : 'Click to preview'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for the selected step */}
        <div className="mt-8 bg-paper rounded-2xl p-6 md:p-8 border border-stone/20 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-coral font-bold uppercase tracking-wider mb-1">
                Deep Dive: Step {PROCESS_STEPS[activeStep].step} — {PROCESS_STEPS[activeStep].timeframe}
              </div>
              <h4 className="font-display text-xl font-bold text-ink">
                {PROCESS_STEPS[activeStep].title}
              </h4>
              <p className="text-stone text-sm mt-1 max-w-2xl">
                {activeStep === 0 && 'We comb your manuscript for visceral conflict, romantic tension, and relatable character hooks. You complete a 15-minute intake questionnaire; our team does the heavy literary deconstruction.'}
                {activeStep === 1 && 'Our creative directors script 15–20 high-retention video concepts, map out your launch-week calendar, and coordinate early advance copies with vetted creators in your exact genre.'}
                {activeStep === 2 && 'Videos begin deploying across TikTok, Instagram Reels, and YouTube Shorts. We monitor early viewer retention within the first 2 hours of each post, adjusting hashtags and captions in real-time.'}
                {activeStep === 3 && 'We analyze sales velocity spikes, Kindle Unlimited page-reads, and reader comment sentiment. Winning creative formats receive immediate follow-up iterations to sustain multi-month momentum.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full bg-ink text-paper hover:bg-coral text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
          >
            <span>Start with Step 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
