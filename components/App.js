import React, {Component} from 'react';

import {
  Navigator
} from 'react-onsenui';

import MainPage from './MainPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage(route, navigator) {
    return <route.component key={route.key} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        renderPage={this.renderPage}
        initialRoute={{component: MainPage, key: 'MAIN_PAGE'}}
      />
    );
  }
}
