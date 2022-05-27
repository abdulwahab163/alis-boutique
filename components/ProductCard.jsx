import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ item, className = 'height-size-3' }) => {
  return (
    <div className='product-card'>
      <div className={`position-relative ${className}`}>
        <span className='placeholder placeholder-wave w-100 h-100 position-absolute bg-light' />
        <div className='image-main d-block h-100 w-100 bg-light'>
          <Image
            src={`${item.image}`}
            alt='..'
            layout='fill'
            objectFit='cover'
          />
        </div>

        {item.isHoverImage && (
          <div className='image-hover d-block h-100 w-100 object-cover bg-light'>
            <Image
              src={`${item.hoverImage}`}
              alt='..'
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}
        <div className='overlay'>
          {item.discountState && (
            <div className='badge-container position-absolute start-0 top-0 p-3'>
              <span className='badge bg-danger text-white rounded-0 fw-normal'>
                Sale {item.discount} off
              </span>
            </div>
          )}

          <Link href='/detail/DetailPage'>
            <a className='item btn btn-primary text-capitalize w-100'>
              Quickview
            </a>
          </Link>
        </div>
      </div>
      <div className='mt-4'>
        <h6 className='mb-2 fw-500 small'>{item.name}</h6>
        <h6 className='mb-0 fw-normal'>
          <span
            className={`me-2 ${
              item.discountState &&
              'text-black-50 text-decoration-line-through small'
            }`}
          >
            {item.price}
          </span>
          {item.discountState && (
            <span className='text-primary'>{item.discountPrice}</span>
          )}
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
