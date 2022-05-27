import React from 'react';
import Link from 'next/link';
import CartTable from './CartTable';
import Image from 'next/image';

const CartSummarySection = ({ isPage }) => {
  const [edit, setEdit] = React.useState('');

  const listOfCards = [
    { src: 'Paypal.png' },
    { src: 'Visa.png' },
    { src: 'Master-card.png' },
    { src: 'Maestro.png' },
    { src: 'Discover.png' },
    { src: 'iDEAL.png' },
  ];

  const AddressList = [
    { value: 'Beatrice Waddle' },
    { value: '1391 Single Street. Chicago, MA 02129' },
    { value: 'USA' },
    { value: '+5 781-644-3627' },
  ];

  return (
    <section>
      <div>
        <ul className='nav row'>
          <li className='col-12 col-md-8'>
            <div>
              <ul className='nav flex-column gap-4'>
                <li>
                  <h5 className='mb-0 fw-normal'>Payment method</h5>
                </li>
                <li>
                  <ul className='nav row row-cols-2 row-cols-md-3'>
                    {listOfCards.map((item) => (
                      <li key={item.src}>
                        <button type='button' className='btn'>
                          <Image
                            src={`/assets/images/cards/${item.src}`}
                            alt='..'
                            layout='fill'
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <CartTable />
            </div>
          </li>
          <li className='col'>
            <div className='position-sticky' style={{ top: '9rem' }}>
              <ul className='nav flex-column gap-4 h-100'>
                <li>
                  <h5 className='mb-0 fw-normal'>Delivery address</h5>
                </li>
                <li>
                  <ul className='nav flex-column gap-2'>
                    {AddressList.map((item) => (
                      <li key={item.value}>
                        {edit ? (
                          <input
                            type='text'
                            className='form-control form-control-sm'
                            defaultValue={item.value}
                          />
                        ) : (
                          <>{item.value}</>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <button
                    type='button'
                    className='btn btn-primary-1 py-2 px-4 text-capitalize'
                    onClick={() => setEdit(!edit)}
                  >
                    Change Delivery Address
                  </button>
                </li>
                <li>
                  <div className='bg-light bg-opacity-50 p-3 text-center'>
                    <span className='me-4'>Total cost</span>
                    <span className='fw-bold'>$159.98</span>
                  </div>
                </li>
                {isPage && (
                  <>
                    <li>
                      <div>
                        <button
                          type='button'
                          className='btn btn-primary shadow-1 py-2 px-4 text-capitalize w-100'
                        >
                          Proceed to payment
                        </button>
                      </div>
                    </li>
                    <li>
                      <div>
                        <Link
                          href='/products/ProductsPage'
                          className='btn btn-primary-1 py-2 px-4 text-capitalize w-100'
                        >
                          Continue shopping
                        </Link>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CartSummarySection;
