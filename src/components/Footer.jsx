import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002B40] text-white pt-16 pb-12 border-t border-[#003D5B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Uploaded Official Logo */}
              <div className="h-12 w-auto p-1 bg-white rounded-lg border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/uploaded/logo_pure.jpg"
                  alt="Pure Foods & Beverages Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-extrabold tracking-tight uppercase text-white">
                  PURE FOODS &amp; BEVERAGES
                </span>
                <span className="block text-xs font-medium tracking-wider text-[#00A8B5] uppercase">
                  Contract Beverage Manufacturer
                </span>
              </div>
            </div>
            
            <p className="text-xl font-semibold text-[#E6F7F8] leading-snug">
              Building Beverages. Building Brands.
            </p>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Commercial beverage formulation, water treatment, filling and contract manufacturing partner for businesses, retailers and emerging brands.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded text-xs font-semibold bg-white/10 text-[#E6F7F8] border border-white/15">
                FSSAI / GMP Compliant Processes
              </span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00A8B5]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('what-we-do')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('capabilities')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Manufacturing &amp; Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contract-manufacturing')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Private Label / Contract Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Manufacturing Location Col */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00A8B5]">
              Manufacturing Facility &amp; Contact
            </h4>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00A8B5] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Facility Address:</span>
                  <span>TTC Industrial Area, Mahape MIDC, Navi Mumbai</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00A8B5] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Phone:</span>
                  <span className="font-mono text-white">9988776655</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00A8B5] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Email:</span>
                  <span className="font-mono text-white">purefoods@gmai.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-[#00A8B5] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">WhatsApp:</span>
                  <span className="font-mono text-white">9988776655</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#003D5B] bg-[#E6F7F8] hover:bg-white rounded-lg transition-colors"
              >
                <span>Submit B2B Enquiry</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} PURE FOODS &amp; BEVERAGES. All Rights Reserved.</p>
          <p className="text-gray-400">
            Beverage Manufacturing &amp; Bottling Solutions • TTC Industrial Area, Mahape MIDC, Navi Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
