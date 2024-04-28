<template>
  <div class="search">
    <ul class="search__list" v-if="isErrorType === 0">
      <li class="search__lst">
        <div class="search__box">
          <!-- <h4 class="search__title">{{ weather }}</h4> -->
          <div class="search__icon"></div>
        </div>
      </li>
    </ul>
    <div class="search__rslt" v-else>
      <p>{{ getRsltTxt() }}</p>
    </div>
  </div>
</template>

<script>
// import { getWeatherInfo } from '@/api';

export default {
  name: 'searchBox',
  data() {
    return {
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
    // getInfo() {
    //   if (this.cityNameList.length === 0) return;
    //   this.weatherInfo = this.cityNameList.forEach(async (el) => {
    //     await getWeatherInfo(el);
    //   });
    //   console.log(this.weatherInfo)
    //   // this.weatherInfo = await this.$_.map(this.cityNameList, getWeatherInfo())
    //   // return this.weatherInfo
    // },
  },
  mounted() {
    console.log('gg', this.cityNameList);
    // this.getInfo();
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

.search__list {
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
  border: 1px solid #fff;
  transform: translateY(-50%);
}
.search__rslt {
  width: 100%;
  padding: 24px 36px;
  box-sizing: border-box;
  text-align: center;
}
</style>
