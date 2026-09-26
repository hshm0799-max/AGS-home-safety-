import React, { useState } from 'react';
import { BIHAR_DISTRICTS } from './data/districts';
import { SERVICES_LIST } from './data/services';
import { DistrictInfo } from './types';

import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { LiveSimulator3D } from './components/LiveSimulator3D';
import { VideoDemosSection } from './components/VideoDemosSection';
import { ScrollingPhotoReel } from './components/ScrollingPhotoReel';
import { CostCalculator } from './components/CostCalculator';
import { ServicesSection } from './components/ServicesSection';
import { DistrictSection } from './components/DistrictSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { OwnerBio } from './components/OwnerBio';
import { GlobalCoverageMap } from './components/GlobalCoverageMap';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { BookingModal } from './components/BookingModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(BIHAR_DISTRICTS[0]); // Default: Patna
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('SS 316 Invisible Grills');
  const [bookingDistrict, setBookingDistrict] = useState<string>('Patna');

  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [policyTab, setPolicyTab] = useState<'terms' | 'privacy' | 'warranty' | 'refund'>('warranty');

  const handleOpenBooking = (serviceName?: string, districtName?: string) => {
    if (serviceName) setBookingService(serviceName);
    if (districtName) {
      setBookingDistrict(districtName);
    } else if (selectedDistrict) {
      setBookingDistrict(selectedDistrict.name);
    }
    setIsBookingOpen(true);
  };

  const handleOpenPolicy = (tab: 'terms' | 'privacy' | 'warranty' | 'refund') => {
    setPolicyTab(tab);
    setIsPolicyOpen(true);
  };

  const handleSelectDistrict = (district: DistrictInfo) => {
    setSelectedDistrict(district);
    setBookingDistrict(district.name);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sticky Top Navbar with Owner Details, Call Numbers, WhatsApp, and Bihar district selector */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenPolicy={handleOpenPolicy}
        selectedDistrict={selectedDistrict}
        onSelectDistrict={handleSelectDistrict}
        districts={BIHAR_DISTRICTS}
      />

      {/* Live Continuous Marquee Installation Ticker */}
      <MarqueeTicker />

      <main className="flex-1">
        {/* Full-bleed Hero Background Slideshow styled like Boss Invisible Grill */}
        <Hero
          selectedDistrict={selectedDistrict}
          onOpenBooking={handleOpenBooking}
          onSelectDistrict={handleSelectDistrict}
          districts={BIHAR_DISTRICTS}
        />

        {/* Interactive Before & After Balcony Comparison Slider */}
        <BeforeAfterSlider />

        {/* Live 3D Invisible Grill & Balcony Simulator */}
        <LiveSimulator3D onOpenBooking={handleOpenBooking} />

        {/* Live Video Demonstrations (800kg load test, fire wire cut test, etc.) */}
        <VideoDemosSection />

        {/* Infinite Dual-Rail Scrolling Photo Motion Reel */}
        <ScrollingPhotoReel />

        {/* Instant Area & Cost Estimator with WhatsApp Quotation */}
        <CostCalculator
          selectedDistrict={selectedDistrict}
          onOpenBooking={handleOpenBooking}
        />

        {/* Detailed Core Services Showcase (Grills, Nets, Spikes, Hangers, Ducts) */}
        <ServicesSection
          services={SERVICES_LIST}
          selectedDistrict={selectedDistrict}
          onOpenBooking={handleOpenBooking}
        />

        {/* Bihar All 38 Districts Directory & Local SEO Engine */}
        <DistrictSection
          districts={BIHAR_DISTRICTS}
          selectedDistrict={selectedDistrict}
          onSelectDistrict={handleSelectDistrict}
          onOpenBooking={handleOpenBooking}
        />

        {/* Real Installation Photos Gallery with Lightbox Zoom */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* Quality Comparison (AGS Home Safety vs Local Uncertified Vendors) */}
        <WhyChooseUs />

        {/* Verified Google Reviews with District Filter */}
        <ReviewsSection districtFilter={selectedDistrict?.name} />

        {/* Owner Bio & Quality Guarantee: Aashish Kumar */}
        <OwnerBio />

        {/* Global / Bihar Network Map with Interactive GPS Coordinates & Google Maps Link */}
        <GlobalCoverageMap
          districts={BIHAR_DISTRICTS}
          selectedDistrict={selectedDistrict}
          onSelectDistrict={handleSelectDistrict}
          onOpenBooking={handleOpenBooking}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer with Bihar 38-District SEO Directory */}
      <Footer
        districts={BIHAR_DISTRICTS}
        onSelectDistrict={handleSelectDistrict}
        onOpenPolicy={handleOpenPolicy}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Action Buttons for Call & WhatsApp */}
      <FloatingWidgets
        onOpenBooking={() => handleOpenBooking()}
        selectedDistrict={selectedDistrict}
      />

      {/* Free Site Inspection Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        districts={BIHAR_DISTRICTS}
        defaultService={bookingService}
        defaultDistrict={bookingDistrict}
      />

      {/* Company Policies & Warranty Modal */}
      <PolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
        initialTab={policyTab}
      />
    </div>
  );
}
