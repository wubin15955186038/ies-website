<template>
  <div class="banner4">
    <div class="posionss">
      <!-- <img class="image-cover4" src="@/assets/imgs/cover4.png" /> -->
      <div class="look-talent4">Newsroom</div>
    </div>
    <div class="press-arrangement">
      <div class="press-tj">
        <div v-for="(item, index) in EssayPageData" :key="index" class="press-content" @click="noDetails(item)">
          <div class="press-content-style">
            <div><img class="image-covers4" :src="item.imgUrl" /></div>
            <h1 class="press-title">{{ item.title }}</h1>
            <div class="press-time">{{ item.createTime }}</div>
            <div class="press-info">
              <p class="new-detail" v-html="item.detail"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
import startUapm from '../../plugins/uapm'
export default {
  data() {
    return {
      essayParams: {
        columnId: '',
        columnCode: 'NEWS_ROOM',
        typeCode: '',
        // limit: '20',
        // start: '0',
        title: '',
        workAddr: '',
        position: ''
      },

      EssayPageData: []
    }
  },
  head() {
    return {
      title: 'News - All As ',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: '[News],All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'News-description',
          name: 'description',
          content: 'edexcel'
        }
      ]
    }
  },
  created() {
    this.getEssayPage()
  },
  mounted() {
    startUapm()
  },
  methods: {
    async getEssayPage() {
      // console.log('----5', this.essayParams)
      await this.$api.getEssaylist(this.essayParams).then((res) => {
        this.EssayPageData = res.map((item) => {
          const range = document.createRange()
          const fragment = range.createContextualFragment(item.detail)
          item.detail = fragment.textContent
          return item
        })

        // console.log('----5', this.EssayPageData)
      })
      // code something
    },
    noDetails(item) {
      const title = item.title.replace(' ', '-')
      this.$router.push({ path: `/news/${title}`, query: { id: item.id } })
    }
  }
}
</script>
