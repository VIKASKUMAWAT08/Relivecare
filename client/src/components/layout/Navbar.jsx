import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, ArrowRight, Home } from 'lucide-react';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Home Physiotherapy', href: '#home-physiotherapy' },
    { name: 'Rehabilitation', href: '#rehabilitation' },
    { name: 'Clinic', href: '#gallery' },
    { name: 'Patient Reviews', href: '#stories' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2 sm:py-2.5' 
        : 'bg-white border-b border-slate-100 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand & Logo */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-2xs border border-teal-100 bg-white shrink-0 group-hover:scale-102 transition-transform">
            <img 
              src={IMAGES.logo.src} 
              alt={IMAGES.logo.alt}
              className="w-full h-full object-contain p-0.5"
              width="44"
              height="44"
              decoding="async"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
                {CLINIC_INFO.shortName}
              </span>
              <span className="text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full bg-teal-50 text-teal-700 font-semibold border border-teal-200">
                Pachar
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-teal-700 tracking-wide leading-tight">
              Physiotherapy &amp; Rehabilitation Center
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Medium Screen Nav */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={CLINIC_INFO.contact.phoneTel}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
            title="Call Clinic"
          >
            <Phone className="w-3.5 h-3.5 text-teal-700" />
            <span>Call Now</span>
          </a>

          <a
            href="#appointment"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50">
          <div className="bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto px-5 py-5 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-0.5 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-sm font-semibold text-slate-800 hover:text-teal-700 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-200 space-y-2">
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </a>

              <a
                href={CLINIC_INFO.contact.homePhysioWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 font-bold text-sm"
              >
                <Home className="w-4 h-4 text-teal-700" />
                <span>Book Home Visit</span>
              </a>

              <a
                href={CLINIC_INFO.contact.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {CLINIC_INFO.contact.phone}</span>
              </a>

              <a
                href={CLINIC_INFO.contact.floatingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-sm"
              >
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
