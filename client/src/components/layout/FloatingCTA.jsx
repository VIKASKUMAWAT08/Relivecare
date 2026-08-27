import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../../config/clinicData';

export function FloatingCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={CLINIC_INFO.contact.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>Call</span>
        </a>

        <a
          href={CLINIC_INFO.contact.floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-white font-bold text-xs shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#appointment"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-teal-700 active:bg-teal-800 text-white font-bold text-xs shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book</span>
        </a>
      </div>
    </div>
  );
}

export default FloatingCTA;
