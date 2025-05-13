
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/ia-conecta/HeroSection';
import ModelsSection from '@/components/ia-conecta/ModelsSection';
import RoiCalculator from '@/components/ia-conecta/RoiCalculator';
import ComparisonCard from '@/components/ia-conecta/ComparisonCard';
import TransformeSection from '@/components/ia-conecta/TransformeSection';
import ConversionCta from '@/components/ia-conecta/ConversionCta';

const IAConecta = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TransformeSection />
      <ModelsSection />
      <RoiCalculator />
      <ComparisonCard />
      <ConversionCta />
      <Footer />
    </div>
  );
};

export default IAConecta;
