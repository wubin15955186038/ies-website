<template>
  <!-- 常见问题 -->
  <div class="content-faqs">
    <div class="con-style">
      <div class="content-title">
        <h1 v-if="$route.query.type === 'faqsStudent'">FAQs for Students</h1>
        <h1 v-else>FAQs for Tutors</h1>
      </div>
      <div class="problem">
        <div class="update-faq">
          <div class="problem-class1">
            <div v-for="(item, index) in list" :key="index" class="specific-problem" @click="goDetails(item)">
              <!-- <div class="dian">
              <div class="dians">·</div> -->
              <div>{{ item.title }}</div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tutorParams: {
        columnCode: 'FAQ_FOR_TUTOR'
      },
      studentParams: {
        columnCode: 'FAQ_FOR_STUDENT'
      },
      list: []
    }
  },
  watch: {
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        this.$nextTick(() => {
          this.initList()
        })
      }
    }
  },
  created() {
    this.initList()
  },
  methods: {
    initList() {
      if (this.$route.query.type === 'faqsStudent') {
        this.getStudentlist()
      } else {
        this.getTutorlist()
      }
    },
    // 根据栏目ID或栏目编码获取文章列表
    async getTutorlist() {
      await this.$api.getEssaylist(this.tutorParams).then((res) => {
        this.list = res
      })
      // code something
    },
    // 根据栏目ID或栏目编码获取文章列表
    async getStudentlist() {
      await this.$api.getEssaylist(this.studentParams).then((res) => {
        this.list = res
      })
      // code something
    },

    goDetails(item) {
      const types = this.$route.query.type !== 'faqsStudent' ? 'Tutors' : 'Students'
      this.$router.push({ path: '/problemdetails', query: { id: item.id, types } })
    }
  }
}
</script>
