import React, { useState } from 'react';
import { APARTMENTS } from '../constants';
import { Maximize, Users, BedDouble, Bath } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Apartment } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ApartmentItem: React.FC<{ apt: Apartment; index: number; t: any; onBook: (id: string) => void }> = ({ apt, index, t, onBook }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const translationKey = `apartments.items.${apt.id}`;
  const features = t(`${translationKey}.features`) as string[];
  const isVilla = apt.id === 'villa-luminaria';

  return (
    <div 
      data-id={apt.id}
      className={`apartment-scroll-item scroll-reveal apartment-card group bg-white dark:bg-gray-800 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden border-b-4 border-gold/50 ${isVilla ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`relative overflow-hidden img-light-overlay ${isVilla ? 'h-80 md:h-[500px]' : 'h-80'}`}>
        <img 
          src={apt.images[activeImageIndex]} 
          alt={t(`${translationKey}.name`)} 
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-6 py-3 transition-colors duration-300 z-10">
          <span className="text-gold font-serif text-xl italic">{apt.size}</span>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-4 gap-0.5 border-t border-b border-gray-100 dark:border-gray-700">
        {apt.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImageIndex(idx)}
            className={`relative h-20 overflow-hidden focus:outline-none transition-opacity img-light-overlay ${
              activeImageIndex === idx ? 'opacity-100 ring-2 ring-inset ring-gold z-10' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      
      <div className="p-8 md:p-10">
        <h3 className={`font-serif text-anthracite dark:text-white mb-4 transition-colors duration-300 ${isVilla ? 'text-4xl' : 'text-3xl'}`}>{t(`${translationKey}.name`)}</h3>
        <p className="text-gray-600 dark:text-gray-300 font-light mb-8 leading-relaxed text-[21px] h-44 overflow-hidden transition-colors duration-300">
          {t(`${translationKey}.desc`)}
        </p>

        <div className="flex justify-between items-center mb-8 border-t border-b border-gray-100 dark:border-gray-700 py-6 transition-colors duration-300">
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <Maximize size={20} className="mb-2 text-gold" />
            <span className="text-xs uppercase tracking-wider">{apt.size}</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <Users size={20} className="mb-2 text-gold" />
            <span className="text-xs uppercase tracking-wider">{apt.guests} {t('apartments.guests')}</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <BedDouble size={20} className="mb-2 text-gold" />
            <span className="text-xs uppercase tracking-wider">{apt.rooms} {t('apartments.rooms')}</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <Bath size={20} className="mb-2 text-gold" />
            <span className="text-xs uppercase tracking-wider">{apt.bathrooms} {t('apartments.bathrooms')}</span>
          </div>
        </div>

        <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-anthracite dark:text-gray-200 transition-colors duration-300">{t('apartments.services')}</h4>
            <ul className={`grid gap-y-2 ${isVilla ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
                {features.map((f: string) => (
                    <li key={f} className="flex items-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                        {f}
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between transition-colors duration-300">
           <button className="text-lake dark:text-gold-light font-semibold uppercase tracking-widest text-xs hover:text-gold transition-colors">
              {t('apartments.gallery')}
           </button>
           <button 
              onClick={() => onBook(apt.id)}
              className="bg-lake dark:bg-gold text-white shadow-md px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-lake/90 dark:hover:bg-gold-light transition-colors"
            >
              {t('apartments.availability')}
           </button>
        </div>
      </div>
    </div>
  );
};

const Apartments: React.FC<{ onBookClick: (id?: string) => void }> = ({ onBookClick }) => {
  const { t } = useLanguage();
  
  // Apply the custom hook to elements with the class 'apartment-scroll-item'
  useScrollReveal('.apartment-scroll-item');

  return (
    <section id="apartments" className="py-24 bg-pearl dark:bg-gray-900 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">{t('apartments.title_sm')}</span>
          <h2 className="text-4xl md:text-5xl font-serif text-anthracite dark:text-white mt-4 mb-6 transition-colors duration-300">{t('apartments.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed text-[21px] transition-colors duration-300">
            {t('apartments.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {APARTMENTS.map((apt, index) => (
            <ApartmentItem 
              key={apt.id} 
              apt={apt} 
              index={index} 
              t={t}
              onBook={onBookClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;