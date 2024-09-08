export const commonMixin = {
  methods: {
    setIconImage(iconName) {
      let baseURL = 'https://openweathermap.org/img/wn/';
      const weatherURL = baseURL + iconName + '@2x.png';
      return weatherURL;
    },
  },
};
