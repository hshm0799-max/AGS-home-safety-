import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  CheckCircle2,
  MapPin,
  Clock
} from 'lucide-react';
import { DistrictInfo } from '../types';

import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import sunsetBalconyImg from '../assets/images/balcony_sunset_view_1790434251681.jpg';
import technicianImg from '../assets/images/technician_installing_grill_1790434273306.jpg';
import windowGrillImg from '../assets/images/window_invisible_grill_1790434683120.jpg';
import cableMacroImg from '../assets/images/cable_cross_clip_macro_1790434702134.jpg';
import highriseFacadeImg from '../assets/images/highrise_facade_grill_1790434717531.jpg';
import clothHangerImg from '../assets/images/cloth_hanger_balcony_1790433378816.jpg';
import ceilingDryerImg from '../assets/images/ceiling_dryer_action_1790434734330.jpg';
import pigeonNetImg from '../assets/images/pigeon_safety_net_1790433398792.jpg';
import balconyNetImg from '../assets/images/balcony_safety_net_1790433417950.jpg';

interface Top10ShowcaseProps {
  selectedDistrict: DistrictInfo | null;
  onOpenBooking: (service?: string) => void;
}

export const Top10Showcase: React.FC<Top10ShowcaseProps> = ({
  selectedDistrict,
  onOpenBooking,
}) => {
  const primaryPhone = '+91 88732 32409';
  const rawPrimaryPhone = '918873232409';

  const top10Images = [
    {
      id: 1,
      title: 'SS 316 Marine Invisible Grill',
      category: 'Invisible Grill',
      location: 'Patna High-Rise',
      image: heroGrillImg,
      description: 'Marine-grade SS 316 wire cables with 800+ kg break load. Rust-free and transparent.',
      warranty: '15 Years Warranty',
      highlight: 'Top Seller',
    },
    {
      id: 2,
      title: 'Panoramic Sunset Balcony View',
      category: 'Balcony Grill',
      location: 'Muzaffarpur Apartments',
      image: sunsetBalconyImg,
      description: 'Zero obstruction to natural daylight and sunset breeze while safeguarding children.',
      warranty: '10 Years Warranty',
      highlight: 'Zero View Block',
    },
    {
      id: 3,
      title: 'Laser Alignment & Tensioning',
      category: 'Installation',
      location: 'Bailey Road, Patna',
      image: technicianImg,
      description: 'Certified technicians ensuring high-tension wire alignment with hydraulic tools.',
      warranty: 'Free Alignment Check',
      highlight: 'Laser Precision',
    },
    {
      id: 4,
      title: 'Window Invisible Safety Grill',
      category: 'Window Safety',
      location: 'Gaya Modern Villas',
      image: windowGrillImg,
      description: 'Replaces dark, ugly iron bars. Clean modern look with emergency 3-second quick release.',
      warranty: '10 Years Warranty',
      highlight: 'Modern Design',
    },
    {
      id: 5,
      title: 'SS 316 Cross-Clips & Wire Locks',
      category: 'Hardware Specs',
      location: 'Bihar Regional Labs',
      image: cableMacroImg,
      description: 'High-tensile cross-clamps preventing wires from separating or sagging permanently.',
      warranty: '100% Anti-Rust SS',
      highlight: 'German Spec',
    },
    {
      id: 6,
      title: 'Multi-Floor High-Rise Facade',
      category: 'Architecture',
      location: 'Bhagalpur Towers',
      image: highriseFacadeImg,
      description: 'Architectural safety netting suitable for multi-floor balconies, terraces, and towers.',
      warranty: '12 Years Warranty',
      highlight: 'Wind Tested',
    },
    {
      id: 7,
      title: 'Pull & Dry 6-Pipe Ceiling Hanger',
      category: 'Ceiling Cloth Dryer',
      location: 'Kankarbagh, Patna',
      image: clothHangerImg,
      description: 'Individually adjustable stainless steel drying pipes that lift smoothly to the ceiling.',
      warranty: '5 Years Warranty',
      highlight: '100% Space Free',
    },
    {
      id: 8,
      title: 'Heavy-Duty Smooth Pulley Dryer',
      category: 'Ceiling Cloth Dryer',
      location: 'Darbhanga Residences',
      image: ceilingDryerImg,
      description: 'Effortless pulley ropes hold wet bedsheets, heavy blankets, and clothes up to 35 kg.',
      warranty: '5 Years Warranty',
      highlight: 'Heavy Duty',
    },
    {
      id: 9,
      title: 'Garware Virgin HDPE Pigeon Net',
      category: 'Bird Netting',
      location: 'Begusarai Flats',
      image: pigeonNetImg,
      description: 'UV-treated translucent netting blocks pigeons and bats permanently without spoiling balcony look.',
      warranty: '5 Years Warranty',
      highlight: 'Pigeon Proof',
    },
    {
      id: 10,
      title: 'Child & Pet Fall-Protection Net',
      category: 'Child Safety Net',
      location: 'Arrah High-Rise',
      image: balconyNetImg,
      description: 'Double-knotted high-strength monofilament netting tested for 150+ kg shock impact.',
      warranty: '7 Years Warranty',
      highlight: 'Child Safe',
    },
  ];

  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setActiveModalIdx(idx);
  const closeLightbox = () => setActiveModalIdx(null);

  const nextLightbox = () => {
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx + 1) % top10Images.length);
    }
  };

  const prevLightbox = () => {
    if (activeModalIdx !== null) {
      setActiveModalIdx((activeModalIdx - 1 + top10Images.length) % top10Images.length);
    }
  };

  const handleWhatsAppQuote = (itemTitle: string) => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I am interested in getting "${itemTitle}" installed at my home in ${
        selectedDistrict ? selectedDistrict.name : 'Bihar'
      }. Please share price per sq ft and appointment date.`
    );
    window.open(`https://wa.me/${rawPrimaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Top 10 Live Work Photos • AGS Home Safety
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Bihar's 10 Most Popular <span className="text-amber-400">Safety Installations</span>
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Original on-site photographs from actual installations across Patna, Gaya, Muzaffarpur & all 38 districts of Bihar.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking('SS 316 Invisible Grills')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Book Free Site Measurement</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* 10-Image Grid with Hover Card & Quick View */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {top10Images.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-amber-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer flex flex-col"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Number Badge */}
                <div className="absolute top-2 left-2 bg-slate-950/85 text-amber-400 text-[10px] font-black px-2 py-0.5 rounded-md border border-slate-700 backdrop-blur-sm">
                  #{idx + 1}
                </div>

                {/* Category Pill */}
                <div className="absolute top-2 right-2 bg-emerald-600/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                  {item.highlight}
                </div>

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="p-2 rounded-full bg-amber-400 text-slate-950 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Photo Info */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-1 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {item.location}
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-300">
                  <span className="font-semibold text-amber-400">{item.warranty}</span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">Inspect →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for 10 Images */}
        {activeModalIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Preview Side */}
              <div className="relative lg:w-3/5 bg-black flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
                <img
                  src={top10Images[activeModalIdx].image}
                  alt={top10Images[activeModalIdx].title}
                  className="max-h-[500px] w-full object-contain"
                />

                {/* Nav Arrows inside Modal */}
                <button
                  type="button"
                  onClick={prevLightbox}
                  className="absolute left-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextLightbox}
                  className="absolute right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-md text-xs font-bold text-amber-400 border border-slate-800">
                  Photo {activeModalIdx + 1} of {top10Images.length}
                </div>
              </div>

              {/* Information Side */}
              <div className="lg:w-2/5 p-6 flex flex-col justify-between bg-slate-900">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    {top10Images[activeModalIdx].highlight}
                  </div>

                  <h3 className="text-xl font-black text-white leading-tight">
                    {top10Images[activeModalIdx].title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-300">
                    <span className="font-semibold text-emerald-400">{top10Images[activeModalIdx].category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {top10Images[activeModalIdx].location}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {top10Images[activeModalIdx].description}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{top10Images[activeModalIdx].warranty} with replacement assurance</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Free Site Measurement anywhere in {selectedDistrict?.name || 'Bihar'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Direct warranty signed by Founder Aashish Kumar</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 space-y-2 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppQuote(top10Images[activeModalIdx].title)}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Get Instant Price on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:+${rawPrimaryPhone}`}
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 font-bold py-2.5 px-4 rounded-xl text-sm border border-slate-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Aashish Kumar ({primaryPhone})</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
