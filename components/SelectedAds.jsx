import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import ProductCard from './ProductCard';
import ContainerPrimary from './Container';

const SelectedAds = ({list}) => {

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
              {list?.map((item,index) => (
                  <SwiperSlide key={index}>
                    <ProductCard className='height-size-3' item={item} />
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default SelectedAds;
