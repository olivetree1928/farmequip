import React, { useState } from 'react';
import { RentalEquipment } from '../types/equipment';
import OptimizedImage from './OptimizedImage';

interface RentalEquipmentCardProps {
  equipment: RentalEquipment;
}

const RentalEquipmentCard: React.FC<RentalEquipmentCardProps> = ({ equipment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Rented':
        return 'bg-red-100 text-red-800';
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <OptimizedImage
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(equipment.availability)}`}>
            {equipment.availability}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {equipment.name}
          </h3>
          <span className="text-sm text-gray-500 ml-2">{equipment.brand}</span>
        </div>

        <div className="mb-3">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <span className="mr-2">📍</span>
            <span>{equipment.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">🏢</span>
            <span>{equipment.owner.name}</span>
            <div className="ml-2 flex items-center">
              {renderStars(equipment.owner.rating)}
              <span className="ml-1 text-xs">({equipment.owner.rating})</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3 text-center">
          <div className="bg-gray-50 p-2 rounded">
            <div className="text-xs text-gray-500">Daily</div>
            <div className="font-semibold text-green-600">{equipment.dailyRate}</div>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <div className="text-xs text-gray-500">Weekly</div>
            <div className="font-semibold text-green-600">{equipment.weeklyRate}</div>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <div className="text-xs text-gray-500">Monthly</div>
            <div className="font-semibold text-green-600">{equipment.monthlyRate}</div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Deposit:</span>
            <span className="font-medium">{equipment.deposit}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Min Period:</span>
            <span className="font-medium">{equipment.minRentalPeriod}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {equipment.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 border-t pt-4">
            {/* Key Features */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {equipment.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Parameters */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Specifications</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(equipment.parameters).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Terms */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Rental Terms</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {equipment.rentalTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance & Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Insurance</h4>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center mb-1">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      equipment.insurance.included ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    {equipment.insurance.included ? 'Included' : 'Not Included'}
                  </div>
                  {equipment.insurance.cost && (
                    <div className="text-xs">Cost: {equipment.insurance.cost}</div>
                  )}
                  <div className="text-xs mt-1">
                    Coverage: {equipment.insurance.coverage.join(', ')}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Delivery</h4>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center mb-1">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      equipment.delivery.available ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    {equipment.delivery.available ? 'Available' : 'Not Available'}
                  </div>
                  {equipment.delivery.cost && (
                    <div className="text-xs">Cost: {equipment.delivery.cost}</div>
                  )}
                  <div className="text-xs mt-1">
                    Radius: {equipment.delivery.radius}
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Contact */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Contact Owner</h4>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{equipment.owner.name}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {equipment.owner.type}
                  </span>
                </div>
                <div className="text-gray-600 space-y-1">
                  <div>📞 {equipment.owner.phone}</div>
                  <div>✉️ {equipment.owner.email}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                disabled={equipment.availability !== 'Available'}
              >
                {equipment.availability === 'Available' ? 'Request Rental' : 'Not Available'}
              </button>
              <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm font-medium">
                Contact Owner
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentalEquipmentCard;