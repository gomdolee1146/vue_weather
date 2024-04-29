<template>
  <default-header :isShowSearch="false"></default-header>
  <transition name="fade">
    <div class="content" v-if="show">
      <weather-card :cityName="cityName" isShowBrief></weather-card>
      <today-card :cityName="cityName"></today-card>
      <weekly-card :cityName="cityName"></weekly-card>
    </div>
  </transition>
</template>

<script>
import defaultHeader from '@/components/header/defaultHeader.vue';
import weatherCard from '@/components/card/weatherCard.vue';
import todayCard from '@/components/card/todayCard.vue';
import weeklyCard from '@/components/card/weeklyCard.vue';

export default {
  name: 'detailView',
  components: { defaultHeader, todayCard, weeklyCard, weatherCard },
  data() {
    return {
      cityName: this.$route.params.city,
      show: false,
    };
  },
  mounted() {
    this.show = true;
    document.body.style.overflow = 'visible'
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 16px;
}
</style>
