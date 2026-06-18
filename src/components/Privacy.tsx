import React from 'react';
import { motion } from 'motion/react';
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface PrivacyProps {
    scrollToSection: (id: string) => void;
}

export default function Privacy({ scrollToSection }: PrivacyProps) {
    return (
        <section id="privacy" className="min-h-screen pt-28 pb-16 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => scrollToSection('hero')}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400">
                            <Shield className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
                            <p className="text-slate-600 dark:text-slate-400">Last updated: January 2026</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                At Medrae Nursing, we collect information to provide better services to our nursing students:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and student ID</li>
                                <li><strong>Academic Data:</strong> Nursing school, year of study, exam history, and progress</li>
                                <li><strong>Usage Data:</strong> How you interact with our platform, quiz results, and study patterns</li>
                                <li><strong>Device Information:</strong> Browser type, operating system, and IP address</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li>Provide personalized nursing exam preparation</li>
                                <li>Track your progress and suggest improvements</li>
                                <li>Send you relevant study materials and updates</li>
                                <li>Improve our platform based on user feedback</li>
                                <li>Connect you with peers and clinical opportunities</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Data Protection</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                We implement robust security measures to protect your data:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li>End-to-end encryption for all sensitive data</li>
                                <li>Regular security audits and updates</li>
                                <li>Access controls and authentication protocols</li>
                                <li>Secure data storage on protected servers</li>
                                <li>Compliance with Kenyan data protection laws</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Your Rights</h2>
                            <p className="text-slate-600 dark:text-slate-400">As a Medrae user, you have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Export your data in a readable format</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Contact Us</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                    <Mail className="w-4 h-4 text-red-600 dark:text-red-400" />
                                    <a href="mailto:medraenursing@gmail.com" className="hover:text-red-600 dark:hover:text-red-400">
                                        medraenursing@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                    <Phone className="w-4 h-4 text-red-600 dark:text-red-400" />
                                    <a href="tel:+254704473503" className="hover:text-red-600 dark:hover:text-red-400">
                                        +254 704 473 503
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}