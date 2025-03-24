import Vue from 'vue'
const config = {
  install(Vue) {
    Vue.prototype.config = {
      iosLink: 'https://apps.apple.com/cn/app/xinstall/id1645087928',
      androidLink: 'https://canada-public.oss-cn-shenzhen.aliyuncs.com/pub_20230518/app-ASChina-1.1.3.apk',
      googleLink: 'https://play.google.com/store/apps/details?id=com.allas.aischool.edu'
    }
  }
}

Vue.use(config)

// 页面or组件使用: config.config.iosLink
