import React from 'react';
import ContainerPrimary from '../../components/Container';
import ProfileSection from './sections/ProfileSection';

const ProfilePage = () => {
  return (
    <main className='h-100 py-5'>
      <ContainerPrimary>
        <ProfileSection />
      </ContainerPrimary>
    </main>
  );
};

export default ProfilePage;
