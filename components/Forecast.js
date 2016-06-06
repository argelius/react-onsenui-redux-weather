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

const styles = {
  forecast: {
    margin: '0 25px',
    display: 'flex'
  },
  weekday: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  weekdayName: {
    fontSize: '16px',
    margin: '0 0 6px 0',
    fontWeight: 200
  },
  weekdayIcon: {
    fontSize: '24px'
  },
  weekdayMaxTemp: {
    margin: '6px 0 0 0',
    fontSize: '12px'
  },
  weekdayMinTemp: {
    opacity: 0.6,
    margin: '2px 0 0 0',
    fontWeight: 200,
    fontSize: '12px'
  }
};

const Forecast = ({days}) => (
  <div style={styles.forecast}>
    {days.map(({weekday, icon, maxTemp, minTemp}) => {
      const weatherColor = weatherCodeToColor(icon);

      return (
        <div key={weekday} style={styles.weekday}>
          <div style={styles.weekdayName}>
            {WEEKDAYS[weekday]}
          </div>
          <div style={styles.weekdayIcon}>
            <WeatherIcon style={{color: weatherColor}} icon={icon} />
          </div>
          <div style={styles.weekdayMaxTemp}>
            {maxTemp}&deg;C
          </div>
          <div style={styles.weekdayMinTemp}>
            {minTemp}&deg;C
          </div>
        </div>
      );
    })}
  </div>
);

export default Forecast;
