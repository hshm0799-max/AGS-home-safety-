import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Image as ImageIcon, 
  Check, 
  Star, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Sparkles,
  Award,
  Bot
} from 'lucide-react';
import { DistrictInfo } from '../types';

import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import sunsetBalconyImg from '../assets/images/balcony_sunset_view_1790434251681.jpg';
import technicianImg from '../assets/images/technician_installing_grill_1790434273306.jpg';
import clothHangerImg from '../assets/images/cloth_hanger_balcony_1790433378816.jpg';
import pigeonNetImg from '../assets/images/pigeon_safety_net_1790433398792.jpg';
import balconyNetImg from '../assets/images/balcony_safety_net_1790433417950.jpg';

interface HeroProps {
  selectedDistrict: DistrictInfo | null;
  onOpenBooking: (service?: string) => void;
  onSelectDistrict: (district: DistrictInfo) => void;
  districts: DistrictInfo[];
}

export const Hero: React.FC<HeroProps> = ({
  selectedDistrict,
  onOpenBooking,
  onSelectDistrict,
  districts,
}) => {
  const primaryPhone = '+91 88732 32409';
  const rawPrimaryPhone = '918873232409';
  const secondaryPhone = '+91 98765 43210';
  const rawSecondaryPhone = '919876543210';

  // Slideshow images with localized titles & captions
  const slides = [
    {
      image: heroGrillImg,
      subtitle: 'SS 316 Marine Grade Invisible Grills',
      badge: 'Patna High-Rise Installation',
    },
    {
      image: sunsetBalconyImg,
      subtitle: 'Unobstructed Panoramic Sunset Balcony View',
      badge: 'Zero View Obstruction',
    },
    {
      image: technicianImg,
      subtitle: 'Certified Diamond Precision Laser Installation',
      badge: 'Skilled Safety Engineers',
    },
    {
      image: clothHangerImg,
      subtitle: 'Pull & Dry 6-Pipe Ceiling Cloth Drying Hangers',
      badge: '100% Floor Space Free',
    },
    {
      image: pigeonNetImg,
      subtitle: 'Garware Virgin HDPE Anti-Bird & Pigeon Nets',
      badge: '100% Pigeon Free Homes',
    },
    {
      image: balconyNetImg,
      subtitle: 'Balcony Children & Pet High-Tensile Safety Netting',
      badge: '150+ KG Load Certified',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I want a Free Quote & Site Inspection for AGS Invisible Grills / Safety Nets in ${
        selectedDistrict ? selectedDistrict.name : 'Bihar'
      }. Please share rate list.`
    );
    window.open(`https://wa.me/${rawPrimaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center text-white overflow-hidden bg-slate-950">
      
      {/* Background Slideshow Layer */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08]"
          />
        </div>
      ))}

      {/* Modern Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      {/* Foreground Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16 text-center flex flex-col items-center justify-center">
        
        {/* District Switcher Pill */}
        <div className="mb-4 inline-flex items-center gap-2 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-full px-4 py-1.5 shadow-xl">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300">
            Serving: <strong className="text-emerald-400">{selectedDistrict ? `${selectedDistrict.name} (${selectedDistrict.hindiName})` : 'All 38 Districts of Bihar'}</strong>
          </span>
          <span className="text-slate-500">|</span>
          <select
            value={selectedDistrict?.id || ''}
            onChange={(e) => {
              const found = districts.find(d => d.id === e.target.value);
              if (found) onSelectDistrict(found);
            }}
            className="bg-transparent text-xs font-bold text-amber-300 focus:outline-none cursor-pointer"
          >
            {districts.map((d) => (
              <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                {d.name} ({d.deliveryTime.includes('Same') ? '⚡ Same Day' : '24h'})
              </option>
            ))}
          </select>
        </div>

        {/* Current Slide Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {slides[currentSlide].badge}
          </span>
        </div>

        {/* Main Headline (Styled after Boss Invisible Grill with golden/amber contrast) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-3xl">
          Premium <span className="text-amber-400 drop-shadow-[0_2px_15px_rgba(251,191,36,0.4)]">Invisible Safety Grills</span> in {selectedDistrict ? selectedDistrict.name : 'Bihar'}
        </h1>

        {/* Hindi Tagline */}
        <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-300 max-w-2xl">
          सुंदर बालकनी, 100% निर्बाध दृश्य और बच्चों-पालतू जानवरों की पूर्ण सुरक्षा
        </p>

        {/* Body Description */}
        <p className="mt-4 text-xs sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
          Protect your family with Bihar's most trusted invisible grill & safety netting service. SS316 nylon-coated marine-grade steel cables, rust-proof, child-safe, and virtually invisible from every angle.
        </p>

        {/* Free Quote Phone Highlight */}
        <div className="mt-6 flex items-center gap-2 text-base sm:text-xl font-bold bg-slate-900/80 border border-slate-700/80 px-5 py-2.5 rounded-2xl shadow-lg backdrop-blur-md">
          <Phone className="w-5 h-5 text-amber-400 animate-bounce" />
          <span className="text-slate-300 text-sm sm:text-base font-medium">Free Quote:</span>
          <a 
            href={`tel:+${rawPrimaryPhone}`} 
            className="text-amber-400 hover:text-amber-300 transition-colors tracking-tight font-black"
          >
            {primaryPhone}
          </a>
          <span className="text-slate-500 hidden sm:inline">/</span>
          <a 
            href={`tel:+${rawSecondaryPhone}`} 
            className="text-sky-300 hover:text-white transition-colors tracking-tight font-black hidden sm:inline"
          >
            {secondaryPhone}
          </a>
        </div>

        {/* Stacked Primary Touch Action Buttons (Exact style from screenshot) */}
        <div className="mt-6 w-full max-w-md space-y-3">
          
          {/* 1. Call Button (Amber/Gold Solid) */}
          <a
            href={`tel:+${rawPrimaryPhone}`}
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>Call {primaryPhone}</span>
          </a>

          {/* 2. WhatsApp Button (Rich Green Solid) */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
          </button>

          {/* 3. View Our Work Button (Dark Bordered Transparent) */}
          <a
            href="#gallery"
            className="w-full flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold py-3.5 px-6 rounded-2xl border-2 border-slate-600 hover:border-slate-400 transition-all text-sm sm:text-base backdrop-blur-md"
          >
            <ImageIcon className="w-5 h-5 text-sky-400" />
            <span>View Our Work Gallery</span>
          </a>

          {/* 4. Book Free Measurement Inspection Button */}
          <button
            type="button"
            onClick={() => onOpenBooking('SS 316 Invisible Grills')}
            className="w-full text-center text-xs font-bold text-amber-300 hover:text-amber-200 underline pt-1"
          >
            Or Schedule 100% Free On-Site Inspection & Sample Demo →
          </button>
        </div>

        {/* Trust Badges (From bossinvisiblegrill screenshot with Mascot) */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 w-full max-w-xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-black">✓</span>
            <span>5,000+ Installations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-black">✓</span>
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-black">✓</span>
            <span>10-15 Year Warranty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-black">✓</span>
            <span>4.9★ Google Rating</span>
          </div>
        </div>

        {/* Carousel Slide Pagination Dots (From bossinvisiblegrill screenshot) */}
        <div className="mt-6 flex items-center gap-2">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentSlide(dotIdx)}
              className={`transition-all duration-300 rounded-full ${
                dotIdx === currentSlide
                  ? 'w-7 h-2.5 bg-amber-400 shadow-sm'
                  : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Slide Next / Prev Controls */}
        <div className="hidden sm:flex absolute inset-y-0 left-4 right-4 z-10 items-center justify-between pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            className="pointer-events-auto p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800/90 text-white backdrop-blur-md border border-slate-700 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="pointer-events-auto p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800/90 text-white backdrop-blur-md border border-slate-700 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
