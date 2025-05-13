
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageSquare, Brain, Zap, LineChart, Users } from 'lucide-react';

const TransformeSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
            Potencialize seu Negócio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforme seu <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Atendimento</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubra como nossa solução de IA pode revolucionar a maneira como você se comunica com seus clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="group border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600">
              <div className="absolute inset-0 flex items-center justify-center text-white p-6">
                <MessageSquare className="w-20 h-20 opacity-30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Comunicação Instantânea</h3>
                <p className="text-purple-100 text-sm">Responda perguntas em segundos com precisão</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-8 px-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Respostas imediatas 24 horas por dia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Atendimento simultâneo a múltiplos clientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Redução de até 80% no tempo de resposta</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Card 2 */}
          <Card className="group border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600">
              <div className="absolute inset-0 flex items-center justify-center text-white p-6">
                <Brain className="w-20 h-20 opacity-30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Personalização Inteligente</h3>
                <p className="text-blue-100 text-sm">Adaptação dinâmica ao seu modelo de negócio</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-8 px-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Aprendizado contínuo da sua base de conhecimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalização de tom e estilo de comunicação</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Integração com suas ferramentas existentes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Card 3 */}
          <Card className="group border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600">
              <div className="absolute inset-0 flex items-center justify-center text-white p-6">
                <LineChart className="w-20 h-20 opacity-30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Resultados Mensuráveis</h3>
                <p className="text-amber-100 text-sm">Impacto direto em vendas e satisfação</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-8 px-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Aumento médio de 40% nas taxas de conversão</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Redução de 70% em tickets de suporte repetitivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Métricas detalhadas sobre interações dos clientes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 p-6 md:p-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Transforme dados em insights acionáveis
              </h3>
              <p className="text-purple-100 mb-6">
                Nossa tecnologia de IA não apenas responde perguntas, mas analisa padrões de comportamento dos clientes, 
                fornecendo insights valiosos para sua empresa tomar decisões estratégicas melhor fundamentadas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Zap className="h-5 w-5 text-yellow-300" />
                  <span className="text-white">Automação inteligente</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-yellow-300" />
                  <span className="text-white">Foco na experiência</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-white text-lg font-medium mb-3">Impacto nos Resultados</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-100">Satisfação do cliente</span>
                    <span className="text-white">92%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-purple-300 to-white h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-100">Aumento em vendas</span>
                    <span className="text-white">68%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-purple-300 to-white h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-100">Eficiência operacional</span>
                    <span className="text-white">78%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-purple-300 to-white h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformeSection;
