import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Award, 
  Zap, 
  Users, 
  Wrench, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Wire & Cable Grade',
      ags: 'AISI SS 316 Marine Grade (100% Rust-Proof & Acid-Resistant)',
      others: 'Cheap SS 202 or Galvanized Iron (Rusts within 6-12 months)',
    },
    {
      feature: 'Tensile Breaking Load',
      ags: 'Tested up to 800+ KG breaking tension per cable',
      others: 'Low tension (loose wires that sag easily under hand pressure)',
    },
    {
      feature: 'Netting Quality (Bird / Child)',
      ags: '100% Virgin Garware HDPE monofilament UV-stabilized mesh',
      others: 'Recycled nylon nets that become brittle & tear in summer sun',
    },
    {
      feature: 'Warranty & Written Proof',
      ags: '10 - 15 Years Official Written Warranty Card with Invoice',
      others: 'Verbal promises only, no customer support after payment',
    },
    {
      feature: 'Technician Training',
      ags: 'In-house trained safety technicians with dust-free drills',
      others: 'Local daily-wage laborers who crack balcony tiles',
    },
    {
      feature: 'Bihar Coverage & Turnaround',
      ags: 'Serving all 38 districts with same-day / 24h response',
      others: 'Limited to single local locality, slow service',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <Award className="w-3.5 h-3.5" /> Quality & Safety Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why AGS Home Safety is Bihar's #1 Choice
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            सस्ते और घटिया जाल से बचें — आपके परिवार और बच्चों की सुरक्षा में कोई समझौता नहीं।
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 font-bold text-xs sm:text-sm">
            <div className="col-span-4 sm:col-span-4 text-slate-300">Feature / Standard</div>
            <div className="col-span-4 sm:col-span-4 text-emerald-400 font-black flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>AGS Home Safety</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-rose-400">Local Uncertified Vendors</div>
          </div>

          <div className="divide-y divide-slate-200">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                }`}
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-800 pr-2">
                  {item.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 text-emerald-800 font-semibold flex items-start gap-1.5 pr-2 bg-emerald-50/60 p-2 rounded-lg">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.ags}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-1.5 pl-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">SS 316 Marine Cable</h3>
            <p className="text-xs text-slate-600">
              100% rust-proof even during harsh monsoon rains. High breaking strength protects children from heights.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Garware UV Stabilized</h3>
            <p className="text-xs text-slate-600">
              Zero brittle degradation under scorching Bihar summers. Pigeons and sparrows cannot tear through.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">10-15 Years Guarantee</h3>
            <p className="text-xs text-slate-600">
              Every job comes with an official printed warranty certificate and free periodic re-tensioning.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Expert Installation</h3>
            <p className="text-xs text-slate-600">
              No wall or tile cracking. We use specialized diamond-core & rotary hammer tools for millimeter precision.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
