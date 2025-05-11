
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}> = ({ title, description, icon, benefits }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="bg-simcity-50 p-3 rounded-lg mr-4 text-simcity-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-simcity-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      title: "Predictive Maintenance",
      description: "Detect issues before they become critical failures.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
      benefits: [
        "AI-powered anomaly detection for HVAC, plumbing, and electrical systems",
        "Up to 40% reduction in emergency maintenance costs",
        "Automated maintenance scheduling and technician assignment",
        "Historical maintenance data analysis for pattern recognition"
      ]
    },
    {
      title: "Energy Optimization",
      description: "Reduce utility costs while enhancing tenant comfort.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
      benefits: [
        "Real-time energy usage monitoring with detailed analytics",
        "Smart scheduling for peak demand management",
        "Integration with smart thermostats and building systems",
        "Tenant-specific energy profiles and recommendations"
      ]
    },
    {
      title: "Tenant Experience Portal",
      description: "Streamline communication and service delivery.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
      benefits: [
        "Maintenance request submission and tracking",
        "Digital lease management and renewal",
        "Community notifications and announcements",
        "Amenity booking and management"
      ]
    },
    {
      title: "Building Health Monitoring",
      description: "Ensure a safe and healthy environment for occupants.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
      benefits: [
        "Indoor air quality monitoring and alerts",
        "Water quality testing and reporting",
        "Occupancy tracking for space optimization",
        "Environmental compliance reporting"
      ]
    },
    {
      title: "Simulation Engine",
      description: "Model scenarios to make data-driven decisions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>,
      benefits: [
        "What-if analysis for property improvements",
        "ROI calculations for energy retrofits",
        "Occupancy and rental income projections",
        "Climate impact and resilience modeling"
      ]
    },
    {
      title: "Smart Security",
      description: "Protect your property with advanced security features.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      benefits: [
        "Integrated access control systems",
        "Video surveillance with AI-powered analytics",
        "Visitor management and package delivery",
        "Incident reporting and emergency response"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-simcity-900 to-simcity-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Building Features for the Modern Property</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Discover how SimCity OS transforms your buildings into intelligent, efficient, and responsive environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
                <Link to="/auth/demo">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-simcity-700 hover:bg-gray-100 border-none" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-simcity-900 mb-4">All-in-One Building Management Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive suite of tools designed to optimize building operations, reduce costs, and enhance tenant satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  benefits={feature.benefits}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h2 className="text-3xl font-bold text-simcity-900 mb-6">Seamless Integration with Your Existing Systems</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SimCity OS is designed to work with your current property management tools and building systems, minimizing disruption while maximizing value.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Compatible with major building automation systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">API connections to property management software</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">IoT device integration for real-time monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Customizable data pipelines for specific requirements</span>
                  </li>
                </ul>
                <Button className="bg-simcity-600 hover:bg-simcity-700" asChild>
                  <Link to="/auth/demo" className="inline-flex items-center">
                    Schedule Integration Consultation <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZWdyYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="System Integration" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-simcity-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your property management?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the growing network of property owners and managers who are leveraging SimCity OS to reduce costs, improve efficiency, and enhance tenant satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <Link to="/auth/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-simcity-700" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
