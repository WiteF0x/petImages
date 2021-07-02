import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
  feed: [],
};

export default createReducer({
  [actions.setFeedImagesAction]: (state, feed) => ({
    ...state,
    feed,
  }),
  [actions.deleteFromFeedAction]: (state, id) => ({
    ...state,
    feed: [...state.feed?.filter(_ => _?.id !== id)],
  }),
}, initialState);
