'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProofStrip } from '../components/ProofStrip';
import { CaseStudies } from '../components/CaseStudies';
import { ServicesBento } from '../components/ServicesBento';
import { MetricsBand } from '../components/MetricsBand';
import { HowItWorks } from '../components/HowItWorks';
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
    <div className="min-h-screen bg-[#0A0B0E] text-white font-sans selection:bg-white selection:text-black flex flex-col">
      {/* Floating Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero: The New Media Partner For Ambitious Authors */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Selected Book Campaigns & Creative Work */}
        <div id="work">
          <ProofStrip />
          <CaseStudies onOpenBooking={handleOpenBooking} />
        </div>

        {/* 3. Four Core Services (Book Launches, Backlist Revival, Author Brand, Podcasts) */}
        <ServicesBento onOpenBooking={handleOpenBooking} />

        {/* 4. Existing Metrics Section (Preserved: 13M+ Reach, 50K+ Community, 1.4M Views) */}
        <MetricsBand />

        {/* 5. How Our Process Works (4-Step Customer Journey) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 6. Founder & Agency Credibility (Ariba, @whynotnovels Reader Community) */}
        <FounderSection onOpenBooking={handleOpenBooking} />

        {/* 7. FAQs (High-Intent Objection Handling) */}
        <TestimonialsAndFAQ onOpenBooking={handleOpenBooking} />

        {/* 8. Closing CTA (Work With Us / Discuss Your Book) */}
        <ClosingCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Discovery Call Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Persistent Mobile Bottom CTA Pill */}
      <StickyMobileCTA onOpenBooking={handleOpenBooking} />
    </div>
  );
}
