import React from 'react';

import ProductCard from '../../../components/ProductCard';

const ProductsSection = ({productsList}) => {

  return (
    <div>
      <ul
        className='nav row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4'
        id='patientListing'
      >
        {productsList.map((item,index) => (
          <li key={index} className='patient_card'>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsSection;
