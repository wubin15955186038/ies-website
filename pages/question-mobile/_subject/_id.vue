<template>
  <div class="mobile-wrap">
    <div class="mobile-header">
      <img src="@/assets/imgs/questions-mobile/logo.png" />
      <span class="back-icon" @click="$router.back()"></span>
    </div>

    <div class="mobile-body">
      <div class="question-detail">
        <StarMobile class="stars" :difficulty="question.difficultLevelValue" />
        <div class="question-content" v-latex="question.content"></div>
        <div class="status-box">
          <span class="status exam-no">Exam No：{{ question.paperNumber }}</span>
          <span class="status year">Year：{{ question.year }}</span>
          <span class="status question-no">Question No：{{ question.number }}</span>
        </div>
        <div class="tags">
          <div class="tag subject">{{ question.subjectName }}</div>
          <div class="tag level">{{ question.programName }}</div>
          <div class="tag exam-type">{{ question.examBoardName }}</div>
        </div>
      </div>
      <div class="question-detail2">
        <div :class="['answer-box', answerContentVisible && 'open']">
          <div class="title" @click="answerContentVisible = !answerContentVisible">Answer:</div>
          <div class="content">
            <div v-latex="question.exampleAnswer"></div>
          </div>
        </div>
        <div class="v-line"></div>
        <div class="analysis-box">
          <div class="title">Analysis:</div>
          <div class="content">
            <div v-for="item in question.syllabuses || []" :key="item.id">{{ item.remark }}</div>
          </div>
        </div>
        <div class="solution-btn" @click="solutionModalVisible = true">Solution</div>
      </div>
      <div class="related-question">
        <div class="title">Related Question</div>
        <nuxt-link v-for="item in relatedQuestions" :key="item.id" :to="`/question-mobile/${item.subjectName.split(' ').join('_')}/${item.prefix}_${item.id}`" replace>
          <QuestionItemMobile :question="item" />
        </nuxt-link>
      </div>
      <div class="mobile-footer">@2024 All As ALPHA INTERNATIONAL AI EDTECH PTE. LTD</div>
    </div>
    <div class="solution-modal" v-show="solutionModalVisible">
      <div class="mask"></div>
      <div class="content">
        <div class="desc">Download APP for more features</div>
        <div class="desc-1">1. Tons of answers.</div>
        <div class="desc-1">2. Smarter Al tools enhance your learning journey.</div>
        <div class="inner-qrcode"></div>
        <div class="download-box">
          <div class="download-app ios" @click="onHandleDownloadApp('ios')">
            <div>IOS</div>
            <div>Download</div>
          </div>
          <div class="download-app android" @click="onHandleDownloadApp('android')">
            <div>Android</div>
            <div>Download</div>
          </div>
          <div class="download-app google" @click="onHandleDownloadApp('google')">
            <div>Google Play</div>
            <div>Download</div>
          </div>
        </div>
        <div class="close-btn" @click="solutionModalVisible = false"></div>
      </div>
    </div>
  </div>
</template>

<script>
import latex from '../../../plugins/latex'
export default {
  layout: 'mobileLayout',
  directives: {
    latex
  },
  data() {
    return {
      headTitle: 'Question Detail',
      question: {},
      relatedQuestions: [],
      androidLink: '',
      answerContentVisible: false,
      solutionModalVisible: false
    }
  },
  created() {
    const adons = this.$route.params.id.split('_')
    const id = adons.pop()
    this.getQuestionDetail(id)
    this.getRelatedQuestions(id)
    this.getLatestClientVersion()
  },
  head() {
    return {
      title: `${this.headTitle} - All As`,
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'tutors,one-to-one,All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'question-detail',
          name: 'description',
          content: 'Find your perfect subject tutor and join our All As online classroom. Then book one-to-one online lessons to fit your schedule.'
        }
      ]
    }
  },
  methods: {
    async getQuestionDetail(id) {
      const res = await this.$api.getQuestionDetail(id)
      this.question = res || {}
    },
    async getRelatedQuestions(id) {
      const res = await this.$api.getRelatedQuestions(id)
      this.relatedQuestions = (res || []).map((item) => {
        // 题目内容前4个单词：列表接口拼接好作为一个描述字段，每个单词下划线拼接
        const prefix = item.contentIntro.split(' ').slice(0, 4).join('_')
        return {
          ...item,
          prefix
        }
      })
    },
    async getLatestClientVersion() {
      const res = await this.$api.getLatestClientVersion()
      this.androidLink = (res || []).find((item) => item.client === 'android')?.url
    },
    onHandleDownloadApp(type) {
      this.$router.push({ path: '/download' })
      // let link = ''
      // switch (type) {
      //   case 'ios':
      //     link = this.config.iosLink
      //     break
      //   case 'android':
      //     link = this.androidLink
      //     break
      //   case 'google':
      //     link = this.config.googleLink
      //     break
      // }
      // window.open(link, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .question-detail2 {
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
::v-deep .question-content {
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.mobile-wrap {
  position: relative;
  height: 100vh;
  background: #eef1f4;
  padding-top: 44px;

  .mobile-header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    padding-left: 44px;
    background: #fff;
    border-bottom: 1px solid #e4e6ea;

    .back-icon {
      position: absolute;
      top: 0;
      left: 0;
      height: 44px;
      width: 44px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 20px;
        height: 24px;
        width: 24px;
        margin-top: -12px;
        background: url(~/assets/imgs/questions-mobile/back-icon.png) no-repeat;
        background-size: 100% 100%;
      }
    }
    img {
      display: inline-block;
      width: 85px;
      height: 30px;
    }
  }

  .mobile-body {
    height: 100%;
    overflow: auto;

    .question-detail {
      position: relative;
      padding: 52px 20px 19px;
      margin-bottom: 10px;
      background: #ffffff;

      .stars {
        position: absolute;
        top: 25px;
        left: 20px;
      }
      .question-content {
        color: #4e4b4b;
        font-size: 17px;
        line-height: 30px;
        font-weight: 500;
        padding-bottom: 28px;
      }
      .status-box {
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;

        .status {
          position: relative;
          padding-left: 18px;
          line-height: 16px;
          font-size: 12px;
          color: #333333;

          &::before {
            content: '';
            position: absolute;
            left: 0px;
            top: 50%;
            width: 15px;
            height: 15px;
            transform: translateY(-50%);
          }
          &.exam-no::before {
            background: url(~/assets/imgs/questions/exam-num-icon.png) no-repeat;
            background-size: 100% 100%;
          }
          &.year::before {
            background: url(~/assets/imgs/questions/time-icon.png) no-repeat;
            background-size: 100% 100%;
          }
          &.question-no::before {
            background: url(~/assets/imgs/questions/question-num-icon.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .tags {
        display: flex;
        gap: 5px;

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
    .question-detail2 {
      position: relative;
      padding: 0 20px 15px;
      margin-bottom: 25px;
      background: #ffffff;

      .v-line {
        margin: 0 -20px;
        height: 1px;
        background: #e4e6ea;
      }
      .answer-box,
      .analysis-box {
        padding: 16px 0 20px;

        &.answer-box {
          transition: height 0.3s linear;

          &.open {
            .title::after {
              transform: rotateZ(0deg);
            }
            .content {
              display: block;
            }
          }
          .title::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            width: 16px;
            height: 18px;
            margin-top: -9px;
            transform: rotateZ(-90deg);
            background: url(~/assets/imgs/questions-mobile/arrow-icon.png) no-repeat;
            background-size: 100% 100%;
          }
          .content {
            display: none;
          }
        }
        .title {
          position: relative;
          color: #4e4b4b;
          font-size: 17px;
          font-weight: 500;
          line-height: 25px;
        }
        .content {
          color: #333333;
          font-size: 13px;
          line-height: 25px;
          padding: 11px 16px;
          border-radius: 10px;
          background: #eef1f4;
        }
      }
      .solution-btn {
        width: 150px;
        height: 35px;
        line-height: 35px;
        font-size: 15px;
        color: #ffffff;
        text-align: center;
        margin: 0 auto;
        border-radius: 35px;
        background: #006fb7;
      }
    }
    .related-question {
      .title {
        font-size: 15px;
        line-height: 22px;
        padding: 0 20px 7px;
      }
    }
    .mobile-footer {
      line-height: 44px;
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
    }
  }

  .solution-modal {
    .mask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    .content {
      position: fixed;
      top: 50%;
      left: 20px;
      right: 20px;
      transform: translateY(-50%);
      padding: 42px 23px 40px;
      border-radius: 20px;
      background: #ffffff;

      .desc {
        color: #006fb7;
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 18px;
      }
      .desc-1 {
        color: #4e4b4b;
        font-size: 13px;
        line-height: 22px;
      }
      .inner-qrcode {
        position: relative;
        width: 165px;
        height: 165px;
        margin: 35px auto 32px;
        border-radius: 5px;
        background: #e4e6ea;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 152px;
          height: 152px;
          transform: translate(-50%, -50%);
          border-radius: 5px;
          background: url(~/assets/imgs/qrcode.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      .download-box {
        display: flex;
        justify-content: space-evenly;
        gap: 20px;

        .download-app {
          position: relative;
          height: 68px;
          padding-top: 40px;
          color: #999999;
          font-size: 12px;
          text-align: center;
          line-height: 14px;
          white-space: nowrap;
          cursor: pointer;

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 5px;
            width: 25px;
            height: 25px;
            transform: translateX(-50%);
          }
          &.ios::before {
            background: url(~/assets/imgs/questions/ios-icon.png) no-repeat;
            background-size: 100% 100%;
          }
          &.android::before {
            background: url(~/assets/imgs/questions/android-icon.png) no-repeat;
            background-size: 100% 100%;
          }
          &.google::before {
            background: url(~/assets/imgs/questions/google-icon.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .close-btn {
        position: absolute;
        bottom: -53px;
        left: 50%;
        width: 45px;
        height: 45px;
        margin-left: -22.5px;
        background: url(~/assets/imgs/questions-mobile/close-icon.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
