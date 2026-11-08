'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TestimonialsAndFAQProps {
  onOpenBooking?: () => void;
}

const FAQS = [
  {
    id: 'turnaround',
    question: "What's the typical launch campaign timeline?",
    answer: "For new releases and debut authors, we recommend onboarding 8 to 12 weeks prior to publication date. This allows ample runway for creative hook testing, BookTok ARC seeding, and launch-day creator wave synchronization. For backlist revival campaigns on already published titles, activation begins within 14 business days.",
  },
  {
    id: 'equipment',
    question: "Do I need my own recording equipment or studio?",
    answer: "No expensive camera gear is required. In modern short-form feeds, overly polished commercial footage often underperforms authentic, handheld creator-style video. All you need is a modern smartphone and good natural light. We provide done-for-you hook scripts, teleprompter framing, and full technical guidance.",
  },
  {
    id: 'time',
    question: "How much time do I need to commit each week?",
    answer: "Approximately 60 minutes per week. We handle all topic research, scriptwriting, hook testing, video editing, sound cues, captions, and multi-channel scheduling so you can stay fully focused on writing your next book.",
  },
  {
    id: 'platforms',
    question: "What platforms do you distribute to?",
    answer: "We engineer and optimize video campaigns for TikTok (BookTok), Instagram Reels, YouTube Shorts, and literary podcast feeds. Every asset is tailored to the specific formatting, pacing, and algorithmic cues of each platform.",
  },
  {
    id: 'different',
    question: "What makes The Book Launch Company different from other agencies?",
    answer: "Traditional book PR firms rely on sending static press releases to journalists who rarely review them. We specialize exclusively in modern algorithmic reader discovery. Founded by the creators behind @whynotnovels, we test reader hooks daily in front of an active community of 50,000+ fiction readers.",
  },
];

export const TestimonialsAndFAQ: React.FC<TestimonialsAndFAQProps> = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#FAFAFA] text-[#171717] py-28 sm:py-36 border-b border-black/10" aria-label="Frequently Asked Questions">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[760px]">
        
        {/* Section Heading (Atomik Reference Minimal FAQs) */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="display text-[32px] sm:text-[36px] font-semibold tracking-[0.01em] text-[#111827] leading-[1.1]">
            FAQs
          </h2>
        </div>

        {/* Clean Accordion List with Thin Horizontal Dividers */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div key={faq.id} className="py-2">
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-[6px] min-h-[48px] group"
                >
                  <span className="font-sans font-normal text-[16px] leading-[1.5] text-[#111827] group-hover:text-[#0072F5] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 text-[#71717A] group-hover:text-[#111827] ${
                      isOpen ? 'rotate-180 text-[#111827]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="pb-6 text-[15px] font-[450] text-[#52525B] font-sans leading-[1.6] pr-8"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
