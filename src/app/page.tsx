'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CoverMarquee } from '../components/CoverMarquee';
import { ServicesBento } from '../components/ServicesBento';
import { MetricsBand } from '../components/MetricsBand';
import { CaseStudies } from '../components/CaseStudies';
import { FounderSection } from '../components/FounderSection';
import { TestimonialsAndFAQ } from '../components/TestimonialsAndFAQ';
import { ClosingCTA } from '../components/ClosingCTA';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { StickyMobileCTA } from '../components/StickyMobileCTA';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-coral selection:text-white flex flex-col">
      {/* Floating Header Navigation (Atomik Minimal Style) */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Landmark for Accessibility */}
      <main id="main-content" className="flex-grow">
        {/* Stage 01: Hero (55/45 Split with Single Living Video Player) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Stage 02: Early Credibility Marquee ("We partner with authors...") */}
        <CoverMarquee />

        {/* Stage 03: Core Thesis & 4 Services ("Reader attention is the moat. We build yours.") */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* Stage 04: Dark Breakout Metrics ("Our work and reach, by the numbers.") */}
        <MetricsBand />

        {/* Stage 05: Editorial Narrative Case Studies (Elena Vance & Kaelen Thorne) */}
        <CaseStudies onOpenBooking={handleOpenBooking} />

        {/* Stage 06: Proprietary Media Engine & Founder Advantage (@whynotnovels) */}
        <FounderSection />

        {/* Stage 07: High-Intent Objection Handling FAQs */}
        <TestimonialsAndFAQ onOpenBooking={handleOpenBooking} />

        {/* Stage 08: Dark High-Contrast Closing Conversion Band ("Work With Us") */}
        <ClosingCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Stage 09: Minimal 4-Column Editorial Footer */}
      <Footer />

      {/* Interactive Discovery Call Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Persistent Mobile Bottom CTA Pill */}
      <StickyMobileCTA onOpenBooking={handleOpenBooking} />
    </div>
  );
}
