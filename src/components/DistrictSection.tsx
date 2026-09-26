import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  Star,
  Sparkles,
  Phone
} from 'lucide-react';
import { DistrictInfo } from '../types';

interface DistrictSectionProps {
  districts: DistrictInfo[];
  selectedDistrict: DistrictInfo | null;
  onSelectDistrict: (district: DistrictInfo) => void;
  onOpenBooking: (serviceName?: string, districtName?: string) => void;
}

export const DistrictSection: React.FC<DistrictSectionProps> = ({
  districts,
  selectedDistrict,
  onSelectDistrict,
  onOpenBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const filteredDistricts = districts.filter(d => {
    const matchesSearch = 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.hindiName.includes(searchQuery) ||
      d.majorAreas.some(area => area.toLowerCase().includes(searchQuery.toLowerCase())) ||
      d.pincodes.some(pin => pin.includes(searchQuery));

    const matchesZone = selectedZone === 'All' || d.zone === selectedZone;

    return matchesSearch && matchesZone;
  });

  const zones = ['All', 'Central', 'North', 'South', 'East', 'West'];

  const rawPhone = '918873232409';

  const handleWhatsAppDistrict = (district: DistrictInfo) => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I need home safety netting / invisible grill installation in ${district.name} (${district.hindiName}), Bihar. Please share team availability and quotation.`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="districts" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 mb-3">
            <MapPin className="w-3.5 h-3.5" /> All 38 Districts of Bihar Covered
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Find AGS Home Safety Near Me in Bihar
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            बिहार के हर जिले, कस्बे और सोसाइटी में हमारा इंस्टॉलेशन नेटवर्क उपलब्ध है। 
            मुफ्त ऑन-साइट मेज़रमेंट और निरीक्षण।
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-800/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-700 max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by District name, Pincode or City (e.g. Patna, Muzaffarpur, Gaya, 800001)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-emerald-500 font-medium placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-700/60">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Filter By Zone in Bihar:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {zones.map((zone) => (
                <button
                  key={zone}
                  type="button"
                  onClick={() => setSelectedZone(zone)}
                  className={`text-xs px-3 py-1 rounded-lg font-bold transition-all ${
                    selectedZone === zone
                      ? 'bg-emerald-500 text-slate-950 shadow-sm'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Selected District Spotlight Banner */}
        {selectedDistrict && (
          <div className="mb-10 bg-gradient-to-r from-emerald-950 via-slate-800 to-slate-900 border-2 border-emerald-500/50 rounded-2xl p-5 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2 py-0.5 rounded">SELECTED</span>
                <h3 className="text-xl font-bold text-white">
                  {selectedDistrict.name} ({selectedDistrict.hindiName})
                </h3>
              </div>
              <p className="text-xs text-slate-300">
                Turnaround: <strong className="text-emerald-400">{selectedDistrict.deliveryTime}</strong> • {selectedDistrict.installations}+ completed installations in {selectedDistrict.name}.
              </p>
              <p className="text-xs text-slate-400">
                Key local hubs: {selectedDistrict.majorAreas.join(', ')}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking(undefined, selectedDistrict.name)}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
              >
                Book in {selectedDistrict.name}
              </button>
              <button
                type="button"
                onClick={() => handleWhatsAppDistrict(selectedDistrict)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold p-2.5 rounded-xl border border-slate-700"
                title="Chat with Aashish Kumar"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        )}

        {/* Districts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDistricts.map((district) => {
            const isSelected = selectedDistrict?.id === district.id;

            return (
              <div
                key={district.id}
                className={`rounded-2xl p-4 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <div>
                  {/* Top line with Zone and delivery badge */}
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="bg-slate-700/80 text-slate-300 px-2 py-0.5 rounded font-medium">
                      {district.zone} Bihar
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {district.deliveryTime.includes('Same') ? 'Same Day' : '24 Hours'}
                    </span>
                  </div>

                  {/* District Name */}
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-black text-white">{district.name}</h3>
                    <span className="text-xs text-slate-400 font-medium">{district.hindiName}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    Hubs: {district.majorAreas.slice(0, 3).join(', ')}...
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Installations:</span>
                    <span className="font-bold text-sky-400">{district.installations}+ Homes</span>
                  </div>

                  {/* Local review snippet */}
                  <div className="mt-2 bg-slate-900/60 p-2 rounded-lg border border-slate-700/40 text-[10px] text-slate-300 italic line-clamp-2">
                    "{district.localReview.text}"
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="grid grid-cols-2 gap-1.5 pt-3 mt-3 border-t border-slate-700/60">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectDistrict(district);
                      onOpenBooking(undefined, district.name);
                    }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] py-1.5 rounded-lg transition-colors text-center"
                  >
                    Book Visit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppDistrict(district)}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-[11px] py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 fill-slate-200" />
                    WhatsApp
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-800">
            <p className="text-base text-slate-300 font-semibold">No district found matching "{searchQuery}"</p>
            <p className="text-xs text-slate-500 mt-1">We serve all 38 districts of Bihar. Call Aashish Kumar directly at +91 88732 32409.</p>
          </div>
        )}

      </div>
    </section>
  );
};
