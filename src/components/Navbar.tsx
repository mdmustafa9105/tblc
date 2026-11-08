'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#case-studies' },
    { label: 'About', href: '#founder' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Publishers', href: '#who-we-work-with' },
  ];

  return (
    <>
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-coral focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
      >
        Skip to main content
      </a>

      {/* Floating Desktop Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none flex justify-center px-3 sm:px-4 ${
          isScrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto transition-all duration-300 w-full max-w-[1040px] rounded-full border border-bone-dark/40 shadow-sm flex items-center justify-between px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 ${
            isScrolled
              ? 'bg-paper/95 backdrop-blur-md shadow-md py-2 sm:py-2.5'
              : 'bg-paper/85 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-full px-1 min-h-[44px]"
            aria-label="The Book Launch Company Homepage"
          >
            <span className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center font-serif font-bold text-sm tracking-tighter group-hover:bg-coral transition-colors duration-200 shrink-0">
              B
            </span>
            <span className="font-serif font-semibold text-sm sm:text-base md:text-lg tracking-tight text-ink whitespace-nowrap">
              The Book Launch Co<span className="text-coral">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone hover:text-ink transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-full px-3 py-2 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-coral hover:bg-coral-400 active:bg-coral-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral min-h-[44px]"
            >
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle (48x48px target) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="w-11 h-11 flex items-center justify-center rounded-full text-ink hover:bg-bone transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral shrink-0"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 z-50 bg-paper/98 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200"
        >
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between border-b border-bone-dark/30 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center font-serif font-bold text-sm">
                B
              </span>
              <span className="font-serif font-semibold text-lg text-ink">
                The Book Launch Co<span className="text-coral">.</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center rounded-full text-ink hover:bg-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
              aria-label="Close mobile navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl font-semibold text-ink hover:text-coral transition-colors py-1 flex items-center justify-between border-b border-bone-dark/20 pb-3"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 text-stone" />
              </a>
            ))}
          </div>

          {/* Drawer Bottom Actions */}
          <div className="flex flex-col gap-4 pt-4 border-t border-bone-dark/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-coral hover:bg-coral-400 active:bg-coral-600 text-white font-semibold text-base py-4 rounded-full transition-all shadow-md flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Book a discovery call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-center text-stone font-sans">
              20-minute strategy session · No commitment required
            </p>
          </div>
        </div>
      )}
    </>
  );
};
