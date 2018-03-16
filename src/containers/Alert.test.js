import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Alert from './Alert';

describe('Container: Alert', () => {
  it('Show Alert', () => {
    const store = configureStore([])({
      alert: [{ message: 'Validate success', type: 'success' }]
    });
    const wrapper = shallow(<Alert store={store} />);
    expect(wrapper.dive().find('div').length).toEqual(1);
    expect(wrapper.dive().find('.alert-success').length).toEqual(1);
    expect(
      wrapper
        .dive()
        .find('div')
        .text()
    ).toEqual('Validate success');
  });

  it('Hide Alert', () => {
    const store = configureStore([])({
      alert: []
    });
    const wrapper = shallow(<Alert store={store} />);
    expect(wrapper.dive().find('div').length).toEqual(0);
  });
});
