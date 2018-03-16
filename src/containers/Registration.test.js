import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Registration from './Registration';

const storeData = {
  form: {
    registration: {
      registeredFields: {
        firstName: {},
        lastName: {}
      },
      values: {
        firstName: 'Bob',
        lastName: 'Willson'
      }
    }
  }
};

const store = configureStore([])(storeData);

describe('Container: Registration', () => {
  const wrapper = shallow(<Registration store={store} />);
  it('check the component rendered', () => {
    expect(wrapper.dive().find('ShowFields').length).toEqual(1);
    expect(
      wrapper
        .dive()
        .find('h1')
        .text()
    ).toEqual('Register account');
  });
});
