import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Award,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { DistrictInfo } from '../types';

interface NavbarProps {
  onOpenBooking: (service?: string, district?: string) => void;
  onOpenPolicy: (tab: 'terms' | 'privacy' | 'warranty' | 'refund') => void;
  selectedDistrict: DistrictInfo | null;
  onSelectDistrict: (district: DistrictInfo) => void;
  districts: DistrictInfo[];
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenPolicy,
  selectedDistrict,
  onSelectDistrict,
  districts,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);

  const primaryPhone = '+91 88732 32409';
  const rawPrimaryPhone = '918873232409';
  const secondaryPhone = '+91 98765 43210';
  const rawSecondaryPhone = '919876543210';

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I want an inquiry/free site visit for AGS Home Safety ${
        selectedDistrict ? `in ${selectedDistrict.name}, Bihar` : 'in Bihar'
      }. Please share catalog & price details.`
    );
    window.open(`https://wa.me/${rawPrimaryPhone}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-blue-900 to-slate-900 text-white text-xs sm:text-sm py-1.5 px-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full text-[11px] border border-emerald-400/30">
              <Sparkles className="w-3 h-3" /> Bihar's #1 Safety Solution
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="text-slate-200">
              Founder & Director: <strong className="text-white font-semibold">Aashish Kumar</strong>
            </span>
            <span className="hidden lg:inline text-slate-300">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-200">
              <Clock className="w-3 h-3 text-emerald-400" /> Same-Day Free Site Visit in Patna & Hajipur
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <span className="text-slate-300 hidden sm:inline">24x7 Customer Helpline:</span>
            <a 
              href={`tel:+${rawPrimaryPhone}`} 
              className="inline-flex items-center gap-1 font-bold text-emerald-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" /> {primaryPhone}
            </a>
            <span className="text-slate-400">/</span>
            <a 
              href={`tel:+${rawSecondaryPhone}`} 
              className="inline-flex items-center gap-1 font-bold text-sky-300 hover:text-white transition-colors"
            >
              {secondaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  AGS <span className="text-blue-700">HOME SAFETY</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-sm border border-emerald-200 uppercase">
                  ISO 9001
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Invisible Grills • Pigeon Nets • Ceiling Dryers • <span className="text-emerald-700 font-semibold">38 Bihar Districts</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-emerald-700 transition-colors">Services</a>
            <a href="#simulator3d" className="hover:text-emerald-700 transition-colors flex items-center gap-1 text-emerald-800 font-bold">
              3D Simulator <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.2 rounded-full font-bold">Live 3D</span>
            </a>
            <a href="#videos" className="hover:text-emerald-700 transition-colors flex items-center gap-1 text-red-700 font-bold">
              Live Videos <span className="bg-red-100 text-red-800 text-[10px] px-1.5 py-0.2 rounded-full font-bold">▶ Test</span>
            </a>
            <a href="#calculator" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              Calculator
            </a>
            <a href="#gallery" className="hover:text-emerald-700 transition-colors">Gallery</a>
            <a href="#map-coverage" className="hover:text-emerald-700 transition-colors flex items-center gap-1 font-bold text-sky-800">
              Map 🗺️
            </a>
            <a href="#reviews" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              Reviews <span className="text-amber-500 font-bold">★ 4.9</span>
            </a>
            <a href="#districts" className="hover:text-emerald-700 transition-colors">38 Districts</a>
            <a href="#faqs" className="hover:text-emerald-700 transition-colors">FAQs</a>

            {/* District Quick Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDistrictDropdownOpen(!districtDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-300 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedDistrict ? `${selectedDistrict.name} (Bihar)` : 'Select District'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {districtDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 max-h-96 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 overflow-y-auto z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Your Bihar District (38 Districts)
                  </div>
                  {districts.map((dist) => (
                    <button
                      key={dist.id}
                      type="button"
                      onClick={() => {
                        onSelectDistrict(dist);
                        setDistrictDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-emerald-50 transition-colors ${
                        selectedDistrict?.id === dist.id ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-slate-700'
                      }`}
                    >
                      <span>
                        {dist.name} <span className="text-slate-400 font-normal">({dist.hindiName})</span>
                      </span>
                      <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                        {dist.deliveryTime.includes('Same') ? '⚡ Fast' : '24h'}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Chat</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Free Site Inspection</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="p-2 rounded-lg bg-emerald-100 text-emerald-800"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-700" />
            </button>
            <a
              href={`tel:+${rawPrimaryPhone}`}
              className="p-2 rounded-lg bg-blue-100 text-blue-800"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 text-blue-700" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top">
          {/* Owner Details Card */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Founder & Director</p>
              <p className="text-sm font-bold text-slate-900">Aashish Kumar</p>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                All 38 Bihar Districts
              </span>
            </div>
          </div>

          {/* District Selector for Mobile */}
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">
              Select Your District in Bihar:
            </label>
            <select
              value={selectedDistrict?.id || ''}
              onChange={(e) => {
                const found = districts.find(d => d.id === e.target.value);
                if (found) onSelectDistrict(found);
              }}
              className="w-full bg-slate-100 border border-slate-300 text-slate-800 rounded-lg p-2.5 text-sm font-semibold"
            >
              {districts.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.hindiName}) - {d.deliveryTime}
                </option>
              ))}
            </select>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2 font-medium text-slate-700 text-sm">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Services (Invisible Grills, Bird Nets, Ceiling Hangers)
            </a>
            <a 
              href="#simulator3d" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-emerald-50 text-emerald-800 font-bold flex items-center justify-between"
            >
              <span>Live 3D Invisible Grill Simulator</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Try 3D</span>
            </a>
            <a 
              href="#videos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-red-50 text-red-700 font-bold flex items-center justify-between"
            >
              <span>Live Video Demonstrations (800kg Test)</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">Watch</span>
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-emerald-700 font-bold flex items-center justify-between"
            >
              <span>Instant Cost Calculator</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Free Estimate</span>
            </a>
            <a 
              href="#map-coverage" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sky-50 text-sky-800 font-bold flex items-center justify-between"
            >
              <span>Bihar Network Map 🗺️ (38 Districts)</span>
              <span className="text-xs bg-sky-100 text-sky-800 px-2 py-0.5 rounded">View Map</span>
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Work Gallery (Real Site Photos)
            </a>
            <a 
              href="#districts" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Bihar 38 Districts Service Network
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Google Reviews (4.9 / 5 Stars)
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Frequently Asked Questions
            </a>
          </div>

          {/* Policy Links */}
          <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-2 text-xs text-slate-500">
            <button 
              type="button" 
              onClick={() => { onOpenPolicy('warranty'); setMobileMenuOpen(false); }}
              className="underline"
            >
              10-Yr Warranty
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => { onOpenPolicy('terms'); setMobileMenuOpen(false); }}
              className="underline"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => { onOpenPolicy('privacy'); setMobileMenuOpen(false); }}
              className="underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => { onOpenPolicy('refund'); setMobileMenuOpen(false); }}
              className="underline"
            >
              Refund Policy
            </button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-xl shadow-md text-center"
            >
              Free Inspection
            </button>
            <button
              type="button"
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl shadow-md text-center flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
