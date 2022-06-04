import Image from "next/image";
import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CounterComponent from "../../../components/CounterComponent";
import { removeCartItem } from "../../../store/actions/cart";

const headList = [
  { name: "Product" },
  { name: "Color", center: true },
  { name: "Size", center: true },
  { name: "items", center: true },
  { name: "Price", center: true },
  {},
];

const CartTable = () => {
  const dispatch = useDispatch();

  const { cartItemList } = useSelector((state) => state.cart);

  return (
    <div className="mt-4">
      {cartItemList.length > 0 ? (
        <div className="dataTables_wrapper">
          <Table
            borderless
            responsive
            hover
            id="patientTable_basic_table"
            className="w-100"
          >
            <thead>
              <tr role="row">
                {headList.map((item) => (
                  <th key={item.name}>
                    {item.empty ? (
                      <></>
                    ) : (
                      <div
                        className={`d-flex align-items-center py-3 ${
                          item.center && "justify-content-center"
                        }`}
                      >
                        <span className="fw-normal text-black-50">
                          {item.name}
                        </span>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-0 table-border">
              {cartItemList.map((product) => (
                <tr key={product.name} role="row">
                  <td className="text-center py-3">
                    <div className="d-flex align-items-center">
                      <span className="d-block image-size-very-small shadow-sm rounded-circle position-relative me-3">
                        <span className="d-block position-absolute placeholder h-100 w-100 placeholder-wave rounded-circle bg-light" />
                        <span className="d-block h-100 w-100 shadow-sm rounded-circle position-relative">
                          {product.images && (
                            <Image
                              className="rounded-circle"
                              src={product.images && product.images[0].url}
                              alt="product"
                              layout="fill"
                            />
                          )}
                        </span>
                      </span>

                      <span className="text-start">
                        <div>{product.name}</div>
                        <div className="text-black-50">#{product.id}</div>
                      </span>
                    </div>
                  </td>

                  <td className="text-center py-3 text-capitalize">
                    {product.color}
                  </td>
                  <td className="text-center py-3 text-uppercase">
                    {product.size.name}
                  </td>
                  <td className="text-center py-3">
                    <div
                      className="mx-auto bg-white rounded-pill"
                      style={{ width: 130 }}
                    >
                      <CounterComponent count={product.count} />
                    </div>
                  </td>
                  <td className="text-center py-3">{product.price}</td>
                  <td className="text-center py-3">
                    <button
                      type="button"
                      className="btn nav-link p-0"
                      onClick={() => dispatch(removeCartItem(product.id))}
                    >
                      <i className="mdi mdi-18px mdi-close" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <h5>Cart is Empty</h5>
        </div>
      )}
    </div>
  );
};

export default CartTable;
