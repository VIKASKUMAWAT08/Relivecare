import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { IMAGES } from '../../config/images';
import { LightboxModal } from './LightboxModal';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Treatments', 'Doctors', 'Physiotherapy', 'Rehabilitation', 'Clinic'];

  const filteredItems = activeCategory === 'All'
    ? IMAGES.gallery
    : IMAGES.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading
          badge="Visual Showcase"
          title="Clinical Care, Rehabilitation &amp; Specialists"
          subtitle="Explore our physiotherapy treatment sessions, clinical care environment, rehabilitation modalities, and qualified physiotherapists."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 pt-2 gap-2 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200 aspect-4/3 bg-slate-100 cursor-pointer transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-teal-800/90 text-white text-[11px] font-semibold border border-teal-600/40">
                    {item.category}
                  </span>
                  {item.isRealClinicAsset && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-slate-950 text-[10px] font-bold">
                      Clinic Photo
                    </span>
                  )}
                </div>

                {/* Bottom Title & Action */}
                <div className="text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm leading-tight">
                        {item.title}
                      </h4>
                      {item.caption && (
                        <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                          {item.caption}
                        </p>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 ml-2">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={filteredItems}
          currentIndex={currentIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
}

export default Gallery;
