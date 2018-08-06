import PropTypes from 'prop-types';

export const CssPropertyObjectPropType = {
  value: PropTypes.string,
  label: PropTypes.string,
  toolTipText: PropTypes.string,
};

export const PropWithOptionsPropType = {
  ...CssPropertyObjectPropType,
  options: PropTypes.arrayOf(PropTypes.string),
};
