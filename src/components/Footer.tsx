'use client';
import React from 'react';
import { ArrowUp, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-paper border-t border-stone-800/80 pt-16 pb-24 md:pb-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Brand & Positioning Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center font-serif font-bold text-white text-lg">
                B
              </span>
              <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight">
                The Book Launch Company<span className="text-coral">.</span>
              </span>
            </div>

            <p className="font-serif italic text-base text-stone-300 max-w-sm">
              Launch the book. Build the author.
            </p>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              The creative, social-first launch partner for authors, independent presses, and literary agencies. Built by the readers behind <strong className="text-white font-medium">@whynotnovels</strong>.
            </p>

            {/* Social Channels & Direct Contact */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-stone-850 hover:bg-coral border border-stone-700/60 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="Follow @whynotnovels on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://tiktok.com/@whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-stone-850 hover:bg-coral border border-stone-700/60 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="Follow @whynotnovels on TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.28 6.28 0 0 0 1.86-4.46V8.71a8.18 8.18 0 0 0 4.91 1.63v-3.4a4.85 4.85 0 0 1-1-.25z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com/@whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-stone-850 hover:bg-coral border border-stone-700/60 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="Watch author interviews on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/company/the-book-launch-company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-stone-850 hover:bg-coral border border-stone-700/60 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                aria-label="Connect with The Book Launch Company on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:hello@thebooklaunchcompany.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-coral transition-colors px-3 py-2 rounded-full bg-stone-850 border border-stone-800"
              >
                <Mail className="w-4 h-4 text-coral" />
                <span>hello@thebooklaunchcompany.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-coral">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-coral">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-coral">
                  Meet the Founder
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-coral">
                  The 4-Step Process
                </a>
              </li>
              <li>
                <a href="#who-we-work-with" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-coral">
                  Partnership Tiers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-coral">
                  FAQs & Guarantees
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Launch Pathways
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>01. Book Launches</span>
                  <span className="text-[10px] font-mono text-stone-500 group-hover:text-coral transition-colors">New Releases</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>02. Backlist Revival</span>
                  <span className="text-[10px] font-mono text-stone-500 group-hover:text-coral transition-colors">Catalog Titles</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>03. Author Brand & Content</span>
                  <span className="text-[10px] font-mono text-stone-500 group-hover:text-coral transition-colors">Retainer</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>04. Author Podcasts</span>
                  <span className="text-[10px] font-mono text-stone-500 group-hover:text-coral transition-colors">Audio/Video</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Audience & Commitment Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Our Promise
            </h3>
            <div className="space-y-3 text-xs text-stone-400 leading-relaxed">
              <p>
                We accept a limited number of launches each month to ensure dedicated founder attention to every campaign.
              </p>
              <div className="p-3 rounded-xl bg-stone-850 border border-stone-800 space-y-1">
                <span className="block font-bold text-white text-xs">Author Time Needed</span>
                <span className="text-coral font-mono">~1 hr / week (brand/podcast)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center sm:text-left">
            <span>© 2026 The Book Launch Company. All rights reserved.</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span>Targeting WCAG 2.2 AA Accessibility</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-stone-400 hover:text-coral transition-colors py-2 px-3 rounded-full hover:bg-stone-850 focus:outline-none focus-visible:ring-1 focus-visible:ring-coral min-h-[44px]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

