<template>
  <div class="star-box">
    <div class="score"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.star-box {
  position: relative;
  width: 85px;
  height: 17px;
  background: url(~/assets/imgs/questions/star-gray-icon.png) repeat-x;
  background-position: 0px 0px;

  .score {
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: 16px;
    background: url(~/assets/imgs/questions/star-icon.png) repeat-x;
  }
}
</style>
