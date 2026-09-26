import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Clock, 
  Sparkles,
  UserCheck
} from 'lucide-react';

export const OwnerBio: React.FC = () => {
  const primaryPhone = '+91 88732 32409';
  const rawPrimary = '918873232409';

  const handleOwnerWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaste Aashish Kumar ji, I would like to consult with you directly regarding invisible grill / safety netting for my home in Bihar.'
    );
    window.open(`https://wa.me/${rawPrimary}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Founder Avatar / Badge */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative inline-block">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-emerald-500 to-blue-600 p-1 shadow-2xl mx-auto">
                  <div className="w-full h-full rounded-[22px] bg-slate-900 flex flex-col items-center justify-center text-center p-4">
                    <UserCheck className="w-12 h-12 text-emerald-400 mb-1" />
                    <span className="text-xs font-bold text-slate-300">AGS Home Safety</span>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Director</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 font-black text-[11px] px-2.5 py-1 rounded-full border-2 border-slate-900 shadow-md">
                  Verified
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Aashish Kumar</h3>
                <p className="text-emerald-400 text-sm font-bold">
                  Founder & Managing Director
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  10+ Years in Child & Residential Safety Engineering in Bihar
                </p>
              </div>
            </div>

            {/* Right: Founder Message & Direct Contact */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" /> Founder's Personal Commitment
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium italic border-l-4 border-emerald-500 pl-4">
                "हमारा लक्ष्य बिहार के हर परिवार को सुरक्षित और आधुनिक घर प्रदान करना है। न कोई छुपा हुआ शुल्क, न घटिया 202 ग्रेड का तार। हम केवल ओरिजिनल SS 316 मरीन ग्रेड और गारवारे यूवी जाली का उपयोग करते हैं। किसी भी शिकायत पर मैं व्यक्तिगत रूप से समाधान सुनिश्चित करता हूँ।"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personal inspection supervision across Patna & nearby hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Written 10 to 15 Years Replacement Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp escalation to the owner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>GST Invoicing and genuine mill test certificates</span>
                </div>
              </div>

              {/* Founder Contact Action Bar */}
              <div className="pt-3 border-t border-slate-700/80 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleOwnerWhatsApp}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Aashish Kumar on WhatsApp</span>
                </button>

                <a
                  href={`tel:+${rawPrimary}`}
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-600 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {primaryPhone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
