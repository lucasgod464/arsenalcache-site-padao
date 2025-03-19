
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Sistema Golden."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-xl transition-all duration-300 z-50 border-4 border-white hover:scale-110 animate-pulse-soft"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-10 h-10" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">1</span>
    </a>
  );
};

export default FloatingCta;
