import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FlexBoxContainer from './FlexBoxContainer';
import FlexBoxFlexibility from './FlexBoxFlexibility';
import FlexBoxAlignment from './FlexBoxAlignment';
import './FlexBoxPlayground.css';

const BASE_PATH = 'flex-playground';

const FlexBoxPlayground = () => (
  <div className="Playground">
    <Router>
      <div>
        <header className="Playground-header">
          <h1 className="Playground-title">Flex Playground</h1>
          <div className="Menu-bar">
            <Link
              to={`/${BASE_PATH}/FlexBoxContainer`}
              component={FlexBoxContainer}
              className="button button-01"
            >
              Flow
            </Link>
            <Link
              to={`/${BASE_PATH}/Flexibility`}
              component={FlexBoxFlexibility}
              className="button button-02"
            >
              Flexibility
            </Link>
            <Link
              to={`/${BASE_PATH}/Alignment`}
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
        <Route exact path={`/${BASE_PATH}`} component={FlexBoxContainer} />
        <Route
          path={`/${BASE_PATH}/FlexBoxContainer`}
          component={FlexBoxContainer}
        />
        <Route
          path={`/${BASE_PATH}/Flexibility`}
          component={FlexBoxFlexibility}
        />
        <Route path={`/${BASE_PATH}/Alignment`} component={FlexBoxAlignment} />
        <Route
          path={`/${BASE_PATH}/Alltogether`}
          component={FlexBoxAlignment}
        />
      </div>
    </Router>
  </div>
);

export default FlexBoxPlayground;
