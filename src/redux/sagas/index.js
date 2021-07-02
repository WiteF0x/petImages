import { all } from 'redux-saga/effects';
import feedSagas from './feed-saga';

export default function* rootSaga() {
  yield all([
    feedSagas(),
  ]);
};
