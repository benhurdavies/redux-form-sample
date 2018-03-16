import asyncValidate from './asyncValidation';

describe('Registration : Form asyncValidation', () => {
  it('IBAN invalid case', async () => {
    expect(await asyncValidate({})).toEqual({
      iban: 'IBAN should be a valid'
    });
  });
});
