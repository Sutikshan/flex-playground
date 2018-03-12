import React, { Component } from "react";
import PropTypes from 'prop-types';
import FlexBox from './FlexBox.jsx';

export default class FlexBoxCustomizable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customContainerStyles: {},
    }

    this.onCustomStyleChange = (keyName, value) => {
      const customContainerStyles = { ...this.state.customContainerStyles };
      customContainerStyles[keyName] = value;
      this.setState({ customContainerStyles });
    };
  }
  render() {
    const { containerPropsToCustomize, heading } = this.props;
    return (<div>
      <h4>{ heading }</h4>
      { Object.keys(containerPropsToCustomize).map((keyName) => {
        return (
          <div>
            <div>{keyName}: </div>
            <select onChange={(event) => this.onCustomStyleChange(keyName, event.target.value)}>
              { containerPropsToCustomize[keyName].map((propVal) => (<option>{propVal}</option>)) }
            </select>
          </div>
        )
      }) }
      <FlexBox
        containerStyles={{...this.props.containerStyles, ...this.state.customContainerStyles}}
        itemStyles={this.props.itemStyles}
        itemCount={this.props.itemCount}
      />
    </div>)
  }
}

FlexBoxCustomizable.propTypes = {
  heading: PropTypes.string,
  containerPropsToCustomize: PropTypes.object,
  itemPropsToCustomize: PropTypes.object,
  containerStyles: PropTypes.object,
  itemStyles: PropTypes.object,
  itemCount: PropTypes.Number,
};

FlexBoxCustomizable.defaultProps = {
  heading: '',
  containerPropsToCustomize: {},
  itemPropsToCustomize: {},
  containerStyles: {},
  itemStyles: {},
  itemCount: 3,
};