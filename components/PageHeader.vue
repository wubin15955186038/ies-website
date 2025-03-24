<template>
  <header class="header">
    <div class="header-wrap width-1200">
      <div class="logo">
        <nuxt-link to="/">
          <img src="@/assets/imgs/logo-c.png" />
          <!-- <span>{{ title }}</span> -->
        </nuxt-link>
      </div>
      <div class="nav">
        <div v-for="(item, index) in list" :key="index" class="nav-item">
          <div v-if="!item.children" class="el-dropdown-link">
            <a v-if="item.link" :href="item.path" target="_blank">{{ item.name }}</a>
            <nuxt-link v-else :to="item.path">{{ item.name }}</nuxt-link>
          </div>
          <el-dropdown v-else trigger="click">
            <div class="el-dropdown-link">
              <span>{{ item.name }}</span>
              <i v-if="item.children && item.children.length" class="el-icon-arrow-down"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(aitem, aindex) in item.children" :key="aindex" :command="aitem.path">
                <nuxt-link :to="aitem.path">{{ aitem.name }}</nuxt-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'All As - A leader in international education technology ', // logo标题
      list: [
        {
          name: 'Find a Tutor',
          children: [
            { name: '1-on-1 lessons', path: 'view-tutors' }, // 一对一
            { name: 'group class', path: 'groupclass' } // 班课
          ]
        },
        { name: 'Download App', path: '/app' },
        {
          name: 'About Us',
          children: [
            { name: 'About', path: '/aboutus' }, // 工作机会
            { name: 'Career', path: '/jobOpportunities' }, // 工作机会
            { name: 'News', path: '/news' }, // 新闻资讯
            { name: 'Legal', path: '/privacy?type=legal' }, // 服务条款--统一跳转到协议
            { name: 'Privacy', path: '/privacy?type=privacy' }, // 隐私协议--统一跳转到协议
            { name: 'Contact', path: '/contact' } // 联系我们
          ]
        },

        { name: 'Become a Tutor', path: 'https://teach.all-as.com/index', link: true },
        {
          name: 'USD $',
          children: [
            { name: 'CNY ¥', path: '#' }, // 一对一
            { name: 'THB ฿', path: '#' } // 班课
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 14px;
  line-height: 74px;
  background: #fff;
  position: fixed;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.05);
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .header-wrap {
    margin: 0 auto;
    display: flex;
    color: #fff;
    .logo {
      display: flex;
      font-size: 16px;

      a {
        line-height: 75px;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
      }
      img {
        width: 119px;
        height: 42px;
      }
    }
    .nav {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .nav-item {
        // text-align: center;
        margin-right: 40px;
        display: flex;
      }
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
  }
}
::v-deep .el-dropdown-menu__item {
  padding: 0;
  a {
    padding: 0 20px;
    display: block;
  }
}
</style>
