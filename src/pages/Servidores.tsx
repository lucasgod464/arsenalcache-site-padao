import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingCta from "@/components/FloatingCta";

const Servidores = () => {
  const location = useLocation();
  
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

      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>
  );
};

export default Servidores;
