import { combineReducers } from 'redux';
import User from './users/userReducer';

const rootReducer = combineReducers({ User });
export default rootReducer;
