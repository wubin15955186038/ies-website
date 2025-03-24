<template>
  <div class="container one-on-one-class">
    <div class="book-classes-header">
      <div class="width-1200">
        <div class="breadcrumb">
          <span>Book Classes</span>
          <span>/</span>
          <span class="text-blue">1-on-1 lessons</span>
        </div>
        <h1>
          The best<span class="text-blue"> {{ subject }} </span>tutor for you
        </h1>
        <div class="book-classes-text">
          <div>Looking for a great way to improve your study{{ subject }}? AllAs provides you with qualified {{ subject }}</div>
          <div>tutors. Hire an online {{ subject }} tutor to help you learn {{ subject }} better.</div>
          <div></div>
        </div>
        <div class="book-classes-select flex">
          <div>
            <el-popover trigger="click">
              <div class="book-classes-select-list">
                <div v-for="(item, index) in programmeOption" :key="index" class="book-classes-select-item">{{ item }}</div>
              </div>
              <div slot="reference" class="book-classes-select-btn">
                <span>Programme</span>
                <img src="@/assets/imgs/arrow-down-bold.png" />
              </div>
            </el-popover>
          </div>
          <div>
            <el-popover trigger="click">
              <div class="book-classes-select-list">
                <div v-for="(item, index) in subjectOption" :key="index" class="book-classes-select-item">{{ item }}</div>
              </div>
              <div slot="reference" class="book-classes-select-btn">
                <span>Subject</span>
                <img src="@/assets/imgs/arrow-down-bold.png" />
              </div>
            </el-popover>
          </div>
          <div>
            <el-date-picker style="position: absolute; top: 0; opacity: 0" type="date" placeholder="Lesson Time"> </el-date-picker>
            <div class="book-classes-select-btn">
              <span>Lesson Time</span>
              <img src="@/assets/imgs/arrow-down-bold.png" />
            </div>
          </div>
          <div>
            <el-popover trigger="click">
              <div class="book-classes-select-list">
                <div v-for="(item, index) in durationOption" :key="index" class="book-classes-select-item">{{ item }}</div>
              </div>
              <div slot="reference" class="book-classes-select-btn">
                <span>Duration</span>
                <img src="@/assets/imgs/arrow-down-bold.png" />
              </div>
            </el-popover>
          </div>
          <div>
            <el-popover v-model="teacherFromPop" trigger="click" width="450">
              <div class="book-classes-select-list">
                <div class="teacher-from">
                  <el-input v-model="keyWord1" prefix-icon="el-icon-search" placeholder="searching…"></el-input>
                  <div v-for="(item, index) in teacherFrom" :key="index" class="teacher-from-wrap">
                    <div class="teacher-from-title">{{ item.title }}</div>
                    <div class="teacher-from-list">
                      <div v-for="(aitem, aindex) in item.list" :key="aindex" class="teacher-from-item" @click="handleTeacherFrom(aitem)">{{ aitem }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div slot="reference" class="book-classes-select-btn">
                <span>Teacher is from</span>
                <img src="@/assets/imgs/arrow-down-bold.png" />
              </div>
            </el-popover>
          </div>
          <div>
            <el-popover trigger="click" width="375">
              <div class="book-classes-select-more">
                <div>Tutor Types</div>
                <div>
                  <el-radio-group v-model="radio">
                    <div><el-radio :label="1">Both</el-radio></div>
                    <div style="margin: 10px 0 0 0">
                      <el-radio :label="2">
                        <div class="radio-title">Professional Tutor</div>
                        <div style="margin: 8px 25px">
                          <div class="radio-text">A highly-skilled and qualified tutor who have</div>
                          <div class="radio-text">experience helping students reach their goals.</div>
                        </div>
                      </el-radio>
                    </div>
                    <div>
                      <el-radio :label="3">
                        <div class="radio-title">Community Tutor</div>
                        <div style="margin: 8px 25px">
                          <div class="radio-text">An advanced tutor who helps students through</div>
                          <div class="radio-text">informal tutoring or practicing.</div>
                        </div>
                      </el-radio>
                    </div>
                  </el-radio-group>
                </div>
                <div>Lesson Price</div>
                <div style="margin-bottom: 0">
                  <el-slider v-model="slider"></el-slider>
                </div>
                <div style="text-align: center">$0 - $X</div>
              </div>
              <div slot="reference" class="book-classes-select-btn">
                <span>More</span>
                <img src="@/assets/imgs/arrow-down-bold.png" />
              </div>
            </el-popover>
          </div>
        </div>
        <div class="book-classes-checkbox flex">
          <div class="book-classes-input">
            <el-input v-model="keyWord" placeholder="Name/Course/Interests">
              <div slot="prefix" class="book-classes-input-icon"><img src="@/assets/imgs/icon-search.png" /></div>
            </el-input>
          </div>
          <el-checkbox-group v-model="checkList" @change="handCheckType">
            <el-checkbox label="Instant Lesson"></el-checkbox>
            <el-checkbox label="Within 72 hours"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>

    <div v-if="listType !== 'Instant Lesson'" class="book-classes-list width-1100">
      <div class="book-classes-list-header">Find a private {{ subject }} tutor<span class="text-blue">5939 tutors</span></div>
      <div class="book-classes-list-tips text-gray">Choose from our experienced {{ subject }} tutors and get {{ subject }} lessons anytime and anywhere.</div>
      <div class="book-classes-list-wrap">
        <template v-for="(item, index) in teacherList">
          <div v-if="index !== 2" :key="index" :ref="`item${index}`" class="book-classes-item" style="margin-bottom: 0" :class="currIndex === index ? 'active' : ''">
            <div class="book-classes-item-wrap" @click="handleTrial(item, index)">
              <div class="book-classes-item-left">
                <div class="book-classes-item-avatar">
                  <img :src="item.avatar" :title="`[${item.name}] - A-Level English Tutors`" />
                </div>
                <div class="text-yellow">
                  <i class="el-icon-star-on"></i>
                  <span>5.0</span>
                </div>
                <div>201 Lessons</div>
              </div>
              <div class="book-classes-right">
                <div class="book-classes-right-text1">{{ item.name }}</div>
                <div class="book-classes-right-text2">
                  <span v-for="(aitem, aindex) in item.titles.split('|')" :key="aindex">{{ aitem }} <span v-if="aindex + 1 < item.titles.split('|').length"> | </span></span>
                </div>
                <div class="book-classes-right-text3">
                  <span v-for="(bitem, bindex) in item.subject.split(',')" :key="bindex">{{ bitem }}<span v-if="bindex + 1 < item.subject.split(',').length" class="text-blue"> | </span></span>
                </div>
                <div class="book-classes-right-text4">
                  <div class="text-row-3" :style="item.showMore ? 'display: unset' : ''">
                    {{ item.introduce }}
                  </div>
                  <!-- <div class="more-btn">more</div> -->
                </div>
                <div class="book-classes-right-text5">
                  <span>USD 7.00</span>
                  <span>/</span>
                  <span style="color: #999"> trial</span>
                  <nuxt-link to="/app">
                    <el-button size="medium" type="primary">Book Trial</el-button>
                  </nuxt-link>
                </div>
              </div>
              <template v-if="currIndex === index">
                <div class="book-classes-item-schedule">
                  <div><img :src="teacherList[currIndex].avatar" :title="`[${teacherList[currIndex].name}] - A-Level English Tutors`" /></div>
                  <div><img src="@/assets/imgs/1-1-schedule.png" /></div>
                  <div class="time">Based on your time zone: Asia/Guangzhou (UTC + 08:00)</div>
                  <nuxt-link to="/app">
                    <span>view full schedule <i class="el-icon-arrow-right"></i></span>
                  </nuxt-link>
                  <div class="play">
                    <nuxt-link to="/app"><img src="@/assets/imgs/icon-play.png" alt="" /> </nuxt-link>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <template v-else>
            <div :key="index" class="book-classes-item book-classes-item-other">
              <div class="book-classes-item-left-img">
                <img src="@/assets/imgs/online-meeting.png" />
              </div>
              <div class="book-classes-item-right-text">
                <div>Group Clase</div>
                <div><i class="el-icon-star-on"></i>Meet with 2-6 other students</div>
                <div><i class="el-icon-star-on"></i>Study with experienced tutors</div>
                <div><i class="el-icon-star-on"></i>Imrpove marks efficiently</div>
                <div>
                  <nuxt-link to="/groupclass">
                    <el-button size="medium" type="primary">Try Now</el-button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>

    <div v-else class="book-classes-list width-1100">
      <div class="book-classes-list-header1"><span class="text-blue" style="margin-left: 0">6</span> tutors</div>
      <div class="book-classes-list-tips1 text-gray">Find a tutor and start an Instant Lesson now!</div>
      <div class="book-classes-list-wrap" style="width: 100%">
        <div class="book-classes-list-card">
          <template v-for="(item, index) in teacherList">
            <div v-if="index > 3" :key="index" class="book-classes-list-cell">
              <nuxt-link to="/app">
                <div class="book-classes-list-cell-1">
                  <img :src="item.avatar" :title="`[${item.name}] - A-Level English Tutors`" />
                  <div>
                    <div class="font-16">{{ item.name }}</div>
                    <div class="font-14">{{ item.titles }}</div>
                    <div class="font-12 text-yellow">
                      <i class="el-icon-star-on"></i>
                      <span>5.0</span>
                      <span class="text-gray" style="margin-left: 12px">201 Lessons</span>
                    </div>
                  </div>
                </div>
                <div class="book-classes-list-cell-2">
                  <span v-for="(aitem, aindex) in item.titles.split('|')" :key="aindex" class="text-gray"
                    >{{ aitem }} <span v-if="aindex + 1 < item.titles.split('|').length" class="text-blue"> | </span></span
                  >
                </div>
                <div class="book-classes-list-cell-3">
                  <span v-for="(bitem, bindex) in item.subject.split(',')" :key="bindex">{{ bitem }}<span v-if="bindex + 1 < item.subject.split(',').length" class="text-blue"> | </span></span>
                  <span>+2</span>
                </div>
                <div class="book-classes-list-cell-4 text-row-3">
                  {{ item.introduce }}
                </div>
                <!-- <div class="more-btn">more</div> -->
                <div class="book-classes-list-cell-5">
                  <div>
                    <div class="font-12" style="color: #999">Trial</div>
                    <div class="font-16">USD 7.00</div>
                  </div>
                  <el-button class="font-18" size="medium" type="primary">Book Trial</el-button>
                </div>
              </nuxt-link>
            </div>
          </template>
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
      keyWord: '',
      keyWord1: '',
      programmeOption: ['A-Level', 'IGCSE', 'AP', 'IB', 'Alberta'],
      subjectOption: ['All', 'Mathematics', 'English ', 'Biology ', 'Chemistry', 'Economics', 'Business', 'More '],
      durationOption: ['30 minutes', '45 minutes', '60 minutes', '90 minutes'],
      programme: '',
      subject: '',
      radio: 1,
      slider: 36,
      checkList: [],
      currIndex: 0,
      listType: '', // Instant Lesson
      teacherFromPop: false,
      teacherFrom: [
        {
          title: 'Popular countries/regions',
          list: ['United Kingdom', 'United States', 'Canada']
        },
        {
          title: 'Other countries/regions',
          list: ['United Kingdom', 'United States', 'Canada', 'United Kingdom', 'United States', 'Canada']
        }
      ],
      teacherList: [
        {
          avatar: require(`@/assets/imgs/teachers/teacher1.png`),
          name: 'Julie De Meza',
          titles: 'Associate Prof | IGCSE | ALevel',
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
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher9.png`),
          name: 'Valeriana Colon',
          titles: 'Professor | ALevel',
          subject: 'Business',
          introduce:
            "I can't help but to smile anytime I'm asked: As business leader and certified teacher with over a decade of experience why have you committed to tutoring throughout your career? I have found teaching hones my skills like no other."
        },
        {
          avatar: require(`@/assets/imgs/teachers/teacher10.png`),
          name: 'Simone Govenderr',
          titles: 'TA| IGCSE',
          subject: 'Biology',
          introduce:
            'Hello, I am an engaging and encouraging teaching professional who provides a strong educational experience to students of all levels. I have a Bachelor of Science Degree and I am a qualified Microsoft Innovative educator I use technology to help enhance the knowledge and understanding of complex subjects for students. I am easily adaptable to different learning styles based on the students I am teaching.'
        }
      ]
    }
  },
  head() {
    return {
      subject: '[Subject]',
      title: 'Find tutors from top universities from $30/hr - All As',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'tutors,Group Class,All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'view-tutors-description',
          name: 'description',
          content: 'Find your perfect subject tutor and join our All As online classroom. Then book group class to fit your schedule.'
        }
      ]
    }
  },
  mounted() {
    startUapm()
  },
  methods: {
    handleTrial(item, index) {
      this.currIndex = index
    },
    handCheckType() {
      this.$nextTick(() => {
        if (this.checkList.length === 2) this.checkList.splice(0, 1)
        this.listType = this.checkList[0]
      })
    },
    handleTeacherFrom() {
      this.teacherFromPop = false
    },
    handleShowMore(item) {
      this.$set(item, 'showMore', !item.showMore)
    }
  }
}
</script>
<style lang="scss">
.font-12 {
  font-size: 12px;
}
.more-btn {
  cursor: pointer;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #036db7;
  line-height: 22px;
  margin-bottom: 15px;
  text-align: right;
}
</style>
