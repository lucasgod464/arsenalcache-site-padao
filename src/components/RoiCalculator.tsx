
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const RoiCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState(15);
  const [monthlyValue, setMonthlyValue] = useState(97);
  const [annualGrowth, setAnnualGrowth] = useState(20);
  const [costs, setCosts] = useState(200);
  const isMobile = useIsMobile();
  const [chartData, setChartData] = useState([]);

  // Calcula o ROI e atualiza os dados do gráfico
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

  // Atualiza os dados do gráfico sempre que os valores mudarem
  useEffect(() => {
    setChartData([
      {
        name: "Investimento",
        valor: 1998.80,
        fill: "#8B5CF6"
      },
      {
        name: "Lucro Anual",
        valor: roi.annualProfit,
        fill: "#10B981"
      }
    ]);
  }, [roi.annualProfit]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <p className="font-semibold">{`${label}: R$ ${Number(payload[0].value).toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="roi-calculator" className="py-16 px-4 bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 fade-in-section">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm mb-4">
            Calculadora de Rentabilidade
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">Simule seu Potencial de Lucro</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calcule quanto você pode lucrar mensalmente revendendo o Sistema Diamond com nossa calculadora interativa
          </p>
        </div>

        <Card className="border-blue-200 shadow-xl bg-white/80 backdrop-blur-sm fade-in-section">
          <CardHeader className="border-b border-blue-100 bg-blue-50/50">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-blue-800">Calculadora de Lucro com Revenda</CardTitle>
                <CardDescription>
                  Ajuste os parâmetros e veja seu potencial de retorno
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      Parâmetros da Simulação
                    </h3>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border border-dashed border-blue-400 bg-blue-50/50 hover:bg-blue-100 text-blue-600"
                      >
                        {isOpen ? "Ocultar Parâmetros" : "Ajustar Parâmetros"}
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-5 bg-blue-50/30 p-5 rounded-xl border border-blue-100">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="subscriptions" className="text-blue-800">
                          Número de assinantes:
                        </Label>
                        <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">
                          {subscriptions}
                        </span>
                      </div>
                      <Slider
                        id="subscriptions"
                        min={1}
                        max={50}
                        step={1}
                        value={[subscriptions]}
                        onValueChange={(e) => setSubscriptions(e[0])}
                        className="py-2"
                      />
                      <p className="text-xs text-gray-500">Quantidade de clientes que assinam seu serviço mensalmente</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="monthlyValue" className="text-blue-800">
                          Valor mensal por assinatura (R$):
                        </Label>
                        <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">
                          {monthlyValue}
                        </span>
                      </div>
                      <Slider
                        id="monthlyValue"
                        min={50}
                        max={200}
                        step={5}
                        value={[monthlyValue]}
                        onValueChange={(e) => setMonthlyValue(e[0])}
                        className="py-2"
                      />
                      <p className="text-xs text-gray-500">Quanto você cobra por mês de cada cliente</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="annualGrowth" className="text-blue-800">
                          Crescimento anual estimado (%):
                        </Label>
                        <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">
                          {annualGrowth}%
                        </span>
                      </div>
                      <Slider
                        id="annualGrowth"
                        min={0}
                        max={100}
                        step={5}
                        value={[annualGrowth]}
                        onValueChange={(e) => setAnnualGrowth(e[0])}
                        className="py-2"
                      />
                      <p className="text-xs text-gray-500">Estimativa de crescimento anual em número de clientes</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="costs" className="text-blue-800">
                          Custos mensais (R$):
                        </Label>
                        <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">
                          {costs}
                        </span>
                      </div>
                      <Slider
                        id="costs"
                        min={0}
                        max={500}
                        step={10}
                        value={[costs]}
                        onValueChange={(e) => setCosts(e[0])}
                        className="py-2"
                      />
                      <p className="text-xs text-gray-500">Seus custos mensais com hospedagem, suporte, etc.</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl text-white shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Retorno Sobre Investimento</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-bold">{roi.roiPercentage}%</span>
                      <span className="text-blue-200">ROI anual</span>
                    </div>
                    <p className="text-sm text-blue-100 mt-2">
                      Você recupera seu investimento em {Math.ceil(100 / roi.roiPercentage * 12)} meses
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                      <p className="text-gray-600 text-xs mb-1">Receita mensal</p>
                      <p className="text-lg font-bold text-blue-700">
                        R$ {roi.monthlyRevenue.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                      <p className="text-gray-600 text-xs mb-1">Lucro anual</p>
                      <p className="text-lg font-bold text-green-700">
                        R$ {roi.annualProfit.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                      <p className="text-gray-600 text-xs mb-1">Novos clientes</p>
                      <p className="text-lg font-bold text-purple-700">
                        {roi.newSubscribersYearly}/ano
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="h-64 w-full">
                  <p className="text-sm font-medium mb-2 text-gray-700">Comparativo: Investimento vs. Lucro Anual</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `R$ ${value.toLocaleString()}`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="valor" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h4 className="text-lg font-semibold mb-3 text-amber-800 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Projeção de crescimento
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-800">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>{roi.newSubscribersYearly} novos assinantes no próximo ano</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>Total de {roi.totalSubscribersNextYear} assinantes após 12 meses</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>R$ {roi.growthRevenue.toLocaleString()} de receita adicional</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      Quero começar agora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RoiCalculator;
