<template>
  <div class="search">
    <ul class="search__list" v-if="isErrorType === 0">
      <li class="search__lst" v-for="(city, idx) in weatherInfo" :key="idx">
        <router-link :to="{ name: 'detail', params: { city: city.name } }">
          <div class="search__box">
            <h4 class="search__title">{{ city.name }}</h4>
            <div class="search__icon">
              <img :src="getIconImage(city.weather[0].icon)" />
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="search__rslt" v-else>
      <p>{{ getRsltTxt() }}</p>
    </div>
  </div>
</template>

<script>
import { getWeatherInfo } from '@/api';
import { setIconImage } from '@/mixins';

export default {
  name: 'searchBox',
  data() {
    return {
      test: [],
      weatherInfo: [],
    };
  },
  props: {
    cityNameList: { type: Array, default: () => [] },
    isErrorType: { type: Number, default: 0 },
  },
  methods: {
    getRsltTxt() {
      switch (this.isErrorType) {
        case 1:
          return '영문명으로 입력해주세요.';
        case 2:
          return '지역명을 입력해주세요.';
        default:
          break;
      }
    },
    getIconImage(icon) {
      return setIconImage(icon);
    },
  },
  mounted() {},
  watch: {
    cityNameList: {
      deep: true,
      handler() {
        if (this.cityNameList.length === 0) return;

        new Promise((resolve) => {
          this.$_.map(this.cityNameList, async (el) => {
            let res = await getWeatherInfo(el);
            this.weatherInfo.push(res);
            resolve(res);
          });
        });
      },
    },
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
  padding: 12px 0;
  border-radius: 24px;
  background: var(--bg-secondary);
  box-sizing: border-box;
}

.search__lst {
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid var(--txt-tertiary);
  box-sizing: border-box;
}
.search__lst:last-child {
  border-bottom: 0 none;
}
.search__box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 24px;
}
.search__title {
  font-size: 20px;
}
.search__icon {
  position: absolute;
  top: 50%;
  right: 24px;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
}
.search__icon img {
  display: block;
  width: 100%;
  height: 100%;
}
.search__rslt {
  width: 100%;
  padding: 24px 36px;
  box-sizing: border-box;
  text-align: center;
}
</style>
