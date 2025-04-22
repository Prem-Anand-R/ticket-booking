
import React from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SeatGrid = () => {
  const { 
    selectSeat, 
    isSeatBooked, 
    isSeatSelected,
    selectedSeat,
    confirmBooking,
    cancelSelection
  } = useBooking();

  // Create a 5x5 grid of seats
  const rows = 5;
  const cols = 5;
  const seats = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const seatId = `${String.fromCharCode(65 + row)}${col + 1}`;
      seats.push({ id: seatId, row: String.fromCharCode(65 + row), col: col + 1 });
    }
  }

  const getSeatClass = (seatId: string) => {
    if (isSeatBooked(seatId)) {
      return 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300';
    }
    if (isSeatSelected(seatId)) {
      return 'bg-blue-500 text-white hover:bg-blue-600 ring-2 ring-blue-300';
    }
    return 'bg-white border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300';
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Row labels */}
      <div className="grid grid-cols-[30px_repeat(5,1fr)] gap-2">
        <div className="text-gray-400 font-medium"></div>
        {Array.from({ length: cols }, (_, i) => (
          <div key={i} className="text-center text-gray-400 font-medium">{i + 1}</div>
        ))}
      </div>

      {/* Seat grid with row labels */}
      <div className="grid grid-cols-[30px_repeat(5,1fr)] gap-2">
        {Array.from({ length: rows }, (_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="flex items-center justify-center text-gray-400 font-medium">
              {String.fromCharCode(65 + rowIndex)}
            </div>
            {Array.from({ length: cols }, (_, colIndex) => {
              const seatId = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
              return (
                <TooltipProvider key={`${rowIndex}-${colIndex}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={() => !isSeatBooked(seatId) && selectSeat(seatId)}
                        className={`h-12 rounded-lg flex items-center justify-center font-medium transition-all duration-200 ${getSeatClass(seatId)}`}
                        whileHover={{ scale: isSeatBooked(seatId) ? 1 : 1.05 }}
                        whileTap={{ scale: isSeatBooked(seatId) ? 1 : 0.95 }}
                        disabled={isSeatBooked(seatId)}
                      >
                        {seatId}
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isSeatBooked(seatId) ? 'Booked' : isSeatSelected(seatId) ? 'Selected' : 'Available'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 p-4 bg-white/80 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border-2 border-blue-200 rounded"></div>
          <span className="text-sm text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-600">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <span className="text-sm text-gray-600">Booked</span>
        </div>
      </div>

      {selectedSeat && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button 
            onClick={confirmBooking}
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-6"
          >
            <Check className="h-4 w-4" />
            Book Now
          </Button>
          <Button 
            variant="outline" 
            onClick={cancelSelection}
            className="border-red-200 text-red-500 hover:bg-red-50"
          >
            <X className="h-4 w-4" />
            Cancel
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default SeatGrid;
