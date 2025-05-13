
import React from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ConversionCta = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-tr from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Experimente a plataforma <span className="text-purple-300">sem compromisso</span>
            </h2>
            
            <p className="text-lg text-purple-100">
              Acesso imediato ao painel de testes com modelos de IA avançados por 7 dias. Veja na prática como nossa solução pode transformar seu negócio.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-purple-800/50 rounded-full p-1">
                  <Check className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-purple-100">Acesso a todos os modelos premium</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-800/50 rounded-full p-1">
                  <Check className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-purple-100">Quantidade de solicitações ilimitadas</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-800/50 rounded-full p-1">
                  <Check className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-purple-100">Integração com até 2 aplicações</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-800/50 rounded-full p-1">
                  <Check className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-purple-100">Suporte técnico durante o período de teste</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="purple" 
                size="lg" 
                className="group relative overflow-hidden"
                asChild
              >
                <a href="https://wa.me/5512981156856?text=Olá,%20gostaria%20de%20testar%20a%20plataforma%20de%20IA%20Conecta" 
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar acesso ao teste
                  <span className="absolute right-4 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 p-6 rounded-xl shadow-xl">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-700 text-purple-100 rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-100">Atendimento personalizado</h3>
                    <p className="text-purple-200 mt-1">
                      Nossa equipe vai ajudar você a configurar o ambiente ideal para as suas necessidades específicas.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-purple-700/50 my-4"></div>
                
                <div className="bg-purple-800/40 p-5 rounded-lg">
                  <h4 className="font-medium text-purple-200 mb-2">O que esperar do teste:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="min-w-5 pt-0.5"><ArrowRight className="w-4 h-4 text-purple-300" /></div>
                      <span className="text-sm">Configuração em menos de 24 horas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-5 pt-0.5"><ArrowRight className="w-4 h-4 text-purple-300" /></div>
                      <span className="text-sm">Tutoria de uso da plataforma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-5 pt-0.5"><ArrowRight className="w-4 h-4 text-purple-300" /></div>
                      <span className="text-sm">Suporte técnico durante todo o período de teste</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center pt-2">
                  <p className="text-sm text-purple-300">
                    "Nossa equipe de suporte está pronta para ajudar você a explorar todo o potencial da nossa plataforma de IA"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionCta;
