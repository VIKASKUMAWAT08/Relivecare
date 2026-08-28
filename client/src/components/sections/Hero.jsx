import React from 'react';
import { Calendar, Phone, Star, CheckCircle2, UserCheck, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 sm:pt-12 pb-12 sm:pb-16">
      {/* Background Subtle Medical Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Area (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Top Pill: Location & Google Rating */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-slate-800/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs shadow-xs">
              <a
                href={CLINIC_INFO.googleStats.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{CLINIC_INFO.googleStats.rating}</span>
                <span className="text-slate-400 font-normal">({CLINIC_INFO.googleStats.reviewCount} Google Reviews)</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-teal-300 font-medium">{CLINIC_INFO.locationName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Move Better. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-sky-300">
                Recover Stronger.
              </span> <br />
              Live Better.
            </h1>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized clinical physiotherapy, manual therapy, home visits, and personalized rehabilitation programs dedicated to relieving pain, restoring joint mobility, and accelerating functional recovery.
            </p>

            {/* Key Clinical Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Evidence-Informed Care</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>1-on-1 Patient Care</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Home Visit Service</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href="#appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-101 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>

              <a
                href={CLINIC_INFO.contact.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4.5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call Now</span>
              </a>

              <a
                href={CLINIC_INFO.contact.floatingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-101 active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Dr. Virendra Kumawat (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-800 aspect-4/3 sm:aspect-4/5 max-h-[480px]">
                <img
                  src={IMAGES.hero.main}
                  alt={IMAGES.hero.alt}
                  className="w-full h-full object-cover object-top"
                  fetchPriority="high"
                  decoding="async"
                  width="600"
                  height="750"
                />
                
                {/* Gradient Shadow Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
                
                {/* Bottom Overlay Info for Dr. Virendra Kumawat */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-bold text-white text-sm">
                        {CLINIC_INFO.doctors[0].name}
                      </p>
                      <p className="text-teal-300 text-[11px] font-medium mt-0.5">
                        {CLINIC_INFO.doctors[0].degree} • {CLINIC_INFO.doctors[0].role}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-900/90 text-teal-300 font-semibold border border-teal-700/60 text-[11px] whitespace-nowrap shrink-0">
                      {CLINIC_INFO.doctors[0].experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Specialist Badge (Top Right) */}
              <div className="absolute -top-3 -right-2 sm:-right-3 bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-xl border border-teal-500/40 shadow-xl flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Lead Physiotherapist</p>
                  <p className="text-[10px] text-teal-300">ReliveCare Clinic Pachar</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
