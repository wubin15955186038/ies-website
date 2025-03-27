<template>
  <div class="questions-item">
    <Star class="stars" :difficulty="question.difficultLevelValue"></Star>
    <div class="content ellipsis">
      {{ question.contentIntro }}
    </div>
    <div class="tags">
      <div class="tag subject">{{ question.subjectName }}</div>
      <div class="tag level">{{ question.programName }}</div>
      <div class="tag exam-type">{{ question.examBoardName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制文本为2行 */
  overflow: hidden;
  text-overflow: ellipsis;
}
.questions-item {
  position: relative;
  padding: 70px 25px 96px;
  margin-bottom: 24px;
  border-radius: 10px;
  border: 1px solid #e4e6ea;
  background: #ffffff;
  cursor: pointer;

  .stars {
    position: absolute;
    top: 44px;
    left: 25px;
  }
  .content {
    font-size: 18px;
    font-weight: 500;
    color: #4e4b4b;
    line-height: 34px;
  }
  .tags {
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 41px;
    left: 25px;

    .tag {
      padding: 0 10px;
      border-radius: 15px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      cursor: default;

      &.subject {
        color: #006fb7;
        background: #d9eaf4;
      }
      &.level {
        color: #087732;
        background: #dcfce7;
      }
      &.exam-type {
        color: #7715cb;
        background: #f3e8ff;
      }
    }
  }
}
</style>
