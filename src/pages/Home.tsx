
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-100 to-indigo-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Book Your Tickets Easily with TicketFlow</h1>
              <p className="text-xl text-gray-700">
                Find the best seats for your favorite events with our simple booking platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <Button size="lg" className="text-base">Book Now</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-base">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560617544-b4f287789e24?auto=format&fit=crop&q=80&w=1000" 
                alt="Ticket booking" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TicketFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Easy Selection</h3>
              <p className="text-gray-700">Choose your seats with our intuitive grid view and book in seconds.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Instant Confirmation</h3>
              <p className="text-gray-700">Get your ticket numbers immediately after booking.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Secure Booking</h3>
              <p className="text-gray-700">Your information is safe with our secure login and booking system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Seat?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who book their tickets with us every day.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="text-base">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
