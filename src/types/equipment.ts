export interface Equipment {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  parameters: {
    [key: string]: string | number;
  };
  description: string;
  price?: string;
  technicalAnalysis?: {
    title: string;
    features: string[];
  };
}

export interface UsedEquipment {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  year: number;
  hours: number;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  location: string;
  seller: {
    name: string;
    phone: string;
    email: string;
    type: 'Dealer' | 'Private';
  };
  originalPrice: string;
  currentPrice: string;
  description: string;
  features: string[];
  inspectionReport?: {
    date: string;
    inspector: string;
    notes: string[];
  };
  parameters: {
    [key: string]: string | number;
  };
}

export interface RentalEquipment {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  dailyRate: string;
  weeklyRate: string;
  monthlyRate: string;
  availability: 'Available' | 'Rented' | 'Maintenance';
  location: string;
  minRentalPeriod: string;
  maxRentalPeriod: string;
  deposit: string;
  owner: {
    name: string;
    phone: string;
    email: string;
    type: 'Company' | 'Individual';
    rating: number;
  };
  description: string;
  features: string[];
  rentalTerms: string[];
  insurance: {
    included: boolean;
    cost?: string;
    coverage: string[];
  };
  delivery: {
    available: boolean;
    cost?: string;
    radius: string;
  };
  parameters: {
    [key: string]: string | number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}