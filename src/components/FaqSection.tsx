import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rawPhone = '918873232409';

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            अक्सर पूछे जाने वाले सवाल — इनविजिबल ग्रिल, सेफ्टी नेट और सीलिंग क्लॉथ हैंगर
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">
                      {faq.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </h3>
                    {faq.hindiQuestion && (
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {faq.hindiQuestion}
                      </p>
                    )}
                  </div>

                  <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Box */}
        <div className="mt-10 p-6 bg-emerald-50 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-emerald-950 text-base">Have a customized question about your balcony?</h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              Ask Aashish Kumar directly on WhatsApp and get a reply within 5 minutes.
            </p>
          </div>
          <a
            href={`https://wa.me/${rawPhone}?text=${encodeURIComponent('Hello Aashish ji, I have a specific question about safety grill / net installation for my balcony.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
