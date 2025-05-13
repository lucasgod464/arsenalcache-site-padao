
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/ia-conecta/HeroSection';
import ModelsSection from '@/components/ia-conecta/ModelsSection';
import RoiCalculator from '@/components/ia-conecta/RoiCalculator';
import ComparisonCard from '@/components/ia-conecta/ComparisonCard';
import TransformeSection from '@/components/ia-conecta/TransformeSection';
import ConversionCta from '@/components/ia-conecta/ConversionCta';
import { Bot, Brain } from "lucide-react";

const IAConecta = () => {
  const [showModelsDialog, setShowModelsDialog] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize fade-in animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handler for showing all models
  const handleShowAllModels = () => {
    setShowModelsDialog(true);
    console.log("Showing all models dialog");
    // Aqui você poderia implementar um modal ou diálogo para mostrar todos os modelos
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TransformeSection />
      <ModelsSection onShowAllModels={handleShowAllModels} />
      <RoiCalculator />
      <ComparisonCard
        title="IA Conecta"
        badge="Premium"
        badgeClassName="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        price="R$ 360/mês"
        priceNote="Valor fixo independente do uso"
        features={[
          "Acesso ilimitado a todos os modelos de IA",
          "Capacidade multimodal completa",
          "Integrações com sistemas empresariais",
          "Suporte prioritário 24/7",
          "Treinamento e onboarding personalizado",
          "Segurança e conformidade empresarial"
        ]}
        isOurService={true}
        icon={<Brain className="h-6 w-6 text-white" />}
        ctaText="Começar agora"
        ctaLink="#contato"
      />
      <ConversionCta />
      <Footer />
    </div>
  );
};

export default IAConecta;
