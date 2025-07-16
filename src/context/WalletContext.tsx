import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  balance: number;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  updateBalance: (amount: number) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState(1.0); // Default 1 ETH
  const { toast } = useToast();

  useEffect(() => {
    // Check if wallet was previously connected
    const savedAddress = localStorage.getItem('walletAddress');
    const savedBalance = localStorage.getItem('walletBalance');
    
    if (savedAddress) {
      setIsConnected(true);
      setAddress(savedAddress);
      setBalance(savedBalance ? parseFloat(savedBalance) : 1.0);
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Simulate wallet connection
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      
      setIsConnected(true);
      setAddress(mockAddress);
      
      // Save to localStorage
      localStorage.setItem('walletAddress', mockAddress);
      localStorage.setItem('walletBalance', balance.toString());
      
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to your wallet",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    setBalance(1.0);
    
    // Clear localStorage
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletBalance');
    
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  const updateBalance = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(Math.max(0, newBalance)); // Ensure balance doesn't go negative
    localStorage.setItem('walletBalance', newBalance.toString());
  };

  return (
    <WalletContext.Provider value={{
      isConnected,
      address,
      balance,
      connectWallet,
      disconnectWallet,
      updateBalance,
    }}>
      {children}
    </WalletContext.Provider>
  );
};