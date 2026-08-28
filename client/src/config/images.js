/**
 * Centralized Image Registry for ReliveCare
 * 
 * 1. Real Local Assets (/images/...) with dynamic Vite base path support for GitHub Pages
 * 2. Curated Clinical Physiotherapy Photography (Strictly realistic clinical physiotherapy settings)
 */

/**
 * Helper to generate correct asset URLs compatible with both local development and GitHub Pages subpath deployment.
 * E.g., under base '/Relivecare/', asset('/images/logo/logo.jpeg') becomes '/Relivecare/images/logo/logo.jpeg'.
 */
export const asset = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const IMAGES = {
  // Brand & Identity
  logo: {
    src: asset('/images/logo/logo.jpeg'),
    alt: "ReliveCare Physiotherapy, Rehabilitation & Wellness Center Logo",
  },

  // Doctors (Real Photographs)
  // STRICT ORDER: Dr. Virendra Kumawat (First), Dr. Kamlesh Mahariya (Second)
  doctors: {
    drVirendra: {
      src: asset('/images/doctors/doctor-virendra-1.jpg.jpeg'),
      secondary: asset('/images/doctors/doctor-virendra-2.jpg.jpeg'),
      alt: "Dr. Virendra Kumawat - BPT Physiotherapist at ReliveCare Clinic",
      name: "Dr. Virendra Kumawat",
      degree: "BPT",
      experience: "2+ Years Experience",
    },
    drKamlesh: {
      src: asset('/images/doctors/doctor-kamlesh.png'),
      alt: "Dr. Kamlesh Mahariya - BPT Physiotherapist at ReliveCare Clinic",
      name: "Dr. Kamlesh Mahariya",
      degree: "BPT",
      experience: "2+ Years Experience",
    },
  },

  // Real Treatment In-Clinic Photos
  clinicTreatments: {
    treatmentReal1: {
      src: asset('/images/treatments/treatment-1.JPG.jpeg'),
      alt: "Clinical physiotherapy treatment session at ReliveCare Center",
      title: "In-Clinic Physical Therapy Session",
    },
    treatmentReal2: {
      src: asset('/images/treatments/treatment-2.jpeg'),
      alt: "Clinical physiotherapy treatment session at ReliveCare Center",
      title: "Specialized Physical Therapy Treatment",
    },
    treatmentReal3: {
      src: asset('/images/treatments/treatment-3.jpeg'),
      alt: "Hands-on clinical physical therapy and joint care at ReliveCare Center",
      title: "Targeted Physiotherapy & Joint Care",
    },
  },

  // Real Clinic Facility Photos
  clinic: {
    clinic1: asset('/images/clinic/clinic-1.jpeg'),
    clinic2: asset('/images/clinic/clinic-2.jpeg'),
    clinic3: asset('/images/clinic/clinic-3.jpeg'),
    clinic4: asset('/images/clinic/clinic-4.jpeg'),
    clinic5: asset('/images/clinic/clinic-5.jpeg'),
    clinic6: asset('/images/clinic/clinic-6.jpeg'),
  },

  // Real Physiotherapy Photos
  physiotherapy: {
    physio1: asset('/images/physiotherapy/physiotherapy-1.jpg'),
    physio2: asset('/images/physiotherapy/physiotherapy-2.jpg'),
  },

  // Real Rehabilitation Photos
  rehabilitationAssets: {
    rehab1: asset('/images/rehabilitation/rehabilitation-1.jpg'),
    rehab2: asset('/images/rehabilitation/rehabilitation-2.jpg'),
  },

  // Hero Section Visual: Dr. Virendra Kumawat (Real Clinic Photograph)
  hero: {
    main: asset('/images/doctors/doctor-virendra-1.jpg.jpeg'),
    alt: "Dr. Virendra Kumawat - Physiotherapist at ReliveCare Clinic Pachar",
    name: "Dr. Virendra Kumawat",
    degree: "BPT",
    role: "Physiotherapist & Rehabilitation Specialist",
    experience: "2+ Years Experience",
  },

  // About Section Visuals
  about: {
    main: asset('/images/treatments/treatment-1.JPG.jpeg'),
    alt: "Physiotherapist conducting a thorough clinical mobility and joint assessment",
    realTreatment: asset('/images/treatments/treatment-1.JPG.jpeg'),
  },

  // Home Physiotherapy Feature Image
  homePhysio: {
    src: asset('/images/physiotherapy/physiotherapy-1.jpg'),
    alt: "Physiotherapist providing dedicated home rehabilitation and physical therapy care",
  },

  // Specialized Clinical Treatment Imagery (Strictly Clinical Physiotherapy)
  treatments: {
    kneePain: {
      src: asset('/images/treatments/treatment-1.JPG.jpeg'),
      alt: "Physiotherapist treating patient knee joint for osteoarthritis and mobility rehabilitation",
    },
    backPain: {
      src: asset('/images/treatments/treatment-3.jpeg'),
      alt: "Physiotherapist performing targeted spinal joint care and rehabilitation",
    },
    shoulderPain: {
      src: asset('/images/physiotherapy/physiotherapy-2.jpg'),
      alt: "Physical therapist mobilizing shoulder joint for frozen shoulder and rotator cuff recovery",
    },
    neckPain: {
      src: asset('/images/doctors/doctor-virendra-2.jpg.jpeg'),
      alt: "Cervical spine physical therapy and postural neck pain relief consultation",
    },
    jointPain: {
      src: asset('/images/treatments/treatment-2.jpeg'),
      alt: "Clinical joint mobilization therapy for arthritis, stiffness, and pain relief",
    },
    sportsInjuries: {
      src: asset('/images/rehabilitation/rehabilitation-1.jpg'),
      alt: "Sports injury functional rehabilitation and athletic movement recovery",
    },
    manualTherapy: {
      src: asset('/images/treatments/treatment-3.jpeg'),
      alt: "Hands-on clinical manual physical therapy and soft tissue mobilization",
    },
    postOperative: {
      src: asset('/images/physiotherapy/physiotherapy-1.jpg'),
      alt: "Post-operative orthopedic rehabilitation and supervised recovery",
    },
    neurological: {
      src: asset('/images/physiotherapy/physiotherapy-2.jpg'),
      alt: "Neurological physical therapy for motor retraining, stroke recovery, and balance",
    },
    exerciseTherapy: {
      src: asset('/images/rehabilitation/rehabilitation-1.jpg'),
      alt: "Supervised exercise therapy and therapeutic movement conditioning",
    },
    postureCorrection: {
      src: asset('/images/rehabilitation/rehabilitation-2.jpg'),
      alt: "Postural assessment and spinal alignment rehabilitation",
    },
    geriatricCare: {
      src: asset('/images/physiotherapy/physiotherapy-1.jpg'),
      alt: "Gentle physical therapy for senior mobility, joint flexibility, and fall prevention",
    },
    homePhysio: {
      src: asset('/images/physiotherapy/physiotherapy-2.jpg'),
      alt: "Personalized home physiotherapy session by certified therapist",
    },
  },

  // Physiotherapy Experience Steps Visuals (Strictly Clinical Physiotherapy)
  experience: {
    assessment: {
      src: asset('/images/doctors/doctor-virendra-2.jpg.jpeg'),
      alt: "Step 1: Clinical movement and joint evaluation by physiotherapist",
      title: "1. Clinical Assessment",
    },
    manualTherapy: {
      src: asset('/images/treatments/treatment-3.jpeg'),
      alt: "Step 2: Hands-on manual therapy and joint mobilization",
      title: "2. Manual Therapy",
    },
    guidedExercise: {
      src: asset('/images/rehabilitation/rehabilitation-1.jpg'),
      alt: "Step 3: Supervised therapeutic exercise and guided movement",
      title: "3. Guided Exercise",
    },
    progressiveStrengthening: {
      src: asset('/images/rehabilitation/rehabilitation-2.jpg'),
      alt: "Step 4: Progressive functional loading and joint durability",
      title: "4. Progressive Rehab",
    },
    recoveryCare: {
      src: asset('/images/physiotherapy/physiotherapy-1.jpg'),
      alt: "Step 5: Long-term mobility, posture ergonomics, and prevention",
      title: "5. Long-Term Recovery",
    },
  },

  // Rehabilitation Hub Focus
  rehabilitation: {
    sports: {
      src: asset('/images/rehabilitation/rehabilitation-1.jpg'),
      alt: "Sports injury functional rehabilitation",
      title: "Sports Injury Rehab",
      description: "Phased return-to-activity protocols for ligament sprains, muscle tears, and athletic recovery.",
    },
    orthopedic: {
      src: asset('/images/rehabilitation/rehabilitation-2.jpg'),
      alt: "Orthopedic joint and spinal physical therapy",
      title: "Orthopedic Care",
      description: "Clinical therapy for arthritis, disc bulge, spondylosis, and chronic musculoskeletal pain.",
    },
    postOp: {
      src: asset('/images/physiotherapy/physiotherapy-1.jpg'),
      alt: "Post-surgical orthopedic rehabilitation",
      title: "Post-Operative Recovery",
      description: "Structured recovery following joint replacements, arthroscopy, and fracture fixations.",
    },
    neuro: {
      src: asset('/images/physiotherapy/physiotherapy-2.jpg'),
      alt: "Neurological physical therapy and motor re-education",
      title: "Neurological Rehab",
      description: "Task-oriented balance and movement retraining for stroke, facial palsy, and nerve conditions.",
    },
    strength: {
      src: asset('/images/treatments/treatment-2.jpeg'),
      alt: "Supervised functional strength and mobility exercises",
      title: "Mobility & Strength",
      description: "Tailored movement conditioning to rebuild joint stability and daily functional stamina.",
    },
  },

  // Interactive Gallery with Real Assets across All Clinical Categories
  gallery: [
    {
      id: "gal-1",
      category: "Treatments",
      title: "Clinical Treatment Session",
      src: asset('/images/treatments/treatment-1.JPG.jpeg'),
      isRealClinicAsset: true,
      caption: "Patient undergoing supervised physiotherapy care at ReliveCare Center",
    },
    {
      id: "gal-2",
      category: "Doctors",
      title: "Dr. Virendra Kumawat (BPT)",
      src: asset('/images/doctors/doctor-virendra-1.jpg.jpeg'),
      isRealClinicAsset: true,
      caption: "Dr. Virendra Kumawat - Physiotherapist & Rehabilitation Specialist",
    },
    {
      id: "gal-3",
      category: "Doctors",
      title: "Dr. Kamlesh Mahariya (BPT)",
      src: asset('/images/doctors/doctor-kamlesh.png'),
      isRealClinicAsset: true,
      caption: "Dr. Kamlesh Mahariya - Physiotherapist & Rehabilitation Specialist",
    },
    {
      id: "gal-4",
      category: "Doctors",
      title: "Dr. Virendra Kumawat (Consultation)",
      src: asset('/images/doctors/doctor-virendra-2.jpg.jpeg'),
      isRealClinicAsset: true,
      caption: "Dr. Virendra Kumawat conducting patient consultation and mobility evaluation",
    },
    {
      id: "gal-5",
      category: "Physiotherapy",
      title: "Physiotherapy Rehabilitation",
      src: asset('/images/physiotherapy/physiotherapy-1.jpg'),
      isRealClinicAsset: true,
      caption: "Targeted clinical physiotherapy and joint mobilization at ReliveCare",
    },
    {
      id: "gal-6",
      category: "Physiotherapy",
      title: "Active Movement & Therapy Session",
      src: asset('/images/physiotherapy/physiotherapy-2.jpg'),
      isRealClinicAsset: true,
      caption: "Guided physical therapy exercise and movement retraining",
    },
    {
      id: "gal-7",
      category: "Rehabilitation",
      title: "Functional Rehabilitation Care",
      src: asset('/images/rehabilitation/rehabilitation-1.jpg'),
      isRealClinicAsset: true,
      caption: "Functional rehabilitation and joint recovery therapy at ReliveCare",
    },
    {
      id: "gal-8",
      category: "Rehabilitation",
      title: "Specialized Rehabilitation Session",
      src: asset('/images/rehabilitation/rehabilitation-2.jpg'),
      isRealClinicAsset: true,
      caption: "Comprehensive physical rehabilitation and strengthening protocol",
    },
    {
      id: "gal-9",
      category: "Treatments",
      title: "Specialized Treatment Procedure",
      src: asset('/images/treatments/treatment-2.jpeg'),
      isRealClinicAsset: true,
      caption: "Hands-on specialized treatment and physical recovery session",
    },
    {
      id: "gal-10",
      category: "Treatments",
      title: "Targeted Clinical Physical Therapy",
      src: asset('/images/treatments/treatment-3.jpeg'),
      isRealClinicAsset: true,
      caption: "Physiotherapy assessment and joint mobilization session at ReliveCare Center",
    },
    {
      id: "gal-11",
      category: "Clinic",
      title: "ReliveCare Clinic Facility - 1",
      src: asset('/images/clinic/clinic-1.jpeg'),
      isRealClinicAsset: true,
      caption: "Modern clinical physiotherapy equipment and treatment area",
    },
    {
      id: "gal-12",
      category: "Clinic",
      title: "ReliveCare Clinic Facility - 2",
      src: asset('/images/clinic/clinic-2.jpeg'),
      isRealClinicAsset: true,
      caption: "Clean, professional, and patient-focused treatment environment",
    },
    {
      id: "gal-13",
      category: "Clinic",
      title: "ReliveCare Clinic Facility - 3",
      src: asset('/images/clinic/clinic-3.jpeg'),
      isRealClinicAsset: true,
      caption: "Dedicated rehabilitation and clinical therapy space",
    },
    {
      id: "gal-14",
      category: "Clinic",
      title: "ReliveCare Clinic Facility - 4",
      src: asset('/images/clinic/clinic-4.jpeg'),
      isRealClinicAsset: true,
      caption: "Comprehensive physiotherapy setup in Pachar, Rajasthan",
    },
    {
      id: "gal-15",
      category: "Clinic",
      title: "ReliveCare Clinic Facility - 5",
      src: asset('/images/clinic/clinic-5.jpeg'),
      isRealClinicAsset: true,
      caption: "Patient-centered physical recovery and care rooms",
    },
    {
      id: "gal-16",
      category: "Clinic",
      title: "ReliveCare Clinic Facility - 6",
      src: asset('/images/clinic/clinic-6.jpeg'),
      isRealClinicAsset: true,
      caption: "Equipped clinical facility for complete musculoskeletal care",
    },
  ],

  // Real Patient Review Videos (Official YouTube Shorts)
  patientVideos: [
    {
      id: "WeujHS6bavc",
      title: "Patient Recovery Journey | Pain Relief & Better Movement",
      subtitle: "Real patient experience at ReliveCare Physiotherapy",
      category: "Patient Recovery",
      duration: "YouTube Shorts",
      thumbnail: "https://img.youtube.com/vi/WeujHS6bavc/hqdefault.jpg",
      videoUrl: "https://youtube.com/shorts/WeujHS6bavc?si=FFa-l3rVHKAFaLx5",
      embedUrl: "https://www.youtube-nocookie.com/embed/WeujHS6bavc?autoplay=1",
      desc: "Patient sharing their experience of clinical physiotherapy and movement rehabilitation at ReliveCare.",
    },
    {
      id: "q4rDgus02hM",
      title: "Patient Experience | Recovery & Improvement Journey",
      subtitle: "Real patient experience at ReliveCare",
      category: "Patient Experience",
      duration: "YouTube Shorts",
      thumbnail: "https://img.youtube.com/vi/q4rDgus02hM/hqdefault.jpg",
      videoUrl: "https://youtube.com/shorts/q4rDgus02hM?si=l4DgZWVIxZyii4Y5",
      embedUrl: "https://www.youtube-nocookie.com/embed/q4rDgus02hM?autoplay=1",
      desc: "Recovery feedback and pain relief progress documented at ReliveCare Center in Pachar.",
    },
    {
      id: "0ysjjSZKl2o",
      title: "Patient Review | Journey Towards Better Movement",
      subtitle: "Real patient experience at ReliveCare",
      category: "Patient Review",
      duration: "YouTube Shorts",
      thumbnail: "https://img.youtube.com/vi/0ysjjSZKl2o/hqdefault.jpg",
      videoUrl: "https://youtube.com/shorts/0ysjjSZKl2o?si=VYymyD4yeFt8JHvC",
      embedUrl: "https://www.youtube-nocookie.com/embed/0ysjjSZKl2o?autoplay=1",
      desc: "Functional improvement feedback from patient receiving guided physical therapy and joint care.",
    },
  ],
};
