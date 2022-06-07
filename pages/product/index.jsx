import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import SelectedAds from "../../components/SelectedAds";
import DetailTabs from "./sections/DetailTabs";
import DetailView from "./sections/DetailView";
import { getOnSaleProducts, getProduct } from "../../store/actions/product";

const DetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { onSaleProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (router.query.id) {
      dispatch(getProduct(router.query.id));
    }
    dispatch(getOnSaleProducts({category: "shirts", CategoryId: 40}));
  }, []);

  return (
    <main className="h-100">
      <DetailView />
      <DetailTabs />
    { onSaleProducts.length > 0 &&  <SelectedAds list={onSaleProducts} />}
    </main>
  );
};

export default DetailPage;
