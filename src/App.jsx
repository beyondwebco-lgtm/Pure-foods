import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import ProductsPage from './pages/ProductsPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import PrivateLabelPage from './pages/PrivateLabelPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle URL hash changes so browser back/forward and deep links work seamlessly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'what-we-do', 'products', 'capabilities', 'contract-manufacturing', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={handlePageChange} />;
      case 'what-we-do':
        return <WhatWeDoPage setCurrentPage={handlePageChange} />;
      case 'products':
        return <ProductsPage setCurrentPage={handlePageChange} />;
      case 'capabilities':
        return <CapabilitiesPage setCurrentPage={handlePageChange} />;
      case 'contract-manufacturing':
        return <PrivateLabelPage setCurrentPage={handlePageChange} />;
      case 'contact':
        return <ContactPage setCurrentPage={handlePageChange} />;
      case 'home':
      default:
        return <HomePage setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text font-sans antialiased selection:bg-brand-deep selection:text-white">
      {/* Sticky Global Header Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Dynamic Page Component Render */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global B2B Footer */}
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}
