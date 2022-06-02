import React from 'react';
import Link from 'next/link';
import ProductCard from '../../../components/ProductCard';

const ProductsSection = ({productsList}) => {

  return (
    <div>
      <ul
        className='nav row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4'
        id='patientListing'
      >
        {productsList.map((item) => (
          <li key={item.image} className='patient_card'>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
      {/* pagination */}
      <div className='d-sm-flex text-center align-items-center justify-content-center px-2 mt-4'>
        <Link href='/'>
          <a className='btn btn-primary text-capitalize'>show more</a>
        </Link>
      </div>
      {/* /pagination */}
    </div>
  );
};

export default ProductsSection;
