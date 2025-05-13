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
  return;
};
export default TransformeSection;