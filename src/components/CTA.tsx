import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Check, CheckCircle2, Bookmark, Users, Award, Clock, HeartPulse } from 'lucide-react';

// Sample images from your gallery - use actual paths
const ctaImages = [
  '/images/nursing-8.jpg',
  '/images/nursing-2.jpg',
  '/images/nursing-3.jpg',
  '/images/nursing-4.jpg',
];

export default function CTA() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmailInput('');
    }, 1200);
  };

  // Auto-rotate images on mobile
  React.useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % ctaImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate images on desktop too
  React.useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % ctaImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '2,000+', label: 'Active Students' },
    { icon: <Award className="w-5 h-5" />, value: '98%', label: 'Pass Rate' },
    { icon: <Clock className="w-5 h-5" />, value: '24/7', label: 'Access' },
  ];

  return (
    <section id="cta" className="bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Background graphics */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 dark:bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -right-20 top-20 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-violet-500/5 dark:bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content Section - Full width on desktop */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Visual badge */}


            {/* Typography headlines */}
            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight text-slate-950 dark:text-white">
                Ready to Upgrade Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-violet-600 dark:from-red-400 dark:via-blue-400 dark:to-violet-400">Nursing Knowledge</span>?
              </h2>
              <p className="font-sans text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                Join our premium EdTech app Medrae for full coverage of respiratory, cardiovascular, infection control, and daily clinical core exam scenarios.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-red-100/50 dark:bg-red-500/10 text-red-600 dark:text-red-400">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 pt-6">
              <motion.a
                href="https://medrae.vercel.app"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-red-500/20 transition-all cursor-pointer"
              >
                <span>Join Medrae App Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <div className="text-slate-500 dark:text-slate-400 text-xs font-mono tracking-widest uppercase flex items-center gap-4">
                <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
                <span>OR SUBSCRIBE FOR FREE GUIDES</span>
                <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
              </div>


            </div>
          </div>
        </div>

        {/* Image Section - Full width edge-to-edge on mobile, below content on desktop */}
        <div className="lg:mt-8">
          {/* Mobile: Full-width edge-to-edge carousel (no rounded corners, full width) */}
          <div className="lg:hidden relative w-screen -ml-4 sm:-ml-6 lg:ml-0 aspect-[4/3] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={ctaImages[activeImageIndex]}
                  alt={`Nursing Education ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold">Clinical Excellence</h3>
                  <p className="text-sm opacity-90">Real-world nursing scenarios</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {ctaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${activeImageIndex === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/70'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Instagram story-style carousel (below content) */}
          <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] max-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={ctaImages[activeImageIndex]}
                  alt={`Nursing Education ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Story-style overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-xs font-semibold mb-3">
                      <span>Medrae Nursing</span>
                      <span className="w-1 h-1 rounded-full bg-white/50" />
                      <span>{activeImageIndex + 1} / {ctaImages.length}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Clinical Excellence</h3>
                    <p className="text-lg opacity-90">Real-world nursing scenarios for modern healthcare</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {ctaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-1 rounded-full transition-all ${activeImageIndex === index
                    ? 'bg-white w-12'
                    : 'bg-white/40 hover:bg-white/60 w-8'
                    }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setActiveImageIndex((prev) => (prev - 1 + ctaImages.length) % ctaImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveImageIndex((prev) => (prev + 1) % ctaImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}