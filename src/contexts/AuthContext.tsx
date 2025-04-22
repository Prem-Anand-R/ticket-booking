
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface User {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  country: string;
}

interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  signup: (userData: User, password: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { toast } = useToast();

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    
    if (storedUser && storedLoginStatus === 'true') {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData: User) => {
    // In a real app, this would validate against a backend
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = storedUsers.find((u: User) => u.email === userData.email);
    
    if (matchedUser) {
      setUser(matchedUser);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(matchedUser));
      localStorage.setItem('isLoggedIn', 'true');
      toast({
        title: "Login successful",
        description: `Welcome back, ${matchedUser.fullName}!`,
      });
      return true;
    } else {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
      });
      return false;
    }
  };

  const signup = (userData: User, password: string) => {
    // In a real app, this would send data to a backend
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = storedUsers.find((u: User) => u.email === userData.email);
    
    if (existingUser) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "Email already exists. Please use a different email.",
      });
      return false;
    }
    
    const newUser = { ...userData, password };
    const updatedUsers = [...storedUsers, newUser];
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    
    toast({
      title: "Signup successful",
      description: `Welcome, ${userData.fullName}!`,
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', 'false');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
