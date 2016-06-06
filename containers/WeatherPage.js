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

const styles = {
  main: {
    fontFamily: platform.isIOS() ? 'Lato' : null,
    textAlign: 'center',
    color: '#4a4a4a',
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translate3d(0, -50%, 0)'
  },
  invalid: {
    color: 'red',
    fontSize: '20px'
  },
  progress: {
    width: '50px',
    height: '50px'
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '24px',
    lineHeight: '24px'
  },
  country: {
    margin: '2px 0 0 0',
    textTransform: 'uppercase',
    fontSize: '12px',
    lineHeight: '12px'
  },
  icon: {
    fontSize: '100px',
    margin: '20px 0 0px 0'
  },
  data: {
    fontSize: '40px',
    fontWeight: 300,
    display: 'flex',
    margin: '40px 25px'
  },
  dataColumn: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  dataValue: {
    fontSize: '60px'
  },
  dataCaption: {
    fontSize: '14px',
    fontWeight: 400
  }
};

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
    content = <div style={styles.invalid}>Unable to fetch data!</div>;
  } else if (isFetching) {
    content = <ProgressCircular style={styles.progress} indeterminate />;
  } else {
    content = (
      <div>
        <div style={styles.name}>
          {name}
        </div>

        <div style={styles.country}>
          {countries[country.toUpperCase()].name}
        </div>

        <div style={{...styles.icon, color: weatherColor}}>
          <WeatherIcon icon={icon} />
        </div>

        <div style={styles.data}>
          <div style={styles.dataColumn}>
            <div style={styles.dataValue}>
              {temperature}&deg;
            </div>
            <div style={styles.dataCaption}>
              TEMPERATURE
            </div>
          </div>
          <div style={styles.dataColumn}>
            <div style={styles.dataValue}>
              {humidity}%
            </div>
            <div style={styles.dataCaption}>
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
      <div style={styles.main}>
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
