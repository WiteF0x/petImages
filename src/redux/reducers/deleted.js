import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
  deleted: [],
};

export default createReducer({
  [actions.setDeletedImageAction]: (state, id) => ({
    ...state,
    deleted: [...state.deleted, id],
  }),
  [actions.setDefaultDeletedAction]: (state, deleted) => ({
    ...state,
    deleted,
  }),
}, initialState);
