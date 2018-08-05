import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import { Usage } from './version1';
// import { Usage } from './version2';
// import { Usage } from './version3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Usage />
      </div>
    );
  }
}

export default App;
