import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Equipment } from '../types/equipment';
import ImageModal from './ImageModal';
import OptimizedImage from './OptimizedImage';
import { trackEquipmentClick, trackImageView, trackTechnicalAnalysis } from '../utils/analytics';

interface EquipmentCardProps {
  equipment: Equipment;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  const [expanded, setExpanded] = useState(false);
  const [technicalExpanded, setTechnicalExpanded] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  // 处理图片点击统计
  const handleImageClick = () => {
    trackImageView(equipment.name, equipment.category);
    setImageModalOpen(true);
  };

  // 处理技术分析展开/折叠统计
  const handleTechnicalToggle = () => {
    const newExpanded = !technicalExpanded;
    setTechnicalExpanded(newExpanded);
    trackTechnicalAnalysis(equipment.name, newExpanded);
  };

  return (
    <>
      <div className="equipment-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="card-image-container relative">
          <OptimizedImage
            src={equipment.image}
            alt={equipment.name}
            className="w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
            onClick={handleImageClick}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all cursor-pointer flex items-center justify-center"
               onClick={handleImageClick}>
            <div className="opacity-0 hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-2">
              <span className="text-gray-700 text-sm font-medium">Click to enlarge</span>
            </div>
          </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {equipment.brand}
          </span>
        </div>
        {equipment.price && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
              {equipment.price}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{equipment.name}</h3>
          <button className="text-green-600 hover:text-green-700 p-1">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {equipment.description}
        </p>

        {/* Company Information Section - Above Technical Analysis */}
        {Object.entries(equipment.parameters).some(([key]) => key.startsWith('Company')) && (
          <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              Company Information
            </h4>
            <div className="space-y-2">
              {Object.entries(equipment.parameters)
                .filter(([key]) => key.startsWith('Company'))
                .map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1">
                  <span className="text-xs font-medium text-green-700 uppercase tracking-wide">
                    {key.replace('Company ', '')}
                  </span>
                  <span className="text-sm text-green-900 font-semibold mt-1 sm:mt-0 break-words">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {equipment.technicalAnalysis && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <button
              onClick={handleTechnicalToggle}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="text-sm font-semibold text-blue-800">{equipment.technicalAnalysis.title}</h4>
              {technicalExpanded ? (
                <ChevronUp className="w-4 h-4 text-blue-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-blue-600" />
              )}
            </button>
            {technicalExpanded && (
              <div className="text-xs text-blue-700 space-y-1 mt-2">
                {equipment.technicalAnalysis.features.map((feature, index) => (
                  <p key={index}>• {feature}</p>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="space-y-2">
          {Object.entries(equipment.parameters)
            .filter(([key]) => !key.startsWith('Company'))
            .slice(0, expanded ? undefined : 3)
            .map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
              <span className="text-sm font-medium text-gray-700">{key}</span>
              <span className="text-sm text-gray-900 font-semibold">{value}</span>
            </div>
          ))}
        </div>



        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
        >
          <span className="text-sm font-medium text-green-700">
            {expanded ? 'Show Less' : 'View More Specifications'}
          </span>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-green-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-green-600" />
          )}
        </button>
      </div>
      </div>
      
      <ImageModal
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        imageSrc={equipment.image}
        imageAlt={equipment.name}
        equipmentName={equipment.name}
      />
    </>
  );
};

export default EquipmentCard;