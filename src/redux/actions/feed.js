import { createAction } from 'redux-act';

export const loadDefaultDataAction = createAction('LOAD_DEFAULT_DATA_ACTION');

export const getFeedImagesAction = createAction('GET_FEED_IMAGES_ACTION');
export const setFeedImagesAction = createAction('SET_FEED_IMAGES_ACTION');
export const deleteFromFeedAction = createAction('DELETE_FROM_FEED_ACTION');
