import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, DollarSign, Calendar, Clock } from 'lucide-react';
import { UsedEquipment } from '../types/equipment';
import { usedEquipment, usedEquipmentCategories } from '../data/usedEquipmentData';
import UsedEquipmentGrid from './UsedEquipmentGrid';
import CategoryFilter from './CategoryFilter';

const UsedEquipmentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [yearRange, setYearRange] = useState({ min: '', max: '' });
  const [hoursRange, setHoursRange] = useState({ min: '', max: '' });
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique locations for filter
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(usedEquipment.map(item => item.location))];
    return uniqueLocations.sort();
  }, []);

  // Filter equipment based on search and filters
  const filteredEquipment = useMemo(() => {
    let filtered = usedEquipment;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Price filter
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter(item => {
        const price = parseInt(item.currentPrice.replace(/[^0-9]/g, ''));
        const min = priceRange.min ? parseInt(priceRange.min) : 0;
        const max = priceRange.max ? parseInt(priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Year filter
    if (yearRange.min || yearRange.max) {
      filtered = filtered.filter(item => {
        const min = yearRange.min ? parseInt(yearRange.min) : 0;
        const max = yearRange.max ? parseInt(yearRange.max) : new Date().getFullYear();
        return item.year >= min && item.year <= max;
      });
    }

    // Hours filter
    if (hoursRange.min || hoursRange.max) {
      filtered = filtered.filter(item => {
        const min = hoursRange.min ? parseInt(hoursRange.min) : 0;
        const max = hoursRange.max ? parseInt(hoursRange.max) : Infinity;
        return item.hours >= min && item.hours <= max;
      });
    }

    // Condition filter
    if (selectedCondition !== 'all') {
      filtered = filtered.filter(item => item.condition === selectedCondition);
    }

    // Location filter
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(item => item.location === selectedLocation);
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, yearRange, hoursRange, selectedCondition, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange({ min: '', max: '' });
    setYearRange({ min: '', max: '' });
    setHoursRange({ min: '', max: '' });
    setSelectedCondition('all');
    setSelectedLocation('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Used Agricultural Equipment</h1>
              <p className="text-gray-600 mt-2">Find quality pre-owned farm equipment at great prices</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{filteredEquipment.length}</div>
              <div className="text-sm text-gray-600">Available Items</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, brand, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
            {(searchQuery || selectedCategory !== 'all' || priceRange.min || priceRange.max || 
              yearRange.min || yearRange.max || hoursRange.min || hoursRange.max || 
              selectedCondition !== 'all' || selectedLocation !== 'all') && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Category Filter */}
          <section id="used-categories">
            <CategoryFilter
              categories={[{ id: 'all', name: 'All Categories', icon: '🔍', count: usedEquipment.length }, ...usedEquipmentCategories]}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </section>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Year Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={yearRange.min}
                      onChange={(e) => setYearRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={yearRange.max}
                      onChange={(e) => setYearRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                {/* Hours Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Hours Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={hoursRange.min}
                      onChange={(e) => setHoursRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={hoursRange.max}
                      onChange={(e) => setHoursRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>

                {/* Condition Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">All Conditions</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <section id="used-equipment-catalog">
          <UsedEquipmentGrid equipment={filteredEquipment} />
        </section>

        <section id="used-equipment-guide" className="mt-12 prose prose-green max-w-none">
          <h2 className="text-2xl font-semibold">Used Equipment Buying Guide</h2>
          <p>
            Buying pre-owned agricultural machinery requires structured inspection and documentation. The goal is to verify mechanical integrity, 
            reduce downtime risk, and forecast ownership cost. Use the checklist below before making an offer, and capture photos or short videos 
            for each step to create your own records. This approach improves negotiation leverage and long-term maintenance planning.
          </p>
          <h3 className="text-xl font-semibold">Mechanical Inspection</h3>
          <ul className="list-disc ml-6">
            <li>Engine: cold start, blow-by, oil analysis, and coolant condition.</li>
            <li>Transmission/Driveline: shift quality, noise, clutch wear, hydraulic leaks.</li>
            <li>PTO and Hydraulics: PTO engagement, remotes function, flow and pressure stability.</li>
            <li>Undercarriage/Tires: tread depth, sidewall cracks, track wear, alignment.</li>
            <li>Electrical: lighting, sensors, diagnostic codes, battery and alternator health.</li>
          </ul>
          <h3 className="text-xl font-semibold">Documentation & History</h3>
          <ul className="list-disc ml-6">
            <li>VIN/Serial verification; confirm model year against manufacturer records.</li>
            <li>Service logs and parts invoices; check interval adherence for filters and fluids.</li>
            <li>Ownership chain and usage profile (row crops vs. heavy tillage vs. transport).</li>
            <li>Accident or major repair history; ask for before/after photos where possible.</li>
          </ul>
          <h3 className="text-xl font-semibold">Cost Model</h3>
          <p>
            Estimate annual total cost: depreciation + fuel + scheduled maintenance + wear parts + contingency. 
            For combines and balers, account for seasonal peak wear. Build a reserve fund equal to one major repair.
          </p>
        </section>

        <section id="used-equipment-checklist" className="mt-8 prose prose-green max-w-none">
          <h2 className="text-2xl font-semibold">Inspection Checklist (Printable Summary)</h2>
          <p>Use this condensed list during on-site inspection:</p>
          <ol className="list-decimal ml-6">
            <li>Start-up test and idle stabilization within 60 seconds.</li>
            <li>Hydraulic leak check: wipe fittings; observe drips after 10 minutes.</li>
            <li>PTO load test with implement (if available), confirm engagement and noise.</li>
            <li>Brake and steering response on gravel and paved surfaces.</li>
            <li>Diagnostic scan: export codes; verify no active critical faults.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default UsedEquipmentPage;