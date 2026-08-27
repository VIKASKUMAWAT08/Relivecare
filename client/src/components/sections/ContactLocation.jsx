import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, ExternalLink, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';
import { apiService } from '../../services/api';

export function ContactLocation() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;

    setIsSending(true);
    try {
      await apiService.submitContactMessage(contactForm);
      setMessageSent(true);
      setContactForm({ name: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Contact &amp; Location"
          title="Visit ReliveCare in Pachar, Rajasthan"
          subtitle="Located near Bhomyaji Mandir in Pawan Vihar, Ramkui, Pachar. Reach out directly for directions or consultation inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          
          {/* Left Column: Contact Cards & Inquiries (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Clinic Address
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">
                    {CLINIC_INFO.name}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5 font-medium">
                    {CLINIC_INFO.location.fullAddress}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={CLINIC_INFO.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={CLINIC_INFO.contact.phoneTel}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call {CLINIC_INFO.contact.phone}</span>
                </a>

                <a
                  href={CLINIC_INFO.contact.floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Timings & Direct Contact */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Direct Contact &amp; Hours
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">{CLINIC_INFO.hours.weekdays}</p>
                    <p className="text-xs text-slate-500">{CLINIC_INFO.hours.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <a
                      href={CLINIC_INFO.contact.phoneTel}
                      className="font-mono font-bold text-slate-900 hover:text-teal-700 transition-colors"
                    >
                      {CLINIC_INFO.contact.phone}
                    </a>
                    <p className="text-[11px] text-slate-400">Direct clinic phone line</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">{CLINIC_INFO.contact.email}</p>
                    <p className="text-[11px] text-slate-400">Email for inquiries &amp; medical reports</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>Have a Quick Question?</span>
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Leave your name and phone number and our clinic staff will reach out to assist you.
              </p>

              {messageSent ? (
                <div className="p-3 bg-teal-900/80 border border-teal-700 text-teal-200 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Thank you! Your message has been sent.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:border-teal-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:border-teal-500"
                  />
                  <textarea
                    rows="2"
                    placeholder="Your question or message (optional)"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:border-teal-500"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-md">
              
              <div className="relative w-full h-[460px] sm:h-[540px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="ReliveCare Physiotherapy Center Pachar Map Location"
                  src={CLINIC_INFO.location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Floating Map Card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-teal-800 font-extrabold text-sm">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>ReliveCare Center</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-tight">
                    {CLINIC_INFO.location.fullAddress}
                  </p>
                  <div className="pt-1">
                    <a
                      href={CLINIC_INFO.location.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:text-teal-900 font-bold text-[11px] flex items-center gap-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactLocation;
