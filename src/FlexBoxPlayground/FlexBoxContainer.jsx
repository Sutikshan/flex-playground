import React, { Component } from "react";
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBox';

export default class FlexBoxContainer extends Component {
  render() {
    const {
      display,
      flexDirection,
      flexWrap,
      flexFlow,
    } = FlexBoxConstants.FlexContainerProps;
    return (
      <div>
        <FlexBoxCustomizable
          heading="The Flex Container"
          containerPropsToCustomize={{display}}
        />
        <FlexBoxCustomizable
          heading="Flex Flow Direction: flex-direction"
          containerPropsToCustomize={{display, flexDirection}}
        />
        <FlexBoxCustomizable
          heading="Flex Line Wrapping: flex-wrap"
          containerPropsToCustomize={{display, flexDirection, flexWrap}}
          containerStyles={{width: "15%", height: "30em" }}
          itemCount={9}
        />
        <FlexBoxCustomizable
          heading="Flex Direction + Line Wrapping: flex-flow"
          containerPropsToCustomize={{display, flexFlow}}
          containerStyles={{width: "15%", height: "30em" }}
          itemCount={9}
        />
      </div>
    );
  }
}
