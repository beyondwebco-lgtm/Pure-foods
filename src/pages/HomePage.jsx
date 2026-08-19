import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Factory,
  Check,
  FlaskConical,
  Shield,
  Handshake,
  MapPin
} from 'lucide-react';

export default function HomePage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const manufactureCards = [
    {
      num: '01',
      title: 'Packaged Drinking Water',
      desc: 'PET, glass bottle & carton packaging solutions for packaged drinking water with added minerals.',
      image: '/images/uploaded/bottle_hydro.jpg',
      target: 'products',
      tag: 'GLASS & PET FORMATS',
      imageFit: 'contain'
    },
    {
      num: '02',
      title: 'Fruit Drinks & Juices',
      desc: 'Fruit drinks, juices and fruit-based beverages developed to meet specific product requirements.',
      image: '/images/uploaded/bottle_fruit_splash.jpg',
      target: 'products',
      tag: 'CUSTOM FORMULATIONS',
      imageFit: 'contain'
    },
    {
      num: '03',
      title: 'Flavoured Beverages',
      desc: 'Lemon, pan, jeera and customized flavoured beverage solutions in eco-friendly carton & bottle formats.',
      image: '/images/uploaded/bottle_tisora_peach.jpg',
      target: 'products',
      tag: 'CUSTOM FLAVOURS',
      imageFit: 'contain'
    },
    {
      num: '04',
      title: 'Functional Beverages',
      desc: 'Development and manufacturing support for innovative electrolyte and wellness beverage concepts.',
      image: '/images/uploaded/carton_impact.jpg',
      target: 'products',
      tag: 'MINERAL FORTIFIED',
      imageFit: 'contain'
    },
    {
      num: '05',
      title: 'Contract Manufacturing',
      desc: 'End-to-end commercial production support from raw water treatment to finished packed goods.',
      image: '/images/hero_factory.png',
      target: 'contract-manufacturing',
      tag: 'COMMERCIAL SCALE',
      imageFit: 'cover'
    },
  ];

  const processSteps = [
    { num: '01', name: 'Concept', label: 'Requirement Assessment' },
    { num: '02', name: 'Formulation', label: 'Recipe & Mineral Dosing' },
    { num: '03', name: 'Sampling', label: 'Trial Batch Verification' },
    { num: '04', name: 'Packaging', label: 'Glass, PET & Carton Formats' },
    { num: '05', name: 'Production', label: 'High-Speed Automated Filling' },
    { num: '06', name: 'Finished Goods', label: 'FSSAI Compliant Batch Dispatch' },
  ];

  const qualityHighlights = [
    'Quality-focused processes',
    'Hygienic manufacturing environment',
    'Multi-barrier water treatment (RO & UV)',
    'In-house analytical lab testing',
    'Controlled production lines',
    'Carton & bottle packaging support',
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-12">
      {/* HERO SECTION — OFFICIAL LOGO COLOR PALETTE (#003D5B & #00A8B5) */}
      <section className="relative pt-24 sm:pt-32 lg:pt-32 pb-12 lg:pb-16 bg-[#FAFBFD] border-b border-[#DCE6ED] overflow-hidden">
        
        {/* FULL-BLEED BOTTLING MACHINE CONVEYOR BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_factory.png"
            alt="Pure Foods Industrial Bottling Conveyor Line"
            className="w-full h-full object-cover object-center"
          />
          {/* Left-to-Right Soft White Gradient Fade for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD] via-[#FAFBFD]/92 to-[#FAFBFD]/35 lg:via-[#FAFBFD]/85"></div>
        </div>

        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[580px] lg:min-h-[620px]">
            
            {/* LEFT COLUMN: EDITORIAL CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* B2B Tag Pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DCE6ED] text-[#003D5B] text-xs font-bold uppercase tracking-wider shadow-2xs backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#00A8B5]"></span>
                <span>B2B BEVERAGE MANUFACTURER • NAVI MUMBAI</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[68px] xl:text-[76px] font-extrabold tracking-tight leading-[1.02] uppercase">
                <span className="text-[#1A2B35] block">Building Beverages.</span>
                <span className="text-[#003D5B] block mt-1">Building Brands.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#4A6070] font-medium leading-relaxed max-w-[580px]">
                We manufacture packaged drinking water, juices, flavoured and functional beverages for businesses looking for reliable beverage manufacturing and private-label solutions.
              </p>

              {/* Supporting Statement Box with Flask Icon */}
              <div className="p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-[#DCE6ED] shadow-2xs flex items-center space-x-3.5 max-w-[540px]">
                <div className="w-11 h-11 rounded-xl bg-[#003D5B] text-white flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5 text-[#00A8B5]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#1A2B35] leading-snug">
                  From formulation to finished product — we help bring beverage ideas to life.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-1">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-7 py-3.5 h-[50px] text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#003D5B] hover:bg-[#004B6E] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center group shrink-0"
                >
                  <span>TALK TO US</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNavClick('capabilities')}
                  className="px-7 py-3.5 h-[50px] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#003D5B] bg-white hover:bg-[#E6F7F8] border border-[#DCE6ED] rounded-xl shadow-2xs transition-all duration-200 flex items-center justify-center shrink-0"
                >
                  <span>EXPLORE OUR CAPABILITIES</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: 3 PRODUCT CARD COMPOSITION (GLASS, PET & CARTON) WITH INTEGRATED PRIVATE LABEL STRIP */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border-2 border-white shadow-2xl overflow-hidden p-2">
                
                {/* 3 TALL SIDE-BY-SIDE PRODUCT IMAGE CARDS */}
                <div className="grid grid-cols-3 gap-2 h-[420px] sm:h-[480px]">
                  
                  {/* Card 1: HYDRO Glass Bottle */}
                  <div className="bg-[#F0F5F8] rounded-xl overflow-hidden relative flex items-center justify-center border border-[#DCE6ED] group/card">
                    <img
                      src="/images/uploaded/bottle_hydro.jpg"
                      alt="HYDRO Premium Glass Bottle"
                      className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 rounded-lg"
                    />
                  </div>

                  {/* Card 2: Good Giving PET Packaged Water Bottle */}
                  <div className="bg-[#F0F5F8] rounded-xl overflow-hidden relative flex items-center justify-center border border-[#DCE6ED] group/card">
                    <img
                      src="/images/uploaded/bottle_good_giving.jpg"
                      alt="Good Giving Packaged Water PET Bottle"
                      className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 rounded-lg"
                    />
                  </div>

                  {/* Card 3: Galeries Lafayette Carton */}
                  <div className="bg-[#F0F5F8] rounded-xl overflow-hidden relative flex items-center justify-center border border-[#DCE6ED] group/card">
                    <img
                      src="/images/uploaded/carton_lafayette.jpg"
                      alt="Galeries Lafayette Mumbai 350ml Carton"
                      className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 rounded-lg"
                    />
                  </div>

                </div>

                {/* BOTTOM SPANNING PRIVATE LABEL STRIP */}
                <div className="mt-2 p-3.5 rounded-xl bg-[#003D5B] text-white flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-2.5">
                    <Package className="w-4 h-4 text-[#00A8B5]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      REAL PRIVATE LABEL DELIVERABLES
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#00A8B5] text-white rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider">
                    B2B Ready
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM HORIZONTAL TRUST STRIP WITH CIRCULAR ICON BADGES */}
          <div className="mt-12 pt-8 border-t border-[#DCE6ED] grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#E6F7F8] text-[#003D5B] flex items-center justify-center shrink-0 border border-[#BDE7EA]">
                <Shield className="w-6 h-6 text-[#00A8B5]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#1A2B35] leading-tight">FSSAI / GMP</h4>
                <p className="text-xs text-[#4A6070] font-medium mt-0.5">Certified Quality Standards</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#E6F7F8] text-[#003D5B] flex items-center justify-center shrink-0 border border-[#BDE7EA]">
                <Handshake className="w-6 h-6 text-[#00A8B5]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#1A2B35] leading-tight">B2B Partner</h4>
                <p className="text-xs text-[#4A6070] font-medium mt-0.5">Contract Production</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#E6F7F8] text-[#003D5B] flex items-center justify-center shrink-0 border border-[#BDE7EA]">
                <MapPin className="w-6 h-6 text-[#00A8B5]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#1A2B35] leading-tight">Navi Mumbai</h4>
                <p className="text-xs text-[#4A6070] font-medium mt-0.5">Mahape MIDC Facility</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOMEPAGE — MANUFACTURING INTRODUCTION */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#DCE6ED] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 50% Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A8B5] block">
                Company Overview
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#003D5B] uppercase">
                BEVERAGE MANUFACTURING, BUILT FOR BUSINESS
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-[#4A6070] leading-relaxed font-normal">
                <p>
                  Pure Foods &amp; Beverages provides beverage manufacturing solutions for businesses looking to develop, manufacture and launch beverage products under their own requirements or brand.
                </p>
                <p>
                  From packaged drinking water and fruit beverages to flavoured and functional beverages, we support businesses from product development and formulation through production, filling and packaging.
                </p>
              </div>
              
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('about')}
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#003D5B] hover:text-[#00A8B5] transition-colors"
                >
                  <span>Learn More About Our Facility &amp; Approach</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right 50% Real Uploaded Photo - Dedicated Stage */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#DCE6ED] shadow-md bg-gradient-to-b from-[#F0F5F8] to-[#E6F7F8]/50 h-[380px] sm:h-[420px] relative p-6 flex items-center justify-center group">
                <img
                  src="/images/uploaded/carton_lafayette.jpg"
                  alt="Galeries Lafayette Mumbai Private Label Packaged Water"
                  className="max-h-[82%] w-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-[#003D5B] text-white rounded-xl text-[10.5px] font-bold uppercase tracking-wider shadow-2xs">
                    Client Showcase
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE MANUFACTURE — EDITORIAL BEVERAGE MANUFACTURING STYLE CARDS */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A8B5] block">
              Product Categories &amp; Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#003D5B] uppercase">
              WHAT WE MANUFACTURE
            </h2>
          </div>
          <p className="text-sm text-[#4A6070] max-w-md font-medium">
            Tailored B2B formulation, filling and contract manufacturing for multiple beverage segments using client-specific packaging.
          </p>
        </div>

        {/* 3-COLUMN DESKTOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {manufactureCards.map((card) => {
            return (
              <div
                key={card.num}
                className="bg-white rounded-[16px] border border-[#DCE6ED] shadow-2xs hover:shadow-card-hover hover:border-[#003D5B]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
              >
                {/* DEDICATED IMAGE STAGE */}
                <div className="relative h-[270px] sm:h-[310px] w-full bg-gradient-to-b from-[#F0F5F8] to-[#E6F7F8]/50 flex items-center justify-center p-6 border-b border-[#DCE6ED]">
                  
                  {/* Category Label TOP LEFT */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 bg-[#003D5B] text-white rounded-xl text-[10.5px] font-bold uppercase tracking-widest shadow-2xs block">
                      {card.tag}
                    </span>
                  </div>

                  {/* Product or Factory Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                      card.imageFit === 'contain'
                        ? 'max-h-[82%] w-auto object-contain'
                        : 'w-full h-full object-cover object-center absolute inset-0'
                    }`}
                  />
                </div>

                {/* EDITORIAL CONTENT AREA */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Small pale-mint rounded number badge */}
                    <div>
                      <span className="inline-block bg-[#E6F7F8] text-[#003D5B] font-mono text-xs font-bold px-2.5 py-0.5 rounded-md">
                        {card.num}
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-2xl font-semibold text-[#003D5B] leading-tight tracking-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] text-[#4A6070] leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Premium Subtle Text CTA */}
                  <div className="pt-4 border-t border-[#DCE6ED]">
                    <button
                      onClick={() => handleNavClick(card.target)}
                      className="inline-flex items-center text-[13px] font-semibold uppercase tracking-wider text-[#003D5B] group-hover:text-[#00A8B5] transition-colors"
                    >
                      <span>EXPLORE PACKAGING &amp; SPECS</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES PROCESS TIMELINE */}
      <section className="bg-[#003D5B] text-white py-16 lg:py-24 border-y border-[#002B40]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A8B5] block">
              Structured Manufacturing Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
              FROM CONCEPT TO FINISHED PRODUCT
            </h2>
            <p className="text-base sm:text-lg text-gray-200 font-medium">
              One manufacturing partner. Multiple stages of beverage development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 pt-6">
            {processSteps.map((step, idx) => (
              <div
                key={step.num}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00A8B5] transition-all hover:bg-white/10 group"
              >
                <div className="text-2xl font-black font-mono text-[#00A8B5] mb-3">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#00A8B5] transition-colors">
                  {step.name}
                </h4>
                <p className="text-xs text-gray-300 leading-snug">
                  {step.label}
                </p>

                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#00A8B5]">
                    <ChevronRight className="w-6 h-6 opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => handleNavClick('capabilities')}
              className="inline-flex items-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#003D5B] bg-[#E6F7F8] hover:bg-white rounded-xl transition-colors shadow-sm"
            >
              <span>Explore Detailed Manufacturing Process</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#DCE6ED] h-[400px] sm:h-[450px]">
              <img
                src="/images/quality_lab.png"
                alt="Beverage Quality Testing Control Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 left-6 bg-[#003D5B] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md">
              FSSAI / GMP Compliant Processes
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A8B5] block">
              Hygienic Process Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#003D5B] uppercase">
              QUALITY AT EVERY STAGE
            </h2>
            <p className="text-base sm:text-lg text-[#4A6070] leading-relaxed">
              Our manufacturing approach focuses on quality, hygiene, consistency and process control across beverage preparation, filling and packaging.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {qualityHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3.5 rounded-xl bg-white border border-[#DCE6ED]">
                  <CheckCircle2 className="w-5 h-5 text-[#00A8B5] shrink-0" />
                  <span className="text-sm font-semibold text-[#1A2B35]">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#E6F7F8] border border-[#BDE7EA] text-xs text-[#003D5B] font-semibold flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#003D5B] shrink-0" />
              <span>Strict compliance with food safety guidelines (FSSAI &amp; GMP compliant operations).</span>
            </div>
          </div>

        </div>
      </section>

      {/* B2B CALL TO ACTION SECTION */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#003D5B] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-[#002B40]">
          <div className="absolute inset-0 opacity-20 bg-industrial-grid"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-lg bg-white/10 text-[#E6F7F8] text-xs font-bold uppercase tracking-widest border border-white/15">
                Start Your Commercial Production
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                Have a Beverage Idea?
              </h2>
              <p className="text-base sm:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium">
                Tell us what you want to manufacture. Our team can assist with product development, formulation, packaging and commercial production.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full sm:w-auto px-8 py-5 text-sm font-bold uppercase tracking-wider text-[#003D5B] bg-[#E6F7F8] hover:bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 flex items-center justify-center group"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
