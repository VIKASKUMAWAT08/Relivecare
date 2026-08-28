import React from 'react';
import { Star, Video, MessageSquare, FileText, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';

export function PatientStories() {
  return (
    <section id="stories" className="py-12 sm:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Patient Care &amp; Feedback"
          title="Patient Experiences &amp; Clinical Feedback"
          subtitle="We prioritize patient comfort, honest clinical evaluations, and steady functional progress. Explore verified feedback from our Pachar center."
        />

        {/* Google Reviews Spotlight */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col items-center justify-center shrink-0">
              <span className="text-lg font-bold text-teal-800">{CLINIC_INFO.googleStats.rating}</span>
              <div className="flex text-amber-400">
                <Star className="w-2 h-2 fill-amber-400" />
                <Star className="w-2 h-2 fill-amber-400" />
                <Star className="w-2 h-2 fill-amber-400" />
                <Star className="w-2 h-2 fill-amber-400" />
                <Star className="w-2 h-2 fill-amber-400" />
              </div>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Verified Google Business Rating
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Rated {CLINIC_INFO.googleStats.rating} out of 5 stars based on {CLINIC_INFO.googleStats.reviewCount} Google reviews for ReliveCare in Pachar, Rajasthan.
              </p>
            </div>
          </div>

          <a
            href={CLINIC_INFO.googleStats.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0"
          >
            <span>View All on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-teal-300" />
          </a>
        </div>

        {/* Real Patient Feedback Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          
          {/* Card 1: Clinical Testimonials */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 text-center">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                In-Clinic Feedback
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                Patients regularly share positive experiences regarding compassionate 1-on-1 care, effective manual joint release, and tailored exercise guidance.
              </p>
            </div>

            <div className="pt-1 text-[11px] text-teal-700 font-semibold">
              Verified Patient Experience
            </div>
          </div>

          {/* Card 2: Functional Mobility Milestones */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 text-center">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Documented Recovery Milestones
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                Progressive improvements in joint range of motion, reduction in weight-bearing pain, and restoration of independent daily walking.
              </p>
            </div>

            <div className="pt-1 text-[11px] text-teal-700 font-semibold">
              Evidence-Informed Tracking
            </div>
          </div>

          {/* Card 3: Video Patient Reviews */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 text-center">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Video Case Studies &amp; Shorts
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                Authentic video recovery testimonials and movement demos recorded at our clinic are shared on our YouTube and Instagram channels.
              </p>
            </div>

            <div className="pt-1 text-[11px] text-teal-700 font-semibold">
              Clinical Video Guides
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PatientStories;
