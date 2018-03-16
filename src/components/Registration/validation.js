const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First Name is Required';
  } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
    errors.firstName =
      'First Name should contain only small and capital letters, no numbers & special characters';
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name is Required';
  } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
    errors.lastName =
      'Last Name should contain only small and capital letters, no numbers & special characters';
  }
  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export default validate;
