import React from 'react';
import Link from 'next/link';

const OurDealSection = () => {
  const list = [
    {
      title: 'Winter',
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Winter-tiles-web_8576452c-8c0a-44af-ae90-3fee9fd85965.jpg?v=1644946386',
      link: '/',
    },
    {
      title: 'fragrance',
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/fragrance.jpg?v=1640066402',
      link: '/',
    },
    {
      title: 'footwear',
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/footware-Collection-tiles-web.jpg?v=1643183686',
      link: '/',
    },
    {
      title: 'Accessories',
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/jewellery.jpg?v=1640066589',
      link: '/',
    },
  ];

  return (
    <section className='our-deal-section mb-5 pb-3'>
      <div>
        <div className='px-3'>
          <ul className='nav row row-cols-2 row-cols-lg-4 gy-4 '>
            {list.map((item, index) => (
              <li key={index} className='col'>
                <div
                  className='card-bg-hover height-size-5 bg-cover text-white bg-black bg-opacity-25'
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <Link href={item.link}>
                    <div className='btn p-4 h-100 d-flex flex-column align-items-center justify-content-end'>
                      <h4 className='mb-0 text-white fw-bold text-uppercase'>
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurDealSection;
