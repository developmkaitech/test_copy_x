import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';
import { handleSmoothScroll } from '../utils';

interface NavigationProps {
  onBookClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme logic
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    // Default to light (white) theme. Only switch to dark if explicitly stored.
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Body Scroll Lock & Escape Key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    handleSmoothScroll(e, href);
  };

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
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          scrolled || isOpen ? 'glass-nav shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <a 
            href="#home" 
            className="group relative z-[60]"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="flex flex-col items-start">
              <span className={`font-serif text-2xl font-semibold tracking-widest uppercase transition-colors duration-300 ${scrolled || isOpen ? 'text-lake dark:text-white' : 'text-lake md:text-white'}`}>
                Luminaria
              </span>
              <span className={`text-xs tracking-[0.3em] font-light ${scrolled || isOpen ? 'text-gold' : 'text-gold md:text-white/80'}`}>
                ESSENCE
              </span>
            </div>
          </a>

          {/* Right Side Controls */}
          <div className="flex items-center gap-6 md:gap-8 relative z-[60]">
            
            {/* Desktop Book Button - Only visible on desktop */}
            <div className="hidden md:block">
                <button 
                className="btn-prenota hover:opacity-80 transition-all duration-300"
                style={{
                    color: scrolled || isOpen ? '#94B2BB' : 'rgb(255, 255, 255)',
                    borderColor: scrolled || isOpen ? '#94B2BB' : 'rgb(255, 255, 255)'
                }}
                onClick={onBookClick}
                >
                {t('nav.book')}
                </button>
            </div>

            {/* Hamburger Button (Always Visible) */}
            <button 
              className="w-8 h-8 flex flex-col justify-center items-center gap-[6px] focus:outline-none cursor-pointer group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-8 h-[2px] transform transition-all duration-300 ease-in-out ${
                 scrolled || isOpen ? 'bg-anthracite dark:bg-white' : 'bg-lake md:bg-white' 
              } ${isOpen ? 'rotate-45 translate-y-[8px]' : ''} group-hover:bg-gold`} />
              
              <span className={`block w-8 h-[2px] transition-all duration-300 ease-in-out ${
                 scrolled || isOpen ? 'bg-anthracite dark:bg-white' : 'bg-lake md:bg-white'
              } ${isOpen ? 'opacity-0' : 'opacity-100'} group-hover:bg-gold`} />
              
              <span className={`block w-8 h-[2px] transform transition-all duration-300 ease-in-out ${
                 scrolled || isOpen ? 'bg-anthracite dark:bg-white' : 'bg-lake md:bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''} group-hover:bg-gold`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[40] transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-Down Menu Panel (Full Width) */}
      <div 
        className={`fixed top-0 left-0 w-full bg-pearl dark:bg-gray-900 z-[50] shadow-xl transform transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: 'auto', maxHeight: '100vh', paddingBottom: '3rem' }}
      >
        <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center pt-32 pb-10 space-y-8">
          
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            {NAV_LINKS.map((link, index) => (
                <a
                key={link.label}
                href={link.href}
                className={`text-2xl md:text-4xl font-serif text-anthracite dark:text-white hover:text-gold transition-all duration-500 transform ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
                onClick={(e) => handleNavClick(e, link.href)}
                >
                {getLabel(link.href)}
                </a>
            ))}
          </div>

          <div 
             className={`w-16 h-px bg-gray-300 dark:bg-gray-700 my-8 transition-all duration-500 delay-300 ${
                isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
             }`}
          ></div>

          {/* Menu Controls (Visible on all screens) */}
          <div 
            className={`flex flex-col items-center gap-8 transition-all duration-500 delay-500 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
             {/* Settings Row: Language & Theme */}
             <div className="flex items-center gap-6">
                {/* Language Switcher */}
                <div className="flex gap-4 text-sm font-semibold tracking-widest uppercase">
                    {(['it', 'en', 'de'] as Language[]).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`transition-colors duration-300 ${language === lang ? 'text-gold underline underline-offset-4' : 'text-gray-500 dark:text-gray-400 hover:text-anthracite dark:hover:text-white'}`}
                    >
                        {lang}
                    </button>
                    ))}
                </div>

                <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="text-gray-500 dark:text-gray-400 hover:text-gold transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
             </div>

            {/* Mobile Book Button (Hidden on Desktop as it is in Navbar) */}
            <button 
              className="px-8 py-3 bg-gold text-white text-xs font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 md:hidden shadow-lg"
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
            >
              {t('nav.book')}
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navigation;