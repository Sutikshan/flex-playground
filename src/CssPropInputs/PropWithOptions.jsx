import React from 'react';
import PropTypes from 'prop-types';
import { PropWithOptionsPropType } from './PropWithOptionsConstants';

const PropDropDown = ({
  keyName,
  propToCustomize,
  onChange,
  index,
  value,
  abbreviation
}) => (
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

PropDropDown.propTypes = {
  keyName: PropTypes.string.isRequired,
  propToCustomize: PropTypes.shape(PropWithOptionsPropType).isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  abbreviation: PropTypes.string.isRequired,
};

PropDropDown.defaultProps = {
  index: 0,
};

export default PropDropDown;
