import React from 'react';
import {
  Factory,
  Tag,
  FlaskConical,
  Droplets,
  Apple,
  Sparkles,
  Zap,
  Sliders,
  ArrowRight,
  CheckCircle2,
  Package
} from 'lucide-react';

export default function WhatWeDoPage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'contract-manufacturing',
      title: 'Contract Manufacturing',
      subtitle: 'Manufacturing support for businesses looking to produce beverages at commercial scale.',
      desc: 'Our commercial contract manufacturing infrastructure provides end-to-end production runs for established food and beverage brands, corporate distributors, and retail operators. We execute filling, capping, and primary packaging according to strict client specifications.',
      bullets: [
        'Scalable commercial batch sizes',
        'Automated liquid processing & carbonation capabilities',
        'Primary PET bottle filling and secondary corrugated packing',
        'Batch code printing, shrink labeling & quality assurance'
      ],
      icon: Factory,
      image: '/images/hero_factory.png',
      badge: 'Commercial Scale',
      objectFit: 'cover'
    },
    {
      id: 'private-label',
      title: 'Private Label Manufacturing',
      subtitle: 'Launch beverages under your own brand with manufacturing and packaging support.',
      desc: 'Complete turn-key production solutions for hotels, restaurants, cafés, retail chains, and emerging entrepreneurs. Turn your brand identity into a market-ready packaged beverage line without investing in heavy capital equipment.',
      bullets: [
        'Dedicated brand customization & labeling support',
        'Formula matching and custom recipe development',
        'Multiple bottle volume formats (250ml to 1L+)',
        'Hygienic manufacturing with FSSAI compliance'
      ],
      icon: Tag,
      image: '/images/uploaded/carton_lafayette.jpg',
      badge: 'Turn-Key Brand Solutions',
      objectFit: 'contain'
    },
    {
      id: 'beverage-development',
      title: 'Beverage Development & Formulation',
      subtitle: 'Support from initial beverage concept through formulation trials and product finalization.',
      desc: 'Bringing a new drink concept to market requires technical expertise in liquid stability, acidity balancing, brix control, and shelf-life preservation. Our product development team works alongside clients to formulate delicious, stable beverage recipes.',
      bullets: [
        'Recipe prototyping & sensory evaluation',
        'Ingredient sourcing & sweetener selection',
        'Shelf-life testing & stability optimization',
        'Batch scaling from lab bench to production plant'
      ],
      icon: FlaskConical,
      image: '/images/quality_lab.png',
      badge: 'Product R&D',
      objectFit: 'cover'
    },
    {
      id: 'drinking-water',
      title: 'Packaged Drinking Water',
      subtitle: 'PET, glass bottle and carton packaging solutions for packaged drinking water.',
      desc: 'Purified packaged drinking water processed through multi-grade sand filtration, activated carbon treatment, reverse osmosis (RO), and UV sterilization to meet crisp clarity and safety benchmarks.',
      bullets: [
        'Multi-barrier water purification process',
        'Glass bottle & carton filling capabilities',
        'Custom corporate and private-label water bottles',
        'Quality controlled mineral balance and taste profile'
      ],
      icon: Droplets,
      image: '/images/uploaded/bottle_hydro.jpg',
      badge: 'Purity & Clarity',
      objectFit: 'contain'
    },
    {
      id: 'juices-fruit',
      title: 'Juices & Fruit-Based Beverages',
      subtitle: 'Fruit drinks, juices and fruit-based beverage solutions.',
      desc: 'Formulation and filling for fruit-based beverages, nectar drinks, and pulp-containing recipes. Processed under thermal hold and hygienic filling standards to preserve natural fruit profiles.',
      bullets: [
        'Fruit pulp blending & homogenization',
        'Controlled pasteurization for microbial safety',
        'Mango, guava, apple, and custom fruit blend formulations',
        'Clear and cloudy juice beverage handling'
      ],
      icon: Apple,
      image: '/images/beverage_blending.png',
      badge: 'Fruit Formulations',
      objectFit: 'cover'
    },
    {
      id: 'flavoured-beverages',
      title: 'Flavoured Beverages',
      subtitle: 'Customized flavoured beverage solutions including lemon, pan and other concepts.',
      desc: 'Refreshing, classic and innovative flavoured drinks created with food-grade flavor emulsions, botanical extracts, and balanced sweetness. Engineered for appealing aroma and long-lasting taste.',
      bullets: [
        'Classic Lemon, Jeera, Pan & Spice infused flavor profiles',
        'Precision flavor dosing and liquid syrup preparation',
        'Clear bottle appeal with vibrant natural appearance',
        'Custom flavor profiling for regional consumer preferences'
      ],
      icon: Sparkles,
      image: '/images/uploaded/carton_ooo.jpg',
      badge: 'Flavor Innovation',
      objectFit: 'contain'
    },
    {
      id: 'functional-beverages',
      title: 'Functional Beverages',
      subtitle: 'Manufacturing support for innovative and emerging beverage concepts.',
      desc: 'Specialized manufacturing support for functional drink concepts, wellness infusions, electrolyte water, and herbal extract beverages. Formulated with carefully dosed active ingredients.',
      bullets: [
        'Electrolyte & hydration beverage formulations',
        'Herbal, botanical & mineral-fortified liquid blending',
        'Homogenous ingredient dispersion & thermal stability',
        'Strict batch containment for specialized formulations'
      ],
      icon: Zap,
      image: '/images/uploaded/carton_impact.jpg',
      badge: 'Mineral Fortified',
      objectFit: 'contain'
    },
    {
      id: 'custom-solutions',
      title: 'Custom Beverage Solutions',
      subtitle: 'Tailored manufacturing solutions based on product, packaging and business requirements.',
      desc: 'Have a unique beverage requirement? We offer flexible batch processing, custom ingredient handling, and tailored packaging configurations built around your specific business goals.',
      bullets: [
        'Tailored packaging specifications & outer case bundling',
        'Pilot trial runs for brand validation',
        'Flexible schedule planning for seasonal demand spikes',
        'Dedicated technical consultation at every project phase'
      ],
      icon: Sliders,
      image: '/images/uploaded/carton_lafayette.jpg',
      badge: 'Tailored Execution',
      objectFit: 'contain'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-16">
      {/* PAGE HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-brand-dark shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-brand-mint text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              <span>Full-Scope Manufacturing Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              WHAT WE DO
            </h1>

            <p className="text-lg sm:text-2xl text-brand-mint font-medium leading-relaxed max-w-3xl">
              End-to-end beverage manufacturing solutions for businesses and emerging brands.
            </p>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Whether you require raw water purification, custom syrup formulation, or automated packaging across bottles and cartons, Pure Foods &amp; Beverages delivers disciplined industrial manufacturing across 8 core service categories.
            </p>
          </div>
        </div>
      </section>

      {/* 8 DETAILED SERVICE SECTIONS WITH REAL PHOTOGRAPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((item, idx) => {
          const Icon = item.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-2xl p-8 sm:p-10 border border-brand-border shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Image Col (Strictly maintains aspect ratio) */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-xl overflow-hidden shadow-md border border-brand-border h-[320px] sm:h-[360px] bg-brand-bg flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`max-h-full w-auto transition-transform duration-500 hover:scale-105 ${
                      item.objectFit === 'contain' ? 'object-contain' : 'object-cover w-full h-full'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-brand-deep text-white shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Col */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-mint text-brand-deep flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-emerald">
                    SERVICE CATEGORY 0{idx + 1}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep uppercase">
                  {item.title}
                </h2>

                <p className="text-base font-semibold text-brand-emerald">
                  {item.subtitle}
                </p>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2 text-xs font-semibold text-brand-deep">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-deep hover:bg-brand-emerald rounded-lg transition-colors"
                  >
                    <span>Discuss {item.title} Requirement</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* BOTTOM B2B BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-mint border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 text-brand-deep">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold uppercase">
              Need a Custom Beverage Solution?
            </h3>
            <p className="text-sm text-brand-muted max-w-xl font-medium">
              We work directly with food service operators, distributors, and brand owners to configure customized production lines and formulations.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-deep hover:bg-brand-emerald rounded-lg shadow-md transition-colors shrink-0"
          >
            TALK TO OUR TEAM
          </button>
        </div>
      </section>
    </div>
  );
}
