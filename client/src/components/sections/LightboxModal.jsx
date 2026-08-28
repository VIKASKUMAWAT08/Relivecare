import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
      
      {/* Top Controls Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20">
        <div className="bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700">
          {currentIndex + 1} / {items.length} — {currentItem.category}
        </div>

        <button
          onClick={onClose}
          type="button"
          className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        type="button"
        className="absolute left-3 sm:left-6 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-teal-700 text-white border border-slate-700 transition-all cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Preview */}
      <div className="relative max-w-4xl max-h-[82vh] w-full flex flex-col items-center justify-center z-10">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 max-h-[70vh] flex items-center justify-center">
          <img
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title}
            className="max-h-[70vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-slate-200 text-xs sm:text-sm max-w-2xl px-4">
          <h4 className="font-bold text-white text-sm sm:text-base">
            {currentItem.title}
          </h4>
          {currentItem.caption && (
            <p className="text-slate-400 text-xs mt-1">
              {currentItem.caption}
            </p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        type="button"
        className="absolute right-3 sm:right-6 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-teal-700 text-white border border-slate-700 transition-all cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export default LightboxModal;
