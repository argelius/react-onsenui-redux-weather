import fetch from 'isomorphic-fetch';
import Promise from 'promise';

const API_KEY = 'e012e035583f16942878c325122b91cf';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const kelvinToCelsius = (kelvin) => kelvin - 273.15;

const round = (value, decimals = 1) => {
  const x = Math.pow(10, decimals);
  return Math.round(x * value) / x;
};

export const queryWeather = (city) => {
  return fetch(`${API_URL}?q=${city.trim()}&appid=${API_KEY}`)
    .then(response => {
      if (response.status >= 400) {
        return Promise.reject('Invalid response');
      }

      return response.json();
    })
    .then(json => {
      if (json.cod !== 200) {
        return Promise.reject('Invalid response');
      }

      return {
        temperature: round(kelvinToCelsius(json.main.temp), 1),
        humidity: json.main.humidity,
        icon: json.weather[0].id,
        name: json.name,
        country: json.sys.country.toLowerCase()
      }
    });
};
