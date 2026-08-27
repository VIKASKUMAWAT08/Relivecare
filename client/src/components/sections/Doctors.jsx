import React, { useState } from 'react';
import { Calendar, Stethoscope, CheckCircle2, GraduationCap, Clock } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

export function Doctors({ onSelectDoctorForBooking }) {
  const [drVirendraPhotoIndex, setDrVirendraPhotoIndex] = useState(0);

  const drVirendraPhotos = [
    { src: IMAGES.doctors.drVirendra.src, label: 'Clinical Session' },
    { src: IMAGES.doctors.drVirendra.secondary, label: 'Consultation' },
  ];

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Clinical Specialists"
          title="Meet Our Physiotherapy Specialists"
          subtitle="Experienced in musculoskeletal assessment, manual joint mobilization, and personalized exercise therapy protocols."
        />

        {/* Doctors Grid (2 Doctors: Dr. Virendra Kumawat FIRST, Dr. Kamlesh Mahariya SECOND) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Doctor 1: Dr. Virendra Kumawat (MUST APPEAR FIRST) */}
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Photo Container */}
            <div className="relative aspect-4/3 sm:aspect-5/4 overflow-hidden bg-slate-200 flex items-center justify-center">
              <img
                src={drVirendraPhotos[drVirendraPhotoIndex].src}
                alt={IMAGES.doctors.drVirendra.alt}
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              
              {/* Photo View Switcher Buttons */}
              <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-slate-900/80 backdrop-blur-xs p-1 rounded-lg border border-slate-700 text-[10px]">
                {drVirendraPhotos.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setDrVirendraPhotoIndex(i)}
                    type="button"
                    className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                      drVirendraPhotoIndex === i
                        ? 'bg-teal-600 text-white font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    View {i + 1}
                  </button>
                ))}
              </div>

              {/* Doctor Name & Degree Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-700 text-white text-xs font-bold">
                    {CLINIC_INFO.doctors[0].degree}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800/90 text-teal-200 text-xs font-semibold border border-slate-700">
                    {CLINIC_INFO.doctors[0].experience}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {CLINIC_INFO.doctors[0].name}
                </h3>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                  <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{CLINIC_INFO.doctors[0].role}</span>
                </div>

                {/* Qualification & Experience Pills */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
                    <span>Bachelor of Physiotherapy (BPT)</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>2+ Years Clinical Practice</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {CLINIC_INFO.doctors[0].bio}
                </p>

                {/* Focus Areas */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Clinical Focus Areas:
                  </p>
                  <ul className="space-y-1.5">
                    {CLINIC_INFO.doctors[0].focusAreas.map((focus, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    if (onSelectDoctorForBooking) onSelectDoctorForBooking(CLINIC_INFO.doctors[0].name);
                    const el = document.getElementById('appointment');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs transition-all active:scale-98 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Virendra</span>
                </button>
              </div>
            </div>
          </div>

          {/* Doctor 2: Dr. Kamlesh Mahariya */}
          <div className="bg-slate-50/90 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Photo Container */}
            <div className="relative aspect-4/3 sm:aspect-5/4 overflow-hidden bg-slate-200 flex items-center justify-center">
              <img
                src={IMAGES.doctors.drKamlesh.src}
                alt={IMAGES.doctors.drKamlesh.alt}
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              
              {/* Doctor Name & Degree Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-700 text-white text-xs font-bold">
                    {CLINIC_INFO.doctors[1].degree}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800/90 text-teal-200 text-xs font-semibold border border-slate-700">
                    {CLINIC_INFO.doctors[1].experience}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {CLINIC_INFO.doctors[1].name}
                </h3>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                  <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{CLINIC_INFO.doctors[1].role}</span>
                </div>

                {/* Qualification & Experience Pills */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
                    <span>Bachelor of Physiotherapy (BPT)</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>2+ Years Clinical Practice</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {CLINIC_INFO.doctors[1].bio}
                </p>

                {/* Focus Areas */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Clinical Focus Areas:
                  </p>
                  <ul className="space-y-1.5">
                    {CLINIC_INFO.doctors[1].focusAreas.map((focus, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    if (onSelectDoctorForBooking) onSelectDoctorForBooking(CLINIC_INFO.doctors[1].name);
                    const el = document.getElementById('appointment');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs transition-all active:scale-98 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Kamlesh</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Doctors;
