import USER_CONST from './userConst';

export const userListRequest = (data) => {
  return {
    type: USER_CONST.USER_LIST_REQUEST,
    payload: data
  };
};
export const userListSuccess = (data) => {
  return {
    type: USER_CONST.USER_LIST_SUCCESS,
    payload: data
  };
};
export const userListError = (error) => {
  return {
    type: USER_CONST.USER_LIST_ERROR,
    payload: error
  };
};

export const getuserRequest = (data) => {
  return {
    type: USER_CONST.GET_USER_REQUEST,
    payload: data
  };
};
export const getuserSuccess = (data) => {
  return {
    type: USER_CONST.GET_USER_SUCCESS,
    payload: data
  };
};
export const getuserError = (error) => {
  return {
    type: USER_CONST.GET_USER_ERROR,
    payload: error
  };
};

export const createuserRequest = (data) => {
  return {
    type: USER_CONST.CREATE_USER_REQUEST,
    payload: data
  };
};
export const createuserSuccess = (data) => {
  return {
    type: USER_CONST.CREATE_USER_SUCCESS,
    payload: data
  };
};
export const createuserError = (error) => {
  return {
    type: USER_CONST.CREATE_USER_ERROR,
    payload: error
  };
};

export const updateUserRequest = (data) => {
  return {
    type: USER_CONST.UPDATE_USER_REQUEST,
    payload: data
  };
};
export const updateUserSuccess = (data) => {
  return {
    type: USER_CONST.UPDATE_USER_SUCCESS,
    payload: data
  };
};
export const updateUserError = (error) => {
  return {
    type: USER_CONST.UPDATE_USER_ERROR,
    payload: error
  };
};

export const deleteUserRequest = (data) => {
  return {
    type: USER_CONST.DELETE_USER_REQUEST,
    payload: data
  };
};
export const deleteUserSuccess = (data) => {
  return {
    type: USER_CONST.DELETE_USER_SUCCESS,
    payload: data
  };
};
export const deleteUserError = (error) => {
  return {
    type: USER_CONST.DELETE_USER_ERROR,
    payload: error
  };
};
