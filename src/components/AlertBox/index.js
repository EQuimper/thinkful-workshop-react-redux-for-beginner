import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

import { closeAlert } from '../../actions/alert';
import alertMessage from '../../constants/alertMessage';

function getMessage(alertType) {
  switch (alertType) {
    case 'UNAUTHORIZED':
      return alertMessage.UNAUTHORIZED;
    case 'WARNING':
      return alertMessage.WARNING;
    default:
      return null;
  }
}

function AlertBox(props) {
  if (props.alert.isShow) {
    return (
      <Alert
        bsStyle={props.alert.alertType === 'WARNING' ? 'warning' : 'danger'}
        onDismiss={() => props.closeAlert()}
      >
        <h4>{getMessage(props.alert.alertType).title}</h4>
        <p>{getMessage(props.alert.alertType).text}</p>
      </Alert>
    );
  }
  return null;
}

export default connect(
  state => ({
    alert: state.alert,
  }),
  { closeAlert },
)(AlertBox);
