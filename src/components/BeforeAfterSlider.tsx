import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, Check, X, ShieldCheck } from 'lucide-react';
import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import sunsetBalconyImg from '../assets/images/balcony_sunset_view_1790434251681.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5" /> Interactive Balcony Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            See the Difference: Traditional Iron Grill vs Invisible Grill
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            स्लाइडर को खींचकर देखें कि पुराने लोहे के पिंजरे और आधुनिक एसएस 316 इनविजिबल ग्रिल में कितना बड़ा अंतर है।
          </p>
        </div>

        {/* Comparison Stage */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 select-none h-80 sm:h-[480px]">
          
          {/* Right Image: Modern Invisible Grill */}
          <div className="absolute inset-0">
            <img
              src={sunsetBalconyImg}
              alt="After AGS SS 316 Invisible Grill Installation"
              className="w-full h-full object-cover"
            />
            {/* Tag on Right */}
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg border border-emerald-400">
              AFTER: SS 316 Invisible Grill (100% Panoramic View)
            </div>
          </div>

          {/* Left Image: Traditional Rusty Iron Cage (Clipped by sliderPos) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full min-w-[700px] sm:min-w-[1100px]">
              <img
                src={heroGrillImg}
                alt="Before with Traditional Iron Grills"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
              />
              {/* Overlay faux iron bars */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #1e293b 0px, #0f172a 14px, transparent 14px, transparent 65px)',
                }}
              />
              {/* Tag on Left */}
              <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg border border-red-400">
                BEFORE: Old Iron Grill (Dark, Rusty, Cage View)
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div 
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-slate-900">
              <ArrowLeftRight className="w-5 h-5 text-slate-900" />
            </div>
          </div>

          {/* Interactive Range Input overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>

        {/* Feature Comparison Pill Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-xs space-y-2">
            <span className="font-bold text-red-400 flex items-center gap-1.5 text-sm">
              <X className="w-4 h-4 text-red-400" /> Traditional Iron / MS Grills
            </span>
            <p className="text-slate-400">
              Blocks 40% sunlight and fresh air. Prone to rust during Bihar monsoon. Heavy welding damages balcony floor and creates a prison-like feel. Emergency escape is impossible.
            </p>
          </div>

          <div className="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-500/40 text-xs space-y-2">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
              <Check className="w-4 h-4 text-emerald-400" /> AGS SS 316 Invisible Grills
            </span>
            <p className="text-slate-300">
              100% crystal clear view with maximum sunlight. 800+ kg breaking strength. Zero rust, zero painting required. Quick emergency wire-cutting option for firefighter escape.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
