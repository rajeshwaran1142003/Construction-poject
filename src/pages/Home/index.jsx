import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ContractorsSection from './ContractorsSection';
import DirectorSection from './DirectorSection';
import ProjectsSection from './ProjectsSection';
import NewsSection from './NewsSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Amman Construction and Engineering PTE Ltd | Building Trust, Delivering Excellence</title>
        <meta 
          name="description" 
          content="Leading construction company in Singapore specializing in mechanical engineering, electrical works, and structural engineering. Delivering innovative, safe, and sustainable construction solutions with decades of expertise." 
        />
        <meta property="og:title" content="Amman Construction and Engineering PTE Ltd | Building Trust, Delivering Excellence" />
        <meta property="og:description" content="Leading construction company in Singapore specializing in mechanical engineering, electrical works, and structural engineering. Delivering innovative, safe, and sustainable construction solutions with decades of expertise." />
      </Helmet>

      <div className="w-full bg-[#f9fafb]">
        <Header />
        
        <main className="flex flex-col gap-[44px]">
          <HeroSection />
          <ContractorsSection />
          <DirectorSection />
          <ProjectsSection />
          <NewsSection />
          <ServicesSection />
          <GallerySection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;