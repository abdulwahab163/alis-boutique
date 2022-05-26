import React from 'react';

const ProductsHeader = () => {
  return (
    <div className='d-flex align-items-center mb-4'>
      <div className='me-auto'>
        <h4 className='mb-0 fw-normal'>
          Mens Tops <span className='text-black-50'>(133)</span>
        </h4>
      </div>
      <div className='d-flex align-items-center'>
        <label className='mb-0 me-3' htmlFor='sort'>
          Sort:
        </label>
        <select className='form-select rounded-pill' name='sort' id='sort'>
          <option value='Popular'>Popular</option>
          <option value='New'>New</option>
          <option value='Low price'>Low price</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
