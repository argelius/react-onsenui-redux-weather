import React from 'react';

import WeatherIcon from '../components/WeatherIcon';
import {weatherCodeToColor} from '../util';

const WEEKDAYS = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT'
};

const Forecast = ({days}) => (
  <div style={{
    margin: '0 25px',
    display: 'flex'
  }}>
    {days.map(({weekday, icon, max_temp, min_temp}) => {
      const weatherColor = weatherCodeToColor(icon);

      return (
        <div key={weekday} style={{
          flexGrow: 1
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              fontSize: '16px',
              margin: '0 0 6px 0',
              fontWeight: 200
            }}>
              {WEEKDAYS[weekday]}
            </div>
            <div style={{
              fontSize: '24px'
            }}>
              <WeatherIcon style={{color: weatherColor}} icon={icon} />
            </div>
            <div style={{
              margin: '6px 0 0 0',
              fontSize: '12px'
            }}>
              {max_temp}&deg;C
            </div>
            <div style={{
              opacity: 0.6,
              margin: '2px 0 0 0',
              fontWeight: 200,
              fontSize: '12px'
            }}>
              {min_temp}&deg;C
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Forecast;
