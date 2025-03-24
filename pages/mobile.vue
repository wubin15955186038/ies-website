<template>
  <div class="mobile-wrap">
    <div class="mobile-header">
      <img src="@/assets/imgs/logo-s.png" />
      <span>All As</span>
    </div>
    <div class="mobile-banner">
      <img src="@/assets/imgs/mobile-banner.png" />
    </div>
    <div class="mobile-main">
      <div class="mobile-main-item1">
        <div class="item-left">
          <div class="font-22">ALL As App</div>
          <div class="font-12">Revolutionize the test prep model and allow students to improve their marks efficiently! Download & Experience now!</div>
          <div class="download-btn-app">
            <div class="mobile-btn">
              <!-- <a :href="config.iosLink" target="_blank">
                <img src="@/assets/imgs/allas-page-ios.png" />
                <div class="size-9px">
                  <div class="size-9px">Download from</div>
                  <div class="size-16px">App Store</div>
                </div>
              </a> -->
              <div @click="handleDownload">
                <img src="@/assets/imgs/allas-page-ios.png" />
                <div class="size-9px">
                  <div class="size-9px">Download from</div>
                  <div class="size-16px">App Store</div>
                </div>
              </div>
            </div>
            <div class="mobile-btn">
              <div @click="handleDownload">
                <img src="@/assets/imgs/allas-page-android.png" />
                <div class="size-9px">
                  <div class="size-9px">Download for</div>
                  <div class="size-16px">Android</div>
                </div>
              </div>
            </div>
            <div class="mobile-btn">
              <div @click="handleDownload">
                <img class="allas-page-google-img" src="@/assets/imgs/allas-page-google.png" />
                <div class="size-9px">
                  <div class="size-9px">Download from</div>
                  <div class="size-16px">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-right">
          <img src="@/assets/imgs/mobile-img1.png" />
        </div>
      </div>
      <div class="mobile-main-item2">
        <img src="@/assets/imgs/mobile-img2.png" />
      </div>

      <div class="mobile-main-item3">
        <div class="mobile-main-step-wrap">
          <div class="mobile-main-step1">01</div>
          <div class="flex-1">
            <div class="title">Smart Error Notebooks</div>
            <div class="text">The automatic collection of wrong questions helps say goodbye to the traditional hand-copied mode</div>
            <div class="text p-r-60">Automatic categorization based on the latest syllabus helps students understand their knowledge weaknesses accurately</div>
          </div>
        </div>
        <div class="mobile-main-step-wrap m-t-15" style="margin-top: 15px">
          <div class="mobile-main-step2">02</div>
          <div class="flex-1">
            <div class="title">Exclusive Wrong Question Push</div>
            <div class="text p-r-50">
              Send relevant exercises according to students’ academic weaknesses shown in the wrong questions and help them understand the knowledge points in-depth efficiently.
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-main-item4">
        <img src="@/assets/imgs/mobile-img3.png" />
      </div>

      <div class="mobile-main-item3">
        <div class="mobile-main-step-wrap">
          <div class="mobile-main-step1">03</div>
          <div class="flex-1">
            <div class="title">Generation of Personal Reports</div>
            <div class="text">Graphical presentation of assessment</div>
            <div class="text">Targeted study plan</div>
          </div>
        </div>
        <div class="mobile-main-step-wrap m-t-15" style="margin-top: 15px">
          <div class="mobile-main-step2">04</div>
          <div class="flex-1">
            <div class="title">Accurate AO Capability Assessment</div>
            <div class="text">Helping students gain a holistic view of their learning</div>
            <div class="text">Continuous track of students' AO ability development</div>
          </div>
        </div>
      </div>

      <div class="mobile-main-item5">
        <img src="@/assets/imgs/mobile-img4.png" />
      </div>

      <div class="mobile-main-item3">
        <div class="mobile-main-step-wrap">
          <div class="mobile-main-step1">05</div>
          <div class="flex-1">
            <div class="title">Past Paper Bank</div>
            <div class="text">Millions of past paper questions classified, and special scoring exercises help crack knowledge points</div>
          </div>
        </div>
        <div class="mobile-main-step-wrap m-t-15" style="margin-top: 15px">
          <div class="mobile-main-step2">06</div>
          <div class="flex-1">
            <div class="title">A New Generation of Test Prep App</div>
            <div class="text">Massive past paper questions for targeted practicing and test preparation based on the knowledge points and assessment objectives of A Level tests</div>
          </div>
        </div>
        <div class="mobile-main-step-wrap m-t-15" style="margin-top: 15px">
          <div class="mobile-main-step3">07</div>
          <div class="flex-1">
            <div class="title">Download & Experience NOW!</div>
            <div class="text">Download now for 7-day free trial</div>
          </div>
        </div>
      </div>
      <div class="mobile-main-item6">
        <div class="mobile-footer-btn">
          <div class="mobile-btn">
            <a :href="config.iosLink" target="_blank">
              <img src="@/assets/imgs/allas-page-ios.png" />
              <div class="size-9px">
                <div class="size-9px">Download from</div>
                <div class="size-16px">App Store</div>
              </div>
            </a>
          </div>
          <div class="mobile-btn">
            <a :href="androidLink" target="_blank">
              <img src="@/assets/imgs/allas-page-android.png" />
              <div class="size-9px">
                <div class="size-9px">Download for</div>
                <div class="size-16px">Android</div>
              </div>
            </a>
          </div>
          <div class="mobile-btn">
            <a :href="config.googleLink" target="_blank">
              <img class="allas-page-google-img" src="@/assets/imgs/allas-page-google.png" />
              <div class="size-9px">
                <div class="size-9px">Download from</div>
                <div class="size-16px">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-footer">@2022 All As Guangzhou Jiayi Limited.</div>
  </div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  layout: 'mobileLayout',
  data() {
    return {
      androidLink: ''
    }
  },
  head() {
    return {
      title: 'All As - A leader in international education technology',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'mobile-description',
          name: 'description',
          content:
            'AII As uses AI to help international school students in grades 8-12 improve academically. Our system includes past papers and collects wrong answers to identify areas of weakness. With personalized recommendations, students can achieve academic success with AII As.'
        }
      ]
    }
  },
  created() {
    this.latestVersions()
  },
  mounted() {
    startUapm()
  },
  methods: {
    latestVersions() {
      this.$api.latestVersions().then((res) => {
        if (res && res.android) {
          this.androidLink = res.android.url
        }
      })
    },
    handleDownload() {
      this.$router.push({ path: '/download' })
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.mobile-wrap {
  background: #fff;
}
.mobile-header {
  display: flex;
  height: 60px;
  padding: 0 15px;
  background: #fff;
  align-items: center;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333;
}
.mobile-header img {
  width: 28px;
  height: 28px;
  margin-right: 16px;
}
.mobile-banner img {
  width: 100%;
}
.mobile-main {
  padding: 37px 16px;
}
.mobile-main-item1 {
  display: flex;
}
.mobile-main-item1 .item-left {
  flex: 1;
  padding-top: 18px;
}
.mobile-main-item1 .item-right {
  flex: 1;
}
.mobile-main-item1 .item-right img {
  width: 100%;
}
.font-12 {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 17px;
}
.font-16 {
  font-size: 16px;
}
.font-22 {
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 30px;
}
.mobile-btn {
  padding: 0 8px;
  background: #000;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;

  border-radius: 5px;
  margin-bottom: 10px;
  /* display: inline-block; */
}
.mobile-btn img {
  width: 25px;
  height: 25px;
  margin: 0 5px 0 0;
  float: left;
}
.mobile-btn a,
.mobile-btn > div {
  display: flex;
  height: 40px;
  align-items: center;
  padding: 8px 0;
}
.mobile-main-item1 .item-left > div:nth-child(2) {
  margin: 10px 0 16px 0;
}
.mobile-main-item1 .item-left > div:nth-child(3) {
  overflow: hidden;
}
.mobile-main-item2 {
  margin: 17px 0 20px 0;
  padding: 0 46px;
}
.mobile-main-item2 img {
  width: 100%;
}
.mobile-main-item3 {
  width: 100%;
  margin-top: 23px;
}

.mobile-main-item3 .title {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 22px;
  margin: 15px 0 5px 0;
}

.mobile-main-item3 .text {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 17px;
  margin-bottom: 5px;
}
.mobile-main-step-wrap {
  display: flex;
  padding-right: 30px;
}

.m-t-15 {
  margin-top: 15px;
}
.p-r-50 {
  padding-right: 40px;
}
.p-r-60 {
  padding-right: 60px;
}

.mobile-main-step1 {
  width: 50px;
  height: 50px;
  background: url(@/assets/imgs/step-bg1.png) 0 0 no-repeat;
  background-size: 50px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
.mobile-main-step2 {
  width: 50px;
  height: 50px;
  background: url(@/assets/imgs/step-bg2.png) 0 0 no-repeat;
  background-size: 50px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}

.mobile-main-step3 {
  width: 50px;
  height: 50px;
  background: url(@/assets/imgs/step-bg3.png) 0 0 no-repeat;
  background-size: 50px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}

.mobile-main-item4 {
  margin-top: 30px;
  padding: 0 15px;
}
.mobile-main-item4 img {
  width: 100%;
}

.mobile-main-item5 {
  padding-right: 80px;
}
.mobile-main-item5 img {
  width: 100%;
}
.mobile-footer-btn {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 30px 20px 0;
}
.mobile-footer-btn .mobile-btn {
  width: 150px;
}
.mobile-footer-btn .mobile-btn {
  display: inline-block;
}
.mobile-footer {
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  background: #eeeeee;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
}
.download-btn-app {
  margin-right: 37px;
}
.size-16px {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 22px;
}
.size-9px {
  font-size: 9px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 13px;
}
</style>
