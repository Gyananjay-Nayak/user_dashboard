import { takeEvery, fork, all, call, put } from 'redux-saga/effects';

import USER_CONST from './userConst';
import {
  userListError,
  userListSuccess,
  getuserSuccess,
  getuserError,
  createuserError,
  createuserSuccess,
  updateUserSuccess,
  updateUserError,
  deleteUserSuccess,
  deleteUserError
} from './userActions';
import checkHttpStatus, { BASE_URL } from '../../apiUtils';
import axios from 'axios';
import { toast } from 'react-toastify';

function* userlist(action) {
  let url = `${BASE_URL}/users?`;
  const limit = action?.payload?.limit;
  const skip = action?.payload?.skip;

  if (limit !== null) {
    url += `&limit=${limit}`;
  }
  if (skip !== null) {
    url += `&skip=${skip}`;
  }

  try {
    const apiResponse = yield call(axios.get, url);

    const response = yield call(checkHttpStatus, apiResponse);
    if (response && response.status === 200) {
      const responseData = {
        statusCode: 200,
        data: response.data
      };
      yield put(userListSuccess(responseData));
    } else {
      const responseData = {
        data: response.data.error
      };
      yield put(userListError(responseData));
    }
  } catch (error) {
    const errorData = {
      error: {
        statusText: error,
        netWorkError: true
      }
    };
    yield put(userListError(errorData));
  }
}

function* userDetails(action) {
  let url = `${BASE_URL}/users`;
  const userId = action?.payload;

  if (userId != null) {
    url += `/${userId}`;
  }

  try {
    const apiResponse = yield call(axios.get, url);

    const response = yield call(checkHttpStatus, apiResponse);
    if (response && response.status === 200) {
      const responseData = {
        statusCode: 200,
        data: response.data
      };
      yield put(getuserSuccess(responseData));
    } else {
      const responseData = {
        data: response.data.error
      };
      yield put(getuserError(responseData));
    }
  } catch (error) {
    const errorData = {
      error: {
        statusText: error,
        netWorkError: true
      }
    };
    yield put(getuserError(errorData));
  }
}

function* userCreate(action) {
  let url = `${BASE_URL}/users/add`;

  try {
    const apiResponse = yield call(axios.post, url, action.payload);

    const response = yield call(checkHttpStatus, apiResponse);
    if (response && response.status === 200) {
      const responseData = {
        statusCode: 200,
        data: response.data
      };
      toast.success('User created successfully!');
      yield put(createuserSuccess(responseData));
    } else {
      const responseData = {
        data: response.data.error
      };
      toast.error('Create User Failed');
      yield put(createuserError(responseData));
    }
  } catch (error) {
    const errorData = {
      error: {
        statusText: error,
        netWorkError: true
      }
    };
    toast.error('Network Error');
    yield put(createuserError(errorData));
  }
}
function* userUpdate(action) {
  let url = `${BASE_URL}/users/${action.payload.id}`;

  try {
    const apiResponse = yield call(axios.put, url, action.payload);

    const response = yield call(checkHttpStatus, apiResponse);
    if (response && response.status === 200) {
      const responseData = {
        statusCode: 200,
        data: response.data
      };
      toast.success('User Updated successfully!');
      yield put(updateUserSuccess(responseData));
    } else {
      const responseData = {
        data: response.data.error
      };
      toast.error('Update User Failed');
      yield put(updateUserError(responseData));
    }
  } catch (error) {
    const errorData = {
      error: {
        statusText: error,
        netWorkError: true
      }
    };
    toast.error('Network Error');
    yield put(updateUserError(errorData));
  }
}
function* userDelete(action) {
  let url = `${BASE_URL}/users/${action.payload}`;

  try {
    const apiResponse = yield call(axios.delete, url);

    const response = yield call(checkHttpStatus, apiResponse);
    if (response && response.status === 200) {
      const responseData = {
        statusCode: 200,
        data: response.data
      };
      toast.success('User Deleted successfully!');
      yield put(deleteUserSuccess(responseData));
    } else {
      const responseData = {
        data: response.data.error
      };
      toast.error('Delete User Failed');
      yield put(deleteUserError(responseData));
    }
  } catch (error) {
    const errorData = {
      error: {
        statusText: error,
        netWorkError: true
      }
    };
    toast.error('Network Error');
    yield put(deleteUserError(errorData));
  }
}

export function* watchUserList() {
  yield takeEvery(USER_CONST.USER_LIST_REQUEST, userlist);
}

export function* watchUserDetails() {
  yield takeEvery(USER_CONST.GET_USER_REQUEST, userDetails);
}

export function* watchUserCreate() {
  yield takeEvery(USER_CONST.CREATE_USER_REQUEST, userCreate);
}
export function* watchUserUpdate() {
  yield takeEvery(USER_CONST.UPDATE_USER_REQUEST, userUpdate);
}
export function* watchUserDelete() {
  yield takeEvery(USER_CONST.DELETE_USER_REQUEST, userDelete);
}

function* UserSaga() {
  yield all([
    fork(watchUserList),
    fork(watchUserDetails),
    fork(watchUserCreate),
    fork(watchUserUpdate),
    fork(watchUserDelete)
  ]);
}

export default UserSaga;
