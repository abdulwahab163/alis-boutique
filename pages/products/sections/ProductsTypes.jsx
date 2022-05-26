import React from 'react';
import TypeCard from '../../../components/TypeCard';

const ProductsTypes = () => {
  const list = [
    {
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/menu_summer-22_shirts.png?v=17164934222256076789',
      title: 'Shirts',
    },
    {
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/menu_summer-22_suits.png?v=4059796816663096619',
      title: 'Suits',
    },
    {
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/menu_summer-22_embroidered.png?v=12053057347072052672',
      title: 'Embroidered',
    },
    {
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/menu_summer-22_be-yourself-22.png?v=6765764189722438776',
      title: 'Be Yourself 22',
    },
    {
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2635/3244/files/menu_summer-22_trousers.png?v=1733806711697845639',
      title: 'Trousers',
    },
  ];

  return (
    <div className='px-0 mx-auto col-12 col-sm-11 col-md-9 col-xl-8 col-xxl-7'>
      <h2 className='mb-3 text-center text-capitalize'>Summer 22,</h2>
      <ul className='nav justify-content-center gap-4'>
        {list.map((item) => (
          <li key='type-card'>
            <TypeCard imageUrl={item.imageUrl} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsTypes;
