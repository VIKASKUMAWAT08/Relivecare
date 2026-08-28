import React from 'react';
import { MapPin, Star, Clock, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../../config/clinicData';

export function TopBanner() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800 py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Location & Google Rating Badge */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <a
            href={CLINIC_INFO.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-teal-300 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{CLINIC_INFO.location.locality}, {CLINIC_INFO.location.state} ({CLINIC_INFO.location.pincode})</span>
          </a>

          <span className="hidden sm:inline text-slate-700">|</span>

          <a
            href={CLINIC_INFO.googleStats.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-slate-800/90 hover:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 text-amber-300 font-medium transition-colors"
          >
            <div className="flex items-center">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-white font-semibold">{CLINIC_INFO.googleStats.rating}</span>
            <span className="text-slate-400 text-[10px]">({CLINIC_INFO.googleStats.reviewCount} Google Reviews)</span>
          </a>
        </div>

        {/* Right: Hours & Official Phone */}
        <div className="flex items-center gap-4 text-slate-300">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>Mon–Sat: 8:00 AM – 8:00 PM</span>
          </div>

          <a 
            href={CLINIC_INFO.contact.phoneTel} 
            className="text-teal-300 hover:text-teal-200 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>{CLINIC_INFO.contact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
