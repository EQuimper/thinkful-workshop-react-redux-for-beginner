import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupPage extends Component {
  state = { }
  render() {
    return (
      <div>
        SignupPage
        {this.props.user.isLogged &&
          <h1>You can see me if you log</h1>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  })
)(SignupPage);
