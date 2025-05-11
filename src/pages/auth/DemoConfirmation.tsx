
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex justify-center p-4">
        <Link to="/" className="flex items-center">
          <Building className="h-8 w-8 text-simcity-600" />
          <span className="ml-2 text-xl font-semibold text-simcity-900">SimCity OS</span>
        </Link>
      </div>
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-lg shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Check className="h-8 w-8 text-teal-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-simcity-900 mb-4">Demo Request Received!</h1>
            
            <p className="text-gray-600 mb-6">
              Thank you for your interest in SimCity OS. Our team will review your information and be in touch within 24 hours to schedule a personalized demo.
            </p>
            
            <div className="bg-simcity-50 border border-simcity-100 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-simcity-800 mb-2">What happens next?</h3>
              <ol className="text-left text-sm space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-simcity-200 text-simcity-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                  <span>You'll receive an email confirmation shortly</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-simcity-200 text-simcity-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                  <span>A SimCity team member will contact you to schedule your demo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-simcity-200 text-simcity-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                  <span>We'll set up a custom demo environment tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-simcity-200 text-simcity-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                  <span>You'll get access to explore the platform with your team</span>
                </li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <Button asChild className="w-full bg-simcity-600 hover:bg-simcity-700">
                <Link to="/auth/login">
                  Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/">Return to Homepage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DemoConfirmation;
