<template>
  <!-- 支付政策 -->
  <div class="faq-detail-content">
    <div class="detail-style">
      <div class="tab-contents">
        <div class="problem-content">
          <div class="problem">FAQ /</div>
          <div class="problem-type">For {{ this.types }}</div>
        </div>
        <div class="problem-title">{{ EssayDetailsData.title }}</div>
        <div class="logo-content">
          <div class="imgs">
            <img class="img" src="@/assets/imgs/logo-w.png" />
          </div>
          <div class="logo-group">AllAs Support Group</div>
        </div>
        <div class="problem-detail">
          <p v-html="EssayDetailsData.detail"></p>
        </div>
      </div>
    </div>
    <div class="related-articles">
      <div class="articles">Related articles</div>
      <div v-for="(item, index) in EssayTitleData" :key="index" class="articles1" @click="noDetails(item)">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      id: '',
      types: '',
      EssayDetailsData: {},
      tutorParams: {
        columnCode: 'FAQ_FOR_TUTOR'
      },
      studentParams: {
        columnCode: 'FAQ_FOR_STUDENT'
      },
      EssayTitleData: ''
    }
  },
  watch: {
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        this.$nextTick(() => {
          this.initPage()
        })
      }
    }
  },

  created() {
    this.initPage()
  },
  mounted() {
    startUapm()
  },

  methods: {
    initPage() {
      // console.log('---获取的ID', this.$route.query.id)
      this.id = this.$route.query.id
      this.types = this.$route.query.types
      // console.log('---获取的IDs', this.types)
      this.getEssayDetail()
      if (this.types === 'Tutors') {
        this.getTutorlist()
      } else {
        this.getStudentlist()
      }
    },
    // 根据栏目ID或栏目编码获取文章列表
    async getTutorlist() {
      await this.$api.getEssaylist(this.tutorParams).then((res) => {
        this.EssayTitleData = res.splice(0, 4)
        console.log('老师问题-------', this.EssayTitleData)
      })
      // code something
    },
    // 根据栏目ID或栏目编码获取文章列表
    async getStudentlist() {
      await this.$api.getEssaylist(this.studentParams).then((res) => {
        this.EssayTitleData = res.splice(0, 4)
        // console.log('学生问题-------', this.EssayTitleData)
      })
      // code something
    },
    // 根据文章ID查询文章详情
    async getEssayDetail() {
      await this.$api.getEssayById(this.id).then((res) => {
        this.EssayDetailsData = res
        // console.log('----5', this.EssayDetailsData)
      })
      // code something
    },
    noDetails(item) {
      // console.log('item------', item)
      this.$router.push({ path: '/problemdetails', query: { id: item.id, types: 'Tutors' } })
    }
  }
}
</script>
