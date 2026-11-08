'use client';
import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroBookWave } from './HeroBookWave';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      aria-label="The Book Launch Company"
      className="relative h-[100lvh] min-h-[730px] overflow-hidden bg-hero text-white xl:h-screen xl:min-h-[830px]"
    >
      <HeroBookWave />

      {/* Legibility scrim, strongest on small screens where the book sits behind the copy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-hero via-hero/70 to-hero/10 lg:bg-gradient-to-r lg:from-hero/90 lg:via-hero/20 lg:to-transparent"
      />

      <div className="relative z-10 flex h-full flex-col justify-center pb-14 pt-24 sm:pt-28 lg:pb-[160px]">
        <div className="shell grid grid-cols-1 gap-10 px-3 sm:px-8 lg:grid-cols-12 lg:items-start lg:gap-6">
          <div className="mx-auto max-w-[560px] text-center lg:col-span-7 lg:mx-0 lg:max-w-none lg:text-left xl:col-span-8">
            <p className="text-[10px] font-medium uppercase leading-none tracking-[0.18em] text-white/50 sm:text-[11px]">
              The new-media launch partner for authors
            </p>

            <h1 className="display mx-auto mt-5 max-w-[302px] text-[38px] font-semibold leading-[1.0] tracking-[-0.02em] text-white sm:max-w-[440px] sm:text-[44px] lg:mx-0 lg:mt-6 lg:max-w-[400px] lg:text-[36px] lg:leading-[1.0] lg:tracking-normal">
              Launch the book.
              <br />
              Build the author.
            </h1>

            <div className="mx-auto mt-10 flex w-full max-w-[360px] flex-col gap-2.5 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:mt-10 lg:justify-start lg:gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="pill h-11 w-full bg-white px-5 text-[12px] font-semibold text-[#171717] transition-colors hover:bg-[#e9e9e9] sm:w-auto sm:text-[13px] lg:h-10"
              >
                Discuss your book
                <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
              </button>

              <a
                href="#case-studies"
                className="pill h-11 w-full border border-white/25 px-5 text-[12px] font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5 sm:w-auto sm:text-[13px] lg:h-10"
              >
                See our work
                <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end lg:pt-[104px] xl:col-span-4">
            <p className="max-w-[302px] text-center text-[15px] font-medium leading-[1.5] text-white/80 sm:text-base lg:max-w-[288px] lg:text-left lg:font-medium">
              Book launches, backlist revival, author content and podcasts. From launch day to
              lasting reader discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
