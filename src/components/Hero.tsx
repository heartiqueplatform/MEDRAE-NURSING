import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { CircularGallery, GalleryItem } from './CircularGallery';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

// Sample gallery items - replace with your actual data
const galleryItems: GalleryItem[] = [
  {
    common: 'Clinical Practice',
    binomial: 'Hands-on Learning',
    photo: {
      url: '/images/nursing-1.jpg',
      text: 'Clinical Practice Session',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'NCK Preparation',
    binomial: 'Exam Ready',
    photo: {
      url: '/images/nursing-2.jpg',
      text: 'NCK Exam Preparation',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'Nursing Concepts',
    binomial: 'Core Knowledge',
    photo: {
      url: '/images/nursing-3.jpg',
      text: 'Essential Nursing Concepts',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'Medical Knowledge',
    binomial: 'Clinical Excellence',
    photo: {
      url: '/images/nursing-4.jpg',
      text: 'Medical Knowledge Base',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'Patient Care',
    binomial: 'Compassionate Nursing',
    photo: {
      url: '/images/nursing-5.jpg',
      text: 'Patient Care Excellence',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'Clinical Skills',
    binomial: 'Advanced Training',
    photo: {
      url: '/images/nursing-6.jpg',
      text: 'Clinical Skills Training',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'Nursing Education',
    binomial: 'Continuous Learning',
    photo: {
      url: '/images/nursing-7.jpg',
      text: 'Nursing Education Platform',
      pos: 'center',
      by: 'Medrae Team'
    }
  },
  {
    common: 'Healthcare Team',
    binomial: 'Collaborative Care',
    photo: {
      url: '/images/nursing-8.jpg',
      text: 'Healthcare Team Collaboration',
      pos: 'center',
      by: 'Medrae Team'
    }
  }
];

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-38 pb-16 flex items-center overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-emerald-400/10 dark:bg-emerald-500/5 rounded-full blur-[100px] -mr-16 -mt-16 animate-soft-pulse" />
        <div className="absolute bottom-12 left-6 w-[35vw] h-[35vw] bg-indigo-400/10 dark:bg-teal-500/5 rounded-full blur-[120px] -ml-16 animate-soft-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Single Column Layout - Everything centered */}
        <div className="flex flex-col items-center gap-8 lg:gap-12">

          {/* Circular 3D Gallery - Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
          >
            <CircularGallery
              items={galleryItems}
              radius={450}
              autoRotateSpeed={0.09}
              className="w-full h-full"
            />

            {/* Scroll hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-slate-400 dark:text-slate-500 text-xs font-mono animate-pulse">
              <span>✨ Scroll to rotate gallery</span>
            </div>
          </motion.div>

          {/* Content Section - Below Gallery */}
          <div className="w-full max-w-4xl mx-auto text-center space-y-6">
            {/* Pre-header badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-red-100/90 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-800 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Kenya's #1 Nursing Exam Hub
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-tight tracking-tight"
            >
              Pass Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-violet-600 dark:from-red-400 dark:via-blue-400 dark:to-violet-400">NCK & FQE</span> Exams with Confidence
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
            >
              All nursing units and notes in one app. Curated educational videos without distractions.
              DigiProctor style timed practice to beat exam anxiety. Survival hub, hospital placements,
              and Nursmartt secondhand marketplace. Premium access from just 199 KSh for 2 months.
            </motion.p>

            {/* Feature badges - Expanded with more Medrae features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 pt-1 font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-300"
            >
              <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/60 p-1 px-2.5 rounded-full border border-slate-200/55 dark:border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span className="font-bold text-slate-700 dark:text-slate-300">NCK Licensure Prep</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/60 p-1 px-2.5 rounded-full border border-slate-200/55 dark:border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="font-bold text-slate-700 dark:text-slate-300">DigiProctor Practice</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/60 p-1 px-2.5 rounded-full border border-slate-200/55 dark:border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-violet-500" />
                <span className="font-bold text-slate-700 dark:text-slate-300">Survival Hub</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/60 p-1 px-2.5 rounded-full border border-slate-200/55 dark:border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-slate-700 dark:text-slate-300">Hospital Placements</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/60 p-1 px-2.5 rounded-full border border-slate-200/55 dark:border-slate-800/80">
                <CheckCircle className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-slate-700 dark:text-slate-300">Nursmartt Market</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('quiz')}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-sans font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-500/10 hover:shadow-2xl hover:translate-y-[-2px] active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Practice Free Quiz</span>
                <Play className="w-4 h-4 fill-current text-white/95 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://medrae.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-sans font-bold rounded-2xl border border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <span>Join Medrae App</span>
                <ArrowRight className="w-4.5 h-4.5 text-slate-600 dark:text-slate-400" />
              </a>
            </motion.div>

            {/* User stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-3 pt-2"
            >
              <div className="flex -space-x-3 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-950 bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-md"></div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-950 bg-gradient-to-tr from-emerald-400 to-teal-500 shadow-md"></div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-950 bg-gradient-to-tr from-orange-400 to-amber-500 shadow-md"></div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-950 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-300 shadow-md">+15k</div>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-700 dark:text-slate-300">15,000+</span> nursing students
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section >
  );
}