import React from 'react';
import Navigation from '../components/Navigation';
import Showcase from '../components/Showcase';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import GoogleReviewSection from '../components/GoogleReviewSection';
import QuoteRequestSection from '../components/QuoteRequestSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <Showcase />
      <QuoteRequestSection />
      <GoogleReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
