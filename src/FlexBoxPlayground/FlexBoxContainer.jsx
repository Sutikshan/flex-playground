import React from 'react';
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBox/Customizable';

const FlexBoxContainer = () => {
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
        containerPropsToCustomize={{ display }}
      />
      <FlexBoxCustomizable
        heading="Flex Flow Direction: flex-direction"
        containerPropsToCustomize={{ display, flexDirection }}
      />
      <FlexBoxCustomizable
        heading="Flex Line Wrapping: flex-wrap"
        containerPropsToCustomize={{ display, flexDirection, flexWrap }}
        itemCount={9}
      />
      <FlexBoxCustomizable
        heading="Flex Direction + Line Wrapping: flex-flow"
        containerPropsToCustomize={{ display, flexFlow }}
        itemCount={9}
      />
    </div>
  );
};

export default FlexBoxContainer;
