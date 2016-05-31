import {combineReducers} from 'redux';
import locations from './locations';
import dialog from './dialog';

const todoApp = combineReducers({
	locations,
  dialog
})

export default todoApp
