<template lang="pug">
  .firm-index
    search(v-model="keywords" placeholder="输入客户名称、联系人、联系电话搜索" @search="onSearch")
    no-data(v-show="!loading && !testData.length")
    .supplier-list(v-if="testData.length")
      van-list(v-model="loading" :finished="finished" @load="onLoad")
        .supplier(v-for="(item,index) in testData" :key="index" @click="goDetail(item.id)")
          .supplier-parent
            .supplier-img
              img(src="../../../assets/images/null-header.png")
            .nulldiv
              .supplier-title
                span {{item.title}}
                van-button(plain size="mini" type="info") {{item.sell}}
              .supplier-name
                span {{item.name}}
                span |
                span {{item.phone}}
          p.supplier-p
            span 应收：¥{{item.shouldReceive}}
            span |
            span 实收：
              font() 实收：{{item.realReceive}}
          .line
</template>

<script>
  import Search from '@components/Search'
  export default {
    name: 'FirmInfoIndex',
    components: {
      Search
    },
    data () {
      return {
        keywords: null,
        pageNo: 1,
        // testData: [],
        colorRed: '#F44336',
        loading: false,
        finished: false,
        testData: [{
          id: 1,
          title: '深圳市研会科技有限公司1111111111111',
          sell: '销售:张三',
          name: '毛静云',
          phone: '18536272817',
          shouldReceive: '5000.00',
          realReceive: '4000.00'
        }, {
          id: 2,
          title: '深圳市研会科技有限公司1111111111111',
          sell: '销售:张三',
          name: '毛静云',
          phone: '18536272817',
          shouldReceive: '5000.00',
          realReceive: '4000.00'
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
        this.loading = false
        if (resetList) {
          this.testData = []
          this.pageNo = 1
        }
        // let data = await this.$api.teacher.queryNoticePage(this.getQuery())
        // if (resetList) {
        //   this.testData = data.list
        // } else {
        //   this.testData = this.testData.concat(data.list)
        // }
        // this.finished = !data.hasNextPage
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
        this.$router.push(`/manage/SupplierDetail?id=${id}`)
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
  .supplier
    &-list
      padding: 0 20px
    &-parent
      display: flex
      justify-content: center
      align-content: center
    &-title
      padding: 7px 0
      span
        display: inline-block
        width: 200px
        font-size: 16px
        color: #333333
        @include text-overflow
      button
        vertical-align: text-bottom
    &-img
      display: flex
      justify-content: center
      align-items: center
      margin-right: 26px
    &-name
      font-size: 13px
      color: rgba(155,155,155,1)
    &-p
      margin-top: 10px
      background: #F8FAFC
      border-radius: 2px
      font-size: 13px
      color: rgba(155,155,155,1)
      display: flex
      justify-content: space-between
      padding: 6px 20px
    .line
      border-bottom: 1px solid #EEEEEE
      margin-top: 10px
</style>
