import { Apartment, Review, PricingRule } from './types';
import { Wifi, Wind, Car, Trees, Utensils, Tv, Coffee, Waves } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Le Suites', href: '#apartments' },
  { label: 'La Villa', href: '#villa' },
  { label: 'Esperienze', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contatti', href: '#contact' },
];

export const APARTMENTS: Apartment[] = [
  {
    id: 'villa-luminaria',
    name: 'Villa Luminaria',
    description: 'Una villa esclusiva di 150m² per 6-8 persone. Tre camere lussuose ciascuna con bagno privato. Piscina privata e vista lago.',
    size: '150 m²',
    guests: '6-8',
    rooms: 3,
    bathrooms: 3,
    features: ['Piscina Privata', 'Vista Lago', 'Vasca Freestanding', 'Giardino Privato'],
    images: [
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466687/villa_yaqpbv.jpg',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1769_vfx9fb.jpg',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566219/IMG_1768_ehjfiy.jpg',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1802_emqwv4.jpg'
    ],
  },
  {
    id: 'suite-essence',
    name: 'Suite Essence Lago',
    description: 'L\'espressione massima del lusso a Luminaria. Un open space raffinato dove la luce naturale scolpisce gli spazi, arricchito da una terrazza panoramica privata.',
    size: '85 m²',
    guests: 4,
    rooms: 2,
    bathrooms: 2,
    features: ['Terrazza Panoramica', 'Vasca Idromassaggio', 'Cantina Vini Privata', 'Smart Home Control'],
    images: [
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765467760/cucina_3_oyybyz.png',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765467095/lumiere_lmv6y3.jpg',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765467759/bagno_3_bt3mjq.png',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765467758/sogg_3_jgz2vn.png'
    ],
  },
  {
    id: 'suite-lumiere',
    name: 'Suite Essence Garden',
    description: 'Un rifugio intimo e accogliente, caratterizzato da toni caldi e materiali naturali. Ideale per coppie alla ricerca di privacy assoluta e romanticismo.',
    size: '60 m²',
    guests: 2,
    rooms: 1,
    bathrooms: 1,
    features: ['Patio Giardino', 'Doccia Cromoterapica', 'Angolo Lettura', 'Ingresso Indipendente'],
    images: [
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466168/cucina_2_jfa4th.png',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466167/sogg_q3bebg.jpg',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466167/camera_1_ax99xy.jpg',
      'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765466166/Living_2_j5jvxo.jpg'
    ],
  },
];

export const SERVICES = [
  { icon: Wifi, label: 'Wi-Fi Fibra' },
  { icon: Wind, label: 'Aria Condizionata' },
  { icon: Car, label: 'Parcheggio Riservato' },
  { icon: Trees, label: 'Giardino Privato' },
  { icon: Utensils, label: 'Cucina Attrezzata' },
  { icon: Tv, label: 'Smart TV & Audio' },
  { icon: Coffee, label: 'Colazione in Suite' },
  { icon: Waves, label: 'Piscina' },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Isabella & Marc',
    location: 'Zurigo, Svizzera',
    rating: 5,
    text: 'Un sogno ad occhi aperti. La Suite Essence Lago è pura poesia architettonica. La privacy è assoluta e la posizione a due passi dal lago è impagabile.',
    date: 'Settembre 2023'
  },
  {
    id: 2,
    author: 'Giuseppe R.',
    location: 'Milano, Italia',
    rating: 5,
    text: 'Luminaria Essence ridefinisce il concetto di ospitalità. Ogni dettaglio, dal profumo delle lenzuola alla colazione artigianale, è curato con amore.',
    date: 'Agosto 2023'
  },
  {
    id: 3,
    author: 'Sarah Jenkins',
    location: 'Londra, UK',
    rating: 5,
    text: 'The most relaxing stay we have ever had in Italy. The garden is a quiet oasis. Perfection in Bardolino.',
    date: 'Luglio 2023'
  }
];

export const GALLERY_IMAGES = [
  { src: 'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1769_vfx9fb.jpg', category: 'Esterni', alt: 'Piscina e relax' },
  { src: 'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1799_zy9z3s.jpg', category: 'Interni', alt: 'Camera da letto Suite Essence Lago' },
  { src: 'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1802_emqwv4.jpg', category: 'Vista Lago', alt: 'Tramonto sul Garda' },
  { src: 'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1771_pjots0.jpg', category: 'Dettagli', alt: 'Dettagli di design' },
  { src: 'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566251/IMG_1772_tzoo4y.jpg', category: 'Territorio', alt: 'Degustazione vini' },
  { src: 'https://res.cloudinary.com/dqelwf0tj/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1765566219/IMG_1768_ehjfiy.jpg', category: 'Esterni', alt: 'Giardino mediterraneo' },
];

// Booking Configuration
export const PRICING: Record<string, PricingRule> = {
  'villa-luminaria': {
    basePrice: 350,
    highSeasonPrice: 500,
    highSeasonMonths: [5, 6, 7, 8], // June, July, Aug, Sept (0-indexed)
  },
  'suite-essence': {
    basePrice: 150,
    highSeasonPrice: 150, // Flat rate in example, but extendable
    highSeasonMonths: [5, 6, 7, 8],
  },
  'suite-lumiere': {
    basePrice: 120,
    highSeasonPrice: 120,
    highSeasonMonths: [5, 6, 7, 8],
  }
};

export const BOOKING_CONFIG = {
  minStay: 3,
  maxGuestsVilla: 10,
  maxGuestsSuite: 4,
  checkInHour: 16,
  checkOutHour: 10,
  email: 'info@villalagogarda.com',
  whatsapp: '390451234567' // example
};

// Mock Availability Data (Simulating Google Calendar Events)
// Format: Strings 'YYYY-MM-DD'
export const MOCKED_CALENDAR_DATA: Record<string, string[]> = {
  'villa-luminaria': [],
  'suite-essence': [],
  'suite-lumiere': [],
};