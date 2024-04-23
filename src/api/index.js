import axios from 'axios';

const config = {
  url_base: 'https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=',
  api_key: '0496489bb3e458c3cd4b86ee4da8e917',
};
const baseURL = config.url_base + config.api_key;

const fetchWeather = () => {
  axios.get(`${baseURL}`).then((result) => {
    console.log('결과', result);
  });
};

export { fetchWeather };
