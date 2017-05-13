import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, user, ...others }) {
  return (
    <Route
      {...others}
      render={props =>
        (user.logged
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default connect(
  state => ({
    user: state.user,
  })
)(PrivateRoute);
