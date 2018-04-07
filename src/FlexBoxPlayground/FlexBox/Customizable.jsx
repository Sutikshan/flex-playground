import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexBox from './FlexBox';
import FlexBoxConstants from '../FlexBoxConstants';
import './Customizable.css';

export default class FlexBoxCustomizable extends Component {
  constructor(props) {
    super(props);

    let count = 0;
    const customItemStyles = [];

    for (; count < props.itemCount; count += 1) {
      customItemStyles.push({
        ...props.itemPropsToCustomize,
        ...FlexBoxConstants.DefaultItemProps,
      });
    }

    this.state = {
      customItemStyles,
      customContainerStyles: {},
      currentItemIndex: 0,
      itemCount: props.itemCount,
    };

    this.onItemCountChange = (event) => {
      this.setState({ itemCount: parseInt(event.target.value, 10) });
    };

    this.onCustomStyleChange = (keyName, value) => {
      const customContainerStyles = { ...this.state.customContainerStyles };
      customContainerStyles[keyName] = value;
      this.setState({ customContainerStyles });
    };

    this.onItemStyleChange = (key, value, currentItemIndex) => {
      let startIndex = currentItemIndex;
      let endIndex = currentItemIndex + 1;
      const customItemStylesArray = [...this.state.customItemStyles];
      if (customItemStylesArray[currentItemIndex][key].appliesToAll) {
        startIndex = 0;
        endIndex = customItemStylesArray.length;
      }
      for (let i = startIndex; i < endIndex; i += 1) {
        customItemStylesArray[i] = {
          ...customItemStylesArray[i],
        };

        customItemStylesArray[i][key] = {
          ...customItemStylesArray[i][key],
        };

        customItemStylesArray[i][key].value = value;
      }
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
      value,
      abbreviation
    ) => (
      <div key={keyName} className="prop-key-value-pair">
        <div className="prop-key">{propToCustomize.label}: </div>
        <div className="prop-value">
          <div>{abbreviation}</div>
          <select
            className="prop-value"
            onChange={(event) => onChange(keyName, event.target.value, index)}
            value={value}
          >
            {propToCustomize.options.map((propVal) => (
              <option key={propVal}>{propVal}</option>
            ))}
          </select>
        </div>
      </div>
    );

    this.renderInputBox = (
      keyName,
      abbreviation,
      itemValue,
      currentItemIndex
    ) => (
      <div key={keyName} className="prop-key-value-pair">
        <div className="prop-key">
          {keyName}
          {`(Item ${this.state.currentItemIndex})`}:{' '}
        </div>
        <div className="prop-value">
          <div>{abbreviation}</div>
          <input
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

    const allContainerPropsToCustomize = {
      width: FlexBoxConstants.FlexContainerProps.width,
      height: FlexBoxConstants.FlexContainerProps.height,
      ...containerPropsToCustomize,
    };

    const allItemPropsToCustomize = {
      width: FlexBoxConstants.FlexItemsProps.width,
      height: FlexBoxConstants.FlexItemsProps.height,
      ...itemPropsToCustomize,
    };

    return (
      <div className="play-area">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>{heading}</h4>
          <h4>
            Item Count{' '}
            <input
              type="number"
              value={this.state.itemCount}
              onChange={this.onItemCountChange}
            />
          </h4>
        </div>
        <div className="property-section">
          <div className="containe-props">
            <code>
              {Object.keys(allContainerPropsToCustomize).map((keyName) =>
                this.renderPropDropDown(
                  keyName,
                  allContainerPropsToCustomize[keyName],
                  this.onCustomStyleChange,
                  0,
                  allContainerPropsToCustomize[keyName].value,
                  allContainerPropsToCustomize[keyName].abbreviation
                )
              )}
            </code>
          </div>
          {allItemPropsToCustomize ? (
            <div className="item-props">
              <code>
                {Object.keys(allItemPropsToCustomize).map((keyName) => {
                  const { customItemStyles, currentItemIndex } = this.state;
                  const currentItemStyle = customItemStyles[currentItemIndex];
                  const itemValue =
                    currentItemStyle && currentItemStyle[keyName].value;
                  const abbreviation =
                    currentItemStyle && currentItemStyle[keyName].abbreviation;

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
                        abbreviation,
                        itemValue,
                        currentItemIndex
                      );
                })}
              </code>
            </div>
          ) : null // eslint-disable-line
          }
        </div>
        <div className="flex-box">
          <FlexBox
            containerStyles={this.state.customContainerStyles}
            itemStyles={this.state.customItemStyles}
            itemPropsToDisplay={this.props.itemPropsToDisplay}
            itemCount={this.state.itemCount}
            onItemClick={this.onItemClick}
          />
        </div>
      </div>
    );
  }
}

FlexBoxCustomizable.propTypes = {
  heading: PropTypes.string,
  containerPropsToCustomize: PropTypes.shape(
    FlexBoxConstants.FlexContainerPropTypes
  ),
  itemPropsToCustomize: PropTypes.shape(FlexBoxConstants.FlexItemPropTypes),
  itemPropsToDisplay: PropTypes.arrayOf(PropTypes.string),
  itemCount: PropTypes.number,
};

FlexBoxCustomizable.defaultProps = {
  heading: '',
  containerPropsToCustomize: {},
  itemPropsToDisplay: [],
  itemPropsToCustomize: {},
  itemCount: 4,
};
