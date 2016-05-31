import React, {Component} from 'react';

import {
  Page,
  Toolbar,
  Fab
} from 'react-onsenui';

import NavBar from './NavBar';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';

const WeatherPage = ({location, navigator}) => {
  return (
    <Page renderToolbar={() => <NavBar backButton={true} title='Weather in Tokyo' navigator={navigator} />}>
      Hi!
    </Page>
  );
};

export default WeatherPage;
