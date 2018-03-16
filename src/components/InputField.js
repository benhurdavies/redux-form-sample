import React from 'react';

import './InputField.css';

const InputField = ({
  input,
  label,
  type,
  placeholder,
  meta: { asyncValidating, touched, error, warning }
}) => (
  <div>
    <label className="font-weight-bold">{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={placeholder} className="form-control" />
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default InputField;
