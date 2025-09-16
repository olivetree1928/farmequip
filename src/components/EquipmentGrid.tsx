import React from 'react';
import EquipmentCard from './EquipmentCard';
import { Equipment } from '../types/equipment';

interface EquipmentGridProps {
  equipment: Equipment[];
}

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ equipment }) => {
  if (equipment.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">🌾</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Equipment Found</h3>
        <p className="text-gray-600">Try different search terms or select a different category</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Equipment Catalog <span className="text-green-600">({equipment.length} units)</span>
        </h2>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Sort by Price</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <EquipmentCard key={item.id} equipment={item} />
        ))}
      </div>
    </div>
  );
};

export default EquipmentGrid;