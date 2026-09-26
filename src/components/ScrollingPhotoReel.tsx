import React from 'react';
import { Camera, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import sunsetBalconyImg from '../assets/images/balcony_sunset_view_1790434251681.jpg';
import technicianImg from '../assets/images/technician_installing_grill_1790434273306.jpg';
import clothHangerImg from '../assets/images/cloth_hanger_balcony_1790433378816.jpg';
import pigeonNetImg from '../assets/images/pigeon_safety_net_1790433398792.jpg';
import balconyNetImg from '../assets/images/balcony_safety_net_1790433417950.jpg';

export const ScrollingPhotoReel: React.FC = () => {
  const photoStrip1 = [
    { img: heroGrillImg, title: 'SS 316 Balcony Invisible Grill', loc: 'Bailey Road, Patna' },
    { img: sunsetBalconyImg, title: 'Sunset View Cable Tensioning', loc: 'Saguna More, Danapur' },
    { img: clothHangerImg, title: 'Pull & Dry 6-Pipe Ceiling Hanger', loc: 'Mithanpura, Muzaffarpur' },
    { img: pigeonNetImg, title: 'Garware Balcony Pigeon Netting', loc: 'AP Colony, Gaya' },
    { img: technicianImg, title: 'Precision Laser Anchoring', loc: 'Tilkamanjhi, Bhagalpur' },
    { img: balconyNetImg, title: 'High-Tensile Child Safety Net', loc: 'Laheriasarai, Darbhanga' },
  ];

  const photoStrip2 = [
    { img: sunsetBalconyImg, title: 'Curved Balcony Wire Grid', loc: 'IOCL Township, Begusarai' },
    { img: clothHangerImg, title: 'Stainless Steel Ceiling Dryer', loc: 'Katira, Arrah' },
    { img: heroGrillImg, title: '12th Floor Safety Installation', loc: 'Paswan Chowk, Hajipur' },
    { img: balconyNetImg, title: 'Building Shaft Bird Protection', loc: 'Dehri On Sone, Rohtas' },
    { img: pigeonNetImg, title: 'AC Ledge Stainless Steel Spikes', loc: 'Bhatta Bazar, Purnia' },
    { img: technicianImg, title: 'Diamond Bit Clean Drilling', loc: 'Boring Road, Patna' },
  ];

  return (
    <section className="py-14 bg-slate-950 text-white overflow-hidden relative border-y border-slate-800">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-8">
        <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/30 mb-2">
          <Camera className="w-3.5 h-3.5" /> Infinite Live Motion Reel
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Real Installation Stream Across Bihar
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          हजारों संतुष्ट घरों की लाइव तस्वीरें — पटना, गया, मुजफ्फरपुर और पूरे बिहार में।
        </p>
      </div>

      {/* Rail 1: Scrolling Left */}
      <div className="flex overflow-hidden whitespace-nowrap mask-fade mb-4">
        <div className="flex items-center gap-4 animate-marquee">
          {photoStrip1.concat(photoStrip1).map((item, idx) => (
            <div
              key={idx}
              className="relative w-64 sm:w-72 h-44 rounded-2xl overflow-hidden shrink-0 border border-slate-800 shadow-md group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-[10px] bg-emerald-600 font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" /> {item.loc}
                </span>
                <p className="text-xs font-bold mt-1 line-clamp-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rail 2: Scrolling Right (Reverse) */}
      <div className="flex overflow-hidden whitespace-nowrap mask-fade">
        <div className="flex items-center gap-4 animate-marquee-reverse">
          {photoStrip2.concat(photoStrip2).map((item, idx) => (
            <div
              key={idx}
              className="relative w-64 sm:w-72 h-44 rounded-2xl overflow-hidden shrink-0 border border-slate-800 shadow-md group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-[10px] bg-blue-600 font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" /> {item.loc}
                </span>
                <p className="text-xs font-bold mt-1 line-clamp-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
