import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Award, 
  Clock, 
  Zap, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ServiceItem, DistrictInfo } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  selectedDistrict: DistrictInfo | null;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  selectedDistrict,
  onOpenBooking,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const rawPhone = '918873232409';

  const handleWhatsAppQuote = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I want an inquiry/rate for ${service.title} in ${
        selectedDistrict ? selectedDistrict.name : 'Bihar'
      }. Please share catalog & installation schedule.`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Premium Safety Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Core Services Across All 38 Districts of Bihar
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            हाई क्वालिटी मटेरियल • 10-15 वर्ष वारंटी • कुशल कारीगर • उचित मूल्य
          </p>
          {selectedDistrict && (
            <p className="text-xs font-semibold text-emerald-700 mt-1">
              Active Installation Support available in {selectedDistrict.name}, Bihar ({selectedDistrict.deliveryTime})
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                    
                    {/* Badge */}
                    {service.badge && (
                      <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        {service.badge}
                      </div>
                    )}

                    {/* Warranty Tag */}
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-400/30">
                      {service.warranty.split(' ')[0]} Yrs Warranty
                    </div>

                    {/* Price Banner at Bottom of Photo */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[11px] text-slate-300 uppercase block font-semibold">Starting From</span>
                        <span className="text-lg font-black text-emerald-400">{service.startingPrice}</span>
                        <span className="text-xs text-slate-300 ml-1">{service.priceUnit}</span>
                      </div>
                      <span className="text-[10px] bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        Free Inspection
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                        {service.hindiTitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-1.5 pt-1">
                      {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Technical Specs */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-300">
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {service.fullDesc}
                        </p>
                        
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-[11px]">
                          <p className="font-bold text-slate-900 mb-1">Technical Specifications:</p>
                          {service.specifications.map((spec, i) => (
                            <div key={i} className="flex justify-between border-b border-slate-200/50 pb-1">
                              <span className="text-slate-500">{spec.label}:</span>
                              <span className="font-semibold text-slate-800">{spec.value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900">
                          <strong>Guarantee:</strong> {service.warranty} with written invoice and warranty card across Bihar.
                        </div>
                      </div>
                    )}

                    {/* Toggle Specs Button */}
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Specifications' : 'View Full Specifications & Specs'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.title)}
                    className="flex-1 bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors text-center"
                  >
                    Free Site Visit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleWhatsAppQuote(service)}
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors"
                    title="WhatsApp Quote"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
