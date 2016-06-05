import React from 'react';

const WeatherIcon = ({icon, className, ...props}) => (
  <i {...props} className={`wi wi-owm-${icon} ${className || ''}`} />
);

export default WeatherIcon;
