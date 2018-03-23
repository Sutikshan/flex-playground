import React, { Component } from "react";
import PropTypes from 'prop-types';
import flextStyles from "./FlexBox.css.js";
import FlexBoxItem from './FlexBoxItem';

const flexItems = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];

export default class FlexBox extends Component {
  render() {
    return (
      <div
      style={Object.assign({}, flextStyles.flexContainer, this.props.containerStyles)}>
        {[...flexItems].splice(0, this.props.itemCount).map((item, index) => {
          return (
            <FlexBoxItem
              onItemClick={this.props.onItemClick}
              itemIndex={index}
              itemStyle={Object.assign({}, flextStyles.flexItem(index), this.props.itemStyles[index])} />
          );
        })}
      </div>
    );
  }
}

FlexBox.propTypes = {
  containerStyles: PropTypes.object,
  itemStyles: PropTypes.object,
  itemCount: PropTypes.number,
  onItemClick: PropTypes.func.isRequired,
};

FlexBox.defaultProps = {
  containerStyles: {},
  itemStyles: {},
  itemCount: 3,
};