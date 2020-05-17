<template>
  <div class="search-history">
    <van-cell
      title="搜索历史"
    >
      <div v-if="isDeleteShow">
        <span @click="searchHistories = []">全部删除 </span>
        <span  @click="isDeleteShow = false">完成</span>
      </div>
       <van-icon v-else name="delete" @click="isDeleteShow = true"></van-icon>
      <!-- <van-icon name="delete" /> -->
    </van-cell>
    <van-cell
      :title="history"
      v-for="(history, index) in searchHistories"
      :key="index"
       @click="onHistoryClick(history, index)"
    >
      <van-icon
        v-show="isDeleteShow"
        name="close"
      ></van-icon>
    </van-cell>
  </div>
</template>

<script>
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
    onHistoryClick (history, index) {
      // 如果是删除状态，则执行删除操作
      if (this.isDeleteShow) {
        this.searchHistories.splice(index, 1)
      } else {
        // 否则执行搜索操作
        this.onSearch(history)
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
