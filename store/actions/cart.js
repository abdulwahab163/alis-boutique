export const addCartItem = (product) => (disptach) => {
  disptach({ type: ADD_CART_ITEM_SUCCESS, payload: product });
};

export const removeCartItem = (productId) => (disptach) => {
  disptach({ type: REMOVE_CART_ITEM_SUCCESS, payload: productId });
};

export const ADD_CART_ITEM_SUCCESS = "ADD_CART_ITEM_SUCCESS";
export const REMOVE_CART_ITEM_SUCCESS = "REMOVE_CART_ITEM_SUCCESS";
