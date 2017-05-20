import { push } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

export function login(values) {
  return (dispatch) => {
    if (values.email === 'quimperemanuel@gmail.com' && values.password === '123') {
      dispatch({
        type: 'LOGIN',
      });

      dispatch(push('/'));

      return dispatch(toastr.success('Welcome', values.email));
    }

    return dispatch({ type: 'OPEN_ALERT', alertType: 'UNAUTHORIZED' });
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
  };
}
