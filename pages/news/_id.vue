<template>
  <div class="bannerPress">
    <div class="press-detailss">
      <div v-if="EssayDetailsData.imgUrl" class="posion4">
        <img class="image-cover-detail" :src="EssayDetailsData.imgUrl" />
      </div>
      <div class="pressdetail-ut">
        <div class="pressdetail-style">
          <h1 class="pressdetail-title">{{ EssayDetailsData.title }}</h1>
          <div class="pressdetail-time">{{ EssayDetailsData.createTime }}</div>
          <div class="press-detail">
            <p v-html="EssayDetailsData.detail"></p>
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
      id: '',
      EssayDetailsData: {},
      headTitle: '',
      headContent: ''
    }
  },
  head() {
    return {
      title: this.headTitle,
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: this.headContent },
        {
          hid: 'News-description',
          name: 'description',
          content: 'edexcel'
        }
      ]
    }
  },
  created() {
    // console.log('---获取的ID', this.$route.query.id)
    this.id = this.$route.query.id
    this.getEssayDetail()
  },

  methods: {
    // 根据文章ID查询文章详情
    async getEssayDetail() {
      await this.$api.getEssayById(this.id).then((res) => {
        this.EssayDetailsData = res
        this.headTitle = res.title + ' - All As'
        this.headContent = res.detail.slice(0, 200)
        // console.log('----5', this.EssayDetailsData)
      })
      // code something
    }
  }
}
</script>
