'use client';
import React, { useState } from 'react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/content';
import { ChevronDown, Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialsAndFAQProps {
  onOpenBooking: () => void;
}

export const TestimonialsAndFAQ: React.FC<TestimonialsAndFAQProps> = ({ onOpenBooking }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section id="faq" className="py-24 md:py-32 bg-bone/40 border-t border-b border-paper/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-stone/20 text-xs font-mono tracking-wider uppercase text-stone mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-coral"></span>
          Proof & Transparency
        </div>

        {/* 50/50 Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Testimonials Carousel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-normal text-ink tracking-tight mb-4">
                What authors say about launching with us.
              </h2>
              <p className="text-stone font-sans text-sm md:text-base leading-relaxed mb-8">
                Unfiltered feedback from published and debut writers whose books reached genuine audiences across TikTok, Reels, and YouTube.
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-paper p-8 rounded-3xl border border-stone/20 shadow-sm relative overflow-hidden">
              <Quote className="absolute -right-4 -bottom-4 w-32 h-32 text-stone/5 pointer-events-none" />

              {/* Stars & Result Pill */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-1 text-coral" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-coral" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/10 text-coral font-mono text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {current.result}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-display text-lg md:text-xl text-ink font-normal italic leading-snug mb-8">
                “{current.quote}”
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-stone/10 pt-6">
                <div>
                  <div className="font-display font-bold text-base text-ink">{current.author}</div>
                  <div className="text-xs text-stone font-sans mt-0.5">
                    Author of <span className="italic font-medium text-ink/80">{current.bookTitle}</span> ({current.genre})
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="w-11 h-11 rounded-full bg-bone hover:bg-stone/20 border border-stone/20 flex items-center justify-center text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-11 h-11 rounded-full bg-bone hover:bg-stone/20 border border-stone/20 flex items-center justify-center text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Pagination Dots with Accessible 44px Touch Targets */}
              <div className="flex items-center justify-center gap-1 mt-6">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Jump to testimonial ${idx + 1}`}
                    className="p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-full flex items-center justify-center min-w-[44px] min-h-[44px]"
                  >
                    <span
                      className={`h-2 rounded-full transition-all block ${
                        activeTestimonial === idx ? 'w-6 bg-coral' : 'w-2 bg-stone/40'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Micro assurance */}
            <div className="mt-8 flex items-center gap-3 text-xs text-stone">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>100% verified author reviews. Real manuscripts, real readers.</span>
            </div>
          </div>

          {/* RIGHT: Accordion FAQ (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h3 className="font-display text-2xl md:text-3xl font-normal text-ink tracking-tight">
                Frequently Asked Questions
              </h3>
              <p className="text-sm text-stone mt-1">
                Everything you need to know about our timelines, genres, and launch methodology.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-paper rounded-2xl border border-stone/20 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      id={`faq-btn-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-inset"
                    >
                      <span className="font-display font-semibold text-base md:text-lg text-ink">
                        {item.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-bone flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-coral/10 text-coral' : 'text-stone'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        className="px-6 pb-6 text-sm md:text-base text-stone font-sans leading-relaxed border-t border-stone/10 pt-4"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Still have questions */}
            <div className="mt-8 p-6 rounded-2xl bg-paper/60 border border-stone/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-ink text-sm">Have a unique manuscript or specific timeline?</div>
                <div className="text-xs text-stone mt-0.5">Talk with our founder directly during a 20-minute strategy call.</div>
              </div>
              <button
                onClick={onOpenBooking}
                className="shrink-0 px-6 py-3 min-h-[44px] rounded-full bg-ink text-paper hover:bg-coral text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral flex items-center justify-center"
              >
                Book a call
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
