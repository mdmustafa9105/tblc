import React from 'react';
import { ArrowUpRight, Instagram, Play } from 'lucide-react';

export const MediaFeature: React.FC = () => {
  return (
    <section id="media" aria-label="Built by a reader of the internet" className="bg-paper text-ink">
      <div className="shell">
        <div className="px-4 py-16 sm:px-16 sm:py-24">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-10">
            <div className="flex w-full max-w-[400px] flex-col gap-10">
              <div className="flex flex-col gap-1.5">
                <p className="text-[13px] font-[450] leading-[1.5] text-black/40">
                  Founder &amp; reader community
                </p>
                <h2 className="display text-[32px] font-semibold leading-[1.1] tracking-[0.01em] text-ink">
                  Built by a reader of the internet.
                </h2>
              </div>

              <p className="text-[15px] font-[450] leading-6 text-muted">
                Ariba built @whynotnovels by learning what makes an avid reader stop scrolling,
                screenshot a line, and add a book to their list. That same reader instinct shapes
                every launch we build.
              </p>

              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="pill h-10 w-fit bg-ink px-4 text-[13px] font-semibold text-card transition-colors hover:bg-[#2a2a2a]"
              >
                Follow @whynotnovels
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
              </a>
            </div>

            <div
              aria-label="Preview of the @whynotnovels reader community"
              className="relative w-full max-w-[407px] overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] lg:h-[229px]"
            >
              <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(145deg,#2A2118,#0D0B08)] text-[13px] font-semibold text-[#EDE1C8]">
                    A
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold leading-tight text-ink">Ariba</span>
                    <span className="text-[11px] font-[450] leading-tight text-black/40">
                      @whynotnovels
                    </span>
                  </div>
                </div>
                <Instagram className="h-4 w-4 text-black/30" strokeWidth={1.6} />
              </div>

              <div className="flex items-end justify-between px-4 py-3">
                <div className="flex flex-col">
                  <span className="display text-[20px] font-semibold leading-none tracking-[-0.01em] text-ink">
                    50K+
                  </span>
                  <span className="mt-1 text-[10px] font-[450] leading-tight text-black/40">
                    readers following along
                  </span>
                </div>
                <span className="rounded-full bg-black/[0.05] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-black/45">
                  Reader community
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1 px-4 pb-4">
                {[
                  'from-[#1B2A24] to-[#0B110E]',
                  'from-[#2B2118] to-[#120D08]',
                  'from-[#1B2233] to-[#0B0F18]',
                ].map((tone, index) => (
                  <div
                    key={tone}
                    className={`relative aspect-[16/10] overflow-hidden rounded-md bg-gradient-to-br ${tone}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(216,168,78,0.16),transparent_65%)]" />
                    <div className="absolute inset-x-2 top-2 h-px bg-white/20" />
                    {index === 0 && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-sm">
                          <Play className="h-2 w-2 fill-white text-white" />
                        </span>
                      </span>
                    )}
                    <span className="absolute bottom-1.5 left-2 text-[6px] font-medium uppercase tracking-[0.14em] text-white/55">
                      {index === 0 ? 'Reel' : index === 1 ? 'Shelf' : 'Quote'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
