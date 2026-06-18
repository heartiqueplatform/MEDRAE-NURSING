import React from 'react';
import { motion } from 'motion/react';
import { FileText, Mail, Phone, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

interface TermsProps {
    scrollToSection: (id: string) => void;
}

export default function Terms({ scrollToSection }: TermsProps) {
    return (
        <section id="terms" className="min-h-screen pt-28 pb-16 bg-white dark:bg-slate-950">
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
                        <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Terms of Service</h1>
                            <p className="text-slate-600 dark:text-slate-400">Last updated: January 2026</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                By using Medrae Nursing Platform, you agree to these Terms of Service. If you do not agree, please do not use our services. These terms apply to all users of the platform.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. User Accounts</h2>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li>You must be a nursing student or healthcare professional to use our platform</li>
                                <li>You are responsible for maintaining the confidentiality of your account</li>
                                <li>You agree to provide accurate and complete information</li>
                                <li>You must not share your account credentials with others</li>
                                <li>You must be at least 18 years old to use our services</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Premium Subscription</h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">Subscription Details</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Premium access is available at <strong className="text-red-600 dark:text-red-400">199 KSh for 2 months</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">What You Get</h3>
                                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
                                            <li>Full access to all question banks</li>
                                            <li>DigiProctor style practice exams</li>
                                            <li>Survival hub features</li>
                                            <li>Hospital placement board</li>
                                            <li>Nursmartt marketplace access</li>
                                            <li>Ad-free learning experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. User Conduct</h2>
                            <p className="text-slate-600 dark:text-slate-400">You agree to use the platform responsibly:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li>Do not share exam questions or answers outside the platform</li>
                                <li>Do not attempt to hack or exploit the platform</li>
                                <li>Do not post inappropriate or offensive content</li>
                                <li>Do not impersonate other users or staff</li>
                                <li>Respect other students' learning experience</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Intellectual Property</h2>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                <li>All content on Medrae is owned by Medrae Nursing or licensed to us</li>
                                <li>You may not reproduce or distribute our content without permission</li>
                                <li>You retain ownership of your submitted content</li>
                                <li>We may use anonymized data for research and improvement</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Disclaimer</h2>
                            <div className="bg-amber-50 dark:bg-amber-500/10 p-4 rounded-xl border border-amber-200 dark:border-amber-500/20">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-amber-800 dark:text-amber-300 text-sm font-medium">
                                            Important Notice
                                        </p>
                                        <p className="text-amber-700 dark:text-amber-400 text-sm">
                                            NCK Licensing Exam, NCLEX-RN® are trademarks of their respective governing boards.
                                            Medrae Nursing is an independent, non-affiliated preparatory academic support platform.
                                            Our materials are for educational purposes only and do not guarantee exam success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">7. Termination</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                We reserve the right to terminate or suspend accounts that violate these terms. You may also cancel your account at any time by contacting our support team.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">8. Contact Us</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                For questions about these Terms of Service, please reach out:
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