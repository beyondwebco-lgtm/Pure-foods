import React from 'react';
import {
  ShieldCheck,
  Award,
  Factory,
  Droplets,
  CheckCircle2,
  Building2,
  Users,
  ArrowRight,
  FlaskConical,
  Package
} from 'lucide-react';

export default function AboutPage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const realPackagingGallery = [
    {
      title: 'HYDRO Glass Bottle',
      subtitle: 'Added Minerals Packaged Water',
      image: '/images/uploaded/bottle_hydro.jpg',
      format: 'Glass Bottle (Premium)'
    },
    {
      title: 'Galeries Lafayette Mumbai',
      subtitle: 'Co-Branded 350ml Carton',
      image: '/images/uploaded/carton_lafayette.jpg',
      format: 'Paperboard Carton'
    },
    {
      title: 'IMPACT WATER Carton',
      subtitle: '350ml Added Minerals Format',
      image: '/images/uploaded/carton_impact.jpg',
      format: 'Mineral Packaged Water'
    },
    {
      title: 'Out Of Office Packaging',
      subtitle: 'Minimalist Custom Carton',
      image: '/images/uploaded/carton_ooo.jpg',
      format: 'Custom Beverage Pack'
    }
  ];

  const coreValues = [
    {
      title: 'Hygienic Process Oversight',
      desc: 'Controlled manufacturing environments adhering strictly to FSSAI guidelines and Good Manufacturing Practices (GMP).'
    },
    {
      title: 'Multi-Barrier Purification',
      desc: 'State-of-the-art Reverse Osmosis (RO) micro-filtration and UV disinfection systems for water purity.'
    },
    {
      title: 'Precision Mineral & Syrup Blending',
      desc: 'Automated dosing and stainless steel blending vessels for consistent beverage batching.'
    },
    {
      title: 'Versatile Packaging Lines',
      desc: 'Filling and packaging capabilities across eco-friendly paperboard cartons, PET bottles, and glass formats.'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-16">
      {/* HERO SECTION WITH LOGO BRANDING */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#0B3B2E] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#08281F] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-white/10 text-[#E8F0EA] text-xs font-bold uppercase tracking-wider border border-white/15">
                <Building2 className="w-3.5 h-3.5" />
                <span>Established Beverage Manufacturing Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
                ABOUT PURE FOODS &amp; BEVERAGES
              </h1>

              <p className="text-lg sm:text-2xl text-[#E8F0EA] font-medium leading-relaxed max-w-3xl">
                A dedicated contract manufacturing partner producing high-quality packaged drinking water and beverages in Mahape MIDC, Navi Mumbai.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-white/20 flex items-center justify-center">
                <img
                  src="/images/uploaded/logo_pure.jpg"
                  alt="Pure Foods & Beverages Official Logo"
                  className="max-h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 50/50 INTRO WITH REAL PRODUCT PHOTO */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E1E7E3] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B3B2E] block">
                Operational Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1B2924] uppercase">
                MANUFACTURING WITH PURPOSE
              </h2>

              <p className="text-base sm:text-lg text-[#4A5D55] leading-relaxed font-normal">
                Our approach blends modern industrial food engineering with strict quality oversight to deliver dependable beverage production services for corporate brands, hotels, restaurants, and retailers.
              </p>

              <p className="text-sm text-[#4A5D55] leading-relaxed">
                Operating out of Mahape MIDC Navi Mumbai, our facility is equipped with automated filling lines, water treatment infrastructure, and an in-house laboratory to ensure full batch traceability and regulatory compliance.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('capabilities')}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B3B2E] hover:text-[#124C3C] transition-colors"
                >
                  <span>Explore Facility Capabilities</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>

            {/* Dedicated Stage Image Container */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#DDE4DF] shadow-md bg-gradient-to-b from-[#F5F7F4] to-[#EDEFEA] h-[380px] sm:h-[420px] relative p-6 flex items-center justify-center group">
                <img
                  src="/images/uploaded/bottle_hydro.jpg"
                  alt="HYDRO Glass Bottle Packaged Drinking Water"
                  className="max-h-[82%] w-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-[#0B3B2E] text-white rounded-xl text-[10.5px] font-bold uppercase tracking-wider shadow-2xs">
                    Real Product Showcase
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REAL PACKAGING SHOWCASE GALLERY WITH EDITORIAL STAGE CARDS */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        <div className="space-y-2 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B3B2E] block">
            Real Deliverables &amp; Formats
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1B2924] uppercase">
            REAL PACKAGING &amp; PRODUCTION ASSETS
          </h2>
          <p className="text-sm text-[#4A5D55] font-medium">
            Explore authentic product packaging deliverables produced for leading B2B clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realPackagingGallery.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DDE4DF] shadow-2xs overflow-hidden hover:border-[#0B3B2E]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Dedicated Image Stage */}
              <div className="h-[280px] bg-gradient-to-b from-[#F5F7F4] to-[#EDEFEA] p-6 flex items-center justify-center border-b border-[#DDE4DF] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[82%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B3B2E] text-white text-[9.5px] font-bold uppercase tracking-wider rounded-lg">
                  {item.format}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 text-center space-y-1">
                <h4 className="font-bold text-[#1B2924] text-base group-hover:text-[#0B3B2E] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#4A5D55] font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES / INFRASTRUCTURE HIGHLIGHTS */}
      <section className="bg-white py-16 lg:py-24 border-y border-[#E1E7E3]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B3B2E] block">
              Facility Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1B2924] uppercase">
              OUR MANUFACTURING PRINCIPLES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#FAFBF8] rounded-2xl p-6 border border-[#E1E7E3] space-y-3 hover:border-[#0B3B2E]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8F0EA] text-[#0B3B2E] flex items-center justify-center font-extrabold font-mono text-sm">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-[#1B2924]">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A5D55] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#0B3B2E] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#08281F] shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8F0EA] block">
            Partner With Us
          </span>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            DISCUSS YOUR BEVERAGE REQUIREMENT
          </h2>

          <p className="text-base sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
            Get in touch with our Mahape MIDC facility team for technical discussions, site visits, and project estimates.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-10 py-5 text-sm font-bold uppercase tracking-wider text-[#0B3B2E] bg-[#E8F0EA] hover:bg-white rounded-xl shadow-xl transition-all duration-200 inline-flex items-center group"
            >
              <span>TALK TO US</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
