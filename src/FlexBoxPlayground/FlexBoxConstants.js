const FlexContainerProps = {
  display: ['flex', 'inline-flex'],
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
  flexFlow: [
    'row nowrap',
    'row wrap',
    'row-reverse wrap',
    'column wrap',
    'column-reverse wrap',
    'row wrap-reverse',
    'row-reverse wrap-reverse',
    'column wrap-reverse',
    'column-reverse wrap-reverse',
  ],
};

const FlexItemsProps = {
  flex: {
    value: '0 0 auto',
    description: 'flex-grow flex-shrink flex-basis',
  },
};

export default {
  FlexContainerProps,
  FlexItemsProps,
};
