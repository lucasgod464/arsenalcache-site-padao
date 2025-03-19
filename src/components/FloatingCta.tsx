
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o MultiAtendimento da Arsenal Cache."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 animate-pulse-soft scale-110 border-2 border-white"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingCta;
