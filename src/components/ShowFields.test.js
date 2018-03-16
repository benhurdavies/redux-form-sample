import React from 'react';
import { shallow } from 'enzyme';

import ShowFields from './ShowFields';

describe('Component: ShowFields', () => {
  const props = {
    fields: ['firstName', 'lastName', 'email'],
    values: {
      firstName: 'Bob',
      lastName: 'Willson'
    },
    nameMap: {
      firstName: 'First Name',
      lastName: 'Last Name'
    }
  };

  const wrapper = shallow(<ShowFields {...props} />);

  it('checking all rows and basics', () => {
    expect(wrapper.find('tr').length).toEqual(4);
    expect(wrapper.find('thead').length).toEqual(1);
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it('check all rows value', () => {
    expect(wrapper.find('tr').get(1).key).toEqual('firstName');
    expect(wrapper.find('tr').get(2).key).toEqual('lastName');
    expect(wrapper.find('tr').get(3).key).toEqual('email');

    expect(
      wrapper.find('tr').findWhere(x => x.type() === 'td' && x.text() === 'Bob').length
    ).toEqual(1);

    expect(
      wrapper.find('tr').findWhere(x => x.type() === 'td' && x.text() === 'Willson').length
    ).toEqual(1);
  });
});
