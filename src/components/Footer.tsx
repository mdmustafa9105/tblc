'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010405] text-white border-t border-white/10 pt-20 pb-16 font-sans relative overflow-hidden">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Main Footer Grid (Atomik 4-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Positioning Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="display text-[16px] font-semibold text-white tracking-[-0.01em] block">
              The Book Launch Company
            </span>

            <p className="text-[13px] text-[#7D7D7D] max-w-sm leading-[1.5]">
              The new-media launch partner for authors, publishers, and literary agencies. Built by the readers behind <strong className="text-white font-medium">@whynotnovels</strong>.
            </p>

            <div className="pt-2 text-[12px] text-[#7D7D7D] space-y-1">
              <p>London · New York</p>
              <a href="mailto:hello@thebooklaunchcompany.com" className="text-[#CCCDCD] hover:text-white transition-colors block">
                hello@thebooklaunchcompany.com
              </a>
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] block">
              Services
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#CCCDCD]">
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
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] block">
              Company
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#CCCDCD]">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
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
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#7D7D7D] block">
              Legal
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#7D7D7D]">
              <li>Ethical Marketing Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Faint Huge Watermark (Atomik Signature Brand Element) */}
        <div className="pt-12 pb-6 select-none pointer-events-none opacity-[0.04] text-center overflow-hidden">
          <span className="display text-[90px] sm:text-[140px] lg:text-[180px] font-bold text-white tracking-tighter leading-none block">
            LAUNCH
          </span>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#7D7D7D]">
          <div>
            © 2026 The Book Launch Company. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#7D7D7D] hover:text-white transition-colors py-1 px-2 rounded focus:outline-none"
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
