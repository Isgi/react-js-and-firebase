import React, { Component } from 'react';

import logoReact from './logo-react.svg';
import logoFirebase from './logo-firebase.svg';
import './App.css';
import Section from './components/Section.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoReact} className="App-logo" alt="logo" />
          <img src={logoFirebase} style={{height:70}} alt="logo" />
          <h2>Welcome to React App and Firebase Database Realtime </h2>
        </div>
        <div>
          <Section />
        </div>
      </div>
    );
  }
}

export default App;
