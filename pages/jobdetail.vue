<template>
  <!-- 支付政策 -->
  <div class="bannerjob">
    <div class="job-detail-style">
      <div class="jobdetail-bj">
      <div class="job-problem-content">
        <div class="job-problem">About Us /</div>
        <div class="job-problem-type">Career</div>
      </div>
      <div class="layouts">
        <div class="job-tab-content">
          <div class="job-problem-title">{{this.EssayDetailsData.title}}</div>
          <div class="job-logo-content">{{this.EssayDetailsData.salaryRange}}</div>
          <div>
            <div class="job-introduce">
              <div class="posts">
                <span class="job-address-detail">{{this.EssayDetailsData.workAddr}}</span>
                <span class="job-avg-detail">{{this.EssayDetailsData.workYear}}</span>
                <span class="job-role-detail">{{this.EssayDetailsData.eduLevel}}</span>
                <div class="Posted-detail">Posted：{{this.EssayDetailsData.createTime}}</div>
              </div>
              <div class="job-email">If you are interested, </br> please send the email to: <span class="email-st"> allas@cice.com.cn</span></div>
            </div>
          </div>
          <div class="job-logo-content-title">Job Description</div>
          <div class="job-problem-detail">
            <p v-html="this.EssayDetailsData.detail"></p>
            
          </div>
        </div>
        <div class="qrcodes">
          <img class="qr-image" src="@/assets/imgs/jobqrcode.jpg" />
          <div class="Scanning">
            <div>Scan Here</div>
            <div>View and share jobs</div>
            <div>from your phone</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      id:'',
      EssayDetailsData:{},
    }
  },
  created() {
    // console.log("---获取的ID",this.$route.query.id)
    this.id= this.$route.query.id
    this.getEssayDetail()
  },
  mounted() {
    startUapm()
  },
  methods: {
    
    // 根据文章ID查询文章详情
    async getEssayDetail() {
      await this.$api.getEssayById(this.id).then((res) => {
        this.EssayDetailsData = res
        // console.log('----4', this.EssayDetailsData)
      })
      // code something
    },
  }
}
</script>
