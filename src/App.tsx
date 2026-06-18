import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Quiz from './components/Quiz';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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

      {/* Primary Landing Page Core */}
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

      {/* Cohesive Sub-Footer */}
      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}