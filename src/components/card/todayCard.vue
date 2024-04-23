<template>
  <div class="card">
    <div class="card__title">
      <h4>Today</h4>
      <span>3 Mar, 2024</span>
    </div>
    <div class="card__wrap">
      <div
        class="card__box"
        v-for="(item, idx) in 4"
        :key="idx"
        :class="{ active: idx === 2 }"
      >
        <p class="card__txt">20℃</p>
        <div class="card__thumb"></div>
        <p class="card__txt">15:00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todayCard',
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
.card__title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.card__title h4 {
  font-size: 18px;
}
.card__title span {
  margin-left: auto;
  font-size: 15px;
}

.card__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 24px;
  margin: 20px 0 0;
}
.card__box {
  flex: 1 1 auto;
  padding: 12px 8px;
  text-align: center;
}
.card__box.active {
  border: 1px solid var(--txt-tertiary);
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
}

.card__txt {
  margin-bottom: 16px;
}
.card__thumb {
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid #fff;
  aspect-ratio: 1/1;
}
</style>
