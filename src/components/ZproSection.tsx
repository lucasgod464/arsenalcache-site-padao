
import React from 'react';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ZproSection = () => {
  return (
    <section id="zpro" className="py-20 px-4 bg-[#141e47] text-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-300 text-sm font-medium mb-4">
            CONHEÇA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">O que é o ZPRO?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-blue-100 mb-6">
                Um sistema completo de chatbots, I.As, automações 
                e gestão de atendimento com multiusuários para 
                WhatsApp e vários outros canais de conversa.
              </p>
              
              <p className="text-lg text-blue-100 mb-10">
                Hospedado no seu servidor no formato white label, 
                para chamar de seu.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-blue-300">+ 31,250</div>
                  <div className="text-sm text-blue-200">Canais conectados</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-blue-300">+ 1,536</div>
                  <div className="text-sm text-blue-200">Assinantes</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-blue-300">+ 350 k</div>
                  <div className="text-sm text-blue-200">Mensagens processadas por dia</div>
                </div>
              </div>
            </div>
            
            <div>
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="w-full bg-blue-900/40 mb-6">
                  <TabsTrigger 
                    value="business" 
                    className="flex-1 data-[state=active]:bg-blue-400 data-[state=active]:text-blue-950"
                  >
                    Para o meu negócio
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reseller" 
                    className="flex-1 data-[state=active]:bg-blue-400 data-[state=active]:text-blue-950"
                  >
                    Para Revender
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="business" className="mt-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                      <span>Instalamos no seu servidor</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                      <span>Sem limite de conexões</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                      <span>Sem limite de usuários</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reseller" className="mt-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                      <span>White Label: coloque sua própria marca</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                      <span>Módulo SAAS: revenda várias instâncias</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                      <span>Integração para gestão de pagamentos</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZproSection;
