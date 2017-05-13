import React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import TextInput from '../../../components/TextInput';

import { loginValidation } from './validation';

function LoginForm({ login, handleSubmit, submitting, invalid }) {
  return (
    <form onSubmit={handleSubmit(login)}>
      <Field
        component={TextInput}
        name="email"
        label="Email"
        placeholder="Email here..."
        type="email"
        autoFocus
      />

      <Field
        component={TextInput}
        name="password"
        label="Password"
        placeholder="Password here..."
        type="password"
      />

      <Button
        block
        bsSize="large"
        type="submit"
        disabled={submitting || invalid}
      >
        Login
      </Button>
    </form>
  );
}

export default reduxForm({
  form: 'login',
  validate: loginValidation,
})(LoginForm);
