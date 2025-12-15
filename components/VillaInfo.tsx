import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../LanguageContext';

const VillaInfo: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.villa-anim');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getServiceLabel = (label: string) => {
    // Map the icon labels from constants to translation keys
    // This assumes constants.ts has specific Italian labels currently
    if (label.includes('Wi-Fi')) return t('villa.services.wifi');
    if (label.includes('Aria')) return t('villa.services.ac');
    if (label.includes('Parcheggio')) return t('villa.services.parking');
    if (label.includes('Giardino')) return t('villa.services.garden');
    if (label.includes('Cucina')) return t('villa.services.kitchen');
    if (label.includes('Smart')) return t('villa.services.tv');
    if (label.includes('Colazione')) return t('villa.services.breakfast');
    if (label.includes('Piscina')) return t('villa.services.pool');
    return label;
  };

  return (
    <section id="villa" className="py-24 relative overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/10 dark:bg-black/20 -z-10 transition-colors duration-300"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <span className="text-gold text-sm font-bold tracking-widest uppercase">{t('villa.label')}</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-anthracite dark:text-white leading-tight transition-colors duration-300">
              {t('villa.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-[21px] transition-colors duration-300">
              {t('villa.p1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-[19px] transition-colors duration-300">
              {t('villa.p2')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 pt-8">
              {SERVICES.map((service) => (
                <div key={service.label} className="flex items-center gap-4">
                  <div className="p-3 bg-pearl dark:bg-gray-700 rounded-full text-gold transition-colors duration-300">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-anthracite dark:text-gray-200 font-medium tracking-wide transition-colors duration-300">
                    {getServiceLabel(service.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative villa-anim opacity-0 translate-y-[50px] transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <div className="relative z-10 img-light-overlay">
                <img 
                    src="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466687/villa_yaqpbv.jpg" 
                    alt="Architettura Luminaria" 
                    className="w-full h-[600px] object-cover shadow-2xl"
                />
            </div>
            {/* Overlay Image */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 z-20 hidden md:block border-8 border-white dark:border-gray-800 shadow-xl transition-colors duration-300 img-light-overlay">
                 <img 
                    src="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466119/ouside_1_et7rsc.jpg" 
                    alt="Dettaglio Giardino" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VillaInfo;