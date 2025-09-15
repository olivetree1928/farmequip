import { Equipment, Category } from '../types/equipment';

export const categories: Category[] = [
  { id: 'tractors', name: 'Tractors', icon: '🚜', count: 8 },
  { id: 'harvesters', name: 'Harvesters', icon: '🌾', count: 7 },
  { id: 'planters', name: 'Planters', icon: '🌱', count: 6 },
  { id: 'sprayers', name: 'Sprayers', icon: '💧', count: 8 },
  { id: 'tillers', name: 'Tillage', icon: '⚡', count: 7 },
  { id: 'balers', name: 'Balers', icon: '📦', count: 6 },
];

export const equipment: Equipment[] = [
  // TRACTORS (8 products)
  {
    id: '1',
    name: 'John Deere 9620R',
    brand: 'John Deere',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/2132251/pexels-photo-2132251.jpeg',
    description: 'Large four-wheel drive tractor designed for large-scale farming operations',
    price: '$485,000',
    parameters: {
      'Engine Power': '620 HP',
      'Engine Model': 'John Deere PSX 13.6L',
      'Fuel Capacity': '400 gal',
      'Transmission': 'e23 PowerShift',
      'Max Speed': '25 mph',
      'Wheelbase': '144 in',
      'Weight': '43,000 lbs',
      'Hydraulic System': 'Open Center',
      'Lift Capacity': '30,000 lbs',
      'Tire Size': '710/70R42'
    }
  },
  {
    id: '2',
    name: 'Kubota M7-172',
    brand: 'Kubota',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/266268/pexels-photo-266268.jpeg',
    description: 'Mid-size versatile tractor suitable for various farm operations',
    price: '$165,000',
    parameters: {
      'Engine Power': '172 HP',
      'Engine Model': 'Kubota V6108 6.1L',
      'Fuel Capacity': '92 gal',
      'Transmission': 'CVT Continuously Variable',
      'Max Speed': '31 mph',
      'Wheelbase': '109 in',
      'Weight': '15,900 lbs',
      'Hydraulic Output': '28 gpm',
      'Lift Capacity': '15,900 lbs',
      'Tire Size': '480/70R34'
    }
  },
  {
    id: '3',
    name: 'Case IH Magnum 380',
    brand: 'Case IH',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/2132251/pexels-photo-2132251.jpeg',
    description: 'High-horsepower row crop tractor with advanced CVT transmission',
    price: '$425,000',
    parameters: {
      'Engine Power': '380 HP',
      'Engine Model': 'FPT Cursor 13 12.9L',
      'Fuel Capacity': '315 gal',
      'Transmission': 'CVXDrive Continuously Variable',
      'Max Speed': '31 mph',
      'Wheelbase': '126 in',
      'Weight': '32,400 lbs',
      'Hydraulic Flow': '50 gpm',
      'Lift Capacity': '22,000 lbs',
      'Tire Size': '710/70R42'
    }
  },
  {
    id: '4',
    name: 'New Holland T9.700',
    brand: 'New Holland',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/266268/pexels-photo-266268.jpeg',
    description: 'Four-wheel drive articulated tractor for heavy-duty field work',
    price: '$520,000',
    parameters: {
      'Engine Power': '682 HP',
      'Engine Model': 'Cursor 13 12.9L',
      'Fuel Capacity': '475 gal',
      'Transmission': 'Ultra Command CVT',
      'Max Speed': '25 mph',
      'Wheelbase': '144 in',
      'Weight': '44,500 lbs',
      'Hydraulic Flow': '63 gpm',
      'Lift Capacity': '28,000 lbs',
      'Tire Size': '800/70R38'
    }
  },
  {
    id: '5',
    name: 'Massey Ferguson 8S.265',
    brand: 'Massey Ferguson',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/2132251/pexels-photo-2132251.jpeg',
    description: 'Premium row crop tractor with Dyna-VT continuously variable transmission',
    price: '$285,000',
    parameters: {
      'Engine Power': '265 HP',
      'Engine Model': 'AGCO Power 7.4L',
      'Fuel Capacity': '158 gal',
      'Transmission': 'Dyna-VT CVT',
      'Max Speed': '31 mph',
      'Wheelbase': '115 in',
      'Weight': '24,250 lbs',
      'Hydraulic Flow': '42 gpm',
      'Lift Capacity': '19,400 lbs',
      'Tire Size': '650/75R38'
    }
  },
  {
    id: '6',
    name: 'Fendt 1050 Vario',
    brand: 'Fendt',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/266268/pexels-photo-266268.jpeg',
    description: 'German-engineered high-performance tractor with Vario transmission',
    price: '$650,000',
    parameters: {
      'Engine Power': '517 HP',
      'Engine Model': 'MAN D2676 12.4L',
      'Fuel Capacity': '370 gal',
      'Transmission': 'Vario CVT',
      'Max Speed': '37 mph',
      'Wheelbase': '138 in',
      'Weight': '38,800 lbs',
      'Hydraulic Flow': '79 gpm',
      'Lift Capacity': '26,500 lbs',
      'Tire Size': '710/75R42'
    }
  },
  {
    id: '7',
    name: 'Versatile 550DT',
    brand: 'Versatile',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/2132251/pexels-photo-2132251.jpeg',
    description: 'Four-wheel drive articulated tractor built for Canadian prairie conditions',
    price: '$475,000',
    parameters: {
      'Engine Power': '550 HP',
      'Engine Model': 'Cummins X15 14.9L',
      'Fuel Capacity': '400 gal',
      'Transmission': 'PowerShift 16-speed',
      'Max Speed': '25 mph',
      'Wheelbase': '142 in',
      'Weight': '41,200 lbs',
      'Hydraulic Flow': '55 gpm',
      'Lift Capacity': '25,000 lbs',
      'Tire Size': '710/70R42'
    }
  },
  {
    id: '8',
    name: 'Challenger MT775E',
    brand: 'Challenger',
    category: 'tractors',
    image: 'https://images.pexels.com/photos/266268/pexels-photo-266268.jpeg',
    description: 'Track tractor with rubber belts for reduced soil compaction',
    price: '$580,000',
    parameters: {
      'Engine Power': '775 HP',
      'Engine Model': 'Caterpillar C18 18.1L',
      'Fuel Capacity': '500 gal',
      'Transmission': 'CVT Continuously Variable',
      'Max Speed': '25 mph',
      'Track Width': '30 in',
      'Weight': '52,000 lbs',
      'Hydraulic Flow': '65 gpm',
      'Ground Pressure': '6.8 psi',
      'Track System': 'Mobil-trac System'
    }
  },

  // HARVESTERS (7 products)
  {
    id: '9',
    name: 'Case IH Axial-Flow 9250',
    brand: 'Case IH',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
    description: 'High-efficiency combine harvester with advanced threshing technology',
    price: '$675,000',
    parameters: {
      'Engine Power': '473 HP',
      'Grain Tank': '500 bu',
      'Header Width': '35 ft',
      'Threshing System': 'Axial-Flow Single Rotor',
      'Cleaning System': 'Four-stage cleaning',
      'Unloading Rate': '3.7 bu/sec',
      'Fuel Capacity': '350 gal',
      'Tire Size': '900/60R32',
      'Weight': '37,500 lbs',
      'Operating Speed': '5 mph'
    }
  },
  {
    id: '10',
    name: 'New Holland CR10.90',
    brand: 'New Holland',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/162240/farming-farmer-agriculture-corn-162240.jpeg',
    description: 'Smart combine harvester with advanced monitoring systems',
    price: '$620,000',
    parameters: {
      'Engine Power': '544 HP',
      'Grain Tank': '515 bu',
      'Header Width': '40 ft',
      'Threshing System': 'Twin Rotor',
      'Cleaning Area': '72 sq ft',
      'Unloading Rate': '3.5 bu/sec',
      'Fuel Capacity': '317 gal',
      'Tire Size': '800/70R38',
      'Weight': '37,000 lbs',
      'Smart System': 'IntelliSense'
    }
  },
  {
    id: '11',
    name: 'John Deere S790',
    brand: 'John Deere',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
    description: 'Premium combine with Active Yield technology and ProDrive transmission',
    price: '$720,000',
    parameters: {
      'Engine Power': '473 HP',
      'Grain Tank': '460 bu',
      'Header Width': '40 ft',
      'Threshing System': 'Single rotor',
      'Cleaning System': 'Dyna-Flo Plus',
      'Unloading Rate': '3.2 bu/sec',
      'Fuel Capacity': '315 gal',
      'Tire Size': '900/60R32',
      'Weight': '36,800 lbs',
      'Technology': 'Active Yield Mapping'
    }
  },
  {
    id: '12',
    name: 'Claas Lexion 8900',
    brand: 'Claas',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/162240/farming-farmer-agriculture-corn-162240.jpeg',
    description: 'European-designed combine with APS Hybrid threshing system',
    price: '$780,000',
    parameters: {
      'Engine Power': '598 HP',
      'Grain Tank': '530 bu',
      'Header Width': '45 ft',
      'Threshing System': 'APS Hybrid',
      'Cleaning System': '3D cleaning',
      'Unloading Rate': '4.2 bu/sec',
      'Fuel Capacity': '400 gal',
      'Tire Size': '900/60R42',
      'Weight': '42,000 lbs',
      'Technology': 'CEMOS Automatic'
    }
  },
  {
    id: '13',
    name: 'Massey Ferguson IDEAL 10T',
    brand: 'Massey Ferguson',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
    description: 'Next-generation combine with dual-helix threshing technology',
    price: '$650,000',
    parameters: {
      'Engine Power': '544 HP',
      'Grain Tank': '525 bu',
      'Header Width': '40 ft',
      'Threshing System': 'Dual-Helix',
      'Cleaning System': 'Multi-stage',
      'Unloading Rate': '3.8 bu/sec',
      'Fuel Capacity': '370 gal',
      'Tire Size': '800/70R38',
      'Weight': '38,500 lbs',
      'Technology': 'Harvest Command'
    }
  },
  {
    id: '14',
    name: 'Gleaner S98',
    brand: 'Gleaner',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/162240/farming-farmer-agriculture-corn-162240.jpeg',
    description: 'Rotary combine with exclusive Gleaner cleaning system',
    price: '$580,000',
    parameters: {
      'Engine Power': '473 HP',
      'Grain Tank': '475 bu',
      'Header Width': '35 ft',
      'Threshing System': 'Rotary processor',
      'Cleaning System': 'Gleaner cleaning',
      'Unloading Rate': '3.4 bu/sec',
      'Fuel Capacity': '300 gal',
      'Tire Size': '900/60R32',
      'Weight': '35,200 lbs',
      'Technology': 'Field Tracker'
    }
  },
  {
    id: '15',
    name: 'Fendt IDEAL 10T',
    brand: 'Fendt',
    category: 'harvesters',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
    description: 'German-engineered combine with IDEALharvest technology',
    price: '$695,000',
    parameters: {
      'Engine Power': '544 HP',
      'Grain Tank': '525 bu',
      'Header Width': '40 ft',
      'Threshing System': 'Dual-Helix',
      'Cleaning System': 'HeliaDyne',
      'Unloading Rate': '3.9 bu/sec',
      'Fuel Capacity': '370 gal',
      'Tire Size': '800/70R38',
      'Weight': '38,800 lbs',
      'Technology': 'IDEALharvest'
    }
  },

  // PLANTERS (6 products)
  {
    id: '16',
    name: 'John Deere DB120',
    brand: 'John Deere',
    category: 'planters',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'Precision planter ensuring accurate seed placement',
    price: '$340,000',
    parameters: {
      'Row Count': '48 rows',
      'Row Spacing': '30 in',
      'Seed Capacity': '200 bu',
      'Planting Depth': '0.5-4 in',
      'Working Width': '120 ft',
      'Weight': '60,000 lbs',
      'Hydraulic System': 'Remote hydraulic control',
      'Seed Sensors': 'Optical sensors',
      'Fertilizer System': 'Dual granular system',
      'GPS Accuracy': '1 in'
    }
  },
  {
    id: '17',
    name: 'Case IH 2150 Early Riser',
    brand: 'Case IH',
    category: 'planters',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'Strip-till planter with Advanced Seed Delivery system',
    price: '$285,000',
    parameters: {
      'Row Count': '36 rows',
      'Row Spacing': '30 in',
      'Seed Capacity': '150 bu',
      'Planting Depth': '0.5-3.5 in',
      'Working Width': '90 ft',
      'Weight': '45,000 lbs',
      'Seed Delivery': 'Advanced Seed Delivery',
      'Fertilizer Capacity': '4,800 lbs',
      'Down Force': 'DeltaForce',
      'Technology': 'AFS Pro 700'
    }
  },
  {
    id: '18',
    name: 'Kinze 4900',
    brand: 'Kinze',
    category: 'planters',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'High-speed planter with Blue Drive electric drive system',
    price: '$420,000',
    parameters: {
      'Row Count': '48 rows',
      'Row Spacing': '30 in',
      'Seed Capacity': '240 bu',
      'Planting Speed': '12 mph',
      'Working Width': '120 ft',
      'Weight': '58,000 lbs',
      'Drive System': 'Blue Drive Electric',
      'Seed Meters': 'Blue Drive meters',
      'Down Force': 'Pneumatic',
      'Technology': 'Blue Vantage Display'
    }
  },
  {
    id: '19',
    name: 'White 9824VE',
    brand: 'White',
    category: 'planters',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'Variable rate planter with SureSpeed technology',
    price: '$195,000',
    parameters: {
      'Row Count': '24 rows',
      'Row Spacing': '30 in',
      'Seed Capacity': '120 bu',
      'Planting Speed': '10 mph',
      'Working Width': '60 ft',
      'Weight': '28,000 lbs',
      'Technology': 'SureSpeed',
      'Seed Meters': 'Vacuum meters',
      'Fertilizer System': 'Liquid fertilizer',
      'Down Force': 'Spring down force'
    }
  },
  {
    id: '20',
    name: 'Great Plains YP2425A',
    brand: 'Great Plains',
    category: 'planters',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'Yield-Pro planter with SmartFirmer technology',
    price: '$225,000',
    parameters: {
      'Row Count': '24 rows',
      'Row Spacing': '30 in',
      'Seed Capacity': '100 bu',
      'Planting Speed': '8 mph',
      'Working Width': '60 ft',
      'Weight': '32,000 lbs',
      'Technology': 'SmartFirmer',
      'Seed Meters': 'Pneumatic',
      'Fertilizer Capacity': '3,200 lbs',
      'Closing System': 'Spike closing wheels'
    }
  },
  {
    id: '21',
    name: 'Precision Planting 20|20',
    brand: 'Precision Planting',
    category: 'planters',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'Modular planter system with vSet seed meters',
    price: '$380,000',
    parameters: {
      'Row Count': '32 rows',
      'Row Spacing': '30 in',
      'Seed Capacity': '160 bu',
      'Planting Speed': '12 mph',
      'Working Width': '80 ft',
      'Weight': '42,000 lbs',
      'Seed Meters': 'vSet vacuum meters',
      'Down Force': 'DeltaForce',
      'Technology': '20|20 SeedSense',
      'Closing System': 'CleanSweep'
    }
  },

  // SPRAYERS (8 products)
  {
    id: '22',
    name: 'DJI T40 Agricultural Drone',
    brand: 'DJI',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
    description: 'Smart agricultural drone with precision spraying system and AI recognition technology',
    price: '$15,000',
    parameters: {
      'Payload Capacity': '10.6 gal',
      'Max Takeoff Weight': '279 lbs',
      'Spray Width': '30 ft',
      'Flight Speed': '33 mph',
      'Flight Time': '25 min',
      'Work Efficiency': '59 acres/hour',
      'Positioning Accuracy': 'RTK centimeter-level',
      'Spray Flow Rate': '2.1 gpm',
      'Protection Rating': 'IP67',
      'Remote Distance': '4.3 miles',
      'Smart Features': 'AI recognition + obstacle avoidance',
      'Battery Capacity': '29000 mAh'
    }
  },
  {
    id: '23',
    name: 'John Deere R4030',
    brand: 'John Deere',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Self-propelled high-clearance sprayer with ExactApply precision application technology',
    price: '$520,000',
    parameters: {
      'Tank Capacity': '1100 gal',
      'Engine Power': '365 HP',
      'Boom Width': '120 ft',
      'Ground Clearance': '60 in',
      'Track Adjustment': '60-120 in',
      'Max Operating Speed': '20 mph',
      'Nozzle Count': '120',
      'Pump Flow': '200 gpm',
      'Fuel Capacity': '250 gal',
      'Weight': '37,900 lbs',
      'Precision Technology': 'ExactApply Pulse Width Modulation',
      'GPS System': 'StarFire 6000 Receiver'
    }
  },
  {
    id: '24',
    name: 'Case IH FLX4510',
    brand: 'Case IH',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Floater self-propelled sprayer with AIM Command FLEX precision application system',
    price: '$485,000',
    parameters: {
      'Tank Capacity': '1200 gal',
      'Engine Power': '350 HP',
      'Boom Width': '120 ft',
      'Ground Clearance': '60 in',
      'Track Width': '60-120 in',
      'Operating Speed': '20 mph',
      'Nozzle Configuration': '144 variable nozzles',
      'Pump System': 'Dual pump 200 gpm',
      'Fuel Capacity': '200 gal',
      'Weight': '39,900 lbs',
      'Control System': 'AIM Command FLEX',
      'Suspension System': 'Independent suspension + dampening'
    }
  },
  {
    id: '25',
    name: 'Apache AS1220',
    brand: 'Apache',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1128684/pexels-photo-1128684.jpeg',
    description: 'Self-propelled sprayer for large-scale pesticide application',
    price: '$445,000',
    parameters: {
      'Tank Capacity': '1200 gal',
      'Engine Power': '350 HP',
      'Boom Width': '120 ft',
      'Track Width': '60-120 in',
      'Ground Clearance': '60 in',
      'Nozzle Count': '144',
      'Pump Flow': '200 gpm',
      'Operating Speed': '20 mph',
      'Weight': '41,000 lbs',
      'GPS Navigation': 'RTK accuracy'
    }
  },
  {
    id: '26',
    name: 'Hagie STS16',
    brand: 'Hagie',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'High-clearance self-propelled sprayer designed for tall crops with intelligent spray control',
    price: '$465,000',
    parameters: {
      'Tank Capacity': '1300 gal',
      'Engine Power': '350 HP',
      'Boom Width': '120 ft',
      'Ground Clearance': '72 in',
      'Track Adjustment': '60-144 in',
      'Max Speed': '30 mph',
      'Nozzle Count': '122',
      'Pump Flow': '250 gpm',
      'Fuel Capacity': '300 gal',
      'Weight': '43,000 lbs',
      'Smart System': 'SmartApply Variable Rate',
      'Suspension Technology': 'SmoothRide Suspension System'
    }
  },
  {
    id: '27',
    name: 'Amazone UX11200',
    brand: 'Amazone',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'German-imported trailed sprayer with ArgusEco intelligent spray system and GPS navigation',
    price: '$125,000',
    parameters: {
      'Tank Capacity': '2960 gal',
      'Boom Width': '118 ft',
      'Working Pressure': '15-145 psi',
      'Nozzle Count': '144',
      'Pump Type': 'Diaphragm pump 200 gpm',
      'Boom Material': 'Carbon fiber + aluminum',
      'Folding System': 'Hydraulic folding',
      'Weight': '18,700 lbs',
      'Tire Size': '710/70R38',
      'Control System': 'ArgusEco electronic control',
      'GPS Accuracy': 'RTK centimeter-level positioning',
      'Environmental Tech': 'Chemical recovery system'
    }
  },
  {
    id: '28',
    name: 'New Holland FLX1240',
    brand: 'New Holland',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1128684/pexels-photo-1128684.jpeg',
    description: 'Guardian front boom sprayer with IntelliSpray technology',
    price: '$395,000',
    parameters: {
      'Tank Capacity': '1000 gal',
      'Engine Power': '320 HP',
      'Boom Width': '100 ft',
      'Ground Clearance': '55 in',
      'Track Width': '60-120 in',
      'Operating Speed': '18 mph',
      'Nozzle Count': '100',
      'Pump Flow': '180 gpm',
      'Fuel Capacity': '180 gal',
      'Weight': '35,500 lbs',
      'Technology': 'IntelliSpray',
      'Boom Type': 'Guardian front boom'
    }
  },
  {
    id: '29',
    name: 'Miller Nitro 6365',
    brand: 'Miller',
    category: 'sprayers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'High-clearance sprayer with See & Spray technology for precision application',
    price: '$525,000',
    parameters: {
      'Tank Capacity': '1200 gal',
      'Engine Power': '375 HP',
      'Boom Width': '120 ft',
      'Ground Clearance': '65 in',
      'Track Width': '60-120 in',
      'Operating Speed': '22 mph',
      'Nozzle Count': '120',
      'Pump Flow': '220 gpm',
      'Fuel Capacity': '275 gal',
      'Weight': '40,200 lbs',
      'Technology': 'See & Spray Select',
      'Suspension': 'Active suspension system'
    }
  },

  // TILLAGE (7 products)
  {
    id: '30',
    name: 'John Deere 2730',
    brand: 'John Deere',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Combination ripper with TruSet technology for precise depth control',
    price: '$185,000',
    parameters: {
      'Working Width': '30 ft',
      'Shank Count': '15',
      'Shank Spacing': '24 in',
      'Operating Depth': '12-30 in',
      'Weight': '28,000 lbs',
      'Hydraulic Requirements': '4000 psi',
      'Technology': 'TruSet Active',
      'Frame Type': 'Heavy-duty frame',
      'Coulter Type': '22 in fluted coulters',
      'Transport Width': '16 ft'
    }
  },
  {
    id: '31',
    name: 'Case IH True-Tandem 345',
    brand: 'Case IH',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Tandem disk harrow with wavy coulter blades for superior soil mixing',
    price: '$95,000',
    parameters: {
      'Working Width': '25 ft',
      'Blade Diameter': '22 in',
      'Blade Count': '88',
      'Blade Spacing': '7.5 in',
      'Operating Depth': '2-8 in',
      'Weight': '18,500 lbs',
      'Frame Type': 'Tandem configuration',
      'Blade Type': 'Wavy coulter blades',
      'Gang Angle': '18-22 degrees',
      'Transport Width': '14 ft'
    }
  },
  {
    id: '32',
    name: 'Kuhn Krause Gladiator 1200',
    brand: 'Kuhn Krause',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Strip-till unit with fertilizer placement and residue management',
    price: '$145,000',
    parameters: {
      'Working Width': '12 rows',
      'Row Spacing': '30 in',
      'Strip Width': '8 in',
      'Operating Depth': '6-12 in',
      'Weight': '22,000 lbs',
      'Fertilizer Capacity': '3,500 lbs',
      'Coulter Size': '20 in',
      'Shank Type': 'Curved shank',
      'Closing System': 'Firming wheels',
      'GPS Ready': 'Yes'
    }
  },
  {
    id: '33',
    name: 'Great Plains Turbo-Max 1500',
    brand: 'Great Plains',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Vertical tillage tool with rolling basket for seedbed preparation',
    price: '$75,000',
    parameters: {
      'Working Width': '15 ft',
      'Blade Count': '60',
      'Blade Diameter': '20 in',
      'Blade Spacing': '3 in',
      'Operating Depth': '1-4 in',
      'Weight': '12,500 lbs',
      'Frame Type': 'Single frame',
      'Basket Type': 'Rolling basket',
      'Blade Type': '18-wave blades',
      'Transport Width': '12 ft'
    }
  },
  {
    id: '34',
    name: 'Salford I-2100',
    brand: 'Salford',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Independent tillage tool with individual shank control',
    price: '$165,000',
    parameters: {
      'Working Width': '21 ft',
      'Shank Count': '21',
      'Shank Spacing': '12 in',
      'Operating Depth': '4-14 in',
      'Weight': '24,000 lbs',
      'Shank Type': 'Independent shanks',
      'Point Type': 'Replaceable points',
      'Frame Design': 'Walking beam',
      'Hydraulic Down Pressure': '3000 psi',
      'Transport Width': '14 ft'
    }
  },
  {
    id: '35',
    name: 'Landoll 2310',
    brand: 'Landoll',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Weatherproof disk chisel with hydraulic depth control',
    price: '$125,000',
    parameters: {
      'Working Width': '23 ft',
      'Shank Count': '19',
      'Disk Diameter': '20 in',
      'Operating Depth': '6-16 in',
      'Weight': '21,000 lbs',
      'Shank Spacing': '15 in',
      'Frame Type': 'Folding frame',
      'Depth Control': 'Hydraulic',
      'Coulter Type': 'Smooth disk',
      'Transport Width': '16 ft'
    }
  },
  {
    id: '36',
    name: 'Sunflower 1435',
    brand: 'Sunflower',
    category: 'tillers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Heavy-duty disk harrow with cushion gang flexibility',
    price: '$110,000',
    parameters: {
      'Working Width': '35 ft',
      'Blade Diameter': '24 in',
      'Blade Count': '140',
      'Blade Spacing': '6 in',
      'Operating Depth': '3-10 in',
      'Weight': '26,000 lbs',
      'Gang Type': 'Cushion gang',
      'Frame Type': 'Folding wing',
      'Blade Type': 'Notched blades',
      'Transport Width': '18 ft'
    }
  },

  // BALERS (6 products)
  {
    id: '37',
    name: 'John Deere 569',
    brand: 'John Deere',
    category: 'balers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Premium round baler with MegaWide Plus pickup and CoverEdge net wrap',
    price: '$85,000',
    parameters: {
      'Bale Diameter': '4-6 ft',
      'Pickup Width': '7.2 ft',
      'Chamber Type': 'Variable chamber',
      'Net Wrap': 'CoverEdge net wrap',
      'Twine Arms': '4 twine arms',
      'Weight': '12,500 lbs',
      'PTO Requirements': '85 HP',
      'Bale Weight': '1,500-2,000 lbs',
      'Technology': 'Bale Trak Pro',
      'Pickup Type': 'MegaWide Plus'
    }
  },
  {
    id: '38',
    name: 'New Holland BigBaler 1290',
    brand: 'New Holland',
    category: 'balers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Large square baler with CropCutter chopping system',
    price: '$195,000',
    parameters: {
      'Bale Size': '4x4 ft',
      'Bale Length': '8 ft',
      'Pickup Width': '7.5 ft',
      'Plunger Strokes': '46 per minute',
      'Knotter Count': '6 knotters',
      'Weight': '22,000 lbs',
      'PTO Requirements': '150 HP',
      'Bale Weight': '1,600 lbs',
      'Technology': 'CropCutter',
      'Chamber Type': 'Pre-compression'
    }
  },
  {
    id: '39',
    name: 'Case IH RB565',
    brand: 'Case IH',
    category: 'balers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Premium round baler with Active Pickup and Roto-Cut chopping',
    price: '$92,000',
    parameters: {
      'Bale Diameter': '4-5.5 ft',
      'Pickup Width': '7.2 ft',
      'Chamber Type': 'Variable chamber',
      'Chopping System': 'Roto-Cut 19 knives',
      'Net Wrap': 'Full surface net wrap',
      'Weight': '13,200 lbs',
      'PTO Requirements': '90 HP',
      'Bale Weight': '1,200-1,800 lbs',
      'Technology': 'Baler automation',
      'Pickup Type': 'Active Pickup'
    }
  },
  {
    id: '40',
    name: 'Massey Ferguson 2956A',
    brand: 'Massey Ferguson',
    category: 'balers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Large square baler with AccuBale density system',
    price: '$175,000',
    parameters: {
      'Bale Size': '3x4 ft',
      'Bale Length': '8 ft',
      'Pickup Width': '7.2 ft',
      'Plunger Strokes': '48 per minute',
      'Knotter Count': '4 knotters',
      'Weight': '19,500 lbs',
      'PTO Requirements': '130 HP',
      'Bale Weight': '1,200 lbs',
      'Technology': 'AccuBale density',
      'Compression System': 'Pre-compression chamber'
    }
  },
  {
    id: '41',
    name: 'Kuhn LSB1290',
    brand: 'Kuhn',
    category: 'balers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Large square baler with OptiCut chopping and IntelliWrap',
    price: '$210,000',
    parameters: {
      'Bale Size': '4x4 ft',
      'Bale Length': '8 ft',
      'Pickup Width': '7.5 ft',
      'Chopping System': 'OptiCut 25 knives',
      'Knotter Count': '6 knotters',
      'Weight': '23,500 lbs',
      'PTO Requirements': '160 HP',
      'Bale Weight': '1,700 lbs',
      'Technology': 'IntelliWrap',
      'Density Control': 'Hydraulic density'
    }
  },
  {
    id: '42',
    name: 'Vermeer 605N',
    brand: 'Vermeer',
    category: 'balers',
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg',
    description: 'Net wrap round baler with MaxiSweep pickup and Auto Tie',
    price: '$78,000',
    parameters: {
      'Bale Diameter': '4-5 ft',
      'Pickup Width': '6.5 ft',
      'Chamber Type': 'Fixed chamber',
      'Net Wrap': 'Full surface coverage',
      'Tie System': 'Auto Tie',
      'Weight': '11,800 lbs',
      'PTO Requirements': '75 HP',
      'Bale Weight': '1,000-1,500 lbs',
      'Technology': 'Bale Command Plus',
      'Pickup Type': 'MaxiSweep'
    }
  }
];