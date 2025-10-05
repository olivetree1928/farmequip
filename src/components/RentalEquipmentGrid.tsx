import React from 'react';
import { RentalEquipment } from '../types/equipment';
import RentalEquipmentCard from './RentalEquipmentCard';

interface RentalEquipmentGridProps {
  equipment: RentalEquipment[];
}

const RentalEquipmentGrid: React.FC<RentalEquipmentGridProps> = ({ equipment }) => {
  if (equipment.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🚜</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Rental Equipment Found</h3>
        <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipment.map((item) => (
        <RentalEquipmentCard key={item.id} equipment={item} />
      ))}
    </div>
  );
};

export default RentalEquipmentGrid;