const location = (state, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        id: action.id,
        name: action.name,
        isFetching: false,
        isInvalid: false,
        temperature: 0,
        icon: 800,
        humidity: 0
      };
    case 'REQUEST_WEATHER':
      return {
        ...state,
        isFetching: true,
        isInvalid: false
      };
    case 'RECEIVE_WEATHER':
      return {
        ...state,
        isFetching: false,
        isInvalid: false,
        ...action
      };
    case 'SET_FETCH_ERROR':
      return {
        ...state,
        isInvalid: true
      };
    default:
      return state
  }
};

const locations = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        [action.id]: location(undefined, action)
      };
    case 'REMOVE_LOCATION':
      const {...rest} = state;
      delete rest[action.id];

      return rest;
    case 'SET_FETCH_ERROR':
    case 'REQUEST_WEATHER':
    case 'RECEIVE_WEATHER':
      return {
        ...state,
        [action.id]: location({...state[action.id]}, action)
      };
    default:
      return state;
  }
};

export default locations;
