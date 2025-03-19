
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const RoiCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [employees, setEmployees] = useState(3);
  const [clients, setClients] = useState(50);
  const [hoursPerDay, setHoursPerDay] = useState(2);
  const [avgTicket, setAvgTicket] = useState(100);

  // Calculate ROI
  const calculateROI = () => {
    // Time saved per day (hours)
    const timeSavedPerDay = employees * hoursPerDay;
    
    // Assuming average hourly cost of R$25 per employee
    const hourlyRate = 25;
    
    // Monthly savings (22 working days)
    const monthlySavings = timeSavedPerDay * hourlyRate * 22;
    
    // Increased client capacity (assuming 20% increase with the system)
    const additionalClients = Math.round(clients * 0.2);
    
    // Additional monthly revenue
    const additionalRevenue = additionalClients * avgTicket;
    
    // Total monthly benefit
    const totalMonthlyBenefit = monthlySavings + additionalRevenue;
    
    // Annual benefit
    const annualBenefit = totalMonthlyBenefit * 12;
    
    // System cost (for calculation purposes)
    const systemCost = 3500;
    
    // ROI percentage (Annual benefit / System cost)
    const roiPercentage = Math.round((annualBenefit / systemCost) * 100);
    
    return {
      timeSavedPerDay,
      monthlySavings,
      additionalClients,
      additionalRevenue,
      totalMonthlyBenefit,
      annualBenefit,
      roiPercentage
    };
  };

  const roi = calculateROI();

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculadora de ROI</h2>
          <p className="text-xl text-gray-600">
            Descubra quanto sua empresa pode economizar e lucrar com o Sistema Golden
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Simule seu retorno sobre investimento</h3>
              <CollapsibleTrigger asChild>
                <Button variant="outline">
                  {isOpen ? "Esconder parâmetros" : "Ajustar parâmetros"}
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <Label htmlFor="employees">Número de atendentes:</Label>
                  <Input
                    id="employees"
                    type="number"
                    min="1"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value) || 1)}
                  />
                  <p className="text-sm text-gray-500">Quantos colaboradores fazem atendimento ao cliente</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="clients">Clientes atendidos por mês:</Label>
                  <Input
                    id="clients"
                    type="number"
                    min="1"
                    value={clients}
                    onChange={(e) => setClients(parseInt(e.target.value) || 1)}
                  />
                  <p className="text-sm text-gray-500">Quantidade média de clientes atendidos mensalmente</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="hours">Horas economizadas por atendente/dia:</Label>
                  <Input
                    id="hours"
                    type="number"
                    min="0.5"
                    max="8"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(parseFloat(e.target.value) || 0.5)}
                  />
                  <p className="text-sm text-gray-500">Tempo economizado por dia com automação</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="ticket">Ticket médio (R$):</Label>
                  <Input
                    id="ticket"
                    type="number"
                    min="1"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(parseInt(e.target.value) || 1)}
                  />
                  <p className="text-sm text-gray-500">Valor médio gasto por cliente</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Economia mensal</p>
              <p className="text-2xl font-bold text-blue-700">R$ {roi.monthlySavings.toLocaleString()}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Receita adicional/mês</p>
              <p className="text-2xl font-bold text-green-700">R$ {roi.additionalRevenue.toLocaleString()}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg text-center text-white">
              <p className="mb-1">ROI anual</p>
              <p className="text-3xl font-bold">{roi.roiPercentage}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Detalhes do cálculo:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• {roi.timeSavedPerDay} horas economizadas por dia</li>
              <li>• {roi.additionalClients} clientes adicionais por mês</li>
              <li>• R$ {roi.totalMonthlyBenefit.toLocaleString()} de benefício mensal total</li>
              <li>• R$ {roi.annualBenefit.toLocaleString()} de benefício anual</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Benefícios do Sistema Golden:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Aumento da produtividade da equipe</li>
              <li>• Redução do tempo de resposta</li>
              <li>• Aumento da capacidade de atendimento</li>
              <li>• Melhor experiência do cliente</li>
              <li>• Aumento da taxa de conversão</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
