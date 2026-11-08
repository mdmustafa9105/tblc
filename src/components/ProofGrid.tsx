import React from 'react';

const METRICS = [
  { value: '13M+', label: 'Organic reach' },
  { value: '50K+', label: 'Reader community' },
  { value: 'Literary', label: 'Books only' },
];

const SIGNALS = [
  'BookTok',
  'Instagram Reels',
  'YouTube Shorts',
  'Podcasts',
  'Literary Fiction',
  'Thriller',
  'Romantasy',
  'Historical',
  'Memoir',
  'Indie Press',
  'Debut Authors',
  'Series',
];

export const ProofGrid: React.FC = () => {
  return (
    <section
      id="proof"
      aria-label="Reach, community and literary focus"
      className="bg-paper text-ink"
    >
      <div className="shell py-[60px] sm:py-[120px] px-3 sm:px-8">
        <div className="flex flex-col items-center gap-8">
          <h2 className="max-w-[320px] px-4 text-center text-[13px] font-medium leading-5 text-muted">
            Reach, reader community, and a single literary focus
          </h2>

          <ul className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-l border-t border-line">
            {METRICS.map((metric) => (
              <li
                key={metric.value}
                className="flex aspect-square items-center justify-center border-b border-r border-line p-2"
              >
                <span className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-card px-2 text-center">
                  <span className="display text-[22px] font-semibold leading-none tracking-[-0.01em] text-ink sm:text-[28px]">
                    {metric.value}
                  </span>
                  <span className="mt-2 text-[9px] font-medium uppercase leading-tight tracking-[0.14em] text-muted sm:text-[10px]">
                    {metric.label}
                  </span>
                </span>
              </li>
            ))}

            {SIGNALS.map((signal) => (
              <li
                key={signal}
                className="flex aspect-square items-center justify-center border-b border-r border-line px-2 text-center transition-colors hover:bg-card/60"
              >
                <span className="flex flex-col items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden="true" />
                  <span className="text-[10px] font-medium uppercase leading-[1.35] tracking-[0.12em] text-ink sm:text-[11px]">
                    {signal}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
