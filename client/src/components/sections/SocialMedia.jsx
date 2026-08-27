import React, { useState } from 'react';
import { Play, ExternalLink, Video, X, Film, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CLINIC_INFO } from '../../config/clinicData';
import { IMAGES } from '../../config/images';

function YoutubeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function SocialMedia() {
  const [activeVideo, setActiveVideo] = useState(null);

  const socialChannels = [
    {
      name: 'Instagram',
      handle: CLINIC_INFO.social.instagramHandle,
      icon: InstagramIcon,
      color: 'text-pink-600 bg-pink-50 border-pink-200',
      btnColor: 'bg-pink-600 hover:bg-pink-700 text-white',
      link: CLINIC_INFO.social.instagram,
      desc: 'Follow daily posture tips, clinical rehabilitation insights, and recovery reels by Dr. Virendra.',
    },
    {
      name: 'YouTube',
      handle: CLINIC_INFO.social.youtubeHandle,
      icon: YoutubeIcon,
      color: 'text-red-500 bg-red-50 border-red-200',
      btnColor: 'bg-red-600 hover:bg-red-700 text-white',
      link: CLINIC_INFO.social.youtube,
      desc: 'Watch guided exercise routines, home rehabilitation tutorials, and physiotherapy techniques.',
    },
    {
      name: 'Facebook',
      handle: CLINIC_INFO.social.facebookHandle,
      icon: FacebookIcon,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
      link: CLINIC_INFO.social.facebook,
      desc: 'Clinic announcements, patient wellness guides, and health updates for Pachar and surrounding areas.',
    },
  ];

  const videoList = IMAGES.patientVideos || [];

  return (
    <section id="social" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Patient Review Videos &amp; Social"
          title="Real Patient Recovery Experiences"
          subtitle="Watch real patient feedback, recovery journeys, and exercise tutorials from ReliveCare Physiotherapy Center in Pachar."
        />

        {/* Video Showcase Section */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold mb-2">
                <Video className="w-3.5 h-3.5" />
                <span>Patient Video Reviews</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Featured Recovery Journeys &amp; Reviews
              </h3>
            </div>
            <a
              href={CLINIC_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-teal-200 transition-colors"
            >
              <span>Visit Official YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3 Real YouTube Shorts Video Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoList.map((video, idx) => (
              <div
                key={video.id || idx}
                className="bg-slate-800/90 rounded-2xl border border-slate-700 overflow-hidden shadow-lg flex flex-col group hover:border-teal-500/50 transition-all"
              >
                {/* Clickable Video Preview */}
                <div 
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-9/12 bg-slate-950 overflow-hidden cursor-pointer group"
                  title={`Play ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-teal-400 transition-transform">
                      <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Badge & Duration */}
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                    <span>Shorts</span>
                  </span>

                  <span className="absolute bottom-3 right-3 bg-slate-950/90 text-teal-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-slate-700">
                    Click to Play
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                      {video.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors mt-1 leading-snug">
                      {video.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1 font-medium">
                      {video.subtitle}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                      {video.desc}
                    </p>
                  </div>

                  {/* Direct YouTube Link Button */}
                  <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="text-xs font-bold text-teal-300 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Preview</span>
                    </button>

                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-700/80 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setActiveVideo(null)}
          >
            <div 
              className="bg-slate-900 rounded-2xl border border-slate-700 max-w-lg w-full overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
                <div className="pr-4">
                  <h4 className="text-sm font-bold text-white line-clamp-1">{activeVideo.title}</h4>
                  <p className="text-xs text-teal-300">{activeVideo.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube Embed Frame */}
              <div className="relative aspect-9/16 sm:aspect-16/9 bg-black">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 bg-slate-800/90 border-t border-slate-700 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  ReliveCare Physiotherapy Pachar
                </span>
                <a
                  href={activeVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>Open in YouTube App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Social Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${channel.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono bg-slate-100 px-2 py-1 rounded text-slate-700 font-semibold">
                      {channel.handle}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {channel.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>

                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${channel.btnColor}`}
                >
                  <span>Connect on {channel.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SocialMedia;
