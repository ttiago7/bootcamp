import { getUsers, loginUser, registerUser } from "../../services/userServices";
import actionsTypes from "./actionsTypes";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionsTypes.USER_LOGIN_REQUEST,
      });
      const data = await loginUser(email, password);
      dispatch({
        type: actionsTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionsTypes.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: actionsTypes.USER_LOGIN_LOGOUT });
    dispatch({ type: actionsTypes.USER_DETAILS_RESET });
    dispatch({ type: actionsTypes.ORDER_LIST_MY_RESET });
    dispatch({ type: actionsTypes.USER_LIST_RESET });
  };
};

export const register = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionsTypes.USER_REGISTER_REQUEST,
      });
      const data = await registerUser(name, email, password);
      dispatch({
        type: actionsTypes.USER_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: actionsTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionsTypes.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionsTypes.USER_DELETE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      await deleteAUser(id, userInfo);
      dispatch({
        type: actionsTypes.USER_DELETE_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: actionsTypes.USER_DELETE_FAIL,
        payload: message,
      });
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionsTypes.USER_UPDATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const data = await updateAUser(user, userInfo);
      dispatch({
        type: actionsTypes.USER_UPDATE_SUCCESS,
      });
      dispatch({ type: actionsTypes.USER_DETAILS_SUCCESS, payload: data });
      dispatch({ type: actionsTypes.USER_DETAILS_RESET });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: actionsTypes.USER_UPDATE_FAIL,
        payload: message,
      });
    }
  };
};
