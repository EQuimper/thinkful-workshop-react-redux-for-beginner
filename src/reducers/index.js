import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import user from './user';

export default combineReducers({
  user,
  router,
  form,
});
