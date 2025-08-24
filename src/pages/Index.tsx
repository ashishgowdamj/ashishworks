
import React from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Index;
