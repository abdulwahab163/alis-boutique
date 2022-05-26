import React from 'react';
import SelectedAds from '../../components/SelectedAds';
import DetailTabs from './sections/DetailTabs';
import DetailView from './sections/DetailView';

const DetailPage = () => {
  return (
    <main className='h-100'>
      <DetailView />
      <DetailTabs />
      <SelectedAds />
    </main>
  );
};

export default DetailPage;
