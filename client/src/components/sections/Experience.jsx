import React from 'react';
import { ClipboardCheck, HandHeart, Dumbbell, Zap, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { IMAGES } from '../../config/images';

export function Experience() {
  const steps = [
    {
      step: '01',
      title: 'Clinical Assessment & Movement Diagnostics',
      desc: 'Our physiotherapists begin with an evaluation of joint range, muscle imbalances, postural alignment, and neural mobility to uncover the root biomechanical source of pain.',
      image: IMAGES.experience.assessment.src,
      alt: IMAGES.experience.assessment.alt,
      icon: ClipboardCheck,
    },
    {
      step: '02',
      title: 'Hands-On Manual Therapy & Joint Mobilization',
      desc: 'Targeted physical techniques including soft tissue release, joint decompression, and spinal mobilization to relieve muscle guarding and reduce acute pain.',
      image: IMAGES.experience.manualTherapy.src,
      alt: IMAGES.experience.manualTherapy.alt,
      icon: HandHeart,
    },
    {
      step: '03',
      title: 'Supervised Guided Exercise Therapy',
      desc: 'Step-by-step active exercise instruction under clinical supervision. We ensure proper form, muscle recruitment patterns, and joint stabilization.',
      image: IMAGES.experience.guidedExercise.src,
      alt: IMAGES.experience.guidedExercise.alt,
      icon: Dumbbell,
    },
    {
      step: '04',
      title: 'Progressive Strength & Dynamic Mobility',
      desc: 'Advancing resistance and functional drills to build joint durability, improve stamina, and prevent recurrence of injuries.',
      image: IMAGES.experience.progressiveStrengthening.src,
      alt: IMAGES.experience.progressiveStrengthening.alt,
      icon: Zap,
    },
    {
      step: '05',
      title: 'Ergonomic Guidance & Long-Term Health',
      desc: 'Personalized home exercise routines, workstation posture ergonomics, and proactive wellness strategies to maintain your freedom of movement.',
      image: IMAGES.experience.recoveryCare.src,
      alt: IMAGES.experience.recoveryCare.alt,
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <SectionHeading
          badge="Patient Care Journey"
          title="What to Expect During Your Physiotherapy Treatment"
          subtitle="A structured, evidence-informed 5-step clinical workflow designed to guide you from initial discomfort to lasting functional independence."
          dark={true}
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg hover:border-teal-500/60 transition-all flex flex-col group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Visual Header */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="250"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-3 left-3 bg-teal-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                    Step {item.step}
                  </div>
                </div>

                {/* Step Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                      <Icon className="w-4 h-4 shrink-0" />
                      <h3 className="text-white text-base font-bold group-hover:text-teal-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-xs text-teal-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Therapist Supervised</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Callout Card */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-2xl border border-teal-600/50 p-6 flex flex-col justify-between text-white shadow-xl md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30">
                Ready to Start?
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Begin Your Personalized Care Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Take the first step toward living free of movement restrictions. Schedule an in-person clinical assessment at our Pachar clinic.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#appointment"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs shadow-lg transition-all active:scale-98"
              >
                <span>Book Initial Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
