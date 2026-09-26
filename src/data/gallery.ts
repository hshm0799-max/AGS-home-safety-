import invisibleGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import clothHangerImg from '../assets/images/cloth_hanger_balcony_1790433378816.jpg';
import pigeonNetImg from '../assets/images/pigeon_safety_net_1790433398792.jpg';
import balconyNetImg from '../assets/images/balcony_safety_net_1790433417950.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'invisible-grill' | 'cloth-hanger' | 'pigeon-net' | 'child-safety' | 'duct-nets';
  categoryLabel: string;
  district: string;
  specs: string;
  image: string;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'High-Rise Balcony SS 316 Invisible Grill',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill',
    district: 'Saguna More, Patna',
    specs: 'SS 316 3mm Marine Cables • 2" Spacing • Anodized Track',
    image: invisibleGrillImg,
    tag: 'Balcony Safety',
  },
  {
    id: 'g-2',
    title: 'Pull & Dry 6-Pipe Stainless Steel Ceiling Dryer',
    category: 'cloth-hanger',
    categoryLabel: 'Ceiling Hangers',
    district: 'Mithanpura, Muzaffarpur',
    specs: '6 Individual SS Pipes • Heavy Nylon Pulley Ropes • 40kg Load',
    image: clothHangerImg,
    tag: 'Space Saver',
  },
  {
    id: 'g-3',
    title: 'Anti-Bird Pigeon Net & Polycarbonate Spikes',
    category: 'pigeon-net',
    categoryLabel: 'Pigeon Nets',
    district: 'AP Colony, Gaya',
    specs: 'Garware Virgin HDPE 25mm Mesh • Transparent UV Stabilized',
    image: pigeonNetImg,
    tag: 'Bird Free Balcony',
  },
  {
    id: 'g-4',
    title: 'Child Proof Balcony Safety Net Installation',
    category: 'child-safety',
    categoryLabel: 'Child Safety',
    district: 'Tilkamanjhi, Bhagalpur',
    specs: '2.5mm Braided High-impact Cord • 150kg Fall Proof Rating',
    image: balconyNetImg,
    tag: 'Toddler Safe',
  },
  {
    id: 'g-5',
    title: 'Apartment Duct & Open Shaft Netting',
    category: 'duct-nets',
    categoryLabel: 'Duct Nets',
    district: 'Bailey Road, Patna',
    specs: 'Multi-Storey Rope Access Fitting • Heavy Weather Proof Mesh',
    image: balconyNetImg,
    tag: 'Shaft Protection',
  },
  {
    id: 'g-6',
    title: 'Curved Balcony Architectural Invisible Grill',
    category: 'invisible-grill',
    categoryLabel: 'Invisible Grill',
    district: 'Danapur, Patna',
    specs: 'Curved Contour Tensioning • DuPont Coating • Zero Rust',
    image: invisibleGrillImg,
    tag: 'Modern Luxury',
  },
];
