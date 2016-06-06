import React from 'react';
import {connect} from 'react-redux';
import {countries} from 'country-data';

import {platform} from 'onsenui';

import {
  Page,
  ProgressCircular
} from 'react-onsenui';

import NavBar from '../components/NavBar';
import WeatherIcon from '../components/WeatherIcon';
import Forecast from '../components/Forecast';
import {weatherCodeToColor} from '../util';

const WeatherPage = ({
  navigator,
  name,
  temperature,
  humidity,
  country,
  icon,
  forecast,
  isFetching,
  isInvalid
}) => {
  let content;

  const weatherColor = weatherCodeToColor(icon);

  if (isInvalid) {
    content = (
      <div style={{color: 'red', fontSize: '40px'}}>Unable to fetch data!</div>
    );
  } else if (isFetching) {
    content = (
      <ProgressCircular style={{margin: '100px 0 0 0', width: '100px', height: '100px'}} indeterminate />
    );
  } else {
    content = (
      <div style={{
        fontFamily: platform.isIOS() ? 'Lato' : null
      }}>
        <div style={{
          textTransform: 'uppercase',
          fontSize: '24px',
          lineHeight: '24px'
        }}>
          {name}
        </div>
        <div style={{
          margin: '2px 0 0 0',
          textTransform: 'uppercase',
          fontSize: '12px',
          lineHeight: '12px'
        }}>
          {countries[country.toUpperCase()].name}
        </div>

        <div style={{
          fontSize: '100px',
          color: weatherColor,
          margin: '20px 0 0px 0'
        }}>
          <WeatherIcon icon={icon} />
        </div>

        <div style={{
          fontSize: '40px',
          fontWeight: 300,
          display: 'flex',
          margin: '40px 25px'
        }}>
          <div style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{fontSize: '60px'}}>
              {temperature}&deg;
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 400
            }}>
              TEMPERATURE
            </div>
          </div>
          <div style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{fontSize: '60px'}}>
              {humidity}%
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 400
            }}>
              HUMIDITY
            </div>
          </div>
        </div>

        <Forecast days={forecast} />
      </div>
    );
  }

  return (
    <Page renderToolbar={() => <NavBar backButton={true} title={`Weather in ${name}`} navigator={navigator} />}>
      <div style={{
        textAlign: 'center',
        color: '#4a4a4a',
        width: '100%',
        position: 'absolute',
        top: '50%',
        transform: 'translate3d(0, -50%, 0)'
      }}>
      {content}
      </div>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  ...state.locations[state.selectedLocation]
});

export default connect(
  mapStateToProps
)(WeatherPage);
