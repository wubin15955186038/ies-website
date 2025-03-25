<template>
  <div class="container">
    <div class="breadcrumb">
      <span>Home</span>
      <span>/</span>
      <span class="text-blue">Questions</span>
    </div>

    <div class="question-detail">
      <div>star</div>
      <div class="question-content">Integration of sin²(x) from 0 to π, Find ∫ oP sin²(x)dx using dóuble angle formula and basic integration techniques.</div>
      <div class="status-box">
        <span class="status">Exam No：123</span>
        <span class="status">Year：2024</span>
        <span class="status">Question No：123</span>
      </div>
      <img class="picture" src="">
      <div class="tags">
        <div class="tag subject">Biology</div>
        <div class="tag level">Intermediate</div>
        <div class="tag exam-type">Sat</div>
      </div>

      <div class="v-line"></div>

      <div class="answer-box"></div>


    </div>
    <div class="related-question">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      headTitle: ''
    }
  },
  created() {
    // console.log('---获取的ID', this.$route.query.id)
    this.id = this.$route.query.id
  },
  head() {
    return {
      title: `${this.headTitle} - All As`,
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'tutors,one-to-one,All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'groupclass-description',
          name: 'description',
          content: 'Find your perfect subject tutor and join our All As online classroom. Then book one-to-one online lessons to fit your schedule.'
        }
      ]
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
</style>
