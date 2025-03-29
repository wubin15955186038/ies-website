<template>
  <div class="questions-item">
    <StarMobile class="stars" :difficulty="question.difficultLevelValue"></StarMobile>
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
  padding: 53px 20px 65px;
  margin-bottom: 10px;
  background: #ffffff;
  cursor: pointer;

  .stars {
    position: absolute;
    top: 25px;
    left: 20px;
  }
  .content {
    font-size: 14px;
    font-weight: 500;
    color: #4e4b4b;
    line-height: 20px;
  }
  .tags {
    display: flex;
    gap: 5px;
    position: absolute;
    bottom: 17px;
    left: 20px;

    .tag {
      padding: 0 15px;
      border-radius: 15px;
      height: 25px;
      line-height: 25px;
      font-size: 12px;
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
