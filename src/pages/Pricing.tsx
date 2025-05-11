
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestForm from '@/components/DemoRequestForm';
import PaystackCheckout from '@/components/PaystackCheckout';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonAction: () => void;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText,
  buttonAction
}) => {
  return (
    <div className={`flex flex-col p-6 rounded-2xl ${highlighted ? 'bg-gradient-to-br from-simcity-700 to-simcity-900 text-white border-2 border-teal-400 shadow-xl transform scale-105' : 'bg-white border border-gray-200'}`}>
      <div>
        <h3 className={`text-2xl font-bold ${highlighted ? 'text-teal-400' : 'text-simcity-900'}`}>{name}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <div className="mt-4">
          <span className={`text-3xl font-bold ${highlighted ? 'text-white' : 'text-simcity-900'}`}>${price}</span>
          <span className={`text-sm ${highlighted ? 'text-gray-300' : 'text-gray-500'}`}>/month</span>
        </div>
      </div>
      
      <div className="mt-6 mb-6 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckIcon className={`h-5 w-5 mr-2 flex-shrink-0 ${highlighted ? 'text-teal-400' : 'text-teal-500'}`} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={`w-full ${highlighted ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'bg-simcity-600 hover:bg-simcity-700 text-white'}`} 
        onClick={buttonAction}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing: React.FC = () => {
  // State for handling modal visibility
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoFormPlan, setDemoFormPlan] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  
  // State for handling Paystack checkout
  const [showPaystack, setShowPaystack] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'enterprise'>('starter');
  const [selectedAmount, setSelectedAmount] = useState(0);
  
  // Handler for opening the demo request form
  const handleRequestDemo = (plan: 'starter' | 'growth' | 'enterprise') => {
    setDemoFormPlan(plan);
    setShowDemoForm(true);
  };
  
  // Handler for starting the checkout process
  const handleCheckout = (plan: 'starter' | 'growth' | 'enterprise', amount: number) => {
    setSelectedPlan(plan);
    setSelectedAmount(amount);
    setShowPaystack(true);
  };
  
  // Pricing tiers configuration
  const pricingTiers = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small properties with up to 20 units',
      features: [
        'Basic unit manager',
        'Tenant portal',
        'Maintenance scheduling',
        'Up to 3 team members',
        'Standard support'
      ],
      buttonText: 'Start with Starter',
      buttonAction: () => handleCheckout('starter', 49)
    },
    {
      name: 'Growth',
      price: '399',
      description: 'Ideal for mid-sized properties with 20-500 units',
      features: [
        'Everything in Starter',
        'Predictive maintenance',
        'AI-driven alerts',
        'Energy usage analytics',
        'Up to 10 team members',
        'Priority support'
      ],
      highlighted: true,
      buttonText: 'Request Demo',
      buttonAction: () => handleRequestDemo('growth')
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large portfolios with 500+ units or smart cities',
      features: [
        'Everything in Growth',
        'Full API access',
        'Simulation engine',
        'Custom integrations',
        'Unlimited team members',
        'Dedicated support'
      ],
      buttonText: 'Contact Sales',
      buttonAction: () => handleRequestDemo('enterprise')
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing for Every Property</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your property portfolio, with features that scale as you grow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, i) => (
                <PricingTier
                  key={i}
                  name={tier.name}
                  price={tier.price}
                  description={tier.description}
                  features={tier.features}
                  highlighted={tier.highlighted}
                  buttonText={tier.buttonText}
                  buttonAction={tier.buttonAction}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
              <p className="text-gray-600 mb-6">
                We offer tailored plans for unique property management needs.
              </p>
              <Button variant="outline" size="lg" onClick={() => handleRequestDemo('enterprise')}>
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Demo Request Form Dialog */}
      <DemoRequestForm 
        isOpen={showDemoForm} 
        onClose={() => setShowDemoForm(false)} 
        planType={demoFormPlan}
      />
      
      {/* Paystack Checkout */}
      <PaystackCheckout
        plan={selectedPlan}
        amount={selectedAmount}
        isOpen={showPaystack}
        onClose={() => setShowPaystack(false)}
      />
    </div>
  );
};

export default Pricing;
