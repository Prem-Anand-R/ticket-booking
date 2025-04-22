
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface BookingContextProps {
  bookedSeats: string[];
  selectedSeat: string | null;
  ticketNumbers: string[];
  selectSeat: (seatId: string) => void;
  confirmBooking: () => void;
  cancelSelection: () => void;
  isSeatBooked: (seatId: string) => boolean;
  isSeatSelected: (seatId: string) => boolean;
}

const BookingContext = createContext<BookingContextProps | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookedSeats, setBookedSeats] = useState<string[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [ticketNumbers, setTicketNumbers] = useState<string[]>([]);
  const { toast } = useToast();

  // Load booked seats from localStorage on mount
  useEffect(() => {
    const storedBookedSeats = localStorage.getItem('bookedSeats');
    if (storedBookedSeats) {
      setBookedSeats(JSON.parse(storedBookedSeats));
    }
  }, []);

  // Generate random 10-digit ticket numbers
  const generateTicketNumbers = () => {
    const tickets = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(1000000000 + Math.random() * 9000000000).toString();
      tickets.push(randomNum);
    }
    return tickets;
  };

  const selectSeat = (seatId: string) => {
    if (bookedSeats.includes(seatId)) {
      toast({
        variant: "destructive",
        title: "Seat already booked",
        description: "This seat is already booked. Please select another seat.",
      });
      return;
    }

    setSelectedSeat(seatId);
    setTicketNumbers(generateTicketNumbers());
  };

  const confirmBooking = () => {
    if (!selectedSeat) return;

    const updatedBookedSeats = [...bookedSeats, selectedSeat];
    setBookedSeats(updatedBookedSeats);
    localStorage.setItem('bookedSeats', JSON.stringify(updatedBookedSeats));
    
    toast({
      title: "Booking confirmed",
      description: `Your seat ${selectedSeat} has been booked successfully!`,
    });
    
    setSelectedSeat(null);
    setTicketNumbers([]);
  };

  const cancelSelection = () => {
    setSelectedSeat(null);
    setTicketNumbers([]);
  };

  const isSeatBooked = (seatId: string) => {
    return bookedSeats.includes(seatId);
  };

  const isSeatSelected = (seatId: string) => {
    return selectedSeat === seatId;
  };

  return (
    <BookingContext.Provider 
      value={{ 
        bookedSeats, 
        selectedSeat, 
        ticketNumbers, 
        selectSeat, 
        confirmBooking, 
        cancelSelection, 
        isSeatBooked, 
        isSeatSelected 
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
