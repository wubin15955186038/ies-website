<template>
  <section class="container">
    <div class="banner">
      <el-carousel :interval="3000" arrow="never" :autoplay="false" height="500px">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <a :href="item.linkUrl" target="_blank">
            <img :ref="`imgHeight${index}`" :src="item.imgUrl" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="statistics">
      <div class="width-1200 flex">
        <div class="statistics-item">
          <div>1400+</div>
          <div>teachers with 10+ years teaching</div>
          <div>experience in international schools</div>
        </div>
        <div class="statistics-item">
          <div>10+</div>
          <div>subjects with 3 curricula</div>
          <div>embedded in customized solutions</div>
        </div>
        <div class="statistics-item">
          <div>98.7%</div>
          <div>success rate</div>
          <div>for international school admission</div>
        </div>
        <div class="statistics-item">
          <div>95%</div>
          <div>our student</div>
          <div>achieved significant progress</div>
        </div>
      </div>
    </div>
    <!-- <div class="download">
      <div class="width-1200">
        <div class="download-left">
          <div class="download-left-ttile">{{ download.title }}</div>
          <ul>
            <li v-for="(item, index) in download.text" :key="index">
              <i class="el-icon-star-on"></i> <span>{{ item }}</span>
            </li>
          </ul>
          <nuxt-link to="/app">
            <el-button size="medium" type="primary">DOWNLOAD APP</el-button>
          </nuxt-link>
        </div>
      </div>
    </div> -->
    <div class="allas-app">
      <div class="width-1200">
        <el-carousel indicator-position="outside" :interval="3000" arrow="never" :autoplay="false" height="700px">
          <el-carousel-item v-for="(item, index) in allasApp" :key="index">
            <div class="flex" style="padding-top: 94px">
              <div class="allas-app-img">
                <img :src="item.img1" />
              </div>
              <div class="allas-app-text">
                <h1>{{ item.title }}</h1>
                <div>{{ item.text }}</div>
                <div class="down-app-btn">
                  <nuxt-link to="/app">
                    <el-button>DOWNLOAD APP</el-button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <div class="allas-app-left">
        <el-carousel :interval="4000" type="card" arrow="never" :autoplay="false" height="900px" @change="allasAppChange">
          <el-carousel-item v-for="(item, index) in allasApp" :key="index">
            <div class="allas-app-img">
              <div v-show="allasAppIndex !== index" class="mask"></div>
              <img :src="item.img" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="allas-app-right">
        <div class="allas-app-text">
          <h1>{{ allasApp[allasAppIndex].title }}</h1>
          <div>{{ allasApp[allasAppIndex].text }}</div>
        </div>
      </div> -->
    </div>
    <div class="quick-link">
      <div class="quick-link-wrap flex">
        <div v-for="(item, index) in quickLink" :key="index" class="flex">
          <img :src="item.img" />
          <div>
            <div>{{ item.text1 }}</div>
            <div>{{ item.text2 }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="online-education width-1200">
      <h2>Online Education</h2>
      <div class="online-education-tips">Five international curricular systems, 32 academic subjects, and 500 online teachers</div>
      <div class="online-education-type">
        <div class="online-education-type-item flex">
          <div>{{ onlineEducation.programme.name }}</div>
          <div class="flex">
            <div v-for="(item, index) in onlineEducation.programme.list" :key="index" :class="index === searchForm.programme ? 'active' : ''" @click="handleSearch('programme', item, index)">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="online-education-type-item flex">
          <div>{{ onlineEducation.subject.name }}</div>
          <div class="flex">
            <div v-for="(item, index) in onlineEducation.subject.list" :key="index" :class="index === searchForm.subject ? 'active' : ''" @click="handleSearch('subject', item, index)">{{ item }}</div>
          </div>
        </div>
        <div class="online-education-type-item flex">
          <div>{{ onlineEducation.grade.name }}</div>
          <div class="flex">
            <div v-for="(item, index) in onlineEducation.grade.list" :key="index" :class="index === searchForm.grade ? 'active' : ''" @click="handleSearch('grade', item, index)">{{ item }}</div>
          </div>
        </div>
        <div class="online-education-type-item flex">
          <div>{{ onlineEducation.type.name }}</div>
          <div class="flex">
            <div v-for="(item, index) in onlineEducation.type.list" :key="index" :class="index === searchForm.type ? 'active' : ''" @click="handleSearch('type', item, index)">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="online-education-list width-1200">
        <div v-for="(item, index) in teacherList" :key="index" class="online-education-item">
          <div>
            <img class="avatar" :title="`[${item.name}] - A-Level English Tutors`" :src="item.avatar" />
            <div class="online-education-play flex">
              <img src="@/assets/imgs/icon-play.png" />
              <div>
                <div><i class="el-icon-star-on"></i> <span>5.0</span></div>
                <div class="lessons"><span>201 Lessons</span></div>
              </div>
            </div>
          </div>
          <div class="online-education-text1 flex">
            <div>
              <div>{{ item.name }}</div>
              <div>
                <span v-for="(aitem, aindex) in item.titles.split('|')" :key="aindex"
                  >{{ aitem }} <span v-if="aindex + 1 < item.titles.split('|').length"> <span style="color: #99c4e1; margin: 0 0 0 5px"> | </span></span>
                </span>
              </div>
            </div>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="online-education-text2 flex">
            <div>
              <span v-for="(bitem, bindex) in item.subject.split(',')" :key="bindex">{{ bitem }}<span v-if="bindex + 1 < item.subject.split(',').length" class="blue-line"> | </span></span>
            </div>
            <div>+2</div>
          </div>
          <div class="online-education-text3">Lessons start from</div>
          <div class="online-education-text4">USD 7.00</div>
        </div>
      </div>
      <!-- 跳转一对一页面 -->
      <nuxt-link to="/view-tutors">
        <div class="find-more">find more tutors <i class="el-icon-arrow-right"></i></div>
      </nuxt-link>
      <!-- <div class="find-tutor flex width-1200">
        <div>
          <img src="@/assets/imgs/online-education1.png" />
        </div>
        <div class="find-tutor-list">
          <h1>Find my tutor</h1>
          <div v-for="(item, index) in findTutor" :key="index" class="find-tutor-item">
            <div class="find-tutor-tips">{{ item.text }}</div>
            <div class="find-tutor-type">
              <div v-for="(aitem, aindex) in item.list" :key="aindex" :class="aitem.active ? 'active' : ''" @click="handleFindItem(aitem)">{{ aitem.text }}</div>
            </div>
          </div>
          <nuxt-link to="/app">
            <el-button size="medium" type="primary">find my tutor</el-button>
          </nuxt-link>
        </div>
      </div> -->
    </div>

    <HearStudents />

    <CooperationWrap />
    <OurNews />

    <AskedQuestions :questions="questions" />

    <AppDownload />
  </section>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      bannerHeight: '',
      download: {
        title: 'Revolutionize test prep & allow students to improve their marks efficiently',
        text: [
          'Intelligent push of massive exercises to improve the knowledge map',
          'Accurate AO ability assessment, tailored one-on-one coaching',
          'Millions of past paper questions classified & help crack knowledge points',
          'Studying with experienced teachers to save time',
          'Connecting international students in a knowledge community globally'
        ]
      },
      allasApp: [
        {
          img: require('@/assets/imgs/allas-app1.png'),
          img1: require('@/assets/imgs/allas-app-all1.png'),
          title: 'All As',
          text: 'Unleash your academic potential with our adaptive question bank system! Tailored for international school students , our platform uses knowledge graph correlation and adaptive learning to boost your academic performance. Master key concepts, ace exams, and reach new heights through personalized practice.'
        },
        {
          img: require('@/assets/imgs/allas-app2.png'),
          img1: require('@/assets/imgs/allas-app-all2.png'),
          title: 'Diagnostic Assessment',
          text: 'Our carefully curated questions, categorized by difficulty and knowledge dimensions, accurately diagnose your mastery of key concepts. Identify your learning weaknesses and embark on a targeted journey towards academic progress.'
        },
        {
          img: require('@/assets/imgs/allas-app3.png'),
          img1: require('@/assets/imgs/allas-app-all3.png'),
          title: 'Results Analysis',
          text: 'Say goodbye to inefficient home practice without guidance. Our platform automatically generates personalized reports based on wrong question analysis, knowledge point mastery, and ability dimension evaluation. Quickly and comprehensively understand your learning challenges and receive relevant suggestions for improvement.'
        },
        {
          img: require('@/assets/imgs/allas-app4.png'),
          img1: require('@/assets/imgs/allas-app-all4.png'),
          title: 'MCQ Practice',
          text: 'Dive into a vast collection of past paper questions and benefit from carefully organized knowledge point classification. Solidify your understanding of key concepts through timely and extensive practice.'
        },
        {
          img: require('@/assets/imgs/allas-app5.png'),
          img1: require('@/assets/imgs/allas-app-all5.png'),
          title: 'AI Records',
          text: 'Wave goodbye to cumbersome notebooks as our platform automatically classifies and compiles your wrong questions. Save time and cultivate a habit of organizing your learning journey.'
        },
        {
          img: require('@/assets/imgs/allas-app6.png'),
          img1: require('@/assets/imgs/allas-app-all6.png'),
          title: 'Past Papers',
          text: 'Say goodbye to time-consuming searches for answers. Access our efficient past paper library for streamlined review and preparation. Maximize your study time and excel in your exams.'
        }
      ],
      allasAppIndex: 0,
      quickLink: [
        {
          img: require('@/assets/imgs/quick-link-icon1.png'),
          text1: 'Smart question bank',
          text2: 'for free exercises'
        },
        {
          img: require('@/assets/imgs/quick-link-icon2.png'),
          text1: '1-on-1',
          text2: 'customized courses'
        },
        {
          img: require('@/assets/imgs/quick-link-icon3.png'),
          text1: ' One-stop learning',
          text2: 'in group class'
        }
      ],
      onlineEducation: {
        programme: {
          name: 'Programme',
          list: ['A-Level', 'AP', 'IB', 'Alberta', 'IGCSE', 'More']
        },
        subject: {
          name: 'Subject',
          list: ['All', 'Mathematics', 'English ', 'Biology ', 'Chemistry', 'Economics', 'Business', 'More ']
        },
        grade: {
          name: 'Grade',
          list: ['G6  - G12']
        },
        type: {
          name: 'Type',
          list: ['All', '1-on-1 Lessons', 'Group Class']
        }
      },
      teacherList: [
        {
          avatar: require(`@/assets/imgs/teachers/teacher1.png`),
          name: 'Julie De Meza',
          titles: 'Associate Prof | IGCSE | AP',
          subject: 'Mathematics, Physics',
          introduce:
            'Taught for 35 years in the UK (Key stage 3, IGCSE, A level) curriculum system and the US curriculum for grades 6-12, and in recent years also taught in grades 2-5 in primary schools. Over 18 years of teaching experience in China and the Asia Pacific region.'
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher2.png`),
          name: 'Amy Putman',
          titles: 'Associate Prof|IGCSE',
          subject: 'English',
          introduce:
            'Taught humanities and arts at the University of Edinburgh. With nearly 10 years of rich teaching experience, I have unique insights and effective teaching system methods for the teaching of English literature, social science and other humanities.Taught in many international schools around the world and served as subje ct leaders and principals.'
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher3.png`),
          name: 'Jacob Porter',
          titles: 'Lecturer | IGCSE',
          subject: 'Mathematics, Science',
          introduce:
            "Holder of TEFL certificate with 6+ years of teaching experience. Taught English, Mathematics and science in a number of international schools and educational institutions in Southeast Asia. Rigorous teaching, logical classroom design, good at combining teaching content with daily life, ask questions to assess students' grasp of knowledge points and then conduct targeted teaching"
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher4.png`),
          name: 'Monica Kumar',
          titles: 'Lecturer | ALevel | IGCSE',
          subject: 'Chemistry',
          introduce:
            'Specialist, qualified Science Teacher with a strong background in Chemistry. Tutoring experience of seven years. Builds great rapport with students to allow them to reach their individual goals. Strong understanding of how best to support student learning and development.'
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher5.png`),
          name: 'Johnny Nicolakakis',
          titles: 'Lecturer | ALevel',
          subject: 'Mathematics, Physics',
          introduce:
            'I have been involved with teaching and tutoring for more than 5 years and have taught in 3 different countries. During this time I have across multiple levels in multiple subjects including Mathematics, Physics, ESL and other proficiency examinations such as TOEIC and IELTS.'
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher6.png`),
          name: 'Brent Little',
          titles: 'Professor | IGCSE | ALevel',
          subject: 'Mathematics, Physics',
          introduce: 'Teaching Online from home my office with fibre Internet 1000/500 Mbps, I am now in Thailand SE Asia. The morning here is early afternoon in Canada and the US. '
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher7.png`),
          name: 'Ruckfa Mek Nuanual',
          titles: 'Lecturer | ALevel | IB',
          subject: 'Chemistry, Mathematics',
          introduce:
            'I have been teaching Advanced Placement and A-Level Chemistry, International Baccalaureate (IB) Diploma Chemistry, IB Middle Years Program (MYP) Science, IGCSE Chemistry, Key Stage 3 and 4 Science, Mathematics (from grade 6 math to Calculus), and/or American middle/high school general science at the international school level. In addition to having taught at international schools, I have an undergraduate and master’s degree in Chemical Engineering with three years of Environmental Consulting experience in the United States.'
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher8.png`),
          name: 'Andrew Tapper',
          titles: 'TA | ALevel | IB | IGCSE',
          subject: 'Chemistry',
          introduce:
            'During my studies and before starting my career as a pharmaceutical engineer I have tutored A-Level, IB and GCSE students based in the UK and France. I have always loved tutoring students and helping them achieve the best of their potential. I tailor my lessons to every student using a fluid style of teaching where we focus on the areas you are struggling with most. Most importantly, I provide exciting lessons full of problem solving and fun learning that I make sure all of my students enjoy!'
        }
      ],
      searchForm: {
        programme: 4,
        subject: 0,
        grade: null,
        type: 0
      },
      findTutor: [
        {
          text: 'I’m learning…',
          list: [{ text: 'Mathematics' }, { text: 'English' }, { text: 'Physics' }, { text: 'Biology' }, { text: 'Chinese' }, { text: 'Chemistry' }, { text: 'Business' }, { text: 'More' }]
        },
        {
          text: 'My current level is…',
          list: [{ text: 'Ordinary' }, { text: 'Fair' }, { text: 'Good' }, { text: 'Excellent' }]
        },
        {
          text: 'I’m learning for…',
          list: [{ text: 'Score raising' }, { text: 'Supplement' }, { text: 'Enhancement' }]
        }
      ],
      rate: 5,
      questions: [],
      bannerList: []
    }
  },
  head() {
    return {
      title: 'All As - A leader in international education technology',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'All As,A-Level,IGCSE,IB,edexcel,tutors,past papers,notes,maths, biology,chemistry,physics,english' },
        {
          hid: 'index-description',
          name: 'description',
          content:
            'Achieve A* with AII As - the top app for A-Level exams! AII As has 40,000+ past papers organized by topic. With one-to-one online live tutors, we help you achieve A*. Download now and unlock your potential!'
        }
      ]
    }
  },
  created() {
    this.getEssaylist()
  },
  mounted() {
    startUapm()
    this.getbannerTops()
  },
  methods: {
    // 获取网站首页banner
    async getbannerTops() {
      await this.$api.getbannerTops().then((res) => {
        this.bannerList = res
      })
    },
    handleSearch(type, item, index) {
      this.searchForm[type] = index
    },
    allasAppChange(index) {
      this.allasAppIndex = index
    },
    handleFindItem(aitem, aindex) {
      if (aitem.active) {
        this.$set(aitem, 'active', false)
      } else {
        this.$set(aitem, 'active', true)
      }
    },
    async getEssaylist() {
      await this.$api.getEssaylist({ columnCode: 'FAQ_FOR_TUTOR' }).then((res) => {
        if (res.length) {
          const list = res.slice(0, 5)
          list.forEach((item) => {
            const range = document.createRange()
            const fragment = range.createContextualFragment(item.detail)
            item.detail = fragment.textContent
          })
          this.questions = list
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
::v-deep .el-carousel__indicators--outside button {
  background: #036db7;
}
</style>
