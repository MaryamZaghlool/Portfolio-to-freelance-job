"use client"
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">תסנים מוחמד</h1>
          </div>

          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">בית</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">אודותי</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors md:mx-8">שירותים</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">המלצות</a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">בית</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">אודותי</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">שירותים</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">המלצות</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;