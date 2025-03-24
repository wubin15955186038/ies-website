<template>
  <div class="container">
    <div class="breadcrumb">
      <span>Home</span>
      <span>/</span>
      <span class="text-blue">Questions</span>
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
<style lang="scss"></style>
