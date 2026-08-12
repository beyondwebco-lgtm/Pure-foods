import React, { useState } from 'react';
import {
  Package,
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Award,
  Crown,
  ChevronRight,
  Layers,
  ArrowLeft,
  Check,
  FileText,
  Sparkles,
  Droplets,
  Heart
} from 'lucide-react';

export default function ProductsPage({ setCurrentPage }) {
  // Active selected product line index
  const [selectedProductIndex, setSelectedProductIndex] = useState(1); // Default to COCO FUSE (Index 1)

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Comprehensive Product Lines Catalog Data
  const products = [
    {
      id: '01',
      key: 'water',
      isCoreBusiness: true,
      categoryBadge: 'CATEGORY 01',
      title: '01 — PACKAGED WATER',
      subtitle: 'PACKAGED DRINKING WATER PRODUCT LINE',
      shortTitle: 'Packaged Drinking Water',
      description: 'Ultra-purified packaged drinking water enriched with balanced minerals, produced on high-speed automated lines under multi-barrier Reverse Osmosis (RO) & UV sterilization.',
      mainImage: '/images/uploaded/bottle_good_giving.jpg',
      fruitElements: [
        { emoji: '💧', label: 'Purified Water' },
        { emoji: '✨', label: 'Added Minerals' },
        { emoji: '🌿', label: 'Fresh Natural' }
      ],
      flavors: [
        { name: 'Pure Added Minerals', color: '#00A8B5' },
        { name: 'Alkaline Mineral Water', color: '#003D5B' },
        { name: 'Custom Mineral Fortification', color: '#0B6B50' }
      ],
      packaging: '250ml, 350ml, 500ml, 1 Litre PET, Glass & Carton',
      format: 'Glass, PET & Eco-Friendly Paperboard Cartons',
      features: [
        'Multi-barrier RO & UV sterilization',
        'Balanced mineral fortification',
        'Private label logo printing',
        'FSSAI & BIS compliant manufacturing'
      ],
      formulationNote: 'Formulated with purified water and essential added minerals (Magnesium, Potassium, Calcium).'
    },
    {
      id: '04',
      key: 'cocofuse',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 04',
      title: '04 — COCO FUSE.',
      subtitle: 'COCONUT WATER HYDRATION PRODUCT LINE',
      shortTitle: 'COCO FUSE. Coconut Water',
      description: 'A premium coconut water hydration product combining coconut water with fruit hydration across three distinct flavour variants.',
      mainImage: '/images/uploaded/bottle_cocofuse_mango.jpg',
      fruitElements: [
        { emoji: '🥥', label: 'Pure Coconut Water' },
        { emoji: '🥭', label: 'Fresh Mango' },
        { emoji: '🍉', label: 'Juicy Watermelon' },
        { emoji: '🍃', label: 'Mint & Basil' }
      ],
      flavors: [
        { name: 'Mango Refresh', color: '#EAB308' },
        { name: 'Watermelon Mint Reset', color: '#EC4899' },
        { name: 'Basil Chili Revive', color: '#22C55E' }
      ],
      packaging: '250ml PET Bottle',
      format: 'Single 3-Flavour Line',
      features: [
        'Natural electrolyte coconut water base',
        '0% Added Sugar',
        '0% Artificial Colours',
        '0% Artificial Preservatives'
      ],
      formulationNote: 'Formulated with pure coconut water & natural fruit extracts.'
    },
    {
      id: '02',
      key: 'fruit-splash',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 02',
      title: '02 — FRUIT SPLASH',
      subtitle: 'FRUIT BEVERAGE PRODUCT LINE',
      shortTitle: 'Young Monk Fruit Splash',
      description: 'A single complete B2B fruit beverage product line formulated with real fruit concentrates, Added B-Vitamins, and Glucose energy across 3 flavors.',
      mainImage: '/images/uploaded/bottle_fruit_splash.jpg',
      fruitElements: [
        { emoji: '🍓', label: 'Strawberry' },
        { emoji: '🫐', label: 'Blueberry' },
        { emoji: '🍊', label: 'Orange' },
        { emoji: '🍋', label: 'Lime' }
      ],
      flavors: [
        { name: 'Strawberry Raspberry', color: '#EF4444' },
        { name: 'Apple Blueberry', color: '#8B5CF6' },
        { name: 'Orange Lime', color: '#F97316' }
      ],
      packaging: '250ml PET Bottle',
      format: 'Single 3-Flavour Line',
      features: [
        'Fortified with Added B-Vitamins & Glucose',
        'Pasteurized thermal hold processing',
        'Real fruit concentrates & natural pulp',
        'Commercial B2B production ready'
      ],
      formulationNote: 'Formulated with real fruit pulp, natural fruit concentrates, and B-complex vitamins.'
    },
    {
      id: '03',
      key: 'hytea',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 03',
      title: '03 — TISORA™ HyTEA',
      subtitle: 'HYDRATION ICE TEA PRODUCT LINE',
      shortTitle: 'TISORA™ HyTEA',
      description: "India's First Hydration Ice Tea product line formulated with natural tea extracts, low calorie stevia, and essential electrolytes.",
      mainImage: '/images/uploaded/bottle_tisora_pair.jpg',
      fruitElements: [
        { emoji: '🍑', label: 'Juicy Peach' },
        { emoji: '🍋', label: 'Lemon Mint' },
        { emoji: '🍃', label: 'Sage Infusion' }
      ],
      flavors: [
        { name: 'Lemon Mint Sage', color: '#10B981' },
        { name: 'Juicy Peach', color: '#F97316' }
      ],
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 2-Flavour Line',
      features: [
        'Essential Electrolyte hydration blend',
        'Low calorie stevia & khandsari sugar',
        'Natural tea extracts & caffeine',
        'Smart hydration beverage profile'
      ],
      formulationNote: 'Formulated with natural tea extracts, essential electrolytes, stevia, and khandsari sugar.'
    },
    {
      id: '05',
      key: 'basil-fresh',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 05',
      title: '05 — BASIL FRESH',
      subtitle: 'BASIL SEED BEVERAGE PRODUCT LINE',
      shortTitle: 'Basil Fresh Seed Drink',
      description: 'An exotic basil seed beverage product line featuring suspended basil seeds in premium conical glass bottles across four vibrant fruit flavor profiles.',
      mainImage: '/images/uploaded/bottle_basil_fresh.jpg',
      fruitElements: [
        { emoji: '🍈', label: 'Pink Guava' },
        { emoji: '🍊', label: 'Orange' },
        { emoji: '🫐', label: 'Blueberry' },
        { emoji: '🥭', label: 'Mango' }
      ],
      flavors: [
        { name: 'Pink Guava', color: '#F43F5E' },
        { name: 'Orange', color: '#F97316' },
        { name: 'Blueberry', color: '#3B82F6' },
        { name: 'Mango', color: '#EAB308' }
      ],
      packaging: '250ml Conical Glass Bottle',
      format: 'Single 4-Flavour Line',
      features: [
        'Suspended basil seed texture technology',
        'High-clarity glass bottling with crown caps',
        'Natural fruit flavor profiles',
        'Natural digestive support'
      ],
      formulationNote: 'Suspended basil seed technology in high-clarity glass bottles with natural fruit flavors.'
    }
  ];

  const currentProduct = products[selectedProductIndex];

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#FAFBFD] text-[#17211D] font-sans antialiased">
      
      {/* CONCEPT 5: DARK FOREST GREEN COMPACT HERO BANNER (Height 400-460px Desktop) */}
      <section className="bg-[#073B2A] text-white relative overflow-hidden shadow-md">
        
        {/* Subtle Ambient Botanical & Water Glow Background Overlay */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0B6B50]/30 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-industrial-grid"></div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10 min-h-[420px] lg:min-h-[460px] flex flex-col justify-between relative z-10">
          
          {/* Top Breadcrumb Bar */}
          <div className="flex items-center justify-between gap-4 text-xs font-medium text-white/70 pb-2 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">
                Home
              </button>
              <span>/</span>
              <button onClick={() => handleNavClick('products')} className="hover:text-white transition-colors">
                Products
              </button>
              <span>/</span>
              <span className="text-white font-bold">{currentProduct.shortTitle}</span>
            </div>

            {/* Product Line Quick Switcher */}
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
              {products.map((p, pIdx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProductIndex(pIdx)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all whitespace-nowrap ${
                    selectedProductIndex === pIdx
                      ? 'bg-white text-[#073B2A] shadow-xs'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {p.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Main Hero Content 2-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-4">
            
            {/* HERO LEFT: Text Information (Max-width 550px) */}
            <div className="lg:col-span-7 space-y-4 max-w-[550px]">
              
              {/* Category Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0B6B50] text-white text-[10.5px] font-mono font-bold tracking-widest uppercase shadow-xs">
                <span>{currentProduct.categoryBadge}</span>
                {currentProduct.isCoreBusiness && (
                  <>
                    <span>•</span>
                    <span>PRIMARY CORE BUSINESS</span>
                  </>
                )}
              </div>

              {/* Main Heading (48-56px desktop) */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-white uppercase leading-[1.08] font-sans">
                {currentProduct.title}
              </h1>

              {/* Sub-tagline */}
              <p className="text-xs sm:text-sm font-extrabold text-[#DCE8E1] uppercase tracking-wider">
                {currentProduct.subtitle}
              </p>

              {/* Concise Description */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                {currentProduct.description}
              </p>

              {/* Floating Fruit/Element Micro Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentProduct.fruitElements.map((elem, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/15"
                  >
                    <span>{elem.emoji}</span>
                    <span>{elem.label}</span>
                  </span>
                ))}
              </div>

            </div>

            {/* HERO RIGHT: Product Bottle + Photographic Fruit Visual Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[300px] sm:min-h-[340px]">
              
              {/* Natural Fruit Visuals Composition Overlay */}
              <div className="relative w-full max-w-sm h-full flex items-center justify-center">
                
                {/* Background Ambient Radial Stage Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B6B50]/40 via-transparent to-transparent rounded-full filter blur-2xl pointer-events-none"></div>

                {/* Actual Product Bottle Image (~45-60% of hero height, ~260-340px tall) */}
                <img
                  src={currentProduct.mainImage}
                  alt={currentProduct.title}
                  className="h-[280px] sm:h-[320px] lg:h-[340px] w-auto object-contain drop-shadow-2xl z-10 transition-transform duration-300 hover:scale-105"
                />

                {/* Subtle Soft Pedestal Shadow Disc */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-40 h-3 bg-black/30 rounded-full blur-md z-0"></div>
              </div>

            </div>

          </div>

          {/* Back to Products Link */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
            <button
              onClick={() => handleNavClick('products')}
              className="hover:text-white transition-colors flex items-center space-x-1 text-xs font-semibold"
            >
              <span>← Back to Products</span>
            </button>
            <span className="text-[11px] font-mono text-white/60">PURE FOODS &amp; BEVERAGES • NAVI MUMBAI</span>
          </div>

        </div>
      </section>

      {/* INFORMATION SECTION IMMEDIATELY BELOW HERO (3 COMPACT HORIZONTAL CARDS) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: FLAVOUR VARIANTS */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCE8E1] shadow-xs space-y-4 hover:border-[#0B6B50] transition-colors">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#0B6B50]" />
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#073B2A]">
                FLAVOUR VARIANTS
              </h3>
            </div>

            <div className="space-y-2.5 pt-1">
              {currentProduct.flavors.map((flv, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs font-bold text-[#17211D]">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs"
                    style={{ backgroundColor: flv.color }}
                  ></span>
                  <span>{flv.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: PACKAGING & FORMATS */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCE8E1] shadow-xs space-y-4 hover:border-[#0B6B50] transition-colors">
            <div className="flex items-center space-x-2">
              <Package className="w-4 h-4 text-[#0B6B50]" />
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#073B2A]">
                PACKAGING &amp; FORMATS
              </h3>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#65736C] block">
                  BOTTLE SPECIFICATION
                </span>
                <span className="text-xs font-bold text-[#073B2A] mt-0.5 block">
                  {currentProduct.packaging}
                </span>
              </div>
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#65736C] block">
                  PRODUCTION FORMAT
                </span>
                <span className="text-xs font-bold text-[#073B2A] mt-0.5 block">
                  {currentProduct.format}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3: KEY FEATURES */}
          <div className="bg-white rounded-2xl p-6 border border-[#DCE8E1] shadow-xs space-y-4 hover:border-[#0B6B50] transition-colors">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#0B6B50]" />
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#073B2A]">
                KEY FEATURES
              </h3>
            </div>

            <div className="space-y-2 pt-1">
              {currentProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-[#17211D]">
                  <Check className="w-3.5 h-3.5 text-[#0B6B50] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION & FORMULATION NOTE */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 space-y-4 text-center">
        
        {/* Two Compact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="h-[48px] px-8 text-xs font-extrabold uppercase tracking-wider text-white bg-[#073B2A] hover:bg-[#0B6B50] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group w-full sm:w-auto"
          >
            <span>DISCUSS THIS PRODUCT</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="h-[48px] px-7 text-xs font-extrabold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] border border-[#073B2A] rounded-xl transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <FileText className="w-4 h-4 text-[#0B6B50]" />
            <span>REQUEST PRODUCT DETAILS</span>
          </button>
        </div>

        {/* Small Muted Italic Formulation Note */}
        <p className="text-xs text-[#65736C] italic pt-1 font-medium">
          *{currentProduct.formulationNote}
        </p>

      </section>

      {/* B2B ENQUIRY CALL TO ACTION BANNER */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#073B2A] text-white border border-[#0B6B50]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight">
              HAVE A BEVERAGE REQUIREMENT OR RFQ?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAF4F2] max-w-xl font-medium">
              Tell us what you want to manufacture. Connect directly with our facility team in Mahape MIDC Navi Mumbai for technical discussions &amp; project estimates.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] rounded-xl shadow-md transition-all duration-200 shrink-0 flex items-center space-x-2"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 text-[#073B2A]" />
          </button>
        </div>
      </section>

    </div>
  );
}
