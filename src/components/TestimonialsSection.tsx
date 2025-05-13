
import React from 'react';
import { Star } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Agência de Marketing",
    image: "https://placehold.co/100/333/FFF?text=RA",
    quote: "O MultiAtendimento da Arsenal Cache transformou completamente a maneira como gerenciamos a comunicação com nossos clientes. Além disso, a possibilidade de revenda tem sido incrível para nosso negócio."
  },
  {
    name: "Juliana Santos",
    role: "Consultoria Empresarial",
    image: "https://placehold.co/100/333/FFF?text=JS",
    quote: "A personalização do sistema com nossa marca foi o diferencial para impressionar nossos clientes. O suporte é excelente e a plataforma extremamente estável."
  },
  {
    name: "Marcos Oliveira",
    role: "E-commerce",
    image: "https://placehold.co/100/333/FFF?text=MO",
    quote: "Conseguimos reduzir o tempo de resposta para nossos clientes em 70% com o sistema. O investimento único sem mensalidades também foi decisivo para nossa escolha."
  },
  {
    name: "Ana Ferreira",
    role: "Agência de Publicidade",
    image: "https://placehold.co/100/333/FFF?text=AF",
    quote: "O Arsenal Cache revolucionou nosso atendimento ao cliente. Nossos tempos de resposta diminuíram e a satisfação dos clientes aumentou significativamente."
  },
  {
    name: "Carlos Mendes",
    role: "Consultoria Financeira",
    image: "https://placehold.co/100/333/FFF?text=CM",
    quote: "A flexibilidade do sistema para adaptação às nossas necessidades foi surpreendente. Conseguimos personalizar tudo conforme nosso fluxo de trabalho."
  },
  {
    name: "Patrícia Sousa",
    role: "Varejo Online",
    image: "https://placehold.co/100/333/FFF?text=PS",
    quote: "O melhor investimento que fizemos para melhorar nosso SAC. A automação de respostas para perguntas frequentes liberou nossa equipe para casos mais complexos."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-arsenal-light/20 text-arsenal-dark text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="section-title">O que nossos <span className="text-gradient">clientes dizem</span></h2>
          <p className="section-subtitle">
            Confira as experiências de quem já está utilizando o MultiAtendimento da Arsenal Cache.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className="feature-card fade-in-section flex flex-col h-full p-6" style={{transitionDelay: `${index * 100}ms`}}>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center mt-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:-left-16 hidden sm:flex" />
            <CarouselNext className="lg:-right-16 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
