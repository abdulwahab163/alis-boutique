import React from 'react';
import ContainerPrimary from '../../components/Container';
import CartSummarySection from './sections/CartSummarySection';

const CheckoutPage = () => {
  return (
    <main className='h-100'>
      <section className=' mb-5'>
        <ContainerPrimary>
          <div>
            <CartSummarySection isPage={true} />
          </div>
        </ContainerPrimary>
      </section>
    </main>
  );
};

export default CheckoutPage;
