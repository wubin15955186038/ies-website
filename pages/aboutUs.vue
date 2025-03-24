<template>
  <div class="bannerAbouts">
    <div class="posions">
      <div class="jianju">
        <div class="about-talent">About Us</div>
        <div class="Core-Values2"></div>
        <div class="about-talents">
          All As Online Education is a member of Canadian International Education Organization(CIEO). We specialize in providing full-subject tutoring of international curriculum like IGCSE, A-level,
          IB, AP, intensive courses for language and academic ability improvement as well as preparation for standardized English tests like TOEFL, IELTS, PTE and international competitions. All As
          has a team of professional and experienced teachers for international education, dedicated to providing students with high-quality online courses. The Smart Adaptation Question Bank app
          developed by All As helps analyze students' academic weakness and make study plans accordingly with Al, and hence helps them gain academic progress.
        </div>
      </div>
    </div>
    <div class="back">
      <div class="introduce-st">
        <div class="introduce-us">
          All As has established in-depth cooperation with various international universities/schools in mainland China, Macao, Thailand, and other places, providing on-campus and off-campus course
          support, aiming to provide students with one-stop college/international school admission planning and course tutoring, broaden their horizons, and achieve their dreams of attending
          prestigious schools. All As is devoted to helping students achieve academic success through high-quality online tutoring and a smart learning platform!
        </div>
        <div class="image-style">
          <div class="image1">
            <img class="image-covers1" src="@/assets/imgs/pexels-pixabay-267885.png" />
            <div class="OurVision">Our Vision</div>
            <div class="OurVisions">Become a leader in international education technology</div>
          </div>
          <div class="image2">
            <img class="image-covers2" src="@/assets/imgs/221108.png" />
            <div class="OurVision">Our Mission</div>
            <div class="OurVisions">Empowering students for efficient and convenient academic advancement.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h1 class="medium">{{ item }}</h1>
      </el-carousel-item>
      </el-carousel> -->
    <div class="Story">
      <div class="Our-Story">
        <div class="Storytitle">Our Story</div>
      </div>
      <div class="us-Story" @mousedown="gtouchstart" @mousemove="gtouchmove" @mouseup="gtouchend">
        <div class="Story-platform">
          <div class="Story-time">In 2000</div>
          <div class="Story-servce">Senior international education service platform</div>
          <div class="Story-introduce">
            The All As intelligent learning platform is an incubation project of the Canadian International Educational Organization (CIEO). Founded in 2000, CIEO has developed into a group with more
            than 30 schools and independent institutions at home and abroad, including K12 international schools, kindergartens, foreign language schools, children's growth centers, online education,
            smart education platforms, and education incubators, covering the Greater Bay Area and Thailand.
          </div>
        </div>
        <div class="Story-platform">
          <div class="Story-time">In 2020</div>
          <div class="Story-servce">Senior international education service platform</div>
          <div class="Story-introduce">
            After rigorous international accreditation, CIEO was granted qualifications to operate International Curriculum of Alberta in Canada, Cambridge in UK, and IB. As of 2022, it has a
            professional teaching team of more than 2,300 people, including nearly 500 foreign teachers, providing high-standard international education services for nearly 20,000 students in more
            than 40 countries and regions around the world.
          </div>
        </div>
        <div class="Story-platform">
          <div class="Story-time">In 2021</div>
          <div class="Story-servce">Top teaching and research team</div>
          <div class="Story-introduce">
            We have a top teaching and research team, with core members international school supervisors and directors who have been engaged in the field of international education for more than 20
            years and private education leaders and experts with rich teaching and research experience in international education.
          </div>
        </div>
      </div>
    </div>
    <div class="sjx-style">
      <div class="Core-Values">Our Core Values</div>
      <div class="Core-Values1"></div>
    </div>
    <div class="icon-arrangement">
      <div class="icon-style">
        <div class="icon-introduce">
          <div><img class="icon1" src="@/assets/imgs/global.png" /></div>
          <div>
            <div class="Global">Act with a Global Mindset</div>
            <div class="Globals">We embrace diversity and draw inspiration from different cultures.</div>
          </div>
        </div>
        <div class="icon-introduce">
          <div><img class="icon1" src="@/assets/imgs/study.png" /></div>
          <div>
            <div class="Global">Enjoy the Journey</div>
            <div class="Globals">We're passionate about making learning an enjoyable and meaningful experience.</div>
          </div>
        </div>
        <div class="icon-introduce">
          <div><img class="icon1" src="@/assets/imgs/trophy.png" /></div>
          <div>
            <div class="Global">Make a Difference</div>
            <div class="Globals">We strive for progress, prioritize outcomes, and are dedicated to making a great impact together.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="data-introduce">
      <div class="data-1200d">
        <div class="date-style">
          <div class="value-introduce">480+</div>
          <div class="detail-introduce">Screened high-quality professional international teaching and research team, foreign teachers account for 70%</div>
        </div>
        <div class="date-style">
          <div class="value-introduce">5,000+</div>
          <div class="detail-introduce">With more than 5,000 registered users, the key to international school students’ academic success</div>
        </div>
        <div class="date-style">
          <div class="value-introduce">22,000+</div>
          <div class="detail-introduce">Attracted more than 220,000 followers from 16 countries</div>
        </div>
      </div>
    </div>
    <div>
      <div class="picture-postion">
        <div class="width-1200">
          <div class="join">Join Us</div>
          <div class="join-introduce">
            Spread the joy of learning and help international students across the world share ideas and languages. <br />Join our passionate team of international education enthusiasts today!
          </div>
          <div class="video-introduce">
            <div class="videos">play full video<i class="el-icon-arrow-right"></i></div>
            <div class="opening" @click="noDetails()">view current openings</div>
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
      horizontal1: '',
      horizontal2: '',
      result1: '',
      result2: '',
      variable: false
    }
  },
  head() {
    return {
      title: 'About Us - All As',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: '[About] Us,All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'aboutus-description',
          name: 'description',
          content: 'edexcel'
        }
      ]
    }
  },
  mounted() {
    startUapm()
  },
  methods: {
    gtouchstart($event) {
      this.horizontal1 = $event
      this.variable = true
      // console.log('-----gtouchstart', $event)
    },
    gtouchmove($event) {
      this.horizontal2 = $event
      if (!this.variable) return true
      // console.log('-----gtouchmove', $event)
      if (this.horizontal2.clientX > this.horizontal1.clientX) {
        this.result1 = this.horizontal2.clientX - this.horizontal1.clientX
      } else if (this.horizontal2.clientX < this.horizontal1.clientX) {
        this.result2 = this.horizontal1.clientX - this.horizontal2.clientX
      }
    },
    gtouchend() {
      this.variable = false
    },
    noDetails() {
      this.$router.push({ path: '/jobOpportunities' })
    }
  }
}
</script>
