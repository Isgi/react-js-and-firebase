import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const node = this.refs.formInput;
    const valueInput = node.value;
    this.props.handleSubmit(valueInput);
    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref='formInput' style={styles.formInput} />
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit : PropTypes.func.isRequired
}

export default Form;

const styles = {
  formInput : {
    width : 300,
    height : 30,
    margin : 10,
    fontSize : 18
  }
}
