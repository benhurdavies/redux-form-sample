import * as types from '../actionTypes';

const initialState = [];

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case types.APP_ALERT_ADD:
      return [...state, { ...action.alertInfo }];
    case types.APP_ALERT_REMOVE:
      const [, ...alerts] = state;
      return alerts;
    default:
      return state;
  }
}
