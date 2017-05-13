import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

function checkState(touched, error) {
  if (touched && error) {
    return 'error';
  } else if (touched && !error) {
    return 'success';
  }

  return null;
}

export default function TextInput({ input, label, meta: { touched, error }, bsSize, ...others }) {
  return (
    <FormGroup bsSize={bsSize || 'large'} validationState={checkState(touched, error)}>
      <ControlLabel>{touched && error ? error : label}</ControlLabel>
      <FormControl {...input} {...others} />
      <FormControl.Feedback />
    </FormGroup>
  );
}
