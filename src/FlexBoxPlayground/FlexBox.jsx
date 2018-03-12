import React, { Component } from "react";
import PropTypes from 'prop-types';
import flextStyles from "./FlexBox.css.js";

const flexItems = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

export default class FlexBox extends Component {
  render() {
    return (
      <div
      style={Object.assign({}, flextStyles.flexContainer, this.props.containerStyles)}>
        {[...flexItems].splice(0, this.props.itemCount).map((item, index) => {
          return (
            <div
              key={index}
              style={
                Object.assign({}, flextStyles.flexItem(index), this.props.itemStyles)}
            >
              <em>Flex Item</em>
              <strong style={flextStyles.flex_item_strong}>{item}</strong>
            </div>
          );
        })}
      </div>
    );
  }
}

FlexBox.propTypes = {
  containerStyles: PropTypes.object,
  itemStyles: PropTypes.object,
  itemCount: PropTypes.Number,
};

FlexBox.defaultProps = {
  containerStyles: {},
  itemStyles: {},
  itemCount: 3,
};