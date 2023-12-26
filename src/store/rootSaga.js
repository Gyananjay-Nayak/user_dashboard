import { all } from 'redux-saga/effects';
import UserSaga from './users/userSaga';

export default function* rootSaga() {
  yield all([UserSaga()]);
}
