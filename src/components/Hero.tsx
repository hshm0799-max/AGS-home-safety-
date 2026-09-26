import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Image as ImageIcon, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { DistrictInfo } from '../types';

// Real High-Resolution Invisible Grill Installation Images for Cinematic Animation
import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import sunsetBalconyImg from '../assets/images/balcony_sunset_view_1790434251681.jpg';
import nightBalconyImg from '../assets/images/night_balcony_grill_1790435104043.jpg';
import curvedBalconyImg from '../assets/images/curved_balcony_grill_1790435076464.jpg';
import highriseFacadeImg from '../assets/images/highrise_facade_grill_1790434717531.jpg';
import windowGrillImg from '../assets/images/window_invisible_grill_1790434683120.jpg';

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
  // Single verified primary phone number
  const primaryPhone = '+91 88732 32409';
  const rawPrimaryPhone = '918873232409';

  // 6 Cinematic Invisible Grill Background Slides
  const cinematicSlides = [
    {
      id: 1,
      image: heroGrillImg,
      caption: 'SS 316 Marine Invisible Grill • Luxury High-Rise Balcony',
      badge: 'Patna Luxury Apartments',
    },
    {
      id: 2,
      image: sunsetBalconyImg,
      caption: 'Panoramic Sunset Balcony • 100% Unobstructed City View',
      badge: 'Zero View Obstruction',
    },
    {
      id: 3,
      image: nightBalconyImg,
      caption: 'Evening Balcony Corridor • Warm Downlights & Night City View',
      badge: 'Reflective SS 316',
    },
    {
      id: 4,
      image: curvedBalconyImg,
      caption: 'Curved Balcony Invisible Grill • Custom CNC Aluminium Tracks',
      badge: 'Custom Curved Fit',
    },
    {
      id: 5,
      image: highriseFacadeImg,
      caption: 'Multi-Floor High-Rise Facade • Storm Wind Tested 140 km/h',
      badge: 'High-Rise Certified',
    },
    {
      id: 6,
      image: windowGrillImg,
      caption: 'Modern Window Invisible Safety Grill • Emergency 3s Fire Rescue',
      badge: 'Emergency Ready',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cinematicSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [cinematicSlides.length]);

  const handleWhatsApp = () => {
    const districtName = selectedDistrict ? selectedDistrict.name : 'Bihar';
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I want a Free Quote & Site Inspection for Invisible Safety Grills in ${districtName}. Please share price per sq ft and technician visit availability.`
    );
    window.open(`https://wa.me/${rawPrimaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-[94vh] flex flex-col justify-between text-white overflow-hidden bg-slate-950">
      
      {/* 1. Cinematic Animation Background Images Layer */}
      {cinematicSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide 
              ? 'opacity-100 z-0' 
              : 'opacity-0 pointer-events-none -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className={`w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08] saturate-[1.15] ${
              idx === currentSlide ? 'animate-cinematic-bg' : ''
            }`}
          />
        </div>
      ))}

      {/* 2. Measured Contrast Vignette & Dark Gradient Scrims (Ensures text is crisp while background is cinematic) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950/80 pointer-events-none" />

      {/* Top District Bar over Hero */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 pt-4 sm:pt-6 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-full px-3.5 py-1 text-xs font-semibold text-slate-300 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Serving: <strong className="text-emerald-400">{selectedDistrict ? `${selectedDistrict.name} (${selectedDistrict.hindiName})` : 'All 38 Districts of Bihar'}</strong></span>
          <span className="text-slate-500">|</span>
          <select
            value={selectedDistrict?.id || ''}
            onChange={(e) => {
              const found = districts.find(d => d.id === e.target.value);
              if (found) onSelectDistrict(found);
            }}
            className="bg-transparent text-xs font-bold text-amber-400 focus:outline-none cursor-pointer"
          >
            {districts.map((d) => (
              <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                {d.name} ({d.deliveryTime.includes('Same') ? '⚡ Same-Day' : '24h'})
              </option>
            ))}
          </select>
        </div>

        {/* Current Active Photo Tag */}
        <div className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-full px-3 py-1 text-xs font-bold text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{cinematicSlides[currentSlide].badge}</span>
        </div>
      </div>

      {/* 3. Center Hero Content (Exact Boss Invisible Grill Layout from Screenshot) */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Main Title (Amber/Golden Accent on 'Invisible Safety Grills') */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] drop-shadow-lg">
          Premium <span className="text-amber-400 drop-shadow-[0_2px_25px_rgba(251,191,36,0.6)]">Invisible Safety Grills</span> in {selectedDistrict ? selectedDistrict.name : 'Bihar'}
        </h1>

        {/* Hindi Tagline */}
        <p className="mt-3 text-sm sm:text-lg font-bold text-emerald-300 drop-shadow-md">
          सुंदर बालकनी, 100% निर्बाध दृश्य और बच्चों-पालतू जानवरों की पूर्ण सुरक्षा
        </p>

        {/* Subtitle / Paragraph (From Boss Invisible Grill reference) */}
        <p className="mt-3 text-xs sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
          Protect your family with Bihar's most trusted invisible grill installation service. SS316 nylon-coated marine-grade steel, rust-proof, child-safe, and virtually invisible from every angle.
        </p>

        {/* Free Quote Single Phone Line (Exact layout from Screenshot 2) */}
        <div className="mt-6 flex items-center justify-center gap-2 text-base sm:text-xl font-bold text-white drop-shadow">
          <Phone className="w-5 h-5 text-amber-400 animate-bounce" />
          <span className="text-slate-300 font-semibold">Free Quote:</span>
          <a 
            href={`tel:+${rawPrimaryPhone}`} 
            className="text-amber-400 hover:text-amber-300 transition-colors tracking-tight font-black"
          >
            {primaryPhone}
          </a>
        </div>

        {/* Stacked Primary Touch Action Buttons (Matching Screenshot: Call, WhatsApp, Free Enquiry) */}
        <div className="mt-6 w-full max-w-md space-y-3">
          
          {/* 1. Call Icon Button (Solid Amber/Gold Button) */}
          <a
            href={`tel:+${rawPrimaryPhone}`}
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>Call {primaryPhone}</span>
          </a>

          {/* 2. WhatsApp Icon Button (Rich Solid Emerald Green Button) */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
          </button>

          {/* 3. Enquiry Free Icon Button (High-Contrast Sky/Teal Button with ClipboardCheck Icon) */}
          <button
            type="button"
            onClick={() => onOpenBooking('SS 316 Invisible Grills')}
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 hover:from-sky-500 hover:to-cyan-500 text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-sky-600/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg cursor-pointer border border-sky-400/30"
          >
            <Award className="w-5 h-5 text-amber-300" />
            <span>Enquiry Free (निःशुल्क पूछताछ)</span>
          </button>

          {/* Secondary Gallery & 3D Models Button */}
          <a
            href="#products-3d"
            className="w-full flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-slate-700/80 transition-all text-xs sm:text-sm backdrop-blur-md"
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>View All Real Photos & 3D Interactive Models →</span>
          </a>
        </div>

        {/* Trust Proof Metrics (Exact row from Screenshot 2 with yellow checkmarks) */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 w-full max-w-lg flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-200 drop-shadow">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-black">✓</span>
            <span>5,000+ Installations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-black">✓</span>
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-black">✓</span>
            <span>10-15 Year Warranty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-black">✓</span>
            <span>4.9★ Google Rating</span>
          </div>
        </div>

      </div>

      {/* 4. Bottom Slider Pagination Dots (Exact from Screenshot 2) */}
      <div className="relative z-20 pb-5 pt-2 flex items-center justify-center gap-2">
        {cinematicSlides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => setCurrentSlide(dotIdx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              dotIdx === currentSlide
                ? 'w-7 h-2.5 bg-amber-400 shadow-md shadow-amber-400/50'
                : 'w-2.5 h-2.5 bg-slate-600/80 hover:bg-slate-400'
            }`}
            title={`Slide ${dotIdx + 1}`}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
