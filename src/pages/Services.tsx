
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We provide a range of services to make your ticket booking experience seamless and enjoyable.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Booking</CardTitle>
              <CardDescription>Seamless online ticket reservations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our core service allows you to book tickets for various events with an intuitive seat selection interface. 
                Choose your preferred seats, get instant confirmation, and enjoy your event worry-free.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Group Bookings</CardTitle>
              <CardDescription>Special arrangements for large groups</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Planning an outing with friends, family, or colleagues? Our group booking service ensures everyone gets 
                seats together, with special discounts for large groups.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Premium Memberships</CardTitle>
              <CardDescription>Exclusive benefits for regular customers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Join our premium membership program to enjoy benefits like priority booking, discounted tickets, 
                and special access to exclusive events throughout the year.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Event Notifications</CardTitle>
              <CardDescription>Never miss your favorite events</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Subscribe to our notification service to receive alerts about upcoming events, ticket availability, 
                and special promotions tailored to your interests.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Ticket Transfers</CardTitle>
              <CardDescription>Easily transfer tickets to friends</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Can't make it to an event? Our ticket transfer service allows you to securely transfer your tickets 
                to friends or family members with just a few clicks.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
              <CardDescription>Assistance when you need it</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our dedicated customer support team is available to assist you with any questions or issues 
                regarding your bookings, ensuring a smooth experience from start to finish.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Corporate Services</h2>
          <p className="text-gray-700 mb-8">
            We also offer specialized services for corporate clients, including bulk bookings for corporate events, 
            customized booking portals, and comprehensive event management solutions.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-left">
            <h3 className="text-xl font-bold mb-4">Why Choose Our Corporate Services?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dedicated account manager for your organization</li>
              <li>Customized booking solutions tailored to your needs</li>
              <li>Special corporate rates and flexible payment options</li>
              <li>Detailed reporting and analytics</li>
              <li>Priority customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
