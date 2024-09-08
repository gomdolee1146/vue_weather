<template>
  <div class="card">
    <div class="card__title">
      <h4>Next Forecast</h4>
    </div>
    <div class="card__wrap">
      <ul class="card__list">
        <li class="card__lst">
          <div class="card__box card__box-first">
            <div class="card__txt">요일</div>
            <div class="card__thumb">날씨</div>
            <div class="card__info">
              <p class="card__desc">기온</p>
            </div>
          </div>
        </li>
        <li class="card__lst" v-for="(weather, idx) in weeklyWeatherInfo" :key="idx">
          <div class="card__box">
            <div class="card__txt">{{ getWeekday(weather.dt) }}</div>
            <div class="card__thumb">
              <img :src="getIconImage(weather.weather[0].icon)" />
            </div>
            <div class="card__info">
              <!-- <p>{{ this.$_.round(weather.main.temp_max - 273, 0) }}℃</p> -->
              <p class="card__desc">
                {{ this.$_.round(weather.main.temp_min - 273, 0) }}℃
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getWeeklyInfo } from '@/api';
import { weekDay } from '@/data';
import { commonMixin } from '@/mixins/commonMixin';

export default {
  name: 'weeklyCard',
  mixins: [commonMixin],
  data() {
    return {
      weeklyWeatherInfo: [],
      weeklyDate: '',
    };
  },
  props: {
    cityName: { type: String, default: '' },
  },
  methods: {
    async getInfo() {
      let res = await getWeeklyInfo(this.cityName);
      let num = [0, 8, 16, 24, 32]; // 주간 날씨 - 0시 기준 날씨를 출력하기 위한 숫자.
      num.forEach((el) => {
        this.weeklyWeatherInfo.push(this.$_.nth(res, el));
      });
    },
    getWeekday(txt) {
      let day = new Date(txt * 1000).getDay();
      let weekday = weekDay[day];
      return weekday;
    },
    getIconImage(icon) {
      return this.setIconImage(icon);
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

.card__box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 32px 16px;
  font-size: 20px;
}
.card__box-first {
  font-size: 16px;
}

.card__box-first .card__thumb {
  width: max-content;
  height: inherit;
}
.card__thumb {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
}
.card__thumb img {
  display: block;
  width: 100%;
  height: 100%;
}

.card__info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.card__info p {
  min-width: 52px;
  padding: 0 4px;
}
.card__desc {
  color: var(--txt-secondary);
  text-align: right;
}
</style>
