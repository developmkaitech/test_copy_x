
export interface Apartment {
  id: string;
  name: string;
  description: string;
  size: string;
  guests: number | string;
  rooms: number;
  bathrooms: number;
  features: string[];
  images: string[];
}

export interface Review {
  id: number;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  apartment: string;
  message: string;
}

export enum SectionId {
  HOME = 'home',
  APARTMENTS = 'apartments',
  VILLA = 'villa',
  EXPERIENCE = 'experience',
  GALLERY = 'gallery',
  REVIEWS = 'reviews',
  CONTACT = 'contact'
}

// Booking Types
export interface PricingRule {
  basePrice: number; // Low season
  highSeasonPrice: number; // High season
  highSeasonMonths: number[]; // 0-11 (Jan-Dec)
}

export interface BookingState {
  step: 1 | 2 | 3 | 4; // 1: Property, 2: Dates, 3: Details, 4: Success
  propertyId: string | null;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  privacy: boolean;
}
