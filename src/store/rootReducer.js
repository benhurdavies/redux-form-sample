import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import alert from './Alert/reducer';

const root = combineReducers({
  router: routerReducer,
  form: reduxFormReducer,
  alert
});

export default root;
