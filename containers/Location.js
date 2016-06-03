import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {platform} from 'onsenui';
import {ListItem, Icon} from 'react-onsenui';

import * as Actions from '../actions';
import WeatherPage from './WeatherPage';
import Flag from '../components/Flag';
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
        <span style={{display: 'inline-block', width: '16px'}}>
          🌡
        </span>
        {temperature}&#x2103;&nbsp;
        <span style={{display: 'inline-block', width: '16px'}}>
          ☔
        </span>{humidity}%
      </span>
    );
  }

  let flag = country
    ? <Flag style={{marginRight: '6px'}} country={country} />
    : null;

  return (
    <ListItem onClick={() => {
      actions.selectLocation(id);
      navigator.pushPage({component: WeatherPage});
    }} tappable>
      <div className='left'>
        <WeatherIcon style={platform.isAndroid() ? {fontSize: '22px'} : null} icon={icon} />
      </div>
      <div className='center'>
        <div className='list__item__title'>
          {flag}
          {name}
        </div>
        <div className='list__item__subtitle'>
          {subtitle}
        </div>
      </div>
      <div className='right' style={{fontSize: '20px'}}>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.fetchWeather(id);
        }}>
          <Icon icon='ion-refresh' style={{margin: '0 10px'}} />
        </div>
        <div onClick={(e) => {
          e.stopPropagation();
          actions.removeLocation(id);
        }}>
          <Icon icon='ion-ios-trash' style={{margin: '0 10px 0 0'}} />
        </div>
      </div>
    </ListItem>
  );
};

export default connect(
  undefined,
  mapDispatchToProps
)(Location);
