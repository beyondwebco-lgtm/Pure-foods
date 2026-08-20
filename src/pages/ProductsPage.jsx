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
  Check,
  FileText,
  Sparkles,
  Droplets,
  Filter,
  Eye,
  X,
  Maximize2,
  HeartPulse,
  Utensils
} from 'lucide-react';

export default function ProductsPage({ setCurrentPage }) {
  // Active selected product tab index (0 = Water, 1 = Fruit Splash, 2 = HyTea, 3 = Coco Fuse, 4 = Basil Fresh, 5 = OOO, 6 = Apple Cider Vinegar)
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [stageViewMode, setStageViewMode] = useState('bottle'); // 'bottle' or 'poster'

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Comprehensive Product Lines Catalog Data (Strict Numerical Sequence: 01 to 05)
  const products = [
    {
      id: '01',
      sectionId: 'product-01',
      key: 'water',
      isCoreBusiness: true,
      categoryBadge: 'CATEGORY 01 — PRIMARY CORE BUSINESS',
      title: '01 — PACKAGED DRINKING WATER',
      subtitle: 'PRIMARY CORE BUSINESS & BOTTLING FACILITY LINES',
      shortTitle: 'Packaged Drinking Water',
      description: 'Our primary manufacturing capability — ultra-purified packaged drinking water enriched with balanced minerals, produced on high-speed automated lines under multi-barrier Reverse Osmosis (RO) & UV sterilization.',
      mainImage: '/images/uploaded/bottle_good_giving.jpg',
      flavors: ['Pure Added Minerals', 'Alkaline Mineral Water', 'Custom Mineral Fortification'],
      packaging: '250ml, 350ml, 500ml, 1L (PET, Glass & Cartons)',
      format: 'PET Bottles, Glass & Paperboard Cartons',
      features: [
        'Multi-barrier RO, Micro-filtration & UV sterilization',
        'Balanced mineral fortification (Magnesium, Potassium, Calcium)',
        'Private label logo artwork & custom bottle printing',
        'FSSAI & BIS quality compliant manufacturing'
      ],
      specs: [
        { label: 'Product Category', value: 'Packaged Drinking Water (Core Business)' },
        { label: 'Purification Standard', value: 'Multi-Barrier RO + UV Sterilized' },
        { label: 'Volume Offerings', value: '250ml, 350ml, 500ml, 1000ml (1L)' },
        { label: 'Primary Clients', value: 'Good Giving Water, Ribbons & Balloons, Galeries Lafayette' }
      ]
    },
    {
      id: '02',
      sectionId: 'product-02',
      key: 'fruit-splash',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 02 — FRUIT BEVERAGES',
      title: '02 — YOUNG MONK FRUIT SPLASH',
      subtitle: 'FRUIT BEVERAGE PRODUCT LINE (1 PRODUCT, 3 FLAVORS)',
      shortTitle: 'Young Monk Fruit Splash',
      description: 'A single complete B2B fruit beverage product line formulated with real fruit concentrates, Added B-Vitamins, and Glucose energy across 3 signature flavor variants.',
      mainImage: '/images/uploaded/bottle_fruit_splash.jpg',
      flavors: ['Strawberry Raspberry (Red)', 'Apple Blueberry (Purple)', 'Orange Lime (Orange)'],
      packaging: '250ml PET Bottle',
      format: 'Single 3-Flavour Product Line',
      features: [
        'Fortified with Added B-Vitamins & Glucose',
        'Pasteurized thermal hold processing',
        'Real fruit concentrates & natural pulp',
        'Commercial B2B production ready'
      ],
      specs: [
        { label: 'Product Category', value: 'Fruit Drinks & Juices' },
        { label: 'Flavor Variants', value: 'Strawberry Raspberry, Apple Blueberry, Orange Lime' },
        { label: 'Packaging Format', value: '250ml Printed PET Bottle Line' },
        { label: 'Active Ingredients', value: 'Added B-Vitamins & Natural Glucose' }
      ]
    },
    {
      id: '03',
      sectionId: 'product-03',
      key: 'hytea',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 03 — HYDRATION ICE TEA',
      title: '03 — TISORA™ HyTEA',
      subtitle: "INDIA'S FIRST HYDRATION ICE TEA PRODUCT LINE",
      shortTitle: 'TISORA™ HyTEA',
      description: "India's First Hydration Ice Tea product line formulated with natural tea extracts, low calorie stevia & khandsari sugar, and essential electrolytes.",
      mainImage: '/images/uploaded/bottle_tisora_pair.jpg',
      flavors: ['Lemon Mint Sage (Green Cap)', 'Juicy Peach (White Cap)'],
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 2-Flavour Product Line',
      features: [
        'Essential Electrolyte hydration blend',
        'Low calorie stevia & khandsari sugar',
        'Natural tea extracts & caffeine',
        'Smart hydration beverage profile'
      ],
      specs: [
        { label: 'Product Category', value: 'Functional Hydration Ice Tea' },
        { label: 'Flavor Variants', value: 'Lemon Mint Sage & Juicy Peach' },
        { label: 'Packaging Format', value: '250ml Form-Fitting PET Bottle' },
        { label: 'Sweetener System', value: 'Stevia & Khandsari Sugar' }
      ]
    },
    {
      id: '04',
      sectionId: 'product-04',
      key: 'cocofuse',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 04 — FUNCTIONAL HYDRATION',
      title: '04 — COCO FUSE.',
      subtitle: 'COCONUT WATER HYDRATION PRODUCT LINE',
      shortTitle: 'COCO FUSE. Coconut Water',
      description: 'A single premium functional coconut water hydration product combining pure coconut water with natural fruit hydration across three distinct flavour variants.',
      mainImage: '/images/uploaded/bottle_cocofuse_mango.jpg',
      flavors: ['Mango Refresh', 'Watermelon Mint Reset', 'Basil Chili Revive'],
      packaging: '250ml Ergonomic PET Bottle',
      format: 'Single 3-Flavour Product Line',
      features: [
        'Natural electrolyte coconut water base',
        '0% Added Sugar',
        '0% Artificial Colours',
        '0% Artificial Preservatives'
      ],
      specs: [
        { label: 'Product Category', value: 'Coconut Water + Fruit Hydration' },
        { label: 'Flavor Variants', value: 'Mango Refresh, Watermelon Mint, Basil Chili' },
        { label: 'Packaging Format', value: '250ml Black Ergonomic PET Bottle' },
        { label: 'Nutritional Profile', value: '0% Added Sugar, 0% Artificial Preservatives' }
      ]
    },
    {
      id: '05',
      sectionId: 'product-05',
      key: 'basil-fresh',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 05 — BASIL SEED BEVERAGE',
      title: '05 — BASIL FRESH',
      subtitle: 'BASIL SEED BEVERAGE PRODUCT LINE (1 PRODUCT, 4 FLAVORS)',
      shortTitle: 'Basil Fresh Seed Drink',
      description: 'An exotic basil seed beverage product line featuring suspended basil seeds in premium conical glass bottles across four vibrant fruit flavor profiles.',
      mainImage: '/images/uploaded/bottle_basil_fresh.jpg',
      flavors: ['Pink Guava', 'Orange', 'Blueberry', 'Mango'],
      packaging: '250ml Conical Glass Bottle',
      format: 'Single 4-Flavour Product Line',
      features: [
        'Suspended basil seed texture technology',
        'High-clarity glass bottling with crown caps',
        'Natural fruit flavor profiles',
        'Natural digestive support'
      ],
      specs: [
        { label: 'Product Category', value: 'Basil Seed Beverage' },
        { label: 'Flavor Variants', value: 'Pink Guava, Orange, Blueberry, Mango' },
        { label: 'Packaging Format', value: '250ml Conical Glass Bottle with Crown Cap' },
        { label: 'Textural Feature', value: 'Suspended Natural Basil Seeds' }
      ]
    },
    {
      id: '06',
      sectionId: 'product-06',
      key: 'flavoured-beverages',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 06 — FLAVOURED BEVERAGES',
      title: '06 — OOO FLAVOURED BEVERAGES',
      subtitle: 'FLAVOURED BEVERAGE PRODUCT LINE (LEMON, PAN & JEERA)',
      shortTitle: 'OOO Flavoured Beverages',
      description: 'Refreshing classic and customized flavoured beverages formulated with food-grade emulsions, natural extracts, and balanced sweetness across eco-friendly cartons and bottle formats.',
      mainImage: '/images/uploaded/carton_ooo.jpg',
      flavors: ['Classic Lemon', 'Pan Masala Infusion', 'Jeera Masala', 'Custom Spice Profiles'],
      packaging: '250ml & 350ml Cartons / PET Bottles',
      format: 'Carton & Bottle Packaging Solutions',
      features: [
        'Precision flavor dosing & liquid syrup blending',
        'Food-grade botanical & spice extracts',
        'Eco-friendly paperboard carton & PET bottle formats',
        'FSSAI compliant high-speed automated filling'
      ],
      specs: [
        { label: 'Product Category', value: 'Flavoured Beverages' },
        { label: 'Flavor Variants', value: 'Lemon, Pan Masala, Jeera & Custom Flavours' },
        { label: 'Packaging Format', value: '250ml & 350ml Cartons & PET Bottles' },
        { label: 'Shelf Life', value: '6 Months (Ambient Storage)' }
      ]
    },
    {
      id: '07',
      sectionId: 'product-07',
      key: 'apple-cider-vinegar',
      isCoreBusiness: false,
      categoryBadge: 'CATEGORY 07 — HEALTH & WELLNESS',
      title: '07 — PURE PRESS APPLE CIDER VINEGAR',
      subtitle: 'REFINED FOR COOKING. TRUSTED FOR HEALTH.',
      shortTitle: 'Pure Press Apple Cider Vinegar',
      description: '100% Natural Fermented Product made from the finest quality apples. Refined & Pure — supports digestion, weight management, blood sugar control, and culinary marinades.',
      mainImage: '/images/uploaded/bottle_pure_press.png',
      posterImage: '/images/uploaded/poster_apple_cider.jpg',
      flavors: ['100% Natural Fermented Apple Cider'],
      packaging: '500ml PET Bottle',
      format: '500ml Ergonomic PET Bottle',
      healthBenefits: [
        { name: 'Boosts Digestion', desc: 'Improves gut health & metabolism' },
        { name: 'Weight Management', desc: 'Supports natural fat burning' },
        { name: 'Blood Sugar Control', desc: 'Helps manage sugar levels' }
      ],
      culinaryUses: [
        'Add to salads for tangy freshness',
        'Use in marinades for meats & veggies',
        'Mix with honey + warm water for a morning health drink',
        'Perfect for pickles, sauces & chutneys'
      ],
      tagline: "Nature's Goodness in Every Drop!",
      features: [
        '100% Natural Fermented Product from finest apples',
        'Refined & Pure — Perfect for cooking and wellness',
        'Multi-purpose: digestion, weight management & immunity',
        'Packed under strict hygiene & FSSAI safety standards'
      ],
      specs: [
        { label: 'Brand Name', value: 'PURE PRESS' },
        { label: 'Product Type', value: 'Refined Apple Cider Vinegar' },
        { label: 'Pack Size', value: '500 mL PET Bottle' },
        { label: 'Shelf Life', value: '12 Months' },
        { label: 'Quality Mark', value: 'Tested Certified' },
        { label: 'Inquiries', value: 'Purefoods.bev@gmail.com | +91 9022477709' }
      ]
    }
  ];

  const currentTabProduct = products[activeTab];

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFBFD] text-[#17211D] font-sans antialiased space-y-16 lg:space-y-20">
      
      {/* 1. HERO HEADER BANNER & CORE BUSINESS HIGHLIGHT */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-r from-[#05291D] via-[#073B2A] to-[#002B40] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#0B6B50]/40 shadow-2xl relative overflow-hidden space-y-6">
          
          <div className="relative z-10 max-w-4xl space-y-4">
            {/* Core Business Badge Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B6B50] text-white text-xs font-extrabold uppercase tracking-widest border border-white/20 shadow-sm">
              <Crown className="w-4 h-4 fill-current text-white" />
              <span>PRIMARY CORE BUSINESS • PACKAGED DRINKING WATER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
              BEVERAGE PORTFOLIO &amp; PRODUCTS
            </h1>

            <p className="text-base sm:text-xl text-[#DCE8E1] font-medium leading-relaxed max-w-3xl">
              High-capacity B2B bottling facility in Mahape MIDC Navi Mumbai, specializing in <strong className="text-white underline decoration-[#00A8B5] decoration-2 underline-offset-4 font-bold">Packaged Drinking Water</strong> alongside custom client lines like Young Monk Fruit Splash, Tisora HyTEA, COCO FUSE., and Basil Fresh.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-gray-200 font-semibold max-w-3xl flex items-center space-x-3 shadow-md">
              <ShieldCheck className="w-5 h-5 text-[#00A8B5] shrink-0" />
              <span>Pure Foods &amp; Beverages manufactures products strictly on a B2B contract basis for corporate clients, luxury hotel chains, retailers, and private-label brands.</span>
            </div>
          </div>

          {/* Quick Anchor Scroll Bar */}
          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DCE8E1] mr-1">
              Quick Jump To Product Line:
            </span>
            {products.map((p, pIdx) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveTab(pIdx);
                  scrollToSection(p.sectionId);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === pIdx
                    ? 'bg-white text-[#073B2A] shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                }`}
              >
                {p.isCoreBusiness && <Star className="w-3.5 h-3.5 text-[#EAB308] fill-current" />}
                <span>{p.shortTitle}</span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE FEATURED STAGE */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
        
        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 pb-2 border-b border-[#DCE8E1]">
          {products.map((p, pIdx) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(pIdx)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === pIdx
                  ? 'bg-[#073B2A] text-white shadow-md'
                  : p.isCoreBusiness
                  ? 'bg-[#EAF4F2] text-[#073B2A] font-extrabold border border-[#0B6B50]'
                  : 'bg-white text-[#65736C] hover:text-[#073B2A] hover:bg-[#EAF4F2] border border-[#DCE8E1]'
              }`}
            >
              {p.isCoreBusiness && <Star className="w-3.5 h-3.5 text-[#0B6B50] fill-current" />}
              <span>{p.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Featured Product Stage Container */}
        <div className="bg-white rounded-3xl border border-[#DCE8E1] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* LEFT: Studio Pedestal Stage with Dual View Mode (Bottle vs Official Flyer) */}
          <div className="lg:col-span-5 relative bg-gradient-to-b from-[#F5F8FA] via-[#EBF3F5] to-[#E0EFF2] p-6 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-[#DCE8E1] min-h-[360px] sm:min-h-[420px]">
            
            <div className="w-full flex items-center justify-between z-10">
              <div className="flex flex-col space-y-1.5">
                <span className="px-3 py-1 rounded-xl bg-[#073B2A] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  {currentTabProduct.shortTitle}
                </span>
                {currentTabProduct.isCoreBusiness && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#0B6B50] text-white text-[9px] font-extrabold uppercase tracking-widest shadow-sm inline-flex items-center space-x-1">
                    <Crown className="w-3 h-3 fill-current" />
                    <span>PRIMARY CORE BUSINESS</span>
                  </span>
                )}
              </div>

              {/* Dual View Mode Toggle if posterImage is available */}
              {currentTabProduct.posterImage && (
                <div className="flex items-center p-1 bg-white/90 rounded-xl border border-[#DCE8E1] shadow-sm text-xs font-bold">
                  <button
                    onClick={() => setStageViewMode('bottle')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      stageViewMode === 'bottle'
                        ? 'bg-[#073B2A] text-white shadow-xs'
                        : 'text-[#65736C] hover:text-[#073B2A]'
                    }`}
                  >
                    Bottle
                  </button>
                  <button
                    onClick={() => setStageViewMode('poster')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      stageViewMode === 'poster'
                        ? 'bg-[#073B2A] text-white shadow-xs'
                        : 'text-[#65736C] hover:text-[#073B2A]'
                    }`}
                  >
                    Flyer
                  </button>
                </div>
              )}
            </div>

            <div className="relative w-full my-auto py-4 flex items-center justify-center group/stage cursor-pointer"
                 onClick={() => {
                   if (currentTabProduct.posterImage) {
                     setSelectedPoster(currentTabProduct.posterImage);
                   }
                 }}>
              <img
                src={stageViewMode === 'poster' && currentTabProduct.posterImage ? currentTabProduct.posterImage : currentTabProduct.mainImage}
                alt={currentTabProduct.title}
                className="max-h-[300px] sm:max-h-[340px] w-auto object-contain drop-shadow-xl z-10 transition-transform duration-500 group-hover/stage:scale-105 rounded-xl"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-3.5 bg-black/15 rounded-full blur-md z-0"></div>

              {currentTabProduct.posterImage && (
                <div className="absolute bottom-2 right-2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPoster(currentTabProduct.posterImage);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#073B2A]/90 hover:bg-[#073B2A] text-white text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center space-x-1.5 transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#00A8B5]" />
                    <span>Expand Flyer</span>
                  </button>
                </div>
              )}
            </div>

            {currentTabProduct.posterImage && (
              <p className="text-[10px] font-bold text-[#0B6B50] uppercase tracking-wider text-center pt-2 border-t border-[#DCE8E1]/60 w-full">
                🔍 Click image to inspect official product flyer
              </p>
            )}

          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#EAF4F2] text-[#073B2A] text-[11px] font-mono font-bold border border-[#DCE8E1]">
                    {currentTabProduct.categoryBadge}
                  </span>
                  {currentTabProduct.isCoreBusiness && (
                    <span className="px-2.5 py-0.5 rounded-md bg-[#0B6B50]/15 text-[#073B2A] text-[11px] font-extrabold border border-[#0B6B50]/30">
                      MAIN BOTTLING LINE
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073B2A] uppercase tracking-tight">
                  {currentTabProduct.title}
                </h2>
                <p className="text-xs font-extrabold text-[#0B6B50] uppercase tracking-wider">
                  {currentTabProduct.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#65736C] leading-relaxed font-medium">
                {currentTabProduct.description}
              </p>

              {/* If Product has Health Benefits & Culinary Uses (Product 07 Flyer) */}
              {currentTabProduct.healthBenefits && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#EAF4F2] to-[#F5F8FA] border border-[#0B6B50]/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#073B2A] flex items-center space-x-1.5">
                      <HeartPulse className="w-4 h-4 text-[#0B6B50]" />
                      <span>OFFICIAL HEALTH BENEFITS &amp; CULINARY USES</span>
                    </span>
                    <button
                      onClick={() => setSelectedPoster(currentTabProduct.posterImage)}
                      className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B6B50] underline hover:text-[#073B2A]"
                    >
                      View Poster Infographic →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1.5 bg-white p-3 rounded-xl border border-[#DCE8E1]">
                      <span className="font-extrabold text-[#073B2A] block uppercase text-[11px]">❤️ Health Benefits:</span>
                      {currentTabProduct.healthBenefits.map((hb, hbIdx) => (
                        <div key={hbIdx} className="text-[#17211D]">
                          <strong className="text-[#073B2A]">{hb.name}:</strong> {hb.desc}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1.5 bg-white p-3 rounded-xl border border-[#DCE8E1]">
                      <span className="font-extrabold text-[#073B2A] block uppercase text-[11px]">🥗 Culinary Uses:</span>
                      <ul className="space-y-1 list-disc list-inside text-[#65736C]">
                        {currentTabProduct.culinaryUses.map((use, uIdx) => (
                          <li key={uIdx}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Flavor Variant Pills */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#073B2A] block">
                  AVAILABLE FLAVOUR VARIANTS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentTabProduct.flavors.map((flv, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-3 py-1 rounded-lg bg-[#EAF4F2] text-[#073B2A] text-xs font-bold border border-[#DCE8E1]"
                    >
                      {flv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {currentTabProduct.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2 text-xs font-semibold text-[#17211D]">
                    <Check className="w-3.5 h-3.5 text-[#0B6B50] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B Action Buttons */}
            <div className="pt-3 border-t border-[#DCE8E1] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="h-[44px] px-6 text-xs font-extrabold uppercase tracking-wider text-white bg-[#073B2A] hover:bg-[#0B6B50] rounded-xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2 group w-full sm:w-auto"
              >
                <span>DISCUSS {currentTabProduct.shortTitle}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {currentTabProduct.posterImage && (
                <button
                  onClick={() => setSelectedPoster(currentTabProduct.posterImage)}
                  className="h-[44px] px-5 text-xs font-extrabold uppercase tracking-wider text-white bg-[#0B6B50] hover:bg-[#073B2A] rounded-xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4 text-white" />
                  <span>VIEW PRODUCT FLYER</span>
                </button>
              )}

              <button
                onClick={() => handleNavClick('contact')}
                className="h-[44px] px-5 text-xs font-extrabold uppercase tracking-wider text-[#073B2A] bg-[#EAF4F2] hover:bg-[#DCE8E1] rounded-xl transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-[#0B6B50]" />
                <span>REQUEST SPECIFICATIONS</span>
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* 3. COMPACT 7-CATEGORY PRODUCT CATALOGUE GRID */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6 pt-4">
        
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073B2A] uppercase tracking-tight">
            BEVERAGE &amp; HEALTH PRODUCT LINES (CATEGORIES 01 TO 07)
          </h2>
          <p className="text-sm text-[#65736C] max-w-2xl font-medium">
            Overview of all 7 commercial product &amp; manufacturing lines in numerical sequence.
          </p>
        </div>

        {/* 7 COMPACT PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              id={prod.sectionId}
              className={`bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-32 ${
                prod.isCoreBusiness
                  ? 'border-2 border-[#0B6B50] ring-4 ring-[#0B6B50]/10'
                  : 'border-[#DCE8E1] hover:border-[#0B6B50]'
              }`}
            >
              {/* Image Stage */}
              <div className="h-64 bg-gradient-to-b from-[#F5F8FA] via-[#EBF3F5] to-[#E0EFF2] p-5 flex items-center justify-center relative overflow-hidden border-b border-[#DCE8E1]">
                <span className="absolute top-3 left-3 bg-[#073B2A] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg z-10 shadow-xs border border-white/20">
                  {prod.categoryBadge}
                </span>

                {prod.isCoreBusiness && (
                  <span className="absolute top-3 right-3 bg-[#0B6B50] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md z-10 flex items-center space-x-1 shadow-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>FLAGSHIP</span>
                  </span>
                )}

                {prod.posterImage && (
                  <button
                    onClick={() => setSelectedPoster(prod.posterImage)}
                    className="absolute top-3 right-3 bg-[#073B2A] hover:bg-[#0B6B50] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg z-10 flex items-center space-x-1 shadow-xs transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#00A8B5]" />
                    <span>Flyer</span>
                  </button>
                )}

                <img
                  src={prod.mainImage}
                  alt={prod.title}
                  className="max-h-[82%] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md z-10 cursor-pointer"
                  onClick={() => {
                    if (prod.posterImage) setSelectedPoster(prod.posterImage);
                  }}
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-3 bg-black/15 rounded-full blur-md z-0"></div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-[#073B2A] group-hover:text-[#0B6B50] transition-colors uppercase leading-tight">
                    {prod.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#65736C] leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                {/* Flavor Pills */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B6B50] block">
                    Flavour Variants:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {prod.flavors.map((flv, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#EAF4F2] text-[#073B2A] text-[10px] font-bold border border-[#DCE8E1]"
                      >
                        {flv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Packaging Note */}
                <div className="p-2.5 rounded-xl bg-[#FAFBFD] border border-[#DCE8E1] text-[11px] text-[#073B2A] font-semibold">
                  <span className="font-bold text-[#0B6B50] block text-[10px] uppercase">Packaging:</span>
                  {prod.packaging}
                </div>

                {/* Action CTA */}
                <div className="pt-3 border-t border-[#DCE8E1] space-y-2">
                  {prod.posterImage && (
                    <button
                      onClick={() => setSelectedPoster(prod.posterImage)}
                      className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#073B2A] bg-[#EAF4F2] hover:bg-[#DCE8E1] rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#0B6B50]" />
                      <span>VIEW OFFICIAL FLYER</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#073B2A] hover:bg-[#0B6B50] rounded-xl transition-colors shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    <span>INQUIRE {prod.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B ENQUIRY CALL TO ACTION BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#05291D] via-[#073B2A] to-[#05291D] text-white border border-[#0B6B50]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              HAVE A CUSTOM BEVERAGE FORMULATION OR RFQ REQUIREMENT?
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

      {/* LIGHTBOX MODAL FOR OFFICIAL FLYER / POSTER VIEWER */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
             onClick={() => setSelectedPoster(null)}>
          <div
            className="bg-[#05291D] rounded-3xl border border-[#0B6B50] p-4 sm:p-6 max-w-4xl w-full shadow-2xl space-y-4 relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#0B6B50]/40 pb-4">
              <div>
                <span className="text-[10px] font-extrabold text-[#00A8B5] uppercase tracking-widest block">
                  OFFICIAL PRODUCT FLYER Showcase
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                  PURE PRESS — APPLE CIDER VINEGAR
                </h3>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close flyer view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image View */}
            <div className="rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center max-h-[75vh] border border-[#0B6B50]/30 p-2">
              <img
                src={selectedPoster}
                alt="Pure Press Apple Cider Vinegar Promotional Flyer"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#0B6B50]/40">
              <div className="text-xs text-gray-300 font-medium">
                Refined for Cooking. Trusted for Health. • 500 mL PET Bottle
              </div>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedPoster(null);
                    handleNavClick('contact');
                  }}
                  className="px-6 py-3 rounded-xl bg-[#00A8B5] hover:bg-[#008C97] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-colors w-full sm:w-auto flex items-center justify-center space-x-2"
                >
                  <span>INQUIRE ABOUT THIS PRODUCT</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
