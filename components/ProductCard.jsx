import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const ProductCard = ({ item, className = "height-size-3" }) => {

  const { currency } = useSelector((state) => state.currency);

  return (
    <div className="product-card">
      <div className={`position-relative ${className}`}>
        <span className="placeholder placeholder-wave w-100 h-100 position-absolute bg-light" />
        {item.productFiles?.length > 0 && (
          <div className="image-main d-block h-100 w-100 bg-light">
            <Image
              src={`${item.productFiles[0].url}`}
              alt=".."
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}

        {item.productFiles?.length > 1 && (
          <div className="image-hover d-block h-100 w-100 object-cover bg-light">
            <Image
              src={`${item.productFiles[1].url}`}
              alt=".."
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="overlay">
          {item.saleDiscount && (
            <div className="badge-container position-absolute start-0 top-0 p-3">
              <span className="badge bg-danger text-white rounded-0 fw-normal">
                Sale {item.saleDiscount} off
              </span>
            </div>
          )}

          <Link
            href={{
              pathname: "/product",
              query: {
                id: item.id,
              },
            }}
          >
            <a className="item btn btn-primary text-capitalize w-100">
              Quickview
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <h6 className="mb-2 fw-500 small">{item.name}</h6>
        <h6 className="mb-0 fw-normal">
          <span
            className={`me-2 ${
              item.price && "text-black-50 text-decoration-line-through small"
            }`}
          >
           {currency} {item.price}
          </span>

          {item.saleDiscount ? (
            <span className="text-primary">
            {currency}  {Math.floor(item.price - (item.price / 100) * item.saleDiscount)}
            </span>
          ) : (
            <span className="text-primary">
             {currency} {Math.floor(item.price - item.discount)}
            </span>
          )}
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
