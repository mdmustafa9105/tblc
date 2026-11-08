'use client';
import React from 'react';
import { AUDIENCE_SEGMENTS } from '../data/content';
import { Check, ArrowRight, BookOpen, Crown, Building2 } from 'lucide-react';

interface WhoWeWorkWithProps {
  onOpenBooking: () => void;
}

export const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ onOpenBooking }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'debut':
        return <BookOpen className="w-5 h-5 text-coral" />;
      case 'established':
        return <Crown className="w-5 h-5 text-coral" />;
      case 'publishers':
        return <Building2 className="w-5 h-5 text-coral" />;
      default:
        return <BookOpen className="w-5 h-5 text-coral" />;
    }
  };

  return (
    <section id="who-we-work-with" className="py-24 md:py-32 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bone border border-stone/20 text-xs font-mono tracking-wider uppercase text-stone mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-coral"></span>
            Partnership Profiles
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-ink tracking-tight">
            Tailored for every stage of the literary journey.
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone font-sans leading-relaxed">
            Whether you are preparing a debut release, reviving a multi-title backlist, or coordinating lead titles across an imprint list.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AUDIENCE_SEGMENTS.map((segment, index) => {
            const isFeatured = index === 1; // Established Authors is the center featured card
            return (
              <div
                key={segment.id}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                  isFeatured
                    ? 'bg-ink text-paper shadow-xl lg:-translate-y-2 border-2 border-coral/40'
                    : 'bg-bone/60 hover:bg-bone border border-stone/20 hover:border-stone/40 text-ink'
                }`}
              >
                {/* Popular Pill for featured card */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-coral text-paper font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    isFeatured ? 'bg-paper/10 text-coral' : 'bg-paper text-coral shadow-sm border border-stone/10'
                  }`}>
                    {getIcon(segment.id)}
                  </div>
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    isFeatured ? 'bg-paper/10 text-paper/80' : 'bg-paper text-stone border border-stone/20'
                  }`}>
                    {segment.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className={`font-display text-2xl font-bold mb-3 ${isFeatured ? 'text-paper' : 'text-ink'}`}>
                  {segment.title}
                </h3>
                <p className={`text-sm font-sans mb-8 leading-relaxed ${isFeatured ? 'text-paper/70' : 'text-stone'}`}>
                  {segment.subtitle}
                </p>

                {/* Deliverables List */}
                <div className="mt-auto space-y-3 mb-8">
                  <div className={`text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
                    isFeatured ? 'text-paper/50' : 'text-stone'
                  }`}>
                    Included in partnership:
                  </div>
                  {segment.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isFeatured ? 'bg-coral/20 text-coral' : 'bg-coral/10 text-coral'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={isFeatured ? 'text-paper/90' : 'text-ink'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${
                    isFeatured
                      ? 'bg-coral text-paper hover:bg-coral-hover shadow-md'
                      : 'bg-ink text-paper hover:bg-coral hover:text-paper shadow-sm'
                  }`}
                >
                  <span>{segment.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center text-xs text-stone font-sans">
          <span>Not sure where you fit? </span>
          <button
            onClick={onOpenBooking}
            className="text-coral underline underline-offset-4 font-semibold hover:text-coral-hover"
          >
            Schedule a 20-minute discovery call
          </button>
          <span> and we’ll evaluate your manuscript or catalog together.</span>
        </div>
      </div>
    </section>
  );
};
