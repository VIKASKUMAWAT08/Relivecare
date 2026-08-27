import React from 'react';
import { Star, Video, MessageSquare, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';

export function PatientStories() {
  return (
    <section id="stories" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Patient Care &amp; Feedback"
          title="Patient Experiences &amp; Clinical Care Feedback"
          subtitle="We prioritize patient comfort, honest clinical evaluations, and steady functional progress. Explore verified feedback from our Pachar center."
        />

        {/* Google Reviews Spotlight */}
        <div className="max-w-4xl mx-auto mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col items-center justify-center shrink-0">
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
              <h3 className="text-base font-bold text-slate-900">
                Google Business Ratings
              </h3>
              <p className="text-xs text-slate-600">
                Rated {CLINIC_INFO.googleStats.rating} out of 5 stars based on {CLINIC_INFO.googleStats.reviewCount} Google reviews for ReliveCare in Pachar, Rajasthan.
              </p>
            </div>
          </div>

          <a
            href={CLINIC_INFO.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors shrink-0"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Real Patient Framework Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Written Patient Testimonials */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Patient Testimonials
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                Patient recovery feedback and written clinical reviews will be displayed here directly as submitted by individuals undergoing treatment at ReliveCare.
              </p>
            </div>

            <div className="pt-2 text-[11px] text-teal-700 font-semibold">
              Verified Patient Feedback
            </div>
          </div>

          {/* Card 2: Functional Mobility Records */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Mobility &amp; Range Records
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                Documented joint range improvements and post-surgical rehabilitation milestones are recorded to guide each patient's ongoing recovery phases.
              </p>
            </div>

            <div className="pt-2 text-[11px] text-teal-700 font-semibold">
              Evidence-Informed Tracking
            </div>
          </div>

          {/* Card 3: Patient Video Stories */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                <Video className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Video Recovery Logs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                Real recovery video interviews and functional movement demonstrations will be shared directly on our official YouTube and Instagram channels.
              </p>
            </div>

            <div className="pt-2 text-[11px] text-teal-700 font-semibold">
              Clinical Video Guides
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PatientStories;
