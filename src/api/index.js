import axios from 'axios';

const config = {
  url_base: 'https://api.openweathermap.org/geo/1.0/direct?q=Seoul&limit=5&appid=',
  api_key: process.env.VUE_APP_API_KEY,
};
const baseURL = config.url_base + config.api_key;
const API_KEY = config.api_key;

const fetchWeather = () => {
  axios.get(`${baseURL}`).then((result) => {
    console.log('결과', result);
  });
};

const getLocalInfo = (cityName) => {
  let baseURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;
  return axios.get(baseURL).then((res) => {
    let lat = res.data[0].lat.toFixed(2),
      lon = res.data[0].lon.toFixed(2);
    return { lat, lon };
  });
};

const getWeatherInfo = (cityName) => {
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  return axios.get(baseURL).then((res) => {
    return res.data;
  });
};

const getTodayInfo = (cityName) => {
  let baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  return axios.get(baseURL).then((res) => {
    return res.data.list
  });
};

const getWeeklyInfo = (cityName) => {
  let baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  return baseURL
};

export { fetchWeather, getLocalInfo, getWeatherInfo, getWeeklyInfo, getTodayInfo };
