const FlexContainerProps = {
    display: ['flex', 'inline-flex'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    flexFlow: [ 'row nowrap', 'row wrap', 'row-reverse wrap', 'column wrap', 'column-reverse wrap',
    'row wrap-reverse', 'row-reverse wrap-reverse', 'column wrap-reverse', 'column-reverse wrap-reverse' ]
};

const FlexItemsProps = {
    flexGrow: ['0', '1', '2', '3', '4'],
    flexShrink: ['0', '1', '2', '3', '4'],
    flexBasis: "auto",
    flex: '0 0 auto',
  };

export default {
    FlexContainerProps,
    FlexItemsProps,
}