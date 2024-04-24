<template>
  <div class="card">
    <div class="card__thumb"></div>
    <div class="card__wrap">
      <div class="card__txt">
        <h4 class="card__title">
          <b>{{ cityName }}</b> 20℃
        </h4>
        <p class="card__desc">wind speed 11.5km/h</p>
        <p class="card__info">Cloudy</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getLocalInfo } from '@/data/localList';

export default {
  name: 'weatherCard',
  data() {
    return {
      baseURL: '',
      lat: '',
      lon: '',
    };
  },
  props: {
    cityName: { type: String, default: '' },
  },
  methods: {
    showWeather() {
    },
    async getInfo() {
      console.log(0)
      const res = await getLocalInfo(this.cityName);
      console.log(1)
      this.lat = res.lat;
      this.lon = res.lon;
      // console.log('methods:', this.lat)
    }
  },
  mounted() {
    console.log(2)
    this.getInfo()
    console.log(3)

      // console.log('mounted:', this.lat)
    this.showWeather()
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  padding: 80px 0 0;
  border: 1px solid #c00;
}
.card__thumb {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 80px;
  width: 40%;
  max-width: 160px;
  border: 1px solid blue;
  aspect-ratio: 1/1;
  z-index: 1;
}

.card__wrap {
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  background: var(--bg-default);
}
.card__title {
  margin-bottom: 4px;
  font-size: 24px;
}

.card__desc {
  font-size: 18px;
}

.card__info {
  font-size: 18px;
  color: var(--txt-secondary);
}
</style>
