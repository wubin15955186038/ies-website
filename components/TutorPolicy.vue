<template>
  <!-- 助教政策 -->
  <div class="content">
    <div class="con-style">
      <div class="content-title">
        {{ this.tutorData.columnName }}
        <span class="update-time">(last updated on {{ this.tutorData.opTime }})</span>
      </div>
      <div class="content-style">
        <div class="content-explain1">
          <p v-html="this.tutorData.detail"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tutorData: {}
    }
  },
  created() {
    this.getByColumnCode()
  },

  methods: {
    async getByColumnCode() {
      await this.$api.getByColumnCode('TUTOR_POLICY').then((res) => {
        this.tutorData = res
      })
      // code something
    }
  }
}
</script>
