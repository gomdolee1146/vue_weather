<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      query: '',
      weather: {},
    };
  },
  created() {
    document.title = 'Portfolio :: weather'
  }
}
</script>
