
import React from 'react';
import { Button } from "@/components/ui/button";

const FreeTrial = () => {
  return (
    <section id="free-trial" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Experimente o Sistema Golden gratuitamente!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Teste todos os recursos premium por 7 dias sem compromisso e descubra como o Sistema Golden pode transformar o atendimento da sua empresa.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6 h-auto"
            onClick={() => window.open('https://appgold.suamarca.pro/signup', '_blank')}
          >
            Iniciar teste gratuito
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto"
            onClick={() => {
              const contactSection = document.getElementById('contato');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Falar com um consultor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
