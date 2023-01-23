import { useReducer } from "react";
import { WAITLIST_SUCCESSFUL, WAITLIST_FAILED, CLEAR_WAITLIST } from "../types";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    error: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  //   const loadUser = async () => {
  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${state.token}`,
  //       },
  //     };

  //     try {
  //       const res = await axios.get(
  //         "https://tomiwadaniels.herokuapp.com/api/v1/auth/user",
  //         options
  //       );

  //       dispatch({ type: USER_LOADED, payload: res.data });
  //     } catch (error) {
  //       dispatch({ type: AUTH_ERROR, payload: error.response.data });
  //     }
  //   };
  //     const register = async (formdata) => {
  //       const options = {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Content-Type": "application/json",
  //         },
  //       };

  //       try {
  //         const res = await axios.post(
  //           "https://tomiwadaniels.herokuapp.com/api/v1/auth/register",
  //           formdata,
  //           options
  //         );
  //         dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  //       } catch (error) {
  //         dispatch({ type: REGISTER_FAIL, payload: error.response.data });
  //       }
  //     };
  //   const login = async (formdata) => {
  //     const options = {
  //       headers: {
  //         "access-control-allow-origin": "*",
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     try {
  //       const res = await axios.post(
  //         "https://tomiwadaniels.herokuapp.com/api/v1/auth/login",
  //         formdata,
  //         options
  //       );
  //       dispatch({
  //         type: LOGIN_SUCCESS,
  //         payload: res.data,
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: LOGIN_FAIL,
  //         payload: error.response.data,
  //       });
  //     }
  //   };
  //   const clearErrors = () => {
  //     dispatch({ type: CLEAR_ERRORS });
  //   };

  //   const logOut = () => {
  //     dispatch({ type: LOGOUT });
  //   };

  const waitlist = async (formdata) => {
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://ogamoni.herokuapp.com/",
        formdata,
        options
      );
      dispatch({
        type: WAITLIST_SUCCESSFUL,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WAITLIST_FAILED,
        payload: error.response.data,
      });
    }
  };

  const clearWaitlist = () => {
    dispatch({
      type: CLEAR_WAITLIST,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        message: state.message,
        waitlist,
        clearWaitlist,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
