import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Registration/Form';
import ShowFields from '../components/ShowFields';
import { showAlert } from '../store/Alert/action';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.dispatch(showAlert('Congratz! All data is valid.', 'success'));
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6 card-body table-responsive">
          <h1 className="card-title text-center">Register account</h1>
          <Form onSubmit={this.handleSubmit} />
          <ShowFields
            fields={this.props.fields}
            values={this.props.values}
            nameMap={{
              firstName: 'First Name',
              lastName: 'Last Name',
              email: 'Email',
              iban: 'IBAN'
            }}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fields: state.form.registration ? Object.keys(state.form.registration.registeredFields) : [],
    values: state.form.registration ? state.form.registration.values : state.form.registration
  };
}

export default connect(mapStateToProps)(Registration);
