import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Inbox, MapPin, Phone, Mail, Facebook } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = 2026;

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com/medraenursing', label: 'Facebook' },
    { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com/medraenursing', label: 'Twitter/X' },
    { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/medraenursing', label: 'Instagram' },
    { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com/@medraenursingke', label: 'TikTok' },
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
              {/* PWA Icon Image */}
              <img
                src="/pwa-192x192.png"
                alt="Medrae Nursing"
                className="w-9 h-9 rounded-lg shadow-lg shadow-red-500/20 dark:shadow-red-500/30 transition-transform group-hover:scale-105"
              />
              <span className="font-display font-bold text-lg transition-colors duration-300
                text-gray-800 dark:text-white">
                <span className="text-red-600 dark:text-red-500">Medrae</span>
                <span className="text-gray-900 dark:text-white">Nursing</span>
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm max-w-sm leading-relaxed transition-colors duration-300
              text-gray-600 dark:text-gray-400">
              Leading the 2026 nursing study standard. We empower future and practicing nurses with the analytical thinking, diagnostic rapid-recall, and clinical reasoning skills needed for career and licensure excellence.
            </p>
            {/* Social collection - Updated with all handles */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">@medraenursing</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg transition-all duration-150 cursor-pointer
                      bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600
                      dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
                    hover:text-red-600 dark:hover:text-red-400"
                >
                  About Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quiz')}
                  className="transition-colors cursor-pointer text-left w-full
                    hover:text-red-600 dark:hover:text-red-400"
                >
                  Interactive Mini Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="transition-colors cursor-pointer text-left w-full
                    hover:text-red-600 dark:hover:text-red-400"
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
                    hover:text-red-600 dark:hover:text-red-400"
                >
                  <span>Medrae Main Web-App</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full uppercase font-mono
                    bg-red-100 text-red-700
                    dark:bg-red-500/10 dark:text-red-400">LIVE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support Column - Updated with real contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider transition-colors duration-300
              text-gray-700 dark:text-gray-200">
              Student Support & Contacts
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm transition-colors duration-300
              text-gray-600 dark:text-gray-400">

              {/* Email */}
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-red-600 dark:text-red-400" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider
                    text-gray-400 dark:text-gray-500">
                    EMAIL SUPPORT
                  </div>
                  <a href="mailto:medraenursing@gmail.com" className="transition-colors
                    text-gray-700 hover:text-red-600
                    dark:text-gray-300 dark:hover:text-red-400">
                    medraenursing@gmail.com
                  </a>
                </div>
              </li>

              {/* WhatsApp/Call */}
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-green-600 dark:text-green-400" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider
                    text-gray-400 dark:text-gray-500">
                    WHATSAPP & CALL
                  </div>
                  <a href="tel:+254704473503" className="transition-colors
                    text-gray-700 hover:text-green-600
                    dark:text-gray-300 dark:hover:text-green-400">
                    +254 704 473 503
                  </a>
                </div>
              </li>

              {/* Social Handles */}
              <li className="flex items-start gap-2.5">
                <Inbox className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider
                    text-gray-400 dark:text-gray-500">
                    SOCIAL MEDIA
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a
                      href="https://facebook.com/medraenursing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      Facebook
                    </a>
                    <span className="text-gray-300 dark:text-gray-700">|</span>
                    <a
                      href="https://twitter.com/medraenursing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      X
                    </a>
                    <span className="text-gray-300 dark:text-gray-700">|</span>
                    <a
                      href="https://instagram.com/medraenursing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                    >
                      Instagram
                    </a>
                    <span className="text-gray-300 dark:text-gray-700">|</span>
                    <a
                      href="https://tiktok.com/@medraenursingke"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      TikTok
                    </a>
                  </div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                    @medraenursing everywhere
                  </div>
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

              <a
                onClick={() => scrollToSection('privacy')}
                className="transition-colors hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                onClick={() => scrollToSection('terms')}
                className="transition-colors hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
              >
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