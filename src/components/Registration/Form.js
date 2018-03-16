import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputField from '../InputField';
import validate from './validation';
import asyncValidate from './asyncValidation';

const Form = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <Field
        name="firstName"
        component={InputField}
        type="text"
        placeholder="First Name"
        label="First Name"
      />
      <Field
        name="lastName"
        component={InputField}
        type="text"
        placeholder="Last Name"
        label="Last Name"
      />
      <Field
        name="email"
        component={InputField}
        type="text"
        placeholder="email@example.com"
        label="Email"
      />
      <Field name="iban" component={InputField} type="text" placeholder="IBAN" label="IBAN" />
      <div className="row justify-content-end mt-2">
        <div className="col-3">
          <button className="btn btn-warning font-weight-bold" type="submit" disabled={submitting}>
            Submit!
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'registration',
  validate,
  asyncValidate,
  asyncBlurFields: ['iban']
})(Form);
