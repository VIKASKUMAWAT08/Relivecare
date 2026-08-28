import React from 'react';
import { Home, CheckCircle2, MessageSquare, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

export function HomePhysiotherapy({ onSelectHomeVisitForBooking }) {
  const handleFormBooking = () => {
    if (onSelectHomeVisitForBooking) {
      onSelectHomeVisitForBooking('Home Physiotherapy Visit');
    }
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home-physiotherapy" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <SectionHeading
          badge="Doorstep Healthcare"
          title="Physiotherapy at Your Home"
          subtitle="Get expert personalized physiotherapy treatment at your home from our experienced physiotherapists."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-8">

          {/* Left Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 sm:aspect-5/4 bg-slate-100">
              <img
                src={IMAGES.homePhysio.src}
                alt={IMAGES.homePhysio.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Badge Overlay */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-400/30">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Home Visit Care</h4>
                    <p className="text-teal-300 text-xs font-medium">Pachar &amp; Nearby Localities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold">Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold">Flexible Timings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                <Home className="w-3.5 h-3.5" />
                <span>Comfortable &amp; Safe Rehabilitation at Home</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Professional physical therapy brought directly to your living room.
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {CLINIC_INFO.homePhysiotherapy.description} Our physiotherapists carry all essential mobility, manual therapy, and assessment equipment to deliver clinic-standard rehabilitation in the comfort of your home.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {CLINIC_INFO.homePhysiotherapy.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={CLINIC_INFO.contact.homePhysioWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book a Home Visit on WhatsApp</span>
              </a>

              <button
                onClick={handleFormBooking}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Schedule via Form</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-500">
              * Home visits are subject to slot availability in Pachar and surrounding regions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HomePhysiotherapy;
