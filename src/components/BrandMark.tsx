import React from 'react';

interface BrandMarkProps {
  className?: string;
}

/**
 * Open-book wordmark glyph used in the closing CTA and footer.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'h-6 w-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.35}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 7.1C9.7 5.7 7.2 5.2 4.5 5.9v12.4c2.7-.7 5.2-.2 7.5 1.2" />
    <path d="M12 7.1c2.3-1.4 4.8-1.9 7.5-1.2v12.4c-2.7-.7-5.2-.2-7.5 1.2" />
    <path d="M12 7.1v12.4" />
    <path d="M12 3.1v1.6" opacity="0.55" />
    <path d="M9.2 2.9h5.6" opacity="0.35" />
  </svg>
);
