import React from 'react';
import {
  Droplets,
  FlaskConical,
  Sliders,
  Factory,
  CheckCircle2,
  Package,
  Layers,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function CapabilitiesPage({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      num: '01',
      title: 'Water Treatment',
      subtitle: 'Professional water treatment and preparation for beverage production.',
      desc: 'Water quality is the foundation of every beverage formulation. Our facility utilizes a multi-barrier treatment system comprising raw water storage, multi-grade sand filtration, activated carbon absorption, reverse osmosis (RO) demineralization, and ultraviolet (UV) disinfection.',
      points: [
        'Multi-stage Reverse Osmosis (RO) membranes',
        'Activated carbon filtration for taste & odor control',
        'UV disinfection and sub-micron cartridge filtration',
        'Continuous total dissolved solids (TDS) & pH monitoring'
      ],
      image: '/images/water_treatment.png',
      badge: 'Step 01 — Raw Input Purification'
    },
    {
      num: '02',
      title: 'Beverage Preparation',
      subtitle: 'Controlled preparation of beverage ingredients and inputs.',
      desc: 'Rigorous ingredient handling and syrup room operations. Sweeteners, fruit concentrates, acids, and flavor extracts are accurately weighed and hydrated in food-grade SS316 stainless steel tanks under hygienic agitation.',
      points: [
        'Food-grade SS316 stainless steel preparation vessels',
        'Precision ingredient weighing & syrup heating controls',
        'Hygienic strainers & liquid transfer pumps',
        'Enclosed, sanitized syrup room environment'
      ],
      image: '/images/beverage_blending.png',
      badge: 'Step 02 — Batch Preparation'
    },
    {
      num: '03',
      title: 'Blending & Formulation',
      subtitle: 'Product blending and formulation according to required specifications.',
      desc: 'Commercial blending tanks ensure uniform flavor distribution, brix consistency, and density control prior to line filling. Automated agitation routines eliminate batch variance.',
      points: [
        'Agitated stainless steel blending vessels',
        'Automated Brix & pH verification before line release',
        'Homogenous mixing for pulp and botanical extracts',
        'Clean-In-Place (CIP) sanitizer routines between batches'
      ],
      image: null,
      badge: 'Step 03 — Homogenous Blending'
    },
    {
      num: '04',
      title: 'Filling & Packaging',
      subtitle: 'Efficient filling and packaging across suitable formats.',
      desc: 'High-speed automated bottle blow-molding, rinser, filler, and capper monoblock machinery operating inside an enclosed over-pressured cleanroom environment to prevent external contamination.',
      points: [
        'Automated bottle rinsing, liquid filling & capping monoblock',
        'Enclosed cleanroom filling environment',
        'Precision fill-level sensors & neck closure inspection',
        'Automatic sleeve labeling, batch inkjet coding & shrink packaging'
      ],
      image: '/images/hero_factory.png',
      badge: 'Step 04 — High-Speed Filling'
    },
    {
      num: '05',
      title: 'Quality Testing',
      subtitle: 'Quality-focused checks throughout the manufacturing process.',
      desc: 'In-line quality checkpoints and laboratory analytical testing at critical control points (CCP). Every production run undergoes sensory, physical, chemical, and microbiological testing.',
      points: [
        'In-house analytical & quality testing laboratory',
        'Torque testing on caps & bottle drop-test validation',
        'Microbiological incubation & safety verification',
        'FSSAI & GMP compliant documentation and batch retains'
      ],
      image: '/images/quality_lab.png',
      badge: 'Step 05 — Quality Verification'
    },
    {
      num: '06',
      title: 'Packaging Formats',
      subtitle: 'Versatile bottle and carton packaging formats for commercial distribution.',
      desc: 'Flexibility in packaging formats including premium glass bottles, PET bottles, and eco-friendly paperboard beverage cartons.',
      points: [
        'Premium Glass Bottles with crown or screw caps',
        'PET Bottles (250ml, 500ml, 1000ml & custom shapes)',
        'Eco-Friendly Beverage Cartons (350ml Added Minerals format)',
        'Outer case bundling in 12, 24, or 36 pack shrink wraps'
      ],
      image: '/images/uploaded/carton_lafayette.jpg',
      badge: 'Step 06 — Versatile Packaging Formats'
    },
    {
      num: '07',
      title: 'Custom Production',
      subtitle: 'Manufacturing support for brands with specific product requirements.',
      desc: 'Tailored manufacturing schedules, recipe matching, trial run validation, and packaging customization for specialized beverage initiatives.',
      points: [
        'Small-batch formulation trials & pilot runs',
        'Custom bottle mold coordination & artwork placement',
        'Flexible scheduling to align with seasonal retail demand',
        'End-to-end technical consultation from idea to market delivery'
      ],
      image: null,
      badge: 'Step 07 — Custom Contract Runs'
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-16">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-brand-dark shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-brand-mint text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              <span>Industrial Processing &amp; Packaging Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              MANUFACTURING &amp; CAPABILITIES
            </h1>

            <p className="text-lg sm:text-2xl text-brand-mint font-medium leading-relaxed max-w-3xl">
              A structured approach to beverage production — from water treatment to finished packaging.
            </p>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Explore our step-by-step beverage manufacturing architecture engineered for purity, product integrity, and commercial reliability.
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL PROCESS SECTIONS WITH FULL-WIDTH & CONTAINED IMAGE BREAKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {steps.map((step, idx) => {
          return (
            <React.Fragment key={step.num}>
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-12 border border-brand-border shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border pb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-black font-mono text-white bg-brand-deep px-4 py-2 rounded-xl">
                      {step.num}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald block">
                        {step.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep uppercase">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => handleNavClick('contact')}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-deep bg-brand-mint hover:bg-brand-deep hover:text-white rounded-lg transition-colors shrink-0"
                  >
                    Inquire About {step.title}
                  </button>
                </div>

                <p className="text-lg font-semibold text-brand-deep">
                  {step.subtitle}
                </p>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-4xl font-medium">
                  {step.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-brand-bg border border-brand-border">
                      <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-brand-deep">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image break after section */}
              {step.image && (
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-brand-bg min-h-[350px] sm:h-[420px] flex items-center justify-center p-6 group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`max-h-full w-auto transition-transform duration-700 hover:scale-105 ${
                      step.image.includes('/uploaded/') ? 'object-contain' : 'object-cover w-full h-full'
                    }`}
                  />
                  <div className="absolute top-4 left-4 bg-brand-deep text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                    {step.title} Facility Visual
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </section>

      {/* CAPABILITIES CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-brand-deep text-white border border-brand-dark flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
              Commercial Operations
            </span>
            <h3 className="text-3xl font-extrabold uppercase">
              Ready to Discuss Your Manufacturing Requirements?
            </h3>
            <p className="text-base text-gray-300 max-w-2xl">
              Connect with our production team in Mahape MIDC Navi Mumbai to review facility capabilities, formulation parameters, and project timelines.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-dark bg-brand-mint hover:bg-white rounded-xl shadow-lg transition-colors shrink-0"
          >
            START A CONVERSATION
          </button>
        </div>
      </section>
    </div>
  );
}
