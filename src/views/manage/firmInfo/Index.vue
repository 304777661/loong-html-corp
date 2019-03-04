<template>
  <div class="notice">
    <search v-model="keywords" @search="onSearch"></search>
    <no-data v-show="!loading && !testData.length"/>
    <div class="supplier-list" v-if="testData.length">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <div class="supplier"
             v-for="(item,index) in testData"
             :key="index"
             @click="goDetail(item.id)">
          <div class="supplier-parent">
            <div class="supplier-img"><img src="../../../assets/images/null-header.png" alt=""></div>
            <div>
              <div class="supplier-title">深圳市研会科技有限公司&nbsp;</div>
              <p></p>
            </div>
          </div>

        </div>
      </van-list>
    </div>
    <div>12345</div>
  </div>
</template>

<script>
  import Search from '@components/Search'

  export default {
    components: {
      Search
    },
    data () {
      return {
        keywords: null,
        pageNo: 1,
        // testData: [],
        loading: false,
        finished: false,
        testData: [{
          id: 1,
          title: '1',
          content: '2',
          createdTime: '3'
        }]
      }
    },
    watch: {
      keywords (newVal) {
        if (!newVal) {
          this.loadData(true)
        }
      }
    },
    methods: {
      async loadData (resetList = false) {
        this.loading = true
        if (resetList) {
          this.testData = []
          this.pageNo = 1
        }
        let data = await this.$api.teacher.queryNoticePage(this.getQuery())
        if (resetList) {
          this.testData = data.list
        } else {
          this.testData = this.testData.concat(data.list)
        }
        this.finished = !data.hasNextPage
        this.loading = false
        this.pageNo++
      },
      onSearch () {
        this.loadData(true)
      },
      onLoad () {
        this.loadData()
      },
      goDetail (id) {
        this.$router.push(`/teacher/notice/detail?id=${id}`)
      },
      handleTabChange (tabIndex) {
        if (this.curTabIndex === tabIndex) {
          return
        }
        this.curTabIndex = tabIndex
        this.loadData(true)
      },
      getQuery () {
        return {
          noticeType: this.curTabIndex === 0 ? 'NOTICE' : 'SCHOOL_RULE',
          pageNo: this.pageNo,
          keywords: this.keywords,
          pageSize: this.$pageSize
        }
      }
    },
    async created () {
      // this.loadData(true)
    }
  }
</script>

<style scoped lang="sass">

  .supplier-list
    padding: 0 20px
  .supplier-parent
    display: flex
    justify-content: center
    align-content: center
  .supplier-title
    /*font-size: 22px*/
    /*color: #333333*/
    /*padding: 0 7px*/
    .supplier-img
    width: 24px
    height: 29px
    margin-right: 26px
</style>
