import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Quiz from './components/Quiz';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Synchronize dark-mode attributes onto document for Tailwind selection
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    // Check if it's a page navigation
    if (id === 'privacy' || id === 'terms') {
      setCurrentPage(id);
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // If it's a section navigation, set home page
    setCurrentPage('home');

    const element = document.getElementById(id);
    if (element) {
      // Offset slightly to account for the sticky header
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to go back to home
  const goToHome = () => {
    setCurrentPage('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Render the appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <Privacy scrollToSection={scrollToSection} />;
      case 'terms':
        return <Terms scrollToSection={scrollToSection} />;
      default:
        return (
          <main>
            {/* Intro Segment */}
            <Hero scrollToSection={scrollToSection} />

            {/* Brand Explanation Row */}
            <About scrollToSection={scrollToSection} />

            {/* Premium Interactive Challenge (Quiz) */}
            <Quiz />

            {/* Structural Bento Features Column */}
            <Features />

            {/* Dynamic Pre-Marketing Subscribe & Reroute CTA */}
            <CTA />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* Dynamic Background Noise/Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015] z-[99]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Modern navigation menu */}
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Render Current Page */}
      {renderPage()}

      {/* Only show Footer on main pages, not on privacy/terms */}
      {currentPage === 'home' && (
        <Footer scrollToSection={scrollToSection} />
      )}

      {/* Show a back-to-home button on privacy/terms pages */}
      {(currentPage === 'privacy' || currentPage === 'terms') && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={goToHome}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Back to Home</span>
          </button>
        </div>
      )}
    </div>
  );
}