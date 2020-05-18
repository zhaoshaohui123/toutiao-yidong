<template>
  <div class="search-history">
    <van-cell
      title="搜索历史"
    >
      <div v-if="isDeleteShow">
        <span @click="$emit('update-histories', [])">全部删除 </span>
        <span  @click="isDeleteShow = false">完成</span>
      </div>
       <van-icon v-else name="delete" @click="isDeleteShow = true"></van-icon>
      <!-- <van-icon name="delete" /> -->
    </van-cell>
    <van-cell
      :title="history"
      v-for="(history, index) in searchHistories"
      :key="index"
       @click="onDelete(history, index)"
    >
      <van-icon
        v-show="isDeleteShow"
        name="close"
      ></van-icon>
    </van-cell>
  </div>
</template>

<script>
// import { setItem } from '@/utils/storage'
export default {
  name: 'SearchHistory',
  components: {},
  props: {
    searchHistories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isDeleteShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onDelete (history, index) {
      // 如果是删除状态，则执行删除操作
      if (this.isDeleteShow) {
        this.searchHistories.splice(index, 1)

        // setItem('search-histories', this.searchHistories)
        return
      }
      this.$emit('search', history)
    }
  }
}
</script>

<style scoped lang="less"></style>
