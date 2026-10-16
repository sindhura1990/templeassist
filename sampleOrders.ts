import { DevoteeOrder } from '../types';

export const INITIAL_ORDERS: DevoteeOrder[] = [
  {
    orderId: 'TA-AP-9824',
    date: '14 Oct 2026',
    trackingNumber: 'IN-SPD-8941204',
    totalAmount: 1298,
    status: 'Dispatched via SpeedPost',
    paymentMethod: 'UPI / NetBanking (Confirmed)',
    items: [
      {
        id: 'item-1',
        type: 'prasadam',
        itemId: 'tirumala-laddu-combo',
        title: 'Authentic Tirumala Srivari Ghee Laddu (Pack of 2)',
        templeName: 'Sri Venkateswara Swamy, Tirumala',
        price: 399,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1599818459461-898f8253a6db?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'item-2',
        type: 'prasadam',
        itemId: 'srisailam-laddu-vibhuti',
        title: 'Srisailam Jyotirlinga Laddu & Sanctified Bhasmam',
        templeName: 'Sri Bhramaramba Mallikarjuna, Srisailam',
        price: 349,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=600&q=80'
      }
    ],
    shippingAddress: {
      fullName: 'Venkata Subramanyam Sharma',
      phone: '+91 98480 22331',
      addressLine: 'Flat 402, Srinivasa Nilayam, Gayatri Nagar',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500038'
    }
  },
  {
    orderId: 'TA-POOJA-5120',
    date: '12 Oct 2026',
    trackingNumber: 'IN-SPD-7731902',
    totalAmount: 1850,
    status: 'Blessed & Consecrated',
    paymentMethod: 'Credit Card (Prepaid)',
    videoLink: 'https://example.com/sankalpam-video/TA-POOJA-5120',
    items: [
      {
        id: 'item-3',
        type: 'pooja',
        itemId: 'srikalahasti-rahu-ketu-pooja',
        title: 'Rahu-Ketu Sarpa Dosha Nivarana Pooja',
        templeName: 'Sri Srikalahasteeswara Swamy Temple',
        price: 1850,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        sankalpamDetails: {
          devoteeName: 'Anantha Padmanabha Rao',
          gotra: 'Kashyapa Gotram',
          nakshatra: 'Arudra',
          rashi: 'Mithuna (Gemini)',
          familyMembers: 'Padmanabha Rao, Lakshmi Bhavani, Karthik (Son)',
          preferredDate: '13 Oct 2026 (Tuesday Rahu Kalam)',
          specialPrayer: 'Career elevation and alleviation of Sarpa Dosha'
        }
      }
    ],
    shippingAddress: {
      fullName: 'Anantha Padmanabha Rao',
      phone: '+91 94401 55678',
      addressLine: 'House 14-3-88, Dwarakanagar',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      pincode: '530016'
    }
  }
];
