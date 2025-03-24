<template>
  <div class="asked-questions">
    <h1>Read Our FAQs</h1>
    <div v-for="(item, index) in questions" :key="index" class="asked-questions-item" @click="handleItem(item, index)">
      <div>
        <span>{{ item.title }}</span> <i :class="!item.active ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
      </div>
      <div v-show="item.active" class="asked-questions-item-details text-row-3">
        <div>{{ item.detail }}</div>
      </div>
      <div v-show="item.active" class="text-blue" @click="handleMore(item)">more</div>
    </div>
    <nuxt-link to="/privacy">
      <div class="asked-questions-item">
        <div>
          <span>View all</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleItem(item, index) {
      this.questions.forEach((aitem, aindex) => {
        if (index !== aindex) {
          this.$set(aitem, 'active', false)
        }
      })
      this.$set(item, 'active', !item.active)
    },
    handleMore({ id, columnName }) {
      const types = columnName === 'FAQ for tutor' ? 'Tutors' : 'Students'
      this.$router.push({
        path: '/problemdetails',
        query: { id, types }
      })
    }
  }
}
</script>
