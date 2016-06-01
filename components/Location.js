import React, {PropTypes} from 'react'

import {ListItem} from 'react-onsenui';

import WeatherPage from '../containers/WeatherPage';
import Flag from './Flag';
import WeatherIcon from './WeatherIcon';

const Location = ({id, name, temperature, humidity, icon, country, isFetching, isInvalid, navigator, onRemoveLocation, onSelectLocation}) => {
  let subtitle;

  if (isInvalid) {
    subtitle = (
      <span style={{color: 'red'}}>
        Unable to fetch data!
      </span>
    );
  }
  else if (isFetching) {
    subtitle = (
      <span>Fetching data...</span>
    );
  }
  else {
    subtitle = (
      <span>
        {temperature}&deg;C&nbsp;{humidity}%
      </span>
    );
  }

  let flag = country
    ? <Flag style={{marginRight: '6px'}} country={country} />
    : null;

  return (
    <ListItem onClick={() => {onSelectLocation.call(null, id); navigator.pushPage({component: WeatherPage});}} tappable>
      <div className='left'>
        <WeatherIcon icon={icon} />
      </div>
      <div className='center'>
        <div className='list__item__title'>
          {name}
        </div>
        <div className='list__item__subtitle'>
          {flag}
          {subtitle}
        </div>
      </div>
      <div className='right'>
        <div onClick={(e) => {e.stopPropagation(); onRemoveLocation.call(null, id);}} className='list__item__label'>
          Remove
        </div>
      </div>
    </ListItem>
  );
};

export default Location;
