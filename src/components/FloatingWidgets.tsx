import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
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

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I want a Free Quote & Site Inspection for AGS Invisible Grills & Home Safety in ${
        selectedDistrict ? selectedDistrict.name : 'Bihar'
      }. Please share rate per sq ft.`
    );
    window.open(`https://wa.me/${rawPrimary}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Buttons (Bottom Right, matching Boss Invisible Grill screenshot) */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">
        {/* Call Button (Warm Amber/Orange Circular Button) */}
        <a
          href={`tel:+${rawPrimary}`}
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all border border-amber-300/30"
          title={`Call Aashish Kumar ${primaryPhone}`}
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 fill-white" />
        </a>

        {/* WhatsApp Button (Rich Green Circular Button with Pulse Ring) */}
        <div className="relative">
          <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-60"></span>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all border border-emerald-300/30 cursor-pointer"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        </div>
      </div>
    </>
  );
};
