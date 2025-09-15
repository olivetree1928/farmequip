import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import EquipmentGrid from './components/EquipmentGrid';
import Stats from './components/Stats';
import { equipment, categories } from './data/equipmentData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesSearch = searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
          onCategoryChange={setSelectedCategory}
        />

        <EquipmentGrid equipment={filteredEquipment} />
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300 text-sm">
                US AgriTech Database is dedicated to providing the most authoritative and detailed technical specifications for American agricultural equipment to farming professionals worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Equipment Comparison</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Technical Documentation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Price Inquiry</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Customer Service: 1-800-AGRITECH</p>
                <p>Email: mitdream2028@gmail.com</p>
                <p>Hours: Monday-Friday 8:00 AM - 6:00 PM EST</p>
                <p>We invite you to place your advertisement with us!</p>

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
