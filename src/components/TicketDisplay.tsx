
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';

const TicketDisplay = () => {
  const { selectedSeat, ticketNumbers } = useBooking();

  if (!selectedSeat || ticketNumbers.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-white shadow-lg border-blue-100">
        <CardHeader className="pb-2 border-b border-blue-100">
          <CardTitle className="flex items-center gap-2 text-xl text-blue-600">
            <Ticket className="h-5 w-5" />
            Booking Details - Seat {selectedSeat}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-600 font-medium">Booking Code</div>
              <div className="font-mono text-xl mt-1 text-gray-700">
                {ticketNumbers[0]}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Please save this booking code for future reference.
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TicketDisplay;
