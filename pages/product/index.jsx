import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SelectedAds from "../../components/SelectedAds";
import DetailTabs from "./sections/DetailTabs";
import DetailView from "./sections/DetailView";
import { getProduct } from "../../store/actions/product";

const DetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    if(router.query.id) {
      dispatch(getProduct(router.query.id));
    }
  }, []);


  return (
    <main className="h-100">
      <DetailView product={product} />
      <DetailTabs />
      <SelectedAds />
    </main>
  );
};

export default DetailPage;
