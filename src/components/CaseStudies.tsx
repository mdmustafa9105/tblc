'use client';
import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, Bookmark, CheckCircle2, Video, BookOpen, Sparkles } from 'lucide-react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

interface CaseStudyItem {
  id: string;
  badge: string;
  bookTitle: string;
  author: string;
  genre: string;
  service: string;
  headline: string;
  objective: string;
  creativeStrategy: string;
  deliverables: string[];
  metrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  videoSrc: string;
  coverBg: string;
  coverAccent: string;
  quote: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'silent-hollow',
    badge: 'DEMONSTRATION CONCEPT ONLY · Client Campaign Data Pending',
    bookTitle: 'The Silent Hollow',
    author: 'Elena Vance',
    genre: 'Psychological Thriller',
    service: 'Book Launch Virality',
    headline: 'Engineering a Viral BookTok Hook for a Debut Thriller',
    objective: 'Break through algorithm noise in a crowded psychological suspense category with zero pre-existing author social footprint.',
    creativeStrategy: 'Identified the novel’s three most polarizing moral dilemmas. Scripted them as immersive first-person POV hooks with suspense-building audio cues that prompted instant comment-section debates and book saves.',
    deliverables: [
      '18 high-retention 9:16 vertical short-form videos for TikTok & Instagram Reels',
      '3 A/B tested hook frameworks: Moral Dilemma vs. Reading Experience vs. Plot Reveal',
      'Community amplification seeding across the @whynotnovels reader network',
    ],
    metrics: [
      { value: '18 Videos', label: 'Campaign Rollout', sublabel: '6-Week Launch Window' },
      { value: '3 Hooks', label: 'Frameworks Tested', sublabel: 'POV, Dilemma, Atmosphere' },
      { value: '9:16 Format', label: 'Native Production', sublabel: 'TikTok & IG Reels' },
      { value: 'Genre-Led', label: 'Reader Targeting', sublabel: 'Psychological Suspense' },
    ],
    videoSrc: '/assets/video/launch-hook.mp4',
    coverBg: '#181A20',
    coverAccent: '#D4AF37',
    quote: 'The launch week felt like an actual cultural event for the thriller community.',
  },
  {
    id: 'crown-starlight',
    badge: 'DEMONSTRATION CONCEPT ONLY · Client Campaign Data Pending',
    bookTitle: 'Crown of Starlight',
    author: 'Kaelen Thorne',
    genre: 'Romantic Fantasy',
    service: 'Backlist Revival',
    headline: 'Revitalizing Backlist Momentum Ahead of Sequel Launch',
    objective: 'Published 18 months prior, Book 1 sales had flattened ahead of the upcoming sequel release. The author needed new organic readers to discover the universe.',
    creativeStrategy: 'Repositioned the romance arc around trending BookTok tropes (#MorallyGreyHero, #EnemiesToLovers), scripting aesthetic atmosphere reels highlighting quotes that avid romantasy readers save and share.',
    deliverables: [
      '14 aesthetic atmosphere & quote-led reels produced and scheduled',
      'Series read-through teaser sequence leading into pre-orders for Book 2',
      'Multi-platform distribution across TikTok, Instagram Reels, and YouTube Shorts',
    ],
    metrics: [
      { value: '14 Videos', label: 'Backlist Sprint', sublabel: '4-Week Revival Window' },
      { value: '2 Tropes', label: 'Core Angles Tested', sublabel: '#MorallyGreyHero & Enemies' },
      { value: 'Multi-Channel', label: 'Syndicated Delivery', sublabel: 'BookTok, Reels & Shorts' },
      { value: 'Full Series', label: 'Sequel Funnel', sublabel: 'Book 1 into Book 2 Pipeline' },
    ],
    videoSrc: '/assets/video/waterfall-demo.mp4',
    coverBg: '#3B1214',
    coverAccent: '#E5C07B',
    quote: 'Proof that a book’s publication date is never its expiration date.',
  },
];

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="case-studies" className="bg-[#FAFAFA] text-[#171717] py-24 sm:py-32 border-b border-black/10" aria-label="Case Studies">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-[700px] space-y-4">
            <span className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] font-sans">
              Case Studies &amp; Campaign Frameworks
            </span>
            <h2 className="display text-[32px] sm:text-[36px] font-semibold tracking-[0.01em] text-[#000000] leading-[1.1]">
              Launches that moved books
              <br />
              <span className="text-[#7D7D7D]">into readers' hands.</span>
            </h2>
          </div>

          <p className="font-sans text-[15px] font-[450] text-[#666666] max-w-[420px] leading-[1.5]">
            Every campaign is engineered around genuine reader discovery, BookTok hook testing, and measurable retail velocity.
          </p>
        </div>

        {/* Global Transparency Notice Banner */}
        <div className="mb-16 p-4 sm:p-5 rounded-[12px] bg-white border border-black/[0.08] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <span className="text-[12px] uppercase tracking-wider font-semibold text-[#111827] block">
                Demonstration Campaign Archive · Client Intake In Progress
              </span>
              <p className="text-[13px] text-[#52525B] leading-snug">
                The campaign studies below illustrate our creative architecture, hook testing methodology, and media rollout specifications. Verified client case studies will be published as active author campaigns conclude.
              </p>
            </div>
          </div>
          <a
            href="https://instagram.com/whynotnovels"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[12px] font-medium text-[#111827] transition-colors"
          >
            See Live Work on @whynotnovels ›
          </a>
        </div>

        {/* Alternating Editorial Case Studies Stack */}
        <div className="space-y-24 sm:space-y-32">
          {CASE_STUDIES.map((study, idx) => {
            const isFlipped = idx % 2 === 1;
            const isPlaying = playingId === study.id;

            return (
              <article
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                aria-label={`Case Study: ${study.bookTitle} by ${study.author}`}
              >
                {/* Text Content Column */}
                <div className={`space-y-6 ${isFlipped ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                  
                  {/* Category Pill & Verification Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0072F5]/10 text-[#0072F5] text-[11px] font-semibold uppercase tracking-wider">
                      {study.genre}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-[12px] text-[#7D7D7D] font-medium">
                      {study.service}
                    </span>
                  </div>

                  {/* Concept Status Banner */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] font-medium">
                    <span>{study.badge}</span>
                  </div>

                  {/* Title & Author */}
                  <div>
                    <h3 className="display text-[26px] sm:text-[32px] font-semibold text-[#111827] tracking-[0.01em] leading-[1.15]">
                      {study.headline}
                    </h3>
                    <p className="text-[14px] text-[#71717A] mt-1 font-sans">
                      Campaign Blueprint for <strong className="text-[#111827]">{study.bookTitle}</strong> by {study.author}
                    </p>
                  </div>

                  {/* Campaign Objective */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#71717A] block">
                      Campaign Objective
                    </span>
                    <p className="font-sans text-[15px] font-[450] text-[#3F3F46] leading-[1.5]">
                      {study.objective}
                    </p>
                  </div>

                  {/* Creative Strategy & Hook */}
                  <div className="p-4 sm:p-5 rounded-[12px] bg-white border border-black/[0.08] shadow-sm space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#111827] block">
                      Creative Strategy &amp; Viral Hook
                    </span>
                    <p className="text-[13px] text-[#52525B] leading-[1.5] font-sans">
                      {study.creativeStrategy}
                    </p>
                  </div>

                  {/* Campaign Execution Deliverables */}
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#71717A] block">
                      Rollout Deliverables
                    </span>
                    <ul className="space-y-2 text-[13px] text-[#52525B] font-sans">
                      {study.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0072F5] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4-Metric Grid (Honest Specification Targets) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-[12px] border border-black/[0.08] bg-white shadow-sm">
                        <span className="font-sans text-xl sm:text-2xl font-semibold text-[#111827] block">
                          {metric.value}
                        </span>
                        <span className="font-sans text-[12px] font-medium text-[#111827] block mt-0.5">
                          {metric.label}
                        </span>
                        <span className="font-sans text-[10px] text-[#71717A] block leading-tight mt-0.5">
                          {metric.sublabel}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111827] hover:text-[#0072F5] transition-colors"
                    >
                      <span>Discuss a launch for your book</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Media Presentation Column: Book Cover + 9:16 Video Player Mockup */}
                <div className={`flex justify-center ${isFlipped ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                  <div className="relative w-full max-w-[500px] p-6 sm:p-8 rounded-[20px] bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-center justify-center gap-6">
                    
                    {/* Realistic Physical Book Cover */}
                    <div className="w-[180px] sm:w-[200px] shrink-0">
                      <div
                        className="relative aspect-[2/3] rounded-[8px] overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.22)] border border-white/20 p-4 flex flex-col justify-between"
                        style={{ backgroundColor: study.coverBg }}
                      >
                        {/* Book Spine Crease Highlight */}
                        <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />

                        {/* Top Kicker */}
                        <div className="relative z-10 text-center">
                          <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/60">
                            {study.genre}
                          </span>
                        </div>

                        {/* Title & Author */}
                        <div className="relative z-10 text-center space-y-1.5 py-4">
                          <h4
                            className="font-serif text-lg font-bold text-white tracking-wide leading-tight"
                            style={{ color: study.coverAccent }}
                          >
                            {study.bookTitle}
                          </h4>
                          <div className="w-8 h-px bg-white/20 mx-auto" />
                          <p className="text-[11px] text-white/80 font-sans">
                            {study.author}
                          </p>
                        </div>

                        {/* Bottom Tag */}
                        <div className="relative z-10 text-center border-t border-white/10 pt-2">
                          <span className="text-[8px] uppercase tracking-wider text-white/50 font-mono">
                            Novel Edition
                          </span>
                        </div>
                      </div>
                      <span className="block text-center text-[11px] text-[#71717A] mt-2 font-mono">
                        Physical Book Cover
                      </span>
                    </div>

                    {/* Realistic 9:16 Vertical Smartphone Reel Player */}
                    <div className="w-[190px] sm:w-[210px] shrink-0">
                      <div className="relative aspect-[9/16] rounded-[24px] overflow-hidden bg-black border-[5px] border-[#1F242D] shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col justify-between p-3 text-white">
                        
                        {/* Top Phone Notch / Dynamic Island */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#111317] rounded-full z-20" />

                        {/* Video Layer or Poster */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1C202A] via-[#11141B] to-[#0A0D12] flex items-center justify-center">
                          {/* Ambient Visual / Video Frame */}
                          <div className="text-center p-4 space-y-2">
                            <Video className="w-8 h-8 text-white/30 mx-auto" />
                            <span className="text-[10px] text-white/60 font-mono uppercase tracking-wider block">
                              9:16 Reel Hook
                            </span>
                            <span className="text-[11px] font-semibold text-white/90 line-clamp-2">
                              {study.bookTitle}
                            </span>
                          </div>
                        </div>

                        {/* Top Reel Metadata */}
                        <div className="relative z-10 flex items-center justify-between text-[10px] text-white/70 pt-3">
                          <span className="font-semibold text-white">@thebooklaunchcompany</span>
                          <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] font-mono">0:24</span>
                        </div>

                        {/* Center Interactive Play / Pause Button */}
                        <div className="relative z-10 my-auto text-center">
                          <button
                            type="button"
                            onClick={() => togglePlay(study.id)}
                            aria-label={isPlaying ? `Pause preview for ${study.bookTitle}` : `Play preview for ${study.bookTitle}`}
                            className="w-12 h-12 rounded-full bg-white/90 text-black hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center mx-auto shadow-lg"
                          >
                            {isPlaying ? (
                              <Pause className="w-5 h-5 text-black" />
                            ) : (
                              <Play className="w-5 h-5 text-black fill-black ml-0.5" />
                            )}
                          </button>
                          <span className="text-[9px] text-white/70 block mt-2 font-mono">
                            {isPlaying ? 'Playing Preview' : 'Tap to Play'}
                          </span>
                        </div>

                        {/* Bottom Reel Caption & Sound */}
                        <div className="relative z-10 border-t border-white/10 pt-2 space-y-1">
                          <p className="text-[9px] text-white/90 line-clamp-2 leading-tight">
                            "{study.quote}"
                          </p>
                          <div className="flex items-center justify-between text-[8px] text-white/50 font-mono pt-1">
                            <span>♫ Original Hook Audio</span>
                            <Bookmark className="w-3 h-3 text-white/70" />
                          </div>
                        </div>

                      </div>
                      <span className="block text-center text-[11px] text-[#71717A] mt-2 font-mono">
                        9:16 Campaign Reel
                      </span>
                    </div>

                  </div>
                </div>

              </article>
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
