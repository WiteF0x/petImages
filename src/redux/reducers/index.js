import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import nav from 'src/navigation/reducer';
import feed from './feed';
import error from './error';
import loader from './loader';
import deleted from './deleted';
import favourites from './favourites';

const reducer = combineReducers({
  form,
  nav,
  feed,
  error,
  loader,
  deleted,
  favourites,
});

export default reducer;
