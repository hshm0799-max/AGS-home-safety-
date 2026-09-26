import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DistrictInfo } from '../types';

interface FooterProps {
  districts: DistrictInfo[];
  onSelectDistrict: (district: DistrictInfo) => void;
  onOpenPolicy: (tab: 'terms' | 'privacy' | 'warranty' | 'refund') => void;
  onOpenBooking: (serviceName?: string, districtName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  districts,
  onSelectDistrict,
  onOpenPolicy,
  onOpenBooking,
}) => {
  const primaryPhone = '+91 88732 32409';
  const rawPrimary = '918873232409';
  const secondaryPhone = '+91 98765 43210';
  const rawSecondary = '919876543210';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Owner info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-blue-700 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  AGS <span className="text-blue-400">HOME SAFETY</span>
                </span>
                <p className="text-[11px] text-emerald-400 font-semibold">
                  Founder & Director: Aashish Kumar
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              AGS Home Safety is Bihar's premier provider of SS 316 Marine Grade Invisible Grills, Garware Anti-Bird Pigeon Nets, Pull & Dry Ceiling Cloth Hangers, and Balcony Child Safety Netting. Committed to zero compromise on family security.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:+${rawPrimary}`} className="font-bold text-white hover:text-emerald-400">
                  {primaryPhone}
                </a>
                <span className="text-slate-500">/</span>
                <a href={`tel:+${rawSecondary}`} className="font-bold text-sky-400 hover:text-white">
                  {secondaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${rawPrimary}?text=${encodeURIComponent('Hello Aashish Kumar ji, I want an inquiry for AGS Home Safety in Bihar.')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp: +91 88732 32409 (Instant Chat)
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Head Office: Bailey Road, Near Saguna More & Danapur, Patna, Bihar - 800001
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400">
                  Working Hours: 7:00 AM – 9:00 PM (Monday to Sunday)
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Safety Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  SS 316 Balcony Invisible Grills
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Pull & Dry Ceiling Cloth Hangers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Anti-Bird & Pigeon Safety Nets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Stainless Steel Bird Spikes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Balcony Children & Pet Protection Nets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Duct Area & Building Shaft Nets
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  Online Square Feet Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality Standards & Guarantee */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quality Assurance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% SS 316 Marine Grade</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>10-15 Yrs Written Warranty</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Garware High UV Stability</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero View Obstruction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Free Site Measurement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Same Day Service in Patna</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Company Policies
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => onOpenPolicy('warranty')}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-slate-600" />
                10-Year Warranty & Guarantee Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('terms')}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-slate-600" />
                Terms & Conditions of Service
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('privacy')}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-slate-600" />
                Privacy & Data Security Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('refund')}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left"
              >
                <ChevronRight className="w-3 h-3 text-slate-600" />
                Refund & Workmanship Policy
              </button>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
              >
                Request Free Site Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bihar 38 Districts SEO Keywords Matrix */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                Bihar 38 Districts Local SEO Service Directory (Near Me)
              </h4>
            </div>
            <span className="text-[11px] text-slate-400">
              Click any district to view local team availability & rate details
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {districts.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  onSelectDistrict(d);
                  onOpenBooking(undefined, d.name);
                }}
                className="text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 px-2.5 py-1 rounded-md transition-colors"
                title={`Invisible Grill & Safety Net installation in ${d.name}, Bihar`}
              >
                Invisible Grill in {d.name} ({d.hindiName})
              </button>
            ))}
          </div>

          {/* Additional SEO keywords paragraph */}
          <p className="text-[11px] text-slate-500 leading-relaxed pt-2">
            <strong>Popular Searches in Bihar:</strong> Invisible Grill price in Patna, Balcony Safety Net Muzaffarpur, Pigeon Net near me Gaya, Ceiling Cloth Drying Hanger Darbhanga, SS 316 Wire Rope Bhagalpur, Bird Spikes Begusarai, Child Safety Net Arrah, Duct area safety net Bihar Sharif, Garware Net dealer Hajipur, Invisible grill fabricator Purnia, Pull and dry clothes hanger Sasaram, Balcony net installation Motihari, Bettiah safety nets, Siwan pigeon proofing, Buxar invisible grill, Nawada bird net, Aurangabad safety netting.
          </p>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>
            © {new Date().getFullYear()} <strong>AGS Home Safety</strong>. All Rights Reserved. Managed & Directed by <strong>Aashish Kumar</strong>.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Call: <strong className="text-slate-300">{primaryPhone}</strong></span>
            <span>•</span>
            <span>WhatsApp: <strong className="text-emerald-400">{primaryPhone}</strong></span>
            <span>•</span>
            <span>Bihar, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
