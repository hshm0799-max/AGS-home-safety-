import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  Sun, 
  Moon, 
  Sunset, 
  RotateCw, 
  ShieldCheck, 
  Flame, 
  Scissors, 
  MessageCircle, 
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface LiveSimulator3DProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const LiveSimulator3D: React.FC<LiveSimulator3DProps> = ({ onOpenBooking }) => {
  const [wireSpacing, setWireSpacing] = useState<'2inch' | '3inch'>('2inch');
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  const [backdrop, setBackdrop] = useState<'day' | 'sunset' | 'night'>('sunset');
  const [loadWeight, setLoadWeight] = useState<number>(120); // in KG
  const [isEmergencyCut, setIsEmergencyCut] = useState<boolean>(false);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Wire counts based on spacing
  const wireCount = wireSpacing === '2inch' ? 24 : 14;

  const rawPhone = '918873232409';

  const handleWhatsAppSimulation = () => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I tested your 3D Balcony Simulator for AGS Home Safety.\n` +
      `• Spacing: ${wireSpacing === '2inch' ? '2 Inches (Child Safe)' : '3 Inches (Standard)'}\n` +
      `• Orientation: ${orientation.toUpperCase()}\n` +
      `• Desired Load Rating: Up to ${loadWeight} KG\n` +
      `Please provide exact estimate and free site inspection.`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="simulator3d" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 mb-3">
            <Box className="w-3.5 h-3.5" /> Interactive 3D Balcony Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Live 3D Invisible Grill Simulator
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            लाइव 3D में देखें कि आपकी बालकनी में एसएस 316 इनविजिबल ग्रिल कैसी दिखेगी। 
            तारों का अंतर, दिन/रात का दृश्य और लोड स्ट्रेंथ टेस्ट खुद चला कर देखें।
          </p>
        </div>

        {/* Simulator Studio Grid */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Canvas Preview (7 cols) */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between relative bg-slate-900/60">
            
            {/* Top Toolbar in Canvas */}
            <div className="flex items-center justify-between gap-2 z-10 flex-wrap">
              <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SS 316 Marine Wire 3.0mm</span>
              </div>

              {/* Day / Sunset / Night Toggles */}
              <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setBackdrop('day')}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    backdrop === 'day' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Daytime view"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Day</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBackdrop('sunset')}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    backdrop === 'sunset' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Sunset Golden Hour"
                >
                  <Sunset className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sunset</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBackdrop('night')}
                  className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    backdrop === 'night' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Night City Skyline"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Night</span>
                </button>
              </div>
            </div>

            {/* 3D Visual Viewport */}
            <div className="relative my-4 h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-700 shadow-inner flex items-center justify-center">
              
              {/* Dynamic Background Backdrop */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ${
                  backdrop === 'day'
                    ? 'bg-gradient-to-b from-sky-400 via-sky-200 to-amber-100'
                    : backdrop === 'sunset'
                    ? 'bg-gradient-to-b from-indigo-900 via-purple-800 to-amber-600'
                    : 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950'
                }`}
              >
                {/* City skyline silhouettes */}
                <div 
                  className={`absolute inset-x-0 bottom-16 h-40 opacity-40 transition-opacity ${
                    backdrop === 'night' ? 'opacity-70' : 'opacity-30'
                  }`}
                  style={{
                    backgroundImage: 'radial-gradient(circle at 10px 10px, #ffffff 1px, transparent 0)',
                    backgroundSize: '16px 24px',
                  }}
                />
              </div>

              {/* Balcony 3D Frame & Railing */}
              <div 
                className="relative w-11/12 h-5/6 rounded-xl border-4 border-slate-800 bg-black/10 backdrop-blur-[1px] flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-300"
                style={{
                  transform: `perspective(800px) rotateY(${rotationAngle}deg)`,
                }}
              >
                {/* Ceiling Aluminium Track */}
                <div className="h-5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border-b border-slate-600 shadow-md flex items-center justify-around px-2">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  ))}
                </div>

                {/* Wire Cables Array */}
                <div className="flex-1 relative flex items-center justify-around px-4 overflow-hidden">
                  {orientation === 'vertical' ? (
                    // Vertical Wires
                    [...Array(wireCount)].map((_, i) => {
                      const isCenterWire = i === Math.floor(wireCount / 2);
                      const isCut = isEmergencyCut && isCenterWire;
                      const deflection = isCenterWire && !isEmergencyCut ? (loadWeight / 800) * 8 : 0;

                      return (
                        <div
                          key={i}
                          className="h-full relative flex flex-col items-center justify-center transition-all duration-300"
                          style={{
                            transform: `translateX(${deflection}px)`,
                          }}
                        >
                          {isCut ? (
                            <div className="h-full flex flex-col justify-between py-6 animate-in fade-in">
                              <div className="w-0.5 h-20 bg-amber-400 shadow-[0_0_8px_#f59e0b]"></div>
                              <span className="text-[10px] bg-red-600 text-white font-bold px-1 rounded">Cut Exit</span>
                              <div className="w-0.5 h-20 bg-amber-400 shadow-[0_0_8px_#f59e0b]"></div>
                            </div>
                          ) : (
                            <div 
                              className={`w-[2.5px] h-full transition-all ${
                                backdrop === 'night'
                                  ? 'bg-gradient-to-b from-sky-200 via-slate-300 to-sky-100 shadow-[0_0_2px_rgba(255,255,255,0.8)]'
                                  : 'bg-gradient-to-b from-slate-300 via-white to-slate-300 shadow-xs'
                              }`}
                            />
                          )}
                        </div>
                      );
                    })
                  ) : (
                    // Horizontal Wires
                    <div className="w-full h-full flex flex-col justify-around py-3">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="w-full h-[2.5px] bg-gradient-to-r from-slate-300 via-white to-slate-300 shadow-xs"
                        />
                      ))}
                    </div>
                  )}

                  {/* Dynamic Load Indicator Tag in Center */}
                  {loadWeight > 0 && !isEmergencyCut && (
                    <div 
                      className="absolute bg-emerald-600/90 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-lg border border-emerald-400 flex items-center gap-1 animate-bounce"
                      style={{ top: '48%' }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{loadWeight} KG Tension Active</span>
                    </div>
                  )}
                </div>

                {/* Bottom Balcony Glass Railing */}
                <div className="h-20 bg-slate-900/80 backdrop-blur-md border-t-2 border-slate-700 flex items-center justify-between px-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">Tempered Glass Balustrade</span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      Zero Damage
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    Rigid Anchor Base
                  </span>
                </div>
              </div>

              {/* Emergency Fire Cut Badge Overlay */}
              {isEmergencyCut && (
                <div className="absolute top-4 bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 animate-pulse">
                  <Flame className="w-4 h-4" />
                  <span>EMERGENCY FIRE CUT SIMULATION: Wire severed in 2.5s for rescue!</span>
                </div>
              )}
            </div>

            {/* Bottom 3D Angle Slider */}
            <div className="flex items-center justify-between gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 text-emerald-400" />
                <span>3D Rotate Perspective:</span>
              </span>
              <input
                type="range"
                min="-25"
                max="25"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="w-48 accent-emerald-500 cursor-pointer"
              />
              <span className="font-mono text-emerald-400">{rotationAngle}°</span>
            </div>

          </div>

          {/* Right Controls Panel (5 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white">Customization Controls</h3>
                <p className="text-xs text-slate-400 mt-0.5">Customize specifications in real time</p>
              </div>

              {/* Wire Spacing Option */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  1. Wire Cable Spacing
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setWireSpacing('2inch')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      wireSpacing === '2inch'
                        ? 'border-emerald-500 bg-emerald-500/20 text-white font-bold'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="text-xs font-black text-white">2 Inches (50mm)</p>
                    <p className="text-[10px] text-emerald-400 mt-0.5 font-semibold">★ Recommended for Kids & Pets</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setWireSpacing('3inch')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      wireSpacing === '3inch'
                        ? 'border-emerald-500 bg-emerald-500/20 text-white font-bold'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="text-xs font-black text-white">3 Inches (75mm)</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Adult Fall Prevention</p>
                  </button>
                </div>
              </div>

              {/* Cable Direction */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  2. Cable Orientation
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrientation('vertical')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                      orientation === 'vertical'
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    Vertical (Standard)
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrientation('horizontal')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                      orientation === 'horizontal'
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    Horizontal Line
                  </button>
                </div>
              </div>

              {/* Tensile Breaking Load Slider */}
              <div className="space-y-2 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300">Cable Tensile Stress Test:</span>
                  <span className="font-mono text-emerald-400 font-bold">{loadWeight} KG Load</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="800"
                  value={loadWeight}
                  onChange={(e) => setLoadWeight(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>50 kg (Toddler)</span>
                  <span>400 kg (High Stress)</span>
                  <span className="text-emerald-400 font-bold">800 kg (SS 316 Max)</span>
                </div>
              </div>

              {/* Emergency Fire Cutting Test Button */}
              <button
                type="button"
                onClick={() => setIsEmergencyCut(!isEmergencyCut)}
                className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  isEmergencyCut
                    ? 'bg-red-600 text-white border-red-500 shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                <Scissors className="w-4 h-4 text-amber-400" />
                <span>{isEmergencyCut ? 'Reset Wire Grid' : 'Simulate Fire Rescue Wire Cut'}</span>
              </button>

            </div>

            {/* Bottom Actions */}
            <div className="space-y-2 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleWhatsAppSimulation}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quote This 3D Configuration</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking('SS 316 Invisible Grills')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
              >
                Book Free On-Site Inspection
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
