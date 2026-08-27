import React from 'react';
import { Star, ShieldCheck, UserCheck, Stethoscope, Dumbbell, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../../config/clinicData';

export function TrustReviews() {
  const pillars = [
    {
      icon: Stethoscope,
      title: 'Evidence-Informed Care',
      desc: 'Structured clinical protocols focused on uncovering and treating the biomechanical root cause of pain.',
    },
    {
      icon: UserCheck,
      title: '1-on-1 Patient Care',
      desc: 'Dedicated session time with experienced physical therapists focused entirely on your recovery.',
    },
    {
      icon: ShieldCheck,
      title: 'Skilled Manual Therapy',
      desc: 'Hands-on joint mobilization, deep myofascial release, and precise therapeutic adjustments.',
    },
    {
      icon: Dumbbell,
      title: 'Supervised Functional Rehab',
      desc: 'Guided strength, flexibility, and mobility drills to build physical stability and prevent re-injury.',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Google Reviews Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-800/40">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            {/* Google Rating Emblem */}
            <div className="w-16 h-16 rounded-2xl bg-white text-slate-900 flex flex-col items-center justify-center shadow-md shrink-0">
              <span className="text-xl font-extrabold text-teal-700">{CLINIC_INFO.googleStats.rating}</span>
              <div className="flex text-amber-400 -mt-1">
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <Star className="w-2.5 h-2.5 fill-amber-400" />
                <Star className="w-2.5 h-2.5 fill-amber-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  5.0 Google Rating
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
                  {CLINIC_INFO.googleStats.reviewCount} Google Reviews
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Providing dedicated physiotherapy, joint recovery, and personalized rehabilitation for patients at our Pachar center.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors"
            >
              <span>View Clinic on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Clinical Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3.5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-teal-800 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TrustReviews;
