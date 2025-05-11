
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "SimCity OS has transformed how we manage our apartment complexes. The predictive maintenance alone has saved us thousands in preventative repairs.",
      author: "Sarah Johnson",
      role: "Property Manager",
      company: "Urban Living Properties"
    },
    {
      quote: "As a building owner, I can now track performance across my entire portfolio from one dashboard. The utility optimization suggestions have reduced our operating costs by 15%.",
      author: "Michael Chen",
      role: "Real Estate Investor",
      company: "MCG Holdings"
    },
    {
      quote: "The tenant portal has dramatically improved our resident satisfaction scores. Service requests are handled faster, and the communication tools keep everyone informed.",
      author: "Alejandra Rodriguez",
      role: "Community Manager",
      company: "Sunset Apartments"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    // Reset animation state after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    // Auto advance testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-simcity-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Trusted by Property Professionals</h2>
          <p className="text-lg text-gray-600">
            Hear what our customers have to say about SimCity Reality OS
          </p>
        </div>
        
        <div className="relative py-10">
          <div className="h-64 md:h-56 overflow-hidden relative">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`absolute w-full transform transition-all duration-500 ease-in-out p-6 md:p-8 ${
                  index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-simcity-200 rounded-full h-12 w-12 flex items-center justify-center text-simcity-700 font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-simcity-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
