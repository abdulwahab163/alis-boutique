import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavLink } from '../../components/NavLink';
import ProductsHeader from './sections/ProductsHeader';
import ProductsSection from './sections/ProductsSection';
import ProductsSidebar from './sections/ProductsSidebar';
import ProductsTypes from './sections/ProductsTypes';

const ProductsPage = () => {
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
                  <NavLink href='/products/ProductsPage'>All products</NavLink>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className='mb-5'>
              <ProductsTypes />
            </div>
            <div className='d-flex gap-4'>
              <ProductsSidebar />
              <div className='vstack'>
                <div>
                  {/* Header */}
                  <ProductsHeader />
                  {/* /Header */}
                  <ProductsSection />
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
