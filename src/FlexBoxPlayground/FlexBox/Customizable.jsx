import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexBox from './FlexBox';
import { FlexContainerPropTypes, FlexItemPropTypes } from '../FlexBoxConstants';
import './Customizable.css';

export default class FlexBoxCustomizable extends Component {
  constructor(props) {
    super(props);

    let count = 0;
    const customItemStyles = [];

    for (; count < props.itemCount; count += 1) {
      customItemStyles.push({ ...props.itemPropsToCustomize });
    }

    this.state = {
      customItemStyles,
      customContainerStyles: {},
      currentItemIndex: 0,
    };

    this.onCustomStyleChange = (keyName, value) => {
      const customContainerStyles = { ...this.state.customContainerStyles };
      customContainerStyles[keyName] = value;
      this.setState({ customContainerStyles });
    };

    this.onItemStyleChange = (key, value, currentItemIndex) => {
      const customItemStylesArray = [...this.state.customItemStyles];
      customItemStylesArray[currentItemIndex] = {
        ...customItemStylesArray[currentItemIndex],
      };
      customItemStylesArray[currentItemIndex][key] = {
        ...customItemStylesArray[currentItemIndex][key],
      };

      customItemStylesArray[currentItemIndex][key].value = value;
      this.setState({ customItemStyles: customItemStylesArray });
    };

    this.onItemClick = (index) => {
      this.setState({ currentItemIndex: index });
    };

    this.renderPropDropDown = (
      keyName,
      propToCustomize,
      onChange,
      index,
      value
    ) => (
      <div key={keyName} className="prop-key-value-pair">
        <div className="prop-key">{propToCustomize.label}: </div>

        <select
          className="prop-value"
          onChange={(event) => onChange(keyName, event.target.value, index)}
        >
          {propToCustomize.options.map((propVal) => (
            <option key={propVal} selected={propVal === value}>
              {propVal}
            </option>
          ))}
        </select>
      </div>
    );

    this.renderInputBox = (keyName, itemDesc, itemValue, currentItemIndex) => (
      <div key={keyName} className="prop-key-value-pair">
        <div className="prop-key">
          {keyName}
          {`(Item ${this.state.currentItemIndex})`}:{' '}
        </div>
        <div className="prop-value">
          <span>{itemDesc}</span>
          <input
            className="prop-value"
            value={itemValue}
            onChange={(event) =>
              this.onItemStyleChange(
                keyName,
                event.target.value,
                currentItemIndex
              )
            }
          />
        </div>
      </div>
    );
  }

  render() {
    const {
      containerPropsToCustomize,
      heading,
      itemPropsToCustomize,
    } = this.props;

    return (
      <div className="play-area">
        <h4>{heading}</h4>
        <div className="property-section">
          <div className="containe-props">
            <code>
              {Object.keys(containerPropsToCustomize).map((keyName) =>
                this.renderPropDropDown(
                  keyName,
                  containerPropsToCustomize[keyName],
                  this.onCustomStyleChange
                )
              )}
            </code>
          </div>
          { itemPropsToCustomize ?
            (<div className="item-props">
              <code>
                {Object.keys(itemPropsToCustomize).map((keyName) => {
                  const { customItemStyles, currentItemIndex } = this.state;
                  const currentItemStyle = customItemStyles[currentItemIndex];
                  const itemValue =
                    currentItemStyle && currentItemStyle[keyName].value;
                  const itemDesc =
                    currentItemStyle && currentItemStyle[keyName].label;

                  return currentItemStyle[keyName].options
                    ? this.renderPropDropDown(
                        keyName,
                        currentItemStyle[keyName],
                        this.onItemStyleChange,
                        currentItemIndex,
                        itemValue
                      )
                    : this.renderInputBox(
                        keyName,
                        itemDesc,
                        itemValue,
                        currentItemIndex
                      );
                })}
              </code>
             </div>) : null // eslint-disable-line
            }
        </div>
        <div className="flex-box">
          <FlexBox
            containerStyles={this.state.customContainerStyles}
            itemStyles={this.state.customItemStyles}
            itemPropsToDisplay={this.props.itemPropsToDisplay}
            itemCount={this.props.itemCount}
            onItemClick={this.onItemClick}
          />
        </div>
      </div>
    );
  }
}

FlexBoxCustomizable.propTypes = {
  heading: PropTypes.string,
  containerPropsToCustomize: PropTypes.shape(FlexContainerPropTypes),
  itemPropsToCustomize: PropTypes.shape(FlexItemPropTypes),
  itemPropsToDisplay: PropTypes.arrayOf(PropTypes.string),
  itemCount: PropTypes.number,
};

FlexBoxCustomizable.defaultProps = {
  heading: '',
  containerPropsToCustomize: {},
  itemPropsToDisplay: [],
  itemPropsToCustomize: null,
  itemCount: 4,
};
