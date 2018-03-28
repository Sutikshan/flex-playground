import React, { Component } from "react";
import PropTypes from 'prop-types';
import FlexBox from './FlexBox.jsx';
import  './Customizable.css';

export default class FlexBoxCustomizable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customContainerStyles: {},
      customItemStyles: [],
      currentItemIndex: 0,
    }

    this.onCustomStyleChange = (keyName, value) => {
      const customContainerStyles = { ...this.state.customContainerStyles };
      customContainerStyles[keyName] = value;
      this.setState({ customContainerStyles });
    };

    this.onItemStyleChange = (currentItemIndex, keyName, value) => {
      const customItemStyles = [...this.state.customItemStyles]; // TODO to fix - this is not complete new copy
      if (!customItemStyles[currentItemIndex]) {
        customItemStyles[currentItemIndex] = {};
      }
      customItemStyles[currentItemIndex][keyName] = value;
      this.setState({ customItemStyles });
    }

    this.onItemClick = (index) => {
      this.setState({ currentItemIndex: index });
    }
  }
  render() {
    const { containerPropsToCustomize, heading, itemPropsToCustomize } = this.props;
    const { currentItemIndex } = this.state;

    return (<div>
      <h4>{ heading }</h4>
      <div className="property-section">
        <div className="containe-props">
        <h4>Flex Container Props</h4>
        { Object.keys(containerPropsToCustomize).map((keyName) => {
          return (
            <div key={keyName} className="prop-key-value-pair">
              <div className="prop-key">{keyName}: </div>

              <select className="prop-value" onChange={(event) => this.onCustomStyleChange(keyName, event.target.value)}>
                { containerPropsToCustomize[keyName].map((propVal) => (<option key={propVal}>{propVal}</option>)) }
              </select>
            </div>
          )
        }) }
        </div>
        <div className="item-props">
        <h4>Flex Item Props</h4>
        {
          Object.keys(itemPropsToCustomize).map((keyName) => {
            const { customItemStyles } = this.state;
            const itemValue = (customItemStyles[currentItemIndex] && customItemStyles[currentItemIndex][keyName]) || '1 1 auto';

            return (
            <div key={keyName} className="prop-key-value-pair">
              <div className="prop-key">{keyName}{`(Item ${this.state.currentItemIndex + 1})`}: </div>
              <input
                className="prop-value"
                value={itemValue}
                onChange={(event) => this.onItemStyleChange(currentItemIndex, keyName, event.target.value)} />
            </div>
            )
          })
        }
      </div>
      </div>
      <FlexBox
        containerStyles={{ ...this.props.containerStyles, ...this.state.customContainerStyles}}
        itemStyles={{ ...this.props.itemStyles, ...this.state.customItemStyles }}
        itemPropsToDisplay={this.props.itemPropsToDisplay}
        itemCount={this.props.itemCount}
        onItemClick={this.onItemClick}
      />
    </div>)
  }
}

FlexBoxCustomizable.propTypes = {
  heading: PropTypes.string,
  containerPropsToCustomize: PropTypes.object,
  itemPropsToCustomize: PropTypes.object,
  itemPropsToDisplay: PropTypes.string,
  containerStyles: PropTypes.object,
  itemStyles: PropTypes.object,
  itemCount: PropTypes.number,
};

FlexBoxCustomizable.defaultProps = {
  heading: '',
  containerPropsToCustomize: {},
  itemPropsToCustomize: {},
  containerStyles: {},
  itemStyles: {},
  itemCount: 4,
};