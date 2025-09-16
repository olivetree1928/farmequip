import React from 'react';
import { Category } from '../types/equipment';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Equipment Categories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-green-100 border-2 border-green-500 text-green-700'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent text-gray-600'
            }`}
          >
            <span className="text-2xl mb-2">{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
            <span className="text-xs text-gray-500 mt-1">{category.count} units</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;