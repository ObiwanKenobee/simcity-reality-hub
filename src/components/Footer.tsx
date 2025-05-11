
import React from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-simcity-400" />
              <span className="ml-2 text-xl font-semibold text-white">SimCity OS</span>
            </div>
            <p className="text-sm text-gray-400">
              The operating system for modern living spaces. AI-powered property management.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="hover:text-teal-400 transition">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-teal-400 transition">Pricing</Link></li>
              <li><Link to="/integrations" className="hover:text-teal-400 transition">Integrations</Link></li>
              <li><Link to="/changelog" className="hover:text-teal-400 transition">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="hover:text-teal-400 transition">Blog</Link></li>
              <li><Link to="/docs" className="hover:text-teal-400 transition">Documentation</Link></li>
              <li><Link to="/support" className="hover:text-teal-400 transition">Support</Link></li>
              <li><Link to="/api" className="hover:text-teal-400 transition">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-teal-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400 transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
              <li><Link to="/legal" className="hover:text-teal-400 transition">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} SimCity Reality OS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-teal-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-teal-400 transition">Terms of Service</Link>
            <Link to="/cookies" className="text-sm hover:text-teal-400 transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
