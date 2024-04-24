import { API_KEY } from '@/api';
import axios from 'axios';

const localName = [
  'Seoul',
  'Incheon',
  'Chuncheon',
  'Suwon',
  'Gangneung',
  'Daejeon',
  'Chungju',
  'Andong',
  'Jeonju',
  'Gwangju',
  'Mokpo',
  'Yeosu',
  'Busan',
  'Daegu',
  'Ulsan',
  'Jeju',
];

const getLocalInfo = (cityName) => {
  let baseURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;
  return axios.get(baseURL).then((res) => {
    let lat = res.data[0].lat.toFixed(2),
        lon = res.data[0].lon.toFixed(2);
        // console.log(lat, lon)
    return {lat, lon}
  });
};
export { localName, getLocalInfo };
