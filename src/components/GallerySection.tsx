import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Maximize2, 
  X, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos (सभी)' },
    { id: 'invisible-grill', label: 'SS 316 Invisible Grills' },
    { id: 'cloth-hanger', label: 'Ceiling Cloth Hangers' },
    { id: 'pigeon-net', label: 'Bird & Pigeon Nets' },
    { id: 'child-safety', label: 'Balcony Child Nets' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <Camera className="w-3.5 h-3.5" /> Real Site Installations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Work Gallery Across Bihar
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            बिहार के विभिन्न शहरों में हमारे द्वारा सफलतापूर्वक लगाए गए इनविजिबल ग्रिल, बर्ड नेट्स और सीलिंग हैंगर्स के असली फोटो।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div 
                className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setSelectedPhoto(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{item.district}</span>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {item.tag}
                </div>

                {/* Zoom button on hover */}
                <button
                  type="button"
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Enlarge Photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {item.specs}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-bold">100% Rust-Proof</span>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(item.categoryLabel)}
                    className="text-xs text-blue-700 hover:text-blue-800 font-bold underline"
                  >
                    Request Similar Setup →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative text-white animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {selectedPhoto.tag} • Installed in {selectedPhoto.district}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{selectedPhoto.specs}</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const service = selectedPhoto.categoryLabel;
                  setSelectedPhoto(null);
                  onOpenBooking(service);
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all shrink-0"
              >
                Book This Installation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
