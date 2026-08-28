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
  
  // Location & Address (Official Location)
  location: {
    addressLine1: "Pawan Vihar, 6",
    landmark: "Near Bhomyaji Mandir, Ramkui",
    locality: "Pachar",
    district: "Jaipur / Sikar Region",
    state: "Rajasthan",
    pincode: "303706",
    fullAddress: "Pawan Vihar, 6, Near Bhomyaji Mandir, Ramkui, Pachar, Rajasthan 303706",
    // Official Exact Google Maps Link
    directionsUrl: "https://maps.app.goo.gl/Sxi5X56qtbD5HaSu5?g_st=ic",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.159392095945!2d75.380000!3d27.025000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c56b06385abdb%3A0xb36cb5da3334237f!2sPachar%2C%20Rajasthan%20303706!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // Contact Information (Official Clinic Details)
  contact: {
    phone: "+91 6367113767",
    phoneDisplay: "+91 63671 13767",
    phoneTel: "tel:+916367113767",
    phoneRaw: "916367113767",
    email: "relivecarephysio@gmail.com",
    emailMailto: "mailto:relivecarephysio@gmail.com",
    
    // Quick Floating & General WhatsApp
    floatingWhatsAppUrl: "https://wa.me/916367113767?text=Hello%20ReliveCare%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20the%20available%20slots.",
    whatsappUrl: "https://wa.me/916367113767",
    
    // Home Physiotherapy WhatsApp CTA
    homePhysioWhatsAppUrl: "https://wa.me/916367113767?text=Hello%20ReliveCare%20Physiotherapy%2C%20I%20would%20like%20to%20book%20a%20Home%20Physiotherapy%20visit.%20Please%20share%20the%20details%20and%20availability.",
    appointmentNotice: "In-person consultation slots are scheduled and confirmed directly by our clinical care team.",
  },

  // Home Physiotherapy Feature Details
  homePhysiotherapy: {
    title: "Home Physiotherapy – Treatment at Your Doorstep",
    subtitle: "Get expert personalized physiotherapy treatment at your home from our experienced physiotherapists.",
    badge: "Doorstep Healthcare",
    ctaText: "Book a Home Visit",
    description: "Ideal for patients with mobility limitations, senior citizens, post-operative recovery, or those seeking treatment in the comfort and convenience of their home.",
    benefits: [
      "Personalized 1-on-1 care at your residence",
      "Comfortable rehabilitation for senior family members",
      "Safe post-surgical mobility and recovery training",
      "No travel stress for acute pain or bedridden patients",
    ],
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
    mapsUrl: "https://maps.app.goo.gl/Sxi5X56qtbD5HaSu5?g_st=ic",
  },

  // Social Media Links (Official Accounts)
  social: {
    instagram: "https://www.instagram.com/drvirendrarelivecare?igsi=MW10NTZyZWJ5cHl5cw==",
    instagramHandle: "@drvirendrarelivecare",
    youtube: "https://youtube.com/@drvirendrakumawat?si=oa5qlDPnqPspYQOz",
    youtubeHandle: "@drvirendrakumawat",
    facebook: "https://www.facebook.com/share/18VSwGim5u/?mibextid=wwXIfr",
    facebookHandle: "ReliveCare Physiotherapy",
    maps: "https://maps.app.goo.gl/Sxi5X56qtbD5HaSu5?g_st=ic",
    whatsapp: "https://wa.me/916367113767",
  },

  // Doctors & Clinical Specialists
  // STRICT ORDER: 1. Dr. Virendra Kumawat (MUST BE FIRST), 2. Dr. Kamlesh Mahariya (SECOND)
  doctors: [
    {
      id: "dr-virendra",
      name: "Dr. Virendra Kumawat",
      degree: "BPT",
      role: "Physiotherapist & Rehabilitation Specialist",
      experience: "2+ Years Experience",
      whatsappNumber: "+91 6367113767",
      whatsappUrl: "https://wa.me/916367113767?text=Hello%20ReliveCare%20Physiotherapy%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Virendra%20Kumawat.%20Please%20share%20the%20available%20slots.",
      phoneTel: "tel:+916367113767",
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
      whatsappNumber: "+91 9672936656",
      whatsappUrl: "https://wa.me/919672936656?text=Hello%20ReliveCare%20Physiotherapy%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Kamlesh%20Mahariya.%20Please%20share%20the%20available%20slots.",
      phoneTel: "tel:+919672936656",
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
