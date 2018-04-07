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

  const { order } = FlexBoxConstants.FlexItemsProps;

  return (
    <div>
      <FlexBoxCustomizable
        heading="The Container"
        containerPropsToCustomize={{ display }}
      />
      <FlexBoxCustomizable
        heading="Direction & Order"
        containerPropsToCustomize={{ display, flexDirection }}
        itemPropsToCustomize={{ order }}
        itemPropsToDisplay={['order']}
      />
      <FlexBoxCustomizable
        heading="Wrapping:"
        containerPropsToCustomize={{ display, flexDirection, flexWrap }}
        itemCount={9}
      />
      <FlexBoxCustomizable
        heading="flex-flow = Direction + Wrapping"
        containerPropsToCustomize={{ display, flexFlow }}
        itemCount={9}
      />
    </div>
  );
};

export default FlexBoxContainer;
