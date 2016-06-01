import React, {Component} from 'react';
import {countries} from 'country-data';

import {
  Page,
  Toolbar,
  ProgressCircular
} from 'react-onsenui';

import NavBar from './NavBar';
import Flag from './Flag';
import WeatherIcon from './WeatherIcon';


const WeatherPage = ({navigator, name, temperature, humidity, country, icon, isFetching, isInvalid}) => {
  let content;

  if (isInvalid) {
    content = (
      <div style={{margin: '50% 0 0 0', color: 'red', textAlign: 'center', fontSize: '40px'}}>Unable to fetch data!</div>
    );
  }
  else if (isFetching) {
    content = (
      <div style={{textAlign: 'center', margin: '50% 0 0 0'}}>
        <ProgressCircular style={{width: '100px', height: '100px'}} indeterminate />
      </div>
    );
  }
  else {
    content = (
      <div>
        <div style={{
          textAlign: 'center',
          marginTop: '30%',
          opacity: 0.8
        }}>
          <div style={{
            margin: '20px 0 0 0',
            textTransform: 'uppercase',
            fontSize: '40px'
          }}>
            {name}
          </div>
          <div style={{
            margin: '0 0 0 0',
            textTransform: 'uppercase',
            fontSize: '22px'
          }}>
            {countries[country.toUpperCase()].name}
          </div>

          <div style={{
            fontSize: '100px',
            margin: '20px 0 30px 0'
          }}>
            <WeatherIcon icon={icon} />
          </div>

          <div style={{
            fontSize: '60px',
            margin: '10px 0 0 0'
          }}>
            <div>{temperature}&deg;C</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Page renderToolbar={() => <NavBar backButton={true} title={`Weather in ${name}`} navigator={navigator} />}>
      {content}
    </Page>
  );
};

export default WeatherPage;
