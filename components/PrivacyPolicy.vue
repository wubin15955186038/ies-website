<template>
  <!-- 隐私协议 -->
  <div class="content">
    <div class="con-style">
      <div class="content-title">
        {{ this.privacyData.columnName }}
        <span class="update-time">(last updated on {{ this.privacyData.opTime }})</span>
      </div>
      <div>
        <div class="content-explain1">
          <p v-html="this.privacyData.detail"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privacyData: {}
    }
  },
  created() {
    this.getByColumnCode()
  },

  methods: {
    async getByColumnCode() {
      await this.$api.getByColumnCode('PRIVACY_POLICY').then((res) => {
        this.privacyData = res
      })
      // code something
    }
  }
}
</script>
