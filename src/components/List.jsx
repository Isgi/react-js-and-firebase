import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item.jsx';

class List extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.items.map((item, key) => {
          return (
          <Item itemValue={item.value} key={item.key} itemKey={item.key} handleDelete={this.props.handleDelete}/>
        )})}
      </div>
    )
  }
}

List.propTypes = {
  items : PropTypes.array.isRequired,
  handleDelete : PropTypes.func.isRequired
}

export default List;

const styles = {
  container : {
    display : 'inline-block',
    width : 300,
    height : 500,
    border : '1px solid #eee',
    overflow : 'scroll'
  }
}
