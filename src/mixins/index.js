const setIconImage = (iconName) => {
  let baseURL = 'https://openweathermap.org/img/wn/';
  const weatherURL = baseURL + iconName + '@2x.png';
  return weatherURL;
};

export { setIconImage };