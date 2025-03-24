<template>
  <!-- 支付政策 -->
  <div class="content">
    <div class="con-style">
      <div class="content-title">
        {{ this.paymentData.columnName }}
        <span class="update-time">(last updated on {{ this.paymentData.opTime }})</span>
      </div>
      <div class="content-style">
        <div class="content-explain1">
          <p v-html="this.paymentData.detail"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentData: {}
    }
  },
  created() {
    this.getByColumnCode()
  },

  methods: {
    async getByColumnCode() {
      await this.$api.getByColumnCode('PAYMENT_POLICY').then((res) => {
        this.paymentData = res
      })
      // code something
    }
  }
}
</script>
