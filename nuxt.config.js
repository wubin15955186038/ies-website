import env from './env'

export default {
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AllAs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/styles/reset.scss', '@/assets/styles/style.scss', '@/assets/styles/element-variables.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/config', '@/plugins/request'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: {
      // 添加插件名称作为键，参数作为值
      plugins: {
        'postcss-px-to-viewport': {
          unitToConvert: 'px', // 默认值`px`，需要转换的单位
          viewportWidth: 390, // 视窗的宽度,对应设计稿宽度
          viewportHeight: 844, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
          propList: ['*'], // 转化为vw的属性列表
          viewportUnit: 'vw', // 指定需要转换成视窗单位
          fontViewportUnit: 'vw', // 字体使用的视窗单位
          selectorBlaskList: ['.ignore-'], // 指定不需要转换为视窗单位的类
          mediaQuery: false, // 允许在媒体查询中转换`px`
          minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
          replace: true, // 是否直接更换属性值而不添加备用属性
          exclude: [], // 忽略某些文件夹下的文件或特定文件
          landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 1134 // 横屏时使用的视窗宽度
        }
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  router: {
    middleware: 'route'
  },
  env: {
    ...env[process.env.MODE]
  }
}
