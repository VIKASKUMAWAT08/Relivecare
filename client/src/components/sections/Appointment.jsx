import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, AlertCircle, Loader2, Sparkles, ShieldCheck, MessageSquare, ExternalLink, Home } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO, createAppointmentWhatsAppUrl } from '../../config/clinicData';
import { TREATMENTS_DATA } from '../../config/treatmentsData';
import { apiService } from '../../services/api';

export function Appointment({ preselectedTreatment, preselectedDoctor }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (08:00 AM - 12:00 PM)',
    treatmentConcern: '',
    preferredDoctor: 'Any Available Specialist',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState(null);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatmentConcern: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, preferredDoctor: preselectedDoctor }));
    }
  }, [preselectedDoctor]);

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Please provide the patient full name.';
    } else if (formData.patientName.trim().length < 2) {
      errs.patientName = 'Name must be at least 2 characters.';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please provide a contact phone number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = 'Please enter a valid phone number (8-15 digits).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred consultation date.';
    }

    if (!formData.treatmentConcern) {
      errs.treatmentConcern = 'Please select the treatment category or primary concern.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // 1. Generate formatted WhatsApp message URL
      const whatsappUrl = createAppointmentWhatsAppUrl(formData);

      // 2. Also log request in backend store if server is up
      apiService.bookAppointment(formData).catch((err) => {
        console.warn('Backend logging notice:', err);
      });

      // 3. Set UI state to show prepared message and direct WhatsApp link
      setSubmissionState({
        patientName: formData.patientName,
        phoneNumber: formData.phoneNumber,
        date: formData.preferredDate,
        time: formData.preferredTime,
        treatment: formData.treatmentConcern,
        doctor: formData.preferredDoctor,
        whatsappUrl: whatsappUrl,
      });

      // 4. Open WhatsApp in new tab with the pre-filled message
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Reset form
      setFormData({
        patientName: '',
        phoneNumber: '',
        email: '',
        preferredDate: '',
        preferredTime: 'Morning (08:00 AM - 12:00 PM)',
        treatmentConcern: '',
        preferredDoctor: 'Any Available Specialist',
        message: '',
      });
    } catch {
      setErrors({ form: 'Unable to prepare appointment request. Please call or message the clinic directly on WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Appointment Request"
          title="Schedule Your In-Person or Home Consultation"
          subtitle="Submit your requested consultation details below. Your details will be formatted into WhatsApp to connect directly with our clinic coordinator."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-start mt-8">
          
          {/* Left Column: Guidance & Clinic Information (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pawan Vihar, Pachar</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Personalized Physical Therapy Care
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                During your initial visit, our physical therapists conduct an in-depth evaluation of your movement limitations, pain points, and joint mechanics to formulate a personalized rehabilitation plan.
              </p>

              <div className="pt-2 space-y-3 text-xs text-slate-300 border-t border-slate-800">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Clinic Consultation Hours:</strong>
                    <p className="text-slate-400">{CLINIC_INFO.hours.weekdays}</p>
                    <p className="text-slate-400">{CLINIC_INFO.hours.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Direct Clinic Line:</strong>
                    <a
                      href={CLINIC_INFO.contact.phoneTel}
                      className="text-teal-300 hover:text-teal-200 block font-mono font-semibold text-xs mt-0.5"
                    >
                      {CLINIC_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Home className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Home Visit Option:</strong>
                    <p className="text-slate-400">Home physiotherapy available in Pachar &amp; surrounding areas for patients unable to visit clinic.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Private &amp; Confidential:</strong>
                    <p className="text-slate-400">Your health and contact details are handled privately and strictly for clinical appointment coordination.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 text-xs text-slate-300">
                <p className="text-white font-bold mb-0.5">
                  {CLINIC_INFO.name}
                </p>
                <p className="text-slate-400 text-[11px]">
                  {CLINIC_INFO.location.fullAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs relative">
              
              {/* WhatsApp Request Prepared Alert */}
              {submissionState && (
                <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-teal-950 text-white border border-teal-700 shadow-xl animate-in fade-in zoom-in-95">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="text-sm font-bold text-white">
                        Appointment Request Prepared
                      </h4>
                      <p className="text-xs text-teal-200 leading-relaxed">
                        Appointment request prepared for <span className="font-semibold text-white">{submissionState.patientName}</span> ({submissionState.treatment} on {submissionState.date}, {submissionState.time}).
                      </p>
                      <p className="text-xs text-amber-200 bg-teal-900/80 p-2.5 rounded-lg border border-teal-800">
                        Please send the WhatsApp message to the clinic to submit your request. Our clinical team will reply with confirmation of your slot.
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2.5">
                        <a
                          href={submissionState.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-all active:scale-98"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Open WhatsApp to Send Request</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <button
                          onClick={() => setSubmissionState(null)}
                          type="button"
                          className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white underline cursor-pointer"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {errors.form && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 text-red-800 border border-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Patient Name */}
                <div>
                  <label htmlFor="patientName" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Patient Full Name <span className="text-teal-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                        errors.patientName
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.patientName}</p>
                  )}
                </div>

                {/* Phone & Email (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Phone Number <span className="text-teal-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Preferred Date & Preferred Time (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Preferred Date <span className="text-teal-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={today}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 transition-all ${
                          errors.preferredDate
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.preferredDate}</p>
                    )}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Preferred Time Slot <span className="text-teal-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
                      >
                        <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                        <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Treatment / Concern Selection */}
                <div>
                  <label htmlFor="treatmentConcern" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Treatment Concern / Service <span className="text-teal-600">*</span>
                  </label>
                  <select
                    id="treatmentConcern"
                    name="treatmentConcern"
                    value={formData.treatmentConcern}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 transition-all cursor-pointer ${
                      errors.treatmentConcern
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                    }`}
                  >
                    <option value="">-- Please select your condition or service --</option>
                    <option value="Home Physiotherapy Visit" className="font-semibold text-teal-800">
                      ★ Home Physiotherapy Visit (At Your Doorstep)
                    </option>
                    {TREATMENTS_DATA.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title} ({t.category})
                      </option>
                    ))}
                    <option value="General Physical Assessment">General Physical Assessment</option>
                    <option value="Post-Operative Recovery">Post-Operative Recovery</option>
                    <option value="Other Musculoskeletal Pain">Other Musculoskeletal Pain</option>
                  </select>
                  {errors.treatmentConcern && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.treatmentConcern}</p>
                  )}
                </div>

                {/* Preferred Doctor */}
                <div>
                  <label htmlFor="preferredDoctor" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Preferred Physiotherapist
                  </label>
                  <select
                    id="preferredDoctor"
                    name="preferredDoctor"
                    value={formData.preferredDoctor}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
                  >
                    <option value="Any Available Specialist">Any Available Specialist</option>
                    <option value="Dr. Virendra Kumawat">Dr. Virendra Kumawat (BPT, 2+ Yrs Exp)</option>
                    <option value="Dr. Kamlesh Mahariya">Dr. Kamlesh Mahariya (BPT, 2+ Yrs Exp)</option>
                  </select>
                </div>

                {/* Additional Message / Symptoms */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Describe Symptoms / Notes <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe pain location, duration, past surgeries, or request a home visit..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Preparing Your Request...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 text-teal-300" />
                        <span>Confirm Appointment Request on WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center pt-0.5">
                  Submitting will open WhatsApp with your pre-filled consultation request.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Appointment;
