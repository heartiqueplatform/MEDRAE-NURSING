import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Check, CheckCircle2, Bookmark } from 'lucide-react';

export default function CTA() {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    setIsLoading(true);
    // Simulate premium backend subscription save delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmailInput('');
    }, 1200);
  };

  return (
    <section id="cta" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Background graphic circle bubble */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 dark:bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50 dark:from-slate-900/90 dark:via-blue-950/20 dark:to-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-14 text-center text-slate-950 dark:text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle decor dots */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-indigo-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            
            {/* Visual badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-sans font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Upgrade Your Clinical Success</span>
            </div>

            {/* Typography headlines */}
            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-slate-950 dark:text-white">
                Ready to Upgrade Your <br className="hidden sm:inline" />
                Nursing Knowledge?
              </h2>
              <p className="font-sans text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                Join our premium EdTech app Medrae for full coverage of respiratory, cardiovascular, infection control, and daily clinical core exam scenarios.
              </p>
            </div>

            {/* CTA Interaction Row */}
            <div className="flex flex-col items-center justify-center gap-6">
              
              {/* Primary Launch App Action */}
              <motion.a
                href="https://medrae.vercel.app"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-sans font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Join Medrae App Now</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </motion.a>

              <div className="text-slate-500 dark:text-slate-400 text-xs font-mono tracking-widest uppercase">
                &mdash; OR SUBSCRIBE FOR FREE STUDY GUIDES &mdash;
              </div>

              {/* simulated email signup interface */}
              <div className="w-full max-w-md bg-white dark:bg-white/5 p-5 rounded-2xl border border-slate-200 dark:border-white/10 text-left shadow-md">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 mb-2">
                  <Bookmark className="w-4 h-4 text-emerald-800 dark:text-emerald-400" />
                  <span>Free High-Yield Nursing Exam Study Guide PDF</span>
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
                        className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sans text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center whitespace-nowrap flex items-center justify-center font-bold"
                      >
                        {isLoading ? 'Delivering...' : 'Get Study Guide'}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 p-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-800 dark:text-emerald-300 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-bold underline">Check your inbox!</div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">We just emailed you the <strong>High-Yield NCK & Clinical Care Study Guide PDF</strong> pack.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-2.5 text-center sm:text-left">
                  Zero spam. Unsubscribe anytime. High-quality study packages of 50 key questions.
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
