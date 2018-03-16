import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Container: App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the index Route', () => {
    expect(
      wrapper
        .find('Route')
        .first()
        .props().path
    ).toBe('/');
  });
});
