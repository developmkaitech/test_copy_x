import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const reviewsText = t('reviews.items');

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
        {/* Background Decorative Element */}
        <Quote className="absolute top-10 left-10 text-sand/20 dark:text-white/5 transform rotate-180" size={200} />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-gold text-sm font-bold tracking-widest uppercase">{t('reviews.label')}</span>
                <h2 className="text-4xl font-serif text-anthracite dark:text-white mt-4 transition-colors duration-300">{t('reviews.title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS.map((review, index) => (
                    <div key={review.id} className="bg-pearl dark:bg-gray-700 p-8 md:p-10 relative group hover:-translate-y-2 transition-all duration-300">
                        <div className="flex gap-1 mb-6 text-gold">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-200 font-light leading-relaxed italic mb-8 min-h-[100px] text-[21px] transition-colors duration-300">
                            "{reviewsText[index]?.text}"
                        </p>
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-6 transition-colors duration-300">
                            <h4 className="font-serif text-lg text-anthracite dark:text-white transition-colors duration-300">{review.author}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide transition-colors duration-300">{review.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;