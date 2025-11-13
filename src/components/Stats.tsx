import React from 'react';
import { TrendingUp, Users, Shield, Award } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '500+',
      label: 'Equipment Models',
      color: 'text-green-600',
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Professional Users',
      color: 'text-blue-600',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Data Accuracy',
      color: 'text-purple-600',
    },
    {
      icon: Award,
      value: '24/7',
      label: 'Technical Support',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 mb-8 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Professional Agricultural Equipment Database</h2>
          <p className="text-green-100 max-w-3xl mx-auto leading-relaxed">
            <span className="block sm:inline">Comprehensive, accurate technical specifications for U.S. agricultural equipment</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">Empowering modern, data‑driven farming operations</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4" aria-label="Key features">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Verified specs</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Comparison & guidance</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Used & rental listings</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-green-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;