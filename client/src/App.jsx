import React, { useState } from 'react';
import { TopBanner } from './components/layout/TopBanner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { Hero } from './components/sections/Hero';
import { TrustReviews } from './components/sections/TrustReviews';
import { About } from './components/sections/About';
import { Doctors } from './components/sections/Doctors';
import { Treatments } from './components/sections/Treatments';
import { HomePhysiotherapy } from './components/sections/HomePhysiotherapy';
import { Rehabilitation } from './components/sections/Rehabilitation';
import { Experience } from './components/sections/Experience';
import { PatientStories } from './components/sections/PatientStories';
import { SocialMedia } from './components/sections/SocialMedia';
import { Gallery } from './components/sections/Gallery';
import { Appointment } from './components/sections/Appointment';
import { ContactLocation } from './components/sections/ContactLocation';

export function App() {
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleSelectTreatment = (treatmentTitle) => {
    setSelectedTreatment(treatmentTitle);
  };

  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctor(doctorName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-700 selection:text-white relative">
      {/* Top Notification & Location Header */}
      <TopBanner />

      {/* Main Sticky Healthcare Navbar */}
      <Navbar />

      {/* Main Website Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Google Rating 5.0 & Clinical Trust Bar */}
        <TrustReviews />

        {/* 3. About ReliveCare */}
        <About />

        {/* 4. Our Doctors (Dr. Virendra Kumawat & Dr. Kamlesh Mahariya) */}
        <Doctors onSelectDoctorForBooking={handleSelectDoctor} />

        {/* 5. Specialized Treatments & Services (12 Comprehensive Cards) */}
        <Treatments onSelectTreatmentForBooking={handleSelectTreatment} />

        {/* 6. Dedicated Home Physiotherapy Feature */}
        <HomePhysiotherapy onSelectHomeVisitForBooking={handleSelectTreatment} />

        {/* 7. Dedicated Rehabilitation Focus Hub */}
        <Rehabilitation />

        {/* 8. Physiotherapy Experience (5-Step Patient Journey) */}
        <Experience />

        {/* 9. Real Patient Success Stories & Feedback */}
        <PatientStories />

        {/* 10. Patient Video Reviews (Official YouTube Shorts) & Social Hub */}
        <SocialMedia />

        {/* 11. Interactive Gallery & Clinical Facilities */}
        <Gallery />

        {/* 12. Appointment Scheduling Engine (with WhatsApp Integration) */}
        <Appointment 
          preselectedTreatment={selectedTreatment}
          preselectedDoctor={selectedDoctor}
        />

        {/* 13. Contact & Location (Pachar, Rajasthan) */}
        <ContactLocation />
      </main>

      {/* Comprehensive Medical Footer */}
      <Footer />

      {/* Dedicated Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Floating Action Bar for Mobile Users */}
      <FloatingCTA />
    </div>
  );
}

export default App;
