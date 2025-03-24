<template>
  <div class="our-news">
    <div class="width-1200">
      <h1>News</h1>
      <div class="news-list">
        <div v-for="(item, index) in list" :key="index" class="news-item" @click="goDetails(item)">
          <img :src="item.imgUrl" alt="" />
          <div class="news-title">{{ item.title }}</div>
          <div class="news-date">{{ item.createTime }}</div>
          <div class="news-details">{{ item.detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getEssayPage()
  },
  methods: {
    getEssayPage() {
      const params = {
        columnCode: 'NEWS_ROOM'
      }
      this.$api.getEssaylist(params).then((res) => {
        if (res && res.length) {
          const list = res.slice(0, 3)
          list.forEach((item) => {
            const range = document.createRange()
            const fragment = range.createContextualFragment(item.detail)
            item.detail = fragment.textContent
          })
          this.list = list
        }
      })
    },
    goDetails(item) {
      this.$router.push({ path: `/news/${item.title}`, query: { id: item.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.our-news {
  background: #fbfdff;
  padding: 55px 0 70px 0;
  h1 {
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 45px;
    position: relative;
    text-align: center;
    &::after {
      content: '';
      display: block;
      width: 88px;
      height: 1px;
      background: #036db7;
      border: 3px solid #036db7;
      border-radius: 10px;
      position: absolute;
      bottom: -21px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .news-list {
    display: flex;
    margin-top: 76px;
    .news-item {
      flex: 1;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      overflow: hidden;
      padding-bottom: 30px;
      cursor: pointer;
      &:nth-child(2) {
        margin: 0 30px;
      }
      img {
        width: 100%;
        height: 205px;
        object-fit: cover;
      }
      .news-title {
        height: 60px;
        font-size: 22px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 30px;
        margin: 20px 20px 10px 20px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      .news-date {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
        padding: 0 20px;
        margin-bottom: 15px;
      }
      .news-details {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        padding: 0 20px;
        box-sizing: border-box;
        line-height: 20px;
        color: #666;
      }
      .news-btn {
        cursor: pointer;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #036db7;
        line-height: 22px;
        margin-bottom: 30px;
        text-align: right;
        padding: 0 20px;
      }
    }
  }
}
</style>
<style lang="scss">
.news-details p {
  line-height: 20px;
  font-size: 16px;
  color: #666666;
}
</style>
