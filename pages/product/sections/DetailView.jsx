import React from "react";
import { useSelector } from "react-redux";

import ContainerPrimary from "../../../components/Container";
import DetailDataSection from "./DetailDataSection";
import DetailHeader from "./DetailHeader";
import DetailThumbsSection from "./DetailThumbsSection";

const DetailView = () => {

  const { product } = useSelector((state) => state.products);

  return (
    <section className=" mb-5">
      <div>
        <ContainerPrimary>
          <div>
            <DetailHeader />
            {/* Detail */}
            <div className="row row-cols-1 row-cols-lg-3 gy-4">
              <DetailThumbsSection
                productImages={product.productFiles}
                description={product.description}
              />
              <div>
                <DetailDataSection/>
              </div>
            </div>
            {/* /Detail */}
          </div>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default DetailView;
