import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
  favourites: [],
};

export default createReducer({
  [actions.addFavouritesAction]: (state, id) => ({
    ...state,
    favourites: [...state.favourites, id],
  }),
  [actions.removeFavouritesAction]: (state, id) => ({
    ...state,
    favourites: [...state.favourites?.filter(_ => _ !== id)]
  }),
}, initialState);
