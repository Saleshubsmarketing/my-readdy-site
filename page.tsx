'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import OurValues from './OurValues';
import TeamSection from './TeamSection';
import Certifications from './Certifications';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <Certifications />
      <Footer />
    </div>
  );
}