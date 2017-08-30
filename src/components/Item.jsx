import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  handleDoubleClick = () => {
    // console.log(this.props.key);
    this.props.handleDelete(this.props.itemKey)
  }
  render() {
    return (
      <div style={styles.container} onDoubleClick={this.handleDoubleClick}>
        {this.props.itemValue}
      </div>
    )
  }
}

Item.propTypes = {
  itemValue : PropTypes.string.isRequired,
  itemKey : PropTypes.string.isRequired,
  handleDelete : PropTypes.func.isRequired
}

export default Item;

const styles = {
  container : {
    margin : 10,
    backgroundColor : '#eee',
    padding : 5,
    cursor : 'pointer'
  }
}
