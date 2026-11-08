'use client';
import React, { useState } from 'react';
import { ChevronDown, Star, CheckCircle2, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface TestimonialsAndFAQProps {
  onOpenBooking: () => void;
}

export const TestimonialsAndFAQ: React.FC<TestimonialsAndFAQProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-paper border-t border-bone-dark/50 relative" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header (Atomik Growth Minimal FAQs Style) */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bone border border-bone-dark text-xs font-mono uppercase tracking-wider text-coral font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            Clarity &amp; Transparency
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
            Frequently Asked Questions<span className="text-coral">.</span>
          </h2>
          <p className="font-sans text-stone text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about timelines, weekly time commitment, and how we launch books.
          </p>
        </div>

        {/* Featured Author Testimonial Banner (Clean & Restrained) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-bone/70 border border-stone-300/80 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-bone-dark/50">
            <div className="flex items-center gap-1 text-coral" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-coral" />
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/10 text-coral font-mono text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              1.4M Launch Views · #18 Amazon Category Peak
            </span>
          </div>

          <blockquote className="font-serif italic text-base sm:text-lg text-ink font-normal leading-relaxed my-5">
            “The Book Launch Company turned an unknown debut thriller into a BookTok obsession. We reached 1.4 million readers and broke into the Amazon top 20 on release week without paying for vanity PR.”
          </blockquote>

          <div className="flex items-center justify-between text-xs sm:text-sm text-stone font-sans">
            <div>
              <strong className="text-ink font-semibold">Elena Vance</strong> · Author of <em>The Silent Hollow</em>
            </div>
            <span className="text-stone-400 font-mono text-xs hidden sm:inline">[TBC Concept Prototype]</span>
          </div>
        </div>

        {/* Clean Accordion List (Full Width, Generous Spacing) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <div
                key={item.id}
                className="bg-bone/40 hover:bg-bone/60 rounded-2xl border border-bone-dark transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-inset min-h-[48px]"
                >
                  <span className="font-serif font-bold text-lg sm:text-xl text-ink leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-paper border border-bone-dark flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-coral text-white border-coral' : 'text-stone'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-6 sm:px-7 pb-6 sm:pb-7 text-base text-stone-700 font-sans leading-relaxed border-t border-bone-dark/40 pt-4"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Still Have Questions Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-paper border border-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-ink text-base sm:text-lg">
              Have a unique manuscript or specific release date?
            </h3>
            <p className="text-xs sm:text-sm text-stone font-sans">
              Talk with our team directly during a 20-minute launch strategy session.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 min-h-[44px] rounded-full bg-ink text-paper hover:bg-coral text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral flex items-center justify-center"
          >
            Discuss Your Book
          </button>
        </div>

      </div>
    </section>
  );
};
