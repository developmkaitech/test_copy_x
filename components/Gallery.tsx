import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();
  
  // Apply the custom hook to elements with the class 'gallery-scroll-item'
  useScrollReveal('.gallery-scroll-item');

  const getCategory = (cat: string) => {
      if (cat === 'Esterni') return t('gallery.cats.exterior');
      if (cat === 'Interni') return t('gallery.cats.interior');
      if (cat === 'Vista Lago') return t('gallery.cats.lake_view');
      if (cat === 'Dettagli') return t('gallery.cats.details');
      if (cat === 'Territorio') return t('gallery.cats.territory');
      return cat;
  };

  const getAlt = (alt: string) => {
     if (alt.includes('Piscina')) return t('gallery.alts.pool');
     if (alt.includes('Camera')) return t('gallery.alts.bed');
     if (alt.includes('Tramonto')) return t('gallery.alts.sunset');
     if (alt.includes('Dettagli')) return t('gallery.alts.design');
     if (alt.includes('Degustazione')) return t('gallery.alts.wine');
     if (alt.includes('Giardino')) return t('gallery.alts.garden');
     return alt;
  }

  return (
    <section id="gallery" className="py-24 bg-pearl dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-gold text-sm font-bold tracking-widest uppercase">{t('gallery.label')}</span>
                <h2 className="text-4xl font-serif text-anthracite dark:text-white mt-2 transition-colors duration-300">{t('gallery.title')}</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-light mt-4 md:mt-0 max-w-md text-right hidden md:block text-[21px] transition-colors duration-300">
                {t('gallery.desc')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
                key={index} 
                className="gallery-scroll-item scroll-reveal relative group overflow-hidden cursor-pointer h-72 rounded-sm shadow-md img-light-overlay"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 z-10">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-1 drop-shadow-md">{getCategory(img.category)}</span>
                    <span className="text-white font-serif text-xl italic drop-shadow-md">{getAlt(img.alt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen view" 
            className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;