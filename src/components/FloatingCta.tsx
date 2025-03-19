
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <a
      href="https://wa.me/5512981156856?text=Olá! Gostaria de saber mais sobre o Sistema Golden."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-600 hover:bg-green-700 text-white p-5 rounded-full shadow-xl transition-all duration-300 z-50 border-4 border-white hover:scale-110 animate-pulse-soft group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-10 h-10" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">1</span>
      <span className="absolute whitespace-nowrap right-0 translate-x-full bg-white text-green-600 py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 ml-3 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
};

export default FloatingCta;
