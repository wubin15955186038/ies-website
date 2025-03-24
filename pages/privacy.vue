<template>
  <div class="bannerPrivacy">
    <div class="frame">
      <div class="navigation">
        <div v-for="(item, index) in labelContent" :key="index" class="tab" :class="currentIndex === index ? 'actives' : ''" @click="clickFQA(item.type, index)">{{ item.name }}</div>
      </div>
      <div class="tab-content">
        <common-problem v-if="currentIndex === 0"></common-problem>
        <common-problem v-if="currentIndex === 1"></common-problem>
        <termsOfService v-if="currentIndex === 2"></termsOfService>
        <privacyPolicy v-if="currentIndex === 3"></privacyPolicy>
        <paymentPolicy v-if="currentIndex === 4"></paymentPolicy>
        <tutorPolicy v-if="currentIndex === 5"></tutorPolicy>
        <copyrightPolicy v-if="currentIndex === 6"></copyrightPolicy>
      </div>
    </div>
  </div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      currentIndex: 0,
      labelContent: [
        {
          name: 'FAQs for Tutors',
          type: 'faqsTutors',
          code: ''
        },
        {
          name: 'FAQs for Student',
          type: 'faqsStudent',
          code: ''
        },
        {
          name: 'Terms of Service',
          type: 'legal',
          code: ''
        },
        {
          name: 'Privacy Policy',
          type: 'privacy',
          code: ''
        },
        {
          name: 'Payment Policy',
          type: 'Payment',
          code: ''
        },
        {
          name: 'Tutor Policy',
          type: 'Tutor',
          code: ''
        },
        {
          name: 'Copyright Policy',
          type: 'Copyright',
          code: ''
        }
      ],
      params: {
        columnCode: 'COPYRIGHT_POLICY'
      }
    }
  },
  head() {
    return {
      title: 'privacy - All As',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: '[Privacy Policy],All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'Privacy-description',
          name: 'description',
          content: 'edexcel'
        }
      ]
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
    clickFQA(type, index) {
      this.currentIndex = index
      this.$router.replace({ path: 'privacy', name: 'privacy', query: { type } })
    },
    initPage() {
      if (this.$route.query.type === 'faqsStudent') {
        this.currentIndex = 1
      } else if (this.$route.query.type === 'legal') {
        this.currentIndex = 2
      } else if (this.$route.query.type === 'privacy') {
        this.currentIndex = 3
      } else if (this.$route.query.type === 'Payment') {
        this.currentIndex = 4
      } else if (this.$route.query.type === 'Tutor') {
        this.currentIndex = 5
      } else if (this.$route.query.type === 'Copyright') {
        this.currentIndex = 6
      }
      this.getByColumnCode()
    },
    async getByColumnCode() {
      // console.log('----1', this.params)
      await this.$api.getByColumnCode('COPYRIGHT_POLICY').then((res) => {
        // console.log('----2', res)
      })
      // code something
    }
  }
}
</script>
