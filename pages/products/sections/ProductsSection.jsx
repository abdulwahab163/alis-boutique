import React from 'react';
import Link from 'next/link';
import ProductCard from '../../../components/ProductCard';

const ProductsSection = () => {
  const list = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08578_d5703305-ed0b-45a9-918a-8b3024aaf096_720x.jpg?v=1647262095',
      hoverImage:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08589_7d4548a0-2af7-4e3c-b7d1-15b0c4e7598a_533x.jpg?v=1647262094',
      isHoverImage: true,
      name: 'T-Shirt Summer Vibes',
      price: '$119.99',
      discountState: true,
      discount: '30%',
      discountPrice: '$89.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08831_533x.jpg?v=1647262169',
      name: 'Loose Knit 3/4 Sleeve',
      price: '$119.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/572_5009_533x.jpg?v=1647236461',
      name: 'Basic Slim Fit T-Shirt',
      price: '$100',
      discountState: true,
      discount: '50%',
      discountPrice: '$50',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC07894_533x.jpg?v=1647236483',
      name: 'Loose Textured T-Shirt',
      price: '$119.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08589_7d4548a0-2af7-4e3c-b7d1-15b0c4e7598a_533x.jpg?v=1647262094',
      name: 'T-Shirt Summer Vibes',
      price: '$119.99',
      discountState: true,
      discount: '30%',
      discountPrice: '$89.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08831_533x.jpg?v=1647262169',
      name: 'Loose Knit 3/4 Sleeve',
      price: '$119.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/572_5009_533x.jpg?v=1647236461',
      name: 'Basic Slim Fit T-Shirt',
      price: '$100',
      discountState: true,
      discount: '50%',
      discountPrice: '$50',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC07894_533x.jpg?v=1647236483',
      name: 'Loose Textured T-Shirt',
      price: '$119.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08589_7d4548a0-2af7-4e3c-b7d1-15b0c4e7598a_533x.jpg?v=1647262094',
      name: 'T-Shirt Summer Vibes',
      price: '$119.99',
      discountState: true,
      discount: '30%',
      discountPrice: '$89.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC08831_533x.jpg?v=1647262169',
      name: 'Loose Knit 3/4 Sleeve',
      price: '$119.99',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/572_5009_533x.jpg?v=1647236461',
      name: 'Basic Slim Fit T-Shirt',
      price: '$100',
      discountState: true,
      discount: '50%',
      discountPrice: '$50',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/2635/3244/products/DSC07894_533x.jpg?v=1647236483',
      name: 'Loose Textured T-Shirt',
      price: '$119.99',
    },
  ];

  return (
    <div>
      <ul
        className='nav row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-4'
        id='patientListing'
      >
        {list.map((item) => (
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
