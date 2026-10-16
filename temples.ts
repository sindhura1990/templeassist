import { Temple } from '../types';

export const TEMPLES: Temple[] = [
  {
    id: 'tirumala-tirupati',
    name: 'Sri Venkateswara Swamy Temple',
    teluguName: 'శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం, తిరుమల',
    deity: 'Lord Sri Venkateswara (Balaji / Srinivasa)',
    district: 'Tirupati District',
    location: 'Tirumala Hills, Tirupati, Andhra Pradesh 517504',
    significance: 'Kaliyuga Vaikuntham, the richest and most visited sacred pilgrimage shrine on Earth atop the sacred Seshachalam Seven Hills.',
    darshanTimings: {
      morning: '06:00 AM - 11:30 AM (Suprabhatam from 03:00 AM)',
      evening: '01:30 PM - 11:00 PM (Ekantha Seva at 01:30 AM)',
      specialTimings: 'VIP Break Darshan: 08:00 AM - 10:00 AM (Subject to TTD token slots)'
    },
    dressCode: {
      men: 'Traditional White Dhoti & Kanduva / Kurta Pyjama. Strictly no jeans, shorts, T-shirts.',
      women: 'Saree, Half-Saree or Punjabi Dress with Dupatta properly worn. No western wear.',
      notes: 'Dress code strictly enforced at Vaikuntam Queue Complex.'
    },
    waitTimes: {
      sarvaDarshan: '14 - 18 Hours',
      specialEntry: '3 - 4 Hours (SED Rs. 300 Token)',
      vipBreak: '1.5 Hours',
      crowdLevel: 'Very High'
    },
    specialFeatures: [
      'TTD SED Rs. 300 Token Slot assistance',
      'Kalyanakatta Hair Offering (Tonsure) Escort',
      'Senior Citizen & Infant Entry Guidance (Supadham)',
      'Srivari Laddu Prasadam collection service',
      'Battery cars & Wheelchairs for Divyang/Elders'
    ],
    rituals: [
      'Suprabhata Seva',
      'Thomala Seva',
      'Archana Seva',
      'Kalyanotsavam (Daily Divine Wedding)',
      'Sahasra Deepalankarana Seva',
      'Unjal Seva'
    ],
    nearestStation: 'Tirupati Railway Station (TPTY) - 24 km via Ghat Road; Renigunta Airport (TIR) - 38 km',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'srisailam-mallikarjuna',
    name: 'Sri Bhramaramba Mallikarjuna Swamy Temple',
    teluguName: 'శ్రీ భ్రమరాంబ మల్లికార్జున స్వామి దేవస్థానం, శ్రీశైలం',
    deity: 'Lord Shiva (Mallikarjuna) & Goddess Parvati (Bhramaramba Devi)',
    district: 'Nandyal District',
    location: 'Srisailam, Nallamala Forest Hills, Andhra Pradesh 518101',
    significance: 'One of the rarest shrines on earth being simultaneously one of the 12 Jyotirlingas and one of the 18 Maha Shakti Peethams.',
    darshanTimings: {
      morning: '06:00 AM - 02:00 PM (Sparsha Darshan available during morning slots)',
      evening: '05:30 PM - 10:00 PM',
      specialTimings: 'Rudrabhishekam: 06:00 AM - 12:00 PM; Suprabhatam at 04:30 AM'
    },
    dressCode: {
      men: 'Dhoti / Pancha without upper cloth during Sparsha Abhishekam (bare chest), or Dhoti with Kurta.',
      women: 'Traditional Saree or Chudidar with Dupatta.',
      notes: 'Sparsha Darshan allows devotees to physically touch the sacred Jyotirlinga.'
    },
    waitTimes: {
      sarvaDarshan: '4 - 6 Hours',
      specialEntry: '1.5 - 2 Hours (Rs. 150 / Rs. 300 ticket)',
      vipBreak: '45 mins',
      crowdLevel: 'Heavy'
    },
    specialFeatures: [
      'Sparsha Darshan Booking Guidance',
      'Patalaganga Ropeway & Sacred Bath assistance',
      'Shikhareswaram Viewpoint Visit',
      'Srisailam Sanctuary Safari coordination',
      'Devasthanam Cottage allotment sahayak'
    ],
    rituals: [
      'Garbhalaya Sparsha Rudrabhishekam',
      'Kumkumarchana at Bhramaramba Temple',
      'Kalyanotsavam of Lord Shiva & Parvati',
      'Maha Mangala Harathi'
    ],
    nearestStation: 'Markapur Road Railway Station (MRK) - 85 km; Hyderabad Airport (HYD) - 215 km',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'vijayawada-kanaka-durga',
    name: 'Sri Durga Malleswara Swamy Varla Devasthanam',
    teluguName: 'శ్రీ కనకదుర్గ అమ్మవారి దేవస్థానం, ఇంద్రకీలాద్రి, విజయవాడ',
    deity: 'Goddess Kanaka Durga & Lord Malleswara Swamy',
    district: 'NTR District (Vijayawada)',
    location: 'Indrakeeladri Hill, Beside Krishna River, Vijayawada 520001',
    significance: 'Ancient Swayambhu Shakti Kshetram where Arjuna received Pasupatastra from Lord Shiva. Revered for Dussehra Navaratri alankarams.',
    darshanTimings: {
      morning: '04:00 AM - 12:00 PM (Suprabhatam at 04:00 AM, Snapanabhishekam at 05:00 AM)',
      evening: '04:00 PM - 09:30 PM (Maha Nivedana at 12:30 PM - 03:00 PM temple closed)',
      specialTimings: 'Navavarana Archana: 08:00 AM - 10:00 AM'
    },
    dressCode: {
      men: 'Dhoti, Kurta or Formal Trousers with Shirt. Avoid casual shorts.',
      women: 'Saree, Half Saree, or Salwar Kameez with Dupatta.',
      notes: 'Traditional attire encouraged for Chandi Homam and Kumkumarchana.'
    },
    waitTimes: {
      sarvaDarshan: '2 - 3 Hours',
      specialEntry: '45 mins (Rs. 100 / Rs. 300 / Rs. 500 VIP line)',
      vipBreak: '30 mins',
      crowdLevel: 'Moderate'
    },
    specialFeatures: [
      'Ghat Road Lift & Escalator guidance for elders',
      'Krishna River Holy Snanam & Pavitra Sangamam',
      'Navavarana Kumkumarchana slot arrangement',
      'Kanaka Durga Famous Laddu Prasadam delivery'
    ],
    rituals: [
      'Khadgamala Archana',
      'Chandi Homam at Yagashala',
      'Laksha Kumkumarchana',
      'Sri Chakra Navavarana Pooja',
      'Pallaki Seva'
    ],
    nearestStation: 'Vijayawada Junction (BZA) - 3 km; Gannavaram Airport (VGA) - 22 km',
    image: 'https://images.unsplash.com/photo-1621644827095-8126e838e1b6?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'simhachalam-narasimha',
    name: 'Sri Varaha Lakshmi Narasimha Swamy Temple',
    teluguName: 'శ్రీ వరాహ లక్ష్మీ నరసింహ స్వామి దేవస్థానం, సింహాచలం',
    deity: 'Lord Varaha Lakshmi Narasimha Swamy (Narasimha avatar)',
    district: 'Visakhapatnam District',
    location: 'Simhachalam Hills, Visakhapatnam, Andhra Pradesh 530028',
    significance: 'Unique posture blending Varaha (boar face) and Narasimha (lion torso). Idol is permanently coated with 4 quintals of sandalwood paste, shown in Nijaroopam only on Akshaya Tritiya.',
    darshanTimings: {
      morning: '07:00 AM - 11:30 AM (Suprabhatam at 05:00 AM)',
      evening: '12:30 PM - 02:30 PM & 03:30 PM - 07:00 PM & 08:30 PM - 09:00 PM',
      specialTimings: 'Kalyanotsavam daily at 09:30 AM'
    },
    dressCode: {
      men: 'Dhoti / Kurta Pyjama or decent formals.',
      women: 'Saree or Chudidar.',
      notes: 'No shorts or sleeveless clothing.'
    },
    waitTimes: {
      sarvaDarshan: '1.5 - 2 Hours',
      specialEntry: '30 - 45 mins (Rs. 100 / Rs. 300 ticket)',
      vipBreak: '20 mins',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Ghat Road Devasthanam bus / taxi coordination',
      'Gangadhara Sacred Spring bath visit',
      'Kappastambham embracing ritual for fertility & boons',
      'Authentic Simhachalam Bellam Appam prasadam'
    ],
    rituals: [
      'Nithya Kalyanotsavam',
      'Sahasranamarchana',
      'Sudarshana Homam',
      'Swamy Vari Chandana Lepana Seva'
    ],
    nearestStation: 'Visakhapatnam Junction (VSKP) - 16 km; Simhachalam Station - 6 km; Vizag Airport (VTZ) - 12 km',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'srikalahasti',
    name: 'Sri Srikalahasteeswara Swamy Temple',
    teluguName: 'శ్రీ శ్రీకాళహస్తీశ్వర స్వామి దేవస్థానం, శ్రీకాళహస్తి',
    deity: 'Lord Shiva (Vayu Lingam) & Goddess Gnanaprasunambika',
    district: 'Tirupati District',
    location: 'Srikalahasti, Swarnamukhi River Bank, Andhra Pradesh 517644',
    significance: 'One of the Pancha Bhoota Sthalams representing Vayu (Air). Renowned worldwide for effective Rahu-Ketu Sarpa Dosha Nivarana and Kala Sarpa Dosha Poojas.',
    darshanTimings: {
      morning: '06:00 AM - 12:00 PM',
      evening: '04:00 PM - 09:00 PM',
      specialTimings: 'Rahu Ketu Pooja: Conducted continuously from 06:00 AM to 06:00 PM in batches'
    },
    dressCode: {
      men: 'Dhoti & Kanduva or Kurta. Dark colors like black/blue discouraged for pooja.',
      women: 'Traditional Saree or Chudidar.',
      notes: 'For Rahu Ketu Pooja, devotees receive sanctified silver serpents to be submitted at the sanctum.'
    },
    waitTimes: {
      sarvaDarshan: '1 - 2 Hours',
      specialEntry: '30 mins (Rs. 200 / Rs. 500 ticket)',
      vipBreak: '20 mins',
      crowdLevel: 'Moderate'
    },
    specialFeatures: [
      'Specialized Rahu Ketu Slot Pre-booking & Priest arrangement',
      'Dakshinamurthy Shrine (Only South-facing guru shrine in South)',
      'Combined Tirupati + Srikalahasti one-day package',
      'Holy Swarnamukhi river prostrations'
    ],
    rituals: [
      'Rahu-Ketu Sarpa Dosha Nivarana Pooja (Rs. 500, Rs. 750, Rs. 1500, Rs. 2500 & VIP Rs. 5000 Mandapams)',
      'Rudra Abhishekam',
      'Navagraha Shanti',
      'Unjal Seva'
    ],
    nearestStation: 'Srikalahasti Railway Station (KHT) - 2 km; Tirupati (TPTY) - 36 km; Chennai Airport (MAA) - 110 km',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'annavaram-satyanarayana',
    name: 'Sri Veera Venkata Satyanarayana Swamy Temple',
    teluguName: 'శ్రీ వీర వేంకట సత్యనారాయణ స్వామి దేవస్థానం, అన్నవరం',
    deity: 'Lord Veera Venkata Satyanarayana Swamy',
    district: 'Kakinada District',
    location: 'Ratnagiri Hill, Annavaram, Andhra Pradesh 533406',
    significance: 'Second only to Tirupati in Andhra Pradesh for wedding & vow pilgrimages. Celebrated worldwide for Sri Satyanarayana Swamy Vratham for family harmony and wish-fulfillment.',
    darshanTimings: {
      morning: '06:00 AM - 12:30 PM (Vrathams begin 06:00 AM onwards in multiple halls)',
      evening: '01:00 PM - 09:00 PM',
      specialTimings: 'Visishta Vratham Halls open throughout day'
    },
    dressCode: {
      men: 'Traditional Dhoti or Kurta Pyjama.',
      women: 'Saree or Chudidar.',
      notes: 'Devotees performing Vratham as Dampathis (couples) should wear traditional wedding-grade attire.'
    },
    waitTimes: {
      sarvaDarshan: '1 - 2 Hours',
      specialEntry: '30 mins (Rs. 100 ticket)',
      vipBreak: '15 mins',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Pre-booked Vratham Mandapam & Authorized Purohit',
      'Famous Annavaram Wheat Rava Prasadam (Ghee infused in pure leaf cups)',
      'Ghat road hill drive with Pampa River views',
      'Devasthanam AC Cottages booking assistance'
    ],
    rituals: [
      'Satyanarayana Swamy Vratham (General, Special Rs. 300, Visishta Rs. 800, AC Rs. 1500)',
      'Nitya Kalyanotsavam',
      'Ayushya Homam',
      'Annaprasana for babies'
    ],
    nearestStation: 'Annavaram Railway Station (ANV) - 3 km; Rajahmundry Airport (RJA) - 75 km',
    image: 'https://images.unsplash.com/photo-1590076212455-83218525b642?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'ahobilam-narasimha',
    name: 'Ahobilam Nava Narasimha Kshetras',
    teluguName: 'అహోబిలం నవ నరసింహ క్షేత్రాలు, నల్లమల',
    deity: 'Nava (9) Manifestations of Lord Narasimha Swamy',
    district: 'Nandyal District',
    location: 'Upper & Lower Ahobilam, Eastern Ghats, Andhra Pradesh 518545',
    significance: 'The epic holy spot where Lord Narasimha emerged from the stone pillar to slay Hiranyakashipu and protect Prahlada. Consists of 9 sacred cave temples spanning rugged sacred hills.',
    darshanTimings: {
      morning: '06:30 AM - 01:00 PM (Lower Ahobilam open full day; Upper Ahobilam caves require trekking daylight)',
      evening: '03:00 PM - 08:00 PM',
      specialTimings: 'Jwala Narasimha & Ugra Sthambham treks permitted only 07:00 AM - 03:00 PM'
    },
    dressCode: {
      men: 'Dhoti / Track pants for hill trek / Kurta.',
      women: 'Saree or comfortable Salwar suitable for hillside walking.',
      notes: 'Devotees trekking upper caves are provided wooden walking sticks and trained local guides.'
    },
    waitTimes: {
      sarvaDarshan: '45 mins - 1.5 Hours',
      specialEntry: '20 mins',
      crowdLevel: 'Moderate'
    },
    specialFeatures: [
      'Nava Narasimha 9 Cave Guided Trekking Sahayak',
      'Doli (Palanquin) arrangement for elderly devotees',
      'Ugra Sthambham & Jwala Narasimha holy raksha collection',
      'Ahobila Mutt Guest House booking coordination'
    ],
    rituals: [
      'Nava Narasimha Darshana Sankalpam',
      'Sudarshana Narasimha Homam',
      'Panchamrutha Abhishekam at Jwala Narasimha',
      'Kalyanotsavam at Lower Ahobilam'
    ],
    nearestStation: 'Allagadda Bus Station - 25 km; Nandyal Railway Station (NDL) - 68 km; Kurnool Airport - 110 km',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'dwaraka-tirumala',
    name: 'Sri Venkateswara Swamy Temple (Chinna Tirupati)',
    teluguName: 'శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం, ద్వారకా తిరుమల',
    deity: 'Lord Venkateswara (Swayambhu & Paduka murthis)',
    district: 'Eluru District',
    location: 'Dwaraka Tirumala, Seshadri Hill, Andhra Pradesh 534426',
    significance: 'Revered as "Chinna Tirupati". If one vows to visit Tirumala but cannot due to illness or circumstances, darshan here fulfills the vow according to Sthala Purana.',
    darshanTimings: {
      morning: '06:00 AM - 01:00 PM',
      evening: '03:00 PM - 09:00 PM',
      specialTimings: 'Kalyanotsavam performed daily at 09:30 AM'
    },
    dressCode: {
      men: 'Dhoti / Kurta Pyjama or standard formals.',
      women: 'Saree or Chudidar.',
      notes: 'Modest devotional clothing.'
    },
    waitTimes: {
      sarvaDarshan: '1 - 2 Hours',
      specialEntry: '30 mins (Rs. 100 ticket)',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Vow Fulfillment (Mokku) assistance',
      'Hair tonsuring (Kalyanakatta) assistance',
      'Special Kalyanotsavam couple seating',
      'Wheelchair friendly entrance ramp'
    ],
    rituals: [
      'Nithya Kalyanotsavam',
      'Swamy Vari Sahasranama Archana',
      'Suprabhata Seva',
      'Snapana Tirumanjanam'
    ],
    nearestStation: 'Bhimadole Railway Station (BMD) - 17 km; Eluru (EE) - 40 km; Vijayawada Airport - 85 km',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'mahanandi',
    name: 'Sri Mahanandiswara Swamy Temple',
    teluguName: 'శ్రీ మహానందీశ్వర స్వామి దేవస్థానం, మహానంది',
    deity: 'Lord Shiva (Mahanandiswara) & Goddess Kameswari Devi',
    district: 'Nandyal District',
    location: 'Mahanandi, Foothills of Nallamala, Andhra Pradesh 518502',
    significance: 'Centre of the sacred Nava Nandis. Famous for its crystal-clear mineral pushkarini spring that maintains uniform lukewarm temperature in winter and cool in summer.',
    darshanTimings: {
      morning: '05:30 AM - 12:30 PM',
      evening: '04:00 PM - 08:30 PM',
      specialTimings: 'Holy Pushkarini Snanam allowed throughout morning'
    },
    dressCode: {
      men: 'Dhoti / Kurta for sanctum; dry clothes after Pushkarini dip.',
      women: 'Saree / Chudidar.',
      notes: 'Pushkarini changing rooms available.'
    },
    waitTimes: {
      sarvaDarshan: '30 - 45 mins',
      specialEntry: '15 mins',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Nava Nandi Complete Circuit Cab & Guide',
      'Sacred Rudra Gundam pushkarini bath assistance',
      'Shiva Linga touch darshan',
      'Fresh mountain herbs & honey local guide'
    ],
    rituals: [
      'Rudra Abhishekam',
      'Maha Shivarathri Special Pooja',
      'Kumkumarchana for Goddess Kameswari',
      'Nandi Pooja'
    ],
    nearestStation: 'Nandyal Railway Station (NDL) - 14 km; Kurnool Airport - 90 km',
    image: 'https://images.unsplash.com/photo-1599818459461-898f8253a6db?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'draksharamam-bhimeswara',
    name: 'Sri Bhimeswara Swamy Temple (Draksharamam)',
    teluguName: 'శ్రీ భీమేశ్వర స్వామి దేవస్థానం (దాక్షారామం), కోనసీమ',
    deity: 'Lord Bhimeswara Swamy (Pancharama Lingam) & Goddess Manikyamba Devi',
    district: 'Dr. B.R. Ambedkar Konaseema District',
    location: 'Draksharamam, Near Ramachandrapuram, Andhra Pradesh 533262',
    significance: 'Known as Dakshina Kasi. The sanctum houses a colossal 14-foot crystal Lingam spanning two storeys. Also one of the 18 Maha Shakti Peethams (Manikyamba Devi).',
    darshanTimings: {
      morning: '06:00 AM - 12:00 PM (Upper storey Abhishekam at 07:00 AM)',
      evening: '04:00 PM - 08:00 PM',
      specialTimings: 'Abhishekam to 14ft lingam performed from 1st floor'
    },
    dressCode: {
      men: 'Dhoti & Kanduva for upper tier Abhishekam.',
      women: 'Saree or Chudidar.',
      notes: 'Traditional attire mandatory for entering the inner sanctum stairs.'
    },
    waitTimes: {
      sarvaDarshan: '30 mins',
      specialEntry: '10 mins',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Pancharama Complete Kshetra Tour link (Draksharamam, Samalkota, Palakollu, Bhimavaram, Amaravathi)',
      'Sapta Godavari holy theertham bath guidance',
      'Manikyamba Devi Ashtottara Pooja coordination'
    ],
    rituals: [
      'Ekadasa Rudrabhishekam (from upper floor)',
      'Manikyamba Sahasranama Archana',
      'Chandi Yagam',
      'Laksha Bilwarchana'
    ],
    nearestStation: 'Kakinada Town (CCT) - 28 km; Rajahmundry (RJY) - 50 km',
    image: 'https://images.unsplash.com/photo-1596765275811-ecad8fbf4a34?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'mangalagiri-narasimha',
    name: 'Sri Panakala Lakshmi Narasimha Swamy Temple',
    teluguName: 'శ్రీ పానకాల లక్ష్మీ నరసింహ స్వామి దేవస్థానం, మంగళగిరి',
    deity: 'Lord Panakala Narasimha Swamy & Sri Lakshmi Devi',
    district: 'Guntur District',
    location: 'Mangalagiri Hill, Vijayawada-Guntur Highway, Andhra Pradesh 522503',
    significance: 'Unique miracle kshetram where the Lord accepts sweet Panakam (jaggery water) poured directly into His wide open mouth. Half the vessel is swallowed with a distinct gurgling sound, and the rest is returned as prasadam.',
    darshanTimings: {
      morning: '07:00 AM - 03:00 PM (Panakala Swamy hill temple closes at 03:30 PM)',
      evening: '04:00 PM - 08:30 PM (Foot hill Lakshmi Narasimha temple open in evening)',
      specialTimings: 'Panakam offering accepts from 07:00 AM onwards'
    },
    dressCode: {
      men: 'Dhoti / Formal attire.',
      women: 'Saree / Chudidar.',
      notes: 'Climbing 500+ steps or taking hill road vehicle.'
    },
    waitTimes: {
      sarvaDarshan: '45 mins',
      specialEntry: '15 mins',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Fresh Panakam offering brass pot preparation',
      'Ghat road hill vehicle service for seniors',
      'Famous Mangalagiri Handloom Cotton Saree weavers tour assistance'
    ],
    rituals: [
      'Panaka Nivedana (Sweet jaggery offering)',
      'Lakshmi Sahasranamarchana',
      'Giri Pradakshina (Circumambulation of the holy hill)'
    ],
    nearestStation: 'Mangalagiri Station - 2 km; Vijayawada (BZA) - 12 km; Guntur (GNT) - 22 km',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: true,
    sahayakAvailable: true
  },
  {
    id: 'lepakshi-veerabhadra',
    name: 'Sri Veerabhadra Swamy Temple (Lepakshi)',
    teluguName: 'శ్రీ వీరభద్ర స్వామి దేవస్థానం, లేపాక్షి',
    deity: 'Lord Veerabhadra & Lord Shiva',
    district: 'Sri Sathya Sai District',
    location: 'Lepakshi, Andhra Pradesh 515331',
    significance: 'Vijayanagara architectural marvel. Home to the world-famous Hanging Pillar, massive Monolithic Nandi (largest in India), and the multi-hooded Nagalinga carved from a single boulder.',
    darshanTimings: {
      morning: '06:00 AM - 12:30 PM',
      evening: '02:00 PM - 06:30 PM',
      specialTimings: 'ASI Architectural lighting in evening'
    },
    dressCode: {
      men: 'Dhoti or modest pants and shirt.',
      women: 'Saree or Chudidar.',
      notes: 'Footwear strictly outside temple premise.'
    },
    waitTimes: {
      sarvaDarshan: '20 mins',
      specialEntry: 'Direct entry',
      crowdLevel: 'Normal'
    },
    specialFeatures: [
      'Certified Archaeological & Mythological Guide accompaniment',
      'Demonstration of the Hanging Pillar cloth pass',
      'Monolithic Nandi photography & worship guidance'
    ],
    rituals: [
      'Veerabhadra Swamy Rudrabhishekam',
      'Deeparadhana',
      'Nagalinga Archana'
    ],
    nearestStation: 'Hindupur Railway Station (HUP) - 14 km; Bengaluru Airport (BLR) - 100 km',
    image: 'https://images.unsplash.com/photo-1596765275811-ecad8fbf4a34?auto=format&fit=crop&w=1200&q=80',
    accommodationHelp: false,
    sahayakAvailable: true
  }
];
