
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, MessageCircle, Users, Tag, Rocket, Trophy } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const features = [
    { name: "Usuários ilimitados", arsenalHas: true, competitorAHas: false, competitorBHas: false },
    { name: "Conexões ilimitadas", arsenalHas: true, competitorAHas: false, competitorBHas: false },
    { name: "Sistema Whitelabel", arsenalHas: true, competitorAHas: false, competitorBHas: false },
    { name: "Múltiplos atendentes", arsenalHas: true, competitorAHas: true, competitorBHas: false },
    { name: "Autoatendimento", arsenalHas: true, competitorAHas: true, competitorBHas: false },
    { name: "Chatbot personalizável", arsenalHas: true, competitorAHas: false, competitorBHas: false },
    { name: "Suporte humano", arsenalHas: true, competitorAHas: false, competitorBHas: false },
    { name: "Atualizações gratuitas", arsenalHas: true, competitorAHas: false, competitorBHas: false },
    { name: "Revenda ilimitada", arsenalHas: true, competitorAHas: false, competitorBHas: false },
  ];

  return (
    <section id="comparison" className="px-4 py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 lg:mb-6 text-gray-900">
          Compare e Escolha o Melhor
        </h2>
        <p className="text-base lg:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 lg:mb-12 leading-relaxed px-4">
          Veja porque o Sistema Golden da Arsenal Cache é a escolha ideal para o seu negócio
        </p>

        {/* Mobile Card Layout */}
        <div className="lg:hidden space-y-6 max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
            <div className="text-center mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-blue-800">Sistema Golden</h3>
              <Badge className="bg-green-100 text-green-700 border-0 mt-2 px-4 py-1 text-lg font-bold">
                R$ 297/mês
              </Badge>
              <div className="mt-2">
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  ⭐ Melhor Custo-Benefício
                </Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-800">{feature.name}</span>
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-md py-3">
                <a href="https://appgold.suamarca.pro/signup">
                  Comece seu teste grátis agora
                  <Rocket size={18} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Competitors summary for mobile */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">Concorrentes</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <span className="font-bold text-gray-700 block">Concorrente A</span>
                <Badge className="bg-red-100 text-red-700 border-0 mt-2">R$ 997/mês</Badge>
                <div className="text-xs text-gray-600 mt-2">Recursos limitados</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <span className="font-bold text-gray-700 block">Concorrente B</span>
                <Badge className="bg-red-100 text-red-700 border-0 mt-2">R$ 147/mês</Badge>
                <div className="text-xs text-gray-600 mt-2">Poucos recursos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden lg:block max-w-5xl mx-auto mt-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Table>
              <TableCaption className="p-4 text-lg text-gray-600">
                Sistema Golden oferece recursos completos por um preço justo
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-200">
                  <TableHead className="font-bold text-lg py-6 pl-6">Recursos</TableHead>
                  <TableHead className="text-center py-6">
                    <div className="flex flex-col items-center">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-3">
                        <MessageCircle className="h-7 w-7 text-white" />
                      </div>
                      <span className="font-bold text-blue-800 text-lg">Sistema Golden</span>
                      <Badge className="bg-green-100 text-green-700 border-0 mt-2 px-3 py-1 text-base font-bold">
                        R$ 297/mês
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700 border-0 mt-1 text-xs">
                        ⭐ Recomendado
                      </Badge>
                    </div>
                  </TableHead>
                  <TableHead className="text-center py-6">
                    <div className="flex flex-col items-center">
                      <div className="h-14 w-14 rounded-full bg-gray-400 flex items-center justify-center mb-3">
                        <Users className="h-7 w-7 text-white" />
                      </div>
                      <span className="font-bold text-gray-700 text-lg">Concorrente A</span>
                      <Badge className="bg-red-100 text-red-700 border-0 mt-2 px-3 py-1 text-base">
                        R$ 997/mês
                      </Badge>
                    </div>
                  </TableHead>
                  <TableHead className="text-center py-6 pr-6">
                    <div className="flex flex-col items-center">
                      <div className="h-14 w-14 rounded-full bg-gray-400 flex items-center justify-center mb-3">
                        <Tag className="h-7 w-7 text-white" />
                      </div>
                      <span className="font-bold text-gray-700 text-lg">Concorrente B</span>
                      <Badge className="bg-red-100 text-red-700 border-0 mt-2 px-3 py-1 text-base">
                        R$ 147/mês
                      </Badge>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, index) => (
                  <TableRow key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors border-b border-gray-100`}>
                    <TableCell className="font-medium py-4 pl-6 text-base">{feature.name}</TableCell>
                    <TableCell className="text-center py-4">
                      <div className="flex justify-center">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Check className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {feature.competitorAHas ? 
                        <div className="flex justify-center">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Check className="h-6 w-6 text-green-600" />
                          </div>
                        </div> : 
                        <div className="flex justify-center">
                          <div className="bg-red-100 p-2 rounded-full">
                            <X className="h-6 w-6 text-red-500" />
                          </div>
                        </div>
                      }
                    </TableCell>
                    <TableCell className="text-center py-4 pr-6">
                      {feature.competitorBHas ? 
                        <div className="flex justify-center">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Check className="h-6 w-6 text-green-600" />
                          </div>
                        </div> : 
                        <div className="flex justify-center">
                          <div className="bg-red-100 p-2 rounded-full">
                            <X className="h-6 w-6 text-red-500" />
                          </div>
                        </div>
                      }
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t-2 border-blue-200">
                  <TableCell colSpan={4} className="p-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Trophy className="h-6 w-6 text-amber-500" />
                        <span className="font-bold text-blue-800 text-lg">O Sistema Golden é claramente o melhor custo-benefício</span>
                      </div>
                      <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg px-8 py-3">
                        <a href="https://appgold.suamarca.pro/signup">
                          Comece seu teste grátis agora
                          <Rocket size={20} className="ml-2" />
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
