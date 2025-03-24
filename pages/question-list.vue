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
      <div class="questions-condition-line" v-for="(condition, i) in conditionList" :key="i">
        <div class="condition-title">{{ condition.title }}:</div>
        <div class="condition-values">
          <div :class="['value', value === searchForm[condition.code] ? 'active' : '']" v-for="(value, j) in condition.values" :key="j" @click="onHandleSearch(condition.code, value)">{{ value }}</div>
        </div>
      </div>
    </div>

    <div class="questions-wrap">
      <div class="questions-list" v-if="5 > 0">
        <nuxt-link to="/question-detail/1234">
          <div class="questions-item" v-for="i in 5" :key="i">
            <div class="stars"></div>
            <div class="content ellipsis">
              Integration of sin²(x) from 0 to π, Find ∫ oP sin²(x)dx using dóuble angle formula and basic integration techniques.Integration of sin²(x) from 0 to π, Find ∫ oP sin²(x)dx using dóuble
              angle formula and basic integration techniques.Integration of sin²(x) from 0 to π, Find ∫ oP sin²(x)dx using dóuble angle formula and basic integration techniques.
            </div>
            <div class="tags">
              <div class="tag subject">Biology</div>
              <div class="tag level">Intermediate</div>
              <div class="tag exam-type">Sat</div>
            </div>
          </div>
        </nuxt-link>
        <el-pagination background :hide-on-single-page="true" :page-size="5" layout="prev, pager, next" :total="50" @current-change="onHandlePageChange"> </el-pagination>
      </div>
      <el-empty description="暂无数据" v-else></el-empty>
    </div>
  </section>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      bannerList: [],
      conditionList: [
        {
          title: 'Subject',
          code: 'subject',
          values: ['All', 'Mathematics', 'English ', 'Biology ', 'Chemistry', 'Economics', 'Business', 'More ']
        },
        {
          title: 'Level',
          code: 'level',
          values: ['All', 'Basic', 'Intermediate', 'Advanced']
        },
        {
          title: 'Exam Type',
          code: 'examType',
          values: ['All', 'Ib', 'Ap', 'Sat']
        }
      ],
      questionList: [],
      searchForm: {
        subject: 0,
        level: null,
        examType: 0
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
  created() {},
  mounted() {
    startUapm()
    this.getbannerTops()
  },
  methods: {
    // 获取网站首页banner
    async getbannerTops() {
      await this.$api.getbannerTops().then((res) => {
        this.bannerList = res
      })
    },
    onHandleSearch(code, value) {
      this.searchForm[code] = value
    },
    onHandlePageChange(page) {
      console.log('page: ', page)
    },
    async getEssaylist() {
      await this.$api.getEssaylist({ columnCode: 'FAQ_FOR_TUTOR' }).then((res) => {
        if (res.length) {
          const list = res.slice(0, 5)
          list.forEach((item) => {
            const range = document.createRange()
            const fragment = range.createContextualFragment(item.detail)
            item.detail = fragment.textContent
          })
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
::v-deep .el-pagination {
  text-align: right;
}
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制文本为2行 */
  overflow: hidden;
  text-overflow: ellipsis;
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
  }
}
.questions-wrap {
  padding: 24px 83px;
  background: #eef1f4;

  .questions-list {
    .questions-item {
      position: relative;
      padding: 70px 25px 96px;
      margin-bottom: 24px;
      border-radius: 10px;
      border: 1px solid #e4e6ea;
      background: #ffffff;
      cursor: pointer;

      .stars {
        position: absolute;
        top: 44px;
        left: 25px;
        width: 85px;
        height: 17px;
        background: url(~/assets/imgs/questions/star-icon.png) repeat-x;
        cursor: default;
      }
      .content {
        font-size: 18px;
        font-weight: 500;
        color: #4e4b4b;
        line-height: 34px;
      }
      .tags {
        display: flex;
        gap: 10px;
        position: absolute;
        bottom: 41px;
        left: 25px;

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
  }
}
</style>
