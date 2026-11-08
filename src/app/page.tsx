'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CoverMarquee } from '../components/CoverMarquee';
import { MetricsBand } from '../components/MetricsBand';
import { ProblemSection } from '../components/ProblemSection';
import { ServicesBento } from '../components/ServicesBento';
import { CaseStudies } from '../components/CaseStudies';
import { FounderSection } from '../components/FounderSection';
import { HowItWorks } from '../components/HowItWorks';
import { WhoWeWorkWith } from '../components/WhoWeWorkWith';
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
      {/* Floating Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Landmark for Accessibility */}
      <main id="main-content" className="flex-grow">
        {/* Section 01: Hero with live video simulation */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 02: Infinite Animated Book Cover Marquee */}
        <CoverMarquee />

        {/* Section 03: High-Contrast Dark Metrics & Distribution Band */}
        <MetricsBand />

        {/* Section 04: The Publishing Shift (Problem Statement) */}
        <ProblemSection />

        {/* Section 05: 4-Pillar Services Bento Grid with Living Widgets */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* Section 06: Verified Client Case Studies Breakdown */}
        <CaseStudies onOpenBooking={handleOpenBooking} />

        {/* Section 07: Meet Founder Ariba & @whynotnovels Story */}
        <FounderSection />

        {/* Section 08: 4-Step How It Works Process Stepper */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* Section 09: Partnership Profiles (Debut, Established, Publishers) */}
        <WhoWeWorkWith onOpenBooking={handleOpenBooking} />

        {/* Section 10: Testimonials & Objection-Dismantling FAQ */}
        <TestimonialsAndFAQ onOpenBooking={handleOpenBooking} />

        {/* Section 11: High-Contrast Closing Conversion Band */}
        <ClosingCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Section 12: Comprehensive Editorial Footer */}
      <Footer />

      {/* Interactive Discovery Call Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Persistent Mobile Bottom CTA Pill */}
      <StickyMobileCTA onOpenBooking={handleOpenBooking} />
    </div>
  );
}

