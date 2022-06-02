import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import ImageZoom from 'react-image-zooom';
import { Accordion } from 'react-bootstrap';
import Image from 'next/image';

const DetailThumbsSection = ({ productImages, description }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [readmore, setReadMore] = useState(false);

  return (
    <>
      <div className='mt-4'>
        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
        >
          {productImages?.map((item) => (
            <SwiperSlide key={item.url}>
              <button
                type='button'
                className='mt-3 btn bg-light bg-opacity-25 hover-scale-small p-0 image-size-small w-100'
              >
                <span className='d-block h-100 w-100 position-relative'>
                  <Image
                    className='rounded-circle'
                    src={`${item.url}`}
                    alt='..'
                    layout='fill'
                    objectFit='contain'
                  />
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <ul className='nav flex-column gap-3 mt-5'>
          <li>
            <div>
              <h5 className='mb-4 fw-600 border-bottom border-primary d-inline-block'>
                Description
              </h5>
              <p className='description pre-wrap mb-0 text-primary text-opacity-75'>
                <span className={`${readmore ? 'show' : 'hide'}`}>
                  {description}
                </span>
                <div
                  onClick={() => setReadMore(!readmore)}
                  className='d-block cursor-pointer mb-0 link-dark text-capitalize'
                >
                  {readmore ? 'less' : 'read'} more{' '}
                  <i
                    className={`mdi ${
                      readmore
                        ? 'mdi-arrow-up-drop-circle'
                        : 'mdi-arrow-down-drop-circle'
                    } `}
                  />
                </div>
              </p>
            </div>
          </li>
          <li>
          </li>
          <li>
            <div>
              <Accordion className='mb-3'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Care Instructions</Accordion.Header>
                  <Accordion.Body>
                    Wash light and bright colors separately. Do not bleach. Do
                    not twist/wring, warm iron to sequined, beaded, and delicate
                    fabrics. Do not dry in direct sunlight.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>Disclaimer</Accordion.Header>
                  <Accordion.Body>
                    Actual colors of the product may vary from the colors being
                    displayed on your device.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </li>
        </ul>
      </div>
      <div className='mt-4'>
        <Swiper
          modules={[FreeMode, Thumbs, Navigation]}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={true}
        >
          {productImages?.map((item) => (
            <SwiperSlide key={item.url}>
              <div className='height-size-4 bg-light bg-opacity-25'>
                <ImageZoom
                  width='100%'
                  height='100%'
                  src={`${item.url}`}
                  alt='....'
                  zoom='250'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DetailThumbsSection;
