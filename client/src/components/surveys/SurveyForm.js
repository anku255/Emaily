// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Survey Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'email' }
];

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
