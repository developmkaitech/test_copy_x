import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Users, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { APARTMENTS, PRICING, BOOKING_CONFIG, MOCKED_CALENDAR_DATA } from '../constants';
import { BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPropertyId?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preSelectedPropertyId }) => {
  const { t, language } = useLanguage();
  const [state, setState] = useState<BookingState>({
    step: 1,
    propertyId: preSelectedPropertyId || null,
    checkIn: null,
    checkOut: null,
    guests: 2,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    privacy: false
  });
  
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setState(prev => ({
        ...prev,
        step: preSelectedPropertyId ? 2 : 1,
        propertyId: preSelectedPropertyId || prev.propertyId
      }));
    }
  }, [isOpen, preSelectedPropertyId]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNext = () => {
    setErrorMessage(null);
    if (state.step === 1 && !state.propertyId) return;
    
    if (state.step === 2) {
      if (!state.checkIn || !state.checkOut) {
        setErrorMessage(t('booking.errors.dates'));
        return;
      }
      // Check Min Stay
      const diffTime = Math.abs(state.checkOut.getTime() - state.checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      if (diffDays < BOOKING_CONFIG.minStay) {
        setErrorMessage(t('booking.errors.min_stay'));
        return;
      }
    }

    if (state.step === 3) {
      if (!state.firstName || !state.lastName || !state.email || !state.privacy) {
        setErrorMessage(t('booking.errors.form'));
        return;
      }
      // Submit logic here
      handleSubmit();
      return;
    }

    setState(prev => ({ ...prev, step: (prev.step + 1) as any }));
  };

  const handleSubmit = async () => {
    // Simulate API call
    setTimeout(() => {
      setState(prev => ({ ...prev, step: 4 }));
    }, 1500);
  };

  const getPrice = () => {
    if (!state.propertyId || !state.checkIn || !state.checkOut) return 0;
    const rule = PRICING[state.propertyId];
    let total = 0;
    let current = new Date(state.checkIn);
    
    while (current < state.checkOut) {
      const month = current.getMonth();
      const isHighSeason = rule.highSeasonMonths.includes(month);
      total += isHighSeason ? rule.highSeasonPrice : rule.basePrice;
      current.setDate(current.getDate() + 1);
    }
    return total;
  };

  const isDateOccupied = (date: Date) => {
    if (!state.propertyId) return false;
    const dateStr = date.toISOString().split('T')[0];
    const occupiedDates = MOCKED_CALENDAR_DATA[state.propertyId] || [];
    return occupiedDates.includes(dateStr);
  };

  // Calendar Render Logic
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Adjust for Monday start (standard in EU)
    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const days = [];
    for (let i = 0; i < startOffset; i++) {
        days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const dateStr = date.toISOString().split('T')[0];
        const isOccupied = isDateOccupied(date);
        const isSelectedStart = state.checkIn?.toDateString() === date.toDateString();
        const isSelectedEnd = state.checkOut?.toDateString() === date.toDateString();
        const isInRange = state.checkIn && state.checkOut && date > state.checkIn && date < state.checkOut;
        const isBeforeToday = date < new Date(new Date().setHours(0,0,0,0));

        let btnClass = "h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors ";
        
        if (isOccupied || isBeforeToday) {
            btnClass += "text-gray-300 dark:text-gray-600 cursor-not-allowed decoration-slice line-through";
        } else if (isSelectedStart || isSelectedEnd) {
            btnClass += "bg-gold text-white font-bold shadow-md";
        } else if (isInRange) {
            btnClass += "bg-gold/20 text-gold-dark font-medium";
        } else {
            btnClass += "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-pointer";
        }

        days.push(
            <button 
                key={d} 
                disabled={isOccupied || isBeforeToday}
                onClick={() => handleDateClick(date)}
                className={btnClass}
            >
                {d}
            </button>
        );
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
      if (!state.checkIn || (state.checkIn && state.checkOut)) {
          // Start new range
          setState(prev => ({ ...prev, checkIn: date, checkOut: null }));
      } else {
          // End range
          if (date > state.checkIn) {
             // Validate no occupied dates in between
             let curr = new Date(state.checkIn);
             let valid = true;
             while(curr <= date) {
                 if (isDateOccupied(curr)) { valid = false; break; }
                 curr.setDate(curr.getDate() + 1);
             }

             if (valid) {
                setState(prev => ({ ...prev, checkOut: date }));
             } else {
                 setErrorMessage(t('booking.errors.unavailable'));
                 setTimeout(() => setErrorMessage(null), 3000);
             }
          } else {
              // Reset and select new start
              setState(prev => ({ ...prev, checkIn: date, checkOut: null }));
          }
      }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col transition-colors duration-300">
        
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 p-6 flex justify-between items-center z-10">
            <h2 className="text-2xl font-serif text-anthracite dark:text-white">{t('booking.title')}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                <X size={24} className="text-gray-500" />
            </button>
        </div>

        {/* Steps Indicator */}
        <div className="flex w-full h-1.5 bg-gray-100 dark:bg-gray-800">
            <div className={`h-full bg-gold transition-all duration-500 ease-out`} style={{ width: `${state.step * 25}%` }}></div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 flex-grow">
            
            {/* Success View */}
            {state.step === 4 ? (
                <div className="text-center py-10 animate-fade-in-up">
                     <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} />
                    </div>
                    <h3 className="text-3xl font-serif text-anthracite dark:text-white mb-4">{t('booking.success_title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-8 text-lg">{t('booking.success_desc')}</p>
                    
                    <div className="bg-pearl dark:bg-gray-800 p-6 rounded-sm max-w-md mx-auto">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">{t('booking.whatsapp_text')}</p>
                        <a 
                            href={`https://wa.me/${BOOKING_CONFIG.whatsapp}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gold font-bold text-lg hover:underline"
                        >
                            {t('booking.whatsapp_btn')}
                        </a>
                    </div>
                    
                    <button onClick={onClose} className="mt-10 px-8 py-3 bg-anthracite dark:bg-white text-white dark:text-anthracite uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors">
                        {t('booking.close')}
                    </button>
                </div>
            ) : (
                <>
                {/* Step 1: Property Selection */}
                {state.step === 1 && (
                    <div className="animate-fade-in-up">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                             <span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                             {t('booking.step1')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {APARTMENTS.map(apt => (
                                <div 
                                    key={apt.id}
                                    onClick={() => setState(prev => ({ ...prev, propertyId: apt.id }))}
                                    className={`cursor-pointer border-2 rounded-sm overflow-hidden transition-all duration-300 ${state.propertyId === apt.id ? 'border-gold ring-2 ring-gold/20' : 'border-gray-100 dark:border-gray-700 hover:border-gold/50'}`}
                                >
                                    <div className="h-40 overflow-hidden relative">
                                        <img src={apt.images[0]} alt={apt.name} className="w-full h-full object-cover" />
                                        {state.propertyId === apt.id && (
                                            <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
                                                <Check className="text-white drop-shadow-md" size={40} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 bg-white dark:bg-gray-800">
                                        <h4 className="font-serif text-lg text-anthracite dark:text-white">{t(`apartments.items.${apt.id}.name`)}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{apt.size} • Max {apt.guests} {t('booking.guests')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Date Selection */}
                {state.step === 2 && (
                    <div className="animate-fade-in-up">
                         <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                             <span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                             {t('booking.step2')}
                        </h3>
                        
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Calendar */}
                            <div className="md:w-2/3 bg-pearl dark:bg-gray-800 p-6 rounded-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-serif text-lg text-anthracite dark:text-white capitalize">
                                        {currentMonth.toLocaleString(language, { month: 'long', year: 'numeric' })}
                                    </h4>
                                    <div className="flex gap-2">
                                        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"><ChevronLeft size={20}/></button>
                                        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"><ChevronRight size={20}/></button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    {['Lu','Ma','Me','Gi','Ve','Sa','Do'].map(d => <span key={d}>{d}</span>)}
                                </div>
                                <div className="grid grid-cols-7 gap-1 place-items-center">
                                    {renderCalendar()}
                                </div>
                                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-white border border-gray-300 rounded-full"></div> Libero</span>
                                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-300 rounded-full relative overflow-hidden"><div className="absolute inset-0 border-t border-gray-500 rotate-45"></div></div> Occupato</span>
                                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-gold rounded-full"></div> Selezionato</span>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="md:w-1/3 space-y-4">
                                <div className="bg-pearl dark:bg-gray-800 p-6 rounded-sm">
                                    <h4 className="font-serif text-lg mb-4 text-anthracite dark:text-white">{t('booking.total')}</h4>
                                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                        <div className="flex justify-between">
                                            <span>{t('booking.checkin')}:</span>
                                            <span className="font-medium text-anthracite dark:text-white">{state.checkIn ? state.checkIn.toLocaleDateString() : '-'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{t('booking.checkout')}:</span>
                                            <span className="font-medium text-anthracite dark:text-white">{state.checkOut ? state.checkOut.toLocaleDateString() : '-'}</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                         <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold uppercase tracking-widest text-gold">Totale</span>
                                            <span className="text-2xl font-serif text-anthracite dark:text-white">€ {getPrice()}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-2">{t('booking.price_disclaimer')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Details */}
                {state.step === 3 && (
                     <div className="animate-fade-in-up">
                         <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                             <span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                             {t('booking.step3')}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest text-gray-500">{t('booking.form.name')}</label>
                                <input 
                                    type="text" 
                                    className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold bg-transparent dark:text-white"
                                    value={state.firstName}
                                    onChange={(e) => setState(prev => ({...prev, firstName: e.target.value}))}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest text-gray-500">{t('booking.form.surname')}</label>
                                <input 
                                    type="text" 
                                    className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold bg-transparent dark:text-white"
                                    value={state.lastName}
                                    onChange={(e) => setState(prev => ({...prev, lastName: e.target.value}))}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest text-gray-500">{t('booking.form.email')}</label>
                                <input 
                                    type="email" 
                                    className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold bg-transparent dark:text-white"
                                    value={state.email}
                                    onChange={(e) => setState(prev => ({...prev, email: e.target.value}))}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-widest text-gray-500">{t('booking.form.phone')}</label>
                                <input 
                                    type="tel" 
                                    className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold bg-transparent dark:text-white"
                                    value={state.phone}
                                    onChange={(e) => setState(prev => ({...prev, phone: e.target.value}))}
                                />
                            </div>
                             <div className="space-y-1 md:col-span-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">{t('booking.guests')}</label>
                                <select 
                                    className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold bg-transparent dark:text-white dark:bg-gray-800"
                                    value={state.guests}
                                    onChange={(e) => setState(prev => ({...prev, guests: parseInt(e.target.value)}))}
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i} value={i+1}>{i+1} {t('booking.guests')}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">{t('booking.form.notes')}</label>
                                <textarea 
                                    rows={3}
                                    className="w-full border-b border-gray-300 dark:border-gray-600 py-2 focus:outline-none focus:border-gold bg-transparent dark:text-white resize-none"
                                    value={state.notes}
                                    onChange={(e) => setState(prev => ({...prev, notes: e.target.value}))}
                                ></textarea>
                            </div>
                             <div className="md:col-span-2 flex items-center gap-3 mt-4">
                                <input 
                                    type="checkbox" 
                                    id="privacy" 
                                    className="w-4 h-4 accent-gold"
                                    checked={state.privacy}
                                    onChange={(e) => setState(prev => ({...prev, privacy: e.target.checked}))}
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">{t('booking.form.privacy')}</label>
                            </div>
                        </div>
                     </div>
                )}
                </>
            )}

            {/* Error Message */}
            {errorMessage && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-sm animate-pulse">
                    {errorMessage}
                </div>
            )}

        </div>

        {/* Footer Actions */}
        {state.step < 4 && (
            <div className="p-6 border-t border-gray-100 dark:border-gray-700 flex justify-between bg-white dark:bg-gray-900 sticky bottom-0 z-10">
                {state.step > 1 ? (
                    <button 
                        onClick={() => setState(prev => ({ ...prev, step: (prev.step - 1) as any }))}
                        className="px-6 py-3 text-gray-500 hover:text-anthracite dark:hover:text-white uppercase tracking-widest text-xs font-bold transition-colors"
                    >
                        {t('booking.back')}
                    </button>
                ) : <div></div>}
                
                <button 
                    onClick={handleNext}
                    className="bg-lake dark:bg-gold text-white shadow-md px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-lake/90 dark:hover:bg-gold-light transition-colors"
                >
                    {state.step === 3 ? t('booking.confirm') : t('booking.next')}
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;