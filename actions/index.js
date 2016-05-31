let nextLocationId = 0;

export const addLocation = ({name}) => {
  return {
    type: 'ADD_LOCATION',
    id: nextLocationId++,
    name: name
  };
};

export const openDialog = () => {
  return {
    type: 'OPEN_DIALOG'
  }
};

export const closeDialog = () => {
  return {
    type: 'CLOSE_DIALOG'
  }
};
