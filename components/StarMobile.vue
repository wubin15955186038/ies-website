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
      return (this.$props.difficulty / 5) * 115
    }
  }
}
</script>

<style lang="scss" scoped>
.star-box {
  width: 115px;
  height: 22px;
  background: url(~/assets/imgs/questions-mobile/star-gray-icon.png) repeat-x;
  background-position: 0px 0px;
  transform: scale(0.5) translate(-50%, -50%);

  .difficulty {
    width: 115px;
    height: 22px;
    background: url(~/assets/imgs/questions-mobile/star-icon.png) repeat-x;
    background-position: 0px 0px;
  }
}
</style>
