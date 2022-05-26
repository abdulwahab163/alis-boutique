import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavLink } from '../../../components/NavLink';

const DetailHeader = () => {
  return (
    <>
      <div>
        <Breadcrumb className='text-capitalize'>
          <Breadcrumb.Item>
            <NavLink href='/'>Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink href='/products/ProductsPage'>All products</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink href='/detail/DetailPage'>Detail</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* <div className='mb-3 d-flex justify-content-end'>
        <ul className='nav gap-3 gap-sm-5'>
          <li>
            <div className='d-flex align-items-center'>
              <span className='me-3'>
                <i className='mdi mdi-24px mdi-bus' />
              </span>
              <span>
                <div>Standard shipment</div>
                <div className='text-black-50'>
                  Free within 3-6 business days
                </div>
              </span>
            </div>
          </li>
          <li>
            <div className='d-flex align-items-center'>
              <span className='me-3'>
                <i className='mdi mdi-24px mdi-bus-clock' />
              </span>
              <span>
                <div>Express delivery</div>
                <div className='text-black-50'>$35,00 available</div>
              </span>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default DetailHeader;
