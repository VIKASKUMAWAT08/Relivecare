import React, { useState } from 'react';
import { Play, MessageCircle, ExternalLink, X, Video } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function SocialMedia() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="social-hub" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Verified Patient Feedback"
          title="Patient Video Reviews &amp; Recovery Highlights"
          subtitle="Watch real patient recovery experiences and clinical physiotherapy feedback recorded at ReliveCare Center."
        />

        {/* 3 YouTube Shorts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto mt-8">
          {IMAGES.patientVideos.map((video, idx) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-9/14 sm:aspect-9/13 bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-90"
                  loading="lazy"
                  decoding="async"
                  width="360"
                  height="520"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold shadow-md">
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YouTube Shorts</span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2 py-0.5 rounded-md bg-teal-900/80 text-teal-300 text-[10px] font-semibold uppercase tracking-wider mb-1.5 inline-block">
                    Review {idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                    {video.title}
                  </h4>
                  <p className="text-[11px] text-teal-200 mt-1">
                    {video.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveVideo(video)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 cursor-pointer"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Watch Review</span>
                </button>

                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-red-600 transition-colors"
                >
                  <span>Open YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Channels Connect Bar */}
        <div className="max-w-4xl mx-auto mt-10 p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Connect with ReliveCare on Social Channels
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Watch therapy demonstrations, mobility routines, and patient success stories.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Instagram */}
            <a
              href={CLINIC_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 transition-colors"
              title="Instagram @drvirendrarelivecare"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* YouTube */}
            <a
              href={CLINIC_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors"
              title="YouTube @drvirendrakumawat"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href={CLINIC_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
              title="Facebook ReliveCare"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={CLINIC_INFO.contact.floatingWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
              title="WhatsApp Consultation"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Video Preview Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-sm sm:max-w-md bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              
              {/* Modal Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <YoutubeIcon className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-xs font-bold truncate max-w-[240px]">
                    {activeVideo.title}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-9/16 bg-black w-full">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {activeVideo.subtitle}
                </span>
                <a
                  href={activeVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-bold"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default SocialMedia;
