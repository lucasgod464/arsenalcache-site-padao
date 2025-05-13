
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ZproSection from '@/components/ZproSection';
import PricingSection from '@/components/PricingSection';
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
      <HeroSection />
      <TransformeSection />
      <ZproSection />
      <RoiCalculator />
      <FreeTrial />
      <PricingSection />
      <DetailedFeaturesList />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <FloatingCta />
    </div>
  );
};

export default Index;
