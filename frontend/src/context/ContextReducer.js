import {
  CLEAR_ERROR,
  CLEAR_LOADING,
  REQUEST,
  REQUEST_DONE,
  SET_ED,
  SET_ERROR,
  SET_LOADING,
  SET_SKILLS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_PROFILE_UPDATE,
  USER_REGISTER_SUCCESS,
} from "./Types";

const ContextReducer = (state, action) => {
  const initialState = {
    userInfo: {},
    error: null,
    loading: false,
    userStatus: null,
    ed: [],
    skills: [],
  };
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case REQUEST_DONE:
      return { ...state, loading: false };

    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
    case USER_PROFILE_UPDATE:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: null,
      };

    case USER_LOGOUT_SUCCESS:
      return initialState;

    case SET_ED:
      return { ...state, ed: action.payload };
    case SET_SKILLS:
      return { ...state, skills: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    case CLEAR_ERROR:
      return { ...state, error: null, loading: false };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default ContextReducer;
