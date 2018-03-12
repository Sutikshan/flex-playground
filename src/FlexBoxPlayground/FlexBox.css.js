const colors = ['#A62E5C', '#9BC850', '#675BA7'];

const flexContainerDefaults = {
  border: "solid 4px #000"
};

const flexItemDefaults = {
  color: "#fff",
  font_size: "1.2em",
  padding: "1em",
  textAlign: "center"
};

export default {
  flexContainer: Object.assign(
    {},
    {
      display: "flex"
    },
    { ...flexContainerDefaults }
  ),

  flexItem: (index) => (Object.assign({}, { ...flexItemDefaults }, {backgroundColor: colors[index]})),

  flex_item_strong: {
    display: "block",
    fontSize: "130%"
  }
};
