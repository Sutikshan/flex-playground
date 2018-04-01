import React from 'react';
import PropTypes from 'prop-types';
import flextStyles from './FlexBox.css';
import FlexBoxItem from './FlexBoxItem';
import { FlexItemPropTypes } from './FlexBoxTypes';

const flexItems = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];

const FlexBox = ({
  containerStyles,
  itemCount,
  itemStyles,
  itemPropsToDisplay,
  onItemClick,
}) => (
  <div style={Object.assign({}, flextStyles.flexContainer, containerStyles)}>
    {[...flexItems].splice(0, itemCount).map((item, index) => {
      const style = {};
      if (itemStyles[index]) {
        Object.keys(itemStyles[index]).forEach((key) => {
          style[key] = itemStyles[index][key].value;
        });
      }
      return (
        <FlexBoxItem
          key={item}
          onItemClick={onItemClick}
          itemIndex={index}
          itemStyle={Object.assign({}, flextStyles.flexItem(index), style)}
          itemPropsToDisplay={itemPropsToDisplay}
        />
      );
    })}
  </div>
);

FlexBox.propTypes = {
  containerStyles: PropTypes.object, // eslint-disable-line
  itemStyles: PropTypes.shape(FlexItemPropTypes),
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
