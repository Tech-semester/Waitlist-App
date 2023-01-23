import { WAITLIST_SUCCESSFUL, WAITLIST_FAILED, CLEAR_WAITLIST } from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    //     case USER_LOADED:
    //       return {
    //         ...state,
    //         user: action.payload,
    //         error: null,
    //         isAuthenticated: true,
    //       };
    //     case AUTH_ERROR:
    //       localStorage.removeItem("token");
    //       return {
    //         ...state,
    //         ...action.payload,
    //         error: action.payload.msg,
    //       };
    //     case REGISTER_SUCCESS:
    //       localStorage.setItem("token", action.payload.token);
    //       return {
    //         ...state,
    //         ...action.payload,
    //         isAuthenticated: true,
    //         error: null,
    //         user: null,
    //       };
    //     case REGISTER_FAIL:
    //       localStorage.removeItem("token");
    //       return {
    //         ...state,
    //         ...action.payload,
    //         error: action.payload.msg,
    //       };
    //     case LOGIN_SUCCESS:
    //       localStorage.setItem("token", action.payload.token);
    //       return {
    //         ...state,
    //         ...action.payload,
    //         isAuthenticated: true,
    //         error: null,
    //         user: null,
    //       };
    //     case LOGIN_FAIL:
    //       localStorage.removeItem("token");
    //       return {
    //         ...state,
    //         ...action.payload,
    //         error: action.payload.msg,
    //       };
    //     case LOGOUT:
    //       localStorage.removeItem("token");
    //       return {
    //         ...state,
    //         isAuthenticated: null,
    //         user: null,
    //         error: null,
    //         token: null,
    //       };
    //     case CLEAR_ERRORS:
    //       return {
    //         ...state,
    //         error: null,
    //       };

    case WAITLIST_SUCCESSFUL:
      return {
        ...state,
        message: action.payload,
      };
    case WAITLIST_FAILED:
      return {
        ...state,
        message: null,
      };

    case CLEAR_WAITLIST:
      return {
        ...state,
        message: null,
      };

    default:
      return state;
  }
};

export default authReducer;
