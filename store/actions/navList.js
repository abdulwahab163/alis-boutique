import axios from "axios";

export const getNavList = () => async (disptach) => {
  disptach({ type: GET_NAV_LIST_REQUEST });

  try {
    const { data } = await axios.get(
      "http://13.215.179.176:3002/api/category/allLevelCategories"
    );
    disptach({ type: GET_NAV_LIST_SUCCESS, payload: data?.data?.rows });
  } catch (error) {
    disptach({ type: GET_NAV_LIST_FAIL, payload: error.message });
  }
};

export const GET_NAV_LIST_REQUEST = "GET_NAV_LIST_REQUEST";
export const GET_NAV_LIST_SUCCESS = "GET_NAV_LIST_SUCCESS";
export const GET_NAV_LIST_FAIL = "GET_NAV_LIST_FAIL";
