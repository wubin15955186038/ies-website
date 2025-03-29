<template>
  <div class="mobile-wrap">
    <div class="mobile-header">
      <img src="@/assets/imgs/questions-mobile/logo.png" />
      <span class="download">Download App</span>
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
    <div class="mobile-main">
      <div class="questions-list" v-if="questionList.length > 0">
        <nuxt-link v-for="item in questionList" :key="item.id" :to="`/question-mobile/${item.subjectName.split(' ').join('_')}/${item.prefix}_${item.id}`">
          <QuestionItemMobile :question="item" />
        </nuxt-link>
      </div>
      <el-empty description="暂无数据" v-else></el-empty>
    </div>
    <div class="mobile-footer">@2024 All As ALPHA INTERNATIONAL AI EDTECH PTE. LTD</div>
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
      }
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
    onHandleSearch(code, { value, text }) {
      if (this.searchForm[code] === value) return
      this.searchForm[code] = value
      if (code === 'levelId') {
        const program = this.programs.find((pro) => pro.value === value) || {}
        this.exams = Array.isArray(program.children) ? [...program.children] : []
        this.searchForm.examId = ''
        this.$nextTick(() => {
          this.examHeight = this.$refs.examRef.offsetHeight
        })
      }
      this.pager.num = 1
      this.getQuestionList()
      if (code === 'subjectId') {
        const subjectPath = text.split(' ').join('_') || 'all'
        // 改变浏览器URL地址，不刷新页面
        window.history.pushState({}, '', `/question/${subjectPath}`)
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eef1f4;

  .mobile-header {
    display: flex;
    height: 44px;
    padding: 0 20px;
    background: #fff;
    justify-content: space-between;
    align-items: center;

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
  .mobile-banner img {
    width: 100%;
  }
  .mobile-main {
    flex-grow: 1;
    overflow: auto;
  }
  .mobile-footer {
    line-height: 44px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #999999;
  }
}
</style>
