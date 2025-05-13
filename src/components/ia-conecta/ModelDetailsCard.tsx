
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModelDetailsCardProps {
  title: string;
  description: string;
  badge: {
    text: string;
    className: string;
  };
  icon: React.ReactNode;
  details: React.ReactNode;
  headerColor: string;
}

const ModelDetailsCard = ({ 
  title, 
  description, 
  badge, 
  icon, 
  details,
  headerColor
}: ModelDetailsCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className={`h-2 ${headerColor} w-full`}></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge className={badge.className}>{badge.text}</Badge>
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {details}
      </CardContent>
    </Card>
  );
};

export default ModelDetailsCard;
