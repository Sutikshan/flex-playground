import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlexBoxPlayground from "./FlexBoxPlayground";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlexBoxPlayground />        
      </div>
    );
  }
}

export default App;
