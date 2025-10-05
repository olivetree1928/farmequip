import React from 'react';
import { UsedEquipment } from '../types/equipment';
import UsedEquipmentCard from './UsedEquipmentCard';

interface UsedEquipmentGridProps {
  equipment: UsedEquipment[];
}

const UsedEquipmentGrid: React.FC<UsedEquipmentGridProps> = ({ equipment }) => {
  if (equipment.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Used Equipment Found</h3>
        <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipment.map((item) => (
        <UsedEquipmentCard key={item.id} equipment={item} />
      ))}
    </div>
  );
};

export default UsedEquipmentGrid;