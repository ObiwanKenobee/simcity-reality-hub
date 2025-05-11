
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The <span className="text-teal-400">Operating System</span> for Living Spaces
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Transform property management with AI-driven insights. Predict maintenance needs, 
              optimize utility usage, and enhance tenant experiences in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
                <Link to="/auth/demo">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/auth/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-simcity-600/20 rounded-lg blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-xl">
                <div className="aspect-video bg-gray-800 rounded-md mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-simcity-800 to-simcity-950 flex items-center justify-center">
                    <div className="text-white/70 text-sm">Dashboard Preview</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-3 bg-white/20 rounded-full"></div>
                  <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
                  <div className="h-3 bg-white/20 rounded-full w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {['Property Owners', 'Building Managers', 'Maintenance Teams', 'Tenants'].map((role, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-3 mb-3">
                <div className="bg-white/20 rounded-full h-8 w-8"></div>
              </div>
              <div className="font-medium">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
