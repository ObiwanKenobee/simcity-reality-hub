
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DemoConfirmation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-center mb-2">Demo Request Received</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Thank you for your interest in SimCity OS! Our team will review your request 
              and contact you soon to schedule a personalized demo.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
              <div className="flex items-center justify-center text-simcity-700 mb-2">
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">What happens next?</span>
              </div>
              <ol className="list-decimal text-left pl-5 text-sm text-gray-600 space-y-1">
                <li>A member of our team will contact you within 1 business day</li>
                <li>We'll schedule a personalized demo based on your needs</li>
                <li>Our experts will walk you through the platform features</li>
                <li>We'll help you get started with the right plan</li>
              </ol>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button asChild className="w-full bg-simcity-600 hover:bg-simcity-700">
                <Link to="/features">Explore Features</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Return to Homepage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default DemoConfirmation;
