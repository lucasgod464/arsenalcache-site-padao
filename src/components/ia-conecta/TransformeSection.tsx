
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  CircleCheck, 
  MessageSquare, 
  Clock, 
  Star, 
  Users, 
  ThumbsUp
} from 'lucide-react';

interface MetricProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const Metric: React.FC<MetricProps> = ({ value, label, icon, color }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${color} hover:shadow-lg transition-all`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-gray-600 mt-1">{label}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('border', 'bg').replace('-500', '-100')} text-${color.replace('border-', '')}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const TransformeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm mb-4">
            Transformação Digital
          </Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Transforme seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Atendimento</span> com IA
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Veja como a inteligência artificial ilimitada da IA Conecta pode revolucionar 
            a experiência de comunicação com seus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Metric 
            value="24/7" 
            label="Disponibilidade automática" 
            icon={<Clock className="h-6 w-6" />}
            color="border-blue-500"
          />
          <Metric 
            value="90%" 
            label="Redução no tempo de resposta" 
            icon={<MessageSquare className="h-6 w-6" />}
            color="border-purple-500"
          />
          <Metric 
            value="5x" 
            label="Mais atendimentos simultâneos" 
            icon={<Users className="h-6 w-6" />}
            color="border-green-500"
          />
          <Metric 
            value="73%" 
            label="Clientes preferem IA imediata" 
            icon={<ThumbsUp className="h-6 w-6" />}
            color="border-amber-500"
          />
          <Metric 
            value="96%" 
            label="Precisão nas respostas" 
            icon={<CircleCheck className="h-6 w-6" />}
            color="border-red-500"
          />
          <Metric 
            value="4.8" 
            label="Avaliação média de satisfação" 
            icon={<Star className="h-6 w-6" />}
            color="border-indigo-500"
          />
        </div>

        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Acelere sua Transformação Digital</h3>
              <p className="mb-6">
                Empresas que adotam IA no atendimento reportam economia de até 30% nos custos operacionais
                e aumento de 25% na satisfação dos clientes.
              </p>
              <ul className="space-y-3">
                {[
                  "Respostas instantâneas para perguntas frequentes",
                  "Atendimento 24 horas por dia, 7 dias por semana",
                  "Personalização com base no histórico do cliente",
                  "Integração com seus sistemas existentes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CircleCheck className="h-5 w-5 text-purple-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Case de Sucesso</h4>
                <p className="italic mb-4">
                  "Implementamos a IA Conecta e reduzimos nosso tempo de resposta em 85%. 
                  Nossa equipe agora foca em casos complexos enquanto a IA lida com 
                  questões rotineiras 24 horas por dia."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">
                    AL
                  </div>
                  <div>
                    <p className="font-medium">Ana Lima</p>
                    <p className="text-sm text-purple-200">Diretora de Atendimento, TechSolutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformeSection;
