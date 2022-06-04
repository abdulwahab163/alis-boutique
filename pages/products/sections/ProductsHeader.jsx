import React from "react";

const ProductsHeader = ({ category, productsCount }) => {
  return (
    <div className="d-flex align-items-center mb-4">
      <div className="me-auto">
        <h4 className="mb-0 fw-normal text-capitalize">
          {category} Tops(<span className="text-black-50">{productsCount}</span>
          )
        </h4>
      </div>
      <div className="d-flex align-items-center">
        <label className="mb-0 me-3" htmlFor="sort">
          Sort:
        </label>
        <select className="form-select rounded-pill" name="sort" id="sort">
          {["Popular", "New", "Low price"].map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
