<template>
  <div class="card">
    <div class="card__title">
      <h4>Next Forecast</h4>
      <span>아마아이콘</span>
    </div>
    <div class="card__wrap">
      <ul class="card__list">
        <li class="card__lst">
          <div class="card__box">
            <div class="card__txt">Monday</div>
            <div class="card__thumb"></div>
            <div class="card__info">
              <p>13℃</p>
              <p class="card__desc">10℃</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weeklyCard',

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
}

.card__box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 32px 16px;
}
.card__thumb {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #0c0;
  transform: translate(-50%, -50%);
}

.card__info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.card__info p {
  padding: 0 4px;
}
.card__desc {
  color: var(--txt-secondary);
}
</style>
