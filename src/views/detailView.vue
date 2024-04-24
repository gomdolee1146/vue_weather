<template>
  <default-header></default-header>
  <div class="content">
    <brief-card></brief-card>
    <today-card></today-card>
    <weekly-card></weekly-card>
  </div>
</template>

<script>
import defaultHeader from '@/components/header/defaultHeader.vue';
import briefCard from '@/components/card/briefCard.vue';
import todayCard from '@/components/card/todayCard.vue';
import weeklyCard from '@/components/card/weeklyCard.vue';

export default {
  name: 'detailView',
  components: { defaultHeader, todayCard, weeklyCard, briefCard },
};
</script>

<style scoped>
.card {
  margin-bottom: 16px;
}
</style>
