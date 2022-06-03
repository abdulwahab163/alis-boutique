import React, { useState } from "react";
import Link from "next/link";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

import ContainerPrimary from "../../components/Container";
import CartAddressSection from "./sections/CartAddressSection";
import CartSummarySection from "./sections/CartSummarySection";
import CartTable from "./sections/CartTable";

const CartPage = () => {
  const { cartItemList } = useSelector((state) => state.cart);
  const [page, setPage] = useState(1);
  const [addressValidated, setAddressValidated] = useState(false);

  const goNextPage = () => {
    setPage((page) => page + 1);
  };

  const goPrevPage = () => {
    setPage((page) => page - 1);
  };

  const handleAddressSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setAddressValidated(true);
  };

  console.log("cartItemList", cartItemList);

  return (
    <main className="h-100">
      <section className=" mb-5">
        <ContainerPrimary>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 col-xxl-9 mt-4 mt-lg-0">
              <Form
                noValidate
                validated={addressValidated}
                onSubmit={handleAddressSubmit}
              >
                <div className="steps-container">
                  <header>
                    <div className="row gy-4 justify-content-between align-items-center">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div>
                          <h5 className="mb-0 fw-normal">
                            {page === 1 && <span>Shopping Cart</span>}
                            {page === 2 && (
                              <span>Address data and type of delivery</span>
                            )}
                            {page === 3 && <span>Summary</span>}
                          </h5>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
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
                    {page === 1 && <CartTable cartItemList={cartItemList} />}
                    {page === 2 && <CartAddressSection />}
                    {page === 3 && <CartSummarySection />}
                  </div>

                  {cartItemList.length > 0 && (
                    <div className="button-container mt-4 d-flex flex-wrap gap-3">
                      <div className="flex-fill">
                        {page === 1 && (
                          <div className="nav align-items-center w-100">
                            <div className="me-auto">
                              <span className="text-black-50 me-4">
                                Total cost
                              </span>
                              <span>$159.98</span>
                            </div>
                          </div>
                        )}
                        {page === 2 && (
                          <button
                            type="button"
                            className="btn hover-scale-small d-flex"
                            onClick={goPrevPage}
                          >
                            <span className="me-3">
                              <i className="mdi mdi-18px mdi-arrow-left" />
                            </span>
                            <span>Back</span>
                          </button>
                        )}
                        {page === 3 && (
                          <button
                            type="button"
                            className="btn hover-scale-small d-flex"
                            onClick={goPrevPage}
                          >
                            <span className="me-3">
                              <i className="mdi mdi-18px mdi-arrow-left" />
                            </span>
                            <span>Back</span>
                          </button>
                        )}
                      </div>
                      <div className="ms-auto">
                        <Link
                          target="_blank"
                          href="/products/productsPage"
                          className="btn btn-primary-1 rounded-pill py-2 px-4 text-capitalize"
                        >
                          Continue shopping
                        </Link>
                      </div>
                      <div>
                        {page === 1 && (
                          <button
                            type="button"
                            className="btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize"
                            onClick={goNextPage}
                          >
                            NextStep
                          </button>
                        )}
                        {page === 2 && (
                          <button
                            type="submit"
                            className="btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize"
                            onClick={goNextPage}
                          >
                            NextStep
                          </button>
                        )}
                        {page === 3 && (
                          <button
                            type="submit"
                            className="btn btn-primary shadow-1 rounded-pill py-2 px-4 text-capitalize"
                          >
                            Proceed to payment
                          </button>
                        )}
                      </div>
                    </div>
                  )}
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
