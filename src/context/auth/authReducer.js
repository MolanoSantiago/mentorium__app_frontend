const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "SIGNUP_REQUEST":
    case "LOGOUT_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload.data,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        loading: false,
        user: null,
        accessToken: null,
        refreshToken: null,
      };
    case "LOGIN_FAILURE":
    case "SIGNUP_FAILURE":
    case "LOGOUT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
