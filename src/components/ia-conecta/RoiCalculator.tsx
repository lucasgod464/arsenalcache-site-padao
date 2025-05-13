
import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { useIsMobile } from "@/hooks/use-mobile";

const RoiCalculator = () => {
  const [usuariosIA, setUsuariosIA] = useState(10);
  const [mensagensMedia, setMensagensMedia] = useState(200);
  const [tokensPorMensagem, setTokensPorMensagem] = useState(1500);
  const [custoTokens, setCustoTokens] = useState(0.01); // Custo por 1000 tokens
  const isMobile = useIsMobile();
  
  // Cálculos para OpenAI (cobrado por token)
  const tokensPerMonth = (usuariosIA * mensagensMedia * tokensPorMensagem);
  const custoMensalOpenAI = (tokensPerMonth / 1000) * custoTokens;
  
  // Cálculos para IA Conecta (preço fixo)
  const custoMensalIAConecta = 1000;
  
  // Economia
  const economia = custoMensalOpenAI - custoMensalIAConecta;
  const economiaPercentual = ((economia / custoMensalOpenAI) * 100).toFixed(0);
  
  // Dados para o gráfico
  const data = [
    { name: 'OpenAI', valor: custoMensalOpenAI, fill: '#ef4444' },
    { name: 'IA Conecta', valor: custoMensalIAConecta, fill: '#8b5cf6' }
  ];

  return (
    <section id="calculadora-roi" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
            Calcule sua Economia
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculadora de <span className="text-purple-600">Economia com IA</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Veja quanto você economiza ao usar nossa solução de IA ilimitada comparada com modelos que cobram por token
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg border border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Calculator className="h-5 w-5" /> Parâmetros do Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="usuarios">Número de usuários de IA:</Label>
                  <span className="font-semibold text-purple-700">{usuariosIA}</span>
                </div>
                <Slider
                  id="usuarios"
                  min={1}
                  max={50}
                  step={1}
                  value={[usuariosIA]}
                  onValueChange={(value) => setUsuariosIA(value[0])}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="mensagens">Mensagens por usuário/dia:</Label>
                  <span className="font-semibold text-purple-700">{mensagensMedia}</span>
                </div>
                <Slider
                  id="mensagens"
                  min={10}
                  max={500}
                  step={10}
                  value={[mensagensMedia]}
                  onValueChange={(value) => setMensagensMedia(value[0])}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="tokens">Tokens médios por mensagem:</Label>
                  <span className="font-semibold text-purple-700">{tokensPorMensagem}</span>
                </div>
                <Slider
                  id="tokens"
                  min={500}
                  max={3000}
                  step={100}
                  value={[tokensPorMensagem]}
                  onValueChange={(value) => setTokensPorMensagem(value[0])}
                  className="py-4"
                />
              </div>

              <div className="pt-4 bg-purple-50 p-4 rounded-lg border border-purple-100">
                <p className="text-sm text-gray-600 mb-2">
                  Baseado em um custo médio de R${custoTokens.toFixed(2)} por 1000 tokens 
                  para modelos avançados (como GPT-4)
                </p>
                <p className="text-sm text-purple-700">
                  Total mensal estimado: {(tokensPerMonth / 1000).toLocaleString()} mil tokens
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <TrendingUp className="h-5 w-5" /> Comparativo de Custos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis 
                      tickFormatter={(value) => `R$${Math.round(value).toLocaleString()}`}
                    />
                    <Tooltip 
                      formatter={(value) => [`R$${Number(value).toLocaleString()}`, "Custo Mensal"]}
                    />
                    <Bar dataKey="valor" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 mb-1">OpenAI (por token)</p>
                  <p className="text-xl font-bold text-red-700">
                    R$ {custoMensalOpenAI.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <p className="text-sm text-purple-600 mb-1">IA Conecta (ilimitado)</p>
                  <p className="text-xl font-bold text-purple-700">
                    R$ {custoMensalIAConecta.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-green-800 font-medium">Sua economia mensal:</p>
                  <p className="text-2xl font-bold text-green-700">
                    R$ {economia > 0 ? economia.toLocaleString(undefined, { maximumFractionDigits: 0 }) : 0}
                  </p>
                </div>
                
                {economia > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    Você economiza {economiaPercentual}% usando nossa solução de IA ilimitada!
                  </p>
                )}
              </div>
              
              <div className="pt-4 text-center">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white py-5 px-6">
                  <a href="https://api.whatsapp.com/send?phone=5512981156856&text=Olá,%20quero%20saber%20mais%20sobre%20a%20solução%20de%20IA%20ilimitada" target="_blank" rel="noopener noreferrer">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Economize agora mesmo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
