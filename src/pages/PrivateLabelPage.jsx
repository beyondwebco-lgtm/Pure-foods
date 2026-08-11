import React from 'react';
import {
  ArrowRight,
  ChevronDown,
  Building2,
  UtensilsCrossed,
  Coffee,
  Hotel,
  Briefcase,
  Store,
  Sparkles,
  CheckCircle2,
  Factory,
  Package
} from 'lucide-react';

export default function PrivateLabelPage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timeline = [
    {
      num: '01',
      title: 'BRING YOUR CONCEPT',
      desc: 'Share your beverage idea and business requirements.',
      detail: 'Define your desired beverage category, target sensory profile, volume objectives, and distribution requirements.',
      image: null
    },
    {
      num: '02',
      title: 'FORMULATION',
      desc: 'Develop and refine the beverage formulation.',
      detail: 'Our R&D approach balances flavor, sweetness, acidity, minerals, and regulatory compliance.',
      image: '/images/quality_lab.png'
    },
    {
      num: '03',
      title: 'SAMPLING',
      desc: 'Evaluate samples and finalize the product direction.',
      detail: 'Taste test trial batches, review physical samples, and approve recipe finalization.',
      image: null
    },
    {
      num: '04',
      title: 'PACKAGING',
      desc: 'Select suitable packaging and presentation requirements.',
      detail: 'Finalize bottle shapes, glass profiles, paperboard carton graphics, closure caps, and outer pack formats.',
      image: '/images/uploaded/bottle_hydro.jpg'
    },
    {
      num: '05',
      title: 'PRODUCTION',
      desc: 'Move from approved product to commercial production.',
      detail: 'Initiate scheduled commercial production runs across automated filling and packaging lines.',
      image: '/images/hero_factory.png'
    },
    {
      num: '06',
      title: 'FINISHED GOODS',
      desc: 'Receive production-ready finished beverages.',
      detail: 'Finished, quality-tested beverage inventory packed and prepared for commercial dispatch.',
      image: '/images/uploaded/carton_lafayette.jpg'
    }
  ];

  const targetClients = [
    {
      title: 'Restaurants',
      desc: 'Custom packaged drinking water and signature beverage lines tailored for casual & fine dining establishments.',
      icon: UtensilsCrossed
    },
    {
      title: 'Cafés',
      desc: 'Branded craft iced teas, flavoured lemonades, and functional wellness sodas produced for café chains.',
      icon: Coffee
    },
    {
      title: 'Hotels & Hospitality',
      desc: 'Premium co-branded packaged water bottles and welcome fruit drinks for luxury hospitality properties.',
      icon: Hotel
    },
    {
      title: 'Corporates',
      desc: 'Custom-labeled packaged water and branded refreshment beverages for corporate headquarters and events.',
      icon: Briefcase
    },
    {
      title: 'Retailers & Supermarkets',
      desc: 'Private-label store brand drinking water, juices, and flavoured drinks for retail shelf distribution.',
      icon: Store
    },
    {
      title: 'Emerging Brands & Startups',
      desc: 'End-to-end beverage development and production support for new beverage brand launches.',
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-16">
      {/* HERO SECTION WITH REAL PRODUCT & FACTORY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-brand-dark shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-mint text-xs font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>B2B Lead Generation &amp; Private Label Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
                BRING YOUR BEVERAGE IDEA TO LIFE
              </h1>

              <p className="text-lg sm:text-2xl text-brand-mint font-medium leading-relaxed max-w-2xl">
                From concept to finished goods, we help businesses develop and manufacture beverages according to their requirements.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-dark bg-brand-mint hover:bg-white rounded-xl shadow-lg transition-colors flex items-center justify-center group"
                >
                  <span>TALK TO US</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('process-timeline');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors text-center"
                >
                  VIEW PRODUCTION PROCESS
                </button>
              </div>
            </div>

            {/* Right Side Real Product Visual Box */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl flex items-center justify-center">
                <img
                  src="/images/uploaded/carton_lafayette.jpg"
                  alt="Galeries Lafayette Packaged Water Private Label Deliverable"
                  className="max-h-[360px] w-auto object-contain rounded-xl"
                />
              </div>
              <div className="mt-2 text-center text-xs font-semibold text-brand-mint">
                Real Client Deliverable — Galeries Lafayette Mumbai
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE WITH REAL PHOTOGRAPHY STAGES */}
      <section id="process-timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
            Step-by-Step Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-deep uppercase">
            PRIVATE LABEL DEVELOPMENT PROCESS
          </h2>
          <p className="text-base text-brand-muted font-medium">
            A clear structured path from your initial beverage concept to finished commercial stock.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {timeline.map((item, idx) => (
            <React.Fragment key={item.num}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 gap-6 items-center group">
                
                <div className="md:col-span-8 flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-deep text-white flex items-center justify-center font-black font-mono text-xl shrink-0 group-hover:bg-brand-emerald transition-colors">
                    {item.num}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-deep group-hover:text-brand-emerald transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-text">
                      {item.desc}
                    </p>
                    <p className="text-xs text-brand-muted font-medium pt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Stage Photo Preview */}
                <div className="md:col-span-4 flex justify-end">
                  {item.image ? (
                    <div className="h-28 w-full md:w-36 rounded-xl bg-brand-bg border border-brand-border overflow-hidden p-2 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-28 w-full md:w-36 rounded-xl bg-brand-mint/50 border border-brand-border flex items-center justify-center text-brand-deep text-xs font-bold font-mono">
                      STAGE {item.num}
                    </div>
                  )}
                </div>

              </div>

              {idx < timeline.length - 1 && (
                <div className="flex justify-center text-brand-emerald py-1">
                  <ChevronDown className="w-8 h-8 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH (BUILT FOR BUSINESSES) */}
      <section className="bg-white py-16 lg:py-24 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
              Target B2B Segments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-deep uppercase">
              BUILT FOR BUSINESSES
            </h2>
            <p className="text-base text-brand-muted leading-relaxed font-medium">
              Whether you are launching a new beverage, expanding an existing brand or looking for a reliable manufacturing partner, we can support your production requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetClients.map((client, idx) => {
              const Icon = client.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-bg rounded-2xl p-8 border border-brand-border space-y-4 hover:border-brand-emerald/50 hover:bg-white transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-deep text-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-emerald" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-deep">
                    {client.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PRIVATE LABEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-mint/60 rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-border space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
            Strategic Brand Expansion
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-deep uppercase leading-tight">
            YOUR BRAND. YOUR PRODUCT. OUR MANUFACTURING EXPERTISE.
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-4xl font-medium">
            Private-label manufacturing allows businesses to develop beverage products under their own brand while working with a manufacturing partner for formulation, production and packaging.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-brand-border space-y-2">
              <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
              <h4 className="font-bold text-brand-deep">Zero Capital Expenditure</h4>
              <p className="text-xs text-brand-muted font-medium">
                Avoid heavy capital investments in land, bottling machinery, water filtration equipment, and factory maintenance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-border space-y-2">
              <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
              <h4 className="font-bold text-brand-deep">Technical Formulation Support</h4>
              <p className="text-xs text-brand-muted font-medium">
                Leverage experienced food technologists to fine-tune taste profiles, acidity, brix, minerals, and shelf-life parameters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-border space-y-2">
              <CheckCircle2 className="w-6 h-6 text-brand-emerald" />
              <h4 className="font-bold text-brand-deep">Regulatory &amp; Quality Focus</h4>
              <p className="text-xs text-brand-muted font-medium">
                Operate with peace of mind knowing production processes adhere to strict FSSAI hygiene guidelines and GMP standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL B2B CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-brand-dark shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
            Start Your Beverage Line Today
          </span>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            READY TO DISCUSS YOUR BEVERAGE?
          </h2>

          <p className="text-base sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto">
            Tell us what you want to manufacture and our team can help you understand the next steps.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-10 py-5 text-sm font-bold uppercase tracking-wider text-brand-dark bg-brand-mint hover:bg-white rounded-xl shadow-xl transition-all duration-200 inline-flex items-center group"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
