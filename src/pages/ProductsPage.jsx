import React, { useState } from 'react';
import {
  Droplets,
  Apple,
  Sparkles,
  Zap,
  Package,
  ArrowRight,
  Check
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
      name: '01 — Packaged Drinking Water',
      shortTitle: 'Packaged Drinking Water',
      desc: 'Purified packaged drinking water with added minerals manufactured under strict micro-filtration, RO, and UV sterilization processes.',
      packagingFormat: 'Glass Bottles, PET & Eco-Friendly Carton Formats (250ml - 1L)',
      image: '/images/uploaded/bottle_hydro.jpg',
      b2bNote: 'Custom label placement for luxury hotels, corporate offices, fine dining, and retail distribution.',
      specs: [
        'Multi-barrier RO & UV purification',
        'Balanced mineral formulation options',
        'Custom brand label & carton printing',
        'Case packaging in 24 & 48 bottle/carton packs'
      ]
    },
    {
      id: '02',
      key: 'juices',
      name: '02 — Fruit Drinks & Juices',
      shortTitle: 'Fruit Drinks & Juices',
      desc: 'Fruit-based drinks, nectars, and juice beverages developed to meet client flavor and brix specifications.',
      packagingFormat: 'Packaging Options: Custom Printed Cartons & PET Bottle formats',
      image: '/images/uploaded/carton_lafayette.jpg',
      b2bNote: 'Formulated with real fruit pulp & quality-tested fruit concentrates.',
      specs: [
        'Pasteurized thermal hold processing',
        'Mango, Guava, Apple, Mixed Fruit profiles',
        'Custom pulp content percentage options',
        'B2B Private label production ready'
      ]
    },
    {
      id: '03',
      key: 'flavoured',
      name: '03 — Flavoured Beverages',
      shortTitle: 'Flavoured Beverages',
      desc: 'Customized flavoured beverage solutions including classic lemon, jeera, pan, and regional botanical drinks.',
      packagingFormat: 'Packaging Options: Minimalist Cartons, Clean PET & Capped Glass formats',
      image: '/images/uploaded/carton_ooo.jpg',
      b2bNote: 'Formulated with food-grade flavor emulsions and balanced acidity profiles.',
      specs: [
        'Lemonade, Jeera, Pan & Spice profiles',
        'Precision syrup formulation & blending',
        'Vibrant color & aromatic stability',
        'Custom brand batch packaging'
      ]
    },
    {
      id: '04',
      key: 'functional',
      name: '04 — Functional Beverages',
      shortTitle: 'Functional Beverages',
      desc: 'Development and manufacturing support for innovative beverage concepts, electrolyte hydration drinks, and herbal wellness infusions.',
      packagingFormat: 'Packaging Options: Mineral Cartons, Sleek PET & Slim Can formats',
      image: '/images/uploaded/carton_impact.jpg',
      b2bNote: 'Formulated for active lifestyle brands, wellness retail, and fitness chains.',
      specs: [
        'Electrolyte & hydration formulations',
        'Vitamin & mineral-fortified liquid blending',
        'Clean-label ingredient compatibility',
        'R&D sample trial batch validation'
      ]
    },
    {
      id: '05',
      key: 'speciality',
      name: '05 — Speciality / Custom Beverages',
      shortTitle: 'Speciality / Custom Beverages',
      desc: 'Tailored manufacturing solutions developed specifically according to proprietary client formulations and custom beverage concepts.',
      packagingFormat: 'Packaging Options: Customized to brand & commercial distribution requirements',
      image: '/images/uploaded/carton_lafayette.jpg',
      b2bNote: 'Non-disclosure agreement (NDA) option available for proprietary client recipes.',
      specs: [
        'Custom recipe scaling & batch trials',
        'Dedicated ingredient sourcing support',
        'Flexible packaging line trial runs',
        'Full B2B commercial production support'
      ]
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? productCategories
    : productCategories.filter(p => p.key === activeCategory);

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-16">
      {/* HERO SECTION */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#0B3B2E] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#08281F] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-white/10 text-[#E8F0EA] text-xs font-bold uppercase tracking-wider border border-white/15">
              <Package className="w-3.5 h-3.5" />
              <span>Real Deliverables &amp; B2B Formats</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              OUR PRODUCTS
            </h1>

            <p className="text-lg sm:text-2xl text-[#E8F0EA] font-medium leading-relaxed max-w-3xl">
              Beverage solutions developed for different business needs.
            </p>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-gray-200 font-semibold max-w-2xl">
              Note: Pure Foods &amp; Beverages manufactures products strictly on a B2B contract basis for corporate clients, hotel chains, retailers, and private-label brands.
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-start gap-2.5 pb-4 border-b border-[#E1E7E3]">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
              activeCategory === 'all'
                ? 'bg-[#0B3B2E] text-white shadow-sm'
                : 'bg-white text-[#4A5D55] hover:text-[#0B3B2E] hover:bg-[#E8F0EA] border border-[#E1E7E3]'
            }`}
          >
            All Categories (5)
          </button>
          
          {productCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#0B3B2E] text-white shadow-sm'
                  : 'bg-white text-[#4A5D55] hover:text-[#0B3B2E] hover:bg-[#E8F0EA] border border-[#E1E7E3]'
              }`}
            >
              {cat.shortTitle}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GALLERY CARDS WITH EDITORIAL IMAGE STAGE SHOWCASE */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {filteredProducts.map((prod) => {
          return (
            <div
              key={prod.id}
              className="bg-white rounded-[18px] border border-[#DDE4DF] shadow-2xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:shadow-card-hover hover:border-[#0B3B2E]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image Stage Container (320px-360px height, contain fitting, category TOP LEFT) */}
              <div className="lg:col-span-5 relative bg-gradient-to-b from-[#F5F7F4] to-[#EDEFEA] border-b lg:border-b-0 lg:border-r border-[#DDE4DF] min-h-[320px] sm:min-h-[360px] flex items-center justify-center p-6">
                
                {/* Category Label TOP LEFT */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3.5 py-1.5 bg-[#0B3B2E] text-white rounded-xl text-[10.5px] font-bold uppercase tracking-widest shadow-2xs block">
                    {prod.shortTitle}
                  </span>
                </div>

                {/* Complete bottle/carton visible naturally with 80% height */}
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="max-h-[82%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Product Info Col */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="inline-block bg-[#E8F0EA] text-[#0B3B2E] font-mono text-xs font-bold px-2.5 py-0.5 rounded-md mb-2">
                      CATEGORY {prod.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B3B2E] uppercase tracking-tight">
                      {prod.name}
                    </h2>
                  </div>

                  <p className="text-base text-[#4A5D55] leading-relaxed font-medium">
                    {prod.desc}
                  </p>

                  {/* B2B Packaging Format Spec Box */}
                  <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E7E3] space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase text-[#1B2924]">
                      <Package className="w-4 h-4 text-[#0B3B2E]" />
                      <span>Packaging Format &amp; Volume Possibilities</span>
                    </div>
                    <p className="text-xs text-[#4A5D55] font-medium">
                      {prod.packagingFormat}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {prod.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-2 text-xs font-semibold text-[#1B2924]">
                        <Check className="w-3.5 h-3.5 text-[#0B3B2E] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#4A5D55] italic pt-1">
                    * {prod.b2bNote}
                  </p>
                </div>

                {/* B2B Enquiry Button */}
                <div className="pt-4 border-t border-[#DDE4DF]">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="inline-flex items-center text-[13px] font-semibold uppercase tracking-wider text-[#0B3B2E] group-hover:text-[#124C3C] transition-colors"
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

      {/* FOOTER CTA BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B3B2E] text-white border border-[#08281F] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold uppercase">
              Looking for Private Label Product Development?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              We help you configure bottle designs, label artwork requirements, and custom flavor formulations tailored for your brand launch.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contract-manufacturing')}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B3B2E] bg-[#E8F0EA] hover:bg-white rounded-xl shadow-md transition-colors shrink-0"
          >
            EXPLORE PRIVATE LABEL
          </button>
        </div>
      </section>
    </div>
  );
}
