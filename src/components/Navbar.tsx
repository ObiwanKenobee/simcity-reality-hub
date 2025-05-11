
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Building, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Building className="h-8 w-8 text-simcity-600" />
              <span className="ml-2 text-xl font-semibold text-simcity-900">SimCity OS</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-4">
              <Link to="/features" className={`px-3 py-2 text-sm font-medium ${isActive('/features') ? 'text-simcity-600 border-b-2 border-simcity-600' : 'text-gray-600 hover:text-simcity-600'} transition`}>
                Features
              </Link>
              <Link to="/pricing" className={`px-3 py-2 text-sm font-medium ${isActive('/pricing') ? 'text-simcity-600 border-b-2 border-simcity-600' : 'text-gray-600 hover:text-simcity-600'} transition`}>
                Pricing
              </Link>
              <Link to="/about" className={`px-3 py-2 text-sm font-medium ${isActive('/about') ? 'text-simcity-600 border-b-2 border-simcity-600' : 'text-gray-600 hover:text-simcity-600'} transition`}>
                About
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Button variant="outline" asChild>
              <Link to="/auth/login">Sign In</Link>
            </Button>
            <Button className="bg-simcity-600 hover:bg-simcity-700" asChild>
              <Link to="/auth/demo">Request Demo</Link>
            </Button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-simcity-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-simcity-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/features" className={`block px-3 py-2 text-base font-medium ${isActive('/features') ? 'text-simcity-600 bg-simcity-50' : 'text-gray-600 hover:text-simcity-600 hover:bg-gray-50'}`}>
              Features
            </Link>
            <Link to="/pricing" className={`block px-3 py-2 text-base font-medium ${isActive('/pricing') ? 'text-simcity-600 bg-simcity-50' : 'text-gray-600 hover:text-simcity-600 hover:bg-gray-50'}`}>
              Pricing
            </Link>
            <Link to="/about" className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-simcity-600 bg-simcity-50' : 'text-gray-600 hover:text-simcity-600 hover:bg-gray-50'}`}>
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-2 px-4">
              <Button variant="outline" className="w-full justify-center" asChild>
                <Link to="/auth/login">Sign In</Link>
              </Button>
              <Button className="w-full justify-center bg-simcity-600 hover:bg-simcity-700" asChild>
                <Link to="/auth/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
