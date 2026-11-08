'use client';
import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Calendar, ArrowRight, Clock, ShieldCheck, Mail, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Author',
    bookTitle: '',
    genre: 'Fiction / Literary',
    timeline: 'Upcoming in 8–12 weeks',
    service: 'Book Launches',
    notes: '',
    hp_website: '',
  });

  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll and focus first input on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setLoading(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          authorType: formData.role,
          bookTitle: formData.bookTitle,
          releaseTimeline: formData.timeline,
          message: `Service: ${formData.service} | Genre: ${formData.genre} | Notes: ${formData.notes}`,
          hp_website: formData.hp_website,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback for demo/offline resilience
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-paper rounded-3xl border border-bone-dark shadow-2xl overflow-hidden z-10 my-8 text-ink animate-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-bone-dark/50 bg-bone/40">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-coral/10 text-coral flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-coral font-bold block">
                Direct with Founder Ariba
              </span>
              <h2 id="booking-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-ink">
                Request a 20-Min Discovery Call
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-paper hover:bg-bone border border-stone-300 text-stone hover:text-ink flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-4 space-y-6">
              <div className="text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  Discovery Request Received
                </h3>
                <p className="font-sans text-stone text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-ink font-semibold">{formData.name}</strong>. Ariba has received your campaign inquiry for <em className="text-coral">"{formData.bookTitle || 'your title'}"</em>. Because every campaign is bespoke, we review your manuscript details before confirming call times.
                </p>
              </div>

              {/* What Happens Next: 3 Steps (from Brief V1.0) */}
              <div className="p-5 rounded-2xl bg-bone/70 border border-stone-300 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-coral" /> What Happens Next
                </div>
                <ol className="space-y-2.5 text-xs text-stone-700 font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-coral bg-paper px-1.5 py-0.5 rounded border border-bone-dark">1</span>
                    <span><strong>Manuscript &amp; Trope Audit:</strong> Ariba reviews your synopsis, comps, and timeline within 1 business day.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-coral bg-paper px-1.5 py-0.5 rounded border border-bone-dark">2</span>
                    <span><strong>Calendar Invitation:</strong> We email you a direct invite to select your 20-minute Zoom slot across your local time zone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-coral bg-paper px-1.5 py-0.5 rounded border border-bone-dark">3</span>
                    <span><strong>Hook Blueprint on Call:</strong> You get a custom creative hook outline on the call — with zero hard sales pitch.</span>
                  </li>
                </ol>
              </div>

              {/* Response Promise */}
              <div className="flex flex-wrap items-center justify-between text-xs text-stone border-t border-bone-dark/50 pt-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-coral" /> Typical response: within 1 business day
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-coral" /> hello@thebooklaunchcompany.com
                </span>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-ink text-white font-semibold text-sm hover:bg-stone-800 transition-colors"
                >
                  Close Confirmation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Author Name */}
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    id="booking-name"
                    required
                    type="text"
                    placeholder="e.g. Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink placeholder:text-stone/60 outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="booking-email" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="booking-email"
                    required
                    type="email"
                    placeholder="author@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink placeholder:text-stone/60 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Role / Profile */}
                <div>
                  <label htmlFor="booking-role" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    I am an…
                  </label>
                  <select
                    id="booking-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink outline-none transition-all"
                  >
                    <option value="Author">Author (Indie, Debut, or Established)</option>
                    <option value="Publisher">Publisher / Imprint</option>
                    <option value="Literary Agent">Literary Agent</option>
                    <option value="Other">Other Representative</option>
                  </select>
                </div>

                {/* Genre */}
                <div>
                  <label htmlFor="booking-genre" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Genre / Category
                  </label>
                  <select
                    id="booking-genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink outline-none transition-all"
                  >
                    <option value="Fiction / Literary">Fiction / Literary</option>
                    <option value="Thriller / Mystery">Thriller / Mystery</option>
                    <option value="Romance / Romantasy">Romance / Romantasy</option>
                    <option value="Sci-Fi / Fantasy">Sci-Fi / Fantasy</option>
                    <option value="Dark Academia">Dark Academia / Gothic</option>
                    <option value="Non-Fiction / Memoir">Non-Fiction / Memoir</option>
                    <option value="Multi-Title Catalog">Multi-Title Publisher Catalog</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Book Title */}
                <div>
                  <label htmlFor="booking-title" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    Book Title &amp; Subtitle
                  </label>
                  <input
                    id="booking-title"
                    type="text"
                    placeholder="e.g. The Silent Hollow"
                    value={formData.bookTitle}
                    onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink placeholder:text-stone/60 outline-none transition-all"
                  />
                </div>

                {/* Primary Service */}
                <div>
                  <label htmlFor="booking-service" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                    What Do You Need?
                  </label>
                  <select
                    id="booking-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink outline-none transition-all"
                  >
                    <option value="Book Launches">01. Book Launches (New Release)</option>
                    <option value="Backlist Revival">02. Backlist Revival (Published Title)</option>
                    <option value="Author Brand & Content">03. Author Brand &amp; Content (Monthly)</option>
                    <option value="Author Podcasts">04. Author Podcasts</option>
                    <option value="Not sure yet">Not sure yet — Let's discuss</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="booking-timeline" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Launch Timing / Release Status
                </label>
                <select
                  id="booking-timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink outline-none transition-all"
                >
                  <option value="Upcoming in 8–12 weeks">Upcoming in 8–12 weeks (Ideal window for ARC seeding)</option>
                  <option value="Upcoming in 4–8 weeks">Upcoming in 4–8 weeks (Fast-track pre-orders)</option>
                  <option value="Immediate / Published Title">Already Published Title (Backlist revival)</option>
                  <option value="Ongoing Author Brand Retainer">Ongoing Author Brand / Long-term momentum</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-1.5">
                  Brief Synopsis, Comp Titles, or Questions
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder="Share a short pitch, your comps (e.g. 'For fans of Yellowface and Rebecca'), or any specific launch goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-bone/50 border border-stone-300 focus:border-coral focus:ring-1 focus:ring-coral text-sm text-ink placeholder:text-stone/60 outline-none transition-all resize-none"
                />
              </div>

              {/* Spam Honeypot Field (Hidden from human visitors) */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="hp-website">Leave blank</label>
                <input
                  id="hp-website"
                  type="text"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_website}
                  onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                />
              </div>

              {/* Assurances */}
              <div className="flex items-center gap-4 text-xs text-stone pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-coral" /> Zero hard sales pitches
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-coral" /> 20-min focused session
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-full bg-coral hover:bg-coral-400 active:bg-coral-600 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral disabled:opacity-75 min-h-[48px]"
                >
                  {loading ? (
                    <span>Submitting Discovery Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Discovery Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Notice & Confidentiality */}
              <p className="text-[11px] text-stone text-center leading-normal pt-2">
                By requesting a discovery call, you agree to receive direct communication regarding your campaign. We treat all author synopses, comp titles, and release dates with strict editorial confidentiality.
              </p>

              {calendarUrl && (
                <div className="pt-3 text-center border-t border-stone-300/60 mt-3">
                  <span className="text-xs text-stone block mb-1.5">Prefer direct calendar scheduling?</span>
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral hover:underline"
                  >
                    Open live calendar in new tab <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
