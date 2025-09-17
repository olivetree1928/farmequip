import React from 'react';
import { Search, Menu } from 'lucide-react';
import GoogleAnalytics from './GoogleAnalytics';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <>
      {/* Google Analytics - 全站统计 */}
      <GoogleAnalytics />
      
      <header className="bg-white shadow-lg border-b-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">US</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">US AgriTech Database</h1>
              <p className="text-sm text-gray-600">Professional Agricultural Equipment Specifications Platform</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition-all duration-200"
                placeholder="Search agricultural equipment..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          <button className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;