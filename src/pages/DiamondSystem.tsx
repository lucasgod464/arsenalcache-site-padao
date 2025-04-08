
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import DiamondHero from '@/components/diamond/DiamondHero';
import DiamondAbout from '@/components/diamond/DiamondAbout';
import DiamondFeatures from '@/components/diamond/DiamondFeatures';
import DiamondPlans from '@/components/diamond/DiamondPlans';
import DiamondTestimonials from '@/components/diamond/DiamondTestimonials';
import DiamondFaq from '@/components/diamond/DiamondFaq';
import RoiCalculator from '@/components/RoiCalculator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingCta from '@/components/FloatingCta';
import DetailedFeaturesList from '@/components/DetailedFeaturesList';

const DiamondSystem = () => {
  useEffect(() => {
    // Initialize fade-in animations with better visibility
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // Check if the element is in the viewport
        if(position.top < window.innerHeight - 50) {
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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sistema Diamond | Planos de Conexões para WhatsApp</title>
        <meta name="description" content="Sistema Diamond oferece planos de conexões para WhatsApp com diferentes capacidades e benefícios. Conheça nossos planos e escolha o ideal para seu negócio." />
        <style>
          {`
          .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .float-animation {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes pulse-bg {
            0% { background-color: rgba(59, 130, 246, 0.1); }
            50% { background-color: rgba(59, 130, 246, 0.2); }
            100% { background-color: rgba(59, 130, 246, 0.1); }
          }
          .pulse-bg {
            animation: pulse-bg 3s ease-in-out infinite;
          }
          @keyframes shimmer {
            0% { background-position: -100% 0; }
            100% { background-position: 100% 0; }
          }
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 200% 100%;
            animation: shimmer 3s infinite;
          }
          .features-gradient {
            background: linear-gradient(to bottom, #f0f4ff, #ffffff);
          }
          `}
        </style>
      </Helmet>
      
      <Navbar />
      <DiamondHero />
      <DetailedFeaturesList />
      <DiamondAbout />
      <DiamondFeatures />
      <DiamondPlans />
      <RoiCalculator />
      <DiamondTestimonials />
      <DiamondFaq />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>
  );
};

export default DiamondSystem;
