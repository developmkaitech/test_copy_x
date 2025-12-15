import React from 'react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { handleSmoothScroll } from '../utils';

const Footer: React.FC = () => {
  const { t } = useLanguage();

   const getLabel = (href: string) => {
     const key = href.replace('#', '');
     if(key === 'home') return t('nav.home');
     if(key === 'apartments') return t('nav.apartments');
     if(key === 'villa') return t('nav.villa');
     if(key === 'experience') return t('nav.experience');
     if(key === 'gallery') return t('nav.gallery');
     if(key === 'contact') return t('nav.contact');
     return '';
  };

  return (
    <footer className="bg-garda-mist text-anthracite pt-20 pb-10 border-t border-anthracite/5 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:w-1/3">
             <div className="flex flex-col items-start mb-6">
                <span className="font-serif text-3xl font-semibold tracking-widest uppercase text-anthracite">
                  Luminaria
                </span>
                <span className="text-sm tracking-[0.4em] font-light text-gold-light">
                  ESSENCE
                </span>
              </div>
              <p className="text-gray-600 font-light leading-relaxed max-w-xs text-[21px]">
                {t('footer.desc')}
              </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h4 className="text-anthracite text-xs font-bold uppercase tracking-widest mb-6">{t('footer.nav')}</h4>
            <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                    <li key={link.label}>
                        <a 
                          href={link.href} 
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className="text-gray-600 hover:text-white transition-colors text-sm font-light"
                        >
                            {getLabel(link.href)}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

           {/* Legal & Certs */}
           <div className="md:w-1/3">
            <h4 className="text-anthracite text-xs font-bold uppercase tracking-widest mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-light">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.cookie')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
            </ul>
            <div className="mt-8">
                 <h4 className="text-anthracite text-xs font-bold uppercase tracking-widest mb-4">{t('footer.sustainability')}</h4>
                 <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <span className="border border-gray-400 px-2 py-1">Eco-Friendly Certified</span>
                    <span className="border border-gray-400 px-2 py-1">100% Green Energy</span>
                 </div>
            </div>
          </div>
        </div>

        <div className="border-t border-anthracite/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
            <p>&copy; {new Date().getFullYear()} Luminaria Essence. {t('footer.rights')}</p>
            <p className="mt-2 md:mt-0">{t('footer.design')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;