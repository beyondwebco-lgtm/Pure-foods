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
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-[1500px] mx-auto rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden transition-all duration-300 pointer-events-auto ${
          scrolled ? 'h-[78px] sm:h-[82px]' : 'h-[92px] sm:h-[100px]'
        }`}
      >
        {/* 1. REAL BOTTLING CONVEYOR LINE BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_factory.png"
            alt="Beverage Bottling Manufacturing Environment"
            className="w-full h-full object-cover object-center"
          />
          {/* 2. SOPHISTICATED DARK OVERLAY WITH LEFT-TO-RIGHT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B40]/92 via-[#003D5B]/85 to-[#002B40]/80 backdrop-blur-[6px]"></div>
        </div>

        {/* 3. HEADER CONTENT BAR */}
        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT BRAND AREA WITH OFFICIAL LOGO */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none shrink-0"
          >
            {/* Official Logo Badge Container */}
            <div className="h-10 sm:h-11 w-auto bg-white p-1 rounded-xl shadow-md border border-white/40 flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/images/uploaded/logo_pure.jpg"
                alt="Pure Foods & Beverages Official Logo"
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[14px] sm:text-[16px] font-extrabold tracking-tight text-white uppercase leading-tight group-hover:text-[#00A8B5] transition-colors">
                PURE FOODS &amp; BEVERAGES
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#00A8B5] uppercase mt-0.5">
                CONTRACT BEVERAGE MANUFACTURER
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION (NO WRAPPING) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 xl:px-3.5 py-2 text-xs xl:text-[13px] font-medium whitespace-nowrap transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#00A8B5] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* TALK TO US CTA BUTTON (FAR RIGHT) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center h-[44px] px-5 sm:px-6 text-xs font-bold uppercase tracking-wider text-[#003D5B] bg-white hover:bg-[#E6F7F8] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group border border-white"
            >
              <span>TALK TO US</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#003D5B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* MOBILE DRAWER MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden relative z-20 bg-[#002B40] text-white border-t border-white/15 p-5 space-y-3 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#003D5B] text-white font-bold border border-[#00A8B5]'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#00A8B5]"></span>}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider text-[#003D5B] bg-white hover:bg-[#E6F7F8] rounded-xl shadow-md flex items-center justify-center space-x-2"
              >
                <span>TALK TO US</span>
                <ArrowRight className="w-4 h-4 text-[#003D5B]" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
