<template>
  <default-header></default-header>
  <div class="content">
    <ul class="main__list">
      <li class="main__lst" v-for="(name, idx) in cityList" :key="idx">
        <weather-card :cityName="name"></weather-card>
      </li>
    </ul>
  </div>
</template>

<script>
import defaultHeader from '@/components/header/defaultHeader.vue';
import weatherCard from '@/components/card/weatherCard.vue';

import { localName } from '@/data/localList';
// import { fetchWeather } from '@/api';

export default {
  name: 'mainView',
  data() {
    return {
      cityList: []
    };
  },
  components: { defaultHeader, weatherCard },
  methods: {
    shuffleCityName() {
      this.cityList = this.$_.shuffle(localName)
    },
  },
  mounted() {
    this.shuffleCityName()
  },
};
</script>
