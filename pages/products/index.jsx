import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';

import { NavLink } from '../../components/NavLink';
import ProductsHeader from './sections/ProductsHeader';
import ProductsSection from './sections/ProductsSection';
import ProductsTypes from './sections/ProductsTypes';
import AccordionComponent from '../../components/AccordionComponent';
import SelectColor from '../../components/SelectColor';
import MultiRangeSlider from '../../components/MultiRangeSlider';
import SelectSize from '../../components/SelectSize';

import { getProducts } from '../../store/actions/product';

const ProductsPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const [show, setShow] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    let queryObject = {};
    if (router.query.id) queryObject.id = router.query.id;
    dispatch(getProducts(queryObject));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowMore = () => {
    console.log('clicked');
  };
  const handleApplyFilters = () => {
    console.log('apply');
  };
  const handleClearFilters = () => {
    console.log('clear');
  };

  const sizes = [
    { name: 'xs' },
    { name: 's' },
    { name: 'm' },
    { name: 'l' },
    { name: 'xl' },
    { name: 'xxl' },
  ];

  const colors = [
    { color: 'black' },
    { color: 'red' },
    { color: 'yellow' },
    { color: 'gainsboro' },
    { color: 'white' },
    { color: 'blue' },
  ];

  return (
    <main className='h-100'>
      <section className=' mb-5'>
        <div>
          <div className='px-4'>
            <div>
              <Breadcrumb className='text-capitalize'>
                <Breadcrumb.Item>
                  <NavLink href='/'>Home</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink href='/'>All products</NavLink>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className='mb-5'>
              <ProductsTypes pageTitle={router.query.category} />
            </div>
            <div className='d-flex gap-4'>
              <>
                <div className='products-sidebar'>
                  <aside className='sticky-top' style={{ top: '9rem' }}>
                    <div className='filter-container'>
                      <ul className='nav flex-column gap-3'>
                        <li>
                          <h6 className='mb-0'>
                            <span className='me-2'>
                              <i className='mdi mdi-sort-variant'></i>
                            </span>
                            <span>FILTER:</span>
                          </h6>
                        </li>

                        <AccordionComponent title={'price'}>
                          <MultiRangeSlider
                            min={minPrice}
                            max={maxPrice}
                            // onChange={({ minPrice, maxPrice }) => {
                            //   setMinPrice(minPrice);
                            //   setMaxPrice(maxPrice);

                            // }}
                            onChange={({ minPrice, maxPrice }) =>
                              console.log(
                                `min = ${minPrice}, max = ${maxPrice}`
                              )
                            }
                          />
                        </AccordionComponent>

                        <AccordionComponent title={'size'}>
                          {sizes.map((sizes) => (
                            <SelectSize key={sizes.name} size={sizes} />
                          ))}
                        </AccordionComponent>

                        <AccordionComponent title={'color'}>
                          {colors.map((colors) => (
                            <SelectColor key={colors.color} colors={colors} />
                          ))}
                        </AccordionComponent>

                        <li>
                          <ul className='nav flex-column gap-3'>
                            <li>
                              <button
                                type='submit'
                                className='btn mb-0 fw-normal btn-primary w-100 text-capitalize py-3'
                                onClick={handleApplyFilters}
                              >
                                Apply Filter
                              </button>
                            </li>
                            <li>
                              <button
                                type='button'
                                className='btn mb-0 fw-normal btn-primary-1 w-100 text-capitalize py-3'
                                onClick={handleClearFilters}
                              >
                                Clear All
                              </button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>

                {/* On small screen */}
                <button
                  type='button'
                  onClick={handleShow}
                  className='btn btn-primary-1 btn-sidebar-toggle-1'
                >
                  <i className='mdi-18px mdi mdi-sort-variant'></i>
                </button>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Product Filter</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>{/* <ProductFilter /> */}</Offcanvas.Body>
                </Offcanvas>
                {/* /On small screen */}
              </>
              <div className='vstack'>
                <div>
                  {/* Header */}
                  <ProductsHeader
                    category='mens'
                    productsCount={products?.length}
                  />
                  {/* /Header */}
                  <ProductsSection productsList={products} />

                  {/* pagination */}
                  <div className='d-sm-flex text-center align-items-center justify-content-center px-2 mt-4'>
                    <button
                      type='button'
                      className='btn btn-primary text-capitalize'
                      onClick={handleShowMore}
                    >
                      show more
                    </button>
                  </div>
                  {/* /pagination */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
