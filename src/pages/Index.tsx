
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesGrid />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
