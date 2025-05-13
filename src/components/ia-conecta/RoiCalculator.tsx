
import React, { useState } from 'react';
import { Calculator, Diamond } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

const RoiCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState(40);
  const [monthlyValue, setMonthlyValue] = useState(97);
  const [annualGrowth, setAnnualGrowth] = useState(20);
  const [costs, setCosts] = useState(200);
  const isMobile = useIsMobile();

  const calculateSubscriptionROI = () => {
    const monthlyRevenue = subscriptions * monthlyValue;
    const annualRevenue = monthlyRevenue * 12;
    const annualProfit = annualRevenue - (costs * 12);
    const newSubscribersYearly = Math.round((subscriptions * annualGrowth) / 100);
    const growthRevenue = newSubscribersYearly * monthlyValue * 12;
    const totalSubscribersNextYear = subscriptions + newSubscribersYearly;
    const nextYearRevenue = totalSubscribersNextYear * monthlyValue * 12;
    const systemCost = 1998.80;
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
    <section id="roi-calculator" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 fade-in-section">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Diamond className="h-7 w-7 text-blue-700" />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Calculadora de Lucro com Revenda</h2>
          <p className="text-lg text-gray-600">
            Calcule quanto você pode lucrar revendendo o Sistema Diamond
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-5 mb-6 border border-blue-100">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            {isMobile ? (
              <div className="mb-5">
                <h3 className="text-lg font-semibold mb-2">
                  Simule seu potencial de ganhos
                </h3>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border border-dashed border-blue-400 bg-transparent hover:bg-blue-50 text-blue-600 whitespace-nowrap text-sm transition-all w-full py-1.5"
                  >
                    {isOpen ? "Esconder parâmetros" : "Ajustar parâmetros"}
                  </Button>
                </CollapsibleTrigger>
              </div>
            ) : (
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold">
                  Simule seu potencial de ganhos com o Sistema Diamond
                </h3>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="border border-dashed border-blue-400 bg-transparent hover:bg-blue-50 text-blue-600 whitespace-nowrap text-sm transition-all px-4 py-2"
                  >
                    {isOpen ? "Esconder parâmetros" : "Ajustar parâmetros"}
                  </Button>
                </CollapsibleTrigger>
              </div>
            )}

            <CollapsibleContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="subscriptions">Número de assinantes:</Label>
                  <Input
                    id="subscriptions"
                    type="number"
                    min="1"
                    max="100"
                    value={subscriptions}
                    onChange={(e) => setSubscriptions(parseInt(e.target.value) || 1)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-xs text-gray-500">Quantos clientes assinam seu serviço mensalmente</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyValue">Valor mensal por assinatura (R$):</Label>
                  <Input
                    id="monthlyValue"
                    type="number"
                    min="1"
                    value={monthlyValue}
                    onChange={(e) => setMonthlyValue(parseInt(e.target.value) || 1)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-xs text-gray-500">Quanto você cobra por mês de cada cliente</p>
                </div>

                <div className="space-y-2">
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
                  <p className="text-xs text-gray-500">Estimativa de crescimento anual em número de clientes</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="costs">Custos mensais (R$):</Label>
                  <Input
                    id="costs"
                    type="number"
                    min="0"
                    value={costs}
                    onChange={(e) => setCosts(parseInt(e.target.value) || 0)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <p className="text-xs text-gray-500">Seus custos mensais com hospedagem, suporte, etc.</p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm mb-1">Receita mensal</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-700">R$ {roi.monthlyRevenue.toLocaleString()}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 text-sm mb-1">Lucro anual</p>
              <p className="text-xl sm:text-2xl font-bold text-green-700">R$ {roi.annualProfit.toLocaleString()}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg text-center text-white">
              <p className="text-sm mb-1">ROI</p>
              <p className="text-2xl sm:text-3xl font-bold">{roi.roiPercentage}%</p>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
              <h4 className="text-lg font-semibold mb-2 text-amber-800">Projeção de crescimento:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• {roi.newSubscribersYearly} novos assinantes no próximo ano</li>
                <li>• Total de {roi.totalSubscribersNextYear} assinantes após 12 meses</li>
                <li>• R$ {roi.growthRevenue.toLocaleString()} de receita adicional com novos assinantes</li>
                <li>• R$ {roi.nextYearRevenue.toLocaleString()} de receita projetada para o próximo ano</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold mb-2 text-blue-800">Benefícios do Sistema Diamond para revendedores:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Renda recorrente mensal</li>
                <li>• Sistema completo e personalizado</li>
                <li>• Softwares premium inclusos</li>
                <li>• Suporte técnico especializado</li>
                <li>• Implementação rápida (24h)</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoiCalculator;
