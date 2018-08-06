import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexBox from './FlexBox';
import FlexBoxConstants from '../FlexBoxConstants';
import PropDropDown from '../../CssPropInputs/PropWithOptions';
import PropInput from '../../CssPropInputs/PropInput';

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
                (<PropDropDown
                  keyName={keyName}
                  propToCustomize={allContainerPropsToCustomize[keyName]}
                  onChange={this.onCustomStyleChange}
                  value={this.state.customContainerStyles[keyName] ||
                    allContainerPropsToCustomize[keyName].value}
                  abbreviation={allContainerPropsToCustomize[keyName].abbreviation}
                />))}
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
                    ? <PropDropDown
                      keyName={keyName}
                      propToCustomize={currentItemStyle[keyName]}
                      onChange={this.onItemStyleChange}
                      value={itemValue}
                      index={currentItemIndex}
                    />
                    : <PropInput
                      keyName={keyName}
                      abbreviation={abbreviation}
                      value={itemValue}
                      index={currentItemIndex}
                    />;
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
