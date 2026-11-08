'use client';
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-paper text-ink">
      <div className="shell grid-lines">
        <div className="flex flex-col items-center px-3 pb-36 pt-24 sm:px-8 sm:pb-[180px] sm:pt-[120px] lg:pb-[240px]">
          <div className="flex w-full max-w-[549px] flex-col items-center gap-12">
            <h2
              id="faq-heading"
              className="display text-[32px] font-semibold leading-[1.1] tracking-[0.01em] text-ink sm:text-[36px]"
            >
              FAQs
            </h2>

            <div className="flex w-full flex-col gap-1">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    data-state={isOpen ? 'open' : 'closed'}
                    className={`overflow-hidden rounded-accordion transition-colors duration-150 ${
                      isOpen ? 'bg-[#eaeaea]' : 'bg-card hover:bg-[#eaeaea]'
                    }`}
                  >
                    <button
                      id={`${item.id}-trigger`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-content`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full cursor-pointer select-none items-center justify-between gap-4 px-4 py-4 pr-[18px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black"
                    >
                      <span className="flex-1 text-[13px] font-medium leading-normal text-ink">
                        {item.question}
                      </span>
                      <span aria-hidden="true" className="size-4 shrink-0 text-muted">
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={1.6} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={1.6} />
                        )}
                      </span>
                    </button>

                    <div
                      id={`${item.id}-content`}
                      role="region"
                      aria-labelledby={`${item.id}-trigger`}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-smooth ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="select-none px-4 pb-4 pr-[18px] text-[13px] font-[450] leading-[1.5] text-muted">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
