<template>
  <div class="card">
    <div class="card__title">
      <h4>Today</h4>
      <span>{{ getTodayDate() }}</span>
    </div>
    <div class="card__wrap">
      <div
        class="card__box"
        v-for="(weather, idx) in todayWeatherInfo"
        :key="idx"
        :class="{ active: idx === 2 }"
      >
        <p class="card__txt">{{ this.$_.ceil(weather.main.temp - 273, 2) }}℃</p>
        <div class="card__thumb">
          <img :src="getIconImage(weather.weather[0].icon)" />
        </div>
        <p class="card__txt">{{ new Date(weather.dt * 1000).getHours() + ':00' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getTodayInfo } from '@/api';
import { setIconImage } from '@/mixins';

export default {
  name: 'todayCard',
  data() {
    return {
      todayWeatherInfo: [],
      temperature: '',
      time: '',
      iconName: '',
      iconUrl: '',
    };
  },
  props: {
    cityName: { type: String, default: '' },
  },
  methods: {
    async getInfo() {
      let res = await getTodayInfo(this.cityName);
      this.todayWeatherInfo = this.$_.slice(res, 0, 4);
    },
    getIconImage(icon) {
      return setIconImage(icon);
    },
    getTodayDate() {
      const date = new Date();
      return `${date.getDate()} ${date.toLocaleString('en-En', {
        month: 'short',
      })}, ${date.getFullYear()}`;
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style scoped>
.card {
  display: block;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  background: var(--bg-default);
}
.card__title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.card__title h4 {
  font-size: 18px;
}
.card__title span {
  margin-left: auto;
  font-size: 15px;
}

.card__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 24px;
  margin: 20px 0 0;
}
.card__box {
  flex: 1 1 auto;
  padding: 12px 8px;
  text-align: center;
}
.card__box.active {
  border: 1px solid var(--txt-tertiary);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
}

.card__txt {
  margin-bottom: 16px;
}
.card__thumb {
  display: block;
  width: 100%;
  margin-bottom: 16px;
  aspect-ratio: 1/1;
}
.card__thumb img {
  display: block;
  width: 100%;
  object-fit: cover;
}
</style>
