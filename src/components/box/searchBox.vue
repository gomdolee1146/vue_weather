<template>
  <div class="search">
    <ul class="search__list" v-if="isErrorType === 0">
      <li class="search__lst" v-for="(city, idx) in cityNameList" :key="idx">
        <router-link :to="{ name: 'detail', params: { city: city } }">
          <div class="search__box">
            <h4 class="search__title">{{ city }}</h4>
            <div class="search__icon"></div>
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

export default {
  name: 'searchBox',
  data() {
    return {
      test: [],
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
    getInfo() {
      if (this.cityNameList.length === 0) return;

      let weatherInfo = [];
      new Promise((resolve) => {
        this.$_.map(this.cityNameList, async (el) => {
          let res = await getWeatherInfo(el);
          weatherInfo.push(res)
          resolve(res);
        });
      })
      console.log(weatherInfo)
      // this.saveContent(weatherInfo)
    },
  },
  mounted() {},
  updated() {
    // console.log('gg', this.cityNameList);
    this.getInfo();
    this.$nextTick(() => {
   
    })
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
.search__rslt {
  width: 100%;
  padding: 24px 36px;
  box-sizing: border-box;
  text-align: center;
}
</style>
