export interface Temple {
  id: string;
  name: string;
  teluguName: string;
  deity: string;
  district: string;
  location: string;
  significance: string;
  darshanTimings: {
    morning: string;
    evening: string;
    specialTimings?: string;
  };
  dressCode: {
    men: string;
    women: string;
    notes: string;
  };
  waitTimes: {
    sarvaDarshan: string;
    specialEntry: string;
    vipBreak?: string;
    crowdLevel: 'Normal' | 'Moderate' | 'Heavy' | 'Very High';
  };
  specialFeatures: string[];
  rituals: string[];
  nearestStation: string;
  image: string;
  accommodationHelp: boolean;
  sahayakAvailable: boolean;
}

export interface PrasadamItem {
  id: string;
  templeId: string;
  templeName: string;
  name: string;
  teluguName: string;
  deity: string;
  description: string;
  ingredients: string[];
  weight: string;
  price: number;
  shelfLife: string;
  consecrationMethod: string;
  image: string;
  inStock: boolean;
  badge?: string;
}

export interface PoojaItem {
  id: string;
  templeId: string;
  templeName: string;
  title: string;
  teluguName: string;
  deity: string;
  duration: string;
  description: string;
  price: number;
  benefits: string[];
  included: string[];
  idealDays: string;
  image: string;
  isPopular?: boolean;
}

export interface DivineTour {
  id: string;
  title: string;
  teluguSubtitle: string;
  duration: string;
  route: string;
  district: string;
  pricePerPerson: number;
  placesCovered: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  departureCities: string[];
  nextDepartures: string[];
  image: string;
  itinerary: {
    day: number;
    title: string;
    schedule: string[];
  }[];
}

export interface CartItem {
  id: string; // unique cart line id
  type: 'prasadam' | 'pooja';
  itemId: string;
  title: string;
  templeName: string;
  price: number;
  quantity: number;
  image: string;
  // If pooja
  sankalpamDetails?: {
    devoteeName: string;
    gotra: string;
    nakshatra: string;
    rashi: string;
    familyMembers?: string;
    preferredDate: string;
    specialPrayer?: string;
  };
}

export interface SahayakRequest {
  templeId: string;
  devoteeName: string;
  phone: string;
  email: string;
  visitDate: string;
  devoteeCount: number;
  seniorCitizensCount: number;
  wheelchairNeeded: boolean;
  accommodationNeeded: boolean;
  servicesNeeded: string[];
  notes?: string;
}

export interface TourBookingRequest {
  tourId: string;
  devoteeName: string;
  phone: string;
  email: string;
  departureCity: string;
  travelDate: string;
  adultsCount: number;
  childrenCount: number;
  vehicleType: 'Sedan' | 'Innova / SUV' | 'Tempo Traveller' | 'Bus Group';
  hotelPreference: 'Standard 3-Star' | 'Premium 4-Star' | 'Heritage Devasthanam Cottage';
  specialRequirements?: string;
}

export interface DevoteeOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: {
    fullName: string;
    phone: string;
    addressLine: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
  status: 'Confirmed' | 'Sankalpam Scheduled' | 'Blessed & Consecrated' | 'Dispatched via SpeedPost' | 'Delivered';
  trackingNumber: string;
  videoLink?: string;
}
