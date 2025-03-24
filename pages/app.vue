<template>
  <section class="container">
    <div class="banner">
      <div class="width-1200 flex">
        <img class="banner-img" src="@/assets/imgs/app-banner-mobile.png" />
        <div class="banner-text">
          <h1>Download Now</h1>
          <div class="banner-text-tips">Ready to achieve all A’s</div>
          <div style="display: flex">
            <img class="banner-qrcode" src="@/assets/imgs/qrcode.png" />
            <div class="banner-download-btn">
              <a class="banner-download-btn-item" :href="config.iosLink" target="_blank">
                <img src="@/assets/imgs/app-icon-ios.png" alt="" srcset="" />
                <div>
                  <div class="text1">Download from</div>
                  <div class="text2">App Store</div>
                </div>
              </a>
              <a class="banner-download-btn-item" :href="androidLink" target="_blank">
                <img src="@/assets/imgs/app-icon-android.png" alt="" srcset="" />
                <div>
                  <div class="text1">Download for</div>
                  <div class="text2">Android</div>
                </div>
              </a>
              <a class="banner-download-btn-item" :href="config.googleLink" target="_blank">
                <img src="@/assets/imgs/app-icon-google.png" alt="" srcset="" />
                <div>
                  <div class="text1">Download from</div>
                  <div class="text2">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="allas-app-wrap">
      <div class="allas-app-cell1">
        <div class="allas-app-cell1-left">
          <h1>ALL As App</h1>
          <div>
            <div>Revolutionize the test prep model and allow students to improve</div>
            <div>their marks efficiently! Download and experience now!</div>
          </div>
          <div class="allas-app-cell1-download">
            <div>
              <a :href="config.iosLink" target="_blank">
                <img src="@/assets/imgs/allas-page-ios-pc.png" />
                <div>iOS</div>
                <div>download</div>
              </a>
            </div>
            <div>
              <a :href="androidLink" target="_blank">
                <img src="@/assets/imgs/allas-page-android-pc.png" />
                <div>Android</div>
                <div>download</div>
              </a>
            </div>
            <div>
              <a :href="config.googleLink" target="_blank">
                <img src="@/assets/imgs/allas-page-google-pc.png" />
                <div>Google Play</div>
                <div>download</div>
              </a>
            </div>
          </div>
        </div>
        <div class="allas-app-cell1-right">
          <img src="@/assets/imgs/allasapp-page1.png" />
        </div>
      </div>
      <div class="allas-app-cell2">
        <div class="allas-app-cell2-left">
          <img src="@/assets/imgs/allasapp-page2.png" />
        </div>
        <div class="allas-app-cell2-right">
          <div>
            <h5>Smart Error Notebooks</h5>
            <div>The automatic collection of wrong questions helps</div>
            <div>say goodbye to the traditional hand-copied mode</div>
            <div style="margin-top: 10px">Automatic categorization based on the latest</div>
            <div>syllabus helps students understand their knowledge</div>
            <div>weaknesses accurately</div>
          </div>
          <div>
            <h5>Exclusive Wrong Question Push</h5>
            <div>Send relevant exercises according to students’</div>
            <div>academic weaknesses shown in the wrong</div>
            <div>questions and help them understand the</div>
            <div>knowledge points in-depth efficiently.</div>
          </div>
        </div>
      </div>

      <div class="allas-app-cell3">
        <div class="allas-app-cell3-left">
          <div>
            <h5>Generation of Personal Reports</h5>
            <div>Graphical presentation of assessment</div>
            <div>Targeted study plan</div>
          </div>
          <div>
            <h5>Accurate AO Capability Assessment</h5>
            <div>Helping students gain a holistic view of their learning</div>
            <div>Continuous track of students' AO ability development</div>
          </div>
        </div>
        <div class="allas-app-cell3-right">
          <img src="@/assets/imgs/allasapp-page3.png" />
        </div>
      </div>

      <div class="allas-app-cell4">
        <div class="allas-app-cell4-left">
          <img src="@/assets/imgs/allasapp-page4.png" />
        </div>
        <div class="allas-app-cell4-right">
          <div>
            <h5>Past Paper Bank</h5>
            <div>Millions of past paper questions classified, and special</div>
            <div>scoring exercises help crack knowledge points</div>
          </div>
          <div>
            <h5>A New Generation of Test Prep App</h5>
            <div>Massive past paper questions for targeted</div>
            <div>practicing and test preparation based on the</div>
            <div>knowledge points and assessment objectives</div>
            <div>of A Level tests</div>
          </div>
          <div>
            <h5>Download & Experience NOW!</h5>
            <div>Download now for 7-day free trial</div>
          </div>
          <div class="allas-app-cell4-download">
            <div>
              <a :href="config.iosLink" target="_blank">
                <img src="@/assets/imgs/allas-page-ios-pc.png" />
                <div>iOS</div>
                <div>download</div>
              </a>
            </div>
            <div>
              <a :href="androidLink" target="_blank">
                <img src="@/assets/imgs/allas-page-android-pc.png" />
                <div>Android</div>
                <div>download</div>
              </a>
            </div>
            <div>
              <a :href="config.googleLink" target="_blank">
                <img src="@/assets/imgs/allas-page-google-pc.png" />
                <div>Google Play</div>
                <div>download</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HearStudents />

    <CooperationWrap />

    <OurNews />

    <AskedQuestions :questions="questions" />

    <AppDownload />
  </section>
</template>
<script>
import startUapm from '../plugins/uapm'
import OurNews from '../components/OurNews.vue'
export default {
  components: { OurNews },
  data() {
    return {
      questions: [],
      androidLink: ''
    }
  },
  head() {
    return {
      title: 'Download APP - All As',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'All As,A-Level,IGCSE,IB,edexcel,tutors,past papers' },
        {
          hid: 'allasapp-description',
          name: 'description',
          content:
            'AII As uses AI to help international school students in grades 8-12 improve academically. Our system includes past papers and collects wrong answers to identify areas of weakness. With personalized recommendations, students can achieve academic success with AII As.'
        }
      ]
    }
  },
  created() {
    this.getEssaylist()
    this.latestVersions()
  },
  mounted() {
    startUapm()
  },
  methods: {
    async getEssaylist() {
      await this.$api.getEssaylist({ columnCode: 'FAQ_FOR_TUTOR' }).then((res) => {
        if (res.length) {
          const list = res.slice(0, 5)
          list.forEach((item) => {
            const range = document.createRange()
            const fragment = range.createContextualFragment(item.detail)
            item.detail = fragment.textContent
          })
          this.questions = list
        }
      })
    },
    latestVersions() {
      this.$api.latestVersions().then((res) => {
        if (res && res.android) {
          this.androidLink = res.android.url
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
::v-deep .el-carousel__indicators--outside button {
  background: #036db7;
}
.container {
  overflow: hidden;
}
.banner {
  width: 100%;
  height: 500px;
  background: url(@/assets/imgs/appasapp-banner.png) 0 0 no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  > div {
    justify-content: center;
  }
  .banner-img {
    width: auto;
    height: 500px;
  }
  .banner-text {
    padding: 122px 0 5px 41px;
    h1 {
      font-size: 52px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 73px;
    }
    .banner-text-tips {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
      margin-bottom: 40px;
    }
  }
  .banner-qrcode {
    width: 140px;
    height: 140px;
  }
  .banner-download-btn {
    padding-left: 50px;
    .banner-download-btn-item {
      width: 160px;
      height: 40px;
      display: block;
      background: #000000;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      color: #ffffff;
      margin-bottom: 10px;
      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }
      .text1 {
        font-size: 9px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 13px;
      }
      .text2 {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 22px;
      }
    }
  }
}
</style>
