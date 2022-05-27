import Head from 'next/head';
import SelectedAds from '../components/SelectedAds';
import HeroSection from '../pages/home/sections/HeroSection';
import OurDealSection from './home/sections/OurDealSection';
import ProductsTodaySection from './home/sections/ProductsTodaySection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-100'>
        <HeroSection />
        <OurDealSection />
        <SelectedAds />
        <ProductsTodaySection />
      </main>
    </>
  );
}