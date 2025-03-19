
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, MessageCircle, Users, Tag, Rocket } from 'lucide-react';

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
    <section id="comparison" className="px-4 py-20 bg-gray-50">
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
              <TableRow className="bg-blue-50">
                <TableCell className="font-bold text-lg">Recursos</TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                      <MessageCircle className="h-6 w-6 text-amber-400" />
                    </div>
                    <span className="font-bold text-blue-800">Sistema Golden</span>
                    <span className="text-green-600 font-medium">R$ 297/mês</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-700">Concorrente A</span>
                    <span className="text-red-600 font-medium">R$ 997/mês</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-700">Concorrente B</span>
                    <span className="text-red-600 font-medium">R$ 147/mês</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.arsenalHas ? 
                      <Check className="h-6 w-6 text-green-500 mx-auto" /> : 
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitorAHas ? 
                      <Check className="h-6 w-6 text-green-500 mx-auto" /> : 
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitorBHas ? 
                      <Check className="h-6 w-6 text-green-500 mx-auto" /> : 
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 text-center">
          <a href="https://appgold.suamarca.pro/signup" className="btn-accent inline-flex items-center gap-2">
            Comece seu teste grátis agora
            <Rocket size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
