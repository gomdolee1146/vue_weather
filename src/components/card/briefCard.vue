<template>
  <div class="card">
    <div class="card__title"><h4>GWANGJU</h4></div>
    <div class="card__thumb"></div>
    <div class="card__txt">20℃</div>
    <div class="card__box">
      <p>Precipitations</p>
      <p>Max: 31℃&nbsp;&nbsp;Min: 25℃</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'briefCard',
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.card__title {
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
}
.card__title h4 {
  font-size: 20px;
  font-weight: 700;
}

.card__thumb {
  display: block;
  width: 150px;
  height: 150px;
  margin-bottom: 16px;
  border: 1px solid #c00;
}
.card__box p {
  margin-bottom: 16px;
}
</style>
