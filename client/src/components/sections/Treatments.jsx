import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TREATMENTS_DATA } from '../../config/treatmentsData';
import { TreatmentModal } from './TreatmentModal';

export function Treatments({ onSelectTreatmentForBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTreatment, setActiveTreatment] = useState(null);

  const categories = [
    'All',
    'Spine Care',
    'Lower Extremity',
    'Upper Extremity',
    'Bone & Joint',
    'Athletic Recovery',
    'Surgical Recovery',
    'Hands-On Care',
    'Neuro Recovery',
    'Senior Care',
  ];

  const filteredTreatments = selectedCategory === 'All'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Specialized Services"
          title="Clinical Physiotherapy &amp; Rehabilitation Programs"
          subtitle="Targeted, non-invasive therapeutic solutions for knee &amp; joint pain, spinal conditions, sports injuries, post-surgical recovery, and mobility restoration."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 pt-2 gap-2 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Treatments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={treatment.image}
                  alt={treatment.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-700/60">
                  {treatment.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {treatment.shortDesc}
                  </p>

                  {/* Conditions Preview */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Indications:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {treatment.conditions.slice(0, 2).map((cond, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {cond}
                        </span>
                      ))}
                      {treatment.conditions.length > 2 && (
                        <span className="inline-block px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 text-[11px] font-semibold">
                          +{treatment.conditions.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveTreatment(treatment)}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:underline transition-all cursor-pointer"
                  >
                    <span>View Treatment Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectTreatmentForBooking) {
                        onSelectTreatmentForBooking(treatment.title);
                      }
                      const el = document.getElementById('appointment');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    type="button"
                    className="p-2 rounded-lg bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white transition-colors cursor-pointer"
                    title={`Book for ${treatment.title}`}
                    aria-label={`Book appointment for ${treatment.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Treatment Details */}
        <TreatmentModal
          treatment={activeTreatment}
          isOpen={!!activeTreatment}
          onClose={() => setActiveTreatment(null)}
          onSelectForBooking={onSelectTreatmentForBooking}
        />

      </div>
    </section>
  );
}

export default Treatments;
