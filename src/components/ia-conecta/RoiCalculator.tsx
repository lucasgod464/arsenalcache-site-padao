
import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, FileText } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { useIsMobile } from "@/hooks/use-mobile";

// Preços reais do ChatGPT/OpenAI (em USD por 1000 tokens)
const modelPrices = {
  'gpt-4o': { input: 0.01, output: 0.03 },
  'gpt-4': { input: 0.03, output: 0.06 },
  'gpt-4-turbo': { input: 0.01, output: 0.03 },
  'gpt-4-vision': { input: 0.01, output: 0.03 }
};

// Taxa de câmbio média USD para BRL
const exchangeRate = 5.5;

const RoiCalculator = () => {
  const [usuariosIA, setUsuariosIA] = useState(40);
  const [mensagensMedia, setMensagensMedia] = useState(200);
  const [tokensPorMensagem, setTokensPorMensagem] = useState(1500);
  const [tokensResposta, setTokensResposta] = useState(2000);
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const isMobile = useIsMobile();
  
  // Cálculos para OpenAI (cobrado por token com base no modelo selecionado)
  const tokensEntradaMensal = usuariosIA * mensagensMedia * tokensPorMensagem;
  const tokensSaidaMensal = usuariosIA * mensagensMedia * tokensResposta;
  
  const custoEntradaUSD = (tokensEntradaMensal / 1000) * modelPrices[selectedModel].input;
  const custoSaidaUSD = (tokensSaidaMensal / 1000) * modelPrices[selectedModel].output;
  
  // Conversão para BRL
  const custoEntradaBRL = custoEntradaUSD * exchangeRate;
  const custoSaidaBRL = custoSaidaUSD * exchangeRate;
  
  // Custo mensal total em BRL
  const custoMensalOpenAI = custoEntradaBRL + custoSaidaBRL;
  
  // Custo mensal IA Conecta (preço fixo - ALTERADO PARA R$360)
  const custoMensalIAConecta = 360;
  
  // Economia
  const economia = custoMensalOpenAI - custoMensalIAConecta;
  const economiaPercentual = custoMensalOpenAI > 0 ? ((economia / custoMensalOpenAI) * 100).toFixed(0) : "0";
  
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
            Veja quanto você economiza ao usar nossa solução de IA ilimitada comparada com OpenAI/ChatGPT
            com preços reais e atualizados
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
                  <Label htmlFor="model">Modelo de IA da OpenAI:</Label>
                  <span className="font-semibold text-purple-700">{selectedModel}</span>
                </div>
                <Select
                  value={selectedModel}
                  onValueChange={setSelectedModel}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um modelo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="gpt-4-vision">GPT-4 Vision</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">
                  Preços por 1k tokens (entrada/saída): ${modelPrices[selectedModel].input}/${modelPrices[selectedModel].output} USD
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="usuarios">Número de usuários de IA:</Label>
                  <span className="font-semibold text-purple-700">{usuariosIA}</span>
                </div>
                <Slider
                  id="usuarios"
                  min={1}
                  max={100}
                  step={1}
                  value={[usuariosIA]}
                  onValueChange={(value) => setUsuariosIA(value[0])}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="mensagens">Mensagens por usuário/mês:</Label>
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
                  <Label htmlFor="tokensEntrada">Tokens médios por prompt:</Label>
                  <span className="font-semibold text-purple-700">{tokensPorMensagem}</span>
                </div>
                <Slider
                  id="tokensEntrada"
                  min={500}
                  max={4000}
                  step={100}
                  value={[tokensPorMensagem]}
                  onValueChange={(value) => setTokensPorMensagem(value[0])}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="tokensSaida">Tokens médios por resposta:</Label>
                  <span className="font-semibold text-purple-700">{tokensResposta}</span>
                </div>
                <Slider
                  id="tokensSaida"
                  min={500}
                  max={4000}
                  step={100}
                  value={[tokensResposta]}
                  onValueChange={(value) => setTokensResposta(value[0])}
                  className="py-4"
                />
              </div>

              <div className="pt-4 bg-purple-50 p-4 rounded-lg border border-purple-100">
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                  <FileText className="h-4 w-4" /> Resumo do uso mensal:
                </p>
                <p className="text-sm text-purple-700">
                  Entrada: {(tokensEntradaMensal / 1000000).toFixed(2)} milhões de tokens (R$ {custoEntradaBRL.toFixed(2)})
                </p>
                <p className="text-sm text-purple-700">
                  Saída: {(tokensSaidaMensal / 1000000).toFixed(2)} milhões de tokens (R$ {custoSaidaBRL.toFixed(2)})
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
                      formatter={(value) => [`R$${Number(value).toLocaleString(undefined, {maximumFractionDigits: 2})}`, "Custo Mensal"]}
                    />
                    <Bar dataKey="valor" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 mb-1">OpenAI ({selectedModel})</p>
                  <p className="text-xl font-bold text-red-700">
                    R$ {custoMensalOpenAI.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    Taxa de câmbio: $1 USD = R$ {exchangeRate.toFixed(2)}
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <p className="text-sm text-purple-600 mb-1">IA Conecta (ilimitado)</p>
                  <p className="text-xl font-bold text-purple-700">
                    R$ {custoMensalIAConecta.toLocaleString()}
                  </p>
                  <p className="text-xs text-purple-600 mt-1">
                    Preço fixo mensal, sem contagem de tokens
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-green-800 font-medium">Sua economia mensal:</p>
                  <p className="text-2xl font-bold text-green-700">
                    R$ {economia > 0 ? economia.toLocaleString(undefined, { maximumFractionDigits: 2 }) : 0}
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
