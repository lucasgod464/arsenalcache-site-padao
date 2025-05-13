
import React from "react";
import { Check, X, ArrowRight, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  text: string;
  isPositive: boolean;
}

interface ComparisonCardProps {
  title: string;
  badge: string;
  badgeClassName: string;
  price: string;
  priceNote?: string;
  features: string[];
  isOurService?: boolean;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

const ComparisonCard = ({
  title,
  badge,
  badgeClassName,
  price,
  priceNote,
  features,
  isOurService = false,
  icon,
  ctaText,
  ctaLink
}: ComparisonCardProps) => {
  return (
    <Card className={`${isOurService 
      ? "bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 shadow-lg hover:shadow-xl transition-all" 
      : "bg-white border border-gray-200 shadow-md"}`}>
      <CardHeader className={`${isOurService 
        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white pb-6" 
        : "bg-gradient-to-r from-gray-100 to-gray-200 pb-6"}`}>
        <div className="space-y-1.5">
          <Badge className={`${badgeClassName} border-0 mb-2`}>
            {badge}
          </Badge>
          <CardTitle className={`text-2xl font-bold flex items-center gap-2 ${isOurService ? "text-white" : "text-gray-800"}`}>
            {title}
            {icon}
          </CardTitle>
          <div className="mt-4">
            <div className="flex items-baseline">
              <span className={`text-4xl font-extrabold tracking-tight ${isOurService ? "text-white" : "text-gray-800"}`}>{price}</span>
            </div>
            {priceNote && <p className={`text-sm ${isOurService ? "text-purple-100" : "text-gray-500"} mt-2`}>{priceNote}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h4 className={`font-semibold mb-3 ${isOurService ? "text-purple-700 flex items-center gap-2" : "text-gray-700"}`}>
              {isOurService && (
                <>
                  <BrainCircuit className="h-5 w-5 text-purple-600" />
                  Vantagens exclusivas:
                </>
              )}
              {!isOurService && "Limitações:"}
            </h4>
            <ul className="space-y-2.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  {isOurService || index >= 4 ? (
                    <Check className={`w-5 h-5 ${isOurService ? "text-green-500" : "text-gray-400"} flex-shrink-0 mt-0.5`} />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`${isOurService ? "text-gray-700" : "text-gray-600"}`}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${isOurService ? "bg-white p-4 rounded-lg border border-purple-100 shadow-sm" : "bg-gray-50 p-4 rounded-lg border border-gray-200"}`}>
            <h5 className={`font-medium ${isOurService ? "text-purple-700 mb-2 flex items-center gap-2" : "text-gray-700 mb-2"}`}>
              {isOurService ? (
                <>
                  <ArrowRight className="h-4 w-4" />
                  Economia real e previsibilidade
                </>
              ) : "Custos imprevisíveis"}
            </h5>
            <p className="text-gray-600 text-sm">
              {isOurService ? 
                "Com nossa solução de valor fixo, você economiza até 80% em comparação com APIs de IA tradicionais, além de ter previsibilidade total de custos independente do volume de uso." : 
                "Com cobrança por token, os custos aumentam proporcionalmente ao uso, tornando difícil prever gastos mensais e podendo resultar em faturas surpreendentemente altas."}
            </p>
          </div>
        </div>
      </CardContent>
      {isOurService && ctaText && ctaLink && (
        <CardFooter className="pt-2 pb-6 px-6">
          <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-lg transition-all shadow-md hover:shadow-xl">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ComparisonCard;
