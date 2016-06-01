import React, {Component} from 'react';

const WeatherIcon = ({icon, ...props}) => (
  <i {...props} className={`wi wi-owm-${icon}`} />
);

export default WeatherIcon;
