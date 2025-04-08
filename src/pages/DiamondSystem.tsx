
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

const DiamondSystem = () => {
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>Sistema Diamond | Planos de Conexões para WhatsApp</title>
        <meta name="description" content="Sistema Diamond oferece planos de conexões para WhatsApp com diferentes capacidades e benefícios. Conheça nossos planos e escolha o ideal para seu negócio." />
        <style>{`
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
        `}</style>
      </Helmet>
      
      <Navbar />
      <DiamondHero />
      <DiamondFeatures />
      <DiamondAbout />
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
