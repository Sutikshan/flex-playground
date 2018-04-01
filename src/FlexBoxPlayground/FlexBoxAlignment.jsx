import React from 'react';
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBox/Customizable';

const FlexBoxAlignment = () => {
  const {
    flexFlow,
    justifyContent,
    alignItems,
    alignContent,
    height,
  } = FlexBoxConstants.FlexContainerProps;
  const { flex } = FlexBoxConstants.FlexItemsProps;

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
          flexFlow,
          alignItems,
          height,
        }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
      />
      <FlexBoxCustomizable
        heading="Align Content across Cross Axis"
        containerPropsToCustomize={{
          flexFlow,
          alignItems,
          alignContent,
          height,
        }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
        itemCount={20}
      />
      <FlexBoxCustomizable
        heading="All Together"
        containerPropsToCustomize={{
          flexFlow,
          justifyContent,
          alignItems,
          alignContent,
          height,
        }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
        itemCount={20}
      />
    </div>
  );
};

export default FlexBoxAlignment;
