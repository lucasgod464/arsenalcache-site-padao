
import React from 'react';
import { Star } from 'lucide-react';

const DiamondTestimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "CEO, TechSolutions",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      stars: 5,
      content: "Estamos usando o plano de 70 conexões e a performance é impressionante. O suporte técnico é rápido e eficiente. Os softwares inclusos agregaram muito valor ao nosso atendimento."
    },
    {
      name: "Mariana Costa",
      role: "Diretora de Marketing, Nova Comunicação",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      stars: 5,
      content: "A instalação foi super tranquila e o sistema funciona perfeitamente. Nossa equipe conseguiu se adaptar rapidamente e os resultados são notáveis. Valeu muito o investimento!"
    },
    {
      name: "Carlos Oliveira",
      role: "Gerente de Atendimento, Grupo Conexão",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      stars: 5,
      content: "O plano de 130 conexões nos permitiu expandir nosso atendimento em 200%. Os softwares inclusos, especialmente o n8n e Typebot, transformaram nossa operação!"
    },
    {
      name: "Ana Paula Silva",
      role: "Proprietária, Boutique Digital",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      stars: 5,
      content: "Mesmo com o plano básico de 30 conexões, conseguimos atender todos os nossos clientes com eficiência. A mensalidade grátis no primeiro ano foi um diferencial incrível!"
    }
  ];

  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />);
    }
    return stars;
  };

  return (
    <section className="py-20 px-4 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-blue-600">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça a experiência de quem já utiliza o Sistema Diamond para potencializar o atendimento via WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 fade-in-section"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar seu atendimento via WhatsApp?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Escolha um dos nossos planos e tenha acesso a uma infraestrutura completa, com softwares premium e suporte técnico especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#planos" 
                className="bg-white text-blue-700 hover:bg-blue-50 py-3 px-8 rounded-full font-semibold transition-all duration-300"
              >
                Ver planos disponíveis
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5512981156856" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-full font-semibold transition-all duration-300"
              >
                Falar com um consultor
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default DiamondTestimonials;
