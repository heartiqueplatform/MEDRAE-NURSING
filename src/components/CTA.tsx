import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Check, CheckCircle2, Bookmark, Users, Award, Clock, HeartPulse } from 'lucide-react';

// Sample images from your gallery - use actual paths
const ctaImages = [
  '/images/nursing-1.jpg',
  '/images/nursing-2.jpg',
  '/images/nursing-3.jpg',
  '/images/nursing-4.jpg',
];

export default function CTA() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '15,000+', label: 'Active Students' },
    { icon: <Award className="w-5 h-5" />, value: '98%', label: 'Pass Rate' },
    { icon: <Clock className="w-5 h-5" />, value: '24/7', label: 'Access' },
  ];

  return (
    <section id="cta" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Background graphics */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 dark:bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -right-20 top-20 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-violet-500/5 dark:bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="bg-gradient-to-br from-slate-50 via-red-50/20 to-slate-50 dark:from-slate-900/90 dark:via-blue-950/20 dark:to-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center lg:text-left relative overflow-hidden shadow-2xl">

            {/* Subtle decor dots */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-red-500/10 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-6">

              {/* Visual badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-800 dark:text-red-400 font-sans font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>🚀 Upgrade Your Clinical Success</span>
              </div>

              {/* Typography headlines */}
              <div className="space-y-4">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-slate-950 dark:text-white">
                  Ready to Upgrade Your <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-violet-600 dark:from-red-400 dark:via-blue-400 dark:to-violet-400">Nursing Knowledge</span>?
                </h2>
                <p className="font-sans text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                  Join our premium EdTech app Medrae for full coverage of respiratory, cardiovascular, infection control, and daily clinical core exam scenarios.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
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
              <div className="flex flex-col items-center lg:items-start gap-4 pt-4">
                <motion.a
                  href="https://medrae.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-red-500/20 transition-all cursor-pointer w-full sm:w-auto justify-center"
                >
                  <span>Join Medrae App Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <div className="text-slate-500 dark:text-slate-400 text-xs font-mono tracking-widest uppercase flex items-center gap-4">
                  <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
                  <span>OR SUBSCRIBE FOR FREE GUIDES</span>
                  <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
                </div>

                {/* Email signup */}
                <div className="w-full bg-white dark:bg-white/5 p-5 rounded-2xl border border-slate-200 dark:border-white/10 text-left shadow-md">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-red-800 dark:text-red-400 mb-2">
                    <Bookmark className="w-4 h-4 text-red-800 dark:text-red-400" />
                    <span>📚 Free High-Yield Nursing Exam Study Guide PDF</span>
                  </div>

                  <AnimatePresence mode="wait">
                    {!isSubscribed ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row gap-2"
                      >
                        <input
                          type="email"
                          required
                          placeholder="nursing_student@university.edu"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                        />
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="px-5 py-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center whitespace-nowrap flex items-center justify-center"
                        >
                          {isLoading ? 'Delivering...' : 'Get Study Guide'}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-500/10 border border-red-500/20 rounded-xl text-red-800 dark:text-red-300 text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                        <div>
                          <div className="font-bold underline">✅ Check your inbox!</div>
                          <p className="text-xs text-slate-600 dark:text-slate-300">We just emailed you the <strong>High-Yield NCK & Clinical Care Study Guide PDF</strong> pack.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-2.5 text-center sm:text-left">
                    Zero spam. Unsubscribe anytime. High-quality study packages of 50+ key questions.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[500px]">
            {/* Top Left - Large Image */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ctaImages[0]}
                alt="Nursing Student"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold">Clinical Excellence</h3>
                <p className="text-sm opacity-90">Real-world nursing scenarios</p>
              </div>
            </div>

            {/* Top Right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ctaImages[1]}
                alt="NCK Preparation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold">NCK Prep</h4>
                <p className="text-xs opacity-90">Exam ready</p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ctaImages[2]}
                alt="Clinical Skills"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold">Clinical Skills</h4>
                <p className="text-xs opacity-90">Hands-on training</p>
              </div>
            </div>

            {/* Extra Small Image - Bottom Left */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ctaImages[3]}
                alt="Nursing Education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold">Education</h4>
                <p className="text-xs opacity-90">Learn anywhere</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}