import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "../../components/NavLink";
import ProductsHeader from "./sections/ProductsHeader";
import ProductsSection from "./sections/ProductsSection";
import ProductsSidebar from "./sections/ProductsSidebar";
import ProductsTypes from "./sections/ProductsTypes";
import { getProducts } from "../../store/actions/product";

const ProductsPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    let queryObject = {}
    if(router.query.id)
    queryObject.id= router.query.id;
    dispatch(getProducts(queryObject))
  }, []);
  
  
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
                  <NavLink href="/products/productsPage">All products</NavLink>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="mb-5">
              <ProductsTypes pageTitle={router.query.category} />
            </div>
            <div className="d-flex gap-4">
              <ProductsSidebar />
              <div className="vstack">
                <div>
                  {/* Header */}
                  <ProductsHeader
                    category="mens"
                    productsCount={products?.length}
                  />
                  {/* /Header */}
                  <ProductsSection productsList={products} />
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
