import React from 'react';
import { CLINIC_INFO } from '../../config/clinicData';

function WhatsAppSvgIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.772.824 2.791.825h.001c3.181 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.769-5.769-5.769zm3.374 8.163c-.144.405-.837.774-1.17.825-.311.05-.712.072-2.029-.472-1.685-.697-2.766-2.427-2.85-2.54-.084-.112-.676-.899-.676-1.714 0-.814.425-1.216.577-1.381.144-.157.382-.232.61-.232.074 0 .141.004.202.007.177.008.266.02.383.301.146.353.504 1.228.548 1.317.044.089.073.193.014.309-.059.117-.089.19-.177.293-.089.104-.187.232-.266.311-.089.088-.182.185-.078.363.104.177.464.767.996 1.242.686.612 1.265.802 1.444.891.178.089.282.078.387-.044.104-.122.445-.518.563-.696.119-.178.238-.148.397-.089.158.059 1.007.475 1.18.564.173.089.288.133.33.208.043.074.043.431-.101.836zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.433 5.176L2 22l4.954-1.399C8.406 21.499 10.147 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.684 0-3.255-.494-4.576-1.343l-.328-.21-2.954.832.842-2.879-.228-.344C3.847 14.858 3.333 13.473 3.333 12c0-4.779 3.888-8.667 8.667-8.667 4.779 0 8.667 3.888 8.667 8.667 0 4.779-3.888 8.667-8.667 8.667z"/>
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={CLINIC_INFO.contact.floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle pulsating outer ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsAppSvgIcon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />

        {/* Tooltip on Desktop Hover */}
        <span className="hidden sm:group-hover:inline-block absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-slate-700 animate-in fade-in slide-in-from-right-2">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
