
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o MultiAtendimento da Arsenal Cache."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-600 hover:bg-green-700 text-white p-5 rounded-full shadow-lg transition-all duration-300 z-50 border-4 border-white hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default FloatingCta;
