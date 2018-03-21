import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlexBoxPlayground from "./FlexBoxPlayground";
import FlexBoxFlexibility from "./FlexBoxPlayground/FlexBoxFlexibility";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <h1 className="App-title">Welcome to Flex Playground</h1>
              <div className="Menu-bar">
                <Link
                  to="/FlexBoxPlayground"
                  component={FlexBoxPlayground}
                  className="button button-01"
                >
                  FlexContainer
                </Link>
                <Link
                  to="/Flexibility"
                  component={FlexBoxFlexibility}
                  className="button button-02"
                >
                  Flexibility
                </Link>
                <a href="#" className="button button-03">
                  Alignment
                </a>
                <a href="#" className="button button-03">
                  RealWorld
                </a>
              </div>
            </header>
            <Route exact path="/" component={FlexBoxPlayground} />
            <Route path="/FlexBoxPlayground" component={FlexBoxPlayground} />
            <Route path="/Flexibility" component={FlexBoxFlexibility} />
          </div>
        </Router>
        <p className="App-intro">Please edit flex-box properties to see the effects.</p>
      </div>
    );
  }
}

export default App;
