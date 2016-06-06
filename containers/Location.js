import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ListItem, Icon} from 'react-onsenui';

import {platform} from 'onsenui';

import * as Actions from '../actions';
import WeatherPage from './WeatherPage';
import WeatherIcon from '../components/WeatherIcon';
import {weatherCodeToColor} from '../util';

const styles = {
  weatherIcon: {
    color: '#fff',
    textAlign: 'center',
    width: platform.isAndroid() ? '36px' : '30px',
    height: platform.isAndroid() ? '36px' : '30px',
    lineHeight: platform.isAndroid() ? '36px' : '30px',
    borderRadius: '6px',
    fontSize: platform.isAndroid() ? '16px' : '14px'
  },
  buttons: {
    fontSize: '20px',
    color: '#cacaca'
  },
  refreshButton: {
    margin: '0 25px 0 0'
  },
  removeButton: {
    margin: '0 10px 0 0'
  }
};

const Location = ({
  id,
  name,
  temperature,
  humidity,
  icon,
  country,
  isFetching,
  isInvalid,
  navigator,
  actions
}) => {
  let subtitle;

  if (isInvalid) {
    subtitle = (
      <span style={{color: 'red'}}>
        Unable to fetch data!
      </span>
    );
  } else if (isFetching) {
    subtitle = (
      <span>Fetching data...</span>
    );
  } else {
    subtitle = (
      <span>
        {temperature}&deg;C&nbsp;
        {humidity}%
      </span>
    );
  }

  const weatherColor = weatherCodeToColor(icon);

  return (
    <ListItem onClick={() => {
      actions.selectLocation(id);
      navigator.pushPage({component: WeatherPage});
    }} tappable>
      <div className='left'>
        <div style={{...styles.weatherIcon, backgroundColor: weatherColor}}>
          {icon < 0 ? '?' : <WeatherIcon icon={icon} />}
        </div>
      </div>
      <div className='center'>
        <div className='list__item__title'>
          {name}
        </div>
        <div className='list__item__subtitle'>
          {subtitle}
        </div>
      </div>
      <div className='right' style={styles.buttons}>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.fetchWeather(id);
        }}>
          <Icon icon='refresh' className='weather-button' style={styles.refreshButton} className={isFetching ? 'spin-animation' : ''} />
        </div>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.removeLocation(id);
        }}>
          <Icon icon='trash' className='weather-button' style={styles.removeButton} />
        </div>
      </div>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Location);
