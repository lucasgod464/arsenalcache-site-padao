
import React, { useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ZproSection from '@/components/ZproSection';
import SinglePlanCard from '@/components/SinglePlanCard';
import DetailedFeaturesList from '@/components/DetailedFeaturesList';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingCta from '@/components/FloatingCta';
import RoiCalculator from '@/components/RoiCalculator';
import FreeTrial from '@/components/FreeTrial';
import TransformeSection from '@/components/TransformeSection';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize fade-in animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // Check if the element is in the viewport
        if(position.top < window.innerHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load
    setTimeout(handleScroll, 100);
    
    // Add aspect ratio support for iframes
    const style = document.createElement('style');
    style.textContent = `
      .aspect-w-16 {
        position: relative;
        padding-bottom: 56.25%;
      }
      .aspect-w-16 iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tabs de navegação */}
      <div className="container mx-auto mt-4 mb-8 px-4">
        <Tabs 
          defaultValue="home" 
          value={location.pathname === '/' ? 'home' : location.pathname === '/servidores' ? 'servers' : location.pathname === '/ia-conecta' ? 'ia' : 'home'} 
          className="w-full flex justify-center"
        >
          <TabsList>
            <TabsTrigger value="home" asChild>
              <Link to="/" className="px-4 py-2">Início</Link>
            </TabsTrigger>
            <TabsTrigger value="servers" asChild>
              <Link to="/servidores" className="px-4 py-2">Servidores</Link>
            </TabsTrigger>
            <TabsTrigger value="ia" asChild>
              <Link to="/ia-conecta" className="px-4 py-2">IA Conecta</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <HeroSection />
      <TransformeSection />
      <ZproSection />
      <FreeTrial />
      <section id="precos" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plano <span className="text-green-600">Whaticket Profissional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solução completa de atendimento para transformar seu negócio
            </p>
          </div>
          <SinglePlanCard />
        </div>
      </section>
      <DetailedFeaturesList />
      <TestimonialsSection />
      <RoiCalculator />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>
  );
};

export default Index;
