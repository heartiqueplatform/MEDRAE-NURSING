import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  ClipboardList, 
  Stethoscope, 
  FileText, 
  TrendingUp, 
  Compass, 
  Users, 
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: 'Nursing Question Bank',
      description: 'Thousands of high-yield practice scenarios across major nursing categories with instant rationales for every option.',
      tag: 'Core Library'
    },
    {
      icon: <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'NCK Examination Preparation',
      description: 'Comprehensive curriculum coverage aligning with national board specifications to ensure first-attempt pass rates.',
      tag: 'Licensure'
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Internal Nursing Exams',
      description: 'Revise for school midterms, finals, pharmacology check-ins, and high-stakes end-of-semester benchmarks.',
      tag: 'Classroom Aid'
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: 'Clinical Revision',
      description: 'Analyze real bedside case files, patient vital signs trendlines, and decide the safest priority interventions.',
      tag: 'Practice'
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      title: 'Nursing Notes',
      description: 'In-depth, beautifully summarized concept guides, mnemonics, and reference sheets for quick active recall sessions.',
      tag: 'Study resources'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />,
      title: 'Progress Tracking',
      description: 'Identify conceptual gaps. Monitor accuracy across subjects from Anatomy & Physiology through Psychiatric Care.',
      tag: 'Analytics'
    },
    {
      icon: <Compass className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      title: 'Career Development',
      description: 'Unlock career mapping, clinical internship interview checklists, and residency preparation materials.',
      tag: 'Career Growth'
    },
    {
      icon: <Users className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
      title: 'Nursing Community',
      description: 'Connect with senior nursing students, practicing interns, and nursing graduates sharing high-purity study resources.',
      tag: 'Peer support'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-10 top-1/3 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block and target audience detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-250 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-sans font-bold text-xs uppercase tracking-wider">
              <span>All-In-One Ecosystem</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white leading-tight">
              Powerful Core Tools Designed Specially <br className="hidden sm:inline" />
              for Every Phase of Your Nursing Journey
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400">
              No generic general-ed material. Everything in Medrae is built specifically for student nurses, interns, practicing nurses, and nursing graduates preparing for licensure exams.
            </p>
          </div>
        </div>

        {/* Bento/Responsive Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-800/80 transition-all flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Corner abstract graphic on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform pointer-events-none" />

              <div className="space-y-5">
                {/* Icon wrapper */}
                <div className="inline-flex p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/20 transition-colors">
                  {feat.icon}
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="flex items-center justify-between gap-2 pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/85">
                <span className="font-mono text-[9px] font-bold text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-wider uppercase">
                  {feat.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

            </motion.div>
          ))}

          {/* SaaS Premium Promo Card inside Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl p-6 bg-emerald-50 dark:bg-slate-950 border border-emerald-250 dark:border-slate-800 text-slate-950 dark:text-white shadow-md hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-4">
              <span className="font-mono text-[9px] font-bold text-emerald-800 dark:text-emerald-400 tracking-wider uppercase border border-emerald-500/25 p-1 px-2.5 rounded-full inline-block bg-white dark:bg-slate-900/40">
                SaaS Preview
              </span>
              <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Unlock Premium Reference Notes & Performance Metrics
              </h3>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect on our premium Medrae application to unlock performance dashboards, smart memory intervals, real patient simulation charts, and customizable NCK quiz engines.
              </p>
            </div>
            
            <a
              href="https://medrae.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-sans font-bold text-xs text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-white transition-colors pt-6 cursor-pointer"
            >
              <span>Explore Medrae App Resources</span>
              <ArrowUpRight className="w-4 h-4 text-current" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
