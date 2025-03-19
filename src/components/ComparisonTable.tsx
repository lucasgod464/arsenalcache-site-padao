
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 fade-in-section">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema Golden vs. Concorrentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o Sistema Golden se compara a outras soluções de multiatendimento disponíveis no mercado
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <Table>
            <TableCaption>Comparativo entre soluções de multiatendimento para WhatsApp</TableCaption>
            <TableHeader>
              <TableRow className="bg-blue-50">
                <TableHead className="w-[250px]">Recursos</TableHead>
                <TableHead className="text-center bg-blue-100">Sistema Golden</TableHead>
                <TableHead className="text-center">Concorrente A</TableHead>
                <TableHead className="text-center">Concorrente B</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Pagamento único (sem mensalidade)</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Usuários ilimitados</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Conexões ilimitadas</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">White Label completo</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Instalação em seu servidor</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Chatbot com fluxos ilimitados</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">API para integrações</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Suporte humano</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Implementação em 24h</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Campanhas de marketing</TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Check className="h-5 w-5 text-green-600 mx-auto" />
                </TableCell>
              </TableRow>
              <TableRow className="bg-blue-50">
                <TableCell className="font-medium">Custo</TableCell>
                <TableCell className="text-center font-bold">Pagamento único</TableCell>
                <TableCell className="text-center">Assinatura mensal</TableCell>
                <TableCell className="text-center">Assinatura mensal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
