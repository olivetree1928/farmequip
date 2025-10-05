import React, { useState } from 'react';
import { UsedEquipment } from '../types/equipment';
import { Calendar, Clock, MapPin, User, Phone, Mail, Star, FileText } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface UsedEquipmentCardProps {
  equipment: UsedEquipment;
}

const UsedEquipmentCard: React.FC<UsedEquipmentCardProps> = ({ equipment }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-blue-600 bg-blue-100';
      case 'Fair': return 'text-yellow-600 bg-yellow-100';
      case 'Poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConditionStars = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 5;
      case 'Good': return 4;
      case 'Fair': return 3;
      case 'Poor': return 2;
      default: return 1;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-64 bg-gray-200">
        {!imageError ? (
          <OptimizedImage
            src={equipment.image}
            alt={equipment.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🚜</div>
              <p>Image not available</p>
            </div>
          </div>
        )}
        
        {/* Condition Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getConditionColor(equipment.condition)}`}>
          {equipment.condition}
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {equipment.year}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{equipment.name}</h3>
          <p className="text-gray-600 text-sm">{equipment.brand}</p>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{equipment.hours.toLocaleString()} hrs</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{equipment.location}</span>
          </div>
        </div>

        {/* Condition Stars */}
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 mr-2">Condition:</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < getConditionStars(equipment.condition)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-green-600">{equipment.currentPrice}</span>
              <span className="text-sm text-gray-500 line-through ml-2">{equipment.originalPrice}</span>
            </div>
            <div className="text-sm text-gray-600">
              Savings: {Math.round((1 - parseInt(equipment.currentPrice.replace(/[^0-9]/g, '')) / parseInt(equipment.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="border-t pt-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-sm font-semibold">{equipment.seller.name}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${
              equipment.seller.type === 'Dealer' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {equipment.seller.type}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Phone className="w-4 h-4 mr-2" />
            <span>{equipment.seller.phone}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>{equipment.seller.email}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{equipment.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
            Contact Seller
          </button>
        </div>
      </div>

      {/* Detailed Information */}
      {showDetails && (
        <div className="border-t bg-gray-50 p-6">
          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Star className="w-4 h-4 mr-2" />
              Key Features
            </h4>
            <ul className="space-y-1">
              {equipment.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Parameters */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Technical Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.entries(equipment.parameters).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-gray-600">{key}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inspection Report */}
          {equipment.inspectionReport && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Inspection Report
              </h4>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Inspected on {equipment.inspectionReport.date}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">Inspector: {equipment.inspectionReport.inspector}</p>
                <ul className="space-y-1">
                  {equipment.inspectionReport.notes.map((note, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UsedEquipmentCard;