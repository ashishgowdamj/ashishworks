
import React from 'react';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
