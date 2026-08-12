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
  Award
} from 'lucide-react';

export default function PrivateLabelPage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timeline = [
    {
      num: '01',
      title: 'BRING YOUR BEVERAGE CONCEPT',
      icon: LightbulbIcon,
      desc: 'Share your beverage idea, target audience, and business requirements.',
      detail: 'Define your desired beverage category, target sensory profile, volume objectives, and distribution requirements with our technical team.',
      output: 'Project Brief & Target Specifications',
      image: null
    },
    {
      num: '02',
      title: 'R&D & FORMULATION',
      icon: FlaskConical,
      desc: 'Develop and refine the beverage formulation in our lab.',
      detail: 'Our R&D approach balances flavor emulsions, sweetness profiles, mineral fortification, stability, and regulatory compliance.',
      output: 'Approved Master Recipe & Flavor Sample',
      image: '/images/quality_lab.png'
    },
    {
      num: '03',
      title: 'SAMPLING & SENSORY APPROVAL',
      icon: Sparkles,
      desc: 'Evaluate physical trial samples and finalize the recipe.',
      detail: 'Conduct sensory panel testing, review physical trial samples, assess shelf-life indicators, and grant formal recipe sign-off.',
      output: 'Client Tasting Sign-Off & Lab Approval',
      image: null
    },
    {
      num: '04',
      title: 'BOTTLE & PACKAGING DESIGN',
      icon: Palette,
      desc: 'Select suitable bottle molds, formats, and artwork packaging.',
      detail: 'Finalize bottle shapes (PET, luxury glass, eco-friendly cartons), cap closures, graphic label artwork, and outer case configurations.',
      output: '3D Bottle Proof & Approved Label Artwork',
      image: '/images/uploaded/bottle_hydro.jpg'
    },
    {
      num: '05',
      title: 'AUTOMATED BOTTLING PRODUCTION',
      icon: Factory,
      desc: 'Execute commercial manufacturing on high-speed lines.',
      detail: 'Initiate scheduled commercial production runs under automated RO purification, mineral dosing, hot/cold filling, capping, and labeling.',
      output: 'Commercial Manufacturing Run Completed',
      image: '/images/hero_factory.png'
    },
    {
      num: '06',
      title: 'QUALITY TESTED FINISHED GOODS',
      icon: Truck,
      desc: 'Receive production-ready commercial beverage stock.',
      detail: 'Finished, quality-tested beverage inventory packed in protective shipping cases, accompanied by Certificate of Analysis (COA) ready for dispatch.',
      output: 'Commercial Inventory Ready for Dispatch',
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

      {/* REDESIGNED: PRIVATE LABEL DEVELOPMENT PROCESS (HIGH-IMPACT STEPPER ROADMAP) */}
      <section id="process-timeline" className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12 scroll-mt-32">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF4F2] text-[#073B2A] text-xs font-extrabold uppercase tracking-widest border border-[#DCE8E1]">
            <Layers className="w-4 h-4 text-[#0B6B50]" />
            <span>STEP-BY-STEP EXECUTION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#073B2A] uppercase">
            PRIVATE LABEL DEVELOPMENT PROCESS
          </h2>
          <p className="text-base sm:text-lg text-[#65736C] font-medium leading-relaxed">
            A structured, 6-stage technical execution path taking your beverage concept from formulation R&amp;D to commercial production &amp; dispatch.
          </p>
        </div>

        {/* Horizontal Process Stepper Indicator Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-2 p-3 bg-white rounded-2xl border border-[#DCE8E1] shadow-xs">
          {timeline.map((t) => (
            <button
              key={t.num}
              onClick={() => {
                const el = document.getElementById(`step-${t.num}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="p-2.5 rounded-xl bg-[#FAFBFD] hover:bg-[#EAF4F2] border border-[#DCE8E1] text-left transition-all group flex items-center space-x-2.5"
            >
              <span className="w-7 h-7 rounded-lg bg-[#073B2A] text-white font-mono text-xs font-extrabold flex items-center justify-center shrink-0 group-hover:bg-[#0B6B50]">
                {t.num}
              </span>
              <span className="text-[11px] font-bold text-[#073B2A] truncate">
                {t.title.split(' ')[0]} {t.title.split(' ')[1] || ''}
              </span>
            </button>
          ))}
        </div>

        {/* 6 LUXURY STEPPER CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timeline.map((item) => {
            const StepIcon = item.icon || Sparkles;
            return (
              <div
                key={item.num}
                id={`step-${item.num}`}
                className="bg-white rounded-3xl border border-[#DCE8E1] hover:border-[#0B6B50] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group p-8 space-y-6 relative"
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-12 h-12 rounded-2xl bg-[#073B2A] text-white flex items-center justify-center font-extrabold font-mono text-lg shrink-0 group-hover:bg-[#0B6B50] transition-colors shadow-sm">
                      {item.num}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B6B50]">
                      STAGE {item.num}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4F2] text-[#073B2A] flex items-center justify-center">
                    <StepIcon className="w-5 h-5 text-[#0B6B50]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-[#073B2A] group-hover:text-[#0B6B50] transition-colors uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-[#17211D] leading-snug">
                    {item.desc}
                  </p>
                  <p className="text-xs text-[#65736C] font-medium leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Photo or Stage Output Box */}
                <div className="space-y-3 pt-2">
                  {item.image ? (
                    <div className="h-36 rounded-2xl bg-[#F5F8FA] border border-[#DCE8E1] p-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
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
                    <span className="truncate">Key Output: {item.output}</span>
                  </div>
                </div>

              </div>
            );
          })}
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
              READY TO START YOUR PRIVATE LABEL BEVERAGE PROJECT?
            </h3>
            <p className="text-sm text-[#EAF4F2] max-w-xl font-medium">
              Connect directly with our manufacturing team in Mahape MIDC Navi Mumbai to discuss your formulation, bottle requirements, and volume estimates.
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

// Helper Lightbulb Icon
function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
