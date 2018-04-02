import React from 'react';
import PropTypes from 'prop-types';
import flextStyles from './FlexBox.css';
import FlexBoxItem from './FlexBoxItem';
import { FlexItemPropTypes } from '../FlexBoxConstants';

const getStylesForItem = (customisedItemStyle) => {
  const style = {};

  if (customisedItemStyle) {
    Object.keys(customisedItemStyle).forEach((key) => {
      style[key] = customisedItemStyle[key].value;
    });
  }
  return style;
};

const FlexBox = ({
  containerStyles,
  itemCount,
  itemStyles,
  itemPropsToDisplay,
  onItemClick,
}) => {
  const flexBoxItems = [];
  let n = 0;
  while (n < itemCount) {
    const index = `0${n}`;
    const style = getStylesForItem(itemStyles[n]);

    flexBoxItems.push(
      <FlexBoxItem
        key={index}
        onItemClick={onItemClick}
        itemIndex={n}
        itemStyle={Object.assign({}, flextStyles.getDefaultStyle(n), style)}
        itemPropsToDisplay={itemPropsToDisplay}
      />
    );
    n += 1;
  }

  return (
    <div style={Object.assign({}, flextStyles.flexContainer, containerStyles)}>
      {flexBoxItems}
    </div>
  );
};

FlexBox.propTypes = {
  containerStyles: PropTypes.object, // eslint-disable-line
  itemStyles: PropTypes.arrayOf(PropTypes.shape(FlexItemPropTypes)),
  itemPropsToDisplay: PropTypes.arrayOf(PropTypes.string),
  itemCount: PropTypes.number,
  onItemClick: PropTypes.func.isRequired,
};

FlexBox.defaultProps = {
  itemPropsToDisplay: [],
  containerStyles: {},
  itemStyles: {},
  itemCount: 3,
};

export default FlexBox;
