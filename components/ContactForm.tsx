import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    apartment: 'Suite Essence Lago',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API Call
    setTimeout(() => {
        console.log('Form Submitted', formData);
        setStatus('success');
        setFormData({
            firstName: '', lastName: '', email: '', phone: '', 
            checkIn: '', checkOut: '', guests: 2, apartment: 'Suite Essence Lago', message: ''
        });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-sand/30 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
                <span className="text-gold text-sm font-bold tracking-widest uppercase">{t('contact.label')}</span>
                <h2 className="text-4xl font-serif text-anthracite dark:text-white mt-4 mb-6 transition-colors duration-300">{t('contact.title')}</h2>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-[21px] transition-colors duration-300">
                    {t('contact.desc')}
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1" size={24} />
                    <div>
                        <h4 className="font-serif text-lg text-anthracite dark:text-white transition-colors duration-300">{t('contact.address_title')}</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">Via delle Rose 12, 37011<br/>Bardolino (VR), Italia</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="text-gold mt-1" size={24} />
                    <div>
                        <h4 className="font-serif text-lg text-anthracite dark:text-white transition-colors duration-300">{t('contact.phone_title')}</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">+39 045 123 4567</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="text-gold mt-1" size={24} />
                    <div>
                        <h4 className="font-serif text-lg text-anthracite dark:text-white transition-colors duration-300">{t('contact.email_title')}</h4>
                        <p className="text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">info@luminariaessence.it</p>
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 block transition-colors duration-300">{t('contact.follow')}</span>
                <div className="flex gap-4">
                    <a href="#" className="text-anthracite dark:text-white hover:text-gold dark:hover:text-gold transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-anthracite dark:text-white hover:text-gold dark:hover:text-gold transition-colors"><Facebook size={24} /></a>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white dark:bg-gray-800 p-8 md:p-12 shadow-lg rounded-sm transition-colors duration-300">
            {status === 'success' ? (
                <div className="text-center py-20">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-serif text-anthracite dark:text-white mb-2 transition-colors duration-300">{t('contact.success_title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{t('contact.success_desc')}</p>
                    <button onClick={() => setStatus('idle')} className="mt-8 text-gold underline text-sm uppercase tracking-wide">{t('contact.another_req')}</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.name')}</label>
                            <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent dark:text-white placeholder-gray-400"
                                placeholder="Mario"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.surname')}</label>
                            <input 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent dark:text-white placeholder-gray-400"
                                placeholder="Rossi"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.email')}</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent dark:text-white placeholder-gray-400"
                                placeholder="mario.rossi@email.com"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.phone')}</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent dark:text-white placeholder-gray-400"
                                placeholder="+39 ..."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.checkin')}</label>
                            <input 
                                type="date" 
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent text-gray-600 dark:text-white dark:[color-scheme:dark]"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.checkout')}</label>
                            <input 
                                type="date" 
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent text-gray-600 dark:text-white dark:[color-scheme:dark]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.guests')}</label>
                            <select 
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent dark:text-white dark:bg-gray-800"
                            >
                                <option value={1}>{t('contact.form.guest_options.1')}</option>
                                <option value={2}>2 {t('contact.form.guest_options.many')}</option>
                                <option value={3}>3 {t('contact.form.guest_options.many')}</option>
                                <option value={4}>4 {t('contact.form.guest_options.many')}</option>
                                <option value={5}>5 {t('contact.form.guest_options.many')}</option>
                                <option value={6}>6 {t('contact.form.guest_options.many')}</option>
                                <option value={7}>7 {t('contact.form.guest_options.many')}</option>
                                <option value={8}>8 {t('contact.form.guest_options.many')}</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.apartment')}</label>
                            <select 
                                name="apartment"
                                value={formData.apartment}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent dark:text-white dark:bg-gray-800"
                            >
                                <option value="Suite Essence Lago">Suite Essence Lago</option>
                                <option value="Suite Essence Garden">Suite Essence Garden</option>
                                <option value="Villa Luminaria">Villa Luminaria</option>
                                <option value="Entrambi">{t('contact.form.apt_options.both')}</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-300">{t('contact.form.message')}</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors bg-transparent resize-none dark:text-white placeholder-gray-400"
                            placeholder={t('contact.form.placeholder_msg')}
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className="bg-lake dark:bg-gold text-white shadow-md px-8 py-4 w-full font-bold uppercase tracking-widest hover:bg-lake/90 dark:hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        {status === 'submitting' ? t('contact.sending') : t('contact.send_btn')}
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;