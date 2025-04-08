
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import DiamondHero from '@/components/diamond/DiamondHero';
import DiamondFeatures from '@/components/diamond/DiamondFeatures';
import DiamondPlans from '@/components/diamond/DiamondPlans';
import DiamondTestimonials from '@/components/diamond/DiamondTestimonials';
import DiamondFaq from '@/components/diamond/DiamondFaq';
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
      </Helmet>
      
      <Navbar />
      <DiamondHero />
      <DiamondFeatures />
      <DiamondPlans />
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
