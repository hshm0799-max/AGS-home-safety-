import React from 'react';
import { Phone, MessageCircle, Award, Sparkles } from 'lucide-react';
import { DistrictInfo } from '../types';

interface FloatingWidgetsProps {
  onOpenBooking: () => void;
  selectedDistrict: DistrictInfo | null;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  onOpenBooking,
  selectedDistrict,
}) => {
  const primaryPhone = '+91 88732 32409';
  const rawPrimary = '918873232409';
  const secondaryPhone = '+91 98765 43210';
  const rawSecondary = '919876543210';

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I would like to inquire about invisible grills / safety netting for my home ${
        selectedDistrict ? `in ${selectedDistrict.name}, Bihar` : 'in Bihar'
      }. Please share rate and site visit schedule.`
    );
    window.open(`https://wa.me/${rawPrimary}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        {/* Free Inspection Floating Pill */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="pointer-events-auto flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-xl border border-slate-700 hover:scale-105 transition-all group"
        >
          <Award className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Free Site Inspection</span>
        </button>

        {/* Call Hotline Floating Button */}
        <a
          href={`tel:+${rawPrimary}`}
          className="pointer-events-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all border-2 border-white/20"
          title={`Call ${primaryPhone}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Chat Floating Button with Live Pulse */}
        <div className="relative pointer-events-auto">
          <span className="animate-ping absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 opacity-75"></span>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all border-2 border-white/30"
            title="Chat with Aashish Kumar on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        </div>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:+${rawPrimary}`}
            className="flex items-center justify-center gap-1.5 bg-blue-600 active:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl shadow-xs"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>

          {/* WhatsApp button */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </button>

          {/* Free Inspection */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-1.5 bg-slate-900 active:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl shadow-xs"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Free Visit</span>
          </button>
        </div>
      </div>
    </>
  );
};
