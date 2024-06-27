import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  loading: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (data) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      await AsyncStorage.setItem("user", data.data);
      await AsyncStorage.setItem("accessToken", data.access_token);
      await AsyncStorage.setItem("refreshToken", data.refresh_token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: data.data,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        },
      });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT_REQUEST" });
    try {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "LOGOUT_FAILURE", payload: error.message });
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
