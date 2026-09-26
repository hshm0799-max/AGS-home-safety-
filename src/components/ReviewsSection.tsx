import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  MessageSquare, 
  Plus, 
  Sparkles, 
  ThumbsUp, 
  X 
} from 'lucide-react';
import { ReviewItem } from '../types';
import { REVIEWS_DATA } from '../data/reviews';

interface ReviewsSectionProps {
  districtFilter?: string;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ districtFilter }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [activeDistrict, setActiveDistrict] = useState<string>(districtFilter || 'All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [authorName, setAuthorName] = useState('');
  const [authorDistrict, setAuthorDistrict] = useState('Patna');
  const [authorArea, setAuthorArea] = useState('');
  const [serviceName, setServiceName] = useState('SS 316 Invisible Grills');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const districtList = ['All', 'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 'Begusarai'];

  const filteredReviews = activeDistrict === 'All'
    ? reviews
    : reviews.filter(r => r.district.toLowerCase().includes(activeDistrict.toLowerCase()));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `custom-${Date.now()}`,
      name: authorName.trim(),
      district: authorDistrict,
      area: authorArea.trim() || `${authorDistrict}, Bihar`,
      service: serviceName,
      rating: rating,
      date: 'Just now',
      comment: comment.trim(),
      verified: true,
      avatarBg: 'bg-emerald-600',
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setAuthorName('');
    setAuthorArea('');
    setComment('');
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Google Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Customers Across Bihar Say
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg font-black text-slate-900">4.9 / 5</span>
              <span className="text-sm text-slate-500">Based on 486+ client reviews in Bihar</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* District Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Filter by City:
          </span>
          {districtList.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setActiveDistrict(d)}
              className={`text-xs px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeDistrict === d
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {d === 'All' ? 'All Bihar (सभी जिले)' : `${d}`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-black flex items-center justify-center text-sm shadow-xs`}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{rev.name}</h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <span>{rev.area}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                {/* Stars & Service Tag */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold border border-slate-200">
                    {rev.service}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-3 h-3" /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Write a Customer Review</h3>
            <p className="text-xs text-slate-500 mb-4">
              Share your installation experience with Aashish Kumar & AGS Home Safety
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">District (Bihar)</label>
                  <select
                    value={authorDistrict}
                    onChange={(e) => setAuthorDistrict(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold"
                  >
                    <option value="Patna">Patna</option>
                    <option value="Muzaffarpur">Muzaffarpur</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Bhagalpur">Bhagalpur</option>
                    <option value="Darbhanga">Darbhanga</option>
                    <option value="Begusarai">Begusarai</option>
                    <option value="Arrah">Arrah / Bhojpur</option>
                    <option value="Hajipur">Hajipur / Vaishali</option>
                    <option value="Other Bihar District">Other Bihar District</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Locality / Area</label>
                  <input
                    type="text"
                    placeholder="e.g. Bailey Road"
                    value={authorArea}
                    onChange={(e) => setAuthorArea(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Installed</label>
                <select
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold"
                >
                  <option value="SS 316 Invisible Grills">SS 316 Invisible Grills</option>
                  <option value="Pull & Dry Ceiling Cloth Hanger">Pull & Dry Ceiling Cloth Hanger</option>
                  <option value="Pigeon Safety Nets">Pigeon Safety Nets</option>
                  <option value="Balcony Child Safety Net">Balcony Child Safety Net</option>
                  <option value="Anti-Bird Spikes">Anti-Bird Spikes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-2">{rating} Stars</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Feedback / Review</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details about the technician's punctuality, material quality, and cleanliness..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm shadow-md transition-colors"
              >
                Submit Verified Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
