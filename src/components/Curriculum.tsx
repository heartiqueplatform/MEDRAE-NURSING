import React, { useState } from 'react';
import { BookOpen, GraduationCap, Brain, Target, Award, Star, ChevronRight, Sparkles, Layers, Zap, Search, X, Medal, Stethoscope } from 'lucide-react';

interface CurriculumProps {
    scrollToSection?: (id: string) => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ scrollToSection }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { icon: GraduationCap, value: "3", label: "Academic Years", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30" },
        { icon: Layers, value: "80", label: "Modules", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/30" },
        { icon: Target, value: "1,064+", label: "Topics & Subtopics", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/30" },
        { icon: Medal, value: "15,400+", label: "NCK-Style Questions", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/30" },
    ];

    const years = [
        {
            year: "Year 1",
            subtitle: "Foundation Nursing",
            icon: BookOpen,
            color: "from-emerald-500 to-teal-500",
            borderColor: "border-emerald-500",
            badgeBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
            modules: "18 + 22 Modules",
            semesters: "2 Semesters",
            description: "Foundations — Communication, Anatomy & Physiology, Fundamentals of Nursing I & II, Microbiology, Psychology, Sociology, Maternal & Newborn Health I & II, Community Health I & II, Environmental Health, HIV/AIDS, First Aid, Trauma & BLS, Cardiovascular, Hematological, Medical-Surgical, Pharmacology I, Pulmonary, Gender & Sexuality, Family Planning, Immunization, Health Promotion, Human Nutrition, and clinical practicums.",
            topics: "Communication skills, vital signs, infection control, normal pregnancy, drug calculations, basic nursing procedures, anatomy systems, community health concepts, and more."
        },
        {
            year: "Year 2",
            subtitle: "Clinical Nursing",
            icon: Stethoscope,
            color: "from-blue-500 to-cyan-500",
            borderColor: "border-blue-500",
            badgeBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            modules: "13 + 11 Modules",
            semesters: "2 Semesters",
            description: "Clinical Nursing — Pharmacology II, Alimentary & Biliary, Renal & Genito-Urinary, Perioperative, Palliative Care & Oncology, Gynaecology, Research, Community Strategy, Pediatric Nursing & IMCI, Mental & Psychiatric Health, Orthopedic, Endocrinological, ENT, Ophthalmic Nursing, and clinical practicums.",
            topics: "Pediatric emergencies, psychiatric assessment, fracture management, diabetes care, ENT conditions, eye disorders, cancer nursing, perioperative care, and more."
        },
        {
            year: "Year 3",
            subtitle: "Advanced Practice",
            icon: Brain,
            color: "from-purple-500 to-pink-500",
            borderColor: "border-purple-500",
            badgeBg: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
            modules: "9 + 7 Clinical",
            semesters: "2 Semesters",
            description: "Advanced Practice — Teaching Methodology, Neurological Nursing, Dermatological, Gerontological & HBC, Community Assessment & Diagnosis, Epidemiology, Communicable & Vector-borne Diseases, Healthcare for Special Populations, Health Systems Management, and intensive clinical practicums.",
            topics: "Stroke management, skin conditions, elderly care, disease surveillance, outbreak investigation, health policy, leadership, community diagnosis, and more."
        },
    ];

    const features = [
        { icon: Search, title: "Topic-by-Topic Learning", desc: "Navigate Year → Semester → Module → Unit → Topic → Questions. Find exactly what you need to study." },
        { icon: Brain, title: "AI-Powered Practice", desc: "Smart algorithm predicts your NCK readiness and identifies weak areas for focused improvement." },
        { icon: Star, title: "Premium Questions", desc: "Every topic features NCK-style MCQs with detailed explanations, mnemonics, and clinical pearls." },
        { icon: Zap, title: "Instant Feedback", desc: "Get immediate explanations after every answer. Understand why you're right or wrong." },
    ];

    return (
        <section id="curriculum" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-emerald-100/40 dark:bg-emerald-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-100/40 dark:bg-cyan-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">


                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
                        Kenya's Most Complete{" "}
                        <span className="text-emerald-600 dark:text-emerald-400 italic">Nursing Curriculum</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                        Study the entire Kenya Registered Community Health Nursing (KRCHN) syllabus organized by Year, Semester, Module, Unit, and Topic. Following the official Nursing Council of Kenya (NCK) syllabus.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`${stat.bg} rounded-2xl p-5 md:p-6 text-center border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                        >
                            <stat.icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 ${stat.color}`} />
                            <p className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</p>
                            <p className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Year Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
                    {years.map((year, i) => (
                        <div
                            key={i}
                            className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                            {/* Card Header */}
                            <div className={`bg-gradient-to-r ${year.color} p-6 text-white`}>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-5xl font-black opacity-30">0{i + 1}</span>
                                    <year.icon className="w-10 h-10 opacity-80" />
                                </div>
                                <h3 className="text-2xl font-black">{year.year}</h3>
                                <p className="text-white/80 text-sm mt-1">{year.subtitle}</p>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Semesters</span>
                                    <span className={`font-bold ${year.color.replace('from-', 'text-').replace(' to-', '').split(' ')[0]}`}>{year.semesters}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Modules</span>
                                    <span className={`font-bold ${year.color.replace('from-', 'text-').replace(' to-', '').split(' ')[0]}`}>{year.modules}</span>
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800 line-clamp-4">
                                    {year.description}
                                </div>
                                <div className={`${year.badgeBg} rounded-lg px-3 py-2 text-xs font-medium`}>
                                    Key topics: {year.topics}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* How It Works */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-800 mb-12">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 text-center">
                        How the Curriculum Works
                    </h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {["Year", "Semester", "Module", "Unit", "Topic", "Questions"].map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-xl font-bold">
                                    {step}
                                </span>
                                {i < 5 && <ChevronRight className="w-4 h-4 text-emerald-400 hidden md:block" />}
                                {i < 5 && <span className="block md:hidden text-emerald-400">↓</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="https://medrae.com/nursing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg px-10 py-4 rounded-2xl shadow-xl shadow-emerald-200 dark:shadow-emerald-900/30 hover:scale-105 transition-all duration-300"
                    >
                        <BookOpen className="w-5 h-5" />
                        Start Learning Now
                        <ChevronRight className="w-5 h-5" />
                    </a>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 font-medium">
                        Follows the official Nursing Council of Kenya (NCK) KRCHN syllabus
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;