const selectedLocation = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_LOCATION':
      return action.id;
    default:
      return state;
  }
};

export default selectedLocation;
