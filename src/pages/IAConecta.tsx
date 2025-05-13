
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import HeroSection from "@/components/ia-conecta/HeroSection";
import ModelsSection from "@/components/ia-conecta/ModelsSection";
import ModelsDialog from "@/components/ia-conecta/ModelsDialog";
import RoiCalculator from "@/components/ia-conecta/RoiCalculator";
import ConversionCta from "@/components/ia-conecta/ConversionCta";
import TransformeSection from "@/components/ia-conecta/TransformeSection";

const IAConecta = () => {
  const [showAllModels, setShowAllModels] = useState(false);
  
  const handleShowAllModels = () => {
    setShowAllModels(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Transforme seu Atendimento - Nova seção */}
      <TransformeSection />

      {/* Modelos disponíveis */}
      <ModelsSection onShowAllModels={handleShowAllModels} />

      {/* Calculadora de ROI */}
      <RoiCalculator />
      
      {/* CTA de Alta Conversão */}
      <ConversionCta />

      {/* Modal de Todos os Modelos */}
      <ModelsDialog 
        open={showAllModels} 
        onOpenChange={setShowAllModels} 
      />

      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>
  );
};

export default IAConecta;
