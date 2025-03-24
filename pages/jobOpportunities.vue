<template>
  <div class="bannerjob">
    <div class="posion">
      <!-- <img class="image-cover" src="@/assets/imgs/cover1.png" /> -->
      <div class="look-talent">AllAs is looking for talent</div>
    </div>
    <div class="layout">
      <div>
        <div class="search-content">
          <div class="search">
            <div class="searchs">
              <el-input v-model="essayParams.title" class="oio" prefix-icon="el-icon-search" placeholder="Please input a job title" clearable> </el-input>
            </div>
            <div><el-button type="primary" class="search-button" @click="getEssayPage">Search</el-button></div>
          </div>
          <div class="select-tab">
            <div class="Location">
              <div>Location:</div>
              <div class="Location-content">
                <div class="Location-content-list" :style="cityMore ? 'height: auto' : ''">
                  <div ref="locationList" class="flex" style="flex-wrap: wrap">
                    <div v-for="(item, index) in citysData" :key="index" class="Location-detail" :class="currentIndex === index ? 'cocor' : ''" @click="noDetailss(item, index)">{{ item }}</div>
                  </div>
                </div>
                <div v-if="locationShowMore" class="pointer text-blue" @click="cityMore = !cityMore">{{ !cityMore ? '更多' : '收起' }}</div>
              </div>
            </div>
            <div class="Focation">
              <div>Function:</div>
              <div class="Focation-content">
                <div class="Focation-content-list" :style="cityMores ? 'height: auto' : ''">
                  <div ref="locationLists" class="flex" style="flex-wrap: wrap">
                    <div v-for="(item, index) in positionsData" :key="index" class="Location-detail" :class="currentIndexs === index ? 'cocor' : ''" @click="noDetailsss(item, index)">{{ item }}</div>
                  </div>
                </div>
                <div v-if="locationShowMore" class="pointer text-blue" @click="cityMores = !cityMores">{{ !cityMores ? '更多' : '收起' }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="job-content">
          <div v-for="(item, index) in EssayPageData" :key="index" class="job-style" @click="noDetails(item)">
            <div class="job">
              <div class="job-name">{{ item.title }}</div>
              <div class="job-salary">{{ item.salaryRange }}</div>
            </div>
            <div class="job-info">
              <div>
                <span class="job-address">{{ item.workAddr }}</span>
                <span class="job-avg">{{ item.workYear }}</span>
                <span class="job-role">{{ item.eduLevel }}</span>
              </div>
              <div class="Posted">Posted：{{ item.createTime }}</div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              :page-sizes="[5, 10, 15, 20]"
              :page-size="essayParams.limit"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="qrcode">
        <img class="code-image" src="@/assets/imgs/jobqrcode.jpg" />
        <div class="Scanning">
          <div>Scan Here</div>
          <div>View and share jobs</div>
          <div>from your phone</div>
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
      currentIndex: 0,
      currentIndexs: 0,
      essayParams: {
        columnId: '',
        columnCode: 'CAREER',
        typeCode: '',
        limit: 5,
        pageNo: 1,
        title: '',
        workAddr: '',
        position: ''
      },
      citysData: {},
      positionsData: {},
      EssayPageData: {},
      total: 0,
      cityMore: false,
      locationShowMore: false,
      cityMores: false,
      locationShowMores: false
    }
  },
  head() {
    return {
      title: 'Career - All As',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: '[Career],All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'Career-description',
          name: 'description',
          content: 'edexcel'
        }
      ]
    }
  },
  created() {
    this.getEssayPage()
  },
  mounted() {
    startUapm()
    this.citys()
    this.positions()
  },
  methods: {
    handleSizeChange(val) {
      this.essayParams.limit = val
      this.getEssayPage()
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.essayParams.pageNo = val
      this.getEssayPage()
      // console.log(`当前页: ${val}`)
    },
    // 查询城市列表
    async citys() {
      await this.$api.citys('CAREER').then((res) => {
        // console.log('----1', res)
        this.citysData = res
        this.citysData.unshift('ALL')
        this.$nextTick(() => {
          const height = this.$refs.locationList.offsetHeight
          if (height > 37) this.locationShowMore = true
          console.log('object :>> ', this.$refs.locationList.offsetHeight)
        })
      })
      // code something
    },
    // 职位职能列表
    async positions() {
      await this.$api.positions('CAREER').then((res) => {
        // console.log('----2', res)
        this.positionsData = res
        this.positionsData.unshift('ALL')
        this.$nextTick(() => {
          const height = this.$refs.locationLists.offsetHeight
          if (height > 37) this.locationShowMores = true
          // console.log('object :>> ', height)
        })
      })
      // code something
    },
    // 查询工作机会列表
    async getEssayPage() {
      // console.log('----3', this.essayParams)
      await this.$api.getEssayPage(this.essayParams).then((res) => {
        this.EssayPageData = res.data
        this.total = res.total
        // console.log('----3', this.EssayPageData)
      })
      // code something
    },
    noDetails(item) {
      this.$router.push({ path: '/jobdetail', query: { id: item.id } })
    },
    noDetailss(item, index) {
      this.essayParams.workAddr = item
      this.currentIndex = index
      if (item === 'ALL') {
        this.essayParams.workAddr = ''
      }
      this.getEssayPage()
    },
    noDetailsss(item, index) {
      this.essayParams.position = item
      this.currentIndexs = index
      if (item === 'ALL') {
        this.essayParams.position = ''
      }
      this.getEssayPage()
    }
  }
}
</script>
<style scoped>
.el-button--primary {
  color: #ffffff;
  background-color: #036db7;
  border-color: #036db7;
  border-radius: 0px;
}
.oio /deep/ .el-input__inner {
  border-radius: 0px;
}
</style>
