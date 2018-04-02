import React from 'react';
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBox/Customizable';

const FlexBoxAlignment = () => {
  const {
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    width: containerWidth,
    height: containerHeight,
  } = FlexBoxConstants.FlexContainerProps;
  const { flex, width, height } = FlexBoxConstants.FlexItemsProps;

  return (
    <div>
      <FlexBoxCustomizable
        heading="Justify Contents along Main Axis"
        containerPropsToCustomize={{ flexFlow, justifyContent }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
      />
      <FlexBoxCustomizable
        heading="Align Items across Cross Axis"
        containerPropsToCustomize={{
          alignItems,
          height: containerHeight,
        }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
      />
      <FlexBoxCustomizable
        heading="Align Content across Cross Axis"
        containerPropsToCustomize={{
          alignContent,
          height: containerHeight,
        }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
        itemCount={9}
      />
      <FlexBoxCustomizable
        heading="All Together"
        containerPropsToCustomize={{
          flexFlow,
          justifyContent,
          alignItems,
          alignContent,
          width: containerWidth,
          height: containerHeight,
        }}
        itemPropsToCustomize={{ flex, width, height }}
        itemPropsToDisplay={['flex']}
        itemCount={9}
      />
    </div>
  );
};

export default FlexBoxAlignment;
