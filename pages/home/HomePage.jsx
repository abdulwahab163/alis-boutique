import React from 'react';
import HeroSection from './sections/HeroSection';
import SelectedAds from '../../components/SelectedAds';
import OurDealSection from './sections/OurDealSection';
import ProductsTodaySection from './sections/ProductsTodaySection';

const HomePage = () => {
  return (
    <main className='h-100'>
      <HeroSection />
      <OurDealSection />
      <SelectedAds />
      <ProductsTodaySection />
    </main>
  );
};

export default HomePage;
