import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
}

export default function Header({ isDarkMode, toggleDarkMode, scrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About App', id: 'about' },
    { label: 'Free Quiz', id: 'quiz' },
    { label: 'Features', id: 'features' },
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

          {/* Logo with PWA Icon */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            {/* PWA Icon Image */}
            <img
              src="/pwa-192x192.png"
              alt="Medrae Nursing"
              className="w-10 h-10 rounded-xl shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30 transition-transform group-hover:scale-105"
            />

            <div>
              <span className="font-display font-black text-xl tracking-tight transition-colors duration-200">
                <span className="text-red-600 dark:text-red-500">Medrae</span>
                <span className="text-slate-900 dark:text-white">Nursing</span>
              </span>
              <div className="text-[9px] font-mono font-bold leading-none tracking-widest uppercase transition-colors duration-200">
                <span className="text-slate-500 dark:text-slate-400">EdTech Platform</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-sans font-semibold text-sm transition-colors duration-200 cursor-pointer relative py-1 group
                  text-slate-600 hover:text-red-600
                  dark:text-slate-300 dark:hover:text-red-400"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full
                  bg-red-600 dark:bg-red-400" />
              </button>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Join Button */}
          <div className="hidden md:flex items-center gap-4">

            {/* Animated Theme Switcher Button */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border transition-colors duration-150 cursor-pointer relative overflow-hidden
                border-slate-200 text-slate-600 hover:bg-slate-50
                dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/60"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 flex items-center justify-center"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-amber-400 drop-shadow-sm" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-700" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA action */}
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

          {/* Mobile Right Element: Theme Switcher & Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border transition-colors cursor-pointer
                border-slate-200 text-slate-600 hover:bg-slate-100
                dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/60"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-700" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

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
            className="md:hidden overflow-hidden shadow-xl
              bg-white/95 backdrop-blur-xl border-b border-slate-200/30
              dark:bg-slate-900/95 dark:border-slate-800/50"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2.5 rounded-xl font-semibold transition-colors cursor-pointer
                    text-slate-700 hover:bg-red-50/50
                    dark:text-slate-200 dark:hover:bg-slate-800/60"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
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