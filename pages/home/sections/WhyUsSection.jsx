import React from 'react';
import ContainerPrimary from '../../../components/Container';

const WhyUsSection = () => {
  const list = [
    {
      title: 'Free Shipping',
      description:
        'All purchases over $199 are eligible for free shipping via USPS First Class Mail.',
      image: 'Free-Shipping.svg',
    },
    {
      title: 'Easy Payments',
      description: `All payments are processed instantly
      over a secure payment protocol.`,
      image: 'Payments.svg',
    },
    {
      title: 'Money-Back Guarantee',
      description: `If an item arrived damaged or you've
      changed your mind, you can send it
      back for a full refund.`,
      image: 'Money.svg',
    },
    {
      title: 'Finest Quality',
      description: `Designed to last, each of our products has
      been crafted with the finest materials.`,
      image: 'Finest-Quality.svg',
    },
  ];

  return (
    <section className='selected-section mb-5 pb-3'>
      <div>
        <ContainerPrimary>
          <div className=' mb-4 pb-2'>
            <h4 className='mb-5 me-auto fw-light text-center'>
              Why should you choose us?
            </h4>
            <ul className='nav row row-cols-2 row-cols-md-2 row-cols-lg-4 gy-5'>
              {list.map((item) => (
                <li key={item.image} className='px-4'>
                  <div className='mb-3' style={{ height: 70, width: 70 }}>
                    <img
                      className='h-100 w-100 d-block object-cover rounded-lg'
                      src={`/assets/images/why-us/${item.image}`}
                      alt='...'
                    />
                  </div>
                  <h6 className='mb-2 fw-normal text-capitalize'>
                    {item.title}
                  </h6>
                  <p className='mb-0 text-black-50'>
                    <small>{item.description}</small>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default WhyUsSection;
