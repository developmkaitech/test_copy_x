import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { handleSmoothScroll } from '../utils';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
           <img 
            src="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765721182/hero_new_xmyopu.png" 
            alt="Alba sul Lago di Garda" 
            className="w-full h-full object-cover animate-[kenburns_20s_infinite_alternate]" 
            style={{ objectPosition: 'center' }}
          />
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-6 md:px-20 lg:px-32">
        <h2 className="text-white/90 text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-4 animate-fade-in-up shadow-sm">
          {t('hero.location')}
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight max-w-5xl animate-fade-in-up delay-200 drop-shadow-md">
          {t('hero.line1')} <br />
          {t('hero.line2')} <br />
          <span className="italic text-pearl">{t('hero.line3')}</span>
        </h1>
        <p className="text-white/80 text-[23px] md:text-[25px] font-light max-w-2xl mb-12 animate-fade-in-up delay-300 drop-shadow-sm leading-relaxed">
          {t('hero.desc')}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up delay-500">
           <a 
            href="#apartments" 
            onClick={(e) => handleSmoothScroll(e, '#apartments')}
            className="px-8 py-3 border border-white text-white font-semibold tracking-widest uppercase hover:bg-white hover:text-anthracite transition-colors duration-300 shadow-lg backdrop-blur-sm text-center"
          >
            {t('hero.cta_discover')}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 z-10">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;