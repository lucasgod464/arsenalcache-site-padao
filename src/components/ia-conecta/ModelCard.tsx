
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModelCardProps {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  features: string[];
}

const ModelCard = ({ title, description, badge, badgeColor, icon, features }: ModelCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${badgeColor} w-full`}></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge className={`bg-${badgeColor.split("from-")[1].split(" ")[0].replace("-500", "-100")} text-${badgeColor.split("from-")[1].split(" ")[0].replace("-500", "-700")}`}>
            {badge}
          </Badge>
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ModelCard;
