import axios from "axios";

export const login = (data) => async (disptach) => {
  disptach({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(
      "http://13.215.179.176:3002/api/product/search",
    );
    disptach({ type: LOGIN_SUCCESS, payload: data?.data?.rows });
  } catch (error) {
    disptach({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const setSignUpModal = (value) => (disptach) => {
    disptach({ type: SET_SIGNUP_MODAL, payload: value });
};

export const setLoginModal = (value) => (disptach) => {
    disptach({ type: SET_LOGIN_MODAL, payload: value });
};

export const setForgetPasswordModal = (value) => (disptach) => {
    disptach({ type: SET_FORGET_PASSWORD_MODAL, payload: value });
};


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SET_SIGNUP_MODAL = "SET_SIGNUP_MODAL";
export const SET_LOGIN_MODAL = "SET_LOGIN_MODAL";
export const SET_FORGET_PASSWORD_MODAL = "SET_FORGET_PASSWORD_MODAL";
