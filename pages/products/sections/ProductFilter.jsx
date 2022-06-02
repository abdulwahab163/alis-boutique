import React from 'react';
import AccordionComponent from '../../../components/AccordionComponent';
import SelectColor from '../../../components/SelectColor';
import MultiRangeSlider from '../../../components/MultiRangeSlider';
import SelectSize from '../../../components/SelectSize';
import SelectTags from '../../../components/SelectTags';
import SelectType from '../../../components/SelectType';

const ProductFilter = () => {
  const list = [
    { title: 'product type', component: <SelectType /> },
    {
      title: 'PRICE',
      component: (
        <MultiRangeSlider
          min={0}
          max={10000}
          onChange={({ min, max }) =>{} }
        />
      ),
    },
    { title: 'Size', component: <SelectSize /> },
    { title: 'Color', component: <SelectColor /> },
    { title: 'Tags', component: <SelectTags /> },
  ];

  return (
    <form noValidate className='filter-container'>
      <ul className='nav flex-column gap-3'>
        <li>
          <div>
            <h6 className='mb-0'>
              <span className='me-2'>
                <i className='mdi mdi-sort-variant'></i>
              </span>
              <span>FILTER:</span>
            </h6>
          </div>
        </li>
        {list.map((item) => (
          <li key={item.title}>
            <AccordionComponent title={item.title}>
              {item.component}
            </AccordionComponent>
          </li>
        ))}
        <li>
          <div>
            <ul className='nav flex-column gap-3'>
              <li>
                <button
                  type='submit'
                  className='btn btn-primary w-100 text-capitalize py-3'
                >
                  <h6 className='mb-0 fw-normal'>Apply Filter</h6>
                </button>
              </li>
              <li>
                <button
                  type='button'
                  className='btn btn-primary-1 w-100 text-capitalize py-3'
                >
                  <div className='d-flex justify-content-center align-items-center'>
                    <h6 className='mb-0 fw-normal me-2'>Clear All</h6>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default ProductFilter;
