import axios from 'axios';

const ibanValidateUrl = process.env.REACT_APP_SERVER_URL;

const asyncValidate = async values => {
  if (!values.iban) {
    return Promise.resolve({ iban: 'IBAN should be a valid' });
  }
  return axios
    .post(ibanValidateUrl, { iban: values.iban })
    .then(res => {
      if (!res.data.valid) {
        return Promise.resolve({ iban: 'Incorrect iban entered' });
      }
    })
    .catch(err => {
      if (err.response.data.message) return Promise.resolve({ iban: err.response.data.message });
      return Promise.resolve({
        iban: 'Something went wrong. Please, try again'
      });
    });
};

export default asyncValidate;
