import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alert extends Component {
  getAlertStyle(alertType) {
    switch (alertType) {
      case 'info':
        return 'alert-primary';
      case 'error':
        return 'alert-danger';
      case 'success':
        return 'alert-success';
      default:
        throw Error('Not implemented Alert type');
    }
  }

  render() {
    return this.props.isShow ? (
      <div
        className={`fixed-top text-center alert ${this.getAlertStyle(this.props.type)}`}
        role="alert"
      >
        {this.props.message}
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    ...state.alert[0],
    isShow: state.alert.length > 0
  };
}

export default connect(mapStateToProps)(Alert);
