import React, { useState, useMemo } from 'react';
import { RentalEquipment } from '../types/equipment';
import { rentalEquipment, rentalEquipmentCategories } from '../data/rentalEquipmentData';
import RentalEquipmentGrid from './RentalEquipmentGrid';

const RentalEquipmentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Get unique locations for filter
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(rentalEquipment.map(item => item.location))];
    return uniqueLocations.sort();
  }, []);

  // Filter and sort equipment
  const filteredEquipment = useMemo(() => {
    let filtered = rentalEquipment.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesAvailability = selectedAvailability === 'all' || item.availability === selectedAvailability;
      const matchesLocation = locationFilter === 'all' || item.location === locationFilter;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const dailyRate = parseInt(item.dailyRate.replace(/[^0-9]/g, ''));
        switch (priceRange) {
          case 'low':
            matchesPrice = dailyRate < 300;
            break;
          case 'medium':
            matchesPrice = dailyRate >= 300 && dailyRate < 600;
            break;
          case 'high':
            matchesPrice = dailyRate >= 600;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesAvailability && matchesLocation && matchesPrice;
    });

    // Sort equipment
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return parseInt(a.dailyRate.replace(/[^0-9]/g, '')) - parseInt(b.dailyRate.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.dailyRate.replace(/[^0-9]/g, '')) - parseInt(a.dailyRate.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.owner.rating - a.owner.rating;
        case 'availability':
          const availabilityOrder = { 'Available': 0, 'Maintenance': 1, 'Rented': 2 };
          return availabilityOrder[a.availability as keyof typeof availabilityOrder] - 
                 availabilityOrder[b.availability as keyof typeof availabilityOrder];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedAvailability, priceRange, locationFilter, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedAvailability('all');
    setPriceRange('all');
    setLocationFilter('all');
    setSortBy('name');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedAvailability !== 'all' || 
                          priceRange !== 'all' || locationFilter !== 'all' || sortBy !== 'name';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Equipment Rental</h1>
        <p className="text-gray-600">Find and rent agricultural equipment from trusted providers</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search equipment by name, brand, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {rentalEquipmentCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Daily Rate</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $300</option>
              <option value="medium">$300 - $600</option>
              <option value="high">Over $600</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Owner Rating</option>
              <option value="availability">Availability</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex items-end">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Showing {filteredEquipment.length} of {rentalEquipment.length} rental equipment
          {searchQuery && (
            <span> for "{searchQuery}"</span>
          )}
        </div>
        
        {/* Quick Stats */}
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span>Available: {rentalEquipment.filter(e => e.availability === 'Available').length}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            <span>Rented: {rentalEquipment.filter(e => e.availability === 'Rented').length}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
            <span>Maintenance: {rentalEquipment.filter(e => e.availability === 'Maintenance').length}</span>
          </div>
        </div>
      </div>

      {/* Equipment Grid */}
      <section id="rental-equipment-catalog">
        <RentalEquipmentGrid equipment={filteredEquipment} />
      </section>

      <section id="rental-guide" className="mt-12 prose prose-green max-w-none">
        <h2 className="text-2xl font-semibold">Rental Guide: Selecting and Using Hired Equipment</h2>
        <p>
          Renting agricultural machines is ideal for short, weather‑critical windows or specialized tasks. Focus on availability, transport,
          and on‑site support. The following guidance helps reduce operational risk and ensures you meet agronomic targets without unnecessary cost.
        </p>
        <h3 className="text-xl font-semibold">Choosing the Right Rental</h3>
        <ul className="list-disc ml-6">
          <li>Match implement width and required PTO/hydraulic specs to your tractor.</li>
          <li>Check boom stability for sprayers and section control for precision application.</li>
          <li>For tillage, confirm working depth consistency and transport safety requirements.</li>
          <li>Confirm tire type or track configuration to protect soil under current moisture.</li>
        </ul>
        <h3 className="text-xl font-semibold">Logistics & Support</h3>
        <ul className="list-disc ml-6">
          <li>Delivery lead time and road permits if applicable; verify insurance coverage.</li>
          <li>Operator training or handover checklist; request quick‑start settings per crop.</li>
          <li>Service plan during rental: contact window, spare parts availability, and SLA.</li>
          <li>Fuel, cleaning, and return condition policy; document photos before and after.</li>
        </ul>
        <h3 className="text-xl font-semibold">Cost Control</h3>
        <p>
          Compare daily rate versus productivity per hour. Include transport, setup, cleaning, and potential downtime in your budget. For long 
          rentals, ask for weekly caps and maintenance inclusions. Keep a log of field hours, fuel, and acres covered for future decisions.
        </p>
      </section>

      <section id="rental-checklist" className="mt-8 prose prose-green max-w-none">
        <h2 className="text-2xl font-semibold">Rental Checklist (Before Delivery)</h2>
        <ol className="list-decimal ml-6">
          <li>Confirm model, header/implement size, and required specs match your tractor.</li>
          <li>Schedule delivery and ensure access; prep fuel and storage area.</li>
          <li>Agree on contact for breakdowns and expected response time.</li>
          <li>Record initial condition with photos; note tire pressures and settings.</li>
          <li>Collect operating manual or quick‑start sheet for the specific model.</li>
        </ol>
      </section>
    </div>
  );
};

export default RentalEquipmentPage;