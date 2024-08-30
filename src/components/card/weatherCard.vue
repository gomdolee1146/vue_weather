<template>
  <div class="card" :class="{ brief: isShowBrief }">
    <template v-if="isShowBrief">
      <div class="card__title">{{ cityName }}</div>
      <div class="card__thumb">
        <img :src="iconUrl" />
      </div>
      <div class="card__txt">{{ temperature }}℃</div>
      <div class="card__box">
        <p>Max: {{ temperatureMax }}℃&nbsp;&nbsp;Min: {{ temperatureMin }}℃</p>
      </div>
    </template>
    <template v-else>
      <div class="card__thumb">
        <img :src="iconUrl" />
      </div>
      <div class="card__wrap">
        <div class="card__txt">
          <h4 class="card__title">
            <b>{{ cityName }}</b> {{ temperature }}℃
          </h4>
          <p class="card__desc">wind speed {{ windSpeed }}km/h</p>
          <p class="card__info">{{ weatherName }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { getWeatherInfo } from '@/api';
import { setIconImage } from '@/mixins';

export default {
  name: 'weatherCard',
  data() {
    return {
      baseURL: '',
      weatherName: '',
      windSpeed: '',
      temperature: '',
      temperatureMin: '',
      temperatureMax: '',
      iconName: '',
      iconUrl: '',
    };
  },
  props: {
    isShowBrief: { type: Boolean, default: false },
    cityName: { type: String, default: '' },
  },
  methods: {
    async getInfo() {
      const res = await getWeatherInfo(this.cityName);

      this.weatherName = this.$_.lowerCase(res.weather[0].main);
      this.windSpeed = res.wind.speed;
      this.iconName = res.weather[0].icon;
      this.temperature = this.$_.round(res.main.temp - 273, 2);
      this.temperatureMin = this.$_.round(res.main.temp_min - 273, 2);
      this.temperatureMax = this.$_.round(res.main.temp_max - 273, 2);

      this.$nextTick(() => {
        this.iconUrl = setIconImage(this.iconName);
      });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  padding: 40px 0 0;
}
.card.brief {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.card__thumb {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0px;
  right: 16px;
  width: 100px;
  aspect-ratio: 1/1;
  z-index: 1;
}

.brief .card__thumb {
  position: static;
}

.card__wrap {
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  background: var(--bg-default);
}
.card__wrap:hover {
  background: var(--bg-tertiary);
}
.card__title {
  margin-bottom: 4px;
  font-size: 24px;
}
.card__box p {
  margin-top: 16px;
  text-align: center;
}
.card__desc {
  margin-top: 8px;
  font-size: 14px;
  color: var(--txt-secondary);
}
.card__info {
  display: inline-block;
  position: absolute;
  bottom: 24px;
  right: 16px;
  min-width: 100px;
  padding: 4px 12px;
  border-radius: 20px;
  background: #fff;
  font-size: 16px;
  font-weight: 700;
  color: var(--bg-default);
  text-align: center;
}
</style>
