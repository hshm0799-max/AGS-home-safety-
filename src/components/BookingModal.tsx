import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Phone, 
  User, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  Clock
} from 'lucide-react';
import { DistrictInfo, BookingFormState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  districts: DistrictInfo[];
  defaultService?: string;
  defaultDistrict?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  districts,
  defaultService = 'SS 316 Invisible Grills',
  defaultDistrict = 'Patna',
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    district: defaultDistrict,
    locality: '',
    serviceType: defaultService,
    preferredDate: '',
    balconyLength: '',
    balconyHeight: '',
    additionalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const rawPhone = '918873232409';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    // Send to WhatsApp
    const message = encodeURIComponent(
      `Hello Aashish Kumar ji, I have booked a FREE Site Inspection for AGS Home Safety:\n\n` +
      `• Name: ${formData.fullName}\n` +
      `• Phone: ${formData.phone}\n` +
      `• District: ${formData.district}, Bihar\n` +
      `• Locality/Address: ${formData.locality || 'Not specified'}\n` +
      `• Service: ${formData.serviceType}\n` +
      `• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n` +
      `${formData.balconyLength ? `• Approx Dimensions: ${formData.balconyLength}ft x ${formData.balconyHeight || 5}ft\n` : ''}` +
      `${formData.additionalNotes ? `• Notes: ${formData.additionalNotes}\n` : ''}\n` +
      `Please confirm the visit time with me.`
    );

    window.open(`https://wa.me/${rawPhone}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800/80 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> 100% Free • No Obligation
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-300 text-xs">All 38 Bihar Districts</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Book Free Site Inspection & Measurement
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Our safety technician will visit with genuine SS 316 samples and provide exact quote.
          </p>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Inspection Request Sent Successfully!
            </h4>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Aashish Kumar and our technical team in <strong>{formData.district}</strong> have received your request. We will contact you at <strong>{formData.phone}</strong> shortly.
            </p>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 text-left space-y-1">
              <p><strong>District:</strong> {formData.district}, Bihar</p>
              <p><strong>Service:</strong> {formData.serviceType}</p>
              <p><strong>Helpline:</strong> +91 88732 32409</p>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-xl text-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-emerald-600" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aashish Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>
            </div>

            {/* District & Locality */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" /> District in Bihar *
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800"
                >
                  {districts.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.hindiName}) - {d.deliveryTime}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Locality / Society / Colony
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bailey Road, Flat 302"
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Service & Preferred Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Service Required
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800"
                >
                  <option value="SS 316 Invisible Grills">SS 316 Invisible Grills (बालकनी/खिड़की)</option>
                  <option value="Pull & Dry Ceiling Cloth Hangers">Pull & Dry Ceiling Cloth Hangers (6 पाइप)</option>
                  <option value="Anti-Bird & Pigeon Safety Nets">Anti-Bird & Pigeon Safety Nets (गारवारे जाली)</option>
                  <option value="Stainless Steel Bird Spikes">Stainless Steel Bird Spikes (AC/छज्जा)</option>
                  <option value="Balcony Children & Pet Safety Nets">Balcony Children & Pet Safety Nets</option>
                  <option value="Building Duct & Open Shaft Nets">Building Duct & Shaft Safety Nets</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" /> Preferred Visit Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Any specific question or balcony details? (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. 2 balconies on 7th floor, need quote today"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 font-medium"
              />
            </div>

            {/* Inclusions Reminder */}
            <div className="bg-slate-100 p-3 rounded-xl flex items-center gap-2 text-[11px] text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free measurement, live sample demo, and written quote without any charges.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm & Send to Aashish Kumar on WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-slate-400">
              Or call directly anytime: <a href="tel:+918873232409" className="text-emerald-700 font-bold hover:underline">+91 88732 32409</a>
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
