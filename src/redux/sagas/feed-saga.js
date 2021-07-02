import {
  call,
  put,
  all,
  select,
  takeLatest,
} from 'redux-saga/effects';

import * as actions from 'src/redux/actions';
import * as api from './api';
import * as storage from 'src/utils/storage';

const fav = state => state.favourites.favourites;

function* loadData() {
  try {
    const { data } = yield call(api.get, '/v2/list/?limit=100');

    yield put(actions.setLoaderAction('Processing payment'));
    const favourites = yield storage.getItemFromStorage('favourites');
    const deleted = yield storage.getItemFromStorage('deleted');

    yield all([
      put(actions.setFavouritesAction(favourites)),
      put(actions.setDefaultDeletedAction(deleted)),
      put(actions.setFeedImagesAction(data?.filter(_ => !deleted.includes(_?.id) )))
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.stopLoaderAction());
  }
};

function* getFeedImages() {
  try {
    const { data } = yield call(api.get, '/v2/list/?limit=100');

    yield put(actions.setFeedImagesAction(data));
  } catch (e) {
    console.log(e);
  }
};

function* favourites({ payload }) {
  try {
    const { id } = payload;
    const favouritesFromStorage = yield select(fav);

    yield storage.favouritesAction(id);

    favouritesFromStorage.includes(id)
    ? yield put(actions.removeFavouritesAction(id))
    : yield put(actions.addFavouritesAction(id));
  
  } catch (e) {
    console.log(e);
  }
};

function* deleteImage({ payload }) {
  try {
    const { id } = payload;

    yield all([
      storage.deleteImage(id),
      put(actions.setDeletedImageAction(id)),
      put(actions.deleteFromFeedAction(id)),
    ]);
  } catch (e) {
    console.log(e);
  }
}
 
export default function* feedSagas() {
  yield all([
    takeLatest(actions.getFeedImagesAction, getFeedImages),
    takeLatest(actions.favouritesAction, favourites),
    takeLatest(actions.deleteImageAction, deleteImage),
    takeLatest(actions.loadDefaultDataAction, loadData),
  ]);
};
