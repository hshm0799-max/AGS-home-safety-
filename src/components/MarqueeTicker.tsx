import React from 'react';
import { Sparkles, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const alerts = [
    { city: 'Patna (Bailey Rd)', service: 'SS 316 Invisible Grill', time: '12m ago', status: 'Completed' },
    { city: 'Muzaffarpur (Mithanpura)', service: 'Pull & Dry Ceiling Hanger', time: '28m ago', status: 'Installed' },
    { city: 'Gaya (AP Colony)', service: 'Garware Pigeon Net + Spikes', time: '45m ago', status: 'Completed' },
    { city: 'Bhagalpur (Tilkamanjhi)', service: 'Balcony Child Safety Net', time: '1h ago', status: 'Installed' },
    { city: 'Darbhanga (Laheriasarai)', service: 'SS 316 Balcony Grill', time: '1h ago', status: 'Completed' },
    { city: 'Begusarai (IOCL Township)', service: '6-Pipe Ceiling Dryer', time: '2h ago', status: 'Installed' },
    { city: 'Hajipur (Paswan Chowk)', service: 'Duct Area Bird Netting', time: '2h ago', status: 'Completed' },
    { city: 'Arrah (Katira)', service: 'Invisible Grill 3 Balconies', time: '3h ago', status: 'Completed' },
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 text-slate-300 py-2.5 overflow-hidden relative select-none">
      <div className="flex items-center gap-3 w-full">
        {/* Static Badge on Left */}
        <div className="hidden sm:flex items-center gap-1.5 bg-emerald-600 text-white text-[11px] font-black px-3 py-1 rounded-r-full shadow-md shrink-0 z-10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span>LIVE BIHAR UPDATES:</span>
        </div>

        {/* Marquee Animation */}
        <div className="flex overflow-hidden whitespace-nowrap mask-fade">
          <div className="flex items-center gap-8 animate-marquee text-xs font-medium">
            {alerts.concat(alerts).map((alert, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="font-bold text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {alert.city}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-300 font-semibold">{alert.service}</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold border border-emerald-500/30">
                  {alert.status}
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {alert.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
