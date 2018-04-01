import React from 'react';
import FlexBoxConstants from './FlexBoxConstants';
import FlexBoxCustomizable from './FlexBox/Customizable';

const FlexBoxFlexibility = () => {
  const { flexFlow } = FlexBoxConstants.FlexContainerProps;
  const { flex } = FlexBoxConstants.FlexItemsProps;
  return (
    <div>
      <FlexBoxCustomizable
        heading="The Flex Items"
        containerPropsToCustomize={{ flexFlow }}
        itemPropsToCustomize={{ flex }}
        itemPropsToDisplay={['flex']}
      />
    </div>
  );
};

export default FlexBoxFlexibility;
