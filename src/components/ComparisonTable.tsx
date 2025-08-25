import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, MessageCircle, Users, Tag, Rocket, Trophy } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const ComparisonTable = () => {
  const features = [{
    name: "Usuários ilimitados",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }, {
    name: "Conexões ilimitadas",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }, {
    name: "Sistema Whitelabel",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }, {
    name: "Múltiplos atendentes",
    arsenalHas: true,
    competitorAHas: true,
    competitorBHas: false
  }, {
    name: "Autoatendimento",
    arsenalHas: true,
    competitorAHas: true,
    competitorBHas: false
  }, {
    name: "Chatbot personalizável",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }, {
    name: "Suporte humano",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }, {
    name: "Atualizações gratuitas",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }, {
    name: "Revenda ilimitada",
    arsenalHas: true,
    competitorAHas: false,
    competitorBHas: false
  }];
  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Compare com a Concorrência
        </h3>
        <p className="text-gray-600">
          Veja por que o Whaticket Pro é superior
        </p>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Recursos</TableHead>
            <TableHead className="text-center">
              <div className="flex flex-col items-center">
                <Badge variant="default" className="mb-2">
                  <Trophy className="w-4 h-4 mr-1" />
                  Whaticket Pro
                </Badge>
              </div>
            </TableHead>
            <TableHead className="text-center">Concorrente A</TableHead>
            <TableHead className="text-center">Concorrente B</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell className="text-center">
                {feature.arsenalHas ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.competitorAHas ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.competitorBHas ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-red-500 mx-auto" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-8 text-center">
        <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/90">
          <Rocket className="w-5 h-5 mr-2" />
          Escolher Whaticket Pro
        </Button>
      </div>
    </div>
  );
};
export default ComparisonTable;