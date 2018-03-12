import React, { Component } from 'react';
import FlexBox from './FlexBoxPlayground';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flex Playground</h1>
        </header>
        <p className="App-intro">
          Please edit flex-box properties to see the effects.
        </p>
        <FlexBox />
      </div>
    );
  }
}

export default App;
