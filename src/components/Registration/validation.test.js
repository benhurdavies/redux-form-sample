import validation from './validation';

describe('Registration : Form validation', () => {
  it('handles success case', () => {
    const values = {
      firstName: 'Benhur',
      lastName: 'Davies',
      email: 'example@example.com'
    };
    expect(validation(values)).toEqual({});
  });

  it('handles required case', () => {
    const values = {
      firstName: '',
      lastName: '',
      email: ''
    };
    expect(validation(values)).toEqual({
      firstName: 'First Name is Required',
      lastName: 'Last Name is Required',
      email: 'Email is Required'
    });
  });

  it('handles Invalid email', () => {
    const values = {
      firstName: 'Benhur',
      lastName: 'Davies',
      email: 'email'
    };
    expect(validation(values)).toEqual({
      email: 'Invalid email address'
    });
  });

  it('handles numbers & special characters in name', () => {
    const values = {
      firstName: 'Benhur245',
      lastName: 'Davies -=',
      email: 'example@example.com'
    };
    expect(validation(values)).toEqual({
      firstName:
        'First Name should contain only small and capital letters, no numbers & special characters',
      lastName:
        'Last Name should contain only small and capital letters, no numbers & special characters'
    });
  });
});
