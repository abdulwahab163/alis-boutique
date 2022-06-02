import {
  GET_NAV_LIST_REQUEST,
  GET_NAV_LIST_SUCCESS,
  GET_NAV_LIST_FAIL,
} from "../actions/navList";

const initialState = {
  navList: [],
  loading: false,
  error: null,
};

const navListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NAV_LIST_REQUEST: {
      return {
        ...state,
        navList: [],
        loading: true,
        error: null,
      };
    }
    case GET_NAV_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        navList: payload,
        error: null,
      };
    }
    case GET_NAV_LIST_FAIL: {
      return {
        ...state,
        loading: false,
        navList: [],
        error: payload,
      };
    }

    default:
      return state;
  }
};
export default navListReducer;
