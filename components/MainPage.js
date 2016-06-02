import React from 'react';

import {
  Page,
  Toolbar,
  Fab
} from 'react-onsenui';

import NavBar from './NavBar';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Locations' navigator={navigator} />}>
    <LocationList navigator={navigator} />
    <AddLocation />
  </Page>
);

export default MainPage;
