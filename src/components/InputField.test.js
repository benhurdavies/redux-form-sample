import { shallow } from 'enzyme';
import React from 'react';

import InputField from './InputField';

describe('Component: InputField', () => {
  it('basic text field', () => {
    const props = {
      label: 'User Name',
      type: 'text',
      error: {},
      meta: { asyncValidating: null, error: null }
    };

    const wrapper = shallow(<InputField {...props} />);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').text()).toEqual(props.label);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(0);
    expect(wrapper.find('.async-validating').length).toEqual(0);
  });

  it('Text field have error message', () => {
    const props = {
      label: 'User Name',
      type: 'text',
      meta: {
        asyncValidating: null,
        touched: true,
        error: 'User name is require'
      }
    };

    const wrapper = shallow(<InputField {...props} />);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').text()).toEqual(props.label);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').text()).toEqual(props.meta.error);
    expect(wrapper.find('.async-validating').length).toEqual(0);
  });

  it('Text field have error message and aysc notification', () => {
    const props = {
      label: 'User Name',
      type: 'text',
      meta: {
        asyncValidating: true,
        touched: true,
        error: 'User name is require'
      }
    };

    const wrapper = shallow(<InputField {...props} />);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').text()).toEqual(props.label);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').text()).toEqual(props.meta.error);
    expect(wrapper.find('.async-validating').length).toEqual(1);
  });
});
