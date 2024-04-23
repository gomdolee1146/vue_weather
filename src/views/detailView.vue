<template>
  <default-header></default-header>
  <div class="content">
    <today-card></today-card>
  </div>
</template>

<script>
import defaultHeader from '@/components/header/defaultHeader.vue';
import todayCard from '@/components/card/todayCard.vue';

export default {
  name: 'detailView',
  components: { defaultHeader, todayCard },
};
</script>

<style scoped>

</style>
