
import React from 'react';
import { Building, Wrench, Home, Users, ChartBar, MapPin } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 card-gradient-hover">
    <div className="bg-simcity-50 p-3 rounded-lg inline-block mb-4 text-simcity-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Unit Manager",
      description: "Interactive floor plans and comprehensive unit health monitoring with real-time status updates."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Predictive Maintenance",
      description: "AI-driven issue detection to identify and address maintenance needs before they become problems."
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      title: "Utility AI",
      description: "Smart utility monitoring with usage patterns and optimization suggestions for cost reduction."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Tenant Portals",
      description: "Custom tenant interfaces for service requests, billing, and community engagement."
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Smart Building Integration",
      description: "Connect with IoT devices and smart building systems for enhanced control and efficiency."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Simulation Engine",
      description: "Model different scenarios to optimize building operations, rents and maintenance schedules."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powerful Features for Modern Properties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you manage properties more effectively,
            reduce costs, and create exceptional living experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
