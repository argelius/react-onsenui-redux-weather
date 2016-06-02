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
      <div style={{color: 'red', fontSize: '40px'}}>Unable to fetch data!</div>
    );
  }
  else if (isFetching) {
    content = (
      <ProgressCircular style={{width: '100px', height: '100px'}} indeterminate />
    );
  }
  else {
    content = (
      <div style={{
        opacity: 0.8
      }}>
        <div style={{
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
          fontSize: '40px',
          margin: '10px 0 0 0'
        }}>
          <span>{temperature}&deg;C</span>
          &nbsp;
          <span>{humidity}%</span>
        </div>
      </div>
    );
  }

  return (
    <Page renderToolbar={() => <NavBar backButton={true} title={`Weather in ${name}`} navigator={navigator} />}>
      <div style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        width: '100%',
        transform: 'translate3d(0, -50%, 0)'
      }}>
      {content}
      </div>
    </Page>
  );
};

export default WeatherPage;
