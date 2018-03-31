import React, { Component } from "react";
import FlexBoxConstants from "./FlexBoxConstants";
import FlexBoxCustomizable from "./FlexBox";

export default class FlexBoxFlexibility extends Component {
  render() {
    const { flexFlow } = FlexBoxConstants.FlexContainerProps;
    const { flex } = FlexBoxConstants.FlexItemsProps;
    return (
      <div>
        <FlexBoxCustomizable
          heading="The Flex Items"
          containerPropsToCustomize={{ flexFlow }}
          itemPropsToCustomize={{ flex }}
          itemPropsToDisplay={["flex"]}
        />
      </div>
    );
  }
}
