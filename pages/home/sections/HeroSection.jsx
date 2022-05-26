import React from 'react';
import Link from 'next/link';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContainerPrimary from '../../../components/Container';

const HeroSection = () => {
  const list = [
    {
      banner:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Banner-1920-X-600-Summer-Unstitched.jpg?v=1646225807',
    },
    {
      banner:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Banner-1920-X-600-western.jpg?v=1646225897',
    },
    {
      banner:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Banner-1920-X-600-Ready-to-Wear_9d845705-126b-4892-b1e3-b0717b2461cc.jpg?v=1646743181',
    },
    {
      banner:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Banner-1920-X-600-Perfume.jpg?v=1642762551',
    },
    {
      banner:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Banner-1920-X-600-Accessories.jpg?v=1646226145',
    },
    {
      banner:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Banner-1920-X-600-unstitched-embroidered_206a6113-c2f0-43a7-b387-f8c0e6eb88ea.jpg?v=1646226231',
    },
  ];

  return (
    <section className='hero-section mb-5'>
      <div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {list.map((item) => (
            <>
              <SwiperSlide>
                <Link href='/'>
                  <a
                    style={{
                      backgroundImage: `url(${item.banner})`,
                    }}
                    className='d-block hero-item height-size-1 bg-cover-1 '
                  >
                    <ContainerPrimary className='h-100'>
                      {/* <div className='px-0  col-12 col-md-6 col-lg-6 col-xl-6 h-100'>
                    <div className='py-4 h-100 d-flex flex-column justify-content-center'>
                      <h1 className='mb-0 display-3 fw-bold text-white'>
                        Sale of the summer collection
                      </h1>
                      <div className='mt-3'>
                        <Link href='/' className='text-uppercase link-white'>
                          <span className='btn btn-primary hover-scale-small rounded-circle me-3'>
                            <i className='mdi mdi-arrow-right' />
                          </span>
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                    </ContainerPrimary>
                  </a>
                </Link>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
