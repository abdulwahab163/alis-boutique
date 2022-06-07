import React, { useState, useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";

import { NavLink } from "../../components/NavLink";
import ProductsHeader from "./sections/ProductsHeader";
import ProductsSection from "./sections/ProductsSection";
import ProductsTypes from "./sections/ProductsTypes";
import AccordionComponent from "../../components/AccordionComponent";
import SelectType from "../../components/SelectType";
import MultiRangeSlider from "../../components/MultiRangeSlider";

import { getProducts } from "../../store/actions/product";

const sizes = [
  { name: "xs", quantity: "(411)" },
  { name: "s", quantity: "(78)" },
  { name: "m", quantity: "(44)" },
  { name: "l", quantity: "(25)" },
  { name: "xl", quantity: "(5)" },
  { name: "xxl", quantity: "(7)" },
];

const colors = [
  { name: "black", quantity: "(411)" },
  { name: "red", quantity: "(41)" },
  { name: "yellow", quantity: "(51)" },
  { name: "gainsboro", quantity: "(05)" },
  { name: "white", quantity: "(5)" },
  { name: "blue", quantity: "(15)" },
];

const ProductsPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { currency } = useSelector((state) => state.currency);

  const [show, setShow] = useState(false);
  const [reset, setReset] = useState(false);
  const [filters, setFilters] = useState({
    color: [],
    size: [],
    price: { min: 0, max: 10000 },
  });

  useEffect(() => {
    if (router.query.id){
      setFilters({ ...filters, CategoryId: router.query.id });
    }
    dispatch(getProducts(filters));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSizesChange = (size, checked) => {
    let updatedSizes = [...filters.size];
    if (!checked) {
      const newArray = updatedSizes.filter((item) => item !== size.name);
      setFilters({ ...filters, size: [...newArray] });
    } else
      updatedSizes.push(size.name),
        setFilters({ ...filters, size: [...updatedSizes] });
  };

  const handleColorsChange = (color, checked) => {
    let updatedColors = [...filters.color];
    if (!checked) {
      const newArray = updatedColors.filter((item) => item !== color.name);
      setFilters({ ...filters, color: [...newArray] });
    } else
      updatedColors.push(color.name),
        setFilters({ ...filters, color: [...updatedColors] });
  };

  const handlePriceRangeChange = (min, max) => {
    if(reset){
      setReset(false)
    }
    setFilters({
      ...filters,
      price: { max, min },
    });
  };

  const handleShowMore = () => {
    console.log("clicked");
  };

  const handleClearFilters = () => {
    setReset(true);
    setFilters({ color: [], size: [], price: { min: 0, max: 10000 } });
  };

  return (
    <main className="h-100">
      <section className=" mb-5">
        <div>
          <div className="px-4">
            <div>
              <Breadcrumb className="text-capitalize">
                <Breadcrumb.Item>
                  <NavLink href="/">Home</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink href="/">All products</NavLink>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="mb-5">
              <ProductsTypes pageTitle={router.query.category} />
            </div>
            <div className="d-flex gap-4">
              <>
                <div className="products-sidebar">
                  <aside className="sticky-top" style={{ top: "9rem" }}>
                    <div className="filter-container">
                      <ul className="nav flex-column gap-3">
                        <li>
                          <h6 className="mb-0">
                            <span className="me-2">
                              <i className="mdi mdi-sort-variant"></i>
                            </span>
                            <span>FILTER:</span>
                          </h6>
                        </li>

                        <AccordionComponent title={"price"}>
                          <MultiRangeSlider
                            min={0}
                            max={currency==='PKR'?10000: 1000}
                            currency={currency}
                            reset={reset}
                            onChange={({ min, max }) =>
                              handlePriceRangeChange(min, max)
                            }
                          />
                        </AccordionComponent>

                        <AccordionComponent title={"size"}>
                          {sizes.map((item) => (
                            <SelectType
                              key={item.name}
                              item={item}
                              checked={
                                filters.size !== undefined &&
                                filters.size?.includes(item.name)
                                  ? true
                                  : false
                              }
                              handleChange={handleSizesChange}
                            />
                          ))}
                        </AccordionComponent>

                        <AccordionComponent title={"color"}>
                          <ul className="nav flex-column gap-3">
                            {colors.map((item) => (
                              <SelectType
                                key={item.name}
                                item={item}
                                checked={
                                  filters.color !== undefined &&
                                  filters.color?.includes(item.name)
                                    ? true
                                    : false
                                }
                                handleChange={handleColorsChange}
                              />
                            ))}
                          </ul>
                        </AccordionComponent>

                        <li>
                          <ul className="nav flex-column gap-3">
                            <li>
                              <button
                                type="button"
                                className="btn mb-0 fw-normal btn-primary-1 w-100 text-capitalize py-3"
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
                  type="button"
                  onClick={handleShow}
                  className="btn btn-primary-1 btn-sidebar-toggle-1"
                >
                  <i className="mdi-18px mdi mdi-sort-variant"></i>
                </button>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Product Filter</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>{/* <ProductFilter /> */}</Offcanvas.Body>
                </Offcanvas>
                {/* /On small screen */}
              </>
              <div className="vstack">
                <div>
                  {/* Header */}
                  <ProductsHeader
                    category="mens"
                    productsCount={products?.length}
                  />
                  {/* /Header */}
                  <ProductsSection productsList={products} />

                  {/* pagination */}
                  <div className="d-sm-flex text-center align-items-center justify-content-center px-2 mt-4">
                    <button
                      type="button"
                      className="btn btn-primary text-capitalize"
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
