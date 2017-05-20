import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/user';

import LoginForm from './LoginForm';
import AlertBox from '../../components/AlertBox';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>LoginPage</h1>
        <AlertBox />
        <LoginForm login={this.props.login} />
      </div>
    );
  }
}

export default connect(undefined, { login })(LoginPage);
