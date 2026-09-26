import React, { useState } from 'react';
import { 
  Play, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Eye, 
  MessageCircle, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Award,
  CheckCircle2
} from 'lucide-react';

import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import technicianImg from '../assets/images/technician_installing_grill_1790434273306.jpg';
import sunsetBalconyImg from '../assets/images/balcony_sunset_view_1790434251681.jpg';
import clothHangerImg from '../assets/images/cloth_hanger_balcony_1790433378816.jpg';
import pigeonNetImg from '../assets/images/pigeon_safety_net_1790433398792.jpg';

interface VideoItem {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  duration: string;
  views: string;
  thumbnail: string;
  category: string;
  keyTakeaway: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'SS 316 Wire Cable 800 KG Breaking Load Tension Test',
    hindiTitle: '800 किलो लोड टेस्ट — क्या इनविजिबल ग्रिल का तार टूटता है?',
    description: 'Watch the high-precision hydraulic tension test on our AISI 316 Marine Grade stainless steel cables with DuPont nylon coating. Tested beyond 800 kilograms of sudden impact load.',
    duration: '1:45',
    views: '18.4K Views in Bihar',
    thumbnail: heroGrillImg,
    category: 'Load Strength Test',
    keyTakeaway: 'Zero cable snap up to 840 kg tension load.',
  },
  {
    id: 'vid-2',
    title: 'Emergency Fire Rescue: Wire Cutting Test (Under 3 Seconds)',
    hindiTitle: 'आपातकालीन आग में खिड़की कैसे काटी जाती है?',
    description: 'In an apartment fire hazard, municipal fire rescue personnel must easily sever security barriers. Watch our test with standard bolt-cutters cutting cables in 2.8 seconds.',
    duration: '1:10',
    views: '14.2K Views',
    thumbnail: sunsetBalconyImg,
    category: 'Fire Safety Standard',
    keyTakeaway: '100% compliant with high-rise apartment fire evacuation norms.',
  },
  {
    id: 'vid-3',
    title: 'Pull & Dry Ceiling Cloth Hanger: Smooth Pulley Operation',
    hindiTitle: 'सीलिंग क्लॉथ हैंगर — 6 पाइप्स पुल एंड ड्राई लाइव डेमो',
    description: 'Full demonstration of how each stainless steel rod lowers effortlessly to chest level and hoists to the ceiling with high-grade nylon cords and brass pulleys.',
    duration: '2:15',
    views: '22.8K Views',
    thumbnail: clothHangerImg,
    category: 'Home Utility Demo',
    keyTakeaway: 'Frees 100% balcony floor space and holds up to 42 kg damp laundry.',
  },
  {
    id: 'vid-4',
    title: 'Garware Virgin HDPE Pigeon Net Durability & Mesh Testing',
    hindiTitle: 'कबूतर जाली की मजबूती — गारवारे यूवी स्टेबलाइज्ड नेट',
    description: 'See why local cheap nylon nets rot in Bihar summer heat while original Garware monofilament HDPE netting remains indestructible and bird-safe for over 10 years.',
    duration: '1:30',
    views: '16.1K Views',
    thumbnail: pigeonNetImg,
    category: 'Bird Proofing',
    keyTakeaway: 'Pigeons, sparrows, and crows cannot pierce or chew through the weave.',
  },
  {
    id: 'vid-5',
    title: 'Live Balcony Installation Process by Aashish Kumar’s Team',
    hindiTitle: 'पटना में 12वें फ्लोर पर इनविजिबल ग्रिल इंस्टॉलेशन प्रोसेस',
    description: 'Follow our certified technicians installing an anodized track and laser-tensioned SS 316 wires on an apartment balcony in Patna without chipping tiles.',
    duration: '3:05',
    views: '29.7K Views',
    thumbnail: technicianImg,
    category: 'Step-by-Step Installation',
    keyTakeaway: 'Completed in just 3 hours with dust-free diamond drilling.',
  },
];

export const VideoDemosSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(35);

  const rawPhone = '918873232409';

  const handleWhatsAppVideo = (video: VideoItem) => {
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I watched your video "${video.title}" on the AGS website. I want an inquiry and free site inspection in Bihar.`
    );
    window.open(`https://wa.me/${rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="videos" className="py-16 sm:py-20 bg-slate-950 text-white scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 mb-3">
            <Play className="w-3.5 h-3.5 fill-red-400" /> Live Video Demonstrations
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            See the Quality in Action: Live Testing Videos
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            लाइव वीडियो टेस्ट: 800 किलो लोड टेस्ट, आपातकालीन वायर कटिंग, और सीलिंग क्लॉथ हैंगर का आसान संचालन।
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover:border-slate-700 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Video Thumbnail with Play Button Overlay */}
                <div
                  className="relative h-52 overflow-hidden bg-black cursor-pointer"
                  onClick={() => {
                    setActiveVideo(video);
                    setIsPlaying(true);
                    setProgress(15);
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-all border-2 border-white/40">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-md border border-slate-700 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-emerald-400 text-[10px] font-black px-2.5 py-1 rounded-full border border-slate-700 uppercase tracking-wider">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-slate-500" /> {video.views}
                    </span>
                    <span className="text-amber-400 font-semibold">100% Genuine Test</span>
                  </div>

                  <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">
                    {video.hindiTitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Key Takeaway */}
              <div className="p-5 pt-0">
                <div className="p-2.5 bg-slate-800/60 rounded-xl border border-slate-700/60 text-[11px] text-slate-300 flex items-start gap-1.5 mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Result:</strong> {video.keyTakeaway}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveVideo(video);
                      setIsPlaying(true);
                      setProgress(20);
                    }}
                    className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Video</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppVideo(video)}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors border border-slate-700"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative text-white animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded">
                  {activeVideo.category}
                </span>
                <h4 className="font-bold text-sm sm:text-base text-white mt-0.5 line-clamp-1">
                  {activeVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Simulated Stage */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover filter brightness-75"
              />

              {/* Animated HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-red-600 text-white font-black px-2 py-0.5 rounded flex items-center gap-1 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    TEST SIMULATION REC
                  </span>
                  <span className="text-slate-300 font-mono text-[11px]">
                    AGS LAB • PATNA, BIHAR
                  </span>
                </div>

                {/* Big Center Toggle Button */}
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 border-2 border-white/40"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>
                </div>

                {/* Bottom Controls Bar */}
                <div className="space-y-2">
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden cursor-pointer">
                    <div 
                      className="bg-red-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-3">
                      <span>0:42 / {activeVideo.duration}</span>
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-slate-400 hover:text-white"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <span className="text-emerald-400 font-bold text-[11px]">
                      Verified Test: {activeVideo.keyTakeaway}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Modal Description & CTA */}
            <div className="p-5 sm:p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {activeVideo.description}
                </p>
                <p className="text-xs text-amber-400 font-bold">
                  Owner Aashish Kumar guarantees 100% genuine AISI SS 316 marine cables with test certificates.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleWhatsAppVideo(activeVideo)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-xl transition-all flex items-center gap-2 shrink-0 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire About This Service</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
