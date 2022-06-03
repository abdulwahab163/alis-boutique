import {
  ADD_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_SUCCESS,
} from "../actions/cart";

const initialState = {
  cartItemList: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART_ITEM_SUCCESS: {
      return {
        ...state,
        cartItemList: [...state.cartItemList, payload],
      };
    }
    case REMOVE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        cartItemList: state.cartItemList.filter(item=> item.id !== payload),
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
