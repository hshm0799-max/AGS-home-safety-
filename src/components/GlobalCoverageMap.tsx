import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Globe
} from 'lucide-react';
import { DistrictInfo } from '../types';

interface GlobalCoverageMapProps {
  districts: DistrictInfo[];
  selectedDistrict: DistrictInfo | null;
  onSelectDistrict: (district: DistrictInfo) => void;
  onOpenBooking: (serviceName?: string, districtName?: string) => void;
}

interface MapMarker {
  id: string;
  name: string;
  hindiName: string;
  x: number; // percentage on map SVG
  y: number; // percentage on map SVG
  address: string;
  latLng: string;
  hubType: 'Headquarters' | 'Regional Hub' | 'Express Station';
  turnaround: string;
  installations: number;
}

const MAP_HUBS: MapMarker[] = [
  {
    id: 'patna',
    name: 'Patna (State HQ)',
    hindiName: 'पटना (मुख्यालय)',
    x: 48,
    y: 52,
    address: 'Bailey Road, Near Saguna More & Danapur, Patna - 800001',
    latLng: '25.5941° N, 85.1376° E',
    hubType: 'Headquarters',
    turnaround: '⚡ 2-4 Hours (Same Day)',
    installations: 1480,
  },
  {
    id: 'muzaffarpur',
    name: 'Muzaffarpur',
    hindiName: 'मुजफ्फरपुर',
    x: 52,
    y: 36,
    address: 'Club Road, Mithanpura, Muzaffarpur - 842002',
    latLng: '26.1209° N, 85.3647° E',
    hubType: 'Regional Hub',
    turnaround: '⚡ Within 12-24 Hours',
    installations: 640,
  },
  {
    id: 'gaya',
    name: 'Gaya & Bodhgaya',
    hindiName: 'गया एवं बोधगया',
    x: 47,
    y: 72,
    address: 'AP Colony & Civil Lines, Gaya - 823001',
    latLng: '24.7914° N, 85.0002° E',
    hubType: 'Regional Hub',
    turnaround: '⚡ 24 Hours Site Visit',
    installations: 520,
  },
  {
    id: 'bhagalpur',
    name: 'Bhagalpur',
    hindiName: 'भागलपुर',
    x: 75,
    y: 57,
    address: 'Zero Mile & Tilkamanjhi, Bhagalpur - 812001',
    latLng: '25.2425° N, 86.9842° E',
    hubType: 'Regional Hub',
    turnaround: '⚡ 24-36 Hours',
    installations: 430,
  },
  {
    id: 'darbhanga',
    name: 'Darbhanga',
    hindiName: 'दरभंगा',
    x: 62,
    y: 33,
    address: 'Tower Chowk & Laheriasarai, Darbhanga - 846001',
    latLng: '26.1542° N, 85.8918° E',
    hubType: 'Express Station',
    turnaround: '⚡ Within 24 Hours',
    installations: 380,
  },
  {
    id: 'purnia',
    name: 'Purnia',
    hindiName: 'पूर्णिया',
    x: 84,
    y: 42,
    address: 'Bhatta Bazar & Line Bazar, Purnia - 854301',
    latLng: '25.7771° N, 87.4753° E',
    hubType: 'Express Station',
    turnaround: '⚡ 24-48 Hours',
    installations: 310,
  },
  {
    id: 'begusarai',
    name: 'Begusarai',
    hindiName: 'बेगूसराय',
    x: 64,
    y: 53,
    address: 'Harrakh & IOCL Township, Barauni, Begusarai - 851101',
    latLng: '25.4182° N, 86.1272° E',
    hubType: 'Express Station',
    turnaround: '⚡ 12-24 Hours',
    installations: 290,
  },
  {
    id: 'bhojpur',
    name: 'Bhojpur (Arrah)',
    hindiName: 'भोजपुर (आरा)',
    x: 37,
    y: 54,
    address: 'Katira & Nawada, Arrah - 802301',
    latLng: '25.5560° N, 84.6603° E',
    hubType: 'Express Station',
    turnaround: '⚡ Same Day / 12h',
    installations: 275,
  },
  {
    id: 'vaishali',
    name: 'Vaishali (Hajipur)',
    hindiName: 'वैशाली (हाजीपुर)',
    x: 50,
    y: 48,
    address: 'Paswan Chowk & Industrial Area, Hajipur - 844101',
    latLng: '25.6858° N, 85.2146° E',
    hubType: 'Regional Hub',
    turnaround: '⚡ Same Day (2 Hours)',
    installations: 390,
  },
  {
    id: 'rohtas',
    name: 'Rohtas (Sasaram / Dehri)',
    hindiName: 'रोहतास (सासाराम)',
    x: 27,
    y: 67,
    address: 'GT Road & Dehri On Sone, Sasaram - 821115',
    latLng: '24.9535° N, 84.0298° E',
    hubType: 'Express Station',
    turnaround: '⚡ Within 24 Hours',
    installations: 210,
  },
];

export const GlobalCoverageMap: React.FC<GlobalCoverageMapProps> = ({
  districts,
  selectedDistrict,
  onSelectDistrict,
  onOpenBooking,
}) => {
  const [activeHub, setActiveHub] = useState<MapMarker>(MAP_HUBS[0]);

  const rawPhone = '918873232409';

  const handleOpenGoogleMaps = (hub: MapMarker) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `AGS Home Safety Invisible Grill ${hub.name} Bihar`
    )}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppHub = (hub: MapMarker) => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I checked your service location for ${hub.name} on the map. Please share technician availability for a site visit at my residence.`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="map-coverage" className="py-16 sm:py-20 bg-slate-950 text-white border-t border-slate-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full border border-emerald-500/30 mb-3">
            <Globe className="w-3.5 h-3.5" /> State-Wide Coverage Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            AGS Home Safety Bihar Network & Geographic Map
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            बिहार के सभी 38 जिलों में फैले हमारे इंस्टॉलेशन और टेक्निकल हब। 
            नीचे दिए गए नक्शे पर क्लिक करके अपने नजदीकी सर्विस सेंटर और डिलीवरी टाइम देखें।
          </p>
        </div>

        {/* Map Interactive Container */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Interactive Vector Map View (7 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between relative bg-slate-950/70 min-h-[420px]">
            
            {/* Map Top Status Bar */}
            <div className="flex items-center justify-between gap-2 z-10 flex-wrap mb-4">
              <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>38 Bihar Districts Active Now</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> State HQ
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Regional Hub
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span> Express Hub
                </span>
              </div>
            </div>

            {/* Simulated Bihar Vector Map SVG with interactive coordinate pins */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Subtle geographic grid lines */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Waterway / Ganga River Representation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 5,50 Q 25,48 45,54 T 75,56 T 95,58" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth="2.5" 
                  strokeDasharray="4 2"
                />
              </svg>

              {/* Bihar State Outline boundary decorative */}
              <div className="absolute inset-4 rounded-3xl border-2 border-slate-700/60 pointer-events-none flex items-center justify-center">
                <span className="text-slate-800 font-black text-6xl tracking-widest uppercase select-none opacity-30">
                  BIHAR
                </span>
              </div>

              {/* Map Pins */}
              {MAP_HUBS.map((hub) => {
                const isSelected = activeHub.id === hub.id;

                return (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => {
                      setActiveHub(hub);
                      const matched = districts.find(d => d.id === hub.id);
                      if (matched) onSelectDistrict(matched);
                    }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform hover:scale-125 z-20"
                    style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                    title={`${hub.name}: ${hub.address}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="animate-ping absolute h-8 w-8 rounded-full bg-emerald-400 opacity-60"></span>
                      )}
                      
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-xl border-2 transition-all ${
                        isSelected
                          ? 'bg-emerald-500 border-white text-slate-950 scale-110 shadow-emerald-500/50'
                          : hub.hubType === 'Headquarters'
                          ? 'bg-amber-500 border-slate-900 text-slate-950'
                          : 'bg-slate-800 border-emerald-400 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                      }`}>
                        <MapPin className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Pin Label */}
                    <span className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black px-2 py-0.5 rounded-md shadow-md pointer-events-none transition-all ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 font-black'
                        : 'bg-slate-900/90 text-slate-300 border border-slate-700 group-hover:bg-slate-800 group-hover:text-white'
                    }`}>
                      {hub.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom note */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span>Click any city pin to view live service hub & coordinates</span>
              </span>
              <span className="text-emerald-400 font-bold hidden sm:inline">
                GPS Grounding: Patna HQ 800001
              </span>
            </div>

          </div>

          {/* Right: Selected Hub Details & Directions (5 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              {/* Hub Title & Status */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                    activeHub.hubType === 'Headquarters'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {activeHub.hubType}
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {activeHub.turnaround}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white">{activeHub.name}</h3>
                <p className="text-xs font-semibold text-emerald-400">{activeHub.hindiName}</p>
              </div>

              {/* Address Card */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed font-medium">
                    {activeHub.address}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Coordinates:</span>
                  <span className="font-mono text-emerald-400">{activeHub.latLng}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified Installations:</span>
                  <span className="font-bold text-white">{activeHub.installations}+ Homes</span>
                </div>
              </div>

              {/* Direct Leadership Guarantee */}
              <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Personal Supervision Guarantee
                </p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Founder <strong>Aashish Kumar</strong> guarantees same-day or 24-hour on-site free measurement with authentic SS 316 wire samples.
                </p>
              </div>

            </div>

            {/* Action Buttons for this Hub */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              
              <button
                type="button"
                onClick={() => handleWhatsAppHub(activeHub)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp {activeHub.name.split(' ')[0]} Team</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(undefined, activeHub.name.split(' ')[0])}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                >
                  Book Free Visit
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenGoogleMaps(activeHub)}
                  className="bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
