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
  Shield
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
      categoryBadge: 'CATEGORY 01 — CORE BUSINESS',
      title: '01 — PACKAGED DRINKING WATER',
      subtitle: 'PRIMARY CORE BUSINESS & BOTTLING FACILITY LINES',
      shortTitle: 'Packaged Drinking Water',
      description: 'Our primary manufacturing capability — ultra-purified packaged drinking water enriched with balanced minerals, produced on high-speed automated lines under multi-barrier Reverse Osmosis (RO), micro-filtration, and UV sterilization.',
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
      packaging: '250ml, 350ml, 500ml, 1 Litre PET, Glass & Cartons',
      format: 'Glass Bottles, PET & Eco-Friendly Paperboard Cartons',
      features: [
        'Multi-barrier RO, Micro-filtration & UV sterilization',
        'Balanced mineral fortification (Magnesium, Potassium, Calcium)',
        'Private label logo artwork & custom bottle printing',
        'FSSAI & BIS quality compliant manufacturing',
        'Bulk case packaging in 24 & 48 bottle/carton configurations',
        'Eco-friendly paperboard & premium glass packaging options'
      ],
      formulationNote: 'Formulated with purified water and essential added minerals (Magnesium, Potassium, Calcium).',
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
      description: 'A single premium functional coconut water hydration product combining pure coconut water with natural fruit hydration across three distinct flavour variants.',
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
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 3-Flavour Product Line',
      features: [
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
      description: 'A single complete B2B fruit beverage product line formulated with real fruit concentrates, Added B-Vitamins, and Glucose energy across 3 signature flavor variants.',
      mainImage: '/images/uploaded/bottle_fruit_splash.jpg',
      fruitElements: [
        { emoji: '🍓', label: 'Strawberry' },
        { emoji: '🫐', label: 'Blueberry' },
        { emoji: '🍊', label: 'Orange' },
        { emoji: '🍋', label: 'Lime' }
      ],
      flavors: [
        { name: 'Strawberry Raspberry (Red)', color: '#EF4444' },
        { name: 'Apple Blueberry (Purple)', color: '#8B5CF6' },
        { name: 'Orange Lime (Orange)', color: '#F97316' }
      ],
      packaging: '250ml PET Bottle',
      format: 'Single 3-Flavour Product Line',
      features: [
        'Fortified with Added B-Vitamins & Glucose',
        'Pasteurized thermal hold processing',
        'Real fruit concentrates & natural pulp',
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
      description: "India's First Hydration Ice Tea product line formulated with natural tea extracts, low calorie stevia & khandsari sugar, and essential electrolytes.",
      mainImage: '/images/uploaded/bottle_tisora_pair.jpg',
      fruitElements: [
        { emoji: '🍑', label: 'Juicy Peach' },
        { emoji: '🍋', label: 'Lemon Mint' },
        { emoji: '🍃', label: 'Sage Infusion' }
      ],
      flavors: [
        { name: 'Lemon Mint Sage (Green Cap)', color: '#10B981' },
        { name: 'Juicy Peach (White Cap)', color: '#F97316' }
      ],
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 2-Flavour Product Line',
      features: [
        'Essential Electrolyte hydration blend',
        'Low calorie stevia & khandsari sugar',
        'Natural tea extracts & caffeine',
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
      format: 'Single 4-Flavour Product Line',
      features: [
        'Suspended basil seed texture technology',
        'High-clarity glass bottling with crown caps',
        'Natural fruit flavor profiles',
        'Natural digestive support'
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

  const realDeliverables = [
    {
      title: 'GOOD GIVING WATER & RIBBONS & BALLOONS',
      category: 'Packaged Drinking Water (Core Business)',
      subtitle: 'Custom PET & Glass Bottling for Good Giving Water & Ribbons & Balloons The Cake Shop',
      image: '/images/uploaded/bottle_good_giving.jpg',
      tag: 'Water Core Business',
      flavorBadges: ['Added Minerals', 'Custom PET & Glass']
    },
    {
      title: 'COCO FUSE.',
      category: 'Coconut Water + Fruit Hydration',
      subtitle: 'Mango Refresh • Watermelon Mint Reset • Basil Chili Revive (0% Sugar)',
      image: '/images/uploaded/bottle_cocofuse_mango.jpg',
      tag: 'Coconut Hydration',
      flavorBadges: ['Mango', 'Watermelon', 'Basil Chili']
    },
    {
      title: 'YOUNG MONK FRUIT SPLASH',
      category: 'Fruit Beverage Product Line',
      subtitle: 'Strawberry Raspberry • Apple Blueberry • Orange Lime (With B-Vitamins)',
      image: '/images/uploaded/bottle_fruit_splash.jpg',
      tag: 'Fruit Beverage Line',
      flavorBadges: ['Strawberry', 'Blueberry', 'Orange Lime']
    },
    {
      title: 'BASIL FRESH',
      category: 'Basil Seed Drink',
      subtitle: 'Pink Guava • Orange • Blueberry • Mango (Glass Bottled)',
      image: '/images/uploaded/bottle_basil_fresh.jpg',
      tag: 'Basil Seed Line',
      flavorBadges: ['Pink Guava', 'Orange', 'Blueberry', 'Mango']
    },
    {
      title: 'TISORA™ HyTEA',
      category: 'Hydration Ice Tea',
      subtitle: 'Lemon Mint Sage & Juicy Peach (Electrolyte Hydration Ice Tea)',
      image: '/images/uploaded/bottle_tisora_pair.jpg',
      tag: 'Hydration Ice Tea',
      flavorBadges: ['Lemon Mint Sage', 'Juicy Peach']
    },
  ];

  const currentProduct = products[selectedProductIndex];

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFBFD] text-[#17211D] font-sans antialiased space-y-16 lg:space-y-24">
      
      {/* CONCEPT 5: DARK FOREST GREEN RICH HERO BANNER */}
      <section className="bg-gradient-to-r from-[#05291D] via-[#073B2A] to-[#05291D] text-white relative overflow-hidden shadow-xl border-b border-[#0B6B50]/30">
        
        {/* Ambient Background Lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0B6B50]/30 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-industrial-grid"></div>

        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 min-h-[500px] lg:min-h-[560px] flex flex-col justify-between relative z-10 space-y-8">
          
          {/* Top Navigation & Product Selector Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-white/80 pb-4 border-b border-white/15">
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

            {/* Product Line Selector Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DCE8E1] mr-1 hidden lg:inline">
                Select Product Line:
              </span>
              {products.map((p, pIdx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProductIndex(pIdx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                    selectedProductIndex === pIdx
                      ? 'bg-white text-[#073B2A] shadow-md ring-2 ring-[#0B6B50]'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {p.isCoreBusiness && <Star className="w-3 h-3 text-[#EAB308] fill-current" />}
                  <span>{p.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Hero Content 2-Column Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* HERO LEFT: Information */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#0B6B50] text-white text-xs font-mono font-extrabold tracking-widest uppercase shadow-sm border border-white/20">
                <span>{currentProduct.categoryBadge}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                {currentProduct.title}
              </h1>

              {/* Sub-tagline */}
              <p className="text-xs sm:text-sm font-extrabold text-[#DCE8E1] uppercase tracking-[0.2em]">
                {currentProduct.subtitle}
              </p>

              {/* Concise Description */}
              <p className="text-base sm:text-lg text-white/95 leading-relaxed font-medium max-w-2xl">
                {currentProduct.description}
              </p>

              {/* Fruit Element Micro Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {currentProduct.fruitElements.map((elem, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-xs"
                  >
                    <span className="text-sm">{elem.emoji}</span>
                    <span>{elem.label}</span>
                  </span>
                ))}
              </div>

            </div>

            {/* HERO RIGHT: Product Bottle Stage */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
              <div className="relative w-full max-w-md h-full flex items-center justify-center">
                
                {/* Stage Light Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B6B50]/50 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

                {/* Product Bottle Image */}
                <img
                  src={currentProduct.mainImage}
                  alt={currentProduct.title}
                  className="h-[340px] sm:h-[400px] lg:h-[440px] w-auto object-contain drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                />

                {/* Soft Pedestal Shadow Disc */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/35 rounded-full blur-md z-0"></div>
              </div>
            </div>

          </div>

          {/* Footer Bar Link */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
            <button
              onClick={() => handleNavClick('products')}
              className="hover:text-white transition-colors flex items-center space-x-1 font-bold"
            >
              <span>← Back to All Product Categories</span>
            </button>
            <span className="text-xs font-mono text-[#DCE8E1]">PURE FOODS &amp; BEVERAGES • MAHAPE MIDC NAVI MUMBAI</span>
          </div>

        </div>
      </section>

      {/* INFORMATION SECTION IMMEDIATELY BELOW HERO (3 RICH HORIZONTAL CARDS) */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CARD 1: FLAVOUR VARIANTS */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#DCE8E1] shadow-sm hover:shadow-xl hover:border-[#0B6B50] transition-all space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-[#EAF4F2] text-[#073B2A]">
                <Sparkles className="w-5 h-5 text-[#0B6B50]" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#073B2A]">
                FLAVOUR VARIANTS
              </h3>
            </div>

            <div className="space-y-3 pt-1">
              {currentProduct.flavors.map((flv, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#17211D] p-2.5 rounded-xl bg-[#FAFBFD] border border-[#DCE8E1]">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: flv.color }}
                  ></span>
                  <span>{flv.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: PACKAGING & FORMATS */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#DCE8E1] shadow-sm hover:shadow-xl hover:border-[#0B6B50] transition-all space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-[#EAF4F2] text-[#073B2A]">
                <Package className="w-5 h-5 text-[#0B6B50]" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#073B2A]">
                PACKAGING &amp; FORMATS
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#DCE8E1]">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0B6B50] block">
                  BOTTLE SPECIFICATION
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#073B2A] mt-0.5 block">
                  {currentProduct.packaging}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#DCE8E1]">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0B6B50] block">
                  PRODUCTION FORMAT
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#073B2A] mt-0.5 block">
                  {currentProduct.format}
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3: KEY FEATURES */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#DCE8E1] shadow-sm hover:shadow-xl hover:border-[#0B6B50] transition-all space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-[#EAF4F2] text-[#073B2A]">
                <CheckCircle2 className="w-5 h-5 text-[#0B6B50]" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#073B2A]">
                KEY FEATURES
              </h3>
            </div>

            <div className="space-y-2.5 pt-1">
              {currentProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-[#17211D]">
                  <Check className="w-4 h-4 text-[#0B6B50] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION & FORMULATION NOTE */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="h-[52px] px-8 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#073B2A] hover:bg-[#0B6B50] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 group w-full sm:w-auto"
          >
            <span>DISCUSS THIS PRODUCT</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="h-[52px] px-8 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] border-2 border-[#073B2A] rounded-xl transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <FileText className="w-4 h-4 text-[#0B6B50]" />
            <span>REQUEST PRODUCT DETAILS</span>
          </button>
        </div>

        <p className="text-xs text-[#65736C] italic font-medium">
          *{currentProduct.formulationNote}
        </p>
      </section>

      {/* PRODUCT SPECIFICATIONS & TECHNICAL DATA TABLE */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE8E1] shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B6B50] block">
              Technical Data Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073B2A] uppercase tracking-tight">
              {currentProduct.shortTitle} Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProduct.specs.map((spec, sIdx) => (
              <div key={sIdx} className="p-4 sm:p-5 rounded-2xl bg-[#FAFBFD] border border-[#DCE8E1] flex items-center justify-between">
                <span className="text-xs font-bold text-[#65736C] uppercase tracking-wider">{spec.label}</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#073B2A] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PRIVATE LABEL DELIVERABLES PORTFOLIO GRID */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF4F2] text-[#073B2A] text-xs font-extrabold uppercase tracking-wider border border-[#DCE8E1]">
            <Layers className="w-4 h-4 text-[#0B6B50]" />
            <span>REAL MANUFACTURED PRODUCTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#073B2A] uppercase tracking-tight">
            REAL PRIVATE LABEL DELIVERABLES PORTFOLIO
          </h2>
          <p className="text-sm text-[#65736C] max-w-3xl font-medium">
            Actual private label products manufactured at our Mahape MIDC Navi Mumbai facility across packaged drinking water, COCO FUSE. coconut hydration, Young Monk Fruit Splash, Tisora HyTEA, and Basil Fresh.
          </p>
        </div>

        {/* 5-COLUMN EDITORIAL PORTFOLIO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {realDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#DCE8E1] border-t-4 border-t-[#073B2A] hover:border-t-[#0B6B50] hover:border-[#0B6B50] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Studio Pedestal Image Stage */}
              <div className="h-72 sm:h-80 bg-gradient-to-b from-[#F7FAFC] via-[#EEF4F7] to-[#E2EEF2] p-5 flex items-center justify-center relative overflow-hidden border-b border-[#DCE8E1]/80">
                <span className="absolute top-4 left-4 bg-[#073B2A] text-white text-[9.5px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-xl z-10 shadow-md border border-white/20">
                  {item.tag}
                </span>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-36 h-3 bg-black/15 rounded-full blur-md z-0"></div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.05] drop-shadow-xl z-10 relative"
                />
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0B6B50] block leading-none">
                    {item.category}
                  </span>
                  
                  <h4 className="text-base sm:text-lg font-extrabold text-[#073B2A] group-hover:text-[#0B6B50] transition-colors leading-tight uppercase tracking-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-[#65736C] font-medium leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {item.flavorBadges && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.flavorBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#EAF4F2] text-[#073B2A] text-[9.5px] font-extrabold border border-[#DCE8E1]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-3 border-t border-[#DCE8E1]">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-wider text-[#073B2A] group-hover:text-[#0B6B50] transition-colors"
                  >
                    <span>INQUIRE PRODUCT LINE</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B ENQUIRY CALL TO ACTION BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#05291D] via-[#073B2A] to-[#05291D] text-white border border-[#0B6B50]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              HAVE A BEVERAGE REQUIREMENT OR RFQ?
            </h3>
            <p className="text-sm text-[#EAF4F2] max-w-xl font-medium">
              Tell us what you want to manufacture. Connect directly with our facility team in Mahape MIDC Navi Mumbai for technical discussions &amp; project estimates.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 shrink-0 flex items-center space-x-2"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 text-[#073B2A]" />
          </button>
        </div>
      </section>

    </div>
  );
}
