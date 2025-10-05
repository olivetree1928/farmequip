import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import EquipmentGrid from './components/EquipmentGrid';
import Stats from './components/Stats';
import { trackSearch, trackCategoryFilter } from './utils/analytics';

// 简化的设备数据，避免复杂的导入
const categories = [
  { id: 'tractors', name: 'Tractors', icon: '🚜', count: 8 },
  { id: 'harvesters', name: 'Harvesters', icon: '🌾', count: 7 },
  { id: 'planters', name: 'Planters', icon: '🌱', count: 6 },
  { id: 'sprayers', name: 'Sprayers', icon: '💧', count: 7 },
  { id: 'tillage', name: 'Tillage', icon: '🔧', count: 8 },
  { id: 'hay', name: 'Hay Equipment', icon: '🌿', count: 6 }
];

const sampleEquipment = [
  {
    id: '1',
    name: 'John Deere 9620R',
    brand: 'John Deere',
    category: 'tractors',
    image: '/images/John Deere 9620R.png',
    description: 'High-performance tracked tractor for large-scale farming operations',
    price: '$750,000',
    parameters: {
      'Engine Power': '620 HP',
      'Engine Model': 'John Deere PowerTech PSS 13.5L',
      'Fuel Capacity': '375 gal',
      'Transmission': '16F/5R e23 PowerShift',
      'Max Speed': '25 mph',
      'Weight': '44,000 lbs',
      'Track Width': '30 in',
      'Company Name': 'Deere & Company',
      'Company Address': 'One John Deere Place, Moline, Illinois 61265, USA',
      'Company Email': 'info@johndeere.com'
    },
    technicalAnalysis: {
      title: 'Technical Analysis',
      features: [
        '620 HP PowerTech PSS engine: Exceptional power output with advanced fuel injection technology',
        'Rubber track system: Superior traction and reduced soil compaction compared to wheeled tractors',
        '375-gallon fuel tank: Extended operation capability for large field coverage',
        'e23 PowerShift transmission: Smooth, efficient power delivery with 16 forward speeds',
        'Advanced hydraulics: High-flow hydraulic system for demanding implement requirements'
      ]
    }
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tractors');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 模拟数据加载
  useEffect(() => {
    try {
      // 模拟异步数据加载
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (err) {
      setError('Failed to load equipment data');
      setIsLoading(false);
    }
  }, []);

  const filteredEquipment = useMemo(() => {
    try {
      const filtered = sampleEquipment.filter((item) => {
        const matchesSearch = searchQuery === '' ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = item.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });

      // 发送搜索统计
      if (searchQuery) {
        trackSearch(searchQuery, filtered.length);
      }

      return filtered;
    } catch (err) {
      console.error('Error filtering equipment:', err);
      return [];
    }
  }, [searchQuery, selectedCategory]);

  // 分类筛选统计
  const handleCategoryChange = (category: string) => {
    try {
      setSelectedCategory(category);
      trackCategoryFilter(category);
    } catch (err) {
      console.error('Error changing category:', err);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading equipment data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <EquipmentGrid equipment={filteredEquipment} />
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>US AgriTech Database provides comprehensive and authoritative agricultural equipment specifications, detailed technical data, used equipment marketplace, and rental listings for farming professionals and agricultural businesses worldwide.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Equipment Comparison</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Technical Documentation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Price Inquiry</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Equipment Categories</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Phone: 1-800-AGRITECH</p>
                <p>Email: mitdream2028@gmail.com</p>
                <p>Hours: Monday-Friday 8:00 AM - 6:00 PM EST</p>
                <div className="flex space-x-4 mt-3">
                  <span className="hover:text-green-400 transition-colors cursor-pointer">Privacy Policy</span>
                  <span className="text-gray-500">|</span>
                  <span className="hover:text-green-400 transition-colors cursor-pointer">Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 US AgriTech Database. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;