import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import { reducer as toastr } from 'react-redux-toastr';

import user from './user';
import alert from './alert';

export default combineReducers({
  user,
  alert,
  router,
  toastr,
  form,
});
