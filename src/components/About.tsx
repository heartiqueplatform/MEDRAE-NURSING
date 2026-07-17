import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, UserCheck, ShieldAlert, Award, FileText, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  scrollToSection: (id: string) => void;
}

export default function About({ scrollToSection }: AboutProps) {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'Targeted Exam & Licensure Prep',
      description: 'Specially structured practice modules formatted to build high-yield analytical skills for internal nursing school tests as well as official NCK Licensing board examinations.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'Clinical Case Practice',
      description: 'Go beyond raw memorization. Analyze realistic clinical scenarios, medical-surgical complications, and make the most safe, logical care decisions.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'Built for Busy Nursing Students',
      description: 'High-yield interactive learning resources and cheat notes designed to fit seamlessly into busy clinical hours, shifts, or classroom breaks.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Column 1: Core Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-250 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-sans font-bold text-xs uppercase tracking-wider">
              <span>About <span className="text-red-600 dark:text-red-400">Medrae</span> Platform</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white leading-tight">
              Bridging the Gap Between Nursing Theory & Live Patient Care
            </h2>

            <p className="font-sans text-slate-600 dark:text-slate-300 leading-relaxed text-base pt-2">
              At Medrae Nursing, we believe nursing education should be active, intuitive, and accessible. Traditional textbooks overload you with hundreds of dense pages. Medrae refines clinical information into interactive, high-yield learning bites.
            </p>

            <p className="font-sans text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              With our active learning engine, you acquire a deep clinical mindset. Learn the exact biological rationales behind every vital sign shift, laboratory value, and medical response.
            </p>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-4">
              <div className="text-3xl font-display font-black text-emerald-600 dark:text-emerald-400">98%</div>
              <div className="font-sans text-sm text-slate-500 dark:text-slate-400 font-medium">
                Of tested nursing students report higher confidence in clinical reasoning within two weeks.
              </div>
            </div>
          </div>

          {/* Column 2: Visual Grid of Points */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex gap-4 p-6 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl max-h-12 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div className="space-y-1.5 animate-fade-in">
                    <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white">
                      {point.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Interactive Scenario Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-500 dark:to-teal-600 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="font-mono text-[10px] font-semibold text-emerald-100 uppercase tracking-widest">Immediate Demonstration</div>
                <div className="font-display font-bold text-base">Ready to put your judgment to the test?</div>
                <p className="font-sans text-xs text-emerald-50/90">No registration. Answer right now to evaluate your diagnostic strength.</p>
              </div>
              <button
                onClick={() => scrollToSection('quiz')}
                className="px-4 py-2.5 bg-white text-emerald-800 dark:text-teal-950 rounded-xl font-bold text-xs shadow-md hover:bg-slate-50 dark:hover:bg-teal-50 hover:scale-[1.03] active:scale-100 transition-all cursor-pointer whitespace-nowrap self-stretch sm:self-auto text-center"
              >
                Launch Mini Quiz
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
