<template>
  <section class="container">
    <div class="banner">
      <el-carousel :interval="3000" arrow="never" :autoplay="false" height="500px">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <a :href="item.linkUrl" target="_blank">
            <img :ref="`imgHeight${index}`" :src="item.imgUrl" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="questions-condition-wrap">
      <div :class="['questions-condition-line', subjectHeight > 32 && 'more-suffix']" :style="{ height: `${subjectOpend ? subjectHeight : 32}px` }">
        <div class="condition-title">Subject:</div>
        <div class="condition-values" ref="subjectRef">
          <div :class="['value', item.value === searchForm.subjectId && 'active']" v-for="(item, index) in [defaultOption, ...subjects]" :key="index" @click="onHandleSearch('subjectId', item)">
            {{ item.text }}
          </div>
        </div>
        <div :class="['more-btn', subjectOpend && 'open']" @click="subjectOpend = !subjectOpend">more</div>
      </div>

      <div :class="['questions-condition-line', levelHeight > 32 && 'more-suffix']" :style="{ height: `${levelOpend ? levelHeight : 32}px` }">
        <div class="condition-title">Level:</div>
        <div class="condition-values" ref="levelRef">
          <div :class="['value', item.value === searchForm.levelId && 'active']" v-for="(item, index) in [defaultOption, ...programs]" :key="index" @click="onHandleSearch('levelId', item)">
            {{ item.text }}
          </div>
        </div>
        <div :class="['more-btn', levelOpend && 'open']" @click="levelOpend = !levelOpend">more</div>
      </div>

      <div :class="['questions-condition-line', examHeight > 32 && 'more-suffix']" :style="{ height: `${examOpend ? examHeight : 32}px` }">
        <div class="condition-title">Exam Type:</div>
        <div class="condition-values" ref="examRef">
          <div :class="['value', item.value === searchForm.examId && 'active']" v-for="(item, index) in [defaultOption, ...exams]" :key="index" @click="onHandleSearch('examId', item)">
            {{ item.text }}
          </div>
        </div>
        <div :class="['more-btn', examOpend && 'open']" @click="examOpend = !examOpend">more</div>
      </div>
    </div>

    <div class="questions-wrap">
      <div class="questions-list" v-if="questionList.length > 0">
        <nuxt-link v-for="item in questionList" :key="item.id" :to="`/question/${item.subjectName.split(' ').join('_')}/${item.prefix}_${item.id}`">
          <QuestionItem :question="item"></QuestionItem>
        </nuxt-link>
        <el-pagination background :hide-on-single-page="pager.totalPage === 1" :page-size="pager.size" layout="prev, pager, next" :total="pager.total" @current-change="onHandlePageChange">
        </el-pagination>
      </div>
      <el-empty description="暂无数据" v-else></el-empty>
    </div>
  </section>
</template>

<script>
import startUapm from '../../../plugins/uapm'

export default {
  data() {
    return {
      bannerList: [],
      defaultOption: { text: 'All', value: '' },
      exams: [],
      questionList: [],
      pager: { num: 1, size: 10, total: 0, totalPage: 0 },
      searchForm: {
        subjectId: '',
        levelId: '',
        examId: ''
      },
      subjectHeight: 32,
      levelHeight: 32,
      examHeight: 32,
      subjectOpend: false,
      levelOpend: false,
      examOpend: false
    }
  },
  async asyncData(context) {
    const { programs, subjects } = await context.app.$api.getQueryOptions()
    return { programs, subjects }
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
  created() {
    const subjectText = this.$route.params.subject.split('_').join(' ')
    const subjectItem = this.subjects.find((item) => item.text === subjectText)
    this.searchForm.subjectId = subjectItem?.value || ''
    this.getbannerTops()
    this.getQuestionList()
  },
  mounted() {
    startUapm()
    this.subjectHeight = this.$refs.subjectRef.offsetHeight
    this.levelHeight = this.$refs.levelRef.offsetHeight
    this.examHeight = this.$refs.examRef.offsetHeight
  },
  methods: {
    // 获取网站首页banner
    getbannerTops() {
      this.$api.getbannerTops().then((res) => {
        this.bannerList = res
      })
    },
    // 获取题目列表
    async getQuestionList() {
      const { searchForm, pager } = this
      const { data, total, totalPage } = await this.$api.getQuestionList(searchForm, pager.num, pager.size)
      this.questionList = (data || []).map(item => {
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
    onHandleSearch(code, {value, text}) {
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
        window.history.pushState({}, '', `/question/${subjectPath}`);
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
::v-deep .el-pagination {
  text-align: right;
}
.questions-condition-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 60px 108px;
  background: #ffffff;

  .questions-condition-line {
    position: relative;
    padding-left: 125px;
    overflow: hidden;

    .condition-title {
      position: absolute;
      left: 0;
      top: 0;
      width: 125px;
      height: 32px;
      line-height: 32px;
      text-align: left;
      color: #4e4b4b;
      font-size: 14px;
    }
    .condition-values {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;

      .value {
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #4e4b4b;
        padding: 0 17px;
        border-radius: 6px;
        background: #eef1f4;
        cursor: pointer;

        &:hover,
        &.active {
          color: #eef1f4;
          background: #006fb7;
        }
      }
    }
    .more-btn {
      display: none;
    }
    &.more-suffix {
      padding-right: 100px;
      transition: height 0.2s linear;

      .more-btn {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #4e4b4b;
        padding: 0 34px 0 17px;
        border-radius: 6px;
        background: #eef1f4;
        cursor: pointer;

        &::after {
          content: '';
          position: absolute;
          right: 10px;
          top: 50%;
          width: 14px;
          height: 8px;
          margin-top: -4px;
          background: url(~/assets/imgs/questions/arrow-icon.png) no-repeat;
          background-size: 100% 100%;
        }

        &.open::after {
          transform: rotateZ(180deg);
        }
      }
    }
  }
}
.questions-wrap {
  padding: 24px 83px;
  background: #eef1f4;

  .questions-list {
  }
}
</style>
