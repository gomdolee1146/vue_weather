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

export { fetchWeather, API_KEY };

// 이 지역의 오늘 날씨를 시간대별로
// 이 지역의 이번 주 날씨
// 여러 지역의 현재 날씨
// 