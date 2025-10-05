import { RentalEquipment, Category } from '../types/equipment';

export const rentalEquipmentCategories: Category[] = [
  { id: 'tractors', name: 'Tractors', icon: '🚜', count: 2 },
  { id: 'harvesters', name: 'Harvesters', icon: '🌾', count: 2 },
  { id: 'planters', name: 'Planters', icon: '🌱', count: 1 },
  { id: 'sprayers', name: 'Sprayers', icon: '💧', count: 1 },
];

export const rentalEquipment: RentalEquipment[] = [
  {
    id: 'rental-1',
    name: 'John Deere 8370R Tractor',
    brand: 'John Deere',
    category: 'tractors',
    image: '/images/John Deere 9620R.png',
    dailyRate: '$450',
    weeklyRate: '$2,800',
    monthlyRate: '$10,500',
    availability: 'Available',
    location: 'Iowa, USA',
    minRentalPeriod: '1 day',
    maxRentalPeriod: '12 months',
    deposit: '$5,000',
    owner: {
      name: 'Midwest Equipment Rental',
      phone: '+1-515-555-0123',
      email: 'rentals@midwestequip.com',
      type: 'Company',
      rating: 4.8
    },
    description: 'High-performance tractor perfect for large-scale farming operations. Features advanced GPS guidance and precision farming capabilities.',
    features: [
      'GPS AutoTrac guidance system',
      'PowerShift transmission',
      'Hydraulic front suspension',
      'Climate-controlled cab',
      'LED lighting package'
    ],
    rentalTerms: [
      'Fuel not included',
      'Operator training available',
      'Maintenance included for rentals over 30 days',
      'Late return fee: $100/day',
      'Damage assessment upon return'
    ],
    insurance: {
      included: true,
      coverage: ['Liability', 'Collision', 'Theft']
    },
    delivery: {
      available: true,
      cost: '$150',
      radius: '50 miles'
    },
    parameters: {
      'Engine Power': '370 HP',
      'Weight': '16,500 lbs',
      'Fuel Capacity': '175 gallons',
      'PTO Speed': '540/1000 RPM'
    }
  },
  {
    id: 'rental-2',
    name: 'Case IH Magnum 340 CVT',
    brand: 'Case IH',
    category: 'tractors',
    image: '/images/Case IH Magnum 380.png',
    dailyRate: '$420',
    weeklyRate: '$2,600',
    monthlyRate: '$9,800',
    availability: 'Available',
    location: 'Nebraska, USA',
    minRentalPeriod: '3 days',
    maxRentalPeriod: '6 months',
    deposit: '$4,500',
    owner: {
      name: 'Prairie Ag Rentals',
      phone: '+1-402-555-0187',
      email: 'info@prairieag.com',
      type: 'Company',
      rating: 4.6
    },
    description: 'Versatile tractor with CVT transmission for smooth operation. Ideal for field work and heavy-duty applications.',
    features: [
      'CVT transmission',
      'AFS Connect telematics',
      'Suspended front axle',
      'Panoramic cab',
      'Integrated precision farming'
    ],
    rentalTerms: [
      'Weekly rates include basic maintenance',
      'Operator certification required',
      'Fuel consumption monitoring',
      'Return with full tank',
      '24/7 technical support'
    ],
    insurance: {
      included: true,
      coverage: ['Comprehensive', 'Liability']
    },
    delivery: {
      available: true,
      cost: '$125',
      radius: '75 miles'
    },
    parameters: {
      'Engine Power': '340 HP',
      'Weight': '15,800 lbs',
      'Fuel Capacity': '165 gallons',
      'Hydraulic Flow': '45 GPM'
    }
  },
  {
    id: 'rental-3',
    name: 'John Deere S780 Combine',
    brand: 'John Deere',
    category: 'harvesters',
    image: '/images/John Deere S790.png',
    dailyRate: '$850',
    weeklyRate: '$5,200',
    monthlyRate: '$18,500',
    availability: 'Available',
    location: 'Illinois, USA',
    minRentalPeriod: '1 week',
    maxRentalPeriod: '4 months',
    deposit: '$15,000',
    owner: {
      name: 'Harvest Solutions LLC',
      phone: '+1-217-555-0234',
      email: 'rentals@harvestsolutions.com',
      type: 'Company',
      rating: 4.9
    },
    description: 'High-capacity combine harvester with advanced grain handling and cleaning systems. Perfect for corn and soybean harvest.',
    features: [
      'ProDrive transmission',
      'Active Terrain Adjustment',
      'Grain quality camera',
      'HarvestLab sensor',
      'JDLink connectivity'
    ],
    rentalTerms: [
      'Includes corn and soybean headers',
      'Seasonal maintenance included',
      'Operator training mandatory',
      'Harvest data sharing available',
      'Priority booking for repeat customers'
    ],
    insurance: {
      included: true,
      cost: '$200/week',
      coverage: ['Full coverage', 'Equipment breakdown', 'Crop loss protection']
    },
    delivery: {
      available: true,
      cost: '$300',
      radius: '100 miles'
    },
    parameters: {
      'Engine Power': '473 HP',
      'Grain Tank': '350 bu',
      'Cleaning Area': '5,508 sq in',
      'Unloading Rate': '3.2 bu/sec'
    }
  },
  {
    id: 'rental-4',
    name: 'Case IH 8250 Combine',
    brand: 'Case IH',
    category: 'harvesters',
    image: '/images/Case IH Axial Flow 9250.png',
    dailyRate: '$800',
    weeklyRate: '$4,900',
    monthlyRate: '$17,200',
    availability: 'Rented',
    location: 'Kansas, USA',
    minRentalPeriod: '1 week',
    maxRentalPeriod: '3 months',
    deposit: '$14,000',
    owner: {
      name: 'Great Plains Equipment',
      phone: '+1-316-555-0156',
      email: 'combine@greatplains.com',
      type: 'Company',
      rating: 4.7
    },
    description: 'Reliable combine with Axial-Flow technology for efficient threshing and separation. Excellent for wheat and grain sorghum.',
    features: [
      'Axial-Flow rotor',
      'AFS Harvest Command',
      'CrossFlow cleaning',
      'Yield monitoring',
      'Remote diagnostics'
    ],
    rentalTerms: [
      'Wheat header included',
      'Field service support',
      'Performance guarantee',
      'Flexible scheduling',
      'End-of-season inspection'
    ],
    insurance: {
      included: true,
      coverage: ['Comprehensive', 'Weather damage']
    },
    delivery: {
      available: true,
      cost: '$275',
      radius: '80 miles'
    },
    parameters: {
      'Engine Power': '450 HP',
      'Grain Tank': '330 bu',
      'Rotor Width': '30 in',
      'Ground Speed': '8 mph max'
    }
  },
  {
    id: 'rental-5',
    name: 'John Deere DB60 Planter',
    brand: 'John Deere',
    category: 'planters',
    image: '/images/John Deere DB120.png',
    dailyRate: '$320',
    weeklyRate: '$1,950',
    monthlyRate: '$6,800',
    availability: 'Available',
    location: 'Indiana, USA',
    minRentalPeriod: '1 week',
    maxRentalPeriod: '2 months',
    deposit: '$3,500',
    owner: {
      name: 'Precision Planting Co.',
      phone: '+1-765-555-0198',
      email: 'planters@precisionplant.com',
      type: 'Company',
      rating: 4.8
    },
    description: 'High-precision planter with variable rate seeding and advanced seed placement technology. Perfect for corn and soybean planting.',
    features: [
      'ExactEmerge row units',
      'Variable rate seeding',
      'SeedStar mobile app',
      'Precision depth control',
      'Integrated fertilizer system'
    ],
    rentalTerms: [
      'Seeds and fertilizer not included',
      'Calibration service included',
      'Field setup assistance',
      'Performance monitoring',
      'Seasonal rate discounts'
    ],
    insurance: {
      included: false,
      cost: '$75/week',
      coverage: ['Equipment damage', 'Third party liability']
    },
    delivery: {
      available: true,
      cost: '$100',
      radius: '60 miles'
    },
    parameters: {
      'Row Spacing': '30 in',
      'Number of Rows': '24',
      'Seed Capacity': '240 bu',
      'Working Width': '60 ft'
    }
  },
  {
    id: 'rental-6',
    name: 'Apache AS1220 Sprayer',
    brand: 'Apache',
    category: 'sprayers',
    image: '/images/Apache AS1220.png',
    dailyRate: '$280',
    weeklyRate: '$1,750',
    monthlyRate: '$6,200',
    availability: 'Maintenance',
    location: 'Minnesota, USA',
    minRentalPeriod: '3 days',
    maxRentalPeriod: '3 months',
    deposit: '$3,000',
    owner: {
      name: 'Northern Spray Services',
      phone: '+1-507-555-0167',
      email: 'spray@northernservices.com',
      type: 'Company',
      rating: 4.5
    },
    description: 'Self-propelled sprayer with precision application technology. Ideal for crop protection and field spraying operations.',
    features: [
      'GPS guidance system',
      'Variable rate application',
      'Boom height control',
      'Section control',
      'Chemical injection system'
    ],
    rentalTerms: [
      'Chemicals not included',
      'Tank cleaning required',
      'Certified operator required',
      'Weather monitoring support',
      'Application records provided'
    ],
    insurance: {
      included: true,
      coverage: ['Equipment', 'Environmental liability']
    },
    delivery: {
      available: true,
      cost: '$120',
      radius: '70 miles'
    },
    parameters: {
      'Tank Capacity': '1,200 gallons',
      'Boom Width': '120 ft',
      'Engine Power': '275 HP',
      'Ground Clearance': '60 in'
    }
  }
];