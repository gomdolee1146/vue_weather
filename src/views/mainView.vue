<template>
  <default-header></default-header>
  <div class="content">
    <transition-group
      name="slide-down"
      tag="ul"
      class="main__list"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
    >
      <li class="main__lst" v-for="(city, idx) in cityList" :key="idx" :data-index="idx">
        <router-link :to="{ name: 'detail', params: { city: city } }">
          <weather-card :cityName="city"></weather-card>
        </router-link>
      </li>
    </transition-group>
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
    beforeEnter(el) {
      el.style.transitionDelay = 200 * parseInt(el.dataset.index, 10) + 'ms';
    },
    afterEnter(el) {
      el.style.transitionDelay = '';
    },
  },
  mounted() {
    this.shuffleCityName();
  },
};
</script>
