// http://openweathermap.org/weather-conditions

const thunder = '#b8d74b';
const rain = '#3690f3';
const snow = '#61c9f2';
const mist = '#1199c0';
const clear = '#f7d346';
const clouds = '#94a8bd';
const extreme = '#ee5850';

export const weatherCodeToColor = (code) => {
  if (code >= 200 && code < 300) {
    return thunder;
  } else if (code >= 300 && code < 400) {
    return rain;
  } else if (code >= 500 && code < 600) {
    return rain;
  } else if (code >= 600 && code < 700) {
    return snow;
  } else if (code >= 700 && code < 800) {
    return mist;
  } else if (code === 800) {
    return clear;
  } else if (code >= 801 && code < 810) {
    return clouds;
  } else if (code >= 900 && code < 903) {
    return extreme;
  } else {
    return clear;
  }
};
