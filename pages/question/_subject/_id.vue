<template>
  <div class="container">
    <div class="breadcrumb">
      <span>Home</span>
      <span>/</span>
      <span class="text-blue">Questions</span>
    </div>

    <div class="question-detail">
      <Star class="stars" :difficulty="question.difficultLevelValue"></Star>
      <div class="question-content" v-html="question.content"></div>
      <div class="statu-tag-line">
        <div class="tags">
          <div class="tag subject">{{ question.subjectName }}</div>
          <div class="tag level">{{ question.programName }}</div>
          <div class="tag exam-type">{{ question.examBoardName }}</div>
        </div>
        <div class="status-box">
          <span class="status exam-no">Exam No：{{ question.paperNumber }}</span>
          <span class="status year">Year：{{ question.year }}</span>
          <span class="status question-no">Question No：{{ question.number }}</span>
        </div>
      </div>
      <div class="v-line"></div>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title"><span class="collapse-title">Answer :</span></template>
          <div class="collapse-content" v-html="question.exampleAnswer"></div>
        </el-collapse-item>
      </el-collapse>
      <el-tabs>
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
        <el-tab-pane label="Analysis">
          <div class="analysis-content">
            <div v-for="item in question.syllabuses || []" :key="item.id">{{ item.remark }}</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="related-question">
      <div class="title">Related Question</div>
      <nuxt-link v-for="item in relatedQuestions" :key="item.id" :to="`/question/${item.subjectName.split(' ').join('_')}/${item.prefix}_${item.id}`" replace>
        <QuestionItem :question="item"></QuestionItem>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
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
      this.relatedQuestions = (res || []).map(item => {
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
.breadcrumb {
  height: 44px;
  line-height: 44px;
  margin: 20px 0;
  padding: 0 134px;
}
::v-deep .el-collapse {
  border-top: none;
  border-bottom: none;

  .el-collapse-item__header,
  .el-collapse-item__wrap {
    border-bottom: none;
  }

  .collapse-title {
    color: #4e4b4b;
    font-size: 22px;
    font-weight: 500;
  }
  .collapse-content {
    color: #333333;
    font-size: 16px;
    line-height: 30px;
    padding: 22px 31px;
    border-radius: 10px;
    background: #eef1f4;

    img.img-graphic {
      max-width: 100%;
      max-height: 100%;
    }
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
.question-detail {
  position: relative;
  width: 1150px;
  margin: 0 auto;
  padding: 64px 61px 73px;
  border-radius: 10px;
  background: #ffffff;

  .stars {
    position: absolute;
    top: 36px;
    left: 61px;
  }
  .question-content {
    color: #4e4b4b;
    font-size: 22px;
    line-height: 34px;
    font-weight: 500;
    padding-bottom: 24px;
  }
  .picture {
    position: relative;
    left: 50%;
    width: auto;
    height: auto;
    margin: 38px 0;
    transform: translateX(-50%);
  }
  .statu-tag-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .status-box {
      display: flex;
      gap: 30px;

      .status {
        position: relative;
        padding-left: 28px;
        line-height: 20px;
        font-size: 14px;
        color: #333333;

        &::before {
          content: '';
          position: absolute;
          left: 0px;
          top: 50%;
          width: 20px;
          height: 20px;
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
      gap: 10px;

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
  .v-line {
    margin: 49px -61px 32px;
    height: 1px;
    background: #e4e6ea;
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
  .analysis-content {
    color: #4e4b4b;
    font-size: 16px;
    line-height: 30px;
    padding: 30px 31px;
    border-radius: 10px;
    background: rgba(238, 241, 244, 0.7);
  }
}
.related-question {
  position: relative;
  width: 1150px;
  margin: 0 auto;

  .title {
    font-size: 22px;
    line-height: 32px;
    padding: 33px 0 12px;
  }
}
</style>
