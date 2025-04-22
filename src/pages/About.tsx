
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <img 
            src="https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&q=80&w=1000" 
            alt="Our team" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At TicketFlow, we're dedicated to simplifying the ticket booking experience for events of all sizes. 
              Our mission is to provide a seamless, user-friendly platform that connects people with the events they love.
            </p>
            <p className="text-gray-700">
              Founded in 2023, we've quickly grown to become a trusted name in the online ticketing industry, 
              serving thousands of customers with reliable and secure booking services.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-3">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Customer satisfaction is our top priority</li>
              <li>Transparency in all our operations</li>
              <li>Innovation in technology and user experience</li>
              <li>Reliability and security in every transaction</li>
              <li>Accessibility for all users</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-3">What Sets Us Apart</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Intuitive seat selection interface</li>
              <li>Real-time availability updates</li>
              <li>Secure and fast checkout process</li>
              <li>24/7 customer support</li>
              <li>Mobile-friendly platform</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-8">
            Our dedicated team of professionals works tirelessly to ensure that your booking experience is smooth and enjoyable. 
            With backgrounds in technology, customer service, and event management, we bring a wealth of expertise to every aspect of our service.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold">John Doe</h3>
                <p className="text-sm text-gray-500">CEO & Founder</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold">Jane Smith</h3>
                <p className="text-sm text-gray-500">CTO</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold">Robert Johnson</h3>
                <p className="text-sm text-gray-500">Head of Customer Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
