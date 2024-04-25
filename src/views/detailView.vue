<template>
  <default-header></default-header>

  <div class="content">
    <weather-card :cityName="cityName" isShowBrief></weather-card>
    <today-card :cityName="cityName"></today-card>
    <weekly-card></weekly-card>
  </div>
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
      cityName : this.$route.params.city
    }
  },
  mounted(){
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 16px;
}
</style>
