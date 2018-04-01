import PropTypes from 'prop-types';

export const FlexContainerPropTypes = {
  display: PropTypes.arrayOf(PropTypes.string),
  flexDirection: PropTypes.arrayOf(PropTypes.string),
  flexWrap: PropTypes.arrayOf(PropTypes.string),
  flexFlow: PropTypes.arrayOf(PropTypes.string),
};

const FlexItemType = {
  value: PropTypes.string,
  description: PropTypes.string,
};

export const FlexItemPropTypes = {
  flex: PropTypes.shape(FlexItemType),
};

export default {
  FlexContainerPropTypes,
  FlexItemPropTypes,
};
