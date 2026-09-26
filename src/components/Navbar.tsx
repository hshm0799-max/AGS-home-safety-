import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  Award,
  ChevronDown
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

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I want an inquiry/free site visit for AGS Invisible Safety Grills ${
        selectedDistrict ? `in ${selectedDistrict.name}, Bihar` : 'in Bihar'
      }. Please share catalog & price details.`
    );
    window.open(`https://wa.me/${rawPrimaryPhone}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Brand Identity (Clean, Single Row like Boss Invisible Safety Grills) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-slate-900 to-slate-800 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                  AGS <span className="text-amber-600">Invisible Safety Grills</span>
                </span>
              </div>
              <p className="hidden sm:block text-[11px] text-slate-500 font-medium">
                ISO Certified • SS 316 Marine Grade • Serving all 38 Districts of Bihar
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#products-3d" className="hover:text-amber-600 transition-colors flex items-center gap-1 font-bold text-slate-900">
              <span>3D Models</span>
              <span className="bg-amber-100 text-amber-900 text-[10px] px-1.5 py-0.5 rounded-full font-bold">3D</span>
            </a>
            <a href="#calculator" className="hover:text-amber-600 transition-colors">Calculator</a>
            <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-amber-600 transition-colors flex items-center gap-1">
              <span>Reviews</span>
              <span className="text-amber-500 font-bold">★ 4.9</span>
            </a>
            <a href="#districts" className="hover:text-amber-600 transition-colors">38 Districts</a>
            <a href="#faqs" className="hover:text-amber-600 transition-colors">FAQs</a>

            {/* District Quick Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDistrictDropdownOpen(!districtDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedDistrict ? selectedDistrict.name : 'Bihar'}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {districtDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50">
                  <div className="p-2 border-b border-slate-100 text-xs font-bold text-slate-500">
                    Select Your Bihar District
                  </div>
                  {districts.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => {
                        onSelectDistrict(d);
                        setDistrictDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xl flex items-center justify-between transition-colors ${
                        selectedDistrict?.id === d.id
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <span>{d.name} ({d.hindiName})</span>
                      <span className="text-[10px] text-slate-400 font-semibold">{d.deliveryTime.includes('Same') ? '⚡ Today' : '24h'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Call Button (Desktop) */}
            <a
              href={`tel:+${rawPrimaryPhone}`}
              className="hidden md:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-700 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{primaryPhone}</span>
            </a>

            {/* WhatsApp Button */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            {/* Mobile Hamburger Toggle (Clean icon like Boss Invisible Grill) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 border border-slate-300 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          
          {/* District selector on mobile */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Serving: <strong className="text-slate-900">{selectedDistrict?.name || 'All Bihar'}</strong>
            </span>
            <select
              value={selectedDistrict?.id || ''}
              onChange={(e) => {
                const found = districts.find(d => d.id === e.target.value);
                if (found) onSelectDistrict(found);
              }}
              className="bg-white border border-slate-300 rounded-lg text-xs font-bold text-amber-600 p-1.5 focus:outline-none"
            >
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.deliveryTime.includes('Same') ? '⚡ Same-Day' : '24h'})
                </option>
              ))}
            </select>
          </div>

          <nav className="flex flex-col gap-2 pt-2 text-sm font-semibold text-slate-800">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Our Safety Services
            </a>
            <a 
              href="#products-3d" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 font-bold text-amber-600 flex items-center justify-between"
            >
              <span>3D Models & Specs</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">16 Models</span>
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Instant Cost Calculator
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Actual Installations Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Customer Reviews (4.9★)
            </a>
            <a 
              href="#districts" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Bihar 38 Districts Service Network
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href={`tel:+${rawPrimaryPhone}`}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black py-3 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call {primaryPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Free Site Visit');
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3 rounded-xl text-sm"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Book Free On-Site Inspection</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
