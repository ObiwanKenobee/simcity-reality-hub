
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TeamMember: React.FC<{ 
  name: string; 
  role: string; 
  image: string; 
  bio: string;
}> = ({ name, role, image, bio }) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow-md"
      />
      <h3 className="text-xl font-bold text-simcity-900">{name}</h3>
      <p className="text-simcity-600 mb-2">{role}</p>
      <p className="text-gray-600 text-center">{bio}</p>
    </div>
  );
};

const TimelineItem: React.FC<{ 
  year: string; 
  title: string; 
  description: string;
}> = ({ year, title, description }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="bg-simcity-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center">
          {year}
        </div>
        <div className="h-full w-0.5 bg-simcity-200"></div>
      </div>
      <div className="pb-12">
        <h3 className="text-lg font-bold text-simcity-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      bio: "Former urban planning professor with expertise in smart city technology."
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      bio: "IoT specialist with 15+ years in building automation systems."
    },
    {
      name: "Priya Sharma",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      bio: "Former property manager who led digital transformation for a REIT."
    },
    {
      name: "David Park",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      bio: "AI and ML specialist with a background in energy optimization."
    }
  ];

  const timelineItems = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to transform how buildings are managed using data and AI."
    },
    {
      year: "2019",
      title: "First Product",
      description: "Launched our energy optimization platform for commercial buildings."
    },
    {
      year: "2020",
      title: "Growth Phase",
      description: "Expanded to include predictive maintenance and tenant experience features."
    },
    {
      year: "2021",
      title: "Series A",
      description: "Secured $8M in funding to accelerate product development and market expansion."
    },
    {
      year: "2022",
      title: "Enterprise Launch",
      description: "Released our enterprise solution for large property portfolios and smart cities."
    },
    {
      year: "2023",
      title: "Going Global",
      description: "Expanded operations to Europe and Asia with localized solutions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-simcity-900 to-simcity-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We're building the operating system for the built environment, making buildings smarter, more efficient, and more responsive to the needs of their occupants.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:gap-12">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h2 className="text-3xl font-bold text-simcity-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  SimCity OS was founded by a team of urban planning experts, engineers, and property management professionals who saw an opportunity to revolutionize how buildings are managed.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  After working with dozens of property managers and city planners, we identified a common challenge: buildings generate massive amounts of data, but that data remains siloed and underutilized.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We built SimCity OS to break down these silos and transform raw building data into actionable insights that drive efficiency, sustainability, and enhanced tenant experiences.
                </p>
                <p className="text-lg text-gray-600">
                  Today, our platform powers thousands of buildings worldwide, helping property owners and managers optimize operations, reduce costs, and create better living and working environments.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbSUyMG1lZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Our team discussing building plans" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-simcity-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at SimCity OS.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-simcity-100 rounded-full flex items-center justify-center text-simcity-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-simcity-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible in building management technology, leveraging AI, IoT, and data science to solve complex problems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-simcity-100 rounded-full flex items-center justify-center text-simcity-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-simcity-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We believe that efficient buildings are sustainable buildings. Our solutions aim to reduce energy consumption, minimize waste, and lower the environmental impact of the built environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-simcity-100 rounded-full flex items-center justify-center text-simcity-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-simcity-900 mb-2">Human-Centered</h3>
                <p className="text-gray-600">
                  We design our products with people in mind—whether they're property managers, maintenance staff, or tenants—ensuring our technology enhances human experiences, not replaces them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-simcity-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bringing decades of experience in real estate technology, urban planning, and engineering.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-simcity-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to an industry leader in building operating systems.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-simcity-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Building the Future</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to optimize your property portfolio or join our growing team, we'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <Link to="/auth/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-simcity-700" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
