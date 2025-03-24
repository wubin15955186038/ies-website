<template>
  <div class="container">
    <div class="book-classes-header">
      <div class="width-1200">
        <div class="breadcrumb">
          <span>Book Classes</span>
          <span>/</span>
          <span class="text-blue">Group Class</span>
        </div>
        <h1 style="margin-bottom: 40px">
          All As <span class="text-blue"> {{ subjectTitle }} </span>Group Class
        </h1>
        <div class="book-classes-tips flex">
          <div>
            <img src="@/assets/imgs/groupclass-icon1.png" />
            <div>select your</div>
            <div>subject & time</div>
          </div>
          <div>
            <img src="@/assets/imgs/groupclass-icon2.png" />
            <div>book & pay</div>
            <div>as you go</div>
          </div>
          <div>
            <img src="@/assets/imgs/groupclass-icon3.png" />
            <div>Join a video call</div>
            <div>with your classmates</div>
          </div>
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
            <el-popover v-model="teacherFromPop" trigger="click" width="450">
              <div class="book-classes-select-list">
                <div class="teacher-from">
                  <el-input prefix-icon="el-icon-search" placeholder="searching…"></el-input>
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
                <div style="text-align: center">$30 - $80</div>
              </div>
              <div slot="reference" class="book-classes-select-btn">
                <span>More</span>
                <img src="@/assets/imgs/arrow-down-bold.png" />
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <div class="book-classes-list width-1100">
      <div v-for="(item, index) in 5" :key="index" class="book-classes-item">
        <nuxt-link to="/app">
          <div class="book-classes-today">Today，Dec 27th</div>
          <div class="book-classes-wrap">
            <div class="wrap-text1">Dec 27th, 17:00 - 18:00</div>
            <div class="wrap-text2">IGCSE Business：Get Over It! (Reviewing & short answers) [IG/BUS]</div>
            <div class="wrap-text3">
              Wish you a merry christmas and a happy new year! Wish you a merry christmas and a happy new year! Wish you a merry christmas and a happy new year! Wish you a merry christmas and a happy
              new year! Wish you a merry christmas and a happy new year! Wish you a merry christmas and a happy new year! Wish you a merry christmas and a happy new year! Wish you a merry christmas
              and a happy new year! Wish you a merry christmas and a happy new year! Wish you a merry christmas and a happy new year!
            </div>
            <!-- <div class="more-btn">more</div> -->
            <div class="wrap-text4">
              <div>IGCSE Business</div>
              <div>Review</div>
              <div>Short Answers</div>
            </div>
            <div class="wrap-text5">
              <div>
                <img src="@/assets/imgs/groupclass-icon1.png" />
                <span>Group Class with Merry Christmas</span>
                <div>USD 7.00</div>
              </div>
              <div>
                <div>
                  <div class="booked">
                    <img src="@/assets/imgs/groupclass-icon1.png" />
                    <img src="@/assets/imgs/groupclass-icon1.png" />
                    <img src="@/assets/imgs/groupclass-icon1.png" />
                  </div>
                  <span class="status">3 spots left</span>
                  <el-button size="medium" type="primary">Book Now</el-button>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import startUapm from '../plugins/uapm'
export default {
  data() {
    return {
      subjectTitle: '',
      programmeOption: ['A-Level', 'IGCSE', 'AP', 'IB', 'Alberta'],
      subjectOption: ['All', 'Mathematics', 'English ', 'Biology ', 'Chemistry', 'Economics', 'Business', 'More '],
      programme: '',
      subject: '',
      radio: 1,
      slider: 36,
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
      ]
    }
  },
  mounted() {
    startUapm()
  },
  head() {
    return {
      title: 'Book Classes: Group Class - All As',
      titleTemplate: '',
      meta: [
        { name: 'keywords', content: 'tutors,one-to-one,All As,A-Level,IGCSE,IB,edexcel' },
        {
          hid: 'groupclass-description',
          name: 'description',
          content: 'Find your perfect subject tutor and join our All As online classroom. Then book one-to-one online lessons to fit your schedule.'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.more-btn {
  cursor: pointer;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #036db7;
  line-height: 22px;
  margin-bottom: 15px;
  text-align: right;
  // padding: 0 20px;
}
</style>
