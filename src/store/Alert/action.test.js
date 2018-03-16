import { addAlert, removeAlert } from './action';
import * as types from '../actionTypes';

describe('Alert actions', () => {
  it('handles APP_ALERT_ADD action creator', () => {
    let alertAdd = { message: 'success message', type: 'success' };
    const action = {
      type: types.APP_ALERT_ADD,
      alertInfo: { ...alertAdd }
    };
    expect(addAlert(alertAdd)).toEqual(action);
  });

  it('handles APP_ALERT_REMOVE action creator', () => {
    expect(removeAlert()).toEqual({ type: types.APP_ALERT_REMOVE });
  });
});
