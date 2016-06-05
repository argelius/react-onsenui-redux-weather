import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ListItem, Icon} from 'react-onsenui';

import * as Actions from '../actions';
import WeatherPage from './WeatherPage';
import WeatherIcon from '../components/WeatherIcon';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
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

  const weatherColor = '#62cbf4';

  return (
    <ListItem onClick={() => {
      actions.selectLocation(id);
      navigator.pushPage({component: WeatherPage});
    }} tappable>
      <div className='left'>
        <WeatherIcon style={{
          backgroundColor: weatherColor,
          color: '#fff',
          padding: '7px 6px',
          borderRadius: '6px',
          fontSize: '14px'
        }} icon={icon} />
      </div>
      <div className='center'>
        <div className='list__item__title'>
          {name}
        </div>
        <div className='list__item__subtitle'>
          {subtitle}
        </div>
      </div>
      <div className='right' style={{fontSize: '20px', color: '#cacaca'}}>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.fetchWeather(id);
        }}>
          <Icon icon='refresh' className='weather-button' style={{margin: '0 25px 0 0'}} />
        </div>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.removeLocation(id);
        }}>
          <Icon icon='trash' className='weather-button' style={{margin: '0 10px 0 0'}} />
        </div>
      </div>
    </ListItem>
  );
};

export default connect(
  undefined,
  mapDispatchToProps
)(Location);
