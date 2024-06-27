import api from "../../api/axiosConfig";
import { LOGIN, REGISTER, LOGOUT } from "../../api/routes";

export const login = async (dispatch, userData) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const response = await api.post(LOGIN, userData);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
  }
};

export const signup = async (dispatch, userData) => {
  dispatch({ type: "SIGNUP_REQUEST" });
  try {
    const response = await api.post(REGISTER, userData);
    dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "SIGNUP_FAILURE", payload: error.response.data });
  }
};

export const logout = async (dispatch) => {
  dispatch({ type: "LOGOUT_REQUEST" });
  try {
    await api.get(LOGOUT);
    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGOUT_FAILURE", payload: error.response.data });
  }
};
