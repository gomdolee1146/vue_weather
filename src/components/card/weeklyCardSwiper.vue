<template>
  <div class="card">
    <div class="card__wrap">
      <swiper v-bind="swiperOptions">
        <swiper-slide v-for="item in 4" :key="item">
          <div class="card__box">
            <p class="card__txt">20℃</p>
            <div class="card__thumb"></div>
            <p class="card__txt">15:00</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'weeklyCard',
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    swiperList: [],
    swiperOptions: {
      navigation: true,
      slidesPerView: 5,
      spaceBetween: 10,
      centeredSlides: true,
    },
  }),
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.card {
  display: block;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  background: var(--bg-default);
}

.card__wrap {
  border:1px solid #c00;
}

</style>
