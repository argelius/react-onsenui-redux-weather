import {v4 as generateId} from 'node-uuid';

import {queryWeather} from '../api';

export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const addLocation = (name) => ({
  type: ADD_LOCATION,
  id: generateId(),
  name
});

export const removeLocation = id => ({
  type: REMOVE_LOCATION,
  id
});

export const selectLocation = id => ({
  type: SELECT_LOCATION,
  id
});

export const requestWeather = (id) => ({
  type: REQUEST_WEATHER,
  id
});

export const receiveWeather = (id, data) => ({
  type: RECEIVE_WEATHER,
  id,
  ...data
});

export const setFetchError = id => ({
  type: SET_FETCH_ERROR,
  id
});

export const fetchWeather = (id) => {
  /*
   * This function requests and receives the
   * weather data asynchronously.
   */
  return (dispatch, getState) => {
    const name = getState().locations[id].name;

    dispatch(requestWeather(id));
    queryWeather(name)
      .catch(() => dispatch(setFetchError(id)))
      .then((data) => dispatch(receiveWeather(id, data)));
  };
};

export const addLocationAndFetchWeather = name => {
  return (dispatch, getState) => {
    const id = dispatch(addLocation(name)).id;
    dispatch(fetchWeather(id));
  };
};

export const openDialog = () => ({
  type: OPEN_DIALOG
});

export const closeDialog = () => ({
  type: CLOSE_DIALOG
});
