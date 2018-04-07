import PropTypes from 'prop-types';

const widthOptions = [
  'auto',
  '100px',
  '200px',
  '300px',
  '400px',
  '500px',
  '600px',
  '800px',
];
const heightOptions = [
  'auto',
  '100px',
  '200px',
  '300px',
  '400px',
  '500px',
  '600px',
  '800px',
];

const FlexContainerProps = {
  display: {
    value: 'flex',
    label: 'display',
    toolTipText: 'flex & inline-flex Options make it flex-container',
    options: ['flex', 'inline-flex'],
  },
  flexDirection: {
    value: 'row',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    toolTipText:
      'decides flow direction and flip main-axis & cross axis accordingly',
    label: 'flex-direction',
  },
  flexWrap: {
    value: 'nowrap',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    toolTipText:
      'when container, width is less then decide whether to wrap items or not',
    label: 'flex-wrap',
  },
  flexFlow: {
    value: 'row nowrap',
    toolTipText: 'decides the flex-direction and flex-wrap in single property',
    label: 'flex-flow',
    options: [
      'row nowrap',
      'row wrap',
      'row-reverse wrap',
      'column nowrap',
      'column wrap',
      'column-reverse wrap',
      'row wrap-reverse',
      'row-reverse wrap-reverse',
      'column wrap-reverse',
      'column-reverse wrap-reverse',
    ],
  },
  justifyContent: {
    value: 'flex-start',
    toolTipText:
      'defines how the browser distributes space between and around content items along the main axis of their container',
    options: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
    ],
    label: 'justify-content',
  },
  alignItems: {
    label: 'align-items',
    value: 'stretch',
    toolTipText:
      'distributes space between and around flex items along the cross-axis of their container',
    options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
  },
  alignContent: {
    label: 'align-content',
    value: 'normal',
    toolTipText:
      'distributes space between and around content items along the cross-axis of their container. NO effect on single line boxes.',
    options: ['normal', 'flex-start', 'flex-end', 'center', 'space-around'],
  },
  height: {
    label: 'container height',
    value: '100px',
    toolTipText: 'change the height of flex-Container',
    options: heightOptions,
  },
  width: {
    label: 'container width',
    value: '100px',
    toolTipText: 'change the width of flex-Container',
    options: widthOptions,
  },
};

const FlexItemsProps = {
  flex: {
    value: '0 0 auto',
    label: 'flex-grow flex-shrink flex-basis',
  },
  order: {
    value: '0',
    label: '',
  },
  alignSelf: {
    label: 'align-self',
    value: 'normal',
    toolTipText:
      'The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the items cross-axis margin is set to auto, then align-self is ignored.',
    options: ['flex-start', 'flex-end', 'center'],
  },
  height: {
    label: 'item height (all)',
    value: 'auto',
    toolTipText: 'change the height of flex-Container',
    options: heightOptions,
    appliesToAll: true,
  },
  width: {
    label: 'item width (all)',
    value: 'auto',
    toolTipText: 'change the width of flex-Container',
    options: widthOptions,
    appliesToAll: true,
  },
};

const FlexPropType = {
  value: PropTypes.string,
  label: PropTypes.string,
  toolTipText: PropTypes.string,
};

const FlexContainerPropType = {
  ...FlexPropType,
  options: PropTypes.arrayOf(PropTypes.string),
};

const FlexContainerPropTypes = {
  display: PropTypes.shape(FlexContainerPropType),
  flexDirection: PropTypes.shape(FlexContainerPropType),
  flexWrap: PropTypes.shape(FlexContainerPropType),
  flexFlow: PropTypes.shape(FlexContainerPropType),
  justifyContent: PropTypes.shape(FlexContainerPropType),
  alignContent: PropTypes.shape(FlexContainerPropType),
  alignItems: PropTypes.shape(FlexContainerPropType),
  height: PropTypes.shape(FlexContainerPropType),
};

const FlexItemPropTypes = {
  flex: PropTypes.shape(FlexPropType),
};

const DefaultContainerProps = {
  width: FlexContainerProps.width,
  height: FlexContainerProps.height,
};
const DefaultItemProps = {
  width: FlexItemsProps.width,
  height: FlexItemsProps.height,
};

export default {
  DefaultContainerProps,
  DefaultItemProps,
  FlexContainerProps,
  FlexItemsProps,
  FlexContainerPropTypes,
  FlexItemPropTypes,
};
