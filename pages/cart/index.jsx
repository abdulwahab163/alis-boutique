import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Form, Row } from 'react-bootstrap';
import CountrySelect from 'react-bootstrap-country-select';
import { useSelector } from 'react-redux';

import ContainerPrimary from '../../components/Container';
import CartSummarySection from './sections/CartSummarySection';
import CartTable from './sections/CartTable';

const inputList = [
  { label: 'First name', name: 'fName', type: 'text' },
  { label: 'Last name', name: 'lName', type: 'text' },
  { label: 'E-mail', name: 'email', type: 'email' },
  { label: 'Phone Number', name: 'phoneNo', type: 'text' },
  { label: 'City', name: 'city', type: 'text' },
  { label: 'Country', name: 'country', isCountry: true },
  { label: 'Address', name: 'address', type: 'text' },
  { label: 'Postal Code / ZIP', name: 'postalCode', type: 'number', min: 1 },
];

const CartPage = () => {
  const { cartItemList } = useSelector((state) => state.cart);

  const [userData, setUserData] = useState({});
  const [page, setPage] = useState(1);

  const goNextPage = () => {
    setPage((page) => page + 1);
  };

  const goPrevPage = () => {
    setPage((page) => page - 1);
  };

  const validateAddress = () => {
    let isValid = true;
    inputList.forEach((item) => {
      if (!userData[item.name]) {
        isValid = true;
      }
    });
    return isValid;
  };

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;

    if (name === 'postalCode' && value < 1) return;

    let updatedData = { ...userData };
    updatedData[name] = value;
    setUserData({ ...updatedData });
  };

  return (
    <main className='h-100'>
      <section className=' mb-5'>
        <ContainerPrimary>
          <div className='row'>
            <div className='col-12 mt-4 mt-lg-0'>
              <div className='steps-container'>
                <header>
                  <div className='row gy-4 justify-content-between align-items-center'>
                    <div className='col-12 col-md-6 col-lg-4'>
                      <div>
                        <h5 className='mb-0 fw-normal'>
                          {page === 1 && <span>Shopping Cart</span>}
                          {page === 2 && (
                            <span>Address data and type of delivery</span>
                          )}
                          {page === 3 && <span>Summary</span>}
                        </h5>
                      </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                      <div>
                        <ol>
                          <li
                            className={`${
                              page === 1
                                ? `active`
                                : page === 2
                                ? `done`
                                : page === 3
                                ? `done`
                                : ``
                            }`}
                          >
                            <span>1</span>
                          </li>
                          <li
                            className={`${
                              page === 1
                                ? `fall`
                                : page === 2
                                ? `active`
                                : page === 3
                                ? `done`
                                : ``
                            }`}
                          >
                            <span>2</span>
                          </li>
                          <li
                            className={`${
                              page === 1
                                ? `fall`
                                : page === 2
                                ? `fall`
                                : page === 3
                                ? `active`
                                : ``
                            }`}
                          >
                            <span>3</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </header>

                <div>
                  {page === 1 && <CartTable />}
                  {page === 2 && (
                    <section>
                      <Row className='mb-5 gy-3'>
                        {inputList.map((item) => (
                          <Form.Group
                            key={item.name}
                            as={Col}
                            md='6'
                            controlId='validationCustom01'
                          >
                            <Form.Label>{item.label}</Form.Label>
                            {item.isCountry ? (
                              <CountrySelect
                                value={userData.country}
                                onChange={(value) => {
                                  setUserData({
                                    ...userData,
                                    country: value,
                                  });
                                }}
                              />
                            ) : (
                              <Form.Control
                                required
                                name={item.name}
                                type={item.type}
                                min={item.name === 'postalCode' && item.min}
                                placeholder={item.label}
                                onChange={(e) => handleFormDataChange(e)}
                              />
                            )}
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                              Please provide a valid.
                            </Form.Control.Feedback>
                          </Form.Group>
                        ))}
                      </Row>
                    </section>
                  )}
                  {page === 3 && <CartSummarySection userData={userData} />}
                </div>

                {cartItemList.length > 0 && (
                  <div className='button-container mt-4 d-flex flex-wrap gap-3'>
                    <div className='flex-fill'>
                      {page === 1 && (
                        <div className='nav align-items-center w-100'>
                          <div className='me-auto'>
                            <span className='text-black-50 me-4'>
                              Total cost
                            </span>
                            <span>$159.98</span>
                          </div>
                        </div>
                      )}
                      {page === 2 && (
                        <button
                          type='button'
                          className='btn hover-scale-small d-flex'
                          onClick={goPrevPage}
                        >
                          <span className='me-3'>
                            <i className='mdi mdi-18px mdi-arrow-left' />
                          </span>
                          <span>Back</span>
                        </button>
                      )}
                      {page === 3 && (
                        <button
                          type='button'
                          className='btn hover-scale-small d-flex'
                          onClick={goPrevPage}
                        >
                          <span className='me-3'>
                            <i className='mdi mdi-18px mdi-arrow-left' />
                          </span>
                          <span>Back</span>
                        </button>
                      )}
                    </div>
                    {page === 1 && (
                      <div className='ms-auto'>
                        <Link
                          target='_blank'
                          href='/'
                          className='btn btn-primary-1 rounded-pill py-2 px-4 text-capitalize'
                        >
                          Continue shopping
                        </Link>
                      </div>
                    )}
                    <div>
                      {page === 1 && (
                        <button
                          type='button'
                          className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                          onClick={goNextPage}
                        >
                          NextStep
                        </button>
                      )}
                      {page === 2 && (
                        <button
                          type='submit'
                          className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                          disabled={!validateAddress()}
                          onClick={goNextPage}
                        >
                          NextStep
                        </button>
                      )}
                      {page === 3 && (
                        <button
                          type='submit'
                          className='btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize'
                        >
                          Proceed to payment
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ContainerPrimary>
      </section>
    </main>
  );
};

export default CartPage;
