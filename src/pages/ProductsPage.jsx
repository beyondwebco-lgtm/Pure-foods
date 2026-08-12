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
  Sparkles,
  ArrowLeft,
  Check,
  FileText,
  Mail
} from 'lucide-react';

export default function ProductsPage({ setCurrentPage }) {
  // Active product index selection (Default to Coco Fuse or Packaged Water)
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Comprehensive B2B Product Lines Catalog Data
  const products = [
    {
      id: '01',
      key: 'water',
      isCoreBusiness: true,
      categoryBadge: 'CATEGORY 01 — CORE BUSINESS',
      title: '01 — PACKAGED DRINKING WATER',
      subtitle: 'PRIMARY CORE BUSINESS & BOTTLING FACILITY LINES',
      shortTitle: 'Packaged Drinking Water',
      description: 'Our primary manufacturing capability — high-purity packaged drinking water enriched with balanced minerals, produced on high-speed automated lines under multi-barrier Reverse Osmosis (RO), micro-filtration, and UV sterilization.',
      mainImage: '/images/uploaded/bottle_good_giving.jpg',
      thumbnails: [
        { name: 'Good Giving Water (PET)', image: '/images/uploaded/bottle_good_giving.jpg' },
        { name: 'Ribbons & Balloons (PET)', image: '/images/uploaded/bottle_ribbons_balloons.jpg' },
        { name: 'HYDRO Glass (Mineral Water)', image: '/images/uploaded/bottle_hydro.jpg' },
        { name: 'Galeries Lafayette (Carton)', image: '/images/uploaded/carton_lafayette.jpg' }
      ],
      flavors: ['Pure Added Minerals', 'Alkaline Mineral Water', 'Custom Mineral Fortification'],
      packaging: '250ml, 350ml, 500ml, 1 Litre',
      format: 'PET Bottles, Luxury Glass & Paperboard Cartons',
      highlights: [
        'Multi-barrier RO, Micro-filtration & UV sterilization',
        'Balanced mineral fortification (Magnesium, Potassium, Calcium)',
        'Private label logo artwork & custom bottle/carton printing',
        'Bulk case packaging in 24 & 48 bottle/carton configurations',
        'FSSAI & BIS quality compliant manufacturing',
        'Eco-friendly carton & premium glass/PET packaging options'
      ],
      formulationNote: 'Formulated with purified water and essential added minerals (Magnesium, Potassium, Sodium).',
      specs: [
        { label: 'Product Category', value: 'Packaged Drinking Water (Core Business)' },
        { label: 'Purification Standard', value: 'Multi-Barrier RO + Micro-filtration + UV' },
        { label: 'Packaging Options', value: 'PET Bottles, Crown Glass & Eco Cartons' },
        { label: 'Volume Offerings', value: '250ml, 350ml, 500ml, 1000ml (1L)' },
        { label: 'Quality Certification', value: 'FSSAI & BIS Compliant Facility' },
        { label: 'Primary Clients', value: 'Good Giving Water, Ribbons & Balloons, Galeries Lafayette' }
      ]
    },
    {
      id: '04',
      key: 'cocofuse',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 04 — FUNCTIONAL HYDRATION',
      title: '04 — COCO FUSE.',
      subtitle: 'COCONUT WATER HYDRATION PRODUCT LINE',
      shortTitle: 'COCO FUSE. Coconut Water',
      description: 'A single premium functional coconut water hydration product combining pure coconut water with natural fruit hydration across three distinct flavor variants.',
      mainImage: '/images/uploaded/bottle_cocofuse_mango.jpg',
      thumbnails: [
        { name: 'Mango Refresh', image: '/images/uploaded/bottle_cocofuse_mango.jpg' },
        { name: 'Watermelon Mint Reset', image: '/images/uploaded/bottle_cocofuse_watermelon.jpg' },
        { name: 'Basil Chili Revive', image: '/images/uploaded/bottle_cocofuse_basil.jpg' }
      ],
      flavors: ['Mango Refresh', 'Watermelon Mint Reset', 'Basil Chili Revive'],
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 3-Flavour Product Line',
      highlights: [
        'Natural electrolyte coconut water base',
        'Mango Refresh flavor variant',
        'Watermelon Mint Reset flavor variant',
        'Basil Chili Revive flavor variant',
        '0% Added Sugar',
        '0% Artificial Colours',
        '0% Artificial Preservatives'
      ],
      formulationNote: 'Formulated with pure coconut water & natural fruit extracts (Low Calorie ~20 kcal per 100ml).',
      specs: [
        { label: 'Product Category', value: 'Coconut Water + Fruit Hydration' },
        { label: 'Flavor Variants', value: 'Mango Refresh, Watermelon Mint, Basil Chili' },
        { label: 'Packaging Format', value: '250ml Black Ergonomic PET Bottle' },
        { label: 'Nutritional Profile', value: '0% Added Sugar, 0% Artificial Preservatives' },
        { label: 'Calorie Count', value: 'Low Calorie (~20 kcal per 100ml)' },
        { label: 'Manufacturing Ready', value: 'Turn-key B2B Commercial Bottling' }
      ]
    },
    {
      id: '02',
      key: 'fruit-splash',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 02 — FRUIT BEVERAGES',
      title: '02 — YOUNG MONK FRUIT SPLASH',
      subtitle: 'FRUIT BEVERAGE PRODUCT LINE (1 PRODUCT, 3 FLAVORS)',
      shortTitle: 'Young Monk Fruit Splash',
      description: 'A single complete B2B fruit beverage product line formulated with real fruit concentrates, Added B-Vitamins, and Glucose energy in three signature flavor variants.',
      mainImage: '/images/uploaded/bottle_fruit_splash.jpg',
      thumbnails: [
        { name: 'Young Monk Fruit Splash Trio', image: '/images/uploaded/bottle_fruit_splash.jpg' }
      ],
      flavors: ['Strawberry Raspberry (Red)', 'Apple Blueberry (Purple)', 'Orange Lime (Orange)'],
      packaging: '250ml PET Bottle',
      format: 'Single 3-Flavour Product Line',
      highlights: [
        'Flavor 1: Strawberry Raspberry (Red)',
        'Flavor 2: Apple Blueberry (Purple)',
        'Flavor 3: Orange Lime (Orange)',
        'Fortified with Added B-Vitamins & Glucose',
        'Pasteurized thermal hold processing',
        'Commercial B2B production ready'
      ],
      formulationNote: 'Formulated with real fruit pulp, natural fruit concentrates, and B-complex vitamins.',
      specs: [
        { label: 'Product Category', value: 'Fruit Drinks & Juices' },
        { label: 'Flavor Variants', value: 'Strawberry Raspberry, Apple Blueberry, Orange Lime' },
        { label: 'Packaging Format', value: '250ml Printed PET Bottle Line' },
        { label: 'Active Ingredients', value: 'Added B-Vitamins & Natural Glucose' },
        { label: 'Thermal Processing', value: 'Pasteurized Thermal Hold' },
        { label: 'Commercial Terms', value: 'Private Label & Contract Bottling' }
      ]
    },
    {
      id: '03',
      key: 'hytea',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 03 — HYDRATION ICE TEA',
      title: '03 — TISORA™ HyTEA',
      subtitle: "INDIA'S FIRST HYDRATION ICE TEA PRODUCT LINE",
      shortTitle: 'TISORA™ HyTEA',
      description: 'A single functional hydration ice tea product line formulated with natural tea extracts, low-calorie stevia & khandsari sugar, and essential electrolytes.',
      mainImage: '/images/uploaded/bottle_tisora_pair.jpg',
      thumbnails: [
        { name: 'HyTEA Pair (Peach & Lemon)', image: '/images/uploaded/bottle_tisora_pair.jpg' },
        { name: 'Lemon Mint Sage', image: '/images/uploaded/bottle_tisora_lemon.jpg' },
        { name: 'Juicy Peach', image: '/images/uploaded/bottle_tisora_peach.jpg' }
      ],
      flavors: ['Lemon Mint Sage (Green Cap)', 'Juicy Peach (White Cap)'],
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 2-Flavour Product Line',
      highlights: [
        'Flavor 1: Lemon Mint Sage (Green Cap)',
        'Flavor 2: Juicy Peach (White Cap)',
        'Essential Electrolyte hydration blend',
        'Low calorie formulation with Stevia & Khandsari sugar',
        'Natural tea extracts & natural caffeine',
        'Smart hydration beverage profile'
      ],
      formulationNote: 'Formulated with natural tea extracts, essential electrolytes, stevia, and khandsari sugar.',
      specs: [
        { label: 'Product Category', value: 'Functional Hydration Ice Tea' },
        { label: 'Flavor Variants', value: 'Lemon Mint Sage & Juicy Peach' },
        { label: 'Packaging Format', value: '250ml Form-Fitting PET Bottle' },
        { label: 'Sweetener System', value: 'Stevia & Khandsari Sugar' },
        { label: 'Functional Base', value: 'Electrolyte Hydration Blend' },
        { label: 'Commercial Bottling', value: 'Turn-key Contract Bottling' }
      ]
    },
    {
      id: '05',
      key: 'basil-fresh',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 05 — BASIL SEED BEVERAGE',
      title: '05 — BASIL FRESH',
      subtitle: 'BASIL SEED BEVERAGE PRODUCT LINE (1 PRODUCT, 4 FLAVORS)',
      shortTitle: 'Basil Fresh Seed Drink',
      description: 'A single exotic basil seed beverage product line featuring suspended basil seeds in premium conical glass bottles across four vibrant fruit flavor profiles.',
      mainImage: '/images/uploaded/bottle_basil_fresh.jpg',
      thumbnails: [
        { name: 'Basil Fresh 4 Flavors', image: '/images/uploaded/bottle_basil_fresh.jpg' },
        { name: 'Glass Bottling Line Batch', image: '/images/uploaded/bottle_basil_glass_line.jpg' }
      ],
      flavors: ['Pink Guava', 'Orange', 'Blueberry', 'Mango'],
      packaging: '250ml Conical Glass Bottle',
      format: 'Single 4-Flavour Product Line',
      highlights: [
        'Flavor 1: Pink Guava (Red/Pink)',
        'Flavor 2: Orange (Sun Gold)',
        'Flavor 3: Blueberry (Ocean Blue)',
        'Flavor 4: Mango (Golden Yellow)',
        'Suspended basil seed texture technology',
        'Premium glass bottling with crown caps'
      ],
      formulationNote: 'Suspended basil seed technology in high-clarity glass bottles with natural fruit flavors.',
      specs: [
        { label: 'Product Category', value: 'Basil Seed Beverage' },
        { label: 'Flavor Variants', value: 'Pink Guava, Orange, Blueberry, Mango' },
        { label: 'Packaging Format', value: '250ml Conical Glass Bottle with Crown Cap' },
        { label: 'Textural Feature', value: 'Suspended Natural Basil Seeds' },
        { label: 'Glass Line Support', value: 'Automated High-Clarity Glass Bottling' },
        { label: 'Distribution Ready', value: 'B2B Private Label Batch Production' }
      ]
    }
  ];

  const currentProduct = products[selectedProductIndex];
  
  // Active displayed image (main image or selected thumbnail)
  const activeImage = currentProduct.thumbnails[selectedVariantIndex]?.image || currentProduct.mainImage;

  return (
    <div className="pt-28 sm:pt-32 pb-20 bg-[#FAFBFD] text-[#17211D] font-sans antialiased">
      
      {/* 1. BREADCRUMB & PRODUCT NAVIGATION BAR */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#DCE8E1] pb-4">
          
          {/* Subtle Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-medium text-[#65736C]">
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

          {/* Product Selector Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#65736C] mr-1 hidden md:inline">
              Select Line:
            </span>
            {products.map((p, pIdx) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProductIndex(pIdx);
                  setSelectedVariantIndex(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                  selectedProductIndex === pIdx
                    ? 'bg-[#073B2A] text-white shadow-sm'
                    : p.isCoreBusiness
                    ? 'bg-[#EAF4F2] text-[#073B2A] border border-[#0B6B50]'
                    : 'bg-white text-[#65736C] hover:bg-[#EAF4F2] hover:text-[#073B2A] border border-[#DCE8E1]'
                }`}
              >
                {p.isCoreBusiness && <Star className="w-3 h-3 text-[#0B6B50] fill-current" />}
                <span>{p.shortTitle}</span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 2. PRODUCT HERO SECTION (COMPACT 40/60 COMPOSITION — NO GIANT CARD) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: COMPACT PRODUCT VISUAL SHOWCASE AREA (40% Width) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Refined Showcase Podium Container (Height 460-520px) */}
            <div className="relative w-full h-[440px] sm:h-[480px] rounded-2xl bg-[#EAF4F2] border border-[#DCE8E1] flex items-center justify-center p-6 overflow-hidden shadow-xs">
              
              {/* Product Category Badge at Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest shadow-2xs ${
                  currentProduct.isCoreBusiness
                    ? 'bg-[#073B2A] text-white border border-[#0B6B50]'
                    : 'bg-[#073B2A] text-white'
                }`}>
                  {currentProduct.shortTitle}
                </span>
              </div>

              {/* Core Business Banner Pill */}
              {currentProduct.isCoreBusiness && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 bg-[#0B6B50] text-white rounded-lg text-[9.5px] font-bold uppercase tracking-wider inline-flex items-center space-x-1 shadow-xs">
                    <Crown className="w-3 h-3 fill-current" />
                    <span>FLAGSHIP</span>
                  </span>
                </div>
              )}

              {/* Product Bottle Image (Proportional contain, ~280-360px tall) */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={activeImage}
                  alt={currentProduct.title}
                  className="max-h-[84%] w-auto object-contain drop-shadow-xl transition-all duration-300 z-10"
                />
                {/* Subtle Soft Pedestal Shadow Disc Underneath */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-36 h-3 bg-black/15 rounded-full blur-md z-0"></div>
              </div>
            </div>

            {/* Thumbnail Variant Selector Gallery (3-4 Thumbnails, 64-76px size) */}
            {currentProduct.thumbnails.length > 1 && (
              <div className="flex items-center space-x-3 pt-1">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#65736C]">
                  Variants:
                </span>
                <div className="flex items-center space-x-2.5">
                  {currentProduct.thumbnails.map((thumb, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => setSelectedVariantIndex(tIdx)}
                      className={`w-16 h-16 rounded-xl border p-1.5 bg-white transition-all overflow-hidden flex items-center justify-center ${
                        selectedVariantIndex === tIdx
                          ? 'border-2 border-[#073B2A] shadow-md ring-2 ring-[#0B6B50]/20'
                          : 'border-[#DCE8E1] opacity-70 hover:opacity-100 hover:border-[#0B6B50]'
                      }`}
                      title={thumb.name}
                    >
                      <img
                        src={thumb.image}
                        alt={thumb.name}
                        className="max-h-full w-auto object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: PRODUCT INFORMATION AREA (60% Width) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Badge & Titles */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-md bg-[#EAF4F2] text-[#073B2A] text-xs font-mono font-bold border border-[#DCE8E1]">
                  {currentProduct.categoryBadge}
                </span>
                {currentProduct.isCoreBusiness && (
                  <span className="px-2.5 py-0.5 rounded-md bg-[#0B6B50]/15 text-[#073B2A] text-xs font-extrabold border border-[#0B6B50]/30">
                    PRIMARY CORE BUSINESS
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B2A] uppercase tracking-tight leading-tight">
                {currentProduct.title}
              </h1>

              <p className="text-xs sm:text-sm font-extrabold text-[#0B6B50] uppercase tracking-wider">
                {currentProduct.subtitle}
              </p>
            </div>

            {/* Concise Product Description */}
            <p className="text-base text-[#65736C] leading-relaxed font-medium max-w-[600px]">
              {currentProduct.description}
            </p>

            {/* Available Flavor Variants Pills */}
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#073B2A] block">
                AVAILABLE FLAVOURS
              </span>
              <div className="flex flex-wrap gap-2">
                {currentProduct.flavors.map((flv, fIdx) => (
                  <div
                    key={fIdx}
                    className="h-[40px] px-4 rounded-xl bg-[#EAF4F2] text-[#073B2A] text-xs font-bold border border-[#DCE8E1] flex items-center justify-center shadow-2xs"
                  >
                    {flv}
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Packaging & Formats Row */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-[#DCE8E1]">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0B6B50] block">
                  PACKAGING
                </span>
                <span className="text-xs font-bold text-[#17211D] mt-0.5 block">
                  {currentProduct.packaging}
                </span>
              </div>
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0B6B50] block">
                  FORMATS
                </span>
                <span className="text-xs font-bold text-[#17211D] mt-0.5 block">
                  {currentProduct.format}
                </span>
              </div>
            </div>

            {/* Product Highlights 2-Column Check List */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#073B2A] block">
                KEY SPECIFICATIONS &amp; HIGHLIGHTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {currentProduct.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center space-x-2 text-xs font-semibold text-[#17211D]">
                    <Check className="w-4 h-4 text-[#0B6B50] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulation Note */}
            <p className="text-xs text-[#65736C] italic">
              * {currentProduct.formulationNote}
            </p>

            {/* Enquiry CTA Buttons */}
            <div className="pt-4 border-t border-[#DCE8E1] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="h-[50px] px-7 text-xs font-bold uppercase tracking-wider text-white bg-[#073B2A] hover:bg-[#0B6B50] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>DISCUSS THIS PRODUCT</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="h-[50px] px-6 text-xs font-bold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] border border-[#DCE8E1] rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 text-[#0B6B50]" />
                <span>REQUEST SPECIFICATIONS</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PRODUCT SPECIFICATIONS & TECHNICAL DATA TABLE */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE8E1] shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B6B50] block">
              Technical Overview
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#073B2A] uppercase">
              PRODUCT SPECIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProduct.specs.map((spec, sIdx) => (
              <div key={sIdx} className="p-4 rounded-xl bg-[#FAFBFD] border border-[#DCE8E1] flex items-center justify-between">
                <span className="text-xs font-bold text-[#65736C] uppercase tracking-wider">{spec.label}</span>
                <span className="text-xs font-bold text-[#073B2A] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING & CONTRACT BOTTLING SERVICES CARDS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B6B50] block">
            Capabilities Support
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#073B2A] uppercase">
            MANUFACTURING &amp; BOTTLING OPTIONS
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-[#DCE8E1] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h4 className="text-sm font-bold text-[#073B2A] uppercase">Formulation &amp; R&amp;D</h4>
            <p className="text-xs text-[#65736C] leading-relaxed">Recipe scaling, mineral fortification &amp; flavor emulsion testing.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DCE8E1] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h4 className="text-sm font-bold text-[#073B2A] uppercase">Bottle &amp; Label Customization</h4>
            <p className="text-xs text-[#65736C] leading-relaxed">Custom PET molds, luxury glass selection &amp; artwork printing.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DCE8E1] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h4 className="text-sm font-bold text-[#073B2A] uppercase">Batch Trial Runs</h4>
            <p className="text-xs text-[#65736C] leading-relaxed">Small pilot batch runs to validate shelf life &amp; packaging integrity.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DCE8E1] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h4 className="text-sm font-bold text-[#073B2A] uppercase">Commercial Bottling</h4>
            <p className="text-xs text-[#65736C] leading-relaxed">Automated high-capacity filling &amp; case packing ready for distribution.</p>
          </div>
        </div>
      </section>

      {/* 5. B2B ENQUIRY CALL TO ACTION BANNER */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#073B2A] text-white border border-[#0B6B50]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              HAVE A BEVERAGE IDEA OR RFQ REQUIREMENT?
            </h3>
            <p className="text-sm text-[#EAF4F2] max-w-xl font-medium">
              Tell us what you want to manufacture. Connect directly with our facility team in Mahape MIDC Navi Mumbai for technical discussions &amp; project estimates.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] rounded-xl shadow-md transition-all duration-200 shrink-0 flex items-center space-x-2"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 text-[#073B2A]" />
          </button>
        </div>
      </section>

    </div>
  );
}
