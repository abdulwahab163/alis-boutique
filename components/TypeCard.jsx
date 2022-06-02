import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TypeCard = ({ imageUrl, title }) => {
  return (
    <Link href='/products/productsPage'>
      <a className='d-inline-block text-center'>
        <div className='d-flex align-items-center mb-2'>
          <span className='d-block image-size-small mx-auto shadow-sm rounded-circle position-relative'>
            <span className='d-block position-absolute h-100 w-100 placeholder-wave rounded-circle bg-light' />
            <span className='d-block h-100 w-100 shadow-sm rounded-circle position-relative'>
              <Image
                src={`${imageUrl}`}
                alt='..'
                layout='fill'
                // objectFit='cover'
              />
            </span>
          </span>
        </div>
        <h6 className='text-uppercase fw-normal'>{title}</h6>
      </a>
    </Link>
  );
};

export default TypeCard;
