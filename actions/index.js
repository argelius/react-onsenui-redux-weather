import fetch from 'isomorphic-fetch';
import {queryWeather} from '../api';

let nextLocationId = 0;

export const addLocation = (name) => {
  return {
    type: 'ADD_LOCATION',
    id: nextLocationId++,
    name
  };
};

export const removeLocation = id => ({
  type: 'REMOVE_LOCATION',
  id
});

export const selectLocation = id => ({
  type: 'SELECT_LOCATION',
  id
});

export const requestWeather = (id) => {
  return {
    type: 'REQUEST_WEATHER',
    id
  };
};

export const receiveWeather = (id, data) => {
  return {
    type: 'RECEIVE_WEATHER',
    id,
    ...data
  };
};

export const setFetchError = id => {
  return {
    type: 'SET_FETCH_ERROR',
    id
  };
};

export const fetchWeather = (id) => {
  return (dispatch, getState) => {
    const name = getState().locations[id].name;

    dispatch(requestWeather(id));
    queryWeather(name)
      .catch(error => dispatch(setFetchError(id)))
      .then((data) => dispatch(receiveWeather(id, data)));
  }
};

export const addLocationAndFetchWeather = name => {
  return (dispatch, getState) => {
    const id = dispatch(addLocation(name)).id;

    dispatch(fetchWeather(id));
  };
}

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
