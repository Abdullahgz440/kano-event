export type UserRole = 'customer' | 'operator' | 'admin';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
}

export interface Venue {
  id: string;
  name: string;
  slug: string;
  description: string;
  address: string;
  lga: string;
  capacity: number;
  price: number;
  rating: number;
  images: string[];
  amenities: string[];
  availabilityStatus: 'available' | 'booked' | 'reserved' | 'blocked';
}

export interface SearchFilters {
  date?: string;
  lga?: string;
  capacity?: number;
  eventType?: string;
}
