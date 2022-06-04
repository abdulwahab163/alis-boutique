import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_SIGNUP_MODAL,
  SET_LOGIN_MODAL,
  SET_FORGET_PASSWORD_MODAL,
} from "../actions/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,

  signUpModalVisible: false,
  loginModalVisible: false,
  forgetPasswordModalVisible: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        user: null,
        error: payload,
      };
    }

    case SET_SIGNUP_MODAL: {
      return {
        ...state,
        signUpModalVisible: payload,
      };
    }
    case SET_LOGIN_MODAL: {
      return {
        ...state,
        loginModalVisible: payload,
      };
    }
    case SET_FORGET_PASSWORD_MODAL: {
      return {
        ...state,
        forgetPasswordModalVisible: payload,
      };
    }
    default:
      return state;
  }
};
export default authReducer;
