import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Building2,
  UtensilsCrossed,
  Coffee,
  Hotel,
  Briefcase,
  Store,
  Sparkles,
  CheckCircle2,
  Factory,
  Package,
  FlaskConical,
  Palette,
  ShieldCheck,
  Truck,
  Check,
  Layers,
  Award,
  Clock,
  Compass
} from 'lucide-react';

export default function PrivateLabelPage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timeline = [
    {
      num: '01',
      title: 'CONCEPT & REQUIREMENT BRIEF',
      icon: Compass,
      desc: 'Define beverage goals, target sensory profile & commercial volumes.',
      detail: 'Specify beverage category, taste profile, mineral requirements, target price points, and intended distribution channels.',
      output: 'Project Scope & Technical Requirement Brief',
      image: null
    },
    {
      num: '02',
      title: 'LAB R&D & FORMULATION',
      icon: FlaskConical,
      desc: 'Develop & test custom formulation in our Mahape MIDC lab.',
      detail: 'Our food scientists balance flavor emulsions, sweetness profiles, added minerals (Magnesium, Potassium), and thermal stability.',
      output: 'Master Approved Recipe & Lab Sample Batch',
      image: '/images/quality_lab.png'
    },
    {
      num: '03',
      title: 'SAMPLING & SENSORY APPROVAL',
      icon: Sparkles,
      desc: 'Evaluate physical trial samples & grant recipe sign-off.',
      detail: 'Taste test trial samples, conduct sensory evaluation, test shelf-life indicators, and grant formal client recipe sign-off.',
      output: 'Formal Client Tasting Sign-Off & Lab Clearance',
      image: null
    },
    {
      num: '04',
      title: 'BOTTLE & PACKAGING DESIGN',
      icon: Palette,
      desc: 'Select bottle molds, closure caps & custom label graphics.',
      detail: 'Finalize bottle shapes (PET, luxury crown glass, eco-friendly cartons), cap colors, label artwork printing, and case packs.',
      output: '3D Bottle Proof & Printed Label Artwork',
      image: '/images/uploaded/bottle_hydro.jpg'
    },
    {
      num: '05',
      title: 'AUTOMATED COMMERCIAL BOTTLING',
      icon: Factory,
      desc: 'Execute commercial bottling run on automated high-speed lines.',
      detail: 'Initiate scheduled production under multi-barrier RO purification, inline mineral dosing, automated filling, capping, and labeling.',
      output: 'Commercial Manufacturing Run Completed',
      image: '/images/hero_factory.png'
    },
    {
      num: '06',
      title: 'QUALITY TESTED DISPATCH',
      icon: Truck,
      desc: 'Receive production-ready commercial stock with COA certification.',
      detail: 'Finished inventory packed in protective shrink-wrapped shipping cases, accompanied by Certificate of Analysis (COA) for delivery.',
      output: 'Quality-Tested Commercial Stock Ready for Delivery',
      image: '/images/uploaded/carton_lafayette.jpg'
    }
  ];

  const targetClients = [
    {
      title: 'Restaurants & Dining',
      desc: 'Custom packaged drinking water and signature beverage lines tailored for casual & fine dining establishments.',
      icon: UtensilsCrossed
    },
    {
      title: 'Cafés & Coffee Chains',
      desc: 'Branded craft iced teas, flavoured lemonades, and functional wellness sodas produced for café chains.',
      icon: Coffee
    },
    {
      title: 'Hotels & Hospitality',
      desc: 'Premium co-branded packaged water bottles and welcome fruit drinks for luxury hospitality properties.',
      icon: Hotel
    },
    {
      title: 'Corporates & Events',
      desc: 'Custom-labeled packaged water and branded refreshment beverages for corporate headquarters and events.',
      icon: Briefcase
    },
    {
      title: 'Retailers & Supermarkets',
      desc: 'Private-label store brand drinking water, juices, and flavoured drinks for retail shelf distribution.',
      icon: Store
    },
    {
      title: 'Emerging Beverage Brands',
      desc: 'End-to-end beverage development and contract bottling support for new beverage brand launches.',
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-20 bg-[#FAFBFD]">
      
      {/* HERO SECTION WITH REAL PRODUCT & FACTORY SHOWCASE */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-gradient-to-r from-[#05291D] via-[#073B2A] to-[#002B40] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#0B6B50]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DCE8E1] text-xs font-extrabold uppercase tracking-widest border border-white/20">
                <Factory className="w-4 h-4 text-[#00A8B5]" />
                <span>B2B Contract Manufacturing &amp; Private Label Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
                BRING YOUR BEVERAGE IDEA TO LIFE
              </h1>

              <p className="text-lg sm:text-2xl text-[#DCE8E1] font-medium leading-relaxed max-w-2xl">
                From initial beverage formulation to automated high-capacity filling, we help businesses develop and manufacture beverages under private label.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] rounded-xl shadow-lg transition-all flex items-center justify-center group"
                >
                  <span>TALK TO US</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('process-timeline');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors text-center"
                >
                  VIEW PRODUCTION PROCESS
                </button>
              </div>
            </div>

            {/* Right Side Real Product Visual Box */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center space-y-3">
                <img
                  src="/images/uploaded/carton_lafayette.jpg"
                  alt="Galeries Lafayette Packaged Water Private Label Deliverable"
                  className="max-h-[320px] w-auto object-contain rounded-2xl drop-shadow-xl"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-[#DCE8E1]">
                  Real Deliverable — Galeries Lafayette Mumbai
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REDESIGNED: PRIVATE LABEL DEVELOPMENT PROCESS (LUXURY DARK STAGE ROADMAP) */}
      <section id="process-timeline" className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 scroll-mt-32 space-y-12">
        
        {/* Container Banner Stage */}
        <div className="bg-gradient-to-br from-[#05291D] via-[#073B2A] to-[#002B40] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border-2 border-[#0B6B50] shadow-2xl relative overflow-hidden space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0B6B50] text-white text-xs font-extrabold uppercase tracking-widest border border-white/20 shadow-md">
              <Layers className="w-4 h-4 fill-current text-white" />
              <span>STEP-BY-STEP CONTRACT MANUFACTURING ROADMAP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight font-sans">
              PRIVATE LABEL DEVELOPMENT PROCESS
            </h2>

            <p className="text-base sm:text-lg text-[#DCE8E1] font-medium leading-relaxed">
              A structured 6-stage technical execution path taking your beverage concept from formulation R&amp;D to automated commercial bottling &amp; dispatch.
            </p>
          </div>

          {/* 6-STEP GRID ROADMAP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {timeline.map((item) => {
              const StepIcon = item.icon || Sparkles;
              return (
                <div
                  key={item.num}
                  id={`step-${item.num}`}
                  className="bg-white/95 backdrop-blur-md text-[#17211D] rounded-3xl border border-white/80 p-8 flex flex-col justify-between space-y-6 shadow-xl hover:scale-[1.02] transition-all duration-300 group relative"
                >
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="px-3.5 py-1.5 rounded-xl bg-[#073B2A] text-white font-mono font-extrabold text-sm shadow-sm group-hover:bg-[#0B6B50] transition-colors">
                        STAGE {item.num}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center">
                      <StepIcon className="w-5 h-5 text-[#0B6B50]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-[#073B2A] uppercase leading-snug group-hover:text-[#0B6B50] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#17211D]">
                      {item.desc}
                    </p>
                    <p className="text-xs text-[#65736C] font-medium leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Photo or Key Output Badge */}
                  <div className="space-y-3 pt-2">
                    {item.image ? (
                      <div className="h-32 rounded-2xl bg-[#F5F8FA] border border-[#DCE8E1] p-3 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xs"
                        />
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#DCE8E1] flex items-center space-x-2 text-xs font-semibold text-[#073B2A]">
                        <CheckCircle2 className="w-4 h-4 text-[#0B6B50] shrink-0" />
                        <span>{item.output}</span>
                      </div>
                    )}

                    <div className="p-2.5 rounded-xl bg-[#EAF4F2] border border-[#DCE8E1] text-[11px] font-bold text-[#073B2A] flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5 text-[#0B6B50] shrink-0" />
                      <span className="truncate">Key Deliverable: {item.output}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-1 text-left">
              <h4 className="text-xl font-extrabold uppercase text-white">
                READY TO START YOUR PRIVATE LABEL BEVERAGE PROJECT?
              </h4>
              <p className="text-xs text-[#DCE8E1] font-medium">
                Connect directly with our manufacturing team in Mahape MIDC Navi Mumbai to review formulations &amp; batch estimates.
              </p>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-[#073B2A] bg-white hover:bg-[#EAF4F2] rounded-xl shadow-lg transition-all shrink-0 flex items-center space-x-2"
            >
              <span>DISCUSS YOUR FORMULATION</span>
              <ArrowRight className="w-4 h-4 text-[#073B2A]" />
            </button>
          </div>

        </div>
      </section>

      {/* TARGET B2B CLIENT SEGMENTS */}
      <section className="bg-white py-16 lg:py-24 border-y border-[#DCE8E1]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B6B50] block">
              Target B2B Segments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#073B2A] uppercase">
              BUILT FOR BUSINESSES
            </h2>
            <p className="text-base text-[#65736C] leading-relaxed font-medium">
              Whether you are launching a new beverage, expanding an existing brand or looking for a reliable manufacturing partner, we can support your production requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetClients.map((client, idx) => {
              const Icon = client.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFBFD] rounded-3xl p-8 border border-[#DCE8E1] space-y-4 hover:border-[#0B6B50] hover:bg-white transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#073B2A] text-white flex items-center justify-center group-hover:bg-[#0B6B50] transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#073B2A]">
                    {client.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#65736C] leading-relaxed font-medium">
                    {client.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B CALL TO ACTION BANNER */}
      <section className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#05291D] via-[#073B2A] to-[#05291D] text-white border border-[#0B6B50]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              HAVE A CUSTOM BEVERAGE REQUIREMENT OR RFQ?
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
