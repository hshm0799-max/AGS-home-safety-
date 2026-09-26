import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, Award, RotateCcw } from 'lucide-react';
import { COMPANY_POLICIES } from '../data/policies';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'terms' | 'privacy' | 'warranty' | 'refund';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'warranty',
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'warranty' | 'refund'>(initialTab);

  if (!isOpen) return null;

  const currentPolicy = COMPANY_POLICIES[activeTab];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              AGS Home Safety Bihar
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Legal, Warranty & Operational Policies
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto shrink-0 px-4">
          <button
            type="button"
            onClick={() => setActiveTab('warranty')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'warranty'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>10-Yr Warranty Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'terms'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'privacy'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('refund')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'refund'
                ? 'border-emerald-600 text-emerald-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Refund & Cancellation</span>
          </button>
        </div>

        {/* Policy Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-sm leading-relaxed">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <h4 className="text-lg font-bold text-slate-900">{currentPolicy.title}</h4>
            <span className="text-xs text-slate-400">Updated: {currentPolicy.lastUpdated}</span>
          </div>

          <div className="space-y-5">
            {currentPolicy.sections.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <h5 className="font-bold text-slate-900 text-sm">{sec.heading}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
            For any policy inquiries or direct warranty service requests, contact Founder Aashish Kumar at{' '}
            <a href="tel:+918873232409" className="text-emerald-700 font-bold hover:underline">+91 88732 32409</a> or email{' '}
            <span className="font-semibold text-slate-800">contact@agshomesafety.in</span>.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
