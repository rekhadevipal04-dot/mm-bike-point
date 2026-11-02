export interface Vehicle {
  id: string;
  name: string;
  brand: 'Hero' | 'Honda' | 'Bajaj' | 'TVS' | 'Suzuki' | 'Yamaha';
  category: 'motorcycle' | 'scooter';
  cc: string;
  ccValue: number;
  mileage: string;
  power: string;
  torque: string;
  fuelCapacity: string;
  brakes: string;
  popular?: boolean;
  bestFor: string;
  colors: string[];
  tagline: string;
  brandColor: string;
  image: string;
  bikedekhoUrl: string;
  priceNote: string;
}

export const BRAND_COLORS: Record<Vehicle['brand'], string> = {
  Hero: '#dc2626',
  Honda: '#e11d48',
  Bajaj: '#2563eb',
  TVS: '#1d4ed8',
  Suzuki: '#0284c7',
  Yamaha: '#4338ca',
};

export const BRAND_TAGLINES: Record<Vehicle['brand'], string> = {
  Hero: 'Desh Ki Dhadkan - Highest Mileage & Daily Commute Champions',
  Honda: 'Power of Dreams - Ultra Refined & Reliable Japanese Engineering',
  Bajaj: 'The World\'s Favourite Indian - Power, Speed & Perimeter Frame',
  TVS: 'Racing DNA Unleashed - SmartXonnect Bluetooth & Race Tuned Power',
  Suzuki: 'Way of Life - Class-Leading Storage & Smooth Japanese Engines',
  Yamaha: 'Revs Your Heart - Hybrid Power Assist & Sport Roadster Performance',
};

// Verified Models with Authentic BikeDekho CDN Photos and Exact Specifications
export const VEHICLES: Vehicle[] = [
  // 1. HERO SPLENDOR PLUS
  {
    id: 'hero-splendor-plus',
    name: 'Hero Splendor Plus XTEC',
    brand: 'Hero',
    category: 'motorcycle',
    cc: '97.2 cc',
    ccValue: 97,
    mileage: '65 - 72 kmpl',
    power: '8.02 PS @ 8000 rpm',
    torque: '8.05 Nm @ 6000 rpm',
    fuelCapacity: '9.8 L',
    brakes: 'Drum with Integrated Braking System (IBS)',
    popular: true,
    bestFor: 'India\'s No. 1 Mileage Champion & Low Maintenance Commute',
    colors: ['Black with Silver', 'Matte Grey', 'Candy Blazing Red', 'Nexus Blue'],
    tagline: 'Bluetooth digital meter with call/SMS alert, real-time mileage indicator (RTMI) & i3S stop-start',
    brandColor: '#dc2626',
    image: 'https://cdn.bikedekho.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor69ba806bcfb9f.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/hero/splendor-plus',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 2. HERO HF DELUXE
  {
    id: 'hero-hf-deluxe',
    name: 'Hero HF Deluxe',
    brand: 'Hero',
    category: 'motorcycle',
    cc: '97.2 cc',
    ccValue: 97,
    mileage: '65 - 70 kmpl',
    power: '8.02 PS @ 8000 rpm',
    torque: '8.05 Nm @ 6000 rpm',
    fuelCapacity: '9.6 L',
    brakes: 'Drum (Integrated Braking System)',
    popular: false,
    bestFor: 'Maximum Budget Savings, Tough Commuting & Daily Deliveries',
    colors: ['Techno Blue', 'Heavy Grey with Black', 'Red with Black', 'Black with Purple'],
    tagline: 'Programmed Fi with xSens technology, i3S idle stop-start system, and robust suspension',
    brandColor: '#dc2626',
    image: 'https://cdn.bikedekho.com/processedimages/hero/hf-delux-bs6/source/hf-delux-bs669c378fb4f7b6.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/hero/hf-deluxe',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 3. HERO XTREME 125R
  {
    id: 'hero-xtreme-125r',
    name: 'Hero Xtreme 125R (ABS)',
    brand: 'Hero',
    category: 'motorcycle',
    cc: '124.7 cc',
    ccValue: 125,
    mileage: '60 - 66 kmpl',
    power: '11.55 PS @ 8250 rpm',
    torque: '10.5 Nm @ 6500 rpm',
    fuelCapacity: '10 L',
    brakes: 'Front 276mm Disc with Single-Channel ABS',
    popular: true,
    bestFor: 'Sporty Streetfighter Styling, College Youth & Agile City Riding',
    colors: ['Firestorm Red', 'Cobalt Blue', 'Stallion Black'],
    tagline: 'First-in-class Single-Channel ABS with Showa monoshock, Sprint-EBT engine, and sharp all-LED headlamp',
    brandColor: '#dc2626',
    image: 'https://cdn.bikedekho.com/processedimages/hero/xtreme-125r/source/xtreme-125r6a59deeb7dcfd.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/hero/xtreme-125r',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 4. HONDA ACTIVA 6G
  {
    id: 'honda-activa-6g',
    name: 'Honda Activa 6G (Smart)',
    brand: 'Honda',
    category: 'scooter',
    cc: '109.51 cc',
    ccValue: 110,
    mileage: '50 - 55 kmpl',
    power: '7.84 PS @ 8000 rpm',
    torque: '8.90 Nm @ 5500 rpm',
    fuelCapacity: '5.3 L',
    brakes: 'Combi-Brake System (CBS) with Equalizer',
    popular: true,
    bestFor: 'India\'s #1 Most Trusted Family Scooter - Unmatched Reliability',
    colors: ['Decent Blue Metallic', 'Pearl Siren Blue', 'Rebel Red Metallic', 'Black', 'Matte Axis Grey'],
    tagline: 'Honda Smart Key (Smart Find, Smart Start, Smart Unlock, Smart Safe), ACG silent starter, and telescopic front suspension',
    brandColor: '#e11d48',
    image: 'https://cdn.bikedekho.com/processedimages/honda/activa-6g/source/activa-6g68a6fb7b20bd3.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/honda/activa',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 5. HONDA SP 125
  {
    id: 'honda-sp-125',
    name: 'Honda SP 125',
    brand: 'Honda',
    category: 'motorcycle',
    cc: '123.94 cc',
    ccValue: 124,
    mileage: '60 - 65 kmpl',
    power: '10.87 PS @ 7500 rpm',
    torque: '10.9 Nm @ 6000 rpm',
    fuelCapacity: '11.2 L',
    brakes: 'Front 240mm Disc / Rear Drum with Combi-Brake System',
    popular: true,
    bestFor: 'Ultra-Smooth Vibration-Free Commute & Premium Modern Styling',
    colors: ['Imperial Red Metallic', 'Matte Marvel Blue', 'Pearl Siren Blue', 'Matte Axis Grey Metallic'],
    tagline: 'Fully digital instrument meter with gear position indicator, real-time mileage, 5-speed transmission, and LED headlamp',
    brandColor: '#e11d48',
    image: 'https://cdn.bikedekho.com/processedimages/honda/sp125/source/sp12568a70d4bcf14e.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/honda/sp125',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 6. BAJAJ PULSAR NS 125
  {
    id: 'bajaj-pulsar-ns-125',
    name: 'Bajaj Pulsar NS 125',
    brand: 'Bajaj',
    category: 'motorcycle',
    cc: '124.45 cc',
    ccValue: 125,
    mileage: '50 - 55 kmpl',
    power: '11.99 PS @ 8500 rpm',
    torque: '11 Nm @ 7000 rpm',
    fuelCapacity: '12 L',
    brakes: 'Front 240mm Disc with Combined Braking System (CBS)',
    popular: true,
    bestFor: 'Segment-First Rigid Perimeter Frame & Aggressive Street Naked Attitude',
    colors: ['Burnt Red', 'Fiery Orange', 'Beach Blue', 'Pewter Grey'],
    tagline: 'Perimeter frame, Nitrox monoshock absorber, aggressive wolf-eyed headlamp, and DTS-i engine',
    brandColor: '#2563eb',
    image: 'https://cdn.bikedekho.com/processedimages/bajaj/pulsar-ns-125/source/pulsar-ns-1256a6705f19bd6c.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/bajaj/pulsar-ns-125',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 7. TVS NTORQ 125
  {
    id: 'tvs-ntorq-125',
    name: 'TVS NTorq 125 Race XP',
    brand: 'TVS',
    category: 'scooter',
    cc: '124.8 cc',
    ccValue: 125,
    mileage: '45 - 50 kmpl',
    power: '10.2 PS @ 7000 rpm',
    torque: '10.8 Nm @ 5500 rpm',
    fuelCapacity: '5.8 L',
    brakes: 'Front 220mm Roto Petal Disc with Synchronized Braking',
    popular: true,
    bestFor: 'Exhilarating Acceleration, Stealth Fighter Body & Dual Ride Modes',
    colors: ['Race Red Black', 'Combat Edition', 'Amazing Red', 'Stealth Black'],
    tagline: 'Dual Ride Modes (Race Mode & Street Mode), SmartXonnect Bluetooth with voice assist, lap timer, and 98 km/h top speed',
    brandColor: '#1d4ed8',
    image: 'https://cdn.bikedekho.com/processedimages/tvs/ntorq-125/source/ntorq-1256a3e458edb293.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/tvs/ntorq-125',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 8. TVS JUPITER 110
  {
    id: 'tvs-jupiter-110',
    name: 'TVS Jupiter 110 SmartXonnect',
    brand: 'TVS',
    category: 'scooter',
    cc: '113.3 cc',
    ccValue: 113,
    mileage: '50 - 55 kmpl',
    power: '8.02 PS @ 6500 rpm',
    torque: '9.8 Nm (10.5 Nm with iGO Assist) @ 5000 rpm',
    fuelCapacity: '5.1 L (Front Fuel Filler)',
    brakes: 'Front 220mm Disc / Rear Drum with Sync Braking System',
    popular: true,
    bestFor: 'Massive 33L Double-Helmet Storage, Front Fuel Fill & iGO Assist',
    colors: ['Dawn Blue', 'Galactic Copper', 'Titanium Grey', 'Starlight Blue', 'Meteor Red'],
    tagline: 'Segment-largest 33L under-seat boot (fits 2 full-face helmets), iGO Assist micro-hybrid boost, full-width Infinity LED light bar',
    brandColor: '#1d4ed8',
    image: 'https://cdn.bikedekho.com/processedimages/tvs/jupiter/source/jupiter68c8080e2422c.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/tvs/jupiter',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 9. TVS RAIDER 125
  {
    id: 'tvs-raider-125',
    name: 'TVS Raider 125 (SmartXonnect)',
    brand: 'TVS',
    category: 'motorcycle',
    cc: '124.8 cc',
    ccValue: 125,
    mileage: '60 - 65 kmpl',
    power: '11.38 PS @ 7500 rpm',
    torque: '11.2 Nm @ 6000 rpm',
    fuelCapacity: '10 L',
    brakes: 'Front 240mm Disc / Rear 130mm Drum (SBT)',
    popular: true,
    bestFor: '5-inch TFT Color Display, Bluetooth Navigation & Animalistic Naked Sport Looks',
    colors: ['Fiery Yellow', 'Wicked Black', 'Blazing Blue', 'Striking Red', 'Iron Man Edition'],
    tagline: '5-inch color TFT console with SmartXonnect Bluetooth, Eco & Power ride modes, USB charger, and under-seat storage tray',
    brandColor: '#1d4ed8',
    image: 'https://cdn.bikedekho.com/processedimages/tvs/raider/source/raider68b7fd149e32c.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/tvs/raider',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 10. SUZUKI ACCESS 125
  {
    id: 'suzuki-access-125',
    name: 'Suzuki Access 125 Bluetooth',
    brand: 'Suzuki',
    category: 'scooter',
    cc: '124 cc',
    ccValue: 124,
    mileage: '48 - 52 kmpl',
    power: '8.7 PS @ 6750 rpm',
    torque: '10.2 Nm @ 5500 rpm',
    fuelCapacity: '5.0 L (External Chrome Fuel Lid)',
    brakes: 'Front Disc with Combined Braking System (CBS)',
    popular: true,
    bestFor: 'Maharashtra\'s #1 125cc Scooter - Turn-by-Turn GPS & 24.4L Boot',
    colors: ['Solid Ice Green', 'Pearl Mirage White', 'Metallic Matte Black', 'Metallic Matte Platinum Silver', 'Pearl Shining Bronze'],
    tagline: 'Bluetooth Ride Connect digital console with GPS navigation, WhatsApp/call alerts, front USB port, and external chrome fuel cap',
    brandColor: '#0284c7',
    image: 'https://s3.ap-south-1.amazonaws.com/suzuki-website-s3/public-live/uploads/product-gallery-images/original/30/370-01-2025-Suzuki-Access-Website_Absolute-Side_620x428pix-01.png',
    bikedekhoUrl: 'https://www.bikedekho.com/suzuki/access-125',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 11. YAMAHA RAYZR 125 FI HYBRID
  {
    id: 'yamaha-rayzr-125',
    name: 'Yamaha RayZR 125 Fi Hybrid',
    brand: 'Yamaha',
    category: 'scooter',
    cc: '125 cc',
    ccValue: 125,
    mileage: '55 - 60 kmpl',
    power: '8.2 PS @ 6500 rpm',
    torque: '10.3 Nm @ 5000 rpm',
    fuelCapacity: '5.2 L',
    brakes: 'Front 190mm Disc with Unified Brake System (UBS)',
    popular: false,
    bestFor: 'Lightest Scooter in Class (99 kg) with Smart Motor Generator Hybrid Assist',
    colors: ['Matte Dark Reddish Grey', 'Cyan Blue', 'Metallic Black', 'Racing Blue', 'Matte Copper'],
    tagline: 'Weighs only 99 kg with SMG Electric Power Assist for instant throttle response, quiet start, and stop-start system',
    brandColor: '#4338ca',
    image: 'https://cdn.bikedekho.com/processedimages/yamaha/ray-zr-125-2020-2026/source/ray-zr-125-2020-20266a841bd38001c.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/yamaha/ray-zr-125',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },

  // 12. YAMAHA FZ-X
  {
    id: 'yamaha-fz-x',
    name: 'Yamaha FZ-X (TCS)',
    brand: 'Yamaha',
    category: 'motorcycle',
    cc: '149 cc',
    ccValue: 149,
    mileage: '45 - 50 kmpl',
    power: '12.4 PS @ 7250 rpm',
    torque: '13.3 Nm @ 5500 rpm',
    fuelCapacity: '10 L',
    brakes: 'Front 282mm Disc with Bosch Single-Channel ABS & Rear Disc',
    popular: true,
    bestFor: 'Neo-Retro Classic Roadster Styling, Traction Control (TCS) & Upright Touring Ergonomics',
    colors: ['Matte Copper', 'Metallic Black', 'Dark Matte Blue', 'Chrome Edition'],
    tagline: 'Segment-first Traction Control System (TCS), bi-functional LED projector with ring DRL, Bluetooth Y-Connect, and block-pattern dual-sport tyres',
    brandColor: '#4338ca',
    image: 'https://cdn.bikedekho.com/processedimages/yamaha/fz-x/source/fz-x692e7191ae8ec.jpg',
    bikedekhoUrl: 'https://www.bikedekho.com/yamaha/fz-x',
    priceNote: 'Ask for Best On-Road Price on WhatsApp',
  },
];

export const SHOWROOM_CONTACT = {
  name: 'M.M. Bike Point',
  devanagariName: 'एम. एम. बाईक पॉईंट',
  phone: '9920818074',
  phoneFormatted: '+91 9920818074',
  whatsapp: '919920818074',
  address: 'Shop No. 5 & 6, Mandapeshwar, Dahisar West, Mumbai, Maharashtra 400103',
  landmark: 'Next to Highrise Building, Near M.M. Medical & Diagnostic Centre',
  googleMapsUrl: 'https://maps.app.goo.gl/2Jjv3MzQyhE8tvVN6',
  hours: 'Monday to Sunday: 9:30 AM - 9:00 PM',
  email: 'jeelajitpal76780@gmail.com',
};
