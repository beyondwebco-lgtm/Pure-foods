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
  Heart,
  ShoppingBag,
  Tag
} from 'lucide-react';

export default function ProductsPage({ setCurrentPage }) {
  // Active selected product line index
  const [selectedProductIndex, setSelectedProductIndex] = useState(1); // Default to COCO FUSE (Index 1)

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Comprehensive Product Lines Catalog Data matching the reference image layout
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
      flavors: [
        { name: 'Pure Added Minerals', color: '#00A8B5' },
        { name: 'Alkaline Mineral Water', color: '#003D5B' },
        { name: 'Custom Mineral Fortification', color: '#0B6B50' }
      ],
      packaging: '250ml, 350ml, 500ml, 1 Litre PET Bottle',
      format: 'Glass, PET & Eco Paperboard Line',
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
      flavors: [
        { name: 'Mango Refresh', color: '#F59E0B' }, // Yellow dot matching image
        { name: 'Watermelon Mint Reset', color: '#10B981' }, // Green dot matching image
        { name: 'Basil Chili Revive', color: '#EF4444' } // Red dot matching image
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
      
      {/* PRODUCT SELECTOR BAR AT TOP */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pb-4">
        <div className="flex items-center justify-between gap-4 text-xs font-medium text-[#65736C] pb-2 border-b border-[#DCE8E1]">
          <div className="flex items-center space-x-2">
            <button onClick={() => handleNavClick('home')} className="hover:text-[#073B2A] transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => handleNavClick('products')} className="hover:text-[#073B2A] transition-colors">
              Products
            </button>
            <span>/</span>
            <span className="text-[#073B2A] font-bold">{currentProduct.shortTitle}</span>
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {products.map((p, pIdx) => (
              <button
                key={p.id}
                onClick={() => setSelectedProductIndex(pIdx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedProductIndex === pIdx
                    ? 'bg-[#073B2A] text-white shadow-xs'
                    : 'bg-white text-[#65736C] hover:bg-[#EAF4F2] hover:text-[#073B2A] border border-[#DCE8E1]'
                }`}
              >
                {p.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONCEPT 5: DARK FOREST GREEN HERO BANNER MATCHING REFERENCE IMAGE EXACTLY */}
      <section className="bg-[#073B2A] text-white relative overflow-hidden shadow-md">
        
        {/* Ambient Water Splash & Botanical Texture Backdrop Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0B6B50]/30 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 min-h-[380px] sm:min-h-[420px] relative z-10 flex items-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
            
            {/* HERO LEFT: Text Information Matching Reference Image */}
            <div className="lg:col-span-7 space-y-3.5 max-w-[540px]">
              
              {/* White Category Badge Pill */}
              <div>
                <span className="inline-block px-3 py-1 bg-white text-[#073B2A] text-xs font-extrabold tracking-wider rounded-full shadow-2xs">
                  {currentProduct.categoryBadge}
                </span>
              </div>

              {/* Headline H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white uppercase leading-none">
                {currentProduct.title}
              </h1>

              {/* Sub-line */}
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-widest">
                {currentProduct.subtitle}
              </p>

              {/* Description Paragraph */}
              <p className="text-sm text-white/90 leading-relaxed font-normal pt-1 max-w-[500px]">
                {currentProduct.description}
              </p>

            </div>

            {/* HERO RIGHT: Product Bottle Visual Composition with Fruits & Splash Effects */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[280px] sm:min-h-[320px]">
              
              {/* Product Bottle Stage with Surrounding Photographic Fruit Elements */}
              <div className="relative w-full max-w-sm flex items-center justify-center">
                
                {/* Dynamic Water Splash Graphics Background */}
                <div className="absolute -inset-4 bg-[#00A8B5]/20 rounded-full filter blur-xl pointer-events-none"></div>

                {/* Actual Bottle Image */}
                <img
                  src={currentProduct.mainImage}
                  alt={currentProduct.title}
                  className="h-[280px] sm:h-[320px] lg:h-[340px] w-auto object-contain drop-shadow-2xl z-20 transition-transform duration-300 hover:scale-105"
                />

                {/* Fruit Decor Elements Surrounding Bottle */}
                <div className="absolute -bottom-2 -left-2 z-30 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-lg flex items-center space-x-1 text-2xl">
                  <span>🥥</span>
                  <span>🥭</span>
                  <span>🍉</span>
                </div>

                {/* Soft Shadow Disc */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-44 h-4 bg-black/40 rounded-full blur-md z-10"></div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3 COMPACT INFORMATION CARDS (MATCHING REFERENCE IMAGE EXACTLY) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: FLAVOUR VARIANTS */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4 hover:border-[#073B2A] transition-colors">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#073B2A]">
              FLAVOUR VARIANTS
            </h3>

            <div className="space-y-3 pt-1">
              {currentProduct.flavors.map((flv, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs font-bold text-[#17211D]">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 shadow-2xs"
                    style={{ backgroundColor: flv.color }}
                  ></span>
                  <span>{flv.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: PACKAGING & FORMATS */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4 hover:border-[#073B2A] transition-colors">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#073B2A]">
              PACKAGING &amp; FORMATS
            </h3>

            <div className="space-y-4 pt-1">
              <div className="flex items-center space-x-3 text-xs font-bold text-[#17211D]">
                <div className="w-8 h-8 rounded-lg bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-4 h-4 text-[#073B2A]" />
                </div>
                <span>{currentProduct.packaging}</span>
              </div>

              <div className="flex items-center space-x-3 text-xs font-bold text-[#17211D]">
                <div className="w-8 h-8 rounded-lg bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center shrink-0">
                  <Tag className="w-4 h-4 text-[#073B2A]" />
                </div>
                <span>{currentProduct.format}</span>
              </div>
            </div>
          </div>

          {/* CARD 3: KEY FEATURES */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4 hover:border-[#073B2A] transition-colors">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#073B2A]">
              KEY FEATURES
            </h3>

            <div className="space-y-2.5 pt-1">
              {currentProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs font-semibold text-[#17211D]">
                  <Check className="w-4 h-4 text-[#073B2A] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION & FORMULATION NOTE */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pb-12 space-y-3 text-center">
        
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
            <FileText className="w-4 h-4 text-[#073B2A]" />
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
