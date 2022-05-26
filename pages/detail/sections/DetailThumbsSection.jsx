import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import ImageZoom from 'react-image-zooom';
import { Accordion } from 'react-bootstrap';

const DetailThumbsSection = ({ description }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [readmore, setReadMore] = useState(false);

  const list = [
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/W1114SU-FRE-001.jpg?v=1642487628',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_0622_b4f9ae67-26ad-40aa-8536-ece5917823b0.jpg?v=1643277446',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_0629_2a321b0c-c417-4392-847a-18d099e95ac8.jpg?v=1643277446',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_0651_e9c6c054-f6bb-4250-8c92-16cc8fe21e76.jpg?v=1642487625',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_0647.jpg?v=1642487626',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/w1114_a7b1d3bf-6de7-4513-8654-68f81a6137e5.jpg?v=1645771088',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/2635/3244/products/w1114tr_c59dbaef-b73f-4408-956c-dab09457267d.jpg?v=1645771088',
    },
  ];

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
          {list.map((item) => (
            <SwiperSlide>
              <button
                type='button'
                className='mt-3 btn bg-light bg-opacity-25 hover-scale-small p-0 image-size-small w-100'
              >
                <img
                  className='d-block h-100 w-100 object-contain'
                  src={`${item.src}`}
                  alt='...'
                />
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
            <div>
              <b>Code:</b> W1114SU-FRE-001
            </div>
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
          {list.map((item) => (
            <SwiperSlide>
              <div className='height-size-4 bg-light bg-opacity-25'>
                <ImageZoom
                  width='100%'
                  height='100%'
                  src={`${item.src}`}
                  alt='....'
                  zoom='250'
                />
                {/* <img
                  className='d-block h-100 w-100'
                  src={`${item.src}`}
                  alt='...'
                /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DetailThumbsSection;
