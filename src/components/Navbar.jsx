import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'products', label: 'Products' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contract-manufacturing', label: 'Contract Manufacturing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAFBFD]/95 backdrop-blur-md border-b border-[#DCE6ED] ${
        scrolled
          ? 'py-3 shadow-header-scroll h-[74px]'
          : 'py-4.5 h-[88px]'
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between">
        
        {/* BRAND AREA WITH OFFICIAL UPLOADED LOGO */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 text-left group focus:outline-none shrink-0"
        >
          {/* Official Pure Foods & Beverages Logo Badge */}
          <div className="h-11 sm:h-12 w-auto bg-white p-1 rounded-xl border border-[#DCE6ED] shadow-2xs flex items-center justify-center overflow-hidden group-hover:border-[#003D5B] transition-colors">
            <img
              src="/images/uploaded/logo_pure.jpg"
              alt="Pure Foods & Beverages Official Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[15px] sm:text-[17px] font-extrabold tracking-tight text-[#003D5B] uppercase leading-tight group-hover:text-[#00A8B5] transition-colors">
              PURE FOODS &amp; BEVERAGES
            </span>
            <span className="text-[9px] sm:text-[10.5px] font-bold tracking-[0.18em] text-[#00A8B5] uppercase mt-0.5">
              CONTRACT BEVERAGE MANUFACTURER
            </span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2.5">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 xl:px-4 py-2 text-xs xl:text-[13px] font-semibold rounded-xl whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E6F7F8] text-[#003D5B] font-bold border border-[#BDE7EA] shadow-2xs'
                    : 'text-[#1A2B35] hover:text-[#003D5B] hover:bg-[#E6F7F8]/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* TALK TO US CTA BUTTON */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center px-5 xl:px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#003D5B] hover:bg-[#004B6E] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group border border-[#003D5B]"
          >
            <span>TALK TO US</span>
            <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#003D5B] hover:bg-[#E6F7F8] focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFBFD] border-b border-[#DCE6ED] shadow-xl px-5 pt-4 pb-8 space-y-2.5 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3.5 text-sm font-semibold rounded-xl transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-[#003D5B] text-white font-bold'
                    : 'text-[#1A2B35] hover:bg-[#E6F7F8]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#00A8B5]"></span>}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#003D5B] hover:bg-[#004B6E] rounded-xl shadow-sm flex items-center justify-center"
            >
              <span>TALK TO US</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
