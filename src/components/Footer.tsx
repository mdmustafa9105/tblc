'use client';
import React from 'react';
import { ArrowUp, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-paper border-t border-stone-850 pt-16 pb-24 md:pb-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Main Footer Grid (Atomik 4-Column Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-850">
          
          {/* Brand & Positioning Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-coral flex items-center justify-center font-serif font-bold text-white text-base">
                B
              </span>
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                The Book Launch Company<span className="text-coral">.</span>
              </span>
            </div>

            <p className="font-serif italic text-base text-stone-300">
              Launch the book. Build the author.
            </p>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              The creative, social-first launch partner for authors, publishers, and literary agents. Powered by the reader community behind <strong className="text-white font-medium">@whynotnovels</strong>.
            </p>

            {/* Social Channels & Contact */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-coral border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
                aria-label="Follow @whynotnovels on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com/@whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-coral border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
                aria-label="Follow @whynotnovels on TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.28 6.28 0 0 0 1.86-4.46V8.71a8.18 8.18 0 0 0 4.91 1.63v-3.4a4.85 4.85 0 0 1-1-.25z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com/@whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-coral border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
                aria-label="Watch author interviews on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/company/the-book-launch-company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 hover:bg-coral border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
                aria-label="Connect with The Book Launch Company on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:hello@thebooklaunchcompany.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-coral transition-colors px-3 py-2 rounded-full bg-stone-900 border border-stone-800"
              >
                <Mail className="w-3.5 h-3.5 text-coral" />
                <span>hello@thebooklaunchcompany.com</span>
              </a>
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Launch Virality &amp; Rollouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Backlist Revival &amp; Trope Lift
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Author Brand &amp; Content
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Author Podcasts &amp; Video
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#media-engine" className="hover:text-white transition-colors">
                  Media Engine
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="mailto:hello@thebooklaunchcompany.com" className="hover:text-white transition-colors">
                  Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Standards Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-coral font-bold">
              Standards
            </h3>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="text-stone-300 font-medium">
                Ethical Marketing Policy
              </li>
              <li>
                No bot views or fake engagement
              </li>
              <li>
                Transparent attribution
              </li>
              <li className="pt-2 text-stone-500 font-mono text-[11px]">
                London · New York
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center sm:text-left">
            <span>© 2026 The Book Launch Company. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Targeting WCAG 2.2 AA Compliance</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-stone-400 hover:text-coral transition-colors py-2 px-3 rounded-full hover:bg-stone-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-coral min-h-[44px]"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
