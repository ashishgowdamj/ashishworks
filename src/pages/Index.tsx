import React from 'react';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import Now from '@/components/sections/Now';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Stack from '@/components/sections/Stack';
import Process from '@/components/sections/Process';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FAQ from '@/components/sections/FAQ';
import Education from '@/components/sections/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Index = () => (
  <div className="min-h-screen bg-[#0b0b0b] pb-2">
    <Hero />
    <StatsStrip />
    <Now />
    <About />
    <Portfolio />
    <Stack />
    <Process />
    <ServicesGrid />
    <FAQ />
    <Education />
    <Contact />
    <Footer />
    <BottomNav />
  </div>
);

export default Index;
