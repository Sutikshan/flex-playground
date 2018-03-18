import React, { Component } from 'react';
import FlexBox from './FlexBoxPlayground';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Flex Playground</h1>
          <div className="Menu-bar">
            <a href="#" className="button button-01">
              FlexContainer
            </a>
            <a href="#" className="button button-02">
              Flexibility
            </a>
            <a href="#" className="button button-03">
              Alignment
            </a>
            <a href="#" className="button button-03">
              RealWorld
            </a>
          </div>
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
