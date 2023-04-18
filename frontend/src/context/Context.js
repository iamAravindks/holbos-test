import { createContext, useReducer } from "react";
import ContextReducer from "./ContextReducer";

const initialState = {
  user: null,
  error: null,
  loading: null,
  userStatus: null,
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

  return (
    <Context.Provider
      value={{
        user: userState.user,
        loading: userState.loading,
        error: userState.error,
        userStatus: userState.userStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
