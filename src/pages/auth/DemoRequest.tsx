
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Building, ArrowRight, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

type FormStep = 1 | 2 | 3 | 4;

const propertyTypes = [
  "Apartment Building",
  "Condominium",
  "Office Building",
  "Mixed-Use Development",
  "Single-Family Homes",
  "Student Housing",
  "Senior Living",
  "Hotel/Resort",
  "Government/Municipal",
  "Other"
];

const businessGoals = [
  "Reduce maintenance costs",
  "Improve tenant satisfaction",
  "Optimize utility usage",
  "Automate operations",
  "Predictive maintenance",
  "Better analytics and reporting",
  "Compliance management",
  "Smart building integration"
];

const DemoRequest: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    propertyType: '',
    numberOfUnits: '',
    businessGoals: [] as string[],
    email: '',
    phone: '',
    message: '',
    marketingConsent: false
  });
  
  const updateFormData = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const toggleBusinessGoal = (goal: string) => {
    if (formData.businessGoals.includes(goal)) {
      updateFormData('businessGoals', formData.businessGoals.filter(g => g !== goal));
    } else {
      updateFormData('businessGoals', [...formData.businessGoals, goal]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend
    
    toast({
      title: "Demo request submitted!",
      description: "We'll be in touch soon with access to your demo environment.",
    });
    
    // Redirect to thank you page after submission
    navigate('/auth/demo-confirmation');
  };
  
  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim() !== '' && formData.organizationName.trim() !== '';
      case 2:
        return formData.propertyType && formData.numberOfUnits;
      case 3:
        return formData.businessGoals.length > 0;
      case 4:
        return formData.email.trim() !== '';
      default:
        return false;
    }
  };
  
  const goToNextStep = () => {
    if (currentStep < 4 && canProceedToNextStep()) {
      setCurrentStep((currentStep + 1) as FormStep);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as FormStep);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex justify-center p-4">
        <Link to="/" className="flex items-center">
          <Building className="h-8 w-8 text-simcity-600" />
          <span className="ml-2 text-xl font-semibold text-simcity-900">SimCity OS</span>
        </Link>
      </div>
      
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-3xl shadow-lg">
          <CardContent className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step} 
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      step < currentStep 
                        ? 'bg-teal-500 text-white' 
                        : step === currentStep 
                        ? 'bg-simcity-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step < currentStep ? <Check className="w-4 h-4" /> : step}
                  </div>
                ))}
              </div>
              <div className="h-1 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-simcity-600 rounded-full transition-all" 
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-simcity-900">About You</h2>
                  <p className="text-gray-600">Let's start with some basic information</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input 
                        id="fullName" 
                        value={formData.fullName} 
                        onChange={(e) => updateFormData('fullName', e.target.value)} 
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                      <Input 
                        id="orgName" 
                        value={formData.organizationName} 
                        onChange={(e) => updateFormData('organizationName', e.target.value)} 
                        placeholder="Your company or organization" 
                        required 
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Property Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-simcity-900">Your Property</h2>
                  <p className="text-gray-600">Tell us about the property you manage</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                      <select 
                        id="propertyType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.propertyType}
                        onChange={(e) => updateFormData('propertyType', e.target.value)}
                        required
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">Number of Units</label>
                      <select
                        id="units"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.numberOfUnits}
                        onChange={(e) => updateFormData('numberOfUnits', e.target.value)}
                        required
                      >
                        <option value="">Select number of units</option>
                        <option value="1-20">1-20 units</option>
                        <option value="21-50">21-50 units</option>
                        <option value="51-100">51-100 units</option>
                        <option value="101-500">101-500 units</option>
                        <option value="501-1000">501-1000 units</option>
                        <option value="1000+">1000+ units</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Business Goals */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-simcity-900">Your Goals</h2>
                  <p className="text-gray-600">What are you looking to achieve with SimCity OS?</p>
                  
                  <div className="space-y-2">
                    {businessGoals.map((goal) => (
                      <div key={goal} className="flex items-center space-x-3">
                        <Checkbox 
                          id={`goal-${goal}`} 
                          checked={formData.businessGoals.includes(goal)} 
                          onCheckedChange={() => toggleBusinessGoal(goal)}
                        />
                        <label htmlFor={`goal-${goal}`} className="text-sm font-medium text-gray-700 cursor-pointer">{goal}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Step 4: Contact Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-simcity-900">One Last Step</h2>
                  <p className="text-gray-600">How should we contact you?</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => updateFormData('email', e.target.value)} 
                        placeholder="you@example.com" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => updateFormData('phone', e.target.value)} 
                        placeholder="(123) 456-7890" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Comments (Optional)</label>
                      <Textarea 
                        id="message" 
                        value={formData.message} 
                        onChange={(e) => updateFormData('message', e.target.value)} 
                        placeholder="Tell us more about your specific needs..." 
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-3 pt-4">
                      <Checkbox 
                        id="consent" 
                        checked={formData.marketingConsent} 
                        onCheckedChange={(checked) => updateFormData('marketingConsent', checked)}
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive information about SimCity OS products, services, and events.
                      </label>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={goToPreviousStep}
                  >
                    Back
                  </Button>
                ) : <div></div>}
                
                {currentStep < 4 ? (
                  <Button 
                    type="button" 
                    onClick={goToNextStep}
                    disabled={!canProceedToNextStep()}
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="bg-simcity-600 hover:bg-simcity-700"
                  >
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DemoRequest;
