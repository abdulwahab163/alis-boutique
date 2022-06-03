import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import CartTable from "./CartTable";

const listOfCards = [{ src: "stripe.svg" }, { src: "visa.svg" }];
const addressList = [
  {
    label: "Address",
    name: "address",
    placeholder: "Enter Delievery Address",
  },
  { label: "City", name: "city", placeholder: "Enter City" },
  { label: "Country", name: "country", placeholder: "Enter Country" },
  { label: "Contact No", name: "phoneNo", placeholder: "Enter Contact No" },
];

const CartSummarySection = ({ isPage }) => {
  const [editable, setEditable] = useState(false);
  const [delieveryData, setDelieveryData] = useState({});

  return (
    <section>
      <div>
        <ul className="nav row">
          <li className="col-12 col-md-8">
            <div>
              <ul className="nav flex-column gap-4">
                <li>
                  <h5 className="mb-0 fw-normal">Payment method</h5>
                </li>
                <li>
                  <ul className="nav row row-cols-2 row-cols-md-3">
                    {listOfCards.map((item) => (
                      <li key={item.src}>
                        <button
                          type="button"
                          className="btn position-relative image-size-very-small"
                        >
                          <Image
                            src={`/assets/images/cards/${item.src}`}
                            alt=".."
                            layout="fill"
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
          <li className="col">
            <div className="position-sticky" style={{ top: "9rem" }}>
              <ul className="nav flex-column gap-4 h-100">
                <li>
                  <h5 className="mb-0 fw-normal">Delivery Address</h5>
                </li>
                <li>
                  <ul className="nav flex-column gap-2">
                    {addressList.map((item) => (
                      <li key={item.name} className='d-flex'>
                        <div>{item.label}:</div>
                        {editable ? (
                          <input
                            name={item.name}
                            placeholder={item.placeholder}
                            type={item.name === "phoneNo" ? "number" : "text"}
                            className="form-control form-control-sm"
                            value={delieveryData[item.name]}
                            onChange={(e) => {
                              const { name, value } = e.target;

                              if (name === "phoneNo" && value < 1) return;

                              let updatedData = { ...delieveryData };
                              updatedData[name] = value;
                              setDelieveryData({ ...updatedData });
                            }}
                          />
                        ) : (
                          <>{delieveryData[item.name]}</>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {editable ? (
                    <button
                      type="button"
                      className="btn btn-primary-1 py-2 px-4 text-capitalize"
                      onClick={() => setEditable(!editable)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary-1 py-2 px-4 text-capitalize"
                      onClick={() => setEditable(!editable)}
                    >
                      Change Delivery Address
                    </button>
                  )}
                </li>
                <li>
                  <div className="bg-light bg-opacity-50 p-3 text-center">
                    <span className="me-4">Total cost</span>
                    <span className="fw-bold">$159.98</span>
                  </div>
                </li>
                {isPage && (
                  <>
                    <li>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary shadow-1 py-2 px-4 text-capitalize w-100"
                        >
                          Proceed to payment
                        </button>
                      </div>
                    </li>
                    <li>
                      <div>
                        <Link
                          href="/"
                          className="btn btn-primary-1 py-2 px-4 text-capitalize w-100"
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
