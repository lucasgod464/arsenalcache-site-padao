
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  X, 
  ArrowRight, 
  Brain, 
  Code, 
  Database, 
  Server, 
  Zap,
  Workflow,
  Grid3x3,
  Bot,
  Sparkles,
  BookOpen,
  Trophy,
  BrainCircuit,
  MessageCircle,
  MessageSquare
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";
import HeroSection from "@/components/ia-conecta/HeroSection";
import ModelsSection from "@/components/ia-conecta/ModelsSection";
import IaIlimitadaSection from "@/components/ia-conecta/IaIlimitadaSection";
import ModelsDialog from "@/components/ia-conecta/ModelsDialog";

const IAConecta = () => {
  const [showAllModels, setShowAllModels] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Modelos disponíveis */}
      <ModelsSection onShowAllModels={() => setShowAllModels(true)} />

      {/* IA Ilimitada Section */}
      <IaIlimitadaSection />

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
