'use client';
import React from 'react';
import { ArrowUp, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010405] text-white border-t border-white/10 pt-20 pb-16 font-sans relative overflow-hidden">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-shell">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Positioning Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="display text-[18px] sm:text-[20px] font-semibold text-white tracking-tight block">
              The Book Launch Company
            </span>

            <p className="text-[13px] text-[#A1A1AA] max-w-sm leading-[1.6]">
              The new-media launch partner for authors, publishers, and literary agencies. Built by the readers behind <strong className="text-white font-medium">@whynotnovels</strong>.
            </p>

            <div className="pt-2 text-[12px] text-[#71717A] space-y-1">
              <p>London · New York</p>
              <a href="mailto:hello@thebooklaunchcompany.com" className="text-[#CCCDCD] hover:text-white transition-colors block">
                hello@thebooklaunchcompany.com
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-4 text-white/60">
              <a
                href="https://instagram.com/whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1.5 rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Instagram @whynotnovels"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@whynotnovels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold"
                aria-label="TikTok @whynotnovels"
              >
                TT
              </a>
              <a
                href="https://youtube.com/@thebooklaunchcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1.5 rounded-full bg-white/5 hover:bg-white/10"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/the-book-launch-company"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1.5 rounded-full bg-white/5 hover:bg-white/10"
                aria-label="LinkedIn Company Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#71717A] block">
              Four Core Services
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#CCCDCD]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01 · Book Launch Virality
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02 · Backlist Revival
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03 · Author Brand &amp; Content
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04 · Author Podcasts
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#71717A] block">
              Agency
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#CCCDCD]">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  Founder &amp; Media
                </a>
              </li>
              <li>
                <a href="#books-showcase" className="hover:text-white transition-colors">
                  Launched Titles
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#71717A] block">
              Integrity
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#A1A1AA]">
              <li>Ethical Marketing Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Verified Reporting Standard</li>
            </ul>
          </div>

        </div>

        {/* Complete Company Name Brand Banner (Replacing isolated LAUNCH) */}
        <div className="pt-14 pb-8 select-none pointer-events-none text-center overflow-hidden">
          <span className="display text-[28px] sm:text-[48px] lg:text-[72px] font-bold text-white/[0.08] tracking-tight uppercase leading-none block">
            The Book Launch Company
          </span>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#71717A]">
          <div>
            © 2026 The Book Launch Company. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#71717A] hover:text-white transition-colors py-1 px-2 rounded focus:outline-none"
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
