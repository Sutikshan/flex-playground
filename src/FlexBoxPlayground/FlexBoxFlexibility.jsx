import React, { Component } from "react";
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBoxCustomizable.jsx';

export default class FlexBoxFlexibility extends Component {
  render() {
    const {
      flexFlow,
    } = FlexBoxConstants.FlexContainerProps;
    const {
      flexGrow,
      flexShrink,
      flexBasis,
      flex,
    } = FlexBoxConstants.FlexItemsProps;

    return (
      <div>
        <FlexBoxCustomizable
          heading="The Flex Container"
          containerPropsToCustomize={{flexFlow}}
          itemPropsToCustomize={{flex}}
        />
      </div>
    );
  }
}
