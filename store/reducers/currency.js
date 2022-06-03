import { SET_CURRENCY_SUCCESS } from "../actions/currency";

const initialState = {
  currency: "PKR",
};

const currencyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENCY_SUCCESS: {
      return {
        ...state,
        currency: payload,
      };
    }

    default:
      return state;
  }
};
export default currencyReducer;
