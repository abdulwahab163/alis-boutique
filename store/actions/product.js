import axios from "axios";

export const getProducts = (CategoryId, query) => async (disptach) => {
  disptach({ type: GET_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(
      "http://13.215.179.176:3002/api/product/search",
      {
        params: { ...query, CategoryId },
      }
    );
    disptach({ type: GET_PRODUCTS_SUCCESS, payload: data?.data?.rows });
  } catch (error) {
    disptach({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProduct = (id) => async (disptach) => {
  disptach({ type: GET_PRODUCT_REQUEST });

  try {
    const { data } = await axios.get(
      `http://13.215.179.176:3002/api/product/${id}`
    );
    let product = {
      ...data.data,
      size: JSON.parse(data.data.size),
    };
    disptach({ type: GET_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    disptach({ type: GET_PRODUCT_FAIL, payload: error.message });
  }
};

export const getNewArrivals = (query) => async (disptach) => {
  disptach({ type: GET_NEW_ARRIVALS_REQUEST });

  try {
    const { data } = await axios.get(
      `http://13.215.179.176:3002/api/product/search`,
      {
        params: { ...query },
      }
    );
    disptach({ type: GET_NEW_ARRIVALS_SUCCESS, payload: data?.data?.rows });
  } catch (error) {
    disptach({ type: GET_NEW_ARRIVALS_FAIL, payload: error.message });
  }
};

export const getOnSaleProducts = (query) => async (disptach) => {
  disptach({ type: GET_ON_SALE_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(
      `http://13.215.179.176:3002/api/product/search`,
      {
        params: { ...query },
      }
    );
    disptach({ type: GET_ON_SALE_PRODUCTS_SUCCESS, payload: data?.data?.rows });
  } catch (error) {
    disptach({ type: GET_ON_SALE_PRODUCTS_FAIL, payload: error.message });
  }
};

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const GET_NEW_ARRIVALS_REQUEST = "GET_NEW_ARRIVALS_REQUEST";
export const GET_NEW_ARRIVALS_SUCCESS = "GET_NEW_ARRIVALS_SUCCESS";
export const GET_NEW_ARRIVALS_FAIL = "GET_NEW_ARRIVALS_FAIL";

export const GET_ON_SALE_PRODUCTS_REQUEST = "GET_ON_SALE_PRODUCTS_REQUEST";
export const GET_ON_SALE_PRODUCTS_SUCCESS = "GET_ON_SALE_PRODUCTS_SUCCESS";
export const GET_ON_SALE_PRODUCTS_FAIL = "GET_ON_SALE_PRODUCTS_FAIL";
