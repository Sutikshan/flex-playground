import React, { Component } from "react";
import PropTypes from 'prop-types';
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBoxCustomizable.jsx';

export default class FlexBoxPlayground extends Component {
  render() {
    return (
      <FlexBoxCustomizable
        heading="The Flex Container"
        containerPropsToCustomize={FlexBoxConstants.FlexContainerProps}
       />
    );
  }
}
