<template>
  <div :class="isWeixin ? 'isWeixin' : ''"></div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  layout: 'mobileLayout',
  data() {
    return {
      isWeixin: false,
      androidLink: ''
    }
  },
  created() {},
  mounted() {
    startUapm()
    const u = navigator.userAgent
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    const isAndroid = u.includes('Android') || u.includes('Adr')
    const isWeixin = !!/micromessenger/.test(u.toLowerCase())
    console.log('isWeixin :>> ', isWeixin)
    console.log('isIos :>> ', isiOS)
    console.log('isAndroid :>> ', isAndroid)
    if (isiOS && !isWeixin) {
      window.location = this.config.iosLink
    } else if (isAndroid && !isWeixin) {
      const from = this.$route.query.from
      if (from === 'questions') {
        window.location = 'https://play.google.com/store/apps/details?id=com.allas.aischool.edu'
      } else {
        this.latestVersions()
      }
    } else if (isWeixin) {
      this.isWeixin = isWeixin
    }
  },
  methods: {
    latestVersions() {
      this.$api.latestVersions().then((res) => {
        if (res && res.android) {
          window.location = res.android.url
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.isWeixin {
  width: 100%;
  height: 100vh;
  background: url(@/assets/imgs/weixin-download.png) no-repeat right 20px top 20px rgba($color: #000000, $alpha: 0.6);
  background-size: 75% auto;
}
</style>
