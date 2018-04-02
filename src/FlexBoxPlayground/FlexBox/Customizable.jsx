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

    this.onItemStyleChange = (currentItemIndex, key, value) => {
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
  }

  render() {
    const {
      containerPropsToCustomize,
      heading,
      itemPropsToCustomize,
    } = this.props;

    const { currentItemIndex } = this.state;

    return (
      <div className="play-area">
        <h4>{heading}</h4>
        <div className="property-section">
          <div className="containe-props">
            <h4>Container Props</h4>
            {Object.keys(containerPropsToCustomize).map((keyName) => (
              <div key={keyName} className="prop-key-value-pair">
                <div className="prop-key">
                  {containerPropsToCustomize[keyName].label}:{' '}
                </div>

                <select
                  className="prop-value"
                  onChange={(event) =>
                    this.onCustomStyleChange(keyName, event.target.value)
                  }
                >
                  {containerPropsToCustomize[keyName].options.map((propVal) => (
                    <option key={propVal}>{propVal}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="item-props">
            <h4>Item Props</h4>
            {Object.keys(itemPropsToCustomize).map((keyName) => {
              const { customItemStyles } = this.state;
              const itemValue =
                customItemStyles[currentItemIndex] &&
                customItemStyles[currentItemIndex][keyName].value;
              const itemDesc =
                customItemStyles[currentItemIndex] &&
                customItemStyles[currentItemIndex][keyName].label;

              return (
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
                          currentItemIndex,
                          keyName,
                          event.target.value
                        )
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <FlexBox
          containerStyles={this.state.customContainerStyles}
          itemStyles={this.state.customItemStyles}
          itemPropsToDisplay={this.props.itemPropsToDisplay}
          itemCount={this.props.itemCount}
          onItemClick={this.onItemClick}
        />
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
  itemPropsToCustomize: {},
  itemCount: 4,
};
