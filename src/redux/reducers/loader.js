import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
  isVisible: false,
  label: '',
};

const activitiesReducer = createReducer({
  [actions.setLoaderAction]: (state, label) => ({
    label,
    isVisible: true,
  }),
  [actions.stopLoaderAction]: () => ({
    ...initialState,
  })
}, initialState);

export default activitiesReducer;
