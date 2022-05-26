import React from 'react';

const DescriptionSection = () => {
  return (
    <div className='py-5'>
      <ul className='nav row row-cols-1 row-cols-lg-2 gy-4'>
        <li>
          <div className='text-center'>
            <div className='mb-4 image-size-very-small mx-auto'>
              <img
                className='d-block h-100 w-100 object-contain'
                src='/assets/images/description-icon-0.png'
                alt='...'
              />
            </div>
            <h5 className='mb-4 fw-normal'>Details and product description</h5>
            <p className='mb-0 text-black-50'>
              White Summer Vibes T-shirt in the uiKit line with a colorful
              print. Made of jersey cotton. T-shirt fits perfectly with jeans,
              pants or shorts.
            </p>
          </div>
        </li>
        <li>
          <div>
            <div className='text-center'>
              <div className='mb-4 image-size-very-small mx-auto'>
                <img
                  className='d-block h-100 w-100 object-contain'
                  src='/assets/images/description-icon-1.png'
                  alt='...'
                />
              </div>
              <h5 className='mb-4 fw-normal'>Material(s) and care</h5>
              <p className='mb-0 text-black-50'>
                Body: 98% COTTON - 2% ELASTANE
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DescriptionSection;
