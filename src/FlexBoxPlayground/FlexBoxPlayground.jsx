import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FlexBoxContainer from './FlexBoxContainer';
import FlexBoxFlexibility from './FlexBoxFlexibility';
import FlexBoxAlignment from './FlexBoxAlignment';

import './FlexBoxPlayground.css';

const FlexBoxPlayground = () => (
  <div className="Playground">
    <Router>
      <div>
        <header className="Playground-header">
          <h1 className="Playground-title">Flex Playground</h1>
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
            <Link
              to="/Alignment"
              className="button button-03"
              component={FlexBoxAlignment}
            >
              Alignment
            </Link>
            {/*
          <a href="#" className="button button-03">
            RealWorld
          </a> */}
          </div>
        </header>
        <Route exact path="/" component={FlexBoxContainer} />
        <Route exact path="/flex-playground" component={FlexBoxContainer} />
        <Route path="/FlexBoxContainer" component={FlexBoxContainer} />
        <Route path="/Flexibility" component={FlexBoxFlexibility} />
        <Route path="/Alignment" component={FlexBoxAlignment} />
      </div>
    </Router>
  </div>
);

export default FlexBoxPlayground;
