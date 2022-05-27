import Image from 'next/image';
import React from 'react';
import { Table } from 'react-bootstrap';
import CounterComponent from '../../../components/CounterComponent';

const CartTable = () => {
  const headList = [
    { name: 'Product' },
    { name: 'Color', center: true },
    { name: 'Size', center: true },
    { name: 'items', center: true },
    { name: 'Price', center: true },
    {},
  ];

  const list = [{}, {}, {}];

  return (
    <div className='mt-4'>
      <div className='dataTables_wrapper'>
        <Table
          borderless
          responsive
          hover
          id='patientTable_basic_table'
          className='w-100'
        >
          <thead>
            <tr role='row'>
              {headList.map((item) => (
                <th key={item.name}>
                  {item.empty ? (
                    <></>
                  ) : (
                    <div
                      className={`d-flex align-items-center py-3 ${
                        item.center && 'justify-content-center'
                      }`}
                    >
                      <span className='fw-normal text-black-50'>
                        {item.name}
                      </span>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='border-0 table-border'>
            {list.map((item) => (
              <tr key={item.name} role='row'>
                <td className='text-center py-3'>
                  <div className='d-flex align-items-center'>
                    <span className='d-block image-size-very-small shadow-sm rounded-circle position-relative me-3'>
                      <span className='d-block position-absolute placeholder h-100 w-100 placeholder-wave rounded-circle bg-light' />
                      <span className='d-block h-100 w-100 shadow-sm rounded-circle position-relative'>
                        <Image
                          className='rounded-circle'
                          src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=580&q=80`}
                          alt='..'
                          layout='fill'
                        />
                      </span>
                    </span>
                    <span className='text-start'>
                      <div>T-Shirt Summer Vibes</div>
                      <div className='text-black-50'>#261311</div>
                    </span>
                  </div>
                </td>

                <td className='text-center py-3 text-capitalize'>Black</td>
                <td className='text-center py-3 text-uppercase'>Xl</td>
                <td className='text-center py-3'>
                  <div
                    className='mx-auto bg-white rounded-pill'
                    style={{ width: 130 }}
                  >
                    <CounterComponent />
                  </div>
                </td>
                <td className='text-center py-3'>$89.99</td>
                <td className='text-center py-3'>
                  <button type='button' className='btn nav-link p-0'>
                    <i className='mdi mdi-18px mdi-close' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CartTable;
