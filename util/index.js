// http://openweathermap.org/weather-conditions

const THUNDER = '#b8d74b';
const RAIN = '#3690f3';
const SNOW = '#61c9f2';
const MIST = '#1199c0';
const CLEAR = '#f7d346';
const CLOUDS = '#94a8bd';
const EXTREME = '#ee5850';

export const weatherCodeToColor = (code) => {
  if (code < 0) {
    return CLOUDS;
  } else if (code >= 200 && code < 300) {
    return THUNDER;
  } else if (code >= 300 && code < 400) {
    return RAIN;
  } else if (code >= 500 && code < 600) {
    return RAIN;
  } else if (code >= 600 && code < 700) {
    return SNOW;
  } else if (code >= 700 && code < 800) {
    return MIST;
  } else if (code === 800) {
    return CLEAR;
  } else if (code >= 801 && code < 810) {
    return CLOUDS;
  } else if (code >= 900 && code < 903) {
    return EXTREME;
  } else {
    return CLEAR;
  }
};
