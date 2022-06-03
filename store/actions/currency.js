export const setCurrency = (currency) => (disptach) => {
  disptach({ type: SET_CURRENCY_SUCCESS, payload: currency });
};

export const SET_CURRENCY_SUCCESS = "SET_CURRENCY_SUCCESS";
