import { APP_ALERT_ADD, APP_ALERT_REMOVE } from '../actionTypes';
import alert from './reducer';

describe('alert reducer', () => {
  const initialState = [];

  it('handles default state', () => {
    expect(alert(undefined, {})).toEqual(initialState);
  });

  it('handles APP_ALERT_ADD action', () => {
    const action = {
      type: APP_ALERT_ADD,
      alertInfo: { message: 'success message', type: 'success' }
    };
    const expectedState = [{ message: 'success message', type: 'success' }];
    expect(alert(initialState, action)).toEqual(expectedState);
  });

  it('handles APP_ALERT_REMOVE action', () => {
    const action = {
      type: APP_ALERT_REMOVE
    };
    const expectedState = [];
    expect(alert(initialState, action)).toEqual(expectedState);
  });

  it('handles APP_ALERT_REMOVE action with non empty initalState', () => {
    const _initialState = [
      { message: 'success message', type: 'success' },
      { message: 'Failed message', type: 'error' }
    ];
    const action = {
      type: APP_ALERT_REMOVE
    };
    const expectedState = [{ message: 'Failed message', type: 'error' }];
    expect(alert(_initialState, action)).toEqual(expectedState);
  });
});
