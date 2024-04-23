<template>
  <default-header></default-header>
  <div class="content">
    <weather-card></weather-card>
  </div>
</template>

<script>
import defaultHeader from '@/components/header/defaultHeader.vue';
import weatherCard from '@/components/card/weatherCard.vue';

export default {
  name: 'mainView',
  components: { defaultHeader, weatherCard },
};
</script>
