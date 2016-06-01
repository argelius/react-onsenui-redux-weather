import React, {Component} from 'react';

import {
  Page,
  Toolbar
} from 'react-onsenui';

import NavBar from './NavBar';
import Flag from './Flag';
import WeatherIcon from './WeatherIcon';


const WeatherPage = ({navigator, name, temperature, humidity, country}) => {
  return (
    <Page renderToolbar={() => <NavBar backButton={true} title={`Weather in ${name}`} navigator={navigator} />}>
      <h1>
        {name}
      </h1>
    </Page>
  );
};

export default WeatherPage;
