
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCta = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o MultiAtendimento da Arsenal Cache."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-whatsapp-DEFAULT hover:bg-whatsapp-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-pulse-soft"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingCta;
