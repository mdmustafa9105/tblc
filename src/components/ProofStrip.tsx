'use client';
import React from 'react';

const PARTNERS = [
  { name: 'PENGUIN RANDOM HOUSE', type: 'Publisher', tag: 'Partner' },
  { name: 'HARPERCOLLINS', type: 'Publisher', tag: 'Partner' },
  { name: 'SIMON & SCHUSTER', type: 'Publisher', tag: 'Partner' },
  { name: 'MACMILLAN', type: 'Publisher', tag: 'Partner' },
  { name: 'BLOOMSBURY', type: 'Publisher', tag: 'Partner' },
  { name: 'The Silent Hollow', author: 'Elena Vance', type: 'Debut Thriller', tag: 'Case Study' },
  { name: 'Crown of Starlight', author: 'Kaelen Thorne', type: 'Romantasy', tag: 'Case Study' },
  { name: 'The Midnight Guild', author: 'Marcus Vance', type: 'Dark Academia', tag: 'Featured' },
  { name: 'HACHETTE BOOK GROUP', type: 'Publisher', tag: 'Partner' },
  { name: 'INDEPENDENT PRESSES', type: 'Indie Coalition', tag: 'Network' },
];

export const ProofStrip: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 sm:py-28 border-b border-black/10" aria-label="Publishing Partners & Client Titles">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] font-sans">
            We partner with authors and publishers worldwide
          </p>
        </div>

        {/* Clean Logo / Title Proof Grid (Atomik Growth Reference Signature) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-black/10">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 border-r border-b border-black/10 flex flex-col justify-between items-center text-center hover:bg-[#F2F2F2]/60 transition-colors min-h-[140px] sm:min-h-[160px]"
            >
              <div className="w-full flex justify-end">
                <span className="text-[10px] font-mono tracking-wider text-[#7D7D7D] uppercase">
                  {partner.tag}
                </span>
              </div>

              <div className="my-auto py-2">
                <h3 className="font-sans font-semibold text-[14px] leading-[1.4] tracking-tight text-[#000000] uppercase">
                  {partner.name}
                </h3>
                {partner.author && (
                  <p className="text-[12px] text-[#7D7D7D] font-sans mt-0.5">
                    by {partner.author}
                  </p>
                )}
              </div>

              <span className="text-[11px] text-[#7D7D7D] font-sans">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
