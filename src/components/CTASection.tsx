
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-simcity-700 to-simcity-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-8 py-16 md:px-16 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your property management?</h2>
              <p className="text-lg opacity-90">
                Join property managers nationwide who are using SimCity Reality OS to increase efficiency, 
                reduce costs, and create better experiences for residents.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </div>
    </section>
  );
};

export default CTASection;
