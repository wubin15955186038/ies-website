<template>
  <div class="banner4">
    <div class="posion3">
      <!-- <img class="image-cover3" src="@/assets/imgs/cover3.png" /> -->
      <div class="look-talent3">Contact Us</div>
    </div>
    <div class="width-1200">
      <div class="nbk">
        <div class="Media">Media and Business Inquiries</div>
        <div class="Send-email">Send us an inquiry below or email us at <span class="email-st"> allas@cieo.com.cn</span></div>

        <div class="contact-style">
          <div class="inputName-st">
            <div class="inputName">First Name *</div>
            <div class="inputjoin"><el-input v-model="sendParams.firstName"></el-input></div>
          </div>
          <div>
            <div class="inputName">Last Name *</div>
            <div class="inputjoin"><el-input v-model="sendParams.lastName"></el-input></div>
          </div>
        </div>
        <div class="contact-style">
          <div class="inputName-st">
            <div class="inputName">Email *</div>
            <div class="inputjoin"><el-input v-model="sendParams.email"></el-input></div>
          </div>
          <div>
            <div class="inputName">Phone Number</div>
            <div class="inputjoin"><el-input v-model="sendParams.phoneNumber"></el-input></div>
          </div>
        </div>
        <div class="contact-styles">
          <div class="inputName">Message</div>
          <div><el-input v-model="sendParams.message" class="textareas" type="textarea" :rows="4"> </el-input></div>
        </div>
        <div class="submit"><el-button class="search-button" type="primary" @click="sendEmail">send</el-button></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      sendParams: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      },
      sendResult: {}
    }
  },
  head() {
    return {
      title: 'Contact Us - All As ',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'Contact,All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'Contact-description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  mounted() {
    startUapm()
  },

  methods: {
    async sendEmail() {
      for (const key in this.sendParams) {
        // console.log('test', key)
        if (!this.sendParams[key] && key !== 'phoneNumber' && key !== 'message') return this.$message.error('请输入必填信息  ' + key)
      }
      // console.log('发送前----', this.sendParams)
      await this.$api.sendEmail(this.sendParams).then((res) => {
        this.sendResult = res
        // console.log('发送后----', this.sendResult)
        if ((this.sendResult = true && this.sendResult != null)) {
          this.$message({
            message: '发送成功！',
            type: 'success'
          })
          //  this.loadTable();
        } else {
          this.$message.error('发送失败！')
        }
      })
      // code something
    }
  }
}
</script>
