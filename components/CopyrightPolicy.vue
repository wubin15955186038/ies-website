<template>
  <!-- 版权政策 -->
  <div class="content">
    <div class="con-style">
      <div class="content-title">
        {{ this.policyData.columnName }}
        <span class="update-time">(last updated on {{ this.policyData.opTime }})</span>
      </div>
      <div class="content-style">
        <div class="content-explain1">
          <p v-html="this.policyData.detail"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      policyData: {}
    }
  },
  created() {
    this.getByColumnCode()
  },

  methods: {
    async getByColumnCode() {
      await this.$api.getByColumnCode('COPYRIGHT_POLICY').then((res) => {
        this.policyData = res
      })
      // code something
    }
  }
}
</script>
