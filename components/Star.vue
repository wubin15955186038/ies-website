<template>
  <div class="star-box">
    <div class="difficulty" :style="{ width: `${width}px` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    difficulty: {
      type: Number,
      default: 0
    }
  },
  computed: {
    width() {
      return (this.$props.difficulty / 5) * 80
    }
  }
}
</script>

<style lang="scss" scoped>
.star-box {
  width: 80px;
  height: 15px;
  background: url(~/assets/imgs/questions/star-gray-icon.png) repeat-x;
  background-position: 0px 0px;

  .difficulty {
    width: 80px;
    height: 15px;
    background: url(~/assets/imgs/questions/star-icon.png) repeat-x;
    background-position: 0px 0px;
  }
}
</style>
