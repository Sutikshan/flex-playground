import React, { Component } from "react";
import PropTypes from 'prop-types';
import flextStyles from "./FlexBox.css.js";

export default class FlexBoxItem extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = () => props.onItemClick(props.itemIndex);
  }

  render() {
    const { itemIndex } = this.props;
    return (<div
      key={itemIndex}
      style={this.props.itemStyle}
      onClick={this.onItemClick}
    >
      <em>Flex Item</em>
      <strong style={flextStyles.flex_item_strong}>{itemIndex}</strong>
      <div>{this.props.itemPropsToDisplay}</div>
    </div>);
  }
}

FlexBoxItem.propTypes = {
  itemStyle: PropTypes.object,
  itemPropsToDisplay: PropTypes.string,
  flexStyle: PropTypes.object,
  itemIndex: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

FlexBoxItem.defaultProps = {
  itemStyles: {},
};