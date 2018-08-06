import React from 'react';
import PropTypes from 'prop-types';

const PropInput = ({
  keyName,
  abbreviation,
  value,
  index,
  onItemStyleChange,
}) => (
  <div key={keyName} className="prop-key-value-pair">
    <div className="prop-key">
      {keyName}
      {`(Item ${index})`}:{' '}
    </div>
    <div className="prop-value">
      <div>{abbreviation}</div>
      <input
        value={value}
        onChange={(event) =>
          onItemStyleChange(
            keyName,
            event.target.value,
            index
          )
        }
      />
    </div>
  </div>
);

PropInput.propTypes = {
  keyName: PropTypes.string.isRequired,
  index: PropTypes.number,
  onItemStyleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
};

PropInput.defaultProps = {
  index: 0,
};

export default PropInput;
