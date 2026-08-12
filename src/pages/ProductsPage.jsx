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
  Sparkle
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
      name: '01 — Packaged Drinking Water (Primary Core Business)',
      shortTitle: 'Packaged Drinking Water',
      desc: 'Our primary manufacturing expertise — premium purified packaged drinking water with added minerals produced on high-capacity automated lines with multi-barrier Reverse Osmosis (RO) & UV sterilization.',
      packagingFormat: 'Glass Bottles, PET & Eco-Friendly Paperboard Cartons (250ml, 350ml, 500ml, 1 Litre)',
      image: '/images/uploaded/bottle_good_giving.jpg',
      altImages: ['/images/uploaded/bottle_ribbons_balloons.jpg', '/images/uploaded/bottle_hydro.jpg', '/images/uploaded/carton_lafayette.jpg'],
      b2bNote: 'Custom co-branding & private label packaging produced for Ribbons & Balloons The Cake Shop, Good Giving Water, Galeries Lafayette, luxury hotels, corporate offices, airlines, and fine dining.',
      specs: [
        'Multi-barrier RO, Micro-filtration & UV sterilization',
        'Custom mineral fortification (Magnesium, Potassium, Calcium)',
        'Private label logo artwork & custom bottle/carton printing',
        'Bulk case packaging in 24 & 48 bottle/carton configurations',
        'FSSAI & BIS quality compliant manufacturing',
        'Eco-friendly carton & premium glass/PET packaging options'
      ]
    },
    {
      id: '02',
      key: 'juices',
      isCoreBusiness: false,
      name: '02 — YOUNG MONK FRUIT SPLASH (1 Product, 3 Flavors)',
      shortTitle: 'Fruit Drinks & Juices',
      desc: 'A single complete B2B fruit beverage product line — YOUNG MONK FRUIT SPLASH, formulated with real fruit concentrates, Added B-Vitamins & Glucose energy in three signature flavor variants.',
      packagingFormat: 'Packaging Format: Single 3-Flavor PET Bottle Line (250ml)',
      image: '/images/uploaded/bottle_fruit_splash.jpg',
      b2bNote: 'Formulated with real fruit pulp & quality-tested fruit concentrates in 3 flavor variants.',
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
      name: '03 — TISORA™ HyTEA (1 Product, 2 Flavors)',
      shortTitle: 'Hydration Ice Tea',
      desc: 'A single functional hydration ice tea product line — TISORA™ HyTEA (India\'s First Hydration Ice Tea), formulated with natural tea extracts, low calorie stevia & khandsari sugar, and essential electrolytes.',
      packagingFormat: 'Packaging Format: Single 2-Flavor Ergonomic PET Bottle Line (250ml)',
      image: '/images/uploaded/bottle_tisora_pair.jpg',
      b2bNote: 'Low calorie smart hydration with essential electrolytes & natural caffeine.',
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
      name: '04 — COCO FUSE. (1 Product, 3 Flavors)',
      shortTitle: 'Coconut Water Hydration',
      desc: 'A single premium functional coconut water hydration product line — COCO FUSE. (Coconut Water + Fruit Hydration), featuring 0% Added Sugar, 0% Artificial Colours, and 0% Artificial Preservatives across 3 distinct flavor variants.',
      packagingFormat: 'Packaging Format: Single 3-Flavor Black Ergonomic PET Bottle Line (250ml)',
      image: '/images/uploaded/bottle_cocofuse_mango.jpg',
      altImages: ['/images/uploaded/bottle_cocofuse_watermelon.jpg', '/images/uploaded/bottle_cocofuse_basil.jpg'],
      b2bNote: 'Formulated with pure coconut water & natural fruit extracts (Low Calorie ~20 kcal per 100ml).',
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
      name: '05 — BASIL FRESH (1 Product, 4 Flavors)',
      shortTitle: 'Basil Seed Beverage',
      desc: 'A single exotic basil seed beverage product line — BASIL FRESH (Basil Seed Drink), featuring suspended basil seeds in premium conical glass bottles across four vibrant fruit flavor profiles.',
      packagingFormat: 'Packaging Format: Conical Glass Bottles with Silver Crown Caps (250ml)',
      image: '/images/uploaded/bottle_basil_fresh.jpg',
      b2bNote: 'Suspended basil seed technology with high clarity glass bottling.',
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
    <div className="space-y-16 lg:space-y-24 pt-28 sm:pt-36 pb-16">
      
      {/* HERO SECTION WITH CORE BUSINESS FOCUS BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#003D5B] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#002B40] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            
            {/* Core Business Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#00A8B5] text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Star className="w-3.5 h-3.5 fill-current text-white" />
              <span>PRIMARY CORE BUSINESS • PACKAGED DRINKING WATER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              OUR PRODUCTS
            </h1>

            <p className="text-lg sm:text-2xl text-[#E6F7F8] font-medium leading-relaxed max-w-3xl">
              Specialized B2B beverage manufacturing with a primary focus on <strong className="text-white underline decoration-[#00A8B5] decoration-2 underline-offset-4">Packaged Drinking Water</strong>, alongside customized lines like COCO FUSE. Coconut Water, Young Monk Fruit Splash, Tisora HyTEA, and Basil Fresh.
            </p>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-gray-200 font-semibold max-w-2xl flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#00A8B5] shrink-0" />
              <span>Pure Foods &amp; Beverages manufactures products strictly on a B2B contract basis for corporate clients, luxury hotel chains, retailers, and private-label brands.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE BUSINESS HIGHLIGHT FEATURE BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-r from-[#003D5B] via-[#004B6E] to-[#003D5B] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#00A8B5] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#00A8B5]/30 text-[#00A8B5] text-[11px] font-mono font-bold uppercase tracking-wider border border-[#00A8B5]/40">
                <Award className="w-3.5 h-3.5 text-[#00A8B5]" />
                <span>CORE BUSINESS MANUFACTURING CAPABILITY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                HIGH-CAPACITY PACKAGED DRINKING WATER PRODUCTION
              </h2>

              <p className="text-sm sm:text-base text-[#E6F7F8] leading-relaxed font-medium max-w-3xl">
                Packaged drinking water is our core foundation. Our facility in Mahape MIDC Navi Mumbai is engineered for large-scale RO purification, mineral dosing, automated filling, and multi-format packaging in PET bottles (like Good Giving Water &amp; Ribbons &amp; Balloons), luxury glass, and eco-friendly cartons.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <span className="block text-xs font-bold uppercase text-[#00A8B5]">Formats</span>
                  <span className="text-xs font-semibold text-white">Glass, PET &amp; Carton</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <span className="block text-xs font-bold uppercase text-[#00A8B5]">Volume</span>
                  <span className="text-xs font-semibold text-white">250ml to 1 Litre</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <span className="block text-xs font-bold uppercase text-[#00A8B5]">Quality</span>
                  <span className="text-xs font-semibold text-white">RO + UV Sterilized</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-center">
                  <span className="block text-xs font-bold uppercase text-[#00A8B5]">Service</span>
                  <span className="text-xs font-semibold text-white">Turn-key B2B</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white text-center space-y-3 w-full max-w-xs shadow-2xl">
                <div className="h-52 flex items-center justify-center bg-[#F0F5F8] rounded-xl border border-[#DCE6ED] p-2">
                  <img
                    src="/images/uploaded/bottle_good_giving.jpg"
                    alt="GOOD GIVING WATER Packaged Drinking Water PET Bottle"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] block">
                    Real Client Bottling
                  </span>
                  <h4 className="text-sm font-extrabold text-[#003D5B]">
                    GOOD GIVING WATER
                  </h4>
                </div>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#003D5B] hover:bg-[#00A8B5] rounded-xl transition-colors"
                >
                  Inquire Water Volumes
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-start gap-2.5 pb-4 border-b border-[#DCE6ED]">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
              activeCategory === 'all'
                ? 'bg-[#003D5B] text-white shadow-sm'
                : 'bg-white text-[#4A6070] hover:text-[#003D5B] hover:bg-[#E6F7F8] border border-[#DCE6ED]'
            }`}
          >
            All Categories (5)
          </button>
          
          {productCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center space-x-1.5 ${
                activeCategory === cat.key
                  ? 'bg-[#003D5B] text-white shadow-sm'
                  : cat.isCoreBusiness
                  ? 'bg-[#E6F7F8] text-[#003D5B] font-extrabold border-2 border-[#00A8B5]'
                  : 'bg-white text-[#4A6070] hover:text-[#003D5B] hover:bg-[#E6F7F8] border border-[#DCE6ED]'
              }`}
            >
              {cat.isCoreBusiness && <Star className="w-3 h-3 text-[#00A8B5] fill-current" />}
              <span>{cat.shortTitle}</span>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GALLERY CARDS WITH FEATURED CORE BUSINESS CARD HIGHLIGHT */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {filteredProducts.map((prod) => {
          return (
            <div
              key={prod.id}
              className={`rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300 group ${
                prod.isCoreBusiness
                  ? 'bg-gradient-to-r from-white via-[#FAFBFD] to-[#E6F7F8]/40 border-2 border-[#00A8B5] shadow-xl ring-4 ring-[#00A8B5]/10'
                  : 'bg-white border border-[#DCE6ED] shadow-2xs hover:shadow-card-hover hover:border-[#003D5B]/40 hover:-translate-y-1'
              }`}
            >
              {/* Image Stage Container */}
              <div className={`lg:col-span-5 relative border-b lg:border-b-0 lg:border-r min-h-[340px] sm:min-h-[380px] flex items-center justify-center p-6 ${
                prod.isCoreBusiness
                  ? 'bg-gradient-to-b from-[#E6F7F8] via-[#F0F5F8] to-white border-[#00A8B5]/30'
                  : 'bg-gradient-to-b from-[#F0F5F8] to-[#E6F7F8]/50 border-[#DCE6ED]'
              }`}>
                
                {/* Category Label TOP LEFT */}
                <div className="absolute top-6 left-6 z-10 flex flex-col space-y-2">
                  <span className={`px-3.5 py-1.5 rounded-xl text-[10.5px] font-bold uppercase tracking-widest shadow-2xs block ${
                    prod.isCoreBusiness
                      ? 'bg-[#003D5B] text-white border border-[#00A8B5]'
                      : 'bg-[#003D5B] text-white'
                  }`}>
                    {prod.shortTitle}
                  </span>

                  {prod.isCoreBusiness && (
                    <span className="px-3 py-1 bg-[#00A8B5] text-white rounded-lg text-[9.5px] font-extrabold uppercase tracking-widest shadow-sm inline-flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>PRIMARY CORE BUSINESS</span>
                    </span>
                  )}
                </div>

                {/* Main Product Image */}
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="max-h-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Product Info Col */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-block bg-[#E6F7F8] text-[#003D5B] font-mono text-xs font-bold px-2.5 py-0.5 rounded-md">
                        CATEGORY {prod.id}
                      </span>
                      {prod.isCoreBusiness && (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#00A8B5]/15 text-[#003D5B] text-xs font-extrabold border border-[#00A8B5]/30">
                          MAIN MANUFACTURING LINE
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003D5B] uppercase tracking-tight">
                      {prod.name}
                    </h2>
                  </div>

                  <p className="text-base text-[#4A6070] leading-relaxed font-medium">
                    {prod.desc}
                  </p>

                  {/* B2B Packaging Format Spec Box */}
                  <div className={`p-4 rounded-xl space-y-2 border ${
                    prod.isCoreBusiness
                      ? 'bg-white border-[#00A8B5]/40 shadow-xs'
                      : 'bg-[#FAFBFD] border-[#DCE6ED]'
                  }`}>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase text-[#003D5B]">
                      <Package className="w-4 h-4 text-[#00A8B5]" />
                      <span>Packaging Format &amp; Volume Possibilities</span>
                    </div>
                    <p className="text-xs text-[#4A6070] font-medium">
                      {prod.packagingFormat}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
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
                <div className="pt-4 border-t border-[#DCE6ED]">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className={`inline-flex items-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                      prod.isCoreBusiness
                        ? 'text-white bg-[#003D5B] hover:bg-[#00A8B5] shadow-md'
                        : 'text-[#003D5B] hover:text-[#00A8B5]'
                    }`}
                  >
                    <span>Inquire About {prod.shortTitle} Packaging &amp; Contract Terms</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* REAL DELIVERABLES & CLIENT PRODUCTS SHOWCASE GRID */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#E6F7F8] text-[#003D5B] text-xs font-bold uppercase tracking-wider border border-[#BDE7EA]">
            <Layers className="w-3.5 h-3.5 text-[#00A8B5]" />
            <span>REAL MANUFACTURED PRODUCTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#003D5B] uppercase">
            REAL PRIVATE LABEL DELIVERABLES PORTFOLIO
          </h2>
          <p className="text-sm text-[#4A6070] max-w-3xl">
            Actual private label products manufactured at our Mahape MIDC Navi Mumbai facility across packaged drinking water, COCO FUSE. coconut hydration, Young Monk Fruit Splash, Tisora HyTEA, and Basil Fresh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {realDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DCE6ED] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#00A8B5] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="h-64 bg-gradient-to-b from-[#F0F5F8] to-[#E6F7F8]/50 p-4 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-[#003D5B] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md z-10">
                  {item.tag}
                </span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="p-5 space-y-2">
                <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#00A8B5] block">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#003D5B] text-white border border-[#002B40] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold uppercase">
              Looking for Packaged Water or Private Label Bottling?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              We help you configure bottle designs, label artwork requirements, and water formulation specs tailored for your brand launch.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contract-manufacturing')}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#003D5B] bg-[#E6F7F8] hover:bg-white rounded-xl shadow-md transition-colors shrink-0"
          >
            EXPLORE PRIVATE LABEL WATER
          </button>
        </div>
      </section>
    </div>
  );
}
