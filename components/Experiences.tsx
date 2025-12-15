import React from 'react';
import { Wine, Anchor, Bike, Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Experiences: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-24 bg-garda-mist text-anthracite relative transition-colors duration-300">
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-20">
            <span className="text-white text-sm font-bold tracking-widest uppercase">{t('experiences.label')}</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-anthracite">{t('experiences.title')}</h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-light leading-relaxed text-[21px]">
              {t('experiences.desc')}
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExperienceCard 
              icon={Wine}
              title={t('experiences.cards.wine.title')}
              description={t('experiences.cards.wine.desc')}
              image="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765364842/samples/food/fish-vegetables.jpg"
            />
            <ExperienceCard 
              icon={Anchor}
              title={t('experiences.cards.lake.title')}
              description={t('experiences.cards.lake.desc')}
              image="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765564390/2025-05-31-19-22-14-857_nhn304.png"
            />
             <ExperienceCard 
              icon={Bike}
              title={t('experiences.cards.sport.title')}
              description={t('experiences.cards.sport.desc')}
              image="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765364845/samples/bike.jpg"
            />
             <ExperienceCard 
              icon={Sun}
              title={t('experiences.cards.surroundings.title')}
              description={t('experiences.cards.surroundings.desc')}
              image="https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765364849/samples/landscapes/nature-mountains.jpg"
            />
         </div>
       </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ icon: React.ElementType, title: string, description: string, image: string }> = ({ icon: Icon, title, description, image }) => (
  <div className="group relative overflow-hidden h-96 cursor-pointer rounded-sm shadow-md img-light-overlay">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-3">
            <Icon className="text-gold" size={24} />
            <h3 className="text-xl font-serif text-white">{title}</h3>
        </div>
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
            <p className="text-[19px] text-gray-200 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
            </p>
        </div>
      </div>
    </div>
  </div>
);

export default Experiences;