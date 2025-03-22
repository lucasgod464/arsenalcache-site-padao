
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    
    // Only show banner if user hasn't accepted cookies yet
    if (!hasAcceptedCookies) {
      // Slight delay before showing the banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Save user preference to localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    // Hide banner
    setIsVisible(false);
    // Show confirmation toast
    toast({
      title: "Cookies aceitos",
      description: "Sua preferência foi salva. Obrigado!",
      duration: 3000,
    });
  };

  const declineCookies = () => {
    // Save user preference to localStorage (still save the choice to prevent banner from showing again)
    localStorage.setItem('cookiesAccepted', 'false');
    // Hide banner
    setIsVisible(false);
    // Show confirmation toast
    toast({
      title: "Cookies recusados",
      description: "Você pode alterar esta preferência a qualquer momento.",
      duration: 3000,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amber-50 border-t border-amber-200 p-4 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-amber-800">Nós utilizamos cookies 🍪</h3>
          <p className="text-sm text-amber-700 mt-1">
            Utilizamos cookies para melhorar sua experiência em nosso site e analisar o tráfego.
            Ao clicar em "Aceitar", você concorda com o uso de cookies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={declineCookies}
            className="border-amber-300 text-amber-800 hover:bg-amber-100 hover:text-amber-900"
          >
            Recusar
          </Button>
          <Button 
            size="sm" 
            onClick={acceptCookies}
            className="bg-amber-400 hover:bg-amber-500 text-white"
          >
            Aceitar cookies
          </Button>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-4 right-4 text-amber-700 hover:text-amber-900"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
