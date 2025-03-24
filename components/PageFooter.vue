<template>
  <footer class="footer">
    <div class="footer-menu width-1200">
      <div class="footer-menu-list">
        <div v-for="(item, index) in menuList" :key="index" class="footer-menu-item">
          <div class="footer-menu-list-title">{{ item.title }}</div>
          <ul>
            <li v-for="(aitem, aindex) in item.list" :key="aindex">
              <div v-if="aitem.click" class="pointer" @click="getByColumnCode(aitem)">{{ aitem.name }}</div>
              <template v-else>
                <a v-if="aitem.path.indexOf('http') !== -1" :href="aitem.path">{{ aitem.name }}</a>
                <nuxt-link v-else :to="aitem.path"> {{ aitem.name }}</nuxt-link>
              </template>
            </li>
          </ul>
        </div>
        <div class="footer-menu-item">
          <!-- <div class="footer-menu-list-title">AllAs App</div> -->
          <ul>
            <li>
              <a :href="config.iosLink" target="_blank">
                <img src="@/assets/imgs/appstore.png" style="height: 40px" />
              </a>
            </li>
            <li>
              <a :href="config.googleLink" target="_blank">
                <img src="@/assets/imgs/googleplay.png" style="height: 40px" />
              </a>
            </li>
            <li>
              <img src="@/assets/imgs/qrcode.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="footer-copyright-wrap width-1200">
        <div class="flex">
          <div>©2022 All As Guangzhou jiayi Limited.</div>
          <ul>
            <li v-for="(item, index) in copyrightList" :key="index">
              <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-icon">
          <a href="https://www.facebook.com/official.allas" target="_blank">
            <img :src="require(`@/assets/imgs/footer-icon1.png`)" />
          </a>
          <a href="https://v.douyin.com/Ud2AWAb" target="_blank">
            <img :src="require(`@/assets/imgs/footer-icon2.png`)" />
          </a>
          <a href="https://wa.me/message/7SYFIUNUEO2TN1" target="_blank">
            <img :src="require(`@/assets/imgs/footer-icon3.png`)" />
          </a>
          <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NzIwMDM3MA==&scene=117" target="_blank">
            <img :src="require(`@/assets/imgs/footer-icon4.png`)" />
          </a>
          <a href="https://www.xiaohongshu.com/user/profile/639817f60000000026010595" target="_blank">
            <img :src="require(`@/assets/imgs/footer-icon5.png`)" />
          </a>
          <a href="https://weibo.com/u/7808176482" target="_blank">
            <img :src="require(`@/assets/imgs/footer-icon6.png`)" />
          </a>
        </div>
      </div>
      <div class="footer-copyright-text">
        <div class="width-1200">
          <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022117105号-1</a>
          <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022117105号-2</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: 'Company Info',
          list: [
            { name: 'About', path: 'aboutus' },
            { name: 'Career', path: 'jobOpportunities' },
            { name: 'News & Blog', path: 'news' },
            { name: 'FAQs', path: 'privacy?type=faqTutors' },
            { name: 'Privacy & Terms', path: 'privacy?type=privacy' },
            { name: 'Contact', path: 'contact' }
          ]
        },
        // {
        //   title: 'AllAs App',
        //   list: [
        //     { name: 'Diagnostic Tests', path: '/app' },
        //     { name: 'Practice Tests', path: '/app' },
        //     { name: 'Test Results', path: '/app' },
        //     { name: 'Past Paper Bank', path: '/app' },
        //     { name: 'All Practice', path: '/app' },
        //     { name: 'Wrong Collections', path: '/app' },
        //     { name: 'Assessment Objectives', path: '/app' },
        //     { name: 'Create Flashcards', path: '/app' }
        //   ]
        // },
        {
          title: 'Teaching',
          list: [
            { name: 'Become a teacher', path: '#' },
            { name: 'Teaching code of Conduct', path: 'pressdetail', click: true, code: 'TEACHING_CODE_OF_CONDUCT' }
          ]
        },
        // {
        //   title: 'Learning Resources',
        //   list: [
        //     { name: 'PDF paper bank download', path: 'aboutus' },
        //     { name: 'Teaching resources', path: 'aboutus' },
        //     { name: 'Teaching courseware', path: 'aboutus' },
        //     { name: 'Learning method', path: 'aboutus' }
        //   ]
        // },
        {
          title: 'Popular Request',
          list: [
            { name: 'A level tutors', path: '/view-tutors' },
            { name: 'IGCSE tutors', path: '/view-tutors' },
            { name: 'AP tutors', path: '/view-tutors' },
            { name: 'IB tutors', path: '/view-tutors' },
            { name: 'English tutors', path: '/view-tutors' },
            { name: 'Maths tutors', path: '/view-tutors' },
            { name: 'Physics tutors', path: '/view-tutors' },
            { name: 'Chemistry tutors', path: '/view-tutors' }
          ]
        },
        {
          title: 'App Features',
          list: [
            { name: 'Diagnostic Assessment', path: '/app' },
            { name: 'MCQ Practice', path: '/app' },
            { name: 'Topical Papers', path: '/app' },
            { name: 'Past Papers', path: '/app' },
            { name: 'Result Analysis', path: '/app' },
            { name: 'AI Records', path: '/app' },
            { name: 'My Flashcards', path: '/app' },
            { name: 'Find a Tutor', path: '/app' }
          ]
        }
      ],
      copyrightList: [
        // { name: 'About', path: 'aboutUs' },
        // { name: 'Career', path: 'jobOpportunities' },
        // { name: 'Newsroom', path: 'press' },
        // { name: 'Legal', path: 'privacy?type=legal' },
        // { name: 'Privacy', path: 'privacy?type=privacy' },
        // { name: 'Contact', path: 'contact' }
      ],
      androidLink: ''
    }
  },
  created() {
    this.latestVersions()
  },
  methods: {
    getByColumnCode(item) {
      this.$api.getByColumnCode(item.code).then((res) => {
        if (res && res.id) {
          this.$router.push({
            path: 'pressdetail',
            query: {
              id: res.id
            }
          })
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
.footer {
  font-size: 14px;
  background: #fff;
  .footer-menu {
    display: flex;
    justify-content: space-between;
    padding: 50px 0 60px 0;
    margin: 0 auto;

    .footer-menu-list {
      display: flex;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4e4b4b;
      .footer-menu-item {
        margin-right: 110px;
        line-height: 30px;
        &:last-child {
          margin-right: 0;
        }
        .footer-menu-list-title {
          margin-bottom: 10px;
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #4e4b4b;
        }
        a:hover {
          text-decoration: underline;
        }
        img {
          width: 171px;

          cursor: pointer;
          margin-bottom: 10px;
        }
      }
    }
    .footer-qrcode {
      img {
        width: 140px;
        height: 140px;
      }
    }
  }
  .footer-copyright {
    line-height: 75px;
    background: #036db7;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    .footer-copyright-wrap {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      ul {
        margin-left: 60px;
        li {
          display: inline-block;
          margin-right: 30px;
          a {
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .footer-copyright-text {
      line-height: 40px;
      background: #f9f9f9;
      a {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        letter-spacing: 3px;
        margin-right: 50px;
      }
    }
  }
  .footer-icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 26px;
      height: 26px;
      margin-right: 20px;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
}
</style>
