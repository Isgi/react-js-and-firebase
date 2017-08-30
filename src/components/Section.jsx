import React, { Component } from 'react';
import firebase from 'firebase';

import Form from './Form.jsx';
import List from './List.jsx';

var config = {
  apiKey: "AIzaSyBfb0sZ2S1JkK8dADVUzWUrk9QZpxrBgHQ",
  authDomain: "try-react-and-firebase.firebaseapp.com",
  databaseURL: "https://try-react-and-firebase.firebaseio.com",
  projectId: "try-react-and-firebase",
  storageBucket: "",
  messagingSenderId: "915006152949"
};
firebase.initializeApp(config);
const database = firebase.database();

class Section extends Component {
  constructor() {
    super();
    this.state = {
      items : []
    }
    this.refDatabase = database.ref().child('items');
  }
  componentDidMount() {
    this.refDatabase.on('child_added', snapshot => {
      this.state.items.push({
        key : snapshot.key,
        value : snapshot.val()
      });
      this.setState({items : this.state.items})
    })
    this.refDatabase.on('child_removed', snapshot => {
      const newItems = this.state.items.filter(item => item.key != snapshot.key)
      this.setState({items : newItems})
    })
  }
  handleSubmit = (value) => {
    const keyItem = this.refDatabase.push().key;
    this.refDatabase.child(keyItem).set(value).then(res => {
      console.log("success added");
    }).catch(err => {
      console.log(err);
    })
  }
  handleDelete = (keyItem) => {
    this.refDatabase.child(keyItem).remove()
  }
  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}/>
        <List items={this.state.items} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default Section;
