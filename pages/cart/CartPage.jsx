import React from 'react';
import ContainerPrimary from '../../components/Container';
import Link from 'next/link';
import { CartListingSection } from './sections/CartListingSection';
import CartAddressSection from './sections/CartAddressSection';
import CartSummarySection from './sections/CartSummarySection';
import { Form } from 'react-bootstrap';

const CartPage = () => {
  const [page, setPage] = React.useState(1);
  const [addressValidated, setAddressValidated] = React.useState(false);

  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goPrevPage() {
    setPage((page) => page - 1);
  }

  const handleAddressSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setAddressValidated(true);
  };

  return (
    <main className='h-100'>
      <section className=' mb-5'>
        <ContainerPrimary>
          <div className='row'>
            <div className='col'>
              <div
                className='steps-container-v mt-5 shadow p-4 rounded-lg position-sticky'
                style={{ top: '10rem' }}
              >
                <ul className='nav flex-column gap-5'>
                  <li
                    className={`mb-4 ${
                      page === 1
                        ? `active`
                        : page === 2
                        ? `done`
                        : page === 3
                        ? `done`
                        : ``
                    }`}
                  >
                    <b
                      className={`${
                        page === 1
                          ? `active`
                          : page === 2
                          ? `done`
                          : page === 3
                          ? `done`
                          : ``
                      }`}
                    />
                    <div className='d-flex align-items-center'>
                      <span className='me-3'>01</span>
                      <div>
                        <div className='d-flex flex-column gap-1'>
                          <div className='text-uppercase font-monospace small'>
                            STEP 01
                          </div>
                          <div className='text-primary fw-bold'>
                            Shopping Cart
                          </div>
                          {page === 1 ? (
                            <div className='text-warning small'>Active</div>
                          ) : page === 2 ? (
                            <div className='text-success small'>
                              Completed ✔
                            </div>
                          ) : page === 3 ? (
                            <div className='text-success small'>
                              Completed ✔
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`mb-4 ${
                      page === 1
                        ? `fall`
                        : page === 2
                        ? `active`
                        : page === 3
                        ? `done`
                        : ``
                    }`}
                  >
                    <b
                      className={`${
                        page === 1
                          ? `fall`
                          : page === 2
                          ? `active`
                          : page === 3
                          ? `done`
                          : ``
                      }`}
                    />
                    <div className='d-flex align-items-center'>
                      <span className='me-3'>02</span>
                      <div>
                        <div className='d-flex flex-column gap-1'>
                          <div className='text-uppercase font-monospace small'>
                            STEP 02
                          </div>
                          <div className='text-primary fw-bold'>
                            Address data and type of delivery
                          </div>
                          {page === 1 ? (
                            ''
                          ) : page === 2 ? (
                            <div className='text-warning small'>Active</div>
                          ) : page === 3 ? (
                            <div className='text-success small'>
                              Completed ✔
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
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
                    <b
                      className={`${
                        page === 1
                          ? `fall`
                          : page === 2
                          ? `fall`
                          : page === 3
                          ? `active`
                          : ``
                      }`}
                    />
                    <div className='d-flex align-items-center'>
                      <span className='me-3'>03</span>
                      <div>
                        <div className='d-flex flex-column gap-1'>
                          <div className='text-uppercase font-monospace small'>
                            STEP 03
                          </div>
                          <div className='text-primary fw-bold'>Summary</div>
                          {page === 1 ? (
                            ''
                          ) : page === 2 ? (
                            ''
                          ) : page === 3 ? (
                            <div className='text-warning small'>Active</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-8 col-xxl-9 mt-4 mt-lg-0'>
              <Form
                noValidate
                validated={addressValidated}
                onSubmit={handleAddressSubmit}
              >
                <div></div>
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
                    {page === 1 && <CartListingSection />}
                    {page === 2 && <CartAddressSection />}
                    {page === 3 && <CartSummarySection />}
                  </div>

                  <div className='button-container mt-4 d-flex flex-wrap gap-3'>
                    <div className='flex-fill'>
                      {page === 1 && (
                        <div className='nav align-items-center w-100'>
                          {/* <div>
                        <div className='align-items-center d-flex form-control pe-1 position-relative ps-3 py-0 rounded-pill shadow-sm'>
                          <input
                            className='border-0 flex-fill fs-6 fw-light h-25 me-2 p-0 py-2'
                            type='text'
                            placeholder='Promo Code'
                          />
                          <button
                            type='submit'
                            className='align-items-center btn d-flex justify-content-around rounded-circle'
                            style={{ height: '1.8rem', width: '1.8rem' }}
                          >
                            <i
                              className='mdi mdi-send text-black-50'
                              style={{ transform: 'rotate(314deg)' }}
                            />
                          </button>
                        </div>
                      </div> */}
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
                    <div className='ms-auto'>
                      <Link
                        target='_blank'
                        href='/products/ProductsPage'
                        className='btn btn-primary-1 rounded-pill py-2 px-4 text-capitalize'
                      >
                        Continue shopping
                      </Link>
                    </div>
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
                </div>
              </Form>
            </div>
          </div>
        </ContainerPrimary>
      </section>
    </main>
  );
};

export default CartPage;
