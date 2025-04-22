
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { BookingProvider } from '@/contexts/BookingContext';
import SeatGrid from '@/components/SeatGrid';
import TicketDisplay from '@/components/TicketDisplay';

const Booking = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: { pathname: '/booking' } } });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10 px-4">
      <BookingProvider>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Ticket Booking
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Select your preferred seat from the layout below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SeatGrid />
            </CardContent>
          </Card>
          
          <TicketDisplay />
        </div>
      </BookingProvider>
    </div>
  );
};

export default Booking;
