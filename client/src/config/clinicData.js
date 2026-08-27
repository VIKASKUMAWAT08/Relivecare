import { asset } from './images';

/**
 * Centralized Clinic Configuration for ReliveCare
 * Production-ready details for ReliveCare Physiotherapy, Rehabilitation & Wellness Center
 */

export const CLINIC_INFO = {
  name: "ReliveCare Physiotherapy, Rehabilitation & Wellness Center",
  shortName: "ReliveCare",
  tagline: "Move Better. Recover Stronger. Live Better.",
  locationName: "Pachar, Rajasthan",
  
  // Location & Address
  location: {
    addressLine1: "Pawan Vihar, 6",
    landmark: "Near Bhomyaji Mandir, Ramkui",
    locality: "Pachar",
    district: "Jaipur / Sikar Region",
    state: "Rajasthan",
    pincode: "303706",
    fullAddress: "Pawan Vihar, 6, Near Bhomyaji Mandir, Ramkui, Pachar, Rajasthan 303706",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.159392095945!2d75.380000!3d27.025000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c56b06385abdb%3A0xb36cb5da3334237f!2sPachar%2C%20Rajasthan%20303706!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Pawan+Vihar+6+Near+Bhomyaji+Mandir+Ramkui+Pachar+Rajasthan+303706",
  },

  // Contact Information (Official Clinic Details)
  contact: {
    phone: "+91 6367113767",
    phoneDisplay: "+91 63671 13767",
    phoneTel: "tel:+916367113767",
    phoneRaw: "916367113767",
    // Quick Floating WhatsApp Chat
    floatingWhatsAppUrl: "https://wa.me/916367113767?text=Hello%20ReliveCare%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20the%20available%20slots.",
    whatsappUrl: "https://wa.me/916367113767",
    email: "relivecarephysio@gmail.com",
    appointmentNotice: "In-person consultation slots are scheduled and confirmed directly by our clinical care team.",
  },

  // Operating Hours
  hours: {
    weekdays: "Monday – Saturday: 8:00 AM – 8:00 PM",
    sunday: "Sunday: By Prior Appointment",
    emergency: "Consultation & Appointment Support",
  },

  // Google Rating & Credibility
  googleStats: {
    rating: "5.0",
    reviewCount: "20+",
    platform: "Google Reviews",
    ratingText: "5.0 Google Rating (20+ Reviews)",
  },

  // Social Media Links (Official Accounts)
  social: {
    instagram: "https://instagram.com/drvirendrarelivecare",
    instagramHandle: "@drvirendrarelivecare",
    youtube: "https://youtube.com/@drvirendrakumawat?si=oa5qlDPnqPspYQOz",
    youtubeHandle: "@drvirendrakumawat",
    facebook: "https://facebook.com/relivecare",
    facebookHandle: "ReliveCare Physiotherapy",
    whatsapp: "https://wa.me/916367113767",
  },

  // Doctors & Clinical Specialists
  // ORDER: 1. Dr. Virendra Kumawat (MUST BE FIRST), 2. Dr. Kamlesh Mahariya
  doctors: [
    {
      id: "dr-virendra",
      name: "Dr. Virendra Kumawat",
      degree: "BPT",
      role: "Physiotherapist & Rehabilitation Specialist",
      experience: "2+ Years Experience",
      image: asset('/images/doctors/doctor-virendra-1.jpg.jpeg'),
      secondaryImage: asset('/images/doctors/doctor-virendra-2.jpg.jpeg'),
      alt: "Dr. Virendra Kumawat - Physiotherapist at ReliveCare Clinic Pachar",
      focusAreas: [
        "Spine and cervical pain management",
        "Manual therapy and soft tissue release",
        "Posture correction and ergonomic rehab",
        "Sports injury and functional recovery",
      ],
      bio: "Committed to evidence-informed physical therapy, manual joint mobilization, and specialized exercise rehabilitation protocols tailored to eliminate pain and restore full movement.",
    },
    {
      id: "dr-kamlesh",
      name: "Dr. Kamlesh Mahariya",
      degree: "BPT",
      role: "Physiotherapist & Rehabilitation Specialist",
      experience: "2+ Years Experience",
      image: asset('/images/doctors/doctor-kamlesh.png'),
      alt: "Dr. Kamlesh Mahariya - Physiotherapist at ReliveCare Clinic Pachar",
      focusAreas: [
        "Knee & Shoulder Pain Rehabilitation",
        "Manual Therapy & Joint Mobilization",
        "Neurological Recovery & Gait Retraining",
        "Post-Surgical Rehabilitation & Strength Building",
      ],
      bio: "Dedicated to comprehensive clinical assessment, targeted manual techniques, and progressive therapeutic exercise plans designed for sustainable recovery and daily mobility.",
    },
  ],

  // Core Clinical Value Propositions
  pillars: [
    {
      id: "evidence-based",
      title: "Evidence-Informed Therapy",
      description: "Treatment plans grounded in validated physical therapy protocols to resolve the root cause of pain.",
    },
    {
      id: "personalized",
      title: "Dedicated 1-on-1 Care",
      description: "Individualized attention throughout your session to ensure correct technique, comfort, and steady progression.",
    },
    {
      id: "hands-on",
      title: "Skilled Manual Therapy",
      description: "Hands-on joint mobilization, myofascial release, and therapeutic modalities to relieve stiffness.",
    },
    {
      id: "guided-rehab",
      title: "Supervised Rehabilitation",
      description: "Step-by-step guided functional exercises to rebuild strength, improve flexibility, and prevent re-injury.",
    },
  ],
};

/**
 * Generate formatted, properly URL-encoded WhatsApp message link for appointment submission
 */
export function createAppointmentWhatsAppUrl(data) {
  const notesText = data.message && data.message.trim() ? data.message.trim() : "None provided";
  const specialistText = data.preferredDoctor || "Any Available Specialist";

  const message = `New Appointment Request
-----------------------
Patient Name: ${data.patientName}
Patient Phone: ${data.phoneNumber}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Treatment Concern: ${data.treatmentConcern}
Preferred Specialist: ${specialistText}
Symptoms / Notes: ${notesText}

Please contact the patient to confirm the appointment.`;

  return `https://wa.me/916367113767?text=${encodeURIComponent(message)}`;
}
