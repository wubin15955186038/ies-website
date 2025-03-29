<template>
  <div class="mobile-wrap">
    <div class="mobile-header">
      <img src="@/assets/imgs/questions-mobile/logo.png" />
      <span class="download" @click="$router.push({ path: '/download' })">Download App</span>
    </div>
    <div class="mobile-banner">
      <el-carousel :interval="3000" arrow="never" :autoplay="false" height="150px">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <a :href="item.linkUrl" target="_blank">
            <img :ref="`imgHeight${index}`" :src="item.imgUrl" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div :class="['condition-bar', conditionModalVisible && 'active']" @click="onHandleOpenCondition">
      <span>{{ subjectText }} / {{ levelText }} / {{ examText }}</span>
      <span class="num">{{ conditionLth }}</span>
    </div>
    <div class="mobile-body">
      <div class="question-box">
        <div class="question-list" v-if="questionList.length > 0">
          <nuxt-link v-for="item in questionList" :key="item.id" :to="`/question-mobile/${item.subjectName.split(' ').join('_')}/${item.prefix}_${item.id}`">
            <QuestionItemMobile :question="item" />
          </nuxt-link>
        </div>
        <el-empty description="暂无数据" v-else></el-empty>
      </div>
      <div class="mobile-footer">@2024 All As ALPHA INTERNATIONAL AI EDTECH PTE. LTD</div>
    </div>
    <div v-show="conditionModalVisible" class="condition-modal">
      <div class="mask"></div>
      <div class="content">
        <div class="condition-box">
          <div class="condition-line">
            <div class="title">Subject:</div>
            <div class="values">
              <div :class="['value', item.value === searchForm.subjectId && 'active']" v-for="(item, index) in [defaultOption, ...subjects]" :key="index" @click="onHandleSearch('subjectId', item)">
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="condition-line">
            <div class="title">Level:</div>
            <div class="values">
              <div :class="['value', item.value === searchForm.levelId && 'active']" v-for="(item, index) in [defaultOption, ...programs]" :key="index" @click="onHandleSearch('levelId', item)">
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="condition-line">
            <div class="title">Exam Type:</div>
            <div class="values">
              <div :class="['value', item.value === searchForm.examId && 'active']" v-for="(item, index) in [defaultOption, ...exams]" :key="index" @click="onHandleSearch('examId', item)">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="btn-group">
          <div class="cancel-btn" @click="onHandleCloseCondition">cancel</div>
          <div class="sure-btn" @click="onHandleSureCondition">sure</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startUapm from '../../../plugins/uapm'

export default {
  layout: 'mobileLayout',
  data() {
    return {
      bannerList: [],
      defaultOption: { text: 'All', value: '' },
      programs: [],
      subjects: [],
      exams: [],
      questionList: [],
      pager: { num: 1, size: 10, total: 0, totalPage: 0 },
      searchForm: {
        subjectId: '',
        levelId: '',
        examId: ''
      },
      tempSearchForm: {
        subjectId: '',
        levelId: '',
        examId: ''
      },
      conditionModalVisible: false
    }
  },
  head() {
    return {
      title: 'All As - A leader in international education technology',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'All As,A-Level,IGCSE,IB,edexcel,tutors,past papers,notes,maths, biology,chemistry,physics,english' },
        {
          hid: 'index-description',
          name: 'description',
          content:
            'Achieve A* with AII As - the top app for A-Level exams! AII As has 40,000+ past papers organized by topic. With one-to-one online live tutors, we help you achieve A*. Download now and unlock your potential!'
        }
      ]
    }
  },
  computed: {
    subjectText() {
      const subject = this.subjects.find((item) => item.value === this.searchForm.subjectId)
      return subject ? subject.text : 'Subject'
    },
    levelText() {
      const level = this.programs.find((item) => item.value === this.searchForm.levelId)
      return level ? level.text : 'Level'
    },
    examText() {
      const exam = this.exams.find((item) => item.value === this.searchForm.examId)
      return exam ? exam.text : 'Exam Type'
    },
    conditionLth() {
      let lth = 0
      this.searchForm.subjectId && lth++
      this.searchForm.levelId && lth++
      this.searchForm.examId && lth++
      return lth
    }
  },
  async created() {
    this.getbannerTops()
    await this.getQueryOptions()
    const subjectText = this.$route.params.subject.split('_').join(' ')
    const subjectItem = this.subjects.find((item) => item.text === subjectText)
    this.searchForm.subjectId = subjectItem?.value || ''
    await this.getQuestionList()
  },
  mounted() {
    startUapm()
  },
  methods: {
    // 获取网站首页banner
    getbannerTops() {
      this.$api.getbannerTops().then((res) => {
        this.bannerList = res
      })
    },
    // 获取
    getQueryOptions() {
      this.$api.getQueryOptions().then((res) => {
        this.subjects = res.subjects
        this.programs = res.programs
      })
    },
    // 获取题目列表
    async getQuestionList() {
      const { searchForm, pager } = this
      const { data, total, totalPage } = await this.$api.getQuestionList(searchForm, pager.num, pager.size)
      this.questionList = (data || []).map((item) => {
        // 题目内容前4个单词：列表接口拼接好作为一个描述字段，每个单词下划线拼接
        const prefix = item.contentIntro.split(' ').slice(0, 4).join('_')
        return {
          ...item,
          prefix
        }
      })
      this.pager.total = total || 0
      this.pager.totalPage = totalPage || 0
    },

    onHandleOpenCondition() {
      if (this.conditionModalVisible) return
      this.conditionModalVisible = true
      this.tempSearchForm = { ...this.searchForm }
    },
    onHandleCloseCondition() {
      this.conditionModalVisible = false
      this.searchForm = { ...this.tempSearchForm }
    },
    onHandleSureCondition() {
      this.conditionModalVisible = false
      this.pager.num = 1
      this.getQuestionList()
    },
    onHandleSearch(code, { value, text }) {
      if (this.searchForm[code] === value) return
      this.searchForm[code] = value
      if (code === 'levelId') {
        const program = this.programs.find((pro) => pro.value === value) || {}
        this.exams = Array.isArray(program.children) ? [...program.children] : []
        this.searchForm.examId = ''
      }

      if (code === 'subjectId') {
        const subjectPath = text.split(' ').join('_') || 'all'
        // 改变浏览器URL地址，不刷新页面
        window.history.pushState({}, '', `/question-mobile/${subjectPath}`)
      }
    },
    onHandlePageChange(page) {
      this.pager.num = page
      this.getQuestionList()
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
.mobile-wrap {
  position: relative;
  height: 100vh;
  background: #eef1f4;
  padding-top: 234px;

  .mobile-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: #fff;

    img {
      width: 85px;
      height: 30px;
    }
    .download {
      height: 44px;
      line-height: 44px;
      font-size: 13px;
      font-weight: 400;
      color: #4e4b4b;
    }
  }
  .mobile-banner {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    height: 150px;

    img {
      width: 100%;
      height: 150px;
    }
  }
  .condition-bar {
    position: absolute;
    top: 194px;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    font-size: 13px;
    color: #4e4b4b;
    padding-right: 40px;
    border-bottom: 1px solid #e4e6ea;
    background: #ffffff;

    .num {
      display: none;
      width: 15px;
      height: 15px;
      line-height: 15px;
      font-size: 13px;
      color: #006fb7;
      text-align: center;
      border-radius: 15px;
      background: #d9eaf4;
    }
    &.active {
      color: #006fb7;

      .num {
        display: inline-block;
        margin-left: 5px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 20px;
      width: 12px;
      height: 12px;
      margin-top: -6px;
      background: url(~/assets/imgs/questions-mobile/arrow-icon2.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .mobile-body {
    height: 100%;
    overflow: auto;

    .question-box {
      min-height: calc(100% - 44px);

      .question-list {
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
  .condition-modal {
    .mask {
      position: fixed;
      top: 234px;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    .content {
      position: fixed;
      top: 234px;
      left: 0;
      right: 0;
      bottom: 10%;
      padding: 12px 0 73px;
      background: #ffffff;

      .condition-box {
        height: 100%;
        padding: 0 20px;
        overflow: auto;

        .condition-line {
          margin-bottom: 20px;

          .title {
            line-height: 15px;
            color: #4e4b4b;
            font-size: 13px;
            font-weight: 700;
            padding-bottom: 10px;
          }
          .values {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .value {
              height: 30px;
              line-height: 30px;
              font-size: 13px;
              color: #4e4b4b;
              padding: 0 12px;
              border-radius: 3px;
              background: #eef1f4;
              cursor: pointer;

              &.active {
                color: #ffffff;
                background: #006fb7;
              }
            }
          }
        }
      }
      .btn-group {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 73px;
        padding: 20px 20px 17px;
        background: #ffffff;

        .cancel-btn,
        .sure-btn {
          height: 35px;
          line-height: 35px;
          border-radius: 5px;
          text-align: center;
          font-size: 15px;

          &.cancel-btn {
            width: calc(40% - 4px);
            color: #4e4b4b;
            border: 1px solid #999999;
          }
          &.sure-btn {
            width: calc(60% - 6px);
            color: #ffffff;
            background: #006fb7;
          }
        }
      }
    }
  }
}
</style>
