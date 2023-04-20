import { createContext, useReducer } from "react";
import axios from "axios";
import ContextReducer from "./ContextReducer";
import {
  CLEAR_ERROR,
  CLEAR_LOADING,
  REQUEST,
  REQUEST_DONE,
  SET_ERROR,
  SET_LOADING,
  USER_LOGIN_SUCCESS,
} from "./Types";
import { USER_LOGOUT_SUCCESS } from "./Types";

const initialState = {
  userInfo: null,
  error: null,
  loading: false,
  userStatus: {},
};

const BASE_URL = "http://localhost:5000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [userState, dispatch] = useReducer(ContextReducer, initialState);

  const login = async (email, password) => {
    try {
      dispatch({ type: REQUEST });

      const { data } = await axios.post(
        `${BASE_URL}/api/user/login`,
        { email, password },
        config
      );
      console.log(data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data?.data,
      });
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: err,
      });
    } finally {
      dispatch({
        type: REQUEST_DONE,
      });
    }
  };

  const loadProfile = async () => {
    try {
      dispatch({ type: REQUEST });
      const { data } = await axios.get(`${BASE_URL}/api/user/profile`, config);
      console.log(data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data?.data,
      });
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: err,
      });
    } finally {
      dispatch({
        type: REQUEST_DONE,
      });
    }
  };

  // check auth

  const checkAuth = async () => {
    try {
      dispatch({ type: REQUEST });

      const { data } = await axios.get(
        `${BASE_URL}/api/user/check-auth`,
        config
      );
      const isAuth = await data?.session_id;

      return isAuth;
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: err,
      });
    } finally {
      dispatch({
        type: REQUEST_DONE,
      });
    }
  };

  const logOut = async () => {
    try {
      dispatch({ type: REQUEST });

      const res = await axios.post(`${BASE_URL}/api/user/logout`, {}, config);
      if (res.status === 200) {
        dispatch({
          type: USER_LOGOUT_SUCCESS,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: err,
      });
    } finally {
      dispatch({
        type: REQUEST_DONE,
      });
    }
  };

  const setLoading = (set) => {
    if (set) {
      dispatch({ type: SET_LOADING });
    } else dispatch({ type: CLEAR_LOADING });
  };

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <Context.Provider
      value={{
        userInfo: userState.userInfo,
        loading: userState.loading,
        error: userState.error,
        userStatus: userState.userStatus,
        login,
        loadProfile,
        setLoading,
        clearError,
        checkAuth,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
