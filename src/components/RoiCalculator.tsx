
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const RoiCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState(10);
  const [monthlyValue, setMonthlyValue] = useState(97);
  const [annualGrowth, setAnnualGrowth] = useState(20);
  const [costs, setCosts] = useState(200);

  // Calculate subscription ROI
  const calculateSubscriptionROI = () => {
    // Monthly revenue from subscriptions
    const monthlyRevenue = subscriptions * monthlyValue;
    
    // Annual revenue
    const annualRevenue = monthlyRevenue * 12;
    
    // Annual net profit (revenue - costs)
    const annualProfit = annualRevenue - (costs * 12);
    
    // Estimated annual growth in subscribers
    const newSubscribersYearly = Math.round((subscriptions * annualGrowth) / 100);
    
    // Revenue from new subscribers in the next year
    const growthRevenue = newSubscribersYearly * monthlyValue * 12;
    
    // Total subscribers after 1 year
    const totalSubscribersNextYear = subscriptions + newSubscribersYearly;
    
    // Next year's projected revenue
    const nextYearRevenue = totalSubscribersNextYear * monthlyValue * 12;
    
    // System cost (for calculation purposes)
    const systemCost = 3500;
    
    // ROI percentage (Annual profit / System cost)
    const roiPercentage = Math.round((annualProfit / systemCost) * 100);
    
    return {
      monthlyRevenue,
      annualRevenue,
      annualProfit,
      newSubscribersYearly,
      growthRevenue,
      totalSubscribersNextYear,
      nextYearRevenue,
      roiPercentage
    };
  };

  const roi = calculateSubscriptionROI();

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in-section">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculadora de Lucro com Revenda</h2>
          <p className="text-xl text-gray-600">
            Calcule quanto você pode lucrar revendendo o Sistema Golden para seus clientes
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-100">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Simule seu potencial de ganhos</h3>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="border-blue-300 text-blue-700">
                  {isOpen ? "Esconder parâmetros" : "Ajustar parâmetros"}
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <Label htmlFor="subscriptions">Número de assinantes:</Label>
                  <Input
                    id="subscriptions"
                    type="number"
                    min="1"
                    value={subscriptions}
                    onChange={(e) => setSubscriptions(parseInt(e.target.value) || 1)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-sm text-gray-500">Quantos clientes assinam seu serviço mensalmente</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="monthlyValue">Valor mensal por assinatura (R$):</Label>
                  <Input
                    id="monthlyValue"
                    type="number"
                    min="1"
                    value={monthlyValue}
                    onChange={(e) => setMonthlyValue(parseInt(e.target.value) || 1)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-sm text-gray-500">Quanto você cobra por mês de cada cliente</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="annualGrowth">Crescimento anual estimado (%):</Label>
                  <Input
                    id="annualGrowth"
                    type="number"
                    min="0"
                    max="100"
                    value={annualGrowth}
                    onChange={(e) => setAnnualGrowth(parseInt(e.target.value) || 0)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-sm text-gray-500">Estimativa de crescimento anual em número de clientes</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="costs">Custos mensais (R$):</Label>
                  <Input
                    id="costs"
                    type="number"
                    min="0"
                    value={costs}
                    onChange={(e) => setCosts(parseInt(e.target.value) || 0)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-sm text-gray-500">Seus custos mensais com hospedagem, suporte, etc.</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Receita mensal</p>
              <p className="text-2xl font-bold text-blue-700">R$ {roi.monthlyRevenue.toLocaleString()}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-1">Lucro anual</p>
              <p className="text-2xl font-bold text-green-700">R$ {roi.annualProfit.toLocaleString()}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg text-center text-white">
              <p className="mb-1">ROI</p>
              <p className="text-3xl font-bold">{roi.roiPercentage}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
            <h4 className="text-lg font-semibold mb-2 text-amber-800">Projeção de crescimento:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• {roi.newSubscribersYearly} novos assinantes no próximo ano</li>
              <li>• Total de {roi.totalSubscribersNextYear} assinantes após 12 meses</li>
              <li>• R$ {roi.growthRevenue.toLocaleString()} de receita adicional com novos assinantes</li>
              <li>• R$ {roi.nextYearRevenue.toLocaleString()} de receita projetada para o próximo ano</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold mb-2 text-blue-800">Benefícios do Sistema Golden para revendedores:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Renda recorrente mensal</li>
              <li>• Sistema completo e personalizado</li>
              <li>• Sem limites de usuários ou conexões</li>
              <li>• Suporte técnico especializado</li>
              <li>• Implementação rápida (24h)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
