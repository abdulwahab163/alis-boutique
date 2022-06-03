import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import CounterComponent from "../../../components/CounterComponent";
import SelectColor from "../../../components/SelectColor";
import SelectSize from "../../../components/SelectSize";
import { addCartItem } from "../../../store/actions/cart";

const DetailDataSection = ({ product }) => {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState({
    size: {},
    count: 1,
    color: {},
  });

  useEffect(() => {
    if (product) {
      setSelectedProduct({
        ...selectedProduct,
        name: product.name,
        id: product.id,
        price: product.price,
        images: product.productFiles,
      });
    }
  }, []);

  const setSize = (selectedSize) => {
    setSelectedProduct({ ...selectedProduct, size: selectedSize });
  };

  const setCount = (selectedCount) => {
    setSelectedProduct({ ...selectedProduct, count: selectedCount });
  };

  return (
    <div className="mt-4">
      <ul className="nav flex-column gap-4">
        <li>
          <ul className="nav flex-column gap-2">
            <li>
              <div className="d-flex align-items-center justify-content-between">
                {product.saleDiscount && (
                  <span className="badge bg-danger text-white px-3 py-2 fw-500">
                    on Sale
                  </span>
                )}
                <span className="text-black-50 text-end">
                  Product ID: <span className="ml-2 fw-500">{product.id}</span>
                </span>
              </div>
            </li>
            <li>
              <span className="text-end text-black-50 text-capitalize">
                Brand: <span className="fw-500">{product.brand}</span>
              </span>
            </li>
            <li>
              <h5 className="mb-0 fw-500">{product.name}</h5>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-between">
                <span>
                  <h5 className="mb-0 fw-normal">
                    {product.saleDiscount ? (
                      <span className="me-4 text-danger">
                        {Math.floor(
                          product.price -
                            (product.price / 100) * product.saleDiscount
                        )}
                      </span>
                    ) : (
                      <span className="me-4 text-danger">
                        {Math.floor(product.price - product.discount)}
                      </span>
                    )}
                    <span className="text-black-50 text-decoration-line-through">
                      {product.price}
                    </span>
                  </h5>
                </span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <div className="mb-2 fw-500">Color:</div>
            <SelectColor />
          </div>
        </li>
        <li>
          <div>
            <div className="mb-2 fw-500">Size:</div>
            <SelectSize
              sizes={product?.size}
              size={selectedProduct.size}
              setSize={setSize}
            />
          </div>
        </li>
        <li>
          <div>
            <div className="mb-2 fw-500">
              {product.stock > 0 ? <span className="text-success">in stock</span> : <span className="text-danger">out of stock</span>}
            </div>
            <ul className="nav row gy-3">
              <li className="col-6 col-xxl-5">
                <CounterComponent
                  count={selectedProduct.count}
                  setCount={setCount}
                />
              </li>
              <li className="col-6 col-xxl-5">
                <button
                  type="button"
                  className="btn btn-primary shadow-1 w-100 h-100 rounded-pill py-2"
                  onClick={() => {
                    dispatch(addCartItem(selectedProduct))

                  }}
                >
                  Add to cart
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DetailDataSection;
