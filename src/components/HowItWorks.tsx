'use client';
import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Manuscript & Hook Discovery',
    timeframe: 'Weeks –12 to –8',
    description: 'We read your work, isolate its most compelling emotional hooks, plot dilemmas, and reader tropes, and map your target reader demographic.',
    deepDive: 'You complete a 15-minute intake questionnaire; our team does the heavy literary deconstruction to find the visceral tension points that make readers stop scrolling.',
  },
  {
    step: '02',
    title: 'Creative Scripting & Angles',
    timeframe: 'Weeks –8 to –4',
    description: 'Our creative team writes custom, high-retention short-form scripts tailored to BookTok and Instagram Reels pacing.',
    deepDive: 'We develop 15–20 scripted angles: Character POV dilemmas, quote reveals, and reading-experience hooks, mapped out in a synchronized launch calendar.',
  },
  {
    step: '03',
    title: 'Done-For-You Production',
    timeframe: 'Weeks –4 to –1',
    description: 'You record on your smartphone in one simple 60-minute session, or we produce book-focused atmosphere content. We handle all editing, captions, and sound.',
    deepDive: 'No expensive camera gear needed. Handheld, authentic creator-style video outperforms polished ads. Our post-production team handles pacing, sound design, and color grading.',
  },
  {
    step: '04',
    title: 'Launch Wave & Amplification',
    timeframe: 'Launch Week & Beyond',
    description: 'Content deploys across TikTok, Reels, and YouTube, amplified through our @whynotnovels reader network to convert curiosity into book purchases.',
    deepDive: 'We monitor early reader retention, iterate winning hooks in real-time, and drive sustained retail velocity and backlist read-through.',
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="bg-[#FAFAFA] text-[#171717] py-24 sm:py-32 border-b border-black/[0.08]" aria-label="How Our Process Works">
      <div className="mx-auto w-[calc(100%-32px)] max-w-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-[650px] space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#71717A] font-sans">
              The Customer Journey
            </span>
            <h2 className="display text-[32px] sm:text-[40px] font-semibold tracking-tight text-[#111827] leading-[1.1]">
              From manuscript to reader momentum
              <br />
              <span className="text-[#71717A]">in four simple steps.</span>
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] font-[450] text-[#52525B] leading-[1.6]">
              A synchronized launch machine engineered to build sustained reader demand while protecting your core writing schedule.
            </p>
          </div>

          {/* Author Commitment Reassurance Pill */}
          <div className="p-4 sm:p-5 rounded-[14px] bg-white border border-black/[0.08] shadow-sm flex items-center gap-3.5 max-w-[340px] self-start md:self-auto">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#B38728]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block font-semibold">
                Author Time Needed
              </span>
              <p className="text-[13px] font-semibold text-[#111827] leading-tight mt-0.5">
                ~60 minutes per week.
              </p>
              <span className="text-[11px] text-[#71717A]">We handle all heavy lifting.</span>
            </div>
          </div>
        </div>

        {/* 4-Step Interactive Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`p-6 sm:p-7 rounded-[16px] text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-[#111827] shadow-lg ring-1 ring-[#111827]'
                    : 'bg-white/80 hover:bg-white border-black/[0.08] shadow-sm hover:border-black/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-[12px] ${
                      isActive ? 'bg-[#111827] text-white' : 'bg-[#F4F4F5] text-[#71717A]'
                    }`}>
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#71717A] uppercase bg-[#F4F4F5] px-2 py-0.5 rounded">
                      {item.timeframe}
                    </span>
                  </div>

                  <h3 className="font-sans text-[17px] font-semibold text-[#111827] leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-[#52525B] leading-[1.55] font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-semibold">
                  <span className={isActive ? 'text-[#111827]' : 'text-[#71717A]'}>
                    {isActive ? 'Active phase' : 'Click to preview'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 text-[#111827]' : 'text-[#71717A]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-[16px] bg-white border border-black/[0.08] shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#0072F5]/10 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-[#0072F5]" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#0072F5] font-semibold uppercase tracking-wider block">
                Detailed Scope: Step {PROCESS_STEPS[activeStep].step} · {PROCESS_STEPS[activeStep].timeframe}
              </span>
              <h4 className="font-sans text-[18px] sm:text-[20px] font-semibold text-[#111827] mt-0.5">
                {PROCESS_STEPS[activeStep].title}
              </h4>
              <p className="text-[14px] text-[#52525B] leading-[1.6] max-w-3xl mt-1.5 font-sans">
                {PROCESS_STEPS[activeStep].deepDive}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="shrink-0 px-6 h-11 rounded-full bg-[#111827] text-white hover:bg-black font-semibold text-[13px] transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Start with Step 01</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
