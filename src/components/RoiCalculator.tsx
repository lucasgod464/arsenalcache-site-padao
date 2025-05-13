
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight, ChartBar, Percent, CircleCheck } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter 
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { toast } from "@/hooks/use-toast";

// Interface para o tipo do CustomTooltip
interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const RoiCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState(15);
  const [monthlyValue, setMonthlyValue] = useState(97);
  const [annualGrowth, setAnnualGrowth] = useState(20);
  const [costs, setCosts] = useState(200);
  const isMobile = useIsMobile();
  const [chartData, setChartData] = useState<any[]>([]);
  const [pieData, setPieData] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<'chart'|'details'>('chart');

  // Cores para o gráfico
  const COLORS = ['#8B5CF6', '#10B981', '#F97316', '#EF4444'];

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
    const paybackMonths = Math.ceil(systemCost / (annualProfit / 12));

    return {
      monthlyRevenue,
      annualRevenue,
      annualProfit,
      newSubscribersYearly,
      growthRevenue,
      totalSubscribersNextYear,
      nextYearRevenue,
      roiPercentage,
      paybackMonths,
      systemCost
    };
  };

  const roi = calculateSubscriptionROI();

  // Atualiza os dados do gráfico sempre que os valores mudarem
  useEffect(() => {
    setChartData([
      {
        name: "Investimento",
        valor: roi.systemCost,
        fill: "#8B5CF6"
      },
      {
        name: "Lucro Anual",
        valor: roi.annualProfit,
        fill: "#10B981"
      }
    ]);

    setPieData([
      { name: 'Investimento', value: roi.systemCost, fill: '#8B5CF6' },
      { name: 'Lucro 1º Ano', value: roi.annualProfit, fill: '#10B981' },
      { name: 'Crescimento', value: roi.growthRevenue, fill: '#F97316' }
    ]);

  }, [roi.annualProfit, roi.systemCost, roi.growthRevenue]);

  // Componente de tooltip corrigido com tipos adequados
  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
          <p className="font-semibold">{`${label}: R$ ${Number(payload[0].value).toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  const handleShareResults = () => {
    // Simulação de compartilhamento
    const text = `Simulação de lucro com ${subscriptions} assinaturas a R$${monthlyValue}/mês: R$${roi.annualProfit.toLocaleString()} de lucro anual com ${roi.roiPercentage}% de ROI!`;
    
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Resultado copiado!",
        description: "Agora você pode compartilhar esta simulação.",
        duration: 3000,
      });
    });
  };

  const handleSaveSimulation = () => {
    // Simulação de salvar dados
    const simulationData = {
      date: new Date().toLocaleDateString(),
      params: { subscriptions, monthlyValue, annualGrowth, costs },
      results: roi
    };
    
    localStorage.setItem('lastSimulation', JSON.stringify(simulationData));
    
    toast({
      title: "Simulação salva!",
      description: "Seus parâmetros foram salvos para consulta futura.",
      duration: 3000,
    });
  };

  return (
    <section id="roi-calculator" className="py-16 px-4 bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 fade-in-section">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm mb-4">
            Calculadora Interativa
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">Simule seu Potencial de Lucro</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja em tempo real quanto você pode ganhar revendendo o Sistema Diamond com nossa calculadora avançada
          </p>
        </div>

        <Card className="border-blue-200 shadow-xl bg-white/80 backdrop-blur-sm fade-in-section">
          <CardHeader className="border-b border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg text-white">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-blue-800">Calculadora de Lucro com Revenda</CardTitle>
                <CardDescription>
                  Ajuste os parâmetros e veja instantaneamente seu potencial de retorno
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
                    
                    <div className="pt-2">
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="w-1/2 text-sm"
                          onClick={handleSaveSimulation}
                        >
                          Salvar simulação
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-1/2 text-sm"
                          onClick={handleShareResults}
                        >
                          Compartilhar resultados
                        </Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full"></div>
                    
                    <h3 className="text-xl font-semibold mb-2 relative z-10">Retorno Sobre Investimento</h3>
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="bg-white/20 p-5 rounded-full w-20 h-20 flex items-center justify-center">
                        <span className="text-3xl font-bold">{roi.roiPercentage}%</span>
                      </div>
                      <div>
                        <span className="text-blue-100">ROI anual</span>
                        <p className="text-sm text-blue-100 mt-1">
                          Recuperação em {roi.paybackMonths} meses
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 mb-2">
                      <div 
                        className="bg-white h-1.5 rounded-full" 
                        style={{ width: `${Math.min(100, (roi.paybackMonths / 12) * 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-blue-100">
                      <span>Início</span>
                      <span>6 meses</span>
                      <span>12 meses</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 shadow-sm">
                      <p className="text-gray-600 text-xs mb-1">Receita mensal</p>
                      <p className="text-lg font-bold text-blue-700">
                        R$ {roi.monthlyRevenue.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg text-center border border-green-200 shadow-sm">
                      <p className="text-gray-600 text-xs mb-1">Lucro anual</p>
                      <p className="text-lg font-bold text-green-700">
                        R$ {roi.annualProfit.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg text-center border border-purple-200 shadow-sm">
                      <p className="text-gray-600 text-xs mb-1">Novos clientes</p>
                      <p className="text-lg font-bold text-purple-700">
                        {roi.newSubscribersYearly}/ano
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100">
                  <h4 className="text-lg font-semibold mb-3 text-amber-800 flex items-center">
                    <ChartBar className="h-5 w-5 mr-2" />
                    Principais benefícios
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-800">
                      <CircleCheck className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Faturamento recorrente mensal com {subscriptions} assinantes</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-800">
                      <CircleCheck className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Economia de tempo com automação de atendimento</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-800">
                      <CircleCheck className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Potencial de crescimento de {annualGrowth}% ao ano</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex space-x-2 mb-2">
                  <Button 
                    variant={selectedTab === 'chart' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTab('chart')}
                    className={selectedTab === 'chart' ? "bg-blue-600" : ""}
                  >
                    Gráfico de comparação
                  </Button>
                  <Button 
                    variant={selectedTab === 'details' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTab('details')}
                    className={selectedTab === 'details' ? "bg-blue-600" : ""}
                  >
                    Detalhes financeiros
                  </Button>
                </div>
                
                {selectedTab === 'chart' && (
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-sm font-medium mb-3 text-gray-700">Comparativo: Investimento vs. Retorno</p>
                    <div className="h-64 w-full">
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
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Investimento: R$ {roi.systemCost.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">Retorno: R$ {roi.annualProfit.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedTab === 'details' && (
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-sm font-medium mb-3 text-gray-700">Divisão de valores</p>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            innerRadius={30}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {pieData.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.fill }}></div>
                          <span className="text-sm">{entry.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Card className="border-amber-200">
                  <CardHeader className="bg-amber-50 border-b border-amber-100 pb-3">
                    <CardTitle className="text-amber-800 text-lg flex items-center">
                      <Percent className="h-5 w-5 mr-2" />
                      Projeção de crescimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-800">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                        <span>{roi.newSubscribersYearly} novos assinantes no próximo ano</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-800">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                        <span>Total de {roi.totalSubscribersNextYear} assinantes após 12 meses</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-800">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
                        <span>R$ {roi.growthRevenue.toLocaleString()} de receita adicional</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                      Quero começar agora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RoiCalculator;
