import React, { useState } from 'react';
import {
  Droplets,
  Apple,
  Sparkles,
  Zap,
  Package,
  ArrowRight,
  Check,
  Star,
  ShieldCheck,
  Award,
  CheckCircle2,
  Layers,
  Sparkle,
  ChevronRight,
  Crown
} from 'lucide-react';

export default function ProductsPage({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productCategories = [
    {
      id: '01',
      key: 'water',
      isCoreBusiness: true,
      name: '01 — Packaged Drinking Water',
      subtitle: 'Primary Core Business & Flagship Bottling Lines',
      shortTitle: 'Packaged Drinking Water',
      desc: 'Our primary manufacturing capability — ultra-purified packaged drinking water enriched with balanced minerals, produced on high-speed automated lines under multi-barrier Reverse Osmosis (RO), micro-filtration, and UV sterilization.',
      packagingFormat: 'Formats: Luxury Glass Bottles, PET & Eco-Friendly Paperboard Cartons (250ml, 350ml, 500ml, 1L)',
      image: '/images/uploaded/bottle_good_giving.jpg',
      altImages: ['/images/uploaded/bottle_ribbons_balloons.jpg', '/images/uploaded/bottle_hydro.jpg', '/images/uploaded/carton_lafayette.jpg'],
      b2bNote: 'Custom co-branding & private label bottling produced for Ribbons & Balloons The Cake Shop, Good Giving Water, Galeries Lafayette, luxury hotel chains, corporate headquarters, airlines, and fine dining.',
      flavors: ['Pure Added Minerals', 'Alkaline Mineral Water', 'Custom Mineral Formulations'],
      specs: [
        'Multi-barrier RO, Micro-filtration & UV sterilization',
        'Balanced mineral fortification (Magnesium, Potassium, Calcium)',
        'Private label logo artwork & custom bottle/carton printing',
        'Bulk case packaging in 24 & 48 bottle/carton configurations',
        'FSSAI & BIS quality compliant manufacturing',
        'Eco-friendly paperboard & premium glass/PET packaging options'
      ]
    },
    {
      id: '02',
      key: 'juices',
      isCoreBusiness: false,
      name: '02 — YOUNG MONK FRUIT SPLASH',
      subtitle: 'Fruit Beverage Product Line (1 Product, 3 Flavors)',
      shortTitle: 'Fruit Drinks & Juices',
      desc: 'A single complete B2B fruit beverage product line — YOUNG MONK FRUIT SPLASH, formulated with real fruit concentrates, Added B-Vitamins & Glucose energy in three signature flavor variants.',
      packagingFormat: 'Packaging Format: Single 3-Flavor PET Bottle Line (250ml)',
      image: '/images/uploaded/bottle_fruit_splash.jpg',
      b2bNote: 'Formulated with real fruit pulp & quality-tested fruit concentrates in 3 flavor variants.',
      flavors: ['Strawberry Raspberry (Red)', 'Apple Blueberry (Purple)', 'Orange Lime (Orange)'],
      specs: [
        'Flavor 1: Strawberry Raspberry (Red)',
        'Flavor 2: Apple Blueberry (Purple)',
        'Flavor 3: Orange Lime (Orange)',
        'Fortified with Added B-Vitamins & Natural Glucose',
        'Pasteurized thermal hold processing & B2B production ready'
      ]
    },
    {
      id: '03',
      key: 'flavoured',
      isCoreBusiness: false,
      name: '03 — TISORA™ HyTEA',
      subtitle: 'Hydration Ice Tea Product Line (1 Product, 2 Flavors)',
      shortTitle: 'Hydration Ice Tea',
      desc: 'A single functional hydration ice tea product line — TISORA™ HyTEA (India\'s First Hydration Ice Tea), formulated with natural tea extracts, low calorie stevia & khandsari sugar, and essential electrolytes.',
      packagingFormat: 'Packaging Format: Single 2-Flavor Ergonomic PET Bottle Line (250ml)',
      image: '/images/uploaded/bottle_tisora_pair.jpg',
      b2bNote: 'Low calorie smart hydration with essential electrolytes & natural caffeine.',
      flavors: ['Lemon Mint Sage (Green Cap)', 'Juicy Peach (White Cap)'],
      specs: [
        'Flavor 1: Lemon Mint Sage (Green Cap)',
        'Flavor 2: Juicy Peach (White Cap)',
        'Low Calorie Stevia & Khandsari Sugar formulation',
        'Essential Electrolyte blend & natural tea extracts'
      ]
    },
    {
      id: '04',
      key: 'functional',
      isCoreBusiness: false,
      name: '04 — COCO FUSE.',
      subtitle: 'Coconut Water Hydration Product Line (1 Product, 3 Flavors)',
      shortTitle: 'Coconut Water Hydration',
      desc: 'A single premium functional coconut water hydration product line — COCO FUSE. (Coconut Water + Fruit Hydration), featuring 0% Added Sugar, 0% Artificial Colours, and 0% Artificial Preservatives across 3 distinct flavor variants.',
      packagingFormat: 'Packaging Format: Single 3-Flavor Black Ergonomic PET Bottle Line (250ml)',
      image: '/images/uploaded/bottle_cocofuse_mango.jpg',
      altImages: ['/images/uploaded/bottle_cocofuse_watermelon.jpg', '/images/uploaded/bottle_cocofuse_basil.jpg'],
      b2bNote: 'Formulated with pure coconut water & natural fruit extracts (Low Calorie ~20 kcal per 100ml).',
      flavors: ['Mango Refresh', 'Watermelon Mint Reset', 'Basil Chili Revive'],
      specs: [
        'Flavor 1: MANGO REFRESH (Yellow Accent)',
        'Flavor 2: WATERMELON MINT RESET (Pink Accent)',
        'Flavor 3: BASIL CHILI REVIVE (Green Accent)',
        '0% Added Sugar • 0% Artificial Colours • 0% Preservatives',
        'Natural electrolyte coconut water base with fruit hydration'
      ]
    },
    {
      id: '05',
      key: 'basil-fresh',
      isCoreBusiness: false,
      name: '05 — BASIL FRESH',
      subtitle: 'Basil Seed Beverage Product Line (1 Product, 4 Flavors)',
      shortTitle: 'Basil Seed Beverage',
      desc: 'A single exotic basil seed beverage product line — BASIL FRESH (Basil Seed Drink), featuring suspended basil seeds in premium conical glass bottles across four vibrant fruit flavor profiles.',
      packagingFormat: 'Packaging Format: Conical Glass Bottles with Silver Crown Caps (250ml)',
      image: '/images/uploaded/bottle_basil_fresh.jpg',
      b2bNote: 'Suspended basil seed technology with high clarity glass bottling.',
      flavors: ['Pink Guava', 'Orange', 'Blueberry', 'Mango'],
      specs: [
        'Flavor 1: Pink Guava (Red/Pink)',
        'Flavor 2: Orange (Sun Gold)',
        'Flavor 3: Blueberry (Ocean Blue)',
        'Flavor 4: Mango (Golden Yellow)',
        'Suspended basil seed texture & natural digestion support'
      ]
    }
  ];

  const realDeliverables = [
    {
      title: 'GOOD GIVING WATER & RIBBONS & BALLOONS',
      category: 'Packaged Drinking Water (Core Business)',
      subtitle: 'Custom PET & Glass Bottling for Good Giving Water & Ribbons & Balloons The Cake Shop',
      image: '/images/uploaded/bottle_good_giving.jpg',
      tag: 'Water Core Business'
    },
    {
      title: 'COCO FUSE.',
      category: 'Coconut Water + Fruit Hydration (1 Product, 3 Flavors)',
      subtitle: 'Mango Refresh • Watermelon Mint Reset • Basil Chili Revive (0% Added Sugar)',
      image: '/images/uploaded/bottle_cocofuse_mango.jpg',
      tag: 'Coconut Hydration Line'
    },
    {
      title: 'YOUNG MONK FRUIT SPLASH',
      category: 'Fruit Beverage Product Line (1 Product, 3 Flavors)',
      subtitle: 'Strawberry Raspberry • Apple Blueberry • Orange Lime (With B-Vitamins)',
      image: '/images/uploaded/bottle_fruit_splash.jpg',
      tag: 'Fruit Beverage Line'
    },
    {
      title: 'BASIL FRESH',
      category: 'Basil Seed Drink (1 Product, 4 Flavors)',
      subtitle: 'Pink Guava • Orange • Blueberry • Mango (Glass Bottled)',
      image: '/images/uploaded/bottle_basil_fresh.jpg',
      tag: 'Basil Seed Line'
    },
    {
      title: 'TISORA™ HyTEA',
      category: 'Hydration Ice Tea (1 Product, 2 Flavors)',
      subtitle: 'Lemon Mint Sage & Juicy Peach (Electrolyte Hydration Ice Tea)',
      image: '/images/uploaded/bottle_tisora_pair.jpg',
      tag: 'Hydration Ice Tea'
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? productCategories
    : productCategories.filter(p => p.key === activeCategory);

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-20 bg-[#FAFBFD]">
      
      {/* LUXURY HERO HEADER SECTION */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-r from-[#002B40] via-[#003D5B] to-[#002B40] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#00A8B5]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Light Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8B5]/15 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10 bg-industrial-grid"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            
            {/* Core Business Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00A8B5] text-white text-xs font-extrabold uppercase tracking-[0.18em] shadow-md border border-white/20">
              <Crown className="w-4 h-4 fill-current text-white" />
              <span>PRIMARY CORE BUSINESS • PACKAGED DRINKING WATER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
              BEVERAGE PORTFOLIO &amp; PRODUCT LINES
            </h1>

            <p className="text-lg sm:text-2xl text-[#E6F7F8] font-medium leading-relaxed max-w-3xl">
              Specialized B2B beverage manufacturing with a primary focus on <strong className="text-white underline decoration-[#00A8B5] decoration-2 underline-offset-4 font-bold">Packaged Drinking Water</strong>, alongside customized client product lines like COCO FUSE. Coconut Water, Young Monk Fruit Splash, Tisora HyTEA, and Basil Fresh.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-gray-200 font-semibold max-w-3xl flex items-center space-x-3.5 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-[#00A8B5] shrink-0" />
              <span>Pure Foods &amp; Beverages manufactures products strictly on a B2B contract basis for corporate clients, luxury hotel chains, retailers, and private-label brands.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE BUSINESS FLAGSHIP SHOWCASE BANNER (PACKAGED DRINKING WATER) */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-br from-[#002B40] via-[#003D5B] to-[#001B2E] text-white rounded-3xl p-8 sm:p-12 border-2 border-[#00A8B5] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-lg bg-[#00A8B5]/25 text-[#00A8B5] text-xs font-mono font-extrabold uppercase tracking-widest border border-[#00A8B5]/40">
                <Award className="w-4 h-4 text-[#00A8B5]" />
                <span>FLAGSHIP MANUFACTURING CAPABILITY</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight">
                  HIGH-CAPACITY PACKAGED DRINKING WATER PRODUCTION
                </h2>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A8B5]">
                  PET Bottling • Luxury Glass • Eco-Friendly Paperboard Cartons
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#E6F7F8] leading-relaxed font-medium max-w-3xl">
                Packaged drinking water is our core business foundation. Our automated facility in Mahape MIDC Navi Mumbai is engineered for large-scale RO purification, mineral dosing, automated high-speed filling, and multi-format packaging for premier brands like Good Giving Water and Ribbons &amp; Balloons The Cake Shop.
              </p>

              {/* Luxury Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-bold uppercase text-[#00A8B5]">Packaging Formats</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">Glass, PET &amp; Cartons</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-bold uppercase text-[#00A8B5]">Bottle Volumes</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">250ml to 1 Litre</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-bold uppercase text-[#00A8B5]">Purification</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">RO + UV Sterilized</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-bold uppercase text-[#00A8B5]">Contract Terms</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">Turn-key B2B</span>
                </div>
              </div>
            </div>

            {/* Pedestal Product Showcase Container */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 border border-white/80 text-center space-y-4 w-full max-w-xs shadow-2xl hover:scale-[1.02] transition-transform">
                
                <div className="h-60 relative flex items-center justify-center bg-gradient-to-b from-[#F5F8FA] via-[#EBF3F5] to-[#E0EFF2] rounded-2xl border border-[#DCE6ED] p-3 overflow-hidden">
                  <img
                    src="/images/uploaded/bottle_good_giving.jpg"
                    alt="GOOD GIVING WATER Packaged Drinking Water PET Bottle"
                    className="max-h-full w-auto object-contain drop-shadow-xl"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] block">
                    Core Business Real Deliverable
                  </span>
                  <h4 className="text-base font-extrabold text-[#003D5B] uppercase tracking-tight">
                    GOOD GIVING WATER
                  </h4>
                  <p className="text-[11px] text-[#4A6070] font-medium">
                    Purified Drinking Water with Added Minerals
                  </p>
                </div>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#003D5B] hover:bg-[#00A8B5] rounded-xl transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  <span>INQUIRE WATER VOLUMES</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER BUTTONS (LUXURY NAV TABS) */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-start gap-3 pb-6 border-b border-[#DCE6ED]">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all ${
              activeCategory === 'all'
                ? 'bg-[#003D5B] text-white shadow-md border-b-2 border-[#00A8B5]'
                : 'bg-white text-[#4A6070] hover:text-[#003D5B] hover:bg-[#E6F7F8] border border-[#DCE6ED]'
            }`}
          >
            All Product Lines (5)
          </button>
          
          {productCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all flex items-center space-x-2 ${
                activeCategory === cat.key
                  ? 'bg-[#003D5B] text-white shadow-md border-b-2 border-[#00A8B5]'
                  : cat.isCoreBusiness
                  ? 'bg-[#E6F7F8] text-[#003D5B] font-extrabold border-2 border-[#00A8B5]'
                  : 'bg-white text-[#4A6070] hover:text-[#003D5B] hover:bg-[#E6F7F8] border border-[#DCE6ED]'
              }`}
            >
              {cat.isCoreBusiness && <Star className="w-3.5 h-3.5 text-[#00A8B5] fill-current" />}
              <span>{cat.shortTitle}</span>
            </button>
          ))}
        </div>
      </section>

      {/* LUXURY EDITORIAL PRODUCT STAGE SHOWCASE CARDS */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {filteredProducts.map((prod) => {
          return (
            <div
              key={prod.id}
              className={`rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300 group ${
                prod.isCoreBusiness
                  ? 'bg-white border-2 border-[#00A8B5] shadow-2xl ring-4 ring-[#00A8B5]/10'
                  : 'bg-white border border-[#DCE6ED] shadow-sm hover:shadow-2xl hover:border-[#003D5B]/40 hover:-translate-y-1'
              }`}
            >
              {/* Pedestal Image Stage Container */}
              <div className={`lg:col-span-5 relative border-b lg:border-b-0 lg:border-r min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-8 ${
                prod.isCoreBusiness
                  ? 'bg-gradient-to-b from-[#E6F7F8] via-[#F0F5F8] to-[#E0EFF2] border-[#00A8B5]/30'
                  : 'bg-gradient-to-b from-[#F5F8FA] via-[#EBF3F5] to-[#E0EFF2] border-[#DCE6ED]'
              }`}>
                
                {/* Category Label TOP LEFT */}
                <div className="absolute top-6 left-6 z-10 flex flex-col space-y-2">
                  <span className={`px-4 py-1.5 rounded-xl text-[10.5px] font-extrabold uppercase tracking-widest shadow-md block ${
                    prod.isCoreBusiness
                      ? 'bg-[#003D5B] text-white border border-[#00A8B5]'
                      : 'bg-[#003D5B] text-white'
                  }`}>
                    {prod.shortTitle}
                  </span>

                  {prod.isCoreBusiness && (
                    <span className="px-3.5 py-1 bg-[#00A8B5] text-white rounded-lg text-[9.5px] font-extrabold uppercase tracking-widest shadow-sm inline-flex items-center space-x-1">
                      <Crown className="w-3.5 h-3.5 fill-current" />
                      <span>PRIMARY CORE BUSINESS</span>
                    </span>
                  )}
                </div>

                {/* Complete bottle visible on pedestal */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-[88%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04] drop-shadow-2xl z-10"
                  />
                  {/* Subtle Studio Pedestal Shadow Disc */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 h-4 bg-black/15 rounded-full blur-md z-0"></div>
                </div>

              </div>

              {/* Product Info Col */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-block bg-[#E6F7F8] text-[#003D5B] font-mono text-xs font-bold px-3 py-1 rounded-lg">
                        CATEGORY {prod.id}
                      </span>
                      {prod.isCoreBusiness && (
                        <span className="px-3 py-1 rounded-lg bg-[#00A8B5]/15 text-[#003D5B] text-xs font-extrabold border border-[#00A8B5]/30">
                          MAIN BOTTLING FACILITY LINE
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003D5B] uppercase tracking-tight">
                      {prod.name}
                    </h2>
                    <p className="text-xs font-extrabold text-[#00A8B5] uppercase tracking-wider mt-1">
                      {prod.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-[#4A6070] leading-relaxed font-medium">
                    {prod.desc}
                  </p>

                  {/* Flavor Variants Pill Box */}
                  {prod.flavors && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#003D5B] block">
                        Available Product Flavor Variants:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {prod.flavors.map((flv, fIdx) => (
                          <span
                            key={fIdx}
                            className="px-3 py-1.5 rounded-xl bg-[#E6F7F8] text-[#003D5B] text-xs font-extrabold border border-[#BDE7EA] shadow-2xs"
                          >
                            {flv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* B2B Packaging Format Spec Box */}
                  <div className={`p-4 rounded-2xl space-y-2 border ${
                    prod.isCoreBusiness
                      ? 'bg-white border-[#00A8B5]/40 shadow-xs'
                      : 'bg-[#FAFBFD] border-[#DCE6ED]'
                  }`}>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase text-[#003D5B]">
                      <Package className="w-4 h-4 text-[#00A8B5]" />
                      <span>Packaging Format &amp; Volume Specifications</span>
                    </div>
                    <p className="text-xs text-[#4A6070] font-medium">
                      {prod.packagingFormat}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {prod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-xs font-semibold text-[#1A2B35]">
                        <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#4A6070] italic pt-1">
                    * {prod.b2bNote}
                  </p>
                </div>

                {/* B2B Enquiry Button */}
                <div className="pt-5 border-t border-[#DCE6ED]">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className={`inline-flex items-center px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                      prod.isCoreBusiness
                        ? 'text-white bg-[#003D5B] hover:bg-[#00A8B5] shadow-lg'
                        : 'text-[#003D5B] hover:text-[#00A8B5] bg-[#E6F7F8] hover:bg-[#BDE7EA]'
                    }`}
                  >
                    <span>Inquire About {prod.shortTitle} Packaging &amp; Contract Terms</span>
                    <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* LUXURY REAL DELIVERABLES & CLIENT PRODUCTS SHOWCASE GRID */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E6F7F8] text-[#003D5B] text-xs font-extrabold uppercase tracking-wider border border-[#BDE7EA]">
            <Layers className="w-4 h-4 text-[#00A8B5]" />
            <span>REAL MANUFACTURED PRODUCTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#003D5B] uppercase tracking-tight">
            REAL PRIVATE LABEL DELIVERABLES PORTFOLIO
          </h2>
          <p className="text-sm text-[#4A6070] max-w-3xl font-medium">
            Actual private label products manufactured at our Mahape MIDC Navi Mumbai facility across packaged drinking water, COCO FUSE. coconut hydration, Young Monk Fruit Splash, Tisora HyTEA, and Basil Fresh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {realDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#DCE6ED] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00A8B5] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="h-64 bg-gradient-to-b from-[#F5F8FA] via-[#EBF3F5] to-[#E0EFF2] p-5 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-[#003D5B] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg z-10 shadow-sm border border-white/20">
                  {item.tag}
                </span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                />
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-2">
                <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#00A8B5] block">
                  {item.category}
                </span>
                <h4 className="text-base font-extrabold text-[#003D5B] leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-[#4A6070] font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#002B40] via-[#003D5B] to-[#002B40] text-white border border-[#00A8B5]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              Looking for Packaged Water or Private Label Bottling?
            </h3>
            <p className="text-sm text-[#E6F7F8] max-w-xl font-medium">
              We help you configure bottle designs, label artwork requirements, and water formulation specs tailored for your brand launch.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contract-manufacturing')}
            className="px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-[#003D5B] bg-[#E6F7F8] hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 shrink-0"
          >
            EXPLORE PRIVATE LABEL WATER
          </button>
        </div>
      </section>
    </div>
  );
}
