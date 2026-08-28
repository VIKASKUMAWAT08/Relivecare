import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { IMAGES } from '../../config/images';

export function Rehabilitation() {
  const rehabAreas = [
    {
      id: 'sports',
      title: 'Sports Injury & Athletic Rehabilitation',
      tag: 'Athletic Recovery',
      image: IMAGES.rehabilitation.sports.src,
      alt: IMAGES.rehabilitation.sports.alt,
      desc: 'Phased recovery protocols for ligament sprains, muscle tears, tendonitis, and functional re-training for safe return to physical activity.',
      points: ['Ligament Sprains (ACL/MCL)', 'Rotator Cuff & Shoulder Tendonitis', 'Ankle Instability & Sprains', 'Functional Movement Drills'],
    },
    {
      id: 'ortho',
      title: 'Orthopedic Musculoskeletal Rehabilitation',
      tag: 'Spine & Joints',
      image: IMAGES.rehabilitation.orthopedic.src,
      alt: IMAGES.rehabilitation.orthopedic.alt,
      desc: 'Targeted physical therapy for spinal disc issues, chronic lower back pain, neck stiffness, and osteoarthritis to restore comfortable joint mechanics.',
      points: ['Cervical & Lumbar Spondylosis', 'Knee & Hip Osteoarthritis', 'Sciatica & Disc Decompression', 'Chronic Joint Stiffness'],
    },
    {
      id: 'post-op',
      title: 'Post-Operative & Surgical Recovery',
      tag: 'Phase-Wise Care',
      image: IMAGES.rehabilitation.postOp.src,
      alt: IMAGES.rehabilitation.postOp.alt,
      desc: 'Structured, surgeon-aligned rehabilitation following joint replacements, fracture fixations, and arthroscopic procedures.',
      points: ['Total Knee & Hip Replacement', 'ACL & Meniscus Surgery Rehab', 'Post-Fracture Mobilization', 'Scar Tissue & Swelling Management'],
    },
    {
      id: 'neuro',
      title: 'Neurological Rehabilitation',
      tag: 'Motor Re-education',
      image: IMAGES.rehabilitation.neuro.src,
      alt: IMAGES.rehabilitation.neuro.alt,
      desc: 'Neuro-facilitation and task-oriented balance therapy to assist stroke survivors and patients with neural motor deficits.',
      points: ['Post-Stroke Hemiplegia Support', 'Bell’s Palsy & Facial Recovery', 'Balance & Gait Retraining', 'Peripheral Nerve Lesions'],
    },
  ];

  return (
    <section id="rehabilitation" className="py-12 sm:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Specialized Rehabilitation"
          title="Targeted Rehabilitation Focused on Functional Independence"
          subtitle="Whether recovering from surgery, an athletic injury, or chronic joint stiffness, our phased protocols support safe, structured recovery."
        />

        {/* 4 Major Rehab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8">
          {rehabAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="338"
                />
                <div className="absolute top-3.5 left-3.5 bg-teal-800/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-teal-600/50 backdrop-blur-xs">
                  {area.tag}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {area.desc}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Focus Areas &amp; Clinical Scope:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <div className="w-3.5 h-3.5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:underline"
                  >
                    <span>Inquire for Rehabilitation Plan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rehabilitation;
