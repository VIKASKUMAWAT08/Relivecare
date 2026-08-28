import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp, Star, Navigation, Home } from 'lucide-react';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shrink-0 border border-teal-500/30">
                <img 
                  src={IMAGES.logo.src} 
                  alt={IMAGES.logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-teal-400 font-medium">
                  Physiotherapy &amp; Rehabilitation Center
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to helping individuals in Pachar and neighboring communities overcome pain, regain physical strength, and restore natural mobility through personalized, evidence-informed physiotherapy care.
            </p>

            {/* Google Rating Badge */}
            <a
              href={CLINIC_INFO.googleStats.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
            >
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="text-xs font-bold text-white">{CLINIC_INFO.googleStats.rating}</span>
              <span className="text-[11px] text-slate-400">({CLINIC_INFO.googleStats.reviewCount} Google Reviews)</span>
            </a>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={CLINIC_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href={CLINIC_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={CLINIC_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-600 text-teal-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-800 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links & Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Services &amp; Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home-physiotherapy" className="text-teal-300 font-semibold hover:text-teal-200 transition-colors flex items-center gap-1.5"><Home className="w-3.5 h-3.5" />Home Physiotherapy Visit</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Knee Pain &amp; Rehabilitation</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Back &amp; Spine Pain Relief</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Shoulder Pain &amp; Mobility</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Neck &amp; Cervical Pain</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Sports Injury Recovery</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Post-Operative Rehabilitation</a></li>
              <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Manual Therapy &amp; Mobilization</a></li>
            </ul>
          </div>

          {/* Col 3: Clinic Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Clinic Timings
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Monday – Saturday</p>
                  <p className="text-[11px]">8:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Sunday</p>
                  <p className="text-[11px]">By Prior Appointment</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="#appointment"
                  className="inline-block px-2.5 py-1 bg-teal-950 text-teal-300 rounded-lg border border-teal-800 text-[11px] font-semibold hover:bg-teal-900 transition-colors"
                >
                  Book In-Person Visit
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Clinic Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-300">
                  {CLINIC_INFO.location.fullAddress}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={CLINIC_INFO.contact.phoneTel}
                    className="text-white hover:text-teal-300 font-semibold font-mono text-xs transition-colors"
                  >
                    {CLINIC_INFO.contact.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Call / WhatsApp Support</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <a
                  href={CLINIC_INFO.contact.emailMailto}
                  className="text-slate-300 hover:text-teal-300 text-xs transition-colors"
                >
                  {CLINIC_INFO.contact.email}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={CLINIC_INFO.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Clinical Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-slate-300 font-semibold">Clinical Notice:</strong> Information on this website is for educational and appointment booking purposes regarding physical therapy services. Individual clinical assessments are conducted by our qualified physiotherapists prior to prescribing treatment protocols.
            </p>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Pachar, Rajasthan 303706</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-teal-400 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
