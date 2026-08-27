import React from 'react';
import { Check, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

export function About() {
  const highlights = [
    {
      title: 'Comprehensive Physical Assessment',
      desc: 'In-depth postural, joint mobility, muscle firing, and functional movement evaluations before beginning therapy.',
    },
    {
      title: 'Active Guided Exercise & Strength',
      desc: 'Progressive exercise prescriptions designed to restore physiological balance and prevent symptom recurrence.',
    },
    {
      title: 'Targeted Hands-On Manual Therapy',
      desc: 'Soft tissue release, spinal mobilization, and joint decompression performed with clinical precision.',
    },
    {
      title: 'Patient-Centered Functional Recovery',
      desc: 'Empowering each patient with clear ergonomic guidelines, posture correction, and home maintenance routines.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="About ReliveCare"
          title="Restoring Natural Movement Through Science-Backed Physiotherapy"
          subtitle="Located in Pachar, Rajasthan, ReliveCare is dedicated to helping individuals recover from pain, rebuild physical confidence, and regain their active lifestyle."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Visuals with Real Treatment Photo Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative">
              {/* Primary Visual: Real In-Clinic Treatment Photo */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white aspect-4/3 relative">
                <img
                  src={IMAGES.clinicTreatments.treatmentReal1.src}
                  alt={IMAGES.clinicTreatments.treatmentReal1.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60">
                  <div>
                    <p className="font-bold">Clinical Care Session</p>
                    <p className="text-teal-300 text-[11px]">ReliveCare Physiotherapy Center</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-600 text-white font-semibold text-[10px]">
                    In-Person Care
                  </span>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3.5 max-w-xs">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Functional Recovery</p>
                  <p className="text-[11px] text-slate-600">Personalized programs for long-term health</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-100/70 text-teal-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Philosophy of Care</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Recovery is more than just temporary pain relief — it is rebuilding your body’s strength and functional mobility.
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                At ReliveCare Physiotherapy, Rehabilitation &amp; Wellness Center, our clinical specialists focus on understanding the root biomechanical factors contributing to your discomfort. Whether you are dealing with sports injuries, chronic spinal strain, post-surgical stiffness, or age-related joint conditions, we tailor every exercise and therapeutic modality to your unique stage of recovery.
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1.5 text-teal-800 font-bold text-xs">
                    <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-md transition-all active:scale-98"
              >
                <span>Schedule an In-Person Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
