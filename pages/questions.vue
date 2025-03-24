<template>
  <div v-show="display" class="explanation">
    <div v-if="!topicId" class="topic">{{ topic }}</div>
    <div v-else v-latex="topic" class="topic"></div>
    <div v-for="(elem, index) of explanationStep" :key="index" class="setp-box">
      <div class="step" :class="index + 1 > currentStep ? 'not-achieved' : ''">
        <div class="step-desc">{{ index + 1 + '. ' + elem.description }}</div>
        <!-- 对话框 -->
        <div v-show="elem.options.length" class="step-process">
          <div v-for="dialog of elem.options" :key="dialog.name" :class="dialog.type === 0 ? 'YOU' : 'ALL-AS'">
            <div class="name">{{ dialog.type === 0 ? 'YOU' : 'All As' }}</div>
            <div class="content">{{ dialog.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="download" @click="download">
      <img src="@/assets/imgs/appstore.png" />
      <img src="@/assets/imgs/googleplay.png" />
    </div>
  </div>
</template>
<script>
import mathjax from '../plugins/mathjax'
import latex from '../plugins/latex'
export default {
  directives: {
    latex
  },
  layout: 'mobileLayout',
  data() {
    return {
      isShare: false,
      topic: '',
      display: false,
      id: '',
      currentStep: 1,
      explanationStep: [],
      lang_variable: {},
      recordId: '',
      headData: {
        title: '',
        describe: '',
        keyword: ''
      }
    }
  },
  head() {
    return {
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.describe },
        { hid: 'keywords', name: 'keywords', content: this.headData.keyword }
      ]
    }
  },
  created() {
    this.id = this.$route.query.id
    this.topicId = this.$route.query.topicId
  },

  async mounted() {
    this.display = true
    await mathjax.load()
    this.getQuestion()
  },
  methods: {
    download() {
      console.log(this.$route)
      this.$router.push({ path: '/download?from=questions' })
    },
    async getShareAnalysis(id) {
      try {
        const res = await this.$api.getShareAnalysis(id)
        this.topic = res.content
      } catch (error) {
        console.log(error)
      }
    },
    async getQuestion() {
      try {
        const res = await this.$api.gptShareGetById(this.id)
        if (!this.topicId) {
          this.topic = res.question
          this.$nextTick(() => {
            mathjax.render()
          })
        } else {
          this.getShareAnalysis(this.topicId)
        }
        this.headData = {
          title: res.title,
          describe: res.describe,
          keyword: res.keyword
        }
        this.explanationStep = res.steps.map((elem) => {
          elem.description = elem.description.replace(/\\\\\\\\|\\\\/g, '\\')
          elem.options.forEach((e) => {
            e.name = e.name.replace(/\\\\\\\\|\\\\/g, '\\')
          })
          return elem
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style></style>
<style lang="scss" scoped>
/deep/ .topic img {
  width: 100% !important;
}
.step-top {
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px;
  background-color: #fff;
  font-weight: 500;
  color: #333333;
  line-height: 22px;
  text-align: center;
  padding: 10px 0;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.uni-list-radio {
  transform: scale(0.5);
}

.uni-list-cell {
  border: 1px solid #4d87e8;
  border-radius: 5px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  color: #333;
  padding: 8px 6px;
  font-size: 16px;
  div {
    word-break: break-all;
  }
  &-disabled {
    background-color: #d7d7d7;
  }
}

.explanation {
  background-color: #fff;
  font-size: 14px;
  padding-bottom: 14px;
  overflow-y: auto;
  overflow-x: hidden;
  .own-name {
    color: #036db7;
    font-weight: bold;
    margin-left: 12px;
  }

  .topic {
    padding: 16px;
    white-space: pre-line;
  }

  .step {
    margin-bottom: 12px;
    overflow: hidden;
    color: #fff;
    border-radius: 10px;
    &-title {
      display: flex;
      align-items: center;

      .index {
        width: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        background-color: #036db7;
      }
    }

    &-desc {
      background-color: #4d87e8;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
      padding: 13px 15px;
    }

    &-process {
      border-radius: 0 0 5px 5px;
      background-color: #3a5b92;
      padding: 12px;
    }

    .YOU,
    .ALL-AS {
      margin-bottom: 12px;
    }

    .YOU .name {
      line-height: 30px;
      font-weight: bold;
      color: #d8d8d8;
    }

    .ALL-AS .name {
      line-height: 30px;
      font-weight: bold;
      color: #ffa100;
    }
  }

  .step-button {
    margin-bottom: 12px;
    color: #036db7;
    font-size: 12px;
    .btn {
      display: flex;
    }

    .btn-item {
      border-radius: 5px;
      margin-right: 8px;
      padding: 8px 12px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
    .radio {
      .back {
        text-align: center;
        padding: 6px 0;
        margin-bottom: 6px;
        display: flex;
        justify-content: space-between;
        .back-btn {
          background-color: #0d8d5c;
        }
        .next-btn {
          background-color: #e34d59;
        }
        button {
          color: #fff;
          width: 170px;
          line-height: 40px;
          font-size: 16px;
        }
      }
    }
  }
}

.not-achieved {
  background-color: #3a5b92 !important;
}
.loading {
  width: 100px;
  margin: 0 auto 32px;
}

.setp-box {
  padding: 0 15px;
}

.point2 {
  display: flex;
  justify-content: space-around;
}

.point2-item {
  height: 12px;
  width: 12px;
  background: #036db7;
  border-radius: 100%;
  animation: point2 1.2s infinite ease-in-out;
}

@keyframes point2 {
  0% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(0.1);
  }

  100% {
    transform: scale(1.2);
  }
}
.point2-item:nth-child(1) {
  animation-delay: -1s;
}

.point2-item:nth-child(2) {
  animation-delay: -0.8s;
}

.point2-item:nth-child(3) {
  animation-delay: -0.6s;
}
.shareBtn {
  line-height: 80px;
  background-color: #0086e4;
  color: #fff;
  width: 600px;
}
.download {
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    height: 40px;
  }
}
</style>
