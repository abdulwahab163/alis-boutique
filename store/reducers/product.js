import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
  } from "../actions/product";
  
  const initialState = {
    products: [],
    product:[],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCTS_REQUEST: {
        return {
          ...state,
          products: [],
          loading: true,
          error: null,
        };
      }
      case GET_PRODUCTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          products: payload,
          error: null,
        };
      }
      case GET_PRODUCTS_FAIL: {
        return {
          ...state,
          loading: false,
          products: [],
          error: payload,
        };
      }
      case GET_PRODUCT_REQUEST: {
        return {
          ...state,
          product: [],
          loading: true,
          error: null,
        };
      }
      case GET_PRODUCT_SUCCESS: {
        return {
          ...state,
          loading: false,
          product: payload,
          error: null,
        };
      }
      case GET_PRODUCT_FAIL: {
        return {
          ...state,
          loading: false,
          product: [],
          error: payload,
        };
      }
      default:
        return state;
    }
  };
  export default productReducer;
  