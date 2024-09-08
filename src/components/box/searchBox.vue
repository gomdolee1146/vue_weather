<template>
  <div class="search">
    <div class="search__rslt" v-if="errorType !== 'none'">
      <p>{{ getRsltTxt() }}</p>
    </div>
    <ul class="search__list" v-else>
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
  </div>
</template>

<script>
import { getWeatherInfo } from '@/api';
import { commonMixin } from '@/mixins/commonMixin';

export default {
  name: 'searchBox',
  mixins: [commonMixin],
  data() {
    return {
      weatherInfo: [],
    };
  },
  props: {
    inputTxt: { type: String, default: '' },
    cityNameList: { type: Array, default: () => [] },
    errorType: { type: String, default: 'default' },
  },
  methods: {
    getRsltTxt() {
      const errorTxt = {
        default: '검색어를 입력해주세요.',
        eng: '영문명으로 입력해주세요.',
        city: '지역명을 입력해주세요.',
        none: '검색결과가 없습니다.',
      };

      if (this.inputTxt === '') {
        console.log('입력 x')
        return errorTxt.default;
      } else if (this.cityNameList === null && this.inputTxt !== '') {
        console.log('입력 o, 결과 x')
        console.log(this.cityNameList)
        return errorTxt.none;
      } else {
        console.log('??')
        return errorTxt[this.errorType];
      }
    },
    getIconImage(icon) {
      return this.setIconImage(icon);
    },
  },
  mounted() {},
  watch: {
    cityNameList: {
      // 입력된 도시 이름 변경시에 도시명 출력하기
      deep: true,
      handler() {
        if (this.cityNameList.length === 0) {
          this.weatherInfo = [];
        } else {
          new Promise((resolve) => {
            this.$_.map(this.cityNameList, async (el) => {
              let res = await getWeatherInfo(el);
              this.weatherInfo.push(res);
              resolve(res);
            });
          });
        }
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
