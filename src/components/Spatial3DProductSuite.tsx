import React, { useState } from 'react';
import { 
  Sparkles, 
  Rotate3d, 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  Maximize2, 
  X, 
  MessageCircle, 
  Phone, 
  Calculator, 
  Flame, 
  Scissors, 
  ArrowRight,
  MapPin,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { DistrictInfo } from '../types';
import { Interactive3DViewer, Product3DMode } from './Interactive3DViewer';

// Import All High-Res Real Installation & 3D Assets
import curvedBalconyImg from '../assets/images/curved_balcony_grill_1790435076464.jpg';
import nightBalconyImg from '../assets/images/night_balcony_grill_1790435104043.jpg';
import cableMacroImg from '../assets/images/cable_cross_clip_macro_1790434702134.jpg';
import ductNetImg from '../assets/images/duct_safety_net_1790435089888.jpg';
import birdSpikesImg from '../assets/images/bird_spikes_macro_1790435061260.jpg';
import heroGrillImg from '../assets/images/invisible_grill_hero_1790433348448.jpg';
import windowGrillImg from '../assets/images/window_invisible_grill_1790434683120.jpg';
import highriseFacadeImg from '../assets/images/highrise_facade_grill_1790434717531.jpg';
import technicianImg from '../assets/images/technician_installing_grill_1790434273306.jpg';
import clothHangerImg from '../assets/images/cloth_hanger_balcony_1790433378816.jpg';
import ceilingDryerImg from '../assets/images/ceiling_dryer_action_1790434734330.jpg';
import pigeonNetImg from '../assets/images/pigeon_safety_net_1790433398792.jpg';
import balconyNetImg from '../assets/images/balcony_safety_net_1790433417950.jpg';

export interface Product3DItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'grill' | 'dryer' | 'net' | 'spikes';
  categoryLabel: string;
  image: string;
  mode3D: Product3DMode;
  tagline: string;
  description: string;
  tensileStrength: string;
  materialGrade: string;
  loadCapacity: string;
  warranty: string;
  pricePerUnit: string;
  locationInstalled: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

interface Spatial3DProductSuiteProps {
  selectedDistrict: DistrictInfo | null;
  onOpenBooking: (serviceName?: string) => void;
}

export const Spatial3DProductSuite: React.FC<Spatial3DProductSuiteProps> = ({
  selectedDistrict,
  onOpenBooking,
}) => {
  const primaryPhone = '+91 88732 32409';
  const rawPrimaryPhone = '918873232409';

  // 16 Comprehensive 3D Modeled Safety Products covering all 19 image topics
  const products: Product3DItem[] = [
    {
      id: 'curved-invisible-grill',
      title: 'Curved Balcony SS 316 Invisible Grill',
      hindiTitle: 'कर्व्ड बालकनी एसएस 316 इनविजिबल सेफ्टी ग्रिल',
      category: 'grill',
      categoryLabel: 'SS 316 Invisible Grill',
      image: curvedBalconyImg,
      mode3D: 'grill',
      tagline: 'Custom CNC Track Bending • Zero View Obstruction',
      description: 'Engineered specifically for semi-circular and curved modern apartment balconies. Features seamless CNC-curved aluminium tracks with high-tension SS 316L cables anchored directly to the slab.',
      tensileStrength: '800+ KG Break Load',
      materialGrade: 'AISI 316-L Marine Grade Stainless',
      loadCapacity: 'Tested to 25th floor high-rise wind loads',
      warranty: '15 Years Signed Warranty',
      pricePerUnit: '₹135 / sq.ft.',
      locationInstalled: 'Patna Ganga View & Bailey Road Towers',
      highlights: ['Custom curve bending', '100% view retention', 'Child & pet safe', 'Corrosion proof'],
      specs: [
        { label: 'Wire Grade', value: 'AISI SS 316-L (Marine Grade)' },
        { label: 'Cable Construction', value: '7x7 high-tensile core (2.5mm / 3.0mm)' },
        { label: 'Sheathing', value: 'DuPont UV-resistant clear nylon' },
        { label: 'Anchor System', value: 'Anodized 6063-T6 CNC-curved track' },
        { label: 'Fire Safety', value: 'Emergency 3s wire-cutter rescue' },
      ],
    },
    {
      id: 'night-glass-invisible-grill',
      title: 'Night Balcony Glass Railing Invisible Grill',
      hindiTitle: 'नाइट कॉरिडोर एवं ग्लास रेलिंग सेफ्टी ग्रिल',
      category: 'grill',
      categoryLabel: 'SS 316 Invisible Grill',
      image: nightBalconyImg,
      mode3D: 'grill',
      tagline: 'Spotlight Ambient Integration • Horizontal Wire Stiffener',
      description: 'Floor-to-ceiling vertical wire cables with horizontal cross-stiffeners installed behind glass balustrades. Reflects ambient downlights while maintaining maximum security without daytime or nighttime glare.',
      tensileStrength: '120 N Pre-Tensioned',
      materialGrade: 'Pure SS 316 Marine Cable',
      loadCapacity: 'Resists 800+ KG human and wind impact',
      warranty: '15 Years Rust-Proof Warranty',
      pricePerUnit: '₹130 / sq.ft.',
      locationInstalled: 'Muzaffarpur & Gaya Luxury Apartments',
      highlights: ['Night skyline view', 'Glass balustrade safe', 'Zero glare', 'Anti-climb design'],
      specs: [
        { label: 'Stiffener Wire', value: 'Horizontal cross-cable at 3.5ft elevation' },
        { label: 'Cross-Clamps', value: 'SS 316 precision CNC T-joints' },
        { label: 'Optical Clarity', value: '99% daylight and evening light transmission' },
        { label: 'Maintenance', value: 'Zero painting or welding required' },
      ],
    },
    {
      id: 'macro-t-cross-clamps',
      title: 'High-Tensile SS 316 T-Cross Clamps & Wire Locks',
      hindiTitle: 'एसएस 316 टी-क्रॉस क्लैंप एवं वायर लॉक्स',
      category: 'grill',
      categoryLabel: 'Hardware Engineering',
      image: cableMacroImg,
      mode3D: 'grill',
      tagline: 'Anti-Sag Locking • Zero Cable Separation',
      description: 'Precision German-spec cross clamps that permanently lock horizontal stiffener cables to vertical wires, eliminating cable separation and preventing children from prying wires apart.',
      tensileStrength: 'Anti-Pry Deflection < 1.5 inches',
      materialGrade: 'Solid SS 316 Cast Hardware',
      loadCapacity: 'Locking torque 4.5 Nm with threadlock',
      warranty: '15 Years Replacement Warranty',
      pricePerUnit: 'Included with Grill Installation',
      locationInstalled: 'Bihar-wide Standard Safety Hardware',
      highlights: ['Anti-pry protection', 'Solid SS 316 casting', 'Zero wire slippage', 'Child entrapment safe'],
      specs: [
        { label: 'Material', value: 'Investment cast SS 316 steel' },
        { label: 'Fastening', value: 'Internal Allen-head grub screw' },
        { label: 'Rust Rating', value: 'ASTM B117 salt spray 500+ hours' },
        { label: 'Spacing', value: 'Every intersection point' },
      ],
    },
    {
      id: 'window-ss316-grill',
      title: 'Modern Window & Bedroom SS 316 Invisible Grill',
      hindiTitle: 'मॉडर्न बेडरूम एवं विंडो इनविजिबल सेफ्टी ग्रिल',
      category: 'grill',
      categoryLabel: 'SS 316 Invisible Grill',
      image: windowGrillImg,
      mode3D: 'grill',
      tagline: 'Replaces Heavy Iron Bars • Emergency Fire Exit Ready',
      description: 'Sleek vertical stainless cables installed into window reveals. Eliminates claustrophobic, rusty traditional iron box grills while allowing unrestricted natural airflow and fast 3-second fire egress.',
      tensileStrength: '500 KG per wire',
      materialGrade: 'SS 316 Marine Grade',
      loadCapacity: 'Child safe fall-prevention',
      warranty: '10 Years Rust Warranty',
      pricePerUnit: '₹125 / sq.ft.',
      locationInstalled: 'Darbhanga & Bhagalpur Residences',
      highlights: ['Emergency fire exit', 'Fresh natural breeze', 'No welding or rust', 'Zero view block'],
      specs: [
        { label: 'Wire Spacing', value: '2 inches (50mm)' },
        { label: 'Frame Anchor', value: 'Concrete frame expansion anchors' },
        { label: 'Fire Safety', value: 'Cuttable with emergency wire shears in 3s' },
      ],
    },
    {
      id: 'pull-and-dry-6pipe',
      title: 'Pull & Dry 6-Pipe Ceiling Cloth Dryer',
      hindiTitle: 'पुल एंड ड्राई 6-पाइप सीलिंग क्लॉथ हैंगर',
      category: 'dryer',
      categoryLabel: 'Ceiling Cloth Dryer',
      image: clothHangerImg,
      mode3D: 'dryer',
      tagline: '100% Floor Space Free • Smooth Brass Pulley Operation',
      description: 'Ceiling-mounted individual pulley drying system featuring 6 heavy-gauge stainless steel rods. Each pipe lowers independently to chest level for loading and lifts to ceiling breeze for quick drying.',
      tensileStrength: '35+ KG Clothes Load',
      materialGrade: 'SS 304 High-Gloss Stainless Pipes',
      loadCapacity: 'Heavy wet quilts, bedsheets & jeans',
      warranty: '5 Years Replacement Warranty',
      pricePerUnit: '₹1,599 / set installed',
      locationInstalled: 'Kankarbagh, Boring Road, Patna',
      highlights: ['Frees 100% floor', '2x faster drying', 'Effortless pulley', 'Elderly friendly'],
      specs: [
        { label: 'Pipes Count', value: '6 Independent Stainless Steel Rods' },
        { label: 'Available Sizes', value: '4ft, 5ft, 6ft, 7ft, 8ft lengths' },
        { label: 'Rope Cord', value: 'Multi-strand 4.5mm nylon cord' },
        { label: 'Pulley Wheels', value: 'High-grade metal with brass bush' },
      ],
    },
    {
      id: 'utility-balcony-dryer',
      title: 'Utility Balcony & AC Unit Ceiling Cloth Dryer',
      hindiTitle: 'यूटिलिटी बालकनी एवं एसी यूनिट सीलिंग हैंगर',
      category: 'dryer',
      categoryLabel: 'Ceiling Cloth Dryer',
      image: ceilingDryerImg,
      mode3D: 'dryer',
      tagline: 'Engineered for Compact Balconies • Wall Tie-off Bracket',
      description: 'Specially engineered for narrow apartment utility balconies with split AC outdoor units. Fits neatly into tight ceiling recesses without interfering with AC maintenance or balcony doors.',
      tensileStrength: '30 KG Load Capacity',
      materialGrade: 'SS 304 Seamless Stainless Tubes',
      loadCapacity: 'Full family daily laundry batch',
      warranty: '5 Years Warranty',
      pricePerUnit: '₹1,699 / set installed',
      locationInstalled: 'Patna & Muzaffarpur Flats',
      highlights: ['Fits tight spaces', 'AC unit safe', 'Wall locking plate', 'No rust stains'],
      specs: [
        { label: 'Wall Mount', value: 'Direct concrete wall locking plate' },
        { label: 'End Caps', value: 'UV-resistant protective nylon caps' },
        { label: 'Installation Time', value: '45 minutes by AGS technicians' },
      ],
    },
    {
      id: 'building-duct-shaft-net',
      title: 'High-Rise Open Duct & Shaft Safety Netting',
      hindiTitle: 'हाई-राइज ओपन डक्ट एवं शाफ्ट सेफ्टी नेट्स',
      category: 'net',
      categoryLabel: 'Duct Safety Netting',
      image: ductNetImg,
      mode3D: 'net',
      tagline: 'Multi-Storey Rope Access • 100% Pigeon Colony Elimination',
      description: 'Comprehensive vertical ventilation shaft enclosure for multi-floor residential buildings. Permanently blocks pigeon nesting, eliminates toxic droppings and foul odors from entering bathroom/kitchen vents.',
      tensileStrength: 'High-Tensile Industrial Grade',
      materialGrade: 'Virgin High-Density Polyethylene (HDPE)',
      loadCapacity: 'Debris arrest & pigeon proofing',
      warranty: '5 - 8 Years Garware Warranty',
      pricePerUnit: '₹16 / sq.ft.',
      locationInstalled: 'Apartment Towers in Patna & Begusarai',
      highlights: ['Stops pigeon nests', 'Eliminates odor', 'Rope access team', 'Weather proof'],
      specs: [
        { label: 'Mesh Spec', value: '25mm x 25mm / 50mm x 50mm square mesh' },
        { label: 'UV Treatment', value: '100% UV Stabilized against sun decay' },
        { label: 'Border Anchor', value: 'Galvanized steel wire perimeter' },
      ],
    },
    {
      id: 'polycarbonate-bird-spikes',
      title: 'Polycarbonate Multi-Angle Anti-Bird Spikes',
      hindiTitle: 'पॉलीकार्बोनेट एवं एसएस एंटी-बर्ड स्पाइक्स',
      category: 'spikes',
      categoryLabel: 'Anti-Bird Deterrent',
      image: birdSpikesImg,
      mode3D: 'spikes',
      tagline: 'Humane Pigeon Deterrent • 100% Virgin UV Protected Base',
      description: 'Dense multi-directional spikes engineered to prevent pigeons and crows from roosting on split AC units, window sills, and parapet ledges. Completely harmless to birds while 100% preventing perching.',
      tensileStrength: 'High Flexural Modulus',
      materialGrade: '100% Virgin Polycarbonate + SS 304 Pins',
      loadCapacity: 'Zero breakage under heavy birds',
      warranty: '7 Years UV Sun Warranty',
      pricePerUnit: '₹110 / running foot',
      locationInstalled: 'Residential & Commercial across Bihar',
      highlights: ['Non-lethal & humane', 'AC unit protection', 'Zero maintenance', 'Blunt safe tips'],
      specs: [
        { label: 'Spike Height', value: '115 mm (4.5 inches)' },
        { label: 'Coverage Width', value: '120 mm per strip' },
        { label: 'Base Flexibility', value: 'Snaps every 5cm for curved surfaces' },
        { label: 'Attachment', value: 'Industrial silicone adhesive or screws' },
      ],
    },
    {
      id: 'garware-pigeon-net',
      title: 'Garware Virgin HDPE Anti-Pigeon Balcony Net',
      hindiTitle: 'गारवारे वर्जिन एचडीपीई कबूतर सेफ्टी नेट',
      category: 'net',
      categoryLabel: 'Anti-Bird Netting',
      image: pigeonNetImg,
      mode3D: 'net',
      tagline: 'Translucent Invisible Look • 0% Sunlight Blockage',
      description: 'Original Garware Technical Fibres monofilament netting that stops pigeons from dirtying balconies while keeping your beautiful view and fresh breeze completely intact.',
      tensileStrength: '23 KG breaking strength per mesh strand',
      materialGrade: '100% Original Garware Monofilament',
      loadCapacity: 'High wind and heavy bird impact',
      warranty: '8 Years Warranty',
      pricePerUnit: '₹18 / sq.ft.',
      locationInstalled: 'All 38 Districts of Bihar',
      highlights: ['Translucent mesh', 'Garware certified', 'No fungus or odor', 'Safe for birds'],
      specs: [
        { label: 'Brand', value: 'Garware Technical Fibres Ltd' },
        { label: 'Knot Type', value: 'Double knotted non-slip weave' },
        { label: 'Color', value: 'Crystal Transparent & White' },
      ],
    },
    {
      id: 'child-pet-safety-net',
      title: 'Balcony Child & Pet Fall-Protection Safety Net',
      hindiTitle: 'बालकनी चाइल्ड एवं पेट फॉल प्रोटेक्शन नेट',
      category: 'net',
      categoryLabel: 'Child Safety Netting',
      image: balconyNetImg,
      mode3D: 'net',
      tagline: 'Tested to 150+ KG Load • Soft Non-Abrasive Cord',
      description: 'Heavy gauge braided safety net designed specifically for homes with energetic toddlers and pets. Tested to withstand sudden impact forces, ensuring safety on high-rise balconies.',
      tensileStrength: '150+ KG Human Impact Load',
      materialGrade: 'Heavy-Gauge Braided Nylon / HDPE',
      loadCapacity: 'High-rise balcony edge safety',
      warranty: '7 Years Warranty',
      pricePerUnit: '₹22 / sq.ft.',
      locationInstalled: 'Arrah, Patna & Buxar High-Rises',
      highlights: ['150kg impact test', 'Toddler proof', 'Pet friendly', 'Double border rope'],
      specs: [
        { label: 'Cord Thickness', value: '2.5 mm heavy braided core' },
        { label: 'Border Anchor', value: '8mm braided perimeter rope' },
        { label: 'Touch Finish', value: 'Smooth non-scratch finish' },
      ],
    },
    {
      id: 'highrise-facade-grill',
      title: 'Multi-Floor High-Rise Facade Invisible Safety System',
      hindiTitle: 'मल्टी-फ्लोर हाई-राइज फसाड इनविजिबल सेफ्टी ग्रिल',
      category: 'grill',
      categoryLabel: 'SS 316 Invisible Grill',
      image: highriseFacadeImg,
      mode3D: 'grill',
      tagline: 'Continuous Architectural Safety • Tested to 140 km/h Winds',
      description: 'Architectural safety cables spanning multi-floor exterior balconies, terraces, and open courtyards without altering the modern aesthetics of luxury high-rise buildings.',
      tensileStrength: '800+ KG Break Load',
      materialGrade: 'SS 316 Marine Cable with DuPont Sheath',
      loadCapacity: 'Engineered for extreme storm wind pressures',
      warranty: '15 Years Warranty',
      pricePerUnit: '₹140 / sq.ft.',
      locationInstalled: 'Bhagalpur & Patna Luxury Complexes',
      highlights: ['Architectural grade', 'Storm wind tested', 'Building facade safe', 'Continuous tension'],
      specs: [
        { label: 'Wind Load', value: 'Tested up to 140 km/h gusts' },
        { label: 'Cable Spacing', value: '2 inches or 3 inches' },
        { label: 'Anchor Bolts', value: 'Hilti heavy-shear concrete anchors' },
      ],
    },
    {
      id: 'certified-technician-install',
      title: 'Precision Laser Alignment & Hydraulic Cable Tensioning',
      hindiTitle: 'लेजर अलाइनमेंट एवं हाइड्रोलिक केबल टेंशनिंग',
      category: 'grill',
      categoryLabel: 'Installation Service',
      image: technicianImg,
      mode3D: 'grill',
      tagline: 'Trained Safety Engineers • Free Site Survey in Bihar',
      description: 'Every AGS installation is carried out by company-trained safety technicians using laser levels and calibrated hydraulic tensioners to guarantee zero wire sagging over 15 years.',
      tensileStrength: '120 N Uniform Tension',
      materialGrade: 'Professional Installation Standards',
      loadCapacity: '100% Uniform Calibration',
      warranty: 'Free Annual Alignment Check',
      pricePerUnit: 'Free with Material Booking',
      locationInstalled: 'Same-day Survey across Bihar',
      highlights: ['Laser leveled', 'Hydraulic tensioned', 'Same day site survey', 'Trained staff'],
      specs: [
        { label: 'Tools Used', value: 'Bosch Laser Levels & Hydraulic Tension Gauges' },
        { label: 'Survey Cost', value: '100% Free at your doorstep' },
        { label: 'Delivery Time', value: 'Same-day in Patna, 24h across Bihar' },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<'all' | 'grill' | 'dryer' | 'net' | 'spikes'>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product3DItem | null>(null);

  // 3D Card Hover Perspective Tracker
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [cardRotation, setCardRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12; // tilt angle max 12 deg
    const rotY = ((x - centerX) / centerX) * 12;

    setCardRotation({ x: rotX, y: rotY });
    setHoveredCardId(cardId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCardId(null);
    setCardRotation({ x: 0, y: 0 });
  };

  // Instant Quote Calculator State inside Modal
  const [calcWidth, setCalcWidth] = useState<number>(10);
  const [calcHeight, setCalcHeight] = useState<number>(5);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleWhatsAppQuote = (product: Product3DItem) => {
    const area = calcWidth * calcHeight;
    const districtName = selectedDistrict ? selectedDistrict.name : 'Bihar';
    const text = encodeURIComponent(
      `Hello Aashish Kumar ji, I inspected your 3D Safety System for:\n` +
      `Product: "${product.title}" (${product.categoryLabel})\n` +
      `Specifications: ${product.tensileStrength} • ${product.materialGrade}\n` +
      `Approximate Balcony Size: ${calcWidth} ft x ${calcHeight} ft (${area} sq.ft.)\n` +
      `Location: ${districtName}\n` +
      `Please provide final quote with Free On-Site Inspection.`
    );
    window.open(`https://wa.me/${rawPrimaryPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="products-3d" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background Ambience Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/25 px-3 py-1 rounded-full uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              Real Installation Gallery in 3D • Details & Specs
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Interactive 3D <span className="text-amber-400">Safety Product Suite</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore all 16 safety models in real 3D depth. Click any card to inspect microscopic SS 316 tensile layers, load resistance ratings, and calculate live quotes for your balcony in {selectedDistrict ? selectedDistrict.name : 'Bihar'}.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 overflow-x-auto scrollbar-none max-w-full">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'all' 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All 3D Models ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('grill')}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'grill' 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SS 316 Grills
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('dryer')}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'dryer' 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pull & Dry Ceiling Dryers
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('net')}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'net' 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Duct & Balcony Nets
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('spikes')}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'spikes' 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Anti-Bird Spikes
            </button>
          </div>
        </div>

        {/* 3D Perspective Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isHovered = hoveredCardId === product.id;
            return (
              <div
                key={product.id}
                onMouseMove={(e) => handleCardMouseMove(e, product.id)}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setActiveModalProduct(product)}
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
                }}
                className="group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-400/80 transition-colors shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with 3D Depth Tag */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* 3D Floating Mode Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700 text-amber-400 px-2.5 py-1 rounded-xl text-[10px] font-black flex items-center gap-1.5 shadow-lg">
                    <Rotate3d className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                    <span>3D MODEL READY</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white px-2 py-0.5 rounded-lg text-[10px] font-bold">
                    {product.tensileStrength}
                  </div>

                  {/* Hover 3D Depth Trigger Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full flex items-center justify-between text-xs font-bold text-amber-300">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-amber-400" />
                        <span>Inspect in 3D & Specs</span>
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 tracking-wide uppercase">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mt-0.5">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Mini Spec Bullets */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Material:</span>
                      <span className="font-semibold text-white truncate max-w-[150px]">{product.materialGrade}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Warranty:</span>
                      <span className="font-semibold text-amber-400">{product.warranty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Pricing:</span>
                      <span className="font-black text-emerald-400">{product.pricePerUnit}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProduct(product);
                    }}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors border border-slate-700/80 cursor-pointer"
                  >
                    <Rotate3d className="w-3.5 h-3.5 text-amber-400" />
                    <span>View 3D Model & Details</span>
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* FULL-SCALE 3D TECHNICAL DEPTH INSPECTOR MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="bg-slate-950/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Rotate3d className="w-5 h-5 animate-spin" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {activeModalProduct.categoryLabel} • 3D Technical Inspection
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                    {activeModalProduct.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProduct(null)}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Split 3D Viewport on Left, Specs & Price on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              
              {/* Left Column (7 cols): Interactive 3D Model & Real Photo Gallery */}
              <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col gap-4 bg-slate-950/50">
                
                {/* 3D WebGL Canvas */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Live 3D Viewport (Rotate & Interact):
                    </span>
                    <span className="text-[11px] text-slate-400">Mouse Drag to Orbit 360°</span>
                  </div>

                  <Interactive3DViewer
                    initialMode={activeModalProduct.mode3D}
                    initialLighting="sunset"
                    height="340px"
                    showControls={true}
                  />
                </div>

                {/* Real Job Site Photo Reference */}
                <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <img
                    src={activeModalProduct.image}
                    alt={activeModalProduct.title}
                    className="w-20 h-16 object-cover rounded-xl border border-slate-700 flex-shrink-0"
                  />
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Actual Bihar Site Photo</span>
                    <span className="font-bold text-white block mt-0.5">{activeModalProduct.locationInstalled}</span>
                    <span className="text-slate-300 text-[11px] block mt-0.5">{activeModalProduct.tagline}</span>
                  </div>
                </div>

                {/* Microscopic Material Exploded View Specs */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2 text-xs">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">
                    Engineering Cross-Section & Hardware Specs:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {activeModalProduct.specs.map((s, idx) => (
                      <div key={idx} className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80">
                        <span className="text-slate-400 block text-[10px]">{s.label}</span>
                        <span className="font-bold text-slate-100 block mt-0.5">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (5 cols): In-depth Details, Live Cost Calculator & WhatsApp Call */}
              <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between bg-slate-900">
                <div className="space-y-4">
                  
                  {/* Hindi Title & Description */}
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400 mb-1">
                      {activeModalProduct.hindiTitle}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeModalProduct.description}
                    </p>
                  </div>

                  {/* Trust Highlights Checklist */}
                  <div className="space-y-1.5 bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-xs">
                    {activeModalProduct.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-slate-200">
                      <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{activeModalProduct.warranty} with signed certificate</span>
                    </div>
                  </div>

                  {/* Built-in Balcony Area & Price Calculator */}
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                      <span className="flex items-center gap-1.5">
                        <Calculator className="w-4 h-4" />
                        <span>Instant Balcony Quote Calculator</span>
                      </span>
                      <span className="text-[10px] text-slate-300">
                        Serving: {selectedDistrict?.name || 'Bihar'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-400 mb-1">
                          Width (in Feet):
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={calcWidth}
                          onChange={(e) => setCalcWidth(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-400 mb-1">
                          Height (in Feet):
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="50"
                          value={calcHeight}
                          onChange={(e) => setCalcHeight(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-700 text-xs">
                      <span className="text-slate-300">Total Area: <strong className="text-white">{calcWidth * calcHeight} sq.ft.</strong></span>
                      <span className="text-amber-400 font-black text-sm">{activeModalProduct.pricePerUnit}</span>
                    </div>

                  </div>

                </div>

                {/* Instant Actions & Booking */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppQuote(activeModalProduct)}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-2xl text-sm transition-all shadow-xl shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Get Price on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:+${rawPrimaryPhone}`}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black py-3 px-4 rounded-2xl text-sm transition-all shadow-lg shadow-amber-500/20"
                  >
                    <Phone className="w-4 h-4 fill-slate-950" />
                    <span>Call Founder Aashish Kumar ({primaryPhone})</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalProduct(null);
                      onOpenBooking(activeModalProduct.title);
                    }}
                    className="w-full text-center text-xs font-bold text-amber-300 hover:underline pt-1"
                  >
                    Schedule Free On-Site Inspection & Sample Demo in {selectedDistrict?.name || 'Bihar'} →
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
