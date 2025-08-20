import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
const testimonials = [{
  name: "Ricardo Almeida",
  role: "Agência de Marketing",
  image: "https://placehold.co/100/333/FFF?text=RA",
  quote: "O MultiAtendimento da Arsenal Cache transformou completamente a maneira como gerenciamos a comunicação com nossos clientes. Além disso, a possibilidade de revenda tem sido incrível para nosso negócio."
}, {
  name: "Juliana Santos",
  role: "Consultoria Empresarial",
  image: "https://placehold.co/100/333/FFF?text=JS",
  quote: "A personalização do sistema com nossa marca foi o diferencial para impressionar nossos clientes. O suporte é excelente e a plataforma extremamente estável."
}, {
  name: "Marcos Oliveira",
  role: "E-commerce",
  image: "https://placehold.co/100/333/FFF?text=MO",
  quote: "Conseguimos reduzir o tempo de resposta para nossos clientes em 70% com o sistema. O investimento único sem mensalidades também foi decisivo para nossa escolha."
}, {
  name: "Ana Ferreira",
  role: "Agência de Publicidade",
  image: "https://placehold.co/100/333/FFF?text=AF",
  quote: "O Arsenal Cache revolucionou nosso atendimento ao cliente. Nossos tempos de resposta diminuíram e a satisfação dos clientes aumentou significativamente."
}, {
  name: "Carlos Mendes",
  role: "Consultoria Financeira",
  image: "https://placehold.co/100/333/FFF?text=CM",
  quote: "A flexibilidade do sistema para adaptação às nossas necessidades foi surpreendente. Conseguimos personalizar tudo conforme nosso fluxo de trabalho."
}, {
  name: "Patrícia Sousa",
  role: "Varejo Online",
  image: "https://placehold.co/100/333/FFF?text=PS",
  quote: "O melhor investimento que fizemos para melhorar nosso SAC. A automação de respostas para perguntas frequentes liberou nossa equipe para casos mais complexos."
}];
const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de 1.000 empresas já transformaram seu atendimento com nossas soluções
          </p>
        </div>
        
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
export default TestimonialsSection;