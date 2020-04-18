import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {  
  onSubmit = (formValues) => {
    //console.log('onSubmit formValues:', formValues)
    this.props.createStream(formValues);
  }

  render() {
    // check out all of the props received from reduxForm!
    // console.log('props of StreamCreate: ', this.props)
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { createStream })(StreamCreate);