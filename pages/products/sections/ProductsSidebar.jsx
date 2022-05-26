import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import ProductFilter from './ProductFilter';

const ProductsSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='products-sidebar'>
        <aside className='sticky-top' style={{ top: '9rem' }}>
          <ProductFilter />
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
        <Offcanvas.Body>
          <ProductFilter />
        </Offcanvas.Body>
      </Offcanvas>
      {/* /On small screen */}
    </>
  );
};

export default ProductsSidebar;
