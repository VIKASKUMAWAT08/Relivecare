import React from 'react';
import { CheckCircle, Calendar, Sparkles, Activity } from 'lucide-react';
import { Modal } from '../common/Modal';

export function TreatmentModal({ treatment, isOpen, onClose, onSelectForBooking }) {
  if (!treatment) return null;

  const handleBook = () => {
    if (onSelectForBooking) {
      onSelectForBooking(treatment.title);
    }
    onClose();
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={treatment.title}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Top Image & Category Tag */}
        <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-slate-100 border border-slate-200">
          <img
            src={treatment.image}
            alt={treatment.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-teal-800/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-teal-600/50">
            {treatment.category}
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Clinical Overview
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {treatment.fullDesc}
          </p>
        </div>

        {/* Two Column Grid: Conditions Treated & Therapeutic Approaches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Conditions Treated */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-teal-800">
              <Activity className="w-4 h-4" />
              <span>Common Symptoms / Conditions</span>
            </h5>
            <ul className="space-y-2">
              {treatment.conditions.map((condition, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Approaches */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-teal-800">
              <Sparkles className="w-4 h-4" />
              <span>Therapeutic Approaches</span>
            </h5>
            <ul className="space-y-2">
              {treatment.approaches.map((approach, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                  <span>{approach}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Consult our physical therapists for a targeted evaluation and custom treatment plan.
          </p>
          <button
            onClick={handleBook}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-md transition-all active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation for This Service</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default TreatmentModal;
