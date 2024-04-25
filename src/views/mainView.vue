<template>
  <default-header></default-header>
  <div class="content">
    <ul class="main__list">
      <li class="main__lst" v-for="(city, idx) in cityList" :key="idx">
        <router-link :to="{ name: 'detail', params: {city: city} }">
          <weather-card :cityName="city"></weather-card>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import defaultHeader from '@/components/header/defaultHeader.vue';
import weatherCard from '@/components/card/weatherCard.vue';

import { localName } from '@/data';


export default {
  name: 'mainView',
  data() {
    return {
      cityList: [],
    };
  },
  components: { defaultHeader, weatherCard },
  methods: {
    shuffleCityName() {
      this.cityList = this.$_.shuffle(localName);
    },
  },
  mounted() {
    this.shuffleCityName();
  },
};
</script>
