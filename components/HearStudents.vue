<template>
  <div style="background: #fff">
    <div class="hear-students">
      <h1>Hear it from our students</h1>
    </div>
    <div class="hear-students-wrap width-1200">
      <!--  -->
      <!-- <el-carousel indicator-position="outside" height="480px">
        <el-carousel-item v-for="(item, index) in list" :key="index" :autoplay="false">
          <div class="hear-students-list"></div>
        </el-carousel-item>
      </el-carousel> -->
      <!-- <div class="carousel-arrow-left" @click="prev">
        <img src="@/assets/imgs/carousel-left.png" alt="" />
      </div> -->
      <div class="carousel-wrap">
        <el-carousel ref="carousel" :interval="3000" type="card" :autoplay="true" arrow="never" height="340px">
          <el-carousel-item v-for="(item, index) in list" :key="index">
            <div class="hear-students-item">
              <div>
                <el-rate v-model="rateVal" disabled> </el-rate>
              </div>
              <div>
                <img :src="item.avatar" />
              </div>
              <div>{{ item.name }}</div>
              <div>{{ item.level }}</div>
              <div>{{ item.heatText }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <div class="carousel-arrow-right" @click="next">
        <img src="@/assets/imgs/carousel-right.png" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rateVal: 5,
      list: [
        {
          name: 'Kayle',
          avatar: require(`@/assets/imgs/students/student-avatar1.png`),
          level: 'IGCSE Student',
          heatText: 'The results were exciting, I saw improvement in my ability to understand the case study and now I feel much more confidence when I have the business test!'
        },
        {
          name: 'Micca',
          avatar: require(`@/assets/imgs/students/student-avatar2.png`),
          level: 'A-Level Student',
          heatText: 'It helps me find past paper questions and practise by unit. After completing the quiz, I receive a report and then can go back to practice repeatedly. Really helpful!'
        },
        {
          name: 'Alex ',
          avatar: require(`@/assets/imgs/students/student-avatar3.png`),
          level: 'AP Student',
          heatText: 'I have noticed a significant improvement in the way I learn Mathematics. I have try to find the tutor and also use the app to have more practices. Love it!'
        },

        {
          name: 'Raouf',
          avatar: require(`@/assets/imgs/students/student-avatar4.png`),
          level: 'A-Level Student',
          heatText: "I've been using All As to study for my A-levels, and the wrong collection feature has been incredibly helpful. Highly recommended!"
        },
        {
          name: 'Abril ',
          avatar: require(`@/assets/imgs/students/student-avatar5.png`),
          level: 'A-Level Student',
          heatText: "I've tried a lot of study apps, but none of them have a feature like All As' wrong collection. I love that it gives me targeted practice exercises to improve my weak areas."
        },
        {
          name: 'Marlan',
          avatar: require(`@/assets/imgs/students/student-avatar6.png`),
          level: 'A-Level Student',
          heatText:
            "I found All As to be a great app for A Level exam preparation. The question bank system has the latest A Level past papers, and the practice tests provide real exam-style questions. I'm very satisfied with this app."
        },
        {
          name: 'Irina ',
          avatar: require(`@/assets/imgs/students/student-avatar7.png`),
          level: 'IGCSE Student',
          heatText:
            "All As' personalized analysis report helped me identify my weaknesses and provided a tailored learning plan to improve. It's a great feature that has boosted my confidence in exam preparation. Highly recommend the app for anyone looking to improve their results!"
        },
        {
          name: 'Alina',
          avatar: require(`@/assets/imgs/students/student-avatar8.png`),
          level: 'A-Level Student',
          heatText:
            'All As is the perfect app for A Level students preparing for exams. Detailed answer explanations and personalized analysis reports help identify weaknesses, with tailored practice tests to improve understanding. Highly recommend!'
        }
      ]
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.prev()
    },
    next() {
      this.$refs.carousel.next()
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__mask {
  opacity: 0.65;
}
::v-deep .is-active.el-carousel__item--card {
  width: 775px;
  transform: translateX(212.5px) scale(1) !important;
}

::v-deep .el-carousel__item {
  border-radius: 20px;
  box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.05);
}

::v-deep .el-carousel__indicators--outside {
  margin-top: 18px;
}
</style>
