import React from "react";
import ContainerPrimary from "../../../components/Container";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../components/ProductCard";

const ProductsTodaySection = () => {
  const list = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/2635/3244/products/DSC07081_533x.jpg?v=1646304070",
      name: "T-Shirt Summer Vibes",
      price: "$119.99",
      discountState: true,
      discount: "30%",
      discountPrice: "$89.99",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_9181_533x.jpg?v=1646473604",
      name: "Loose Knit 3/4 Sleeve",
      price: "$119.99",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2635/3244/products/DSC06399_533x.jpg?v=1645257495",
      name: "Basic Slim Fit T-Shirt",
      price: "$100",
      discountState: true,
      discount: "50%",
      discountPrice: "$50",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2635/3244/products/DSC_1472_03f18a4d-9090-4539-ab9f-39ce554baef2_533x.jpg?v=1642762582",
      name: "Loose Textured T-Shirt",
      price: "$119.99",
    },
  ];

  return (
    <section className="selected-section mb-5 pb-3">
      <div>
        <ContainerPrimary>
          <div className=" mb-4 pb-2">
            <h4 className="mb-0 me-auto fw-500 text-capitalize">Sale</h4>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation={true}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {list.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProductCard className="height-size-3" item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ContainerPrimary>
      </div>
    </section>
  );
};

export default ProductsTodaySection;
