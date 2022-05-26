import React from 'react';
import CounterComponent from '../../../components/CounterComponent';
import SelectColor from '../../../components/SelectColor';
import SelectSize from '../../../components/SelectSize';

const DetailDataSection = () => {
  return (
    <form noValidate className='mt-4'>
      <ul className='nav flex-column gap-4'>
        <li>
          <ul className='nav flex-column gap-2'>
            <li>
              <div className='d-flex align-items-center justify-content-between'>
                <span className='badge bg-danger text-white px-3 py-2 fw-500'>
                  Sale
                </span>
                <span className='text-black-50 text-end'>
                  Product ID: <br /> 261311
                </span>
              </div>
            </li>
            <li>
              <h5 className='mb-0 fw-500'>T-Shirt Summer Vibes</h5>
            </li>
            <li>
              <div className='d-flex align-items-center justify-content-between'>
                <span>
                  <h5 className='mb-0 fw-normal'>
                    <span className='me-4 text-danger'>$89.99</span>
                    <span className='text-black-50 text-decoration-line-through'>
                      $119.99
                    </span>
                  </h5>
                </span>
                <span className='text-end'>HOUSE MY BRAND</span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <div className='mb-2 fw-500'>Color:</div>
            <SelectColor />
          </div>
        </li>
        <li>
          <div>
            <div className='mb-2 fw-500'>Size:</div>
            <SelectSize />
          </div>
        </li>
        <li>
          <div>
            <div className='mb-2 fw-500'>Quantity:</div>
            <ul className='nav row gy-3'>
              <li className='col-6 col-xxl-5'>
                <CounterComponent />
              </li>
              <li className='col-6 col-xxl-5'>
                <button
                  type='submit'
                  className='btn btn-primary shadow-1 w-100 h-100 rounded-pill py-2'
                >
                  Add to cart
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default DetailDataSection;
