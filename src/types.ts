export interface DistrictInfo {
  id: string;
  name: string;
  hindiName: string;
  zone: 'Central' | 'North' | 'South' | 'East' | 'West';
  majorAreas: string[];
  pincodes: string[];
  installations: number;
  deliveryTime: string;
  popularServices: string[];
  localReview: {
    author: string;
    locality: string;
    text: string;
    rating: number;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  shortDesc: string;
  fullDesc: string;
  tagline: string;
  startingPrice: string;
  priceUnit: string;
  warranty: string;
  specifications: { label: string; value: string }[];
  keyFeatures: string[];
  category: 'grill' | 'net' | 'hanger' | 'spikes' | 'industrial';
  imageUrl: string;
  badge?: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  district: string;
  area: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
}

export interface FaqItem {
  question: string;
  hindiQuestion?: string;
  answer: string;
  category: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  district: string;
  locality: string;
  serviceType: string;
  preferredDate: string;
  balconyLength?: string;
  balconyHeight?: string;
  additionalNotes: string;
}
