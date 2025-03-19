
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
    <section id="comparison" className="px-4 py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="section-title">Compare e Escolha o Melhor</h2>
        <p className="section-subtitle">
          Veja porque o Sistema Golden da Arsenal Cache é a escolha ideal para o seu negócio
        </p>

        <div className="max-w-4xl mx-auto mt-10 overflow-x-auto">
          <Table className="bg-white rounded-xl shadow-lg">
            <TableCaption>
              Sistema Golden oferece recursos completos por um preço justo
            </TableCaption>
            <TableHead>
              <TableRow className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <TableCell className="font-bold text-lg">Recursos</TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-2">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-blue-800">Sistema Golden</span>
                    <Badge className="bg-green-100 text-green-700 border-0 mt-1">R$ 297/mês</Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-700">Concorrente A</span>
                    <Badge className="bg-red-100 text-red-700 border-0 mt-1">R$ 997/mês</Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-700">Concorrente B</span>
                    <Badge className="bg-red-100 text-red-700 border-0 mt-1">R$ 147/mês</Badge>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-50"}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.arsenalHas ? 
                      <div className="flex justify-center">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                      </div> : 
                      <div className="flex justify-center">
                        <div className="bg-red-100 p-1 rounded-full">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      </div>
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitorAHas ? 
                      <div className="flex justify-center">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                      </div> : 
                      <div className="flex justify-center">
                        <div className="bg-red-100 p-1 rounded-full">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      </div>
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitorBHas ? 
                      <div className="flex justify-center">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                      </div> : 
                      <div className="flex justify-center">
                        <div className="bg-red-100 p-1 rounded-full">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      </div>
                    }
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-blue-50">
                <TableCell colSpan={4} className="p-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="h-5 w-5 text-amber-500" />
                      <span className="font-bold text-blue-800">O Sistema Golden é claramente o melhor custo-benefício</span>
                    </div>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-md">
                      <a href="https://appgold.suamarca.pro/signup">
                        Comece seu teste grátis agora
                        <Rocket size={18} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
