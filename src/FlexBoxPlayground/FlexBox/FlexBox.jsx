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
        {
          [...flexItems].splice(0, this.props.itemCount).map((item, index) => {
            let style = {};

            Object.keys(this.props.itemStyles[index]).forEach(key => {
              style[key] = this.props.itemStyles[index][key].value;
            });        

            return (
              <FlexBoxItem
                key={index}
                onItemClick={this.props.onItemClick}
                itemIndex={index}
                itemStyle={Object.assign({}, flextStyles.flexItem(index), style)}
                itemPropsToDisplay={this.props.itemPropsToDisplay}
                />
            );
          })}
      </div>
    );
  }
}

FlexBox.propTypes = {
  containerStyles: PropTypes.object,
  itemStyles: PropTypes.object,
  itemPropsToDisplay: PropTypes.arrayOf(PropTypes.string),
  itemCount: PropTypes.number,
  onItemClick: PropTypes.func.isRequired,
};

FlexBox.defaultProps = {
  containerStyles: {},
  itemStyles: {},
  itemCount: 3,
};