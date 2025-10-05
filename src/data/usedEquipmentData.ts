import { UsedEquipment } from '../types/equipment';

export const usedEquipment: UsedEquipment[] = [
  {
    id: 'used-1',
    name: 'John Deere 8320R',
    brand: 'John Deere',
    category: 'tractors',
    image: '/images/John Deere 9620R.png', // 使用相似型号的图片
    year: 2018,
    hours: 2850,
    condition: 'Good',
    location: 'Iowa, USA',
    seller: {
      name: 'Midwest Farm Equipment',
      phone: '(515) 555-0123',
      email: 'sales@midwestfarm.com',
      type: 'Dealer'
    },
    originalPrice: '$420,000',
    currentPrice: '$285,000',
    description: 'Well-maintained 8320R with recent service. Excellent field performance with low hours for the year.',
    features: [
      'Recent engine overhaul',
      'New tires installed 2023',
      'GPS guidance system included',
      'Climate-controlled cab',
      'Full service records available'
    ],
    inspectionReport: {
      date: '2024-01-15',
      inspector: 'Certified Equipment Inspector',
      notes: [
        'Engine in excellent condition',
        'Hydraulic system functioning properly',
        'Minor cosmetic wear on exterior',
        'All safety systems operational'
      ]
    },
    parameters: {
      'Engine Power': '320 HP',
      'Engine Model': 'John Deere PSS 9.0L',
      'Fuel Capacity': '300 gal',
      'Transmission': 'e23 PowerShift',
      'Max Speed': '25 mph',
      'Weight': '35,000 lbs',
      'Hours': '2,850'
    }
  },
  {
    id: 'used-2',
    name: 'Case IH Magnum 340',
    brand: 'Case IH',
    category: 'tractors',
    image: '/images/Case IH Magnum 380.png',
    year: 2019,
    hours: 1950,
    condition: 'Excellent',
    location: 'Nebraska, USA',
    seller: {
      name: 'Prairie Equipment Co.',
      phone: '(402) 555-0456',
      email: 'info@prairieequip.com',
      type: 'Dealer'
    },
    originalPrice: '$380,000',
    currentPrice: '$295,000',
    description: 'Low-hour Magnum 340 in exceptional condition. Single owner, always stored indoors.',
    features: [
      'AFS Connect telematics',
      'Luxury cab package',
      'LED lighting package',
      'Power beyond hydraulics',
      'Extended warranty available'
    ],
    parameters: {
      'Engine Power': '340 HP',
      'Engine Model': 'FPT Cursor 9',
      'Fuel Capacity': '280 gal',
      'Transmission': 'CVXDrive',
      'Max Speed': '31 mph',
      'Weight': '32,500 lbs',
      'Hours': '1,950'
    }
  },
  {
    id: 'used-3',
    name: 'John Deere S680',
    brand: 'John Deere',
    category: 'harvesters',
    image: '/images/John Deere S790.png',
    year: 2017,
    hours: 1200,
    condition: 'Good',
    location: 'Illinois, USA',
    seller: {
      name: 'Johnson Farms',
      phone: '(217) 555-0789',
      email: 'mike@johnsonfarms.com',
      type: 'Private'
    },
    originalPrice: '$650,000',
    currentPrice: '$425,000',
    description: 'Reliable S680 combine with excellent maintenance history. Perfect for medium to large operations.',
    features: [
      'ProDrive transmission',
      'ActiveYield mapping',
      'Grain tank extensions',
      'Contour-Master header',
      'Recent concave replacement'
    ],
    parameters: {
      'Engine Power': '473 HP',
      'Engine Model': 'John Deere PSS 13.6L',
      'Grain Tank': '300 bu',
      'Cleaning Area': '5,508 sq in',
      'Unloading Rate': '3.2 bu/sec',
      'Weight': '35,500 lbs',
      'Hours': '1,200'
    }
  },
  {
    id: 'used-4',
    name: 'Case IH Axial Flow 8250',
    brand: 'Case IH',
    category: 'harvesters',
    image: '/images/Case IH Axial Flow 9250.png',
    year: 2016,
    hours: 1850,
    condition: 'Fair',
    location: 'Kansas, USA',
    seller: {
      name: 'Wheat Country Equipment',
      phone: '(316) 555-0234',
      email: 'sales@wheatcountry.com',
      type: 'Dealer'
    },
    originalPrice: '$580,000',
    currentPrice: '$295,000',
    description: 'Solid working combine with some wear. Great value for budget-conscious buyers.',
    features: [
      'AFS Pro 700 display',
      'Yield mapping capability',
      'Rock trap protection',
      'Residue management system',
      'Recent belt replacements'
    ],
    parameters: {
      'Engine Power': '415 HP',
      'Engine Model': 'FPT Cursor 13',
      'Grain Tank': '350 bu',
      'Cleaning Area': '5,022 sq in',
      'Unloading Rate': '3.5 bu/sec',
      'Weight': '38,000 lbs',
      'Hours': '1,850'
    }
  },
  {
    id: 'used-5',
    name: 'John Deere DB60',
    brand: 'John Deere',
    category: 'planters',
    image: '/images/John Deere DB120.png',
    year: 2020,
    hours: 450,
    condition: 'Excellent',
    location: 'Indiana, USA',
    seller: {
      name: 'Hoosier Ag Solutions',
      phone: '(317) 555-0567',
      email: 'contact@hoosierag.com',
      type: 'Dealer'
    },
    originalPrice: '$485,000',
    currentPrice: '$395,000',
    description: 'Nearly new DB60 planter with minimal use. Includes latest precision planting technology.',
    features: [
      'ExactEmerge row units',
      'ExactRate fertilizer system',
      'SeedStar XP monitoring',
      'Variable rate seeding',
      'Liquid fertilizer tanks'
    ],
    parameters: {
      'Row Configuration': '48 rows',
      'Row Spacing': '15 inches',
      'Seed Capacity': '240 bu',
      'Fertilizer Capacity': '3,200 gal',
      'Working Width': '60 ft',
      'Weight': '45,000 lbs',
      'Hours': '450'
    }
  },
  {
    id: 'used-6',
    name: 'Apache AS1220',
    brand: 'Apache',
    category: 'sprayers',
    image: '/images/Apache AS1220.png',
    year: 2019,
    hours: 980,
    condition: 'Good',
    location: 'Minnesota, USA',
    seller: {
      name: 'North Star Equipment',
      phone: '(507) 555-0890',
      email: 'info@northstarequip.com',
      type: 'Dealer'
    },
    originalPrice: '$425,000',
    currentPrice: '$315,000',
    description: 'High-capacity sprayer with excellent boom stability. Perfect for large-scale applications.',
    features: [
      'SmarTrax guidance',
      'Raven Viper Pro controller',
      'Stainless steel tank',
      'LED boom lighting',
      'Auto boom height control'
    ],
    parameters: {
      'Tank Capacity': '1,200 gal',
      'Boom Width': '120 ft',
      'Engine Power': '350 HP',
      'Ground Clearance': '60 in',
      'Tire Size': '380/90R46',
      'Weight': '28,000 lbs',
      'Hours': '980'
    }
  }
];

export const usedEquipmentCategories = [
  { id: 'tractors', name: 'Used Tractors', icon: '🚜', count: 2 },
  { id: 'harvesters', name: 'Used Harvesters', icon: '🌾', count: 2 },
  { id: 'planters', name: 'Used Planters', icon: '🌱', count: 1 },
  { id: 'sprayers', name: 'Used Sprayers', icon: '💧', count: 1 },
  { id: 'tillers', name: 'Used Tillage', icon: '⚡', count: 0 },
  { id: 'balers', name: 'Used Balers', icon: '📦', count: 0 },
];