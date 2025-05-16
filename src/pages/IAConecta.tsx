
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import HeroSection from "@/components/ia-conecta/HeroSection";
import ModelsSection from "@/components/ia-conecta/ModelsSection";
import ModelsDialog from "@/components/ia-conecta/ModelsDialog";
import RoiCalculator from "@/components/ia-conecta/RoiCalculator";
import ConversionCta from "@/components/ia-conecta/ConversionCta";

const IAConecta = () => {
  const [showAllModels, setShowAllModels] = useState(false);
  const location = useLocation();
  
  const handleShowAllModels = () => {
    setShowAllModels(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tabs de navegação - com valor dinâmico baseado na rota atual */}
      <div className="container mx-auto mt-4 mb-8 px-4">
        <Tabs defaultValue={location.pathname === '/' ? 'home' : location.pathname.replace('/', '')} className="w-full flex justify-center">
          <TabsList>
            <TabsTrigger value="home" asChild>
              <Link to="/" className="px-4 py-2">Início</Link>
            </TabsTrigger>
            <TabsTrigger value="servidores" asChild>
              <Link to="/servidores" className="px-4 py-2">Servidores</Link>
            </TabsTrigger>
            <TabsTrigger value="ia-conecta" asChild>
              <Link to="/ia-conecta" className="px-4 py-2">IA Conecta</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Hero Section */}
      <HeroSection />

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
