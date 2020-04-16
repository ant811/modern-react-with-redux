import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }
  
  renderInput = ({ input, label, meta }) => { 
    // console.log('meta:', meta)
    // console.log('formProps:', formProps)
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    // console.log('className? ', className)
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
      // even shorter syntax above
      // <input {...formProps.input} />
      // shortened syntax above
      // <input 
      //   onChange={formProps.input.onChange} 
      //   value={formProps.input.value}
      // />
    )
  }
  
  onSubmit(formValues) {
    console.log('onSubmit formValues:', formValues)
  }

  render() {
    // check out all of the props received from reduxForm!
    // console.log('props of StreamCreate: ', this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please provide a title.';
  }

  if (!formValues.description) {
    errors.description = 'Please provide a description.';
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);