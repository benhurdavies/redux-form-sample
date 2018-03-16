import * as type from '../actionTypes';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export function addAlert(alertInfo) {
  return { type: type.APP_ALERT_ADD, alertInfo };
}

export function removeAlert() {
  return { type: type.APP_ALERT_REMOVE };
}

export function showAlert(message, type) {
  return dispatch => {
    dispatch(
      addAlert({
        message,
        type
      })
    );
    dispatch(autoHideAlert());
  };
}

function autoHideAlert() {
  return dispatch => {
    sleep(3000).then(() => {
      dispatch(removeAlert());
    });
  };
}
