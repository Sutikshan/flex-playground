const colors = [
  '#A62E5C',
  '#9BC850',
  '#675BA7',
  '#2A9FBC',
  '#F15B2A',
  '#9BC850',
  '#A62E5C',
  '#2A9FBC',
  '#F15B2A',
];

const flexContainerDefaults = {
  border: 'solid 2px #000',
};

const flexItemDefaults = {
  color: '#fff',
  font_size: '1.2em',
  padding: '1em',
  textAlign: 'center',
  width: '8em',
  height: '50px',
  opacity: 0.8,
};

export default {
  flexContainer: {
    display: 'flex',
    ...flexContainerDefaults,
  },
  getDefaultStyle: (index) =>
    Object.assign(
      {},
      { ...flexItemDefaults },
      { backgroundColor: colors[index % 9] }
    ),

  flex_item_strong: {
    display: 'block',
    fontSize: '130%',
  },
};
