import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Apartments from './components/Apartments';
import VillaInfo from './components/VillaInfo';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { LanguageProvider } from './LanguageContext';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string | undefined>(undefined);

  const openBooking = (propertyId?: string) => {
    setSelectedProperty(propertyId);
    setIsBookingOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-anthracite dark:text-gray-100 bg-pearl dark:bg-gray-900 transition-colors duration-300">
        <Navigation onBookClick={() => openBooking()} />
        <main>
          <Hero />
          <VillaInfo />
          <Apartments onBookClick={openBooking} />
          <Experiences />
          <Gallery />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        
        <BookingModal 
            isOpen={isBookingOpen} 
            onClose={() => setIsBookingOpen(false)} 
            preSelectedPropertyId={selectedProperty}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;