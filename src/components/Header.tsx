import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles, BookOpen, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
}

export default function Header({ isDarkMode, toggleDarkMode, scrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section within the home page
  const handleScrollToSection = (id: string) => {
    setIsOpen(false);
    setSeoOpen(false);

    // If user is on an SEO page, go home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  // Home page section navigation
  const navItems = [
    { label: 'About Medrae Nursing', id: 'about' },
    { label: 'Free Quiz', id: 'quiz' },
    { label: 'Features', id: 'features' },
    { label: 'Nursing Curriculum', id: 'curriculum' },
    { label: 'Merit Cup', id: 'merit-cup' },
    { label: 'GroupPay', id: 'grouppay' },
  ];

  // SEO pages — navigation to separate routes
  const seoPages = [
    { label: 'Nursing Revision in Kenya', to: '/nursing-revision-kenya' },
    { label: 'NCK Exam Revision', to: '/nck-exam-revision' },
    { label: 'NCK Exam Questions', to: '/nck-exam-questions' },
    { label: 'NCK Past Papers', to: '/nck-past-papers' },
    { label: 'NCK Exam Preparation', to: '/nck-exam-preparation' },
    { label: 'KRCHN Revision', to: '/krchn-revision' },
    { label: 'Medrae Merit Cup', to: '/medrae-nursing-merit-cup' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-800/50 shadow-lg shadow-slate-500/5 dark:shadow-slate-800/20 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => handleScrollToSection('hero')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img
              src="/pwa-192x192.png"
              alt="Medrae Nursing"
              className="w-10 h-10 rounded-xl shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30 transition-transform group-hover:scale-105"
            />
            <div>
              <span className="text-xl tracking-tight transition-colors duration-200">
                <span className="text-red-600 dark:text-red-500">Medrae</span>
                <span className="text-slate-900 dark:text-white">Nursing</span>
              </span>
              <div className="text-[9px] font-mono leading-none transition-colors duration-200">
                <span className="text-slate-500 dark:text-slate-400">Made for nurses</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`font-sans font-semibold text-sm transition-colors duration-200 cursor-pointer relative py-1 group
                  ${item.id === 'grouppay'
                    ? 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300'
                    : 'text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400'
                  }`}
              >
                {item.label}
                {item.id === 'grouppay' && (
                  <span className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full
                  ${item.id === 'grouppay'
                    ? 'bg-emerald-500 dark:bg-emerald-400'
                    : 'bg-red-600 dark:bg-red-400'
                  }`}
                />
              </button>
            ))}

            {/* SEO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSeoOpen(true)}
              onMouseLeave={() => setSeoOpen(false)}
            >
              <button
                className="font-sans font-semibold text-sm transition-colors duration-200 cursor-pointer relative py-1 group flex items-center gap-1
                  text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400"
              >
                <BookOpen className="w-4 h-4" />
                Revision Guides
                <ChevronDown className={`w-3 h-3 transition-transform ${seoOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {seoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xl overflow-hidden"
                  >
                    {seoPages.map((page) => (
                      <Link
                        key={page.to}
                        to={page.to}
                        onClick={() => setSeoOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-red-50/50 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://medrae.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 font-sans font-bold text-sm rounded-xl shadow-md transition-all duration-150 cursor-pointer
                bg-gradient-to-r from-red-600 to-blue-600 text-white
                hover:shadow-lg hover:shadow-red-500/30
                dark:from-red-500 dark:to-blue-600 dark:hover:shadow-red-500/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4" />
              Join Medrae App
            </motion.a>
          </div>

          {/* Mobile Right Element: Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors cursor-pointer
                text-slate-600 hover:bg-slate-100
                dark:text-slate-300 dark:hover:bg-slate-800/60
                focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden shadow-xl
              bg-white/95 backdrop-blur-xl border-b border-slate-200/30
              dark:bg-slate-900/95 dark:border-slate-800/50"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">

              {/* Section nav */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl font-semibold transition-colors cursor-pointer
                    ${item.id === 'grouppay'
                      ? 'text-emerald-600 hover:bg-emerald-50/50 dark:text-emerald-400 dark:hover:bg-slate-800/60'
                      : 'text-slate-700 hover:bg-red-50/50 dark:text-slate-200 dark:hover:bg-slate-800/60'
                    }`}
                >
                  {item.label}
                  {item.id === 'grouppay' && (
                    <span className="ml-2 text-[10px] font-black uppercase tracking-wider text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                      Save 50%
                    </span>
                  )}
                </button>
              ))}

              {/* SEO pages divider */}
              <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-800">
                <p className="px-4 pb-2 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Revision Guides
                </p>
                {seoPages.map((page) => (
                  <Link
                    key={page.to}
                    to={page.to}
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-red-50/50 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>

              {/* Join app CTA */}
              <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-800">
                <a
                  href="https://medrae.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-center font-bold shadow-md cursor-pointer
                    bg-gradient-to-r from-red-600 to-blue-600 text-white
                    dark:from-red-500 dark:to-blue-600"
                >
                  <Sparkles className="w-4 h-4" />
                  Join Medrae App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}