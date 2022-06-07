import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_NEW_ARRIVALS_REQUEST,
  GET_NEW_ARRIVALS_SUCCESS,
  GET_NEW_ARRIVALS_FAIL,
  GET_ON_SALE_PRODUCTS_REQUEST,
  GET_ON_SALE_PRODUCTS_SUCCESS,
  GET_ON_SALE_PRODUCTS_FAIL,
} from "../actions/product";

const initialState = {
  products: [],
  product: [],
  newArrivals: [],
  onSaleProducts: [],
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
    case GET_NEW_ARRIVALS_REQUEST: {
      return {
        ...state,
        newArrivals: [],
        loading: true,
        error: null,
      };
    }
    case GET_NEW_ARRIVALS_SUCCESS: {
      return {
        ...state,
        loading: false,
        newArrivals: payload,
        error: null,
      };
    }
    case GET_NEW_ARRIVALS_FAIL: {
      return {
        ...state,
        loading: false,
        newArrivals: [],
        error: payload,
      };
    }
    case GET_ON_SALE_PRODUCTS_REQUEST: {
      return {
        ...state,
        onSaleProducts: [],
        loading: true,
        error: null,
      };
    }
    case GET_ON_SALE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        onSaleProducts: payload,
        error: null,
      };
    }
    case GET_ON_SALE_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        onSaleProducts: [],
        error: payload,
      };
    }
    default:
      return state;
  }
};
export default productReducer;
