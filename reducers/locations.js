const location = (state, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        id: action.id,
        name: action.name
      };
    default:
      return state
  }
};

const locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        location(undefined, action)
      ];
    default:
      return state;
  }
};

export default locations;
