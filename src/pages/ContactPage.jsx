import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Factory
} from 'lucide-react';
import MapPlaceholder from '../components/MapPlaceholder';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    category: 'Packaged Drinking Water',
    requirement: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-20 lg:space-y-28 pt-28 sm:pt-36 pb-16">
      {/* HERO SECTION WITH LOGO BRANDING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-deep text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-brand-dark shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-industrial-grid"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-mint text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>B2B Commercial Inquiries</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
                LET'S TALK BEVERAGES
              </h1>

              <p className="text-lg sm:text-2xl text-brand-mint font-medium leading-relaxed max-w-3xl">
                Have a product idea, private-label requirement or beverage manufacturing enquiry? Get in touch with our team.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-white/20 flex items-center justify-center">
                <img
                  src="/images/uploaded/logo_pure.jpg"
                  alt="Pure Foods & Beverages Official Logo"
                  className="max-h-28 w-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT INFO & ENQUIRY FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
                Direct Contact Points
              </span>
              <h2 className="text-3xl font-extrabold text-brand-deep uppercase">
                GET IN TOUCH
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed font-medium">
                Connect directly with our facility office in Mahape MIDC Navi Mumbai for technical discussions, site visits, and project estimates.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    FACILITY ADDRESS
                  </h4>
                  <p className="text-base font-bold text-brand-deep mt-1">
                    TTC Industrial Area, Mahape MIDC, Navi Mumbai
                  </p>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    PHONE
                  </h4>
                  <p className="text-base font-mono font-bold text-brand-deep mt-1">
                    [ADD PHONE NUMBER]
                  </p>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    Mon - Sat: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    EMAIL
                  </h4>
                  <p className="text-base font-mono font-bold text-brand-deep mt-1">
                    [ADD EMAIL ADDRESS]
                  </p>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    For commercial B2B enquiries &amp; RFQs
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    WHATSAPP
                  </h4>
                  <p className="text-base font-mono font-bold text-brand-deep mt-1">
                    [ADD WHATSAPP NUMBER]
                  </p>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    Quick messaging &amp; requirement dispatch
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-deep text-white text-xs font-semibold flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-brand-emerald shrink-0" />
              <span>Strict NDA &amp; confidentiality maintained for proprietary beverage recipes.</span>
            </div>
          </div>

          {/* Right Column: Visual B2B Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-md">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
                Commercial Requirement Form
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep uppercase">
                B2B ENQUIRY FORM
              </h3>
              <p className="text-xs text-brand-muted font-medium">
                Fill in your project details below. All fields are designed for visual B2B requirement capture.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-brand-mint text-brand-deep border border-brand-border text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-brand-deep text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-brand-emerald" />
                </div>
                <h4 className="text-2xl font-extrabold uppercase">
                  ENQUIRY SUBMITTED SUCCESSFULLY
                </h4>
                <p className="text-sm font-semibold max-w-md mx-auto">
                  Thank you for reaching out to Pure Foods &amp; Beverages. Your requirement details have been recorded visually.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-deep hover:bg-brand-emerald rounded-lg transition-colors mt-2"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-deep text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Hospitality Group"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-deep text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-deep text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. info@apexbeverages.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-deep text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                </div>

                {/* Manufacturing Category Dropdown */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                    What are you looking to manufacture? *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-deep text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:bg-white transition-all"
                  >
                    <option value="Packaged Drinking Water">Packaged Drinking Water</option>
                    <option value="Fruit Drinks / Juices">Fruit Drinks / Juices</option>
                    <option value="Flavoured Beverage">Flavoured Beverage</option>
                    <option value="Functional Beverage">Functional Beverage</option>
                    <option value="Private Label">Private Label</option>
                    <option value="Contract Manufacturing">Contract Manufacturing</option>
                    <option value="Custom Beverage">Custom Beverage</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Additional Details Textarea */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                    Tell us about your requirement *
                  </label>
                  <textarea
                    name="requirement"
                    rows="4"
                    required
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Provide details on product concept, estimated volumes, bottle/carton preferences, target timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg text-brand-deep text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:bg-white transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-deep hover:bg-brand-emerald rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-brand-muted mt-3">
                    Static visual B2B form — No third party API or external database connection.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald block">
            Location Map
          </span>
          <h2 className="text-3xl font-extrabold text-brand-deep uppercase">
            FIND US
          </h2>
          <p className="text-sm text-brand-muted">
            TTC Industrial Area, Mahape MIDC, Navi Mumbai
          </p>
        </div>

        {/* Visual Map Placeholder */}
        <MapPlaceholder />
      </section>
    </div>
  );
}
