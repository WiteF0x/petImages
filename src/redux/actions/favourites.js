import { createAction } from 'redux-act';

export const favouritesAction = createAction('FAVOURITES_ACTION');
export const addFavouritesAction = createAction('ADD_FAVOURITES_ACTION');
export const removeFavouritesAction = createAction('REMOVE_FAVOURITES_ACTION');

export const setFavouritesAction = createAction('SET_FAVOURITES_ACTION');
