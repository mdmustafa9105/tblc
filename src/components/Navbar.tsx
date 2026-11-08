'use client';
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Media', href: '#media' },
  { label: 'FAQs', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[13px] focus:font-medium focus:text-ink focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="absolute inset-x-0 top-0 z-40 text-white">
        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex h-[72px] w-[calc(100%-24px)] max-w-shell items-center justify-between px-3 sm:w-[calc(100%-64px)] sm:px-8 lg:h-28 xl:w-[calc(100%-240px)] xl:items-start xl:py-10"
        >
          <a
            href="#main-content"
            className="display shrink-0 text-[15px] font-normal leading-none tracking-[-0.01em] text-white transition-opacity hover:opacity-70 lg:text-base"
            aria-label="The Book Launch Company — home"
          >
            The Book Launch Company
          </a>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[13px] font-medium leading-[1.5] text-white transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="pill hidden h-8 bg-[#F2F2F2] px-3.5 text-[13px] font-medium text-[#171717] transition-colors hover:bg-white lg:inline-flex"
          >
            Discuss Your Book
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="h-5 w-5" strokeWidth={1.6} />
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col bg-hero text-white lg:hidden"
        >
          <div className="flex h-[72px] shrink-0 items-center justify-between px-3">
            <span className="display text-[15px] leading-none text-white">
              The Book Launch Company
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center px-6">
            <div className="flex flex-col border-t border-white/10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="display flex items-center justify-between border-b border-white/10 py-6 text-[30px] font-medium leading-none tracking-[-0.01em] text-white"
                >
                  {link.label}
                  <ArrowUpRight className="h-5 w-5 text-white/40" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="shrink-0 px-6 pb-8 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="pill h-12 w-full bg-[#F2F2F2] text-[13px] font-medium text-[#171717]"
            >
              Discuss Your Book
            </button>
          </div>
        </div>
      )}
    </>
  );
};
