const axios = require('axios');

const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = '00b5e0ddcedf4f5418e9460eec1d9626';

const prepParams = (queryStringData) => {
  return Object.keys(queryStringData)
    .map((key) => {
      return key + '=' + encodeURIComponent(queryStringData[key])
    }).join('&')
}

const prepUrl = (type, city) => {
  return baseUrl + type + '?q=' + city + '&type=accurate&APPID=' + apiKey + '&cnt=5'
}

const getQueryStringData = (city) => {
  return {
    q: city,
    type: 'accurate',
    APPID: apiKey,
    cnt: 5
  }
}

const getWeather = (city) => {
  const url = prepUrl('weather', city)
  return axios.get(url)
}

const getForecast = (city) => {
  const url = prepUrl('forecast/daily', city)
  return axios.get(url)
}

const returnForecasts = (city) => {
  return axios.all([
    getWeather(city),
    getForecast(city)
  ]).then((data) => {
    const weatherData = data[0]
    const forecastData = data[1]
    return {
      weatherData,
      forecastData
    }
  })
}

module.exports = {
  returnForecasts
}