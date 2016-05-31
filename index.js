import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import weatherApp from './reducers';
import App from './components/App';

import 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const store = createStore(weatherApp);

import {addLocation} from './actions';

store.dispatch(addLocation({name: 'Tokyo'}));

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
