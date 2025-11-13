import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import EquipmentGrid from './components/EquipmentGrid';
import Stats from './components/Stats';
import SEO from './components/SEO';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import UsedEquipmentPage from './components/UsedEquipmentPage';
import RentalEquipmentPage from './components/RentalEquipmentPage';
import { Equipment } from './types/equipment';
import { equipment, categories } from './data/equipmentData';
import { trackSearch, trackCategoryFilter } from './utils/analytics';

function App() {
  const [currentPage, setCurrentPage] = useState<'new' | 'used' | 'rental'>('new');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tractors'); // 默认显示拖拉机分类，不再显示所有设备
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);

  // 预加载前几张图片
  useEffect(() => {
    const preloadImages = () => {
      const firstFewImages = equipment
        .filter(item => item.category === 'tractors')
        .slice(0, 3)
        .map(item => item.image);

      // 使用 OptimizedImage 组件中的预加载函数
      // 这里只是预热图片，不需要处理结果
      firstFewImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // 延迟预加载以不影响主要内容加载
    const timer = setTimeout(preloadImages, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredEquipment = useMemo(() => {
    const filtered = equipment.filter((item) => {
      const matchesSearch = searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = item.category === selectedCategory; // 必须匹配选中的分类，不再支持显示所有设备

      return matchesSearch && matchesCategory;
    });

    // 发送搜索统计
    if (searchQuery) {
      trackSearch(searchQuery, filtered.length);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // 分类筛选统计
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackCategoryFilter(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        equipment={filteredEquipment}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Page Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setCurrentPage('new')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentPage === 'new'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              New Equipment
            </button>
            <button
              onClick={() => setCurrentPage('used')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentPage === 'used'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Used Equipment
            </button>
            <button
              onClick={() => setCurrentPage('rental')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentPage === 'rental'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Equipment Rental
            </button>
          </nav>
        </div>
      </div>

      {/* Conditional Page Rendering */}
      {currentPage === 'new' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Stats />

          <section id="equipment-categories">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </section>

          <section
             id="equipment-grid"
             aria-live="polite"
           >
             <EquipmentGrid equipment={filteredEquipment} />
           </section>

          <section id="technical-documentation" className="mt-12 prose prose-green max-w-none">
            <h2 className="text-2xl font-semibold">Technical Documentation: Understanding Core Specifications</h2>
            <p>
              Selecting agricultural machinery requires more than brand familiarity. This guide explains the meaning and trade‑offs behind key
              specifications used across tractors, harvesters, planters, sprayers, and tillage equipment. It is written for farming professionals
              and agricultural businesses who want practical, field‑tested decision frameworks rather than superficial marketing descriptions.
            </p>
            <h3 className="text-xl font-semibold">Engine Power vs. PTO Power</h3>
            <p>
              Engine horsepower reflects the raw output at the crankshaft, while <strong>PTO horsepower</strong> measures usable power delivered to implements.
              For balers, mowers, and grain augers, PTO is the limiting factor; for heavy drawbar tillage, torque curves and weight balance matter more
              than peak horsepower. Always match PTO requirements with at least a 10–15% margin to account for altitude, temperature, and wear.
            </p>
            <h3 className="text-xl font-semibold">Hydraulic Flow and Remote Valves</h3>
            <p>
              Hydraulic capacity determines how quickly implements lift, fold, and cycle. Compare total flow (L/min or gpm) and the number of remotes.
              Modern planters and air seeders may need load‑sense systems; sprayers benefit from closed‑center hydraulics to prevent pressure drop when
              multiple functions operate simultaneously.
            </p>
            <h3 className="text-xl font-semibold">Weight, Tires, and Soil Compaction</h3>
            <p>
              Operating weight influences traction and soil health. Duals or IF/VF tires reduce ground pressure compared to standard radials. When
              working in wet conditions, prioritize flotation over speed. Compaction penalties accumulate season to season; aim for a balanced axle load
              and consider central tire inflation systems to optimize footprint in-field versus road transport.
            </p>
            <h3 className="text-xl font-semibold">Combine Capacity and Header Matching</h3>
            <p>
              Combine performance depends on matching header width to crop type and residue management. Oversized headers lead to grain loss when
              cleaning shoe and rotor settings cannot keep up. For corn, evaluate chopper power draw; for small grains, sample tailings regularly to
              tune pre‑cleaner and sieve settings.
            </p>
            <h3 className="text-xl font-semibold">Ownership Cost Model</h3>
            <p>
              Beyond purchase price, calculate fuel, maintenance intervals, wearable parts (chains, knives, bushings), and expected resale value.
              A simple rule of thumb: annual cost ≈ depreciation + fuel + scheduled maintenance + downtime risk. Used and rental options can
              reduce capital load if utilization is seasonal.
            </p>
          </section>

          <section id="equipment-comparison" className="mt-12 prose prose-green max-w-none">
            <h2 className="text-2xl font-semibold">Equipment Comparison: Practical Selection Frameworks</h2>
            <p>
              Start with the agronomic job to be done and field constraints (soil type, slope, moisture window). Choose implement width based on
              tractor PTO and hydraulic capacity, then compare models by productivity per hour, fuel per hectare, and service access.
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Tractors:</strong> Compare PTO power, hydraulic flow, transmission type (powershift/CVT), and drawbar pull.</li>
              <li><strong>Planters/Seeders:</strong> Evaluate seed delivery, down‑force control, section shutoff, and fertilizer integration.</li>
              <li><strong>Sprayers:</strong> Consider boom stability, nozzle control, turn compensation, and clean‑out procedures.</li>
              <li><strong>Tillage:</strong> Match tool to residue and moisture; compare working depth stability and transport safety.</li>
            </ul>
            <p>
              Document your own test notes for each machine and keep service records. Over time this creates original, high‑value content for your
              operation and helps validate our database recommendations.
            </p>
          </section>
        </main>
      ) : currentPage === 'used' ? (
        <UsedEquipmentPage />
      ) : (
        <RentalEquipmentPage />
      )}

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
                <li><a href="#equipment-comparison" className="hover:text-green-400 transition-colors">Equipment Comparison</a></li>
                <li><a href="#technical-documentation" className="hover:text-green-400 transition-colors">Technical Documentation</a></li>
                <li><a href="mailto:mitdream2028@gmail.com?subject=Price%20Inquiry&body=Please%20include%20equipment%20model%20and%20requirements." className="hover:text-green-400 transition-colors">Price Inquiry</a></li>
                <li><a href="#equipment-categories" className="hover:text-green-400 transition-colors">Equipment Categories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Phone: 1-800-AGRITECH</p>
                <p>Email: mitdream2028@gmail.com</p>
                <p>Hours: Monday-Friday 8:00 AM - 6:00 PM EST</p>
                <div className="flex space-x-4 mt-3">
                  <button onClick={() => setIsPrivacyPolicyOpen(true)} className="hover:text-green-400 transition-colors bg-transparent border-none p-0 text-gray-300 text-sm cursor-pointer">Privacy Policy</button>
                  <span className="text-gray-500">|</span>
                  <button onClick={() => setIsTermsOfServiceOpen(true)} className="hover:text-green-400 transition-colors bg-transparent border-none p-0 text-gray-300 text-sm cursor-pointer">Terms of Service</button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 US AgriTech Database. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <PrivacyPolicy 
        isOpen={isPrivacyPolicyOpen} 
        onClose={() => setIsPrivacyPolicyOpen(false)} 
      />
      
      <TermsOfService 
        isOpen={isTermsOfServiceOpen} 
        onClose={() => setIsTermsOfServiceOpen(false)} 
      />
    </div>
  );
}

export default App;
