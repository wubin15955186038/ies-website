<template>
  <div class="mobile-wrap">
    <div class="mobile-header">
      <img src="@/assets/imgs/questions-mobile/logo.png" />
      <span class="back-icon"></span>
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
        <div class="answer-box">
          <div class="title">Answer:</div>
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
        <div class="solution-btn">Solution</div>

        <!-- <el-collapse accordion>
          <el-collapse-item>
            <template slot="title"><span class="collapse-title">Answer :</span></template>
            <div class="collapse-content" v-latex="question.exampleAnswer"></div>
          </el-collapse-item>
        </el-collapse> -->

        <!-- <el-tabs>
          <el-tab-pane label="Solution">
            <div class="solution-content">
              <div class="desc">Download APP for more features</div>
              <div class="desc-1">1. Tons of answers.</div>
              <div class="desc-1">2. Smarter Al tools enhance your learning journey.</div>
              <div class="download-box">
                <div class="download-app ios" @click="onHandleDownloadApp('ios')">IOS<br />Download</div>
                <div class="download-app android" @click="onHandleDownloadApp('android')">Android<br />Download</div>
                <div class="download-app google" @click="onHandleDownloadApp('google')">Google Play<br />Download</div>
              </div>
              <div class="inner-qrcode"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Analysis"> </el-tab-pane>
        </el-tabs> -->
      </div>
      <div class="related-question">
        <div class="title">Related Question</div>
        <nuxt-link v-for="item in relatedQuestions" :key="item.id" :to="`/question/${item.subjectName.split(' ').join('_')}/${item.prefix}_${item.id}`" replace>
          <QuestionItemMobile :question="item" />
        </nuxt-link>
      </div>
      <div class="mobile-footer">@2024 All As ALPHA INTERNATIONAL AI EDTECH PTE. LTD</div>
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
      androidLink: ''
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
      let link = ''
      switch (type) {
        case 'ios':
          link = this.config.iosLink
          break
        case 'android':
          link = this.androidLink
          break
        case 'google':
          link = this.config.googleLink
          break
      }
      window.open(link, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .question-detail2 {
  img.img-graphic {
    max-width: 100%;
    max-height: 100%;
  }
}
::v-deep .el-tabs__nav-wrap {
  &::after {
    display: none;
  }
  .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
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
    height: calc(100% - 44px);

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

      .solution-content {
        position: relative;
        padding: 82px 377px 69px 67px;
        background: rgba(51, 51, 51, 0.7);

        .desc {
          font-size: 36px;
          line-height: 36px;
          color: #ffffff;
          padding-bottom: 30px;
        }
        .desc-1 {
          font-size: 22px;
          line-height: 30px;
          color: #ffffff;
        }
        .download-box {
          padding: 30px 14px 0 14px;
          display: flex;
          gap: 69px;

          .download-app {
            position: relative;
            height: 108px;
            padding-top: 68px;
            color: #c6c6c6;
            font-size: 14px;
            text-align: center;
            line-height: 20px;
            cursor: pointer;

            &::before {
              content: '';
              position: absolute;
              left: 50%;
              top: 10px;
              width: 40px;
              height: 40px;
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
        .inner-qrcode {
          position: absolute;
          top: 94px;
          right: 73px;
          width: 220px;
          height: 220px;
          border-radius: 10px;
          background: url(~/assets/imgs/qrcode.png) no-repeat;
          background-size: 100% 100%;
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

        .title {
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
}
</style>
