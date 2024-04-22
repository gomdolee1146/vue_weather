import axios from 'axios';



const config = {
  url_base: 'https://api.openweathermap.org/data/2.5/',
  api_key: '0496489bb3e458c3cd4b86ee4da8e917',

  baseUrl: this.url_base + this.api_key
}

const fetchWeather = () => {
  return axios.get(`${config.baseUrl}`)
}

export {
  fetchWeather,
  
}