<template>
  <!-- 服务条款 -->
  <div class="content">
    <div class="con-style">
      <div class="content-title">{{ this.termsData.columnName }}</div>
      <div class="content-style">
        <div class="content-explain1">
          <p v-html="this.termsData.detail"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      termsData: {}
    }
  },
  created() {
    this.getByColumnCode()
  },

  methods: {
    async getByColumnCode() {
      await this.$api.getByColumnCode('TERMS_OF_SERVICE').then((res) => {
        this.termsData = res
      })
      // code something
    }
  }
}
</script>
