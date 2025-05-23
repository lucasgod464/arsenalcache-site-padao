
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CircleCheck, MessageSquare, Clock, Star, Users, ThumbsUp } from 'lucide-react';

interface MetricProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const Metric: React.FC<MetricProps> = ({
  value,
  label,
  icon,
  color
}) => {
  return <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${color} hover:shadow-lg transition-all`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-gray-600 mt-1">{label}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('border', 'bg').replace('-500', '-100')} text-${color.replace('border-', '')}`}>
          {icon}
        </div>
      </div>
    </div>;
};

const TransformeSection = () => {
  const metrics = [{
    icon: <MessageSquare className="h-6 w-6" />,
    value: "85%",
    label: "Aumento em Vendas",
    color: "border-blue-500"
  }, {
    icon: <Clock className="h-6 w-6" />,
    value: "68%",
    label: "Redução no Tempo de Resposta",
    color: "border-green-500"
  }, {
    icon: <CircleCheck className="h-6 w-6" />,
    value: "92%",
    label: "Satisfação do Cliente",
    color: "border-amber-500"
  }, {
    icon: <Users className="h-6 w-6" />,
    value: "3.5x",
    label: "Mais Atendimentos",
    color: "border-purple-500"
  }];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Resultados Comprovados</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Transforme seu Atendimento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o impacto que nossa solução pode trazer para o seu negócio com métricas reais de clientes que já utilizam nossa plataforma.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Metric 
              key={index} 
              value={metric.value} 
              label={metric.label} 
              icon={metric.icon} 
              color={metric.color} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformeSection;
