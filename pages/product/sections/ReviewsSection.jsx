import Image from 'next/image';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import StarComponent from '../../../components/StarComponent';

const ReviewsSection = () => {
  const ratingArr = [
    { number: 1, rating: 0 },
    { number: 2, rating: 25 },
    { number: 3, rating: 50 },
    { number: 4, rating: 75 },
    { number: 5, rating: 100 },
  ];

  const userReview = [{}, {}, {}];

  return (
    <div className='py-5'>
      <ul className='nav row align-items-center justify-content-between gy-5'>
        <li className='col-12 col-lg-6 col-xl-5'>
          <ul className='nav row-cols-1 row-cols-md-2'>
            <li className='text-center'>
              <ul className='nav flex-column'>
                <li>
                  <h1 className='mb-0 fw-normal display-4 lh-1'>4.5</h1>
                </li>
                <li>
                  <div className='fs-4'>
                    <StarComponent rating={4.5} />
                  </div>
                </li>
                <li>
                  <div className='d-flex align-items-center justify-content-center text-black-50'>
                    <span className='me-1'>
                      <i className='mdi mdi-24px mdi-account-outline' />
                    </span>
                    <span>81 all opinions</span>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div>
                <ul className='nav flex-column gap-2'>
                  {ratingArr.map((item) => (
                    <li key={item.number}>
                      <div className='d-flex align-items-center'>
                        <span className='text-warning'>
                          <i className='mdi-18px mdi mdi-star' />
                        </span>
                        <span className='mx-2'>{item.number}</span>
                        <span className='flex-fill'>
                          <ProgressBar
                            now={item.rating}
                            style={{ height: 2.5 }}
                          />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className='col-12 col-lg-6 col-xl-5'>
          <ul className='nav flex-column gap-4'>
            {userReview.map((item) => (
              <li key={item.name}>
                <div className='d-flex'>
                  <div>
                    <div className='image-size-very-small bg-light rounded-circle shadow-sm me-4'>
                      <span className='d-block h-100 w-100 rounded-circle shadow-sm position-relative'>
                        <Image
                          className='rounded-circle'
                          src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auhref=format&fit=crop&w=500&q=60'
                          alt='..'
                          layout='fill'
                          objectFit='cover'
                        />
                      </span>
                    </div>
                  </div>
                  <ul className='nav flex-column'>
                    <li>
                      <div className='mb-0 fw-normal text-capitalize'>
                        john doe
                      </div>
                    </li>
                    <li>
                      <div className='fs-5'>
                        <StarComponent rating={4.5} />
                      </div>
                    </li>
                    <li>
                      <p className='mb-0'>
                        <small>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum doloremque ex ullam dolore atque dolores
                          deserunt perspiciatis itaque.
                        </small>
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ReviewsSection;
