import USER_CONST from './userConst';

const initialState = {
  error: '',
  loading: false
};
const User = (state, action) => {
  console.log(state, action.type);
  if (typeof state === 'undefined') {
    state = initialState;
  }
  switch (action.type) {
    case USER_CONST.USER_LIST_REQUEST:
      state = {
        ...state,
        loading: true,
        userList: null,
        error: ''
      };
      break;
    case USER_CONST.USER_LIST_SUCCESS:
      state = {
        ...state,
        loading: false,
        userList: action.payload.statusCode === 200 ? action.payload.data : false,
        error: ''
      };
      break;
    case USER_CONST.USER_LIST_ERROR:
      state = {
        ...state,
        loading: false,
        userList: null,
        error: action.payload.data ? action.payload.data.errorDescription : ''
      };
      break;
    case USER_CONST.GET_USER_REQUEST:
      state = {
        ...state,
        loading: true,
        userDetails: null,
        error: ''
      };
      break;
    case USER_CONST.GET_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        userDetails: action.payload.statusCode === 200 ? action.payload.data : false,
        error: ''
      };
      break;
    case USER_CONST.GET_USER_ERROR:
      state = {
        ...state,
        loading: false,
        userDetails: null,
        error: action.payload.data ? action.payload.data.errorDescription : ''
      };
      break;
    case USER_CONST.CREATE_USER_REQUEST:
      state = {
        ...state,
        loading: true,
        createUser: null,
        error: ''
      };
      break;
    case USER_CONST.CREATE_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        createUser: action.payload.statusCode === 200 ? action.payload.data : false,
        error: ''
      };
      break;
    case USER_CONST.CREATE_USER_ERROR:
      state = {
        ...state,
        loading: false,
        createUser: null,
        error: action.payload.data ? action.payload.data.errorDescription : ''
      };
      break;
    case USER_CONST.UPDATE_USER_REQUEST:
      state = {
        ...state,
        loading: true,
        updateUser: null,
        error: ''
      };
      break;
    case USER_CONST.UPDATE_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        updateUser: action.payload.statusCode === 200 ? action.payload.data : false,
        error: ''
      };
      break;
    case USER_CONST.UPDATE_USER_ERROR:
      state = {
        ...state,
        loading: false,
        updateUser: null,
        error: action.payload.data ? action.payload.data.errorDescription : ''
      };
      break;
    case USER_CONST.DELETE_USER_REQUEST:
      state = {
        ...state,
        loading: true,
        deleteUser: null,
        error: ''
      };
      break;
    case USER_CONST.DELETE_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        deleteUser: action.payload.statusCode === 200 ? action.payload.data : false,
        error: ''
      };
      break;
    case USER_CONST.DELETE_USER_ERROR:
      state = {
        ...state,
        loading: false,
        deleteUser: null,
        error: action.payload.data ? action.payload.data.errorDescription : ''
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default User;
