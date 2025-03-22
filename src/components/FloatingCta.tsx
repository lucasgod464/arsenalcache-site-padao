
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5512981156856"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-xl transition-all duration-300 z-50 border-4 border-white hover:scale-110 pulse-animation group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-10 h-10" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">1</span>
      <span className="absolute whitespace-nowrap right-0 translate-x-full bg-white text-green-600 py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 ml-3 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
          box-shadow: 0 0 0 rgba(0, 230, 64, 0.6);
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 230, 64, 0.6);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(0, 230, 64, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 230, 64, 0);
          }
        }
      `}</style>
    </a>
  );
};

export default FloatingCta;
