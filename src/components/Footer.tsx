import React from 'react';
import { HeartPulse, Twitter, Instagram, Linkedin, Youtube, Inbox, MapPin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = 2026;

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="py-16 border-t transition-colors duration-300
      bg-white text-gray-600 border-gray-200
      dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b transition-colors duration-300
          border-gray-200 dark:border-gray-800">

          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 cursor-pointer group w-fit"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg text-white shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30">
                <HeartPulse className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-display font-bold text-lg transition-colors duration-300
                text-gray-800 dark:text-white">
                <span className="text-red-600 dark:text-red-500">Medrae</span>
                <span className="text-emerald-600 dark:text-emerald-400">Nursing</span>
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm max-w-sm leading-relaxed transition-colors duration-300
              text-gray-600 dark:text-gray-400">
              Leading the 2026 nursing study standard. We empower future and practicing nurses with the analytical thinking, diagnostic rapid-recall, and clinical reasoning skills needed for career and licensure excellence.
            </p>
            {/* Social collection */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg transition-all duration-150 cursor-pointer
                    bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600
                    dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider transition-colors duration-300
              text-gray-700 dark:text-gray-200">
              Explore Options
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm transition-colors duration-300
              text-gray-600 dark:text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="transition-colors cursor-pointer text-left w-full
                    hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  About Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quiz')}
                  className="transition-colors cursor-pointer text-left w-full
                    hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Interactive Mini Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="transition-colors cursor-pointer text-left w-full
                    hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Key Student Features
                </button>
              </li>
              <li>
                <a
                  href="https://medrae.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors flex items-center gap-1.5
                    hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <span>Medrae Main Web-App</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full uppercase font-mono
                    bg-emerald-100 text-emerald-700
                    dark:bg-emerald-500/10 dark:text-emerald-400">LIVE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider transition-colors duration-300
              text-gray-700 dark:text-gray-200">
              Student Support & Contacts
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm transition-colors duration-300
              text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2.5">
                <Inbox className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider
                    text-gray-400 dark:text-gray-500">
                    EMAIL SUPPORT
                  </div>
                  <a href="mailto:support@medraenursing.com" className="transition-colors
                    text-gray-700 hover:text-emerald-600
                    dark:text-gray-300 dark:hover:text-emerald-400">
                    support@medraenursing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider
                    text-gray-400 dark:text-gray-500">
                    HEADQUARTERS
                  </div>
                  <span className="block leading-tight transition-colors duration-300
                    text-gray-700 dark:text-gray-300">
                    750 Medical Plaza Dr., Suite 201 <br />
                    Boston, MA 02111
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Small Legal Subfooter Block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs transition-colors duration-300
          text-gray-500 dark:text-gray-500">
          <div>
            &copy; {currentYear} Medrae Nursing platform. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <div className="flex items-center gap-4 justify-center">
              <a href="#privacy" className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                Privacy Policy
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a href="#terms" className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                Terms of Service
              </a>
            </div>
            <p className="text-[10px] max-w-md transition-colors duration-300
              text-gray-400 dark:text-gray-600">
              Disclaimer: NCK Licensing Exam, NCLEX-RN® are trademarks of their respective governing boards. Medrae Nursing is an independent, non-affiliated preparatory academic support platform.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}