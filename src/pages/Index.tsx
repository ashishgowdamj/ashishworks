import React from 'react';
import { Column } from '@/components/v2/primitives';
import { TopBar, Hero, Links } from '@/components/v2/Masthead';
import WorkList from '@/components/v2/WorkList';
import {
  NowPanel,
  ExperiencePanel,
  StackPanel,
  ProcessPanel,
  ServicesPanel,
  FaqPanel,
  EducationPanel,
} from '@/components/v2/Panels';
import { ContactPanel, FooterBar } from '@/components/v2/Closing';

const Index = () => (
  <div className="v2-root">
    <Column>
      <TopBar />
      <Hero />
      <Links />
      <WorkList />
      <NowPanel />
      <ExperiencePanel />
      <StackPanel />
      <ProcessPanel />
      <ServicesPanel />
      <FaqPanel />
      <EducationPanel />
      <ContactPanel />
      <FooterBar />
    </Column>
  </div>
);

export default Index;
