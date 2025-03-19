
import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-white">
                Arsenal<span className="text-whatsapp-DEFAULT">Cache</span>
              </h2>
              <p className="mt-4">Sistema profissional de multiatendimento para WhatsApp com infinitas possibilidades.</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-arsenal-DEFAULT transition-colors">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-arsenal-DEFAULT transition-colors">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-arsenal-DEFAULT transition-colors">
                <i className="fab fa-youtube text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-whatsapp-DEFAULT transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  Planos e Preços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('funcionalidades')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Planos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  White Label Básico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  White Label Premium
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  Conexões Adicionais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="hover:text-arsenal-light transition-colors"
                >
                  Renovação Anual
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-arsenal-light mt-1 flex-shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-arsenal-light mt-1 flex-shrink-0" />
                <span>contato@arsenalcache.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-arsenal-light mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {new Date().getFullYear()} Arsenal Cache. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
