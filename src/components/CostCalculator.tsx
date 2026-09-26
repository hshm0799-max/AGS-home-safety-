import React, { useState } from 'react';
import { 
  Calculator, 
  MessageCircle, 
  Check, 
  Sparkles, 
  Info, 
  ArrowRight, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { DistrictInfo } from '../types';

interface CostCalculatorProps {
  selectedDistrict: DistrictInfo | null;
  onOpenBooking: (serviceName?: string) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  hindiName: string;
  rate: number;
  unit: string;
  isAreaBased: boolean;
  minVal: number;
  defaultLength: number;
  defaultHeight: number;
  description: string;
  warranty: string;
}

const SERVICES_OPTIONS: ServiceOption[] = [
  {
    id: 'invisible-grill',
    name: 'SS 316 Invisible Grill',
    hindiName: 'एसएस 316 इनविजिबल ग्रिल',
    rate: 130,
    unit: 'sq. ft.',
    isAreaBased: true,
    minVal: 20,
    defaultLength: 12,
    defaultHeight: 5,
    description: 'Marine Grade 316 cables with DuPont clear coating & heavy aluminium tracks',
    warranty: '10 - 15 Years Warranty',
  },
  {
    id: 'pigeon-net',
    name: 'Pigeon / Bird Safety Net',
    hindiName: 'कबूतर सेफ्टी नेट (गारवारे)',
    rate: 18,
    unit: 'sq. ft.',
    isAreaBased: true,
    minVal: 25,
    defaultLength: 12,
    defaultHeight: 6,
    description: 'Original Garware UV stabilized virgin monofilament HDPE netting',
    warranty: '5 - 8 Years Warranty',
  },
  {
    id: 'child-safety-net',
    name: 'Balcony Children Safety Net',
    hindiName: 'बालकनी चाइल्ड सेफ्टी नेट',
    rate: 22,
    unit: 'sq. ft.',
    isAreaBased: true,
    minVal: 25,
    defaultLength: 14,
    defaultHeight: 5,
    description: 'High tensile 2.5mm braided cords with 150kg load rating',
    warranty: '5 - 10 Years Warranty',
  },
  {
    id: 'ceiling-hanger',
    name: 'Ceiling Cloth Hanger (6 Pipes)',
    hindiName: 'सीलिंग क्लॉथ हैंगर (पुल एंड ड्राई)',
    rate: 1599,
    unit: 'per complete set',
    isAreaBased: false,
    minVal: 1,
    defaultLength: 1,
    defaultHeight: 6, // 6 pipes
    description: '6 individual rust-proof stainless steel pipes with brass pulley wheels',
    warranty: '5 Years Warranty',
  },
  {
    id: 'bird-spikes',
    name: 'SS Anti-Bird Spikes',
    hindiName: 'स्टेनलेस स्टील बर्ड स्पाइक्स',
    rate: 110,
    unit: 'running ft.',
    isAreaBased: false,
    minVal: 5,
    defaultLength: 10, // running feet
    defaultHeight: 1,
    description: 'Blunt safety spikes on UV protected polycarbonate base for ACs & ledges',
    warranty: '7 Years Warranty',
  },
];

export const CostCalculator: React.FC<CostCalculatorProps> = ({
  selectedDistrict,
  onOpenBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('invisible-grill');
  const [length, setLength] = useState<number>(12);
  const [height, setHeight] = useState<number>(5);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedService = SERVICES_OPTIONS.find(s => s.id === selectedServiceId) || SERVICES_OPTIONS[0];

  // Calculations
  const areaSqFt = length * height;
  let estimatedTotal = 0;

  if (selectedService.id === 'ceiling-hanger') {
    estimatedTotal = selectedService.rate * quantity;
  } else if (selectedService.id === 'bird-spikes') {
    estimatedTotal = selectedService.rate * length;
  } else {
    estimatedTotal = areaSqFt * selectedService.rate;
  }

  const rawPhone = '918873232409';

  const handleWhatsAppQuote = () => {
    let details = '';
    if (selectedService.id === 'ceiling-hanger') {
      details = `${quantity} set(s) of Pull & Dry 6-Pipe Ceiling Cloth Hanger`;
    } else if (selectedService.id === 'bird-spikes') {
      details = `${length} running feet of SS Anti-Bird Spikes`;
    } else {
      details = `${length} ft (L) x ${height} ft (H) = ${areaSqFt} sq.ft of ${selectedService.name}`;
    }

    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I used your online cost calculator for AGS Home Safety.\n\n` +
      `• Service: ${selectedService.name}\n` +
      `• Dimensions/Qty: ${details}\n` +
      `• Estimated Price: ~₹${estimatedTotal.toLocaleString('en-IN')}\n` +
      `• Location: ${selectedDistrict ? selectedDistrict.name : 'Bihar'}\n\n` +
      `Please provide final quotation and schedule a free site measurement.`
    );

    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 bg-slate-100 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <Calculator className="w-3.5 h-3.5" /> Instant Estimate Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Calculate Your Home Safety & Netting Cost
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            पारदर्शी कीमतें • कोई छुपा हुआ चार्ज नहीं • फ्री साइट विजिट एवं मेज़रमेंट
          </p>
          {selectedDistrict && (
            <p className="text-xs font-semibold text-emerald-700 mt-1">
              Showing standard verified rates for {selectedDistrict.name}, Bihar
            </p>
          )}
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Service Select Pills */}
              <div>
                <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2.5">
                  1. Select Service / Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_OPTIONS.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => {
                        setSelectedServiceId(srv.id);
                        if (srv.id === 'ceiling-hanger') {
                          setQuantity(1);
                        } else if (srv.id === 'bird-spikes') {
                          setLength(10);
                        } else {
                          setLength(srv.defaultLength);
                          setHeight(srv.defaultHeight);
                        }
                      }}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedServiceId === srv.id
                          ? 'border-emerald-600 bg-emerald-50/70 text-slate-900 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">{srv.name}</span>
                        {selectedServiceId === srv.id && (
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{srv.hindiName}</p>
                      <p className="text-xs font-bold text-emerald-700 mt-1">
                        ₹{srv.rate} {srv.unit}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimension Inputs */}
              {selectedService.isAreaBased ? (
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider">
                    2. Enter Balcony / Window Dimensions (in Feet)
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Length Input */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-700">Length / Width (चौड़ाई)</span>
                        <span className="text-sm font-black text-emerald-700">{length} Feet</span>
                      </div>
                      <input
                        type="range"
                        min="4"
                        max="50"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>4 ft (Small Window)</span>
                        <span>25 ft</span>
                        <span>50 ft (Full Balcony)</span>
                      </div>
                    </div>

                    {/* Height Input */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-700">Height (ऊंचाई)</span>
                        <span className="text-sm font-black text-emerald-700">{height} Feet</span>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max="15"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>3 ft (Railing)</span>
                        <span>8 ft</span>
                        <span>15 ft (Ceiling-to-Floor)</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Preview Box */}
                  <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <span>Calculated Area:</span>
                      <strong className="text-emerald-400 text-sm font-black">
                        {length} ft × {height} ft = {areaSqFt} Sq. Ft.
                      </strong>
                    </div>
                    <span className="text-slate-400 text-[11px] hidden sm:inline">
                      Includes perimeter wire tensioning
                    </span>
                  </div>
                </div>
              ) : selectedService.id === 'ceiling-hanger' ? (
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider">
                    2. Select Number of Ceiling Hanger Sets
                  </label>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-slate-900">Pull & Dry 6-Pipe Complete Unit</p>
                      <p className="text-xs text-slate-500">Includes 6 Stainless Steel rods + nylon ropes + pulleys</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-black text-lg text-emerald-700 w-6 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-black uppercase text-slate-500 tracking-wider">
                    2. Total Running Feet of Bird Spikes Needed
                  </label>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700">Ledge / AC Length</span>
                      <span className="text-sm font-black text-emerald-700">{length} Running Feet</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="60"
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Inclusions Checkmarks */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 mb-2">What is included in this estimate?</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free Home Site Inspection</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free SS Anchor Fasteners</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Professional Skilled Installation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Written {selectedService.warranty}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Results Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Estimated Cost Breakdown
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{selectedService.name}</h3>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Transparent
                  </span>
                </div>

                {/* Specs Pill List */}
                <div className="space-y-2 text-xs text-slate-300 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rate:</span>
                    <span className="font-semibold text-white">₹{selectedService.rate} {selectedService.unit}</span>
                  </div>
                  {selectedService.isAreaBased ? (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Area:</span>
                      <span className="font-semibold text-emerald-400">{areaSqFt} Sq. Ft.</span>
                    </div>
                  ) : selectedService.id === 'ceiling-hanger' ? (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Quantity:</span>
                      <span className="font-semibold text-emerald-400">{quantity} Complete Set(s)</span>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Length:</span>
                      <span className="font-semibold text-emerald-400">{length} Running Feet</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-400">Measurement & Visit:</span>
                    <span className="font-bold text-emerald-400">FREE (₹0)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Warranty:</span>
                    <span className="font-semibold text-amber-300">{selectedService.warranty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Service Area:</span>
                    <span className="font-semibold text-white">{selectedDistrict?.name || 'All Bihar Districts'}</span>
                  </div>
                </div>

                {/* Big Price Display */}
                <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 p-5 rounded-2xl border border-emerald-500/30 text-center">
                  <p className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    Approximate Project Cost
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-white mt-1">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-400 font-normal ml-1.5">*approx</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Final price confirmed on-site after precision laser measurement.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6">
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Get Exact Quote on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking(selectedService.name)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-4 rounded-xl border border-slate-700 transition-all text-xs"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Schedule Free On-Site Inspection</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
