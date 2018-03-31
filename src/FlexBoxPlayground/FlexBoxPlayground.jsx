import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlexBoxContainer from "./FlexBoxContainer";
import FlexBoxFlexibility from "./FlexBoxFlexibility";
import "./FlexBoxPlayground.css";

class FlexBoxPlayground extends Component {
  render() {
    return (
      <div className="Playground">
        <Router>
          <div>
            <header className="Playground-header">
              <h1 className="Playground-title">Welcome to Flex Playground</h1>
              <div className="Menu-bar">
                <Link
                  to="/FlexBoxContainer"
                  component={FlexBoxContainer}
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
                {/* <a href="#" className="button button-03">
                  Alignment
                </a>
                <a href="#" className="button button-03">
                  RealWorld
                </a> */}
              </div>
            </header>
            <p className="Playground-intro">Please edit flex-box properties to see the effects.</p>
            <Route exact path="/" component={FlexBoxContainer} />
            <Route path="/FlexBoxContainer" component={FlexBoxContainer} />
            <Route path="/Flexibility" component={FlexBoxFlexibility} />
          </div>

        </Router>
        
      </div>
    );
  }
}

export default FlexBoxPlayground;
