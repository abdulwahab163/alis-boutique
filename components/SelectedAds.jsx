import React from 'react';
import ContainerPrimary from './Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import Link from 'next/link';

const SelectedAds = () => {
  const list = [
    {
      image:
        'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423',
      hoverImage:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_9544_6fd4fc26-bb9a-44f2-824f-213b96fbd3d2_533x.jpg?v=1646826873',
      name: 'Tear Drop Dangling Earrings',
      price: '$119.99',
      discountState: true,
      isHoverImage: true,
      discount: '30%',
      discountPrice: '$89.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC01292_940x.jpg?v=1646892566',
      hoverImage:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC01316_533x.jpg?v=1646892566',
      isHoverImage: true,

      name: 'Loose Knit 3/4 Sleeve',
      price: '$119.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_9624_fba97b12-bc22-4e16-a13c-4d3e70363995_533x.jpg?v=1646639839',
      name: 'Basic Slim Fit T-Shirt',
      price: '$100',

      discountState: true,
      discount: '50%',
      discountPrice: '$50',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_0080_145f7167-08d6-4d1f-8708-b707014bbb48_533x.jpg?v=1642764666',
      name: 'Animal Textured Shoulder Bag',
      price: '$119.99',
    },
  ];

  return (
    <section className='selected-section mb-5 pb-3'>
      <div>
        <ContainerPrimary>
          <div className=' mb-4 pb-2 d-flex flex-wrap align-items-center'>
            <h4 className='mb-0 me-auto fw-500 text-capitalize'>
              new arrivals
            </h4>
            <Link href='/'>
              <a>Show more</a>
            </Link>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation={true}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {list.map((item) => (
                <>
                  <SwiperSlide>
                    <ProductCard className='height-size-3' item={item} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default SelectedAds;
